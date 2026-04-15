# SAST/DAST Scan Report
## Web Site Audit Skill (dyscalculia-support-skill + dyslexia-support-skill)

**Scan Date**: 2026-04-15
**Scan Scope**: `D:\dyscalculia-support-skill`, `D:\dyslexia-support-skill`, `D:\SecondBrainData\_temp\web-site-audit-src`
**Scan Type**: Fifth-pass re-audit (post MCP SDK upgrade + TypeScript fixes)

---

## Summary

| Severity | Count | Change |
|----------|-------|--------|
| CRITICAL | 0 | — |
| HIGH | 0 | **−1** (MCP SDK ReDoS resolved) |
| MEDIUM | 0 | — |
| LOW | 3 | unchanged |
| INFO | 1 | unchanged |
| **Total** | **4** | **−1** |

**Result: PASS** — No critical or high findings. All LOW/INFO are accepted risks.

---

## Findings

### LOW-1: Path Traversal Pattern in MCP Knowledge Loader
- **CWE**: CWE-22 (Improper Limitation of a Pathname to a Restricted Directory)
- **Repos**: Both
- **Location**: `dist/mcp-server/src/knowledge/loader.ts` (generated)
- **Pattern**: `resolve(__dirname, "../../knowledge/skills/" + skillId + ".md")`
- **Risk**: `skillId` is sourced from `manifest.json` (developer-controlled), not user input. The MCP server only loads skills defined in the manifest.
- **Status**: ACCEPTED RISK — no user-supplied path components

### LOW-2: Caret Dependency Ranges
- **CWE**: CWE-1357 (Reliance on Insufficiently Trustworthy Component)
- **Repos**: Both
- **Pattern**: `"typescript": "^5.3.3"`, `"tsx": "^4.7.0"`, etc.
- **Risk**: All are devDependencies. `package-lock.json` present in both repos pins actual resolved versions.
- **Status**: ACCEPTED RISK — lockfile mitigates

### LOW-3: No Signed Commits
- **CWE**: CWE-345 (Insufficient Verification of Data Authenticity)
- **Repos**: Both
- **Risk**: Commits are not GPG-signed. Single-developer project mitigates impersonation risk.
- **Status**: ACCEPTED RISK

### INFO-1: JSON.parse on Local Manifest
- **CWE**: CWE-502 (Deserialization of Untrusted Data)
- **Repos**: Both
- **Location**: `build.ts` line ~154 (dyslexia), ~234 (dyscalculia)
- **Pattern**: `JSON.parse(readFileSync(manifestPath, "utf-8"))`
- **Risk**: Manifest is a local file under developer control. Build tool only, never exposed to network input.
- **Status**: ACCEPTED RISK

---

## Resolved Since Last Audit

| Finding | CWE | Severity | Resolution |
|---------|-----|----------|------------|
| MCP SDK ^0.6.0 ReDoS vulnerability | CWE-1333 | **HIGH** | Upgraded to ^1.6.0 in `build.ts` template + migrated to `server.tool()` API |
| TypeScript type predicate errors | CWE-704 | LOW | Added index signatures to 4 interfaces in dyscalculia `build.ts` |
| tsconfig rootDir mismatch | CWE-710 | LOW | Changed dyslexia `tsconfig.json` rootDir from `"./src"` to `"."` |

---

## Checks Performed

| Check | Result |
|-------|--------|
| Hardcoded secrets/API keys | ✅ None found |
| SQL/Command/XSS injection | ✅ None found |
| eval / new Function / child_process | ✅ None found |
| ReDoS-vulnerable regex | ✅ None found |
| Unsafe deserialization | ✅ Only local manifest (INFO) |
| Weak cryptography (MD5/SHA1) | ✅ Only in node_modules type defs (not project code) |
| innerHTML / dangerouslySetInnerHTML | ✅ None in examples |
| Unsafe event handlers in HTML | ✅ None found |
| Zod input validation in MCP tools | ✅ All 8 tools validate input (4 per repo) |
