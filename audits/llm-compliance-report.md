# LLM Compliance & Transparency Report
## Web Site Audit Skill (dyscalculia-support-skill + dyslexia-support-skill)

**Report Date**: 2026-04-15
**Auditor**: LLM Governance & Compliance Team
**Project**: Web Site Audit Skill (Claude-assisted development)
**Framework**: EU AI Act Art. 25, OWASP LLM Top 10 2025, NIST SP 800-218A
**Audit Type**: POST-FIX Re-audit (5th pass)

---

## Executive Summary

**Overall LLM Compliance Score: 82/100 — GOOD**

| Dimension | Before | After | Delta | Status |
|-----------|--------|-------|-------|--------|
| System Transparency | 80 | 82 | +2 | GOOD |
| Training Data Disclosure | 75 | 75 | — | GOOD |
| Risk Classification | 85 | 90 | +5 | EXCELLENT |
| Supply Chain Security | 60 | 72 | +12 | GOOD |
| Consent & Authorization | 95 | 95 | — | EXCELLENT |
| Sensitive Data Handling | 90 | 90 | — | EXCELLENT |
| Incident Response | 78 | 85 | +7 | GOOD |
| Bias Assessment | 60 | 65 | +5 | DEVELOPING |
| **Overall** | **78** | **82** | **+4** | **GOOD** |

---

## Dimension Scores

### 1. System Transparency — 82/100

The project discloses AI involvement via commit messages referencing Claude-assisted development. The contribution analysis report documents human-vs-AI split. README credits the author but does not explicitly state "AI-assisted development" at the top level. Per-file attribution is not present.

**Improvement**: Add "Built with Claude AI assistance" to both READMEs.

### 2. Training Data Disclosure — 75/100

The skill references OWASP, NIST, CWE databases, and EU AI Act in audit criteria. Model provider (Claude/Anthropic) is identifiable from commit history. However, exact model version is not documented, and reference document versions lack dates.

**Improvement**: Add model version and reference dates to audit criteria headers.

### 3. Risk Classification — 90/100

All findings now have accurate CWE mappings with severity validated against CVSS conventions. The MCP SDK vulnerability was correctly classified as HIGH and resolved. Minimal false positives — all accepted-risk items have clear justification.

### 4. Supply Chain Security — 72/100

Significant improvement this cycle: MCP SDK upgraded from vulnerable ^0.6.0 to ^1.6.0, resolving the HIGH ReDoS vulnerability. Both repos have lockfiles and clean `npm audit`. However, no SBOM, no CI/CD pipeline, and no SECURITY.md.

**Improvement**: Generate SBOM, add GitHub Actions, add SECURITY.md.

### 5. Consent & Authorization — 95/100

The skill is fully opt-in (invoked only by explicit user command). Build tool requires manual execution (`tsx build.ts`). No destructive actions without user confirmation. The `--push` flag in audit scripts prompts for confirmation.

### 6. Sensitive Data Handling — 90/100

No secrets, API keys, or PII in source code or outputs. Scan reports contain only file paths and code patterns, no sensitive data. `.gitignore` excludes `.env` files. The only gap: generated YAML prompts don't explicitly document data handling policy.

### 7. Incident Response — 85/100

All findings include specific remediation guidance. The fix-then-reaudit workflow was successfully executed this cycle (MCP SDK upgrade → rebuild → retest → 84/84 passing). Error handling in build.ts surfaces failures cleanly with descriptive messages.

**Improvement from last audit**: The remediation cycle for CWE-1333 was cleanly documented with before/after validation.

### 8. Bias Assessment — 65/100

The skill covers React, Angular, and vanilla JS example components. The build system treats all 6 output formats (Claude, OpenAI, n8n, prompts, MCP, CLI) equitably with the same test suite applied to each. However, no formal false positive/negative rate measurement exists, and detection coverage is not quantified.

**Improvement**: Add FP/FN tracking to test suite; document known detection gaps.

---

## Recommendations

1. **Add SBOM generation** to build scripts (CycloneDX format)
2. **Add CI/CD pipeline** with GitHub Actions (build + test + audit)
3. **Document AI involvement** explicitly in both READMEs
4. **Add SECURITY.md** with vulnerability disclosure policy
5. **Track FP/FN rates** in test suite for bias assessment

---

## Regulatory Roadmap

| Regulation | Current Status | Gap |
|-----------|---------------|-----|
| EU AI Act Art. 25 | Partial compliance | SBOM, CI/CD provenance |
| EU AI Act Art. 52 | Partial compliance | Explicit AI disclosure in docs |
| NIST SP 800-218A | Partial compliance | SBOM, signed artifacts |
| ISO 27001 | Good coverage | SECURITY.md, incident logging |
| SOC 2 | Good coverage | CI/CD audit trail |

**Next audit recommended**: After SBOM + CI/CD implementation
