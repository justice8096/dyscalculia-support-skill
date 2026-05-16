---
description: Run a comprehensive compliance audit on a project/curriculum against NCTM, IDEA, and Section 504 standards (US, default) or Loi 2005-102 / PAP / PPS / Circulaire 2023-033 (France, --locale fr) or LOE/LOMLOE / ACNEAE / DEA / ACNS (Spain, --locale es, with optional --region for Comunidad Autónoma). Generates detailed report with specific remediation paths; FR/ES audits include US crosswalk.
argument-hint: <project-name> [scope-description]
allowed-tools: [Read, Glob, Grep, Bash, Write, Edit]
---
# /dyscalculia-audit

Audit a dyscalculia program, tool, curriculum, or educational initiative for compliance with US (IDEA, Section 504, NCTM, ADA), French (Loi 2005-102, PAP, PPS, Circulaire 2023-033, RQTH), or Spanish (LOE/LOMLOE, ACNEAE/DEA, ACNS, RDL 1/2013) standards. Locale-aware audit checklists.

## Usage

```
/dyscalculia-audit <project-name> [optional: scope description] [--locale us|fr|es] [--region <ccaa>]
```

**`--locale`** selects the legal framework (default: `us`):
- `us` — United States (IDEA, Section 504, NCTM, ADA workplace)
- `fr` — France (Loi 2005-102, PAP/PPS, Circulaire 2023-033 — calculatrice for all exams, RQTH for workplace)
- `es` — Spain (LOE/LOMLOE, ACNEAE/DEA, ACNS, EBAU/EvAU adaptations, RDL 1/2013 for workplace)

**`--region`** (only when `--locale es`): Comunidad Autónoma for region-specific Spanish legislation.

## What This Command Does

1. **Creates audit directory structure**: `audits/` subdirectory is created if not present
2. **Generates comprehensive audit report**: Detailed markdown file documenting findings, scores, and remediation roadmap
3. **File naming**: `audits/Dyscalculia-Compliance-Audit-<project-name>-<YYYY-MM-DD>.md`

## Audit Scope

The audit evaluates across these domains. **Locale-specific accents** noted per domain.

- **Math Instruction Alignment** (25% weight): CRA fidelity, number sense emphasis, multisensory strategies, program selection
  - locale=us: TouchMath, Number Worlds, Stern, Singapore Math adaptations
  - locale=fr: TEDI-MATH-linked, Singapour adapté, MathÉval, explicit instruction on French number-word irregularities (soixante-dix, quatre-vingts)
  - locale=es: PROCALCULO-linked, Smartick, regletas Cuisenaire, leveraging transparent base-10 system
- **Assessment & Evaluation** (20% weight): Comprehensive identification, progress monitoring frequency, assessment instruments
  - locale=us: KeyMath-3, TEMA-3, WRAT-5, WISC-V US norms
  - locale=fr: TEDI-MATH, Zareki-R, BMT-i, WISC-V French norms — administered via bilan orthophonique
  - locale=es: PROCALCULO, TEDI-MATH ES, Evamat, WISC-V Spanish norms — administered by orientador/a or EOEP
- **Plan Compliance** (20% weight): Legal requirement compliance, goal specificity, accommodation appropriateness, documentation
  - locale=us: IEP/504 compliance with IDEA + Section 504
  - locale=fr: PAP compliance with Circulaire 2015-016 template; PPS via MDPH where severe; aménagements d'examens per Circulaire 2023-033 with **calculatrice across all exams** as headline accommodation
  - locale=es: ACNS pathway (NOT Dictamen/ACS unless comorbid NEE — common compliance error); Informe Psicopedagógico completeness
- **Instructional Methodology** (15% weight): Evidence-based practices, manipulative implementation, anxiety management, Kosc subtype consideration
- **Progress Monitoring** (10% weight): Data collection frequency, multiple measures, decision rules, intervention adjustment
- **Ethical Standards & Training** (10% weight): Non-discrimination, confidentiality, professional development, family collaboration; **locale-specific**: FR — CAPPEI for specialized roles, formation continue for general staff; ES — LOMLOE Art. 102 *formación permanente del profesorado* requirements; US — state certification + IDEA-mandated personnel preparation

**FR/ES audits include US crosswalk references** so readers familiar with US legal framework can compare.

## Report Contents

Each audit report includes:

