# CWE Mapping Report
## Web Site Audit Skill (dyscalculia-support-skill + dyslexia-support-skill)

**Report Date**: 2026-04-15
**Audit Type**: Fifth-pass re-audit

---

## Summary

| Metric | Value |
|--------|-------|
| Total CWEs tracked | 7 |
| Resolved this cycle | 3 |
| Open (accepted risk) | 3 |
| Open (action needed) | 1 |

**Result: PASS** — No critical/high CWEs open. 1 MEDIUM (supply chain best practice, not code vulnerability).

---

## CWE Inventory

### Resolved This Cycle

| CWE | Name | Severity | Finding | Resolution |
|-----|------|----------|---------|------------|
| CWE-1333 | Inefficient Regular Expression Complexity | **HIGH** | MCP SDK ^0.6.0 ReDoS (GHSA-8r9q-7v3j-jr4g) | Upgraded to ^1.6.0, migrated to `server.tool()` API |
| CWE-704 | Incorrect Type Conversion or Cast | LOW | Type predicate errors in dyscalculia `build.ts` | Added `[key: string]: unknown` index signatures |
| CWE-710 | Improper Adherence to Coding Standards | LOW | dyslexia `tsconfig.json` rootDir mismatch | Changed rootDir from `"./src"` to `"."` |

### Open — Accepted Risk

| CWE | Name | Severity | Finding | Justification |
|-----|------|----------|---------|---------------|
| CWE-22 | Path Traversal | LOW | `../../knowledge/skills/` + skillId in loader | skillId from manifest (trusted), not user input |
| CWE-502 | Deserialization of Untrusted Data | INFO | `JSON.parse` on local manifest file | Local build tool, file under developer control |
| CWE-1357 | Insufficiently Trustworthy Component | LOW | Caret dep ranges | devDeps only, lockfile pins versions |

### Open — Needs Action

| CWE | Name | Severity | Finding | Recommendation |
|-----|------|----------|---------|---------------|
| CWE-345 | Insufficient Verification of Data Authenticity | LOW | No signed commits | Configure GPG signing |

---

## Compliance Framework Mapping

| CWE | OWASP Top 10 | OWASP LLM Top 10 | NIST 800-53 | EU AI Act | ISO 27001 | SOC 2 | MITRE ATT&CK | MITRE ATLAS |
|-----|-------------|-------------------|-------------|-----------|-----------|-------|-------------|-------------|
| CWE-1333 ✅ | — | LLM04 (Model DoS) | SI-10 | Art. 25 | A.8.26 | CC6.1 | T1499 | — |
| CWE-704 ✅ | — | — | SA-11 | — | A.8.28 | CC7.1 | — | — |
| CWE-710 ✅ | — | — | SA-11 | — | A.8.28 | CC7.1 | — | — |
| CWE-22 | A01 (Broken Access) | — | AC-6 | — | A.8.3 | CC6.1 | T1083 | — |
| CWE-502 | A08 (Integrity) | LLM05 (Supply Chain) | SI-10 | Art. 25 | A.8.26 | CC6.1 | T1059 | AML.T0043 |
| CWE-1357 | A06 (Vulnerable Components) | LLM05 (Supply Chain) | SA-12 | Art. 25 | A.15.1 | CC6.6 | T1195 | AML.T0010 |
| CWE-345 | — | — | SC-8 | — | A.8.24 | CC6.6 | T1557 | — |

---

## Aggregate Compliance Status

| Framework | Coverage | Status |
|-----------|----------|--------|
| OWASP Top 10 2021 | 3/10 categories touched | ✅ No open high/critical |
| OWASP LLM Top 10 2025 | 2/10 categories touched | ✅ LLM04 resolved (SDK upgrade) |
| NIST SP 800-53 | 6 controls mapped | ✅ All addressed |
| EU AI Act Art. 25 | 3 findings mapped | ✅ All resolved or accepted |
| ISO 27001 | 5 controls mapped | ✅ All addressed |
| SOC 2 | 3 criteria mapped | ✅ All addressed |
| MITRE ATT&CK | 4 techniques mapped | ✅ All mitigated |
| MITRE ATLAS | 2 techniques mapped | ✅ All mitigated |
