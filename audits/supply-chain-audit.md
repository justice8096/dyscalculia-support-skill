# Supply Chain Security Audit
## Web Site Audit Skill (dyscalculia-support-skill + dyslexia-support-skill)

**Audit Date**: 2026-04-15
**Audit Type**: Fifth-pass re-audit

---

## Summary

| Check | dyscalculia | dyslexia |
|-------|------------|----------|
| npm audit | ✅ 0 vulnerabilities | ✅ 0 vulnerabilities |
| Lockfile present | ✅ package-lock.json | ✅ package-lock.json |
| .gitignore coverage | ✅ node_modules, dist, .env | ✅ node_modules, dist, .env |
| LICENSE | ✅ MIT | ✅ MIT |
| SBOM | ❌ Missing | ❌ Missing |
| CI/CD pipeline | ❌ Missing | ❌ Missing |
| SECURITY.md | ❌ Missing | ❌ Missing |
| Signed commits | ❌ Not configured | ❌ Not configured |

**SLSA Level: L1** (version-controlled source, scripted build)
**Result: CONDITIONAL PASS** — 3 open MEDIUM items

---

## Dependency Analysis

### dyscalculia-support-skill

| Package | Version Range | Type | Pinned in Lockfile |
|---------|--------------|------|-------------------|
| @types/node | ^20.10.0 | devDep | ✅ Yes |
| typescript | ^5.3.3 | devDep | ✅ Yes |
| tsx | ^4.7.0 | devDep | ✅ Yes |
| zod | ^3.22.4 | devDep | ✅ Yes |

**Total dependencies**: 4 (all devDependencies, 0 runtime)
**Vulnerabilities**: 0

### dyslexia-support-skill

| Package | Version Range | Type | Pinned in Lockfile |
|---------|--------------|------|-------------------|
| @types/node | ^20.0.0 | devDep | ✅ Yes |
| @types/js-yaml | ^4.0.5 | devDep | ✅ Yes |
| glob | ^10.0.0 | devDep | ✅ Yes |
| js-yaml | ^4.1.0 | devDep | ✅ Yes |
| typescript | ^5.0.0 | devDep | ✅ Yes |
| tsx | ^4.0.0 | devDep | ✅ Yes |

**Total dependencies**: 6 (all devDependencies, 0 runtime)
**Vulnerabilities**: 0

### MCP Server dist (both repos)

| Package | Version | Status |
|---------|---------|--------|
| @modelcontextprotocol/sdk | ^1.6.0 | ✅ Upgraded from ^0.6.0 (resolved GHSA-8r9q-7v3j-jr4g) |
| zod | ^3.22.4 | ✅ Clean |

---

## SLSA Assessment

| SLSA Requirement | Level | Status |
|-----------------|-------|--------|
| Source — Version controlled | L1 | ✅ Git repos |
| Build — Scripted build | L1 | ✅ `tsx build.ts` |
| Build — Build service | L2 | ❌ No CI/CD |
| Build — Ephemeral environment | L3 | ❌ No CI/CD |
| Provenance — Available | L1 | ❌ No SBOM |
| Provenance — Authenticated | L2 | ❌ No signatures |

**Current Level: SLSA L1**

---

## Open Issues

| # | Issue | Severity | Recommendation |
|---|-------|----------|---------------|
| 1 | No SBOM artifact | MEDIUM | Generate CycloneDX SBOM with `npx @cyclonedx/cyclonedx-npm --output-file sbom.cdx.json` |
| 2 | No CI/CD pipeline | MEDIUM | Add GitHub Actions workflow for build + test + audit |
| 3 | No SECURITY.md | LOW | Add vulnerability disclosure policy |

---

## Resolved Since Last Audit

| Issue | Resolution |
|-------|-----------|
| MCP SDK ^0.6.0 (HIGH vuln) | ✅ Upgraded to ^1.6.0 in build template |