1. **Metadata Table**: Project info, audit date, standards, scope
2. **Executive Summary**: Overview with composite score and interpretation
3. **Findings Summary**: CRITICAL/HIGH/MEDIUM/LOW severity grouping
4. **Compliance by Domain Table**: Percent compliance across all domains
5. **Detailed Findings**: F-001, F-002, etc., with Standard, Severity, Category, Description, Impact, Evidence, Remediation, Effort Estimate
6. **Standards Crosswalk**: Matrix of requirements vs. evidence
7. **Composite Score**: Weighted domain scores; final grade (A-F)
8. **Score Interpretation Scale**: Grade conversion and meaning
9. **Remediation Roadmap**: Prioritized actions with owner, timeline, success criteria
10. **What Passed**: Documentation of strengths (75%+ compliance areas)
11. **Version History**: For tracking re-audits and progress

## Composite Score Calculation

Scores are weighted by domain impact:

```
(Instruction Alignment Ã— 0.25) +
(Assessment & Evaluation Ã— 0.20) +
(IEP/504 Compliance Ã— 0.20) +
(Instructional Methodology Ã— 0.15) +
(Progress Monitoring Ã— 0.10) +
(Ethical Standards Ã— 0.10)
= Composite Score (0-100)
```

**Grade Scale**:
- A: 80-100 (Excellent compliance)
- B: 60-79 (Good compliance; specific improvements identified)
- C: 40-59 (Moderate compliance; significant gaps)
- D: 20-39 (Poor compliance; major revisions needed)
- F: 0-19 (Critical failure; unsafe/ineffective)

## Re-Audit Process

If auditing an existing project for a second time:

1. The command identifies previous audit versions in `audits/` directory
2. New re-audit report is generated as version 2.0 with comparison to previous findings
3. **Remediation Status Table**: Documents what was done to address prior findings
4. **Before/After Delta Table**: Shows score improvements by domain
5. **Updated Composite Score**: New overall grade and interpretation

## Example Audit Scenarios

### US (default)
```
/dyscalculia-audit TouchMath-K2 Audit of TouchMath implementation for K-2 math instruction
/dyscalculia-audit Elementary-School-Math Compliance audit of district's dyscalculia services
/dyscalculia-audit Math-Learning-App-v2 Audit of app's CRA methodology, accommodations
```

### France
```
/dyscalculia-audit programme-college-Paris-XV --locale fr
/dyscalculia-audit eleve_pap_dyscalculie.docx --locale fr
/dyscalculia-audit application-MathÉval --locale fr
```

### Spain
```
/dyscalculia-audit informe_psicopedagogico.docx --locale es
/dyscalculia-audit programa-PT-CEIP-Madrid --locale es --region madrid
/dyscalculia-audit app-Smartick-discalculia --locale es --region cataluna
```

## Key Questions the Audit Addresses

- **Identification**: Does the program include comprehensive dyscalculia screening and diagnostic assessment?
- **Instruction**: Is CRA methodology implemented with fidelity? Are manipulatives used throughout?
- **Number Sense**: Is foundational number sense prioritized before computation?
- **Multisensory**: Are multiple sensory modalities engaged?
- **Anxiety**: Is math anxiety explicitly addressed in instruction and assessment?
- **Assessment**: Are multiple progress monitoring measures used? Is data reviewed frequently?
- **Accommodation**: Are accommodations provided without reducing conceptual demands?
- **Compliance**: Does the program meet IDEA, Section 504, and NCTM requirements?
- **Training**: Do teachers have professional development on dyscalculia and CRA?
- **Effectiveness**: Is there evidence of student progress and intervention responsiveness?

## How to Use This Report

1. **Identify Critical Gaps**: Focus first on CRITICAL and HIGH severity findings
2. **Prioritize Remediation**: Develop action plan using Remediation Roadmap
3. **Track Progress**: Schedule re-audit after 90 days to measure improvement
4. **Share Findings**: Use report to communicate with stakeholders (teachers, administrators, parents, leadership)
5. **Iterate**: Continuous improvement cycle: audit â†’ remediate â†’ re-audit â†’ improve

## Standards and Frameworks Used

- **IDEA** (Individuals with Disabilities Education Act): Special education identification, IEP requirements, least restrictive environment
- **Section 504** (Rehabilitation Act): Non-discrimination, accommodation requirements
- **NCTM Standards** (National Council of Teachers of Mathematics): Content and process standards
- **CRA Methodology**: Concrete-Representational-Abstract progression evidence-based framework
- **Best Practices**: Research-based dyscalculia instruction principles from cognitive neuroscience and special education

## See Also

- `skills/standards-compliance`: Full details on IDEA, Section 504, NCTM, assessment, and audit procedures
- `skills/remediation-strategies`: CRA methodology, program selection, lesson design
- `skills/gap-analysis`: Eight critical gaps framework
- `commands/remediation-plan`: Create a CRA-based remediation plan
- `commands/generate-iep`: Generate a math-focused IEP

