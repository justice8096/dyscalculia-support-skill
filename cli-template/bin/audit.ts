#!/usr/bin/env node
import { resolve, extname } from "path";
import { readdirSync, readFileSync, statSync, existsSync } from "fs";
import { CssRules } from "../src/rules/css";
import { HtmlRules } from "../src/rules/html";
import { ContentRules } from "../src/rules/content";
import { Reporter, Finding } from "../src/reporter";

const pkg = JSON.parse(readFileSync(resolve(__dirname, "..", "package.json"), "utf-8"));
const VERSION = pkg.version;

interface CliArgs {
  target: string;
  format: "text" | "json";
  verbose: boolean;
  help: boolean;
  version: boolean;
}

function parseArgs(): CliArgs {
  const args = process.argv.slice(2);
  const opts: CliArgs = {
    target: ".",
    format: "text",
    verbose: false,
    help: false,
    version: false,
  };

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case "--format":
        opts.format = args[++i] as "text" | "json";
        break;
      case "--verbose":
      case "-v":
        opts.verbose = true;
        break;
      case "--help":
      case "-h":
        opts.help = true;
        break;
      case "--version":
        opts.version = true;
        break;
      default:
        if (!args[i].startsWith("-")) {
          opts.target = args[i];
        }
    }
  }
  return opts;
}

function printHelp(): void {
  console.log(`
dyscalculia-audit v${VERSION}

Audit files for dyscalculia accessibility issues.

Usage:
  dyscalculia-audit [target] [options]

Arguments:
  target                 Directory or file to audit (default: ".")

Options:
  --format <text|json>   Output format (default: text)
  --verbose, -v          Show passing checks too
  --version              Show version
  --help, -h             Show help

Examples:
  dyscalculia-audit ./src
  dyscalculia-audit ./website --format json
  dyscalculia-audit ./docs --verbose
`);
}

function walkDir(dir: string, exts: string[]): string[] {
  const results: string[] = [];
  if (!existsSync(dir)) return results;

  const entries = readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = resolve(dir, entry.name);
    if (entry.isDirectory()) {
      if (["node_modules", ".git", "dist"].includes(entry.name)) continue;
      results.push(...walkDir(fullPath, exts));
    } else if (exts.includes(extname(entry.name).toLowerCase())) {
      results.push(fullPath);
    }
  }
  return results;
}

function main(): void {
  const opts = parseArgs();

  if (opts.version) {
    console.log(`dyscalculia-audit v${VERSION}`);
    return;
  }
  if (opts.help) {
    printHelp();
    return;
  }

  const target = resolve(opts.target);
  if (!existsSync(target)) {
    console.error(`Error: target not found: ${target}`);
    process.exit(1);
  }

  const isFile = statSync(target).isFile();
  const cssFiles = isFile && extname(target) === ".css" ? [target] : walkDir(target, [".css"]);
  const htmlFiles = isFile && [".html", ".htm"].includes(extname(target)) ? [target] : walkDir(target, [".html", ".htm", ".jsx", ".tsx", ".vue", ".svelte"]);
  const contentFiles = isFile && [".md", ".txt"].includes(extname(target)) ? [target] : walkDir(target, [".md", ".txt", ".mdx"]);

  const totalFiles = cssFiles.length + htmlFiles.length + contentFiles.length;
  if (totalFiles === 0) {
    console.log("No auditable files found (.css, .html, .jsx, .tsx, .vue, .svelte, .md, .txt, .mdx)");
    process.exit(0);
  }

  console.log(`\nScanning ${totalFiles} files in ${target}...\n`);

  const findings: Finding[] = [];

  for (const file of cssFiles) {
    findings.push(...CssRules.audit(file, readFileSync(file, "utf-8")));
  }
  for (const file of htmlFiles) {
    findings.push(...HtmlRules.audit(file, readFileSync(file, "utf-8")));
  }
  for (const file of contentFiles) {
    findings.push(...ContentRules.audit(file, readFileSync(file, "utf-8")));
  }

  const reporter = new Reporter(opts.format, opts.verbose);
  reporter.report(findings, { css: cssFiles.length, html: htmlFiles.length, content: contentFiles.length });

  const errors = findings.filter(f => f.severity === "error").length;
  if (errors > 0) process.exit(2);
  if (findings.filter(f => f.severity === "warning").length > 0) process.exit(1);
  process.exit(0);
}

main();
