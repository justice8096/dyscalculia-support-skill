export interface Finding {
  file: string;
  line?: number;
  rule: string;
  severity: "error" | "warning" | "info";
  message: string;
  suggestion?: string;
}

export class Reporter {
  constructor(
    private format: "text" | "json",
    private verbose: boolean
  ) {}

  report(findings: Finding[], fileCounts: { css: number; html: number; content: number }): void {
    if (this.format === "json") {
      console.log(JSON.stringify({ findings, summary: this.summary(findings), fileCounts }, null, 2));
      return;
    }

    const errors = findings.filter(f => f.severity === "error");
    const warnings = findings.filter(f => f.severity === "warning");
    const infos = findings.filter(f => f.severity === "info");

    if (errors.length > 0) {
      console.log("\x1b[31m\u2718 ERRORS\x1b[0m");
      for (const f of errors) this.printFinding(f);
      console.log();
    }
    if (warnings.length > 0) {
      console.log("\x1b[33m\u26a0 WARNINGS\x1b[0m");
      for (const f of warnings) this.printFinding(f);
      console.log();
    }
    if (this.verbose && infos.length > 0) {
      console.log("\x1b[36m\u2139 INFO\x1b[0m");
      for (const f of infos) this.printFinding(f);
      console.log();
    }

    console.log("\x1b[1mSummary\x1b[0m");
    console.log(`  Files scanned: ${fileCounts.css} CSS, ${fileCounts.html} HTML/JSX, ${fileCounts.content} content`);
    console.log(`  Errors: ${errors.length}  Warnings: ${warnings.length}  Info: ${infos.length}`);

    if (findings.length === 0) {
      console.log("\n\x1b[32m\u2714 No dyscalculia accessibility issues found!\x1b[0m");
    }
  }

  private printFinding(f: Finding): void {
    const loc = f.line ? `${f.file}:${f.line}` : f.file;
    console.log(`  [${f.rule}] ${loc}`);
    console.log(`    ${f.message}`);
    if (f.suggestion) {
      console.log(`    \x1b[2m\u21b3 ${f.suggestion}\x1b[0m`);
    }
  }

  private summary(findings: Finding[]) {
    return {
      errors: findings.filter(f => f.severity === "error").length,
      warnings: findings.filter(f => f.severity === "warning").length,
      info: findings.filter(f => f.severity === "info").length,
    };
  }
}
