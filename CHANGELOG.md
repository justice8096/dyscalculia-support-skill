<!-- SPDX-License-Identifier: CC0-1.0 -->

# Changelog

All notable changes to this skill are tracked here. Per the [Skill Versioning and Addendum Framework](https://github.com/justice8096/SoftwarePractices/blob/main/Skill-Versioning-and-Addendum-Framework.md), every change is classified by driver so downstream audit-artifact consumers can assess whether prior outputs need addendum filings.

Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) with **change-driver tags** appended per entry:

- `[authority]` — underlying regulation, standard, or evidence base changed
- `[defect]` — typo, broken citation, misspelled term, wrong CFR number, factual error
- `[structural]` — section restructure, new locale, new lifespan layer, new domain, new severity scale
- `[voice]` — wording refinement, tone adjustment, ambiguity fix, accessibility improvement

All four drivers affect admissibility / persuasive weight of downstream artifacts. Every change is tracked equally.

## [Unreleased]

## [1.3.1] — 2026-05-16

Architectural follow-up to v1.3.0 + encoding-defect fix. Two concerns shipped together because both relate to source-file integrity.

### Added `[structural]`
- `build.ts` now syncs root canonical (`commands/*.md` + `skills/*/SKILL.md`) from `source/` as part of `npm run build`. Closes the root-drift defect identified during v1.3.0 development: prior to this, the build wrote only to `dist/` and root canonical could diverge from source indefinitely. The new sync step reads `description` from `source/manifest.json`, preserves existing root frontmatter fields (`argument-hint`, `allowed-tools`), and replaces body content with `source/commands/*.md` / `source/skills/*.md`. Also runnable standalone via `npm run build:root-canonical`.
- `CONTRIBUTING.md` updated with explicit "do not edit root canonical directly" guidance and the root-drift history.

### Fixed `[defect]`
- Manifest and source markdown files shipped in v1.3.0 had double-encoded characters (`Ã©`, `Ã³`, `nÂ°`, `Comunidad-AutÃ³noma`, `â€"` for em-dash) introduced by an earlier version-bump step using Python's default `open(p)` on Windows (cp1252 default codepage). Repaired across `source/manifest.json` + all `source/commands/*.md` + `source/skills/*.md` + `source/templates/*.md` via `ftfy` + targeted cp1252→utf-8 round-trip for em-dash mojibake. All accented characters and em-dashes now stored as proper UTF-8 in source files; the new build-time root-canonical sync propagates clean encoding to root.
- `commands/*.md` and `skills/*/SKILL.md` regenerated from corrected source via the new sync step. Anyone who installed v1.3.0 saw the mojibake; reinstalling v1.3.1 fixes it.

## [1.3.0] — 2026-05-16

Path C resolution of the PR #5 / PR #6 FR/ES parallel-implementation problem. PR #5's source-file FR/ES expansion is now on `main` (rebased from `881ca48` → `4d3e26b`), root canonical (`commands/*` + `skills/*/SKILL.md`) is re-synced from `source/` for the first time since the marketplace scaffold (`c4b7f9d`), and PR #6's off-pipeline canonical edits are superseded by the source-driven regeneration.

