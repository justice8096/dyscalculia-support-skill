import { Finding } from "../reporter";

export class ContentRules {
  static audit(file: string, content: string): Finding[] {
    const findings: Finding[] = [];
    const lines = content.split("\n");

    // Inconsistent number formats
    const commaNumbers = content.match(/\b\d{1,3}(,\d{3})+\b/g) || [];
    const bareNumbers = content.match(/\b\d{4,}\b/g)?.filter(
      n => !commaNumbers.some(c => c.replace(/,/g, "") === n)
    ) || [];
    if (commaNumbers.length > 0 && bareNumbers.length > 0) {
      findings.push({
        file, rule: "consistent-number-format", severity: "warning",
        message: `Inconsistent formatting: ${commaNumbers.length} formatted vs ${bareNumbers.length} unformatted large numbers`,
        suggestion: "Use consistent formatting for all large numbers",
      });
    }

    // Unformatted large numbers
    for (let i = 0; i < lines.length; i++) {
      const matches = lines[i].match(/\b\d{5,}\b/g);
      if (matches) {
        for (const num of matches) {
          if (!/^\d{4}$/.test(num)) {
            findings.push({
              file, line: i + 1, rule: "format-large-numbers", severity: "warning",
              message: `Large number "${num}" without formatting is hard to parse`,
              suggestion: "Add thousand separators or break into readable groups",
            });
          }
        }
      }
    }

    // Number-dense content without visual aids
    const numberCount = (content.match(/\b\d+\.?\d*\b/g) || []).length;
    const words = content.split(/\s+/).length;
    if (words > 100 && numberCount / words > 0.15) {
      const hasTable = content.includes("|") || content.includes("<table");
      const hasChart = /chart|graph|visual|diagram/i.test(content);
      if (!hasTable && !hasChart) {
        findings.push({
          file, rule: "add-visual-aids", severity: "info",
          message: `High number density (${(numberCount / words * 100).toFixed(0)}%) without visual aids`,
          suggestion: "Add tables, charts, or diagrams to contextualize numerical data",
        });
      }
    }

    // Multi-step calculations without breakdown
    for (let i = 0; i < lines.length; i++) {
      const ops = (lines[i].match(/[+\-*/=]/g) || []).length;
      if (ops >= 4) {
        findings.push({
          file, line: i + 1, rule: "break-complex-math", severity: "warning",
          message: "Line contains a complex expression with multiple operations",
          suggestion: "Break into smaller steps with intermediate results labeled clearly",
        });
      }
    }

    // Wall of numbers without headings
    if (numberCount > 20 && !content.match(/^#{1,6}\s/m) && !content.match(/<h[1-6]/i)) {
      findings.push({
        file, rule: "use-headings", severity: "warning",
        message: "Number-heavy content without headings is very difficult for dyscalculic users",
        suggestion: "Add section headings to help users navigate and contextualize numbers",
      });
    }

    // Mixed percentages and fractions
    const percents = (content.match(/%/g) || []).length;
    const fractions = (content.match(/\b\d+\/\d+\b/g) || []).length;
    if (percents > 0 && fractions > 0) {
      findings.push({
        file, rule: "consistent-proportions", severity: "info",
        message: "Mixed use of percentages and fractions may confuse dyscalculic readers",
        suggestion: "Pick one format (%, fractions, or decimals) and use consistently",
      });
    }

    return findings;
  }
}
