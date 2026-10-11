import { Finding } from "../reporter";

export class HtmlRules {
  static audit(file: string, content: string): Finding[] {
    const findings: Finding[] = [];
    const lines = content.split("\n");

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const ln = i + 1;

      // Tables without headers
      if (/<table/i.test(line)) {
        const block = lines.slice(i, i + 20).join("\n");
        if (!/<th[\s>]/i.test(block)) {
          findings.push({
            file, line: ln, rule: "table-headers", severity: "warning",
            message: "Data table without header cells (<th>) makes numbers harder to contextualize",
            suggestion: "Add <th> elements with scope attributes for row/column headers",
          });
        }
      }

      // Bare large numbers without formatting
      if (/>\s*\d{5,}\s*</.test(line)) {
        findings.push({
          file, line: ln, rule: "format-large-numbers", severity: "warning",
          message: "Large numbers without formatting (commas, spaces) are hard to read",
          suggestion: "Format with thousand separators (e.g., 1,000,000 or 1 000 000)",
        });
      }

      // Math images without alt
      if (/<img\b[^>]*(?:math|equation|formula|graph|chart)/i.test(line) && !line.includes("alt=")) {
        findings.push({
          file, line: ln, rule: "math-img-alt", severity: "error",
          message: "Mathematical images must have descriptive alt text",
          suggestion: "Describe what the equation/graph shows, not just its visual appearance",
        });
      }

      // Dense inline math notation
      if (/\$.*[+\-*/=<>].*[+\-*/=<>].*\$/g.test(line)) {
        findings.push({
          file, line: ln, rule: "break-complex-math", severity: "info",
          message: "Dense mathematical expressions can overwhelm dyscalculic users",
          suggestion: "Break complex expressions into smaller, labeled steps",
        });
      }
    }

    // Missing lang attribute
    if (content.includes("<html") && !/<html[^>]*lang\s*=/i.test(content)) {
      findings.push({
        file, rule: "html-lang", severity: "warning",
        message: "Missing lang attribute on <html> element",
        suggestion: "Add lang attribute for proper number formatting and screen reader support",
      });
    }

    return findings;
  }
}
