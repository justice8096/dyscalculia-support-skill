import { Finding } from "../reporter";

export class CssRules {
  static audit(file: string, content: string): Finding[] {
    const findings: Finding[] = [];
    const lines = content.split("\n");

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const ln = i + 1;

      // Small font sizes on number-heavy elements
      const fsMatch = line.match(/font-size\s*:\s*(\d+(?:\.\d+)?)(px|pt|em|rem)/i);
      if (fsMatch) {
        const size = parseFloat(fsMatch[1]);
        const unit = fsMatch[2].toLowerCase();
        if ((unit === "px" && size < 14) || (unit === "pt" && size < 12) ||
            ((unit === "em" || unit === "rem") && size < 0.875)) {
          findings.push({
            file, line: ln, rule: "min-font-size", severity: "warning",
            message: `Font size ${size}${unit} is below recommended minimum for dyscalculic users`,
            suggestion: "Numbers and mathematical content should be at least 14px/12pt",
          });
        }
      }

      // Proportional numbers cause misalignment
      if (/font-variant-numeric\s*:\s*proportional-nums/i.test(line)) {
        findings.push({
          file, line: ln, rule: "use-tabular-nums", severity: "warning",
          message: "Proportional numbers cause misalignment in columns",
          suggestion: "Use font-variant-numeric: tabular-nums for aligned number columns",
        });
      }

      // Right-aligned text may cause digit tracking issues
      if (/text-align\s*:\s*right/i.test(line)) {
        findings.push({
          file, line: ln, rule: "number-alignment", severity: "info",
          message: "Right-aligned text may cause digit tracking issues for dyscalculic users",
          suggestion: "Consider decimal alignment or tabular layout for number columns",
        });
      }

      // Insufficient line-height for mathematical content
      const lhMatch = line.match(/line-height\s*:\s*(\d+(?:\.\d+)?)/);
      if (lhMatch) {
        const lh = parseFloat(lhMatch[1]);
        if (lh > 0 && lh < 1.5) {
          findings.push({
            file, line: ln, rule: "min-line-height", severity: "warning",
            message: `Line-height ${lh} is below 1.5 recommended for mathematical content`,
            suggestion: "Use line-height of at least 1.5 for better number readability",
          });
        }
      }

      // Color-only differentiation for numbers
      if (/color\s*:.*(?:red|green)\b/i.test(line) && !/text-decoration|font-weight|border/i.test(line)) {
        findings.push({
          file, line: ln, rule: "no-color-only", severity: "info",
          message: "Relying on color alone (red/green) may not be accessible",
          suggestion: "Add icons, labels, or patterns alongside color for positive/negative values",
        });
      }
    }

    return findings;
  }
}