### Added `[structural]`
- French locale (`--locale fr`) support across all four skills: Loi n° 2005-102, PAP (Circulaire n° 2015-016), PPS via MDPH/CDAPH, aménagements d'examens (Circulaire n° 2023-033) — *calculatrice across all exams* as the headline dyscalculia accommodation. RQTH workplace layer (AGEFIPH / FIPHFP) for adults.
- Spanish locale (`--locale es`, optional `--region <CCAA>`) support across all four skills: LOE/LOMLOE (Art. 71/72/79 bis), ACNEAE/DEA framework (**discalculia → DEA, not NEE — common compliance error**), ACNS (Adaptaciones Curriculares No Significativas), EBAU/EvAU exam accommodations, 17-CCAA regional variation. RDL 1/2013 workplace layer with ≥33% certificado de discapacidad threshold.
- French Number-Word Irregularity coverage (`remediation-strategies` skill): TEDI-MATH-linked intervention targeting the 60-99 vigesimal/transcoding range (soixante-dix, quatre-vingts, quatre-vingt-dix-neuf); contrast with regular Belgian/Swiss forms (septante, huitante/octante, nonante).
- Spanish transparent-base-10 fluency-vs-accuracy intervention framing: dyscalculic learners in Spanish typically show fluency rather than accuracy deficits; interventions target processing speed.
- LOMLOE Art. 102 (formación permanente del profesorado / Continuing Professional Development) added to ES legal framework table and to `/dyscalculia-audit` Ethical Standards & Training rubric.
- Audit-report provenance block in `source/templates/audit-report-template.md` — every generated audit now starts with skill version, commit hash, generation date, sources-current-as-of, locale, region.
- `CHANGELOG.md` adopting the [Skill Versioning and Addendum Framework](https://github.com/justice8096/SecondBrainData) four-driver classification.

### Added `[authority]`
- Inline "*Sources current as of 2026-05*" markers with authority-version pins per major FR/ES section: Circulaire 2015-016 (specific date `22 janvier 2015`), Circulaire 2023-033 (`23 février 2023`), Loi n° 2005-102 (`11 février 2005`), LOMLOE (Ley Orgánica 3/2020), Real Decreto Legislativo 1/2013, ICD-11 6A03.2 / DSM-5 315.1 diagnostic versions, TEDI-MATH publisher (De Boeck Université), EVAMAT publisher (TEA Ediciones), Método ABN attribution (Jaime Martínez Montero).

### Changed `[structural]`
- `/dyscalculia-audit` command accepts `--locale {us,fr,es}` and (ES-only) `--region <CCAA>` flags; audit output file naming now includes locale suffix.
- `/content-accessibility-check` command is now locale-aware for typography and number-format conventions.
- Root canonical files (`commands/*.md`, `skills/*/SKILL.md`) re-derived from `source/*` for the first time since `c4b7f9d`. Root description metadata now reflects all three jurisdictions, matching `source/manifest.json`.

### Fixed `[defect]`
- Root canonical files had drifted from `source/` since the marketplace scaffold (`c4b7f9d`): they were missing the v1.1.0 W3C COGA additions and the v1.2.0 neurodevelopmental cognitive disorder reframe. The Stage 2b sync brings root forward to match source. **Downstream audit consumers using prior v1.2.x root canonical files should re-run audits — content was stale.**

### Process notes
- PR #6 (`af74633`, merged 2026-05-13) added FR/ES content directly to canonical files, bypassing `source/`. The root-canonical sync overwrites those edits with source-derived content. PR #6's two specific factual contributions — LOMLOE Art. 102 documentation and the vigesimal Belgian/Swiss contrast — have been backported to source.
- PR #5 (`881ca48`) is the substantive source-file FR/ES implementation; rebased onto current `main` as `4d3e26b` with zero conflicts (the two PRs touched disjoint paths). PR #5 will be closed after this release ships; the rebased branch (`feat/locale-fr-es`) is the integration target for v1.3.0.

## [1.2.0] — 2026-05-XX (preparing)

**v1.2.0 was tagged on a prior commit; documenting it here for changelog continuity.**

### Changed `[structural]`
- Reframed dyscalculia throughout skill content as a **neurodevelopmental cognitive disorder** rather than a learning-deficit-to-remediate. Accommodations are now positioned as cognitive prosthetics compensating for persistent processing-architecture differences (per Butterworth, Dehaene, Menon neuroscience evidence).
- Added cognitive-disorder accommodation checklist subsection to `standards-compliance` skill.

### Added `[structural]`
- W3C COGA dimensions: number-to-word equivalents, rounding guidance, percentage-as-natural-frequency.
- GOV.UK dyscalculia design guidance: chart-type restrictions (bar charts preferred over pie/radial; data labels required; no 3D effects; 3-5 series max).
- Marketplace scaffolding (`plugin.json`, marketplace metadata).

### Changed `[voice]`
- License migrated from MIT to CC0 1.0 Universal across all source files.

### Added `[structural]`
- Multi-format build system (`build.ts`) generating 6 output formats: `claude-plugin`, `mcp-server`, `openai`, `n8n`, `prompts`, `cli`.
- 42-test integration suite across 7 test categories (`test-build.ts`).
- CI/CD pipeline targeting Node 18, 20, 22.

## [1.1.0] — 2026-05-XX (retroactively documented)

### Changed `[authority]`
- MCP SDK security upgrade addressing the prototype-pollution risk vector in older versions.

### Added `[structural]`
- SBOM (CycloneDX) generation via `npm run sbom`.
- `SECURITY.md` vulnerability disclosure policy.

## [1.0.0] — Initial Release

### Added `[structural]`
- Initial release covering IDEA Math SLD requirements, Section 504 accommodations for dyscalculia, NCTM five content + five process standards, tiered assessment (screening / diagnostic / comprehensive), CRA methodology framing, audit-report generation.

---

## Change-driver workflow

When making a change:

1. **Classify the driver** — one of `[authority]`, `[defect]`, `[structural]`, `[voice]`.
2. **Cite the trigger** — for `[authority]`: name the law/standard/study that changed. For `[defect]`: describe what was wrong. For `[structural]`/`[voice]`: explain why.
3. **Estimate addendum burden** — would any prior generated audit/IEP/remediation-plan need addendum filings as a result of this change? If yes, flag it; the skill's `/dyscalculia-addendum` command (planned) will use this signal to identify affected artifacts.

## Audit-artifact provenance

Every audit report, IEP draft, remediation plan, or accommodation justification generated by this skill must include a provenance block of the form:

```
Generated YYYY-MM-DD by dyscalculia-support-skill vX.Y.Z (<git-short-hash>)
Sources current as of YYYY-MM except where individual sections note otherwise.
Skill changelog: https://github.com/justice8096/dyscalculia-support-skill/blob/main/CHANGELOG.md
```

This is the linchpin of the addendum-filing workflow. Without it, the addendum command cannot identify which artifacts are affected by which changes.

## Related framework documentation

- [Skill Versioning and Addendum Framework](https://github.com/justice8096/SecondBrainData) — the cross-skill engineering principle this CHANGELOG implements.
- [Master Task List entry 17](https://github.com/justice8096/SecondBrainData) — rollout plan to other inspection-and-documentation skills (`dyslexia-support-skill`, AI compliance, security audits, etc.).
