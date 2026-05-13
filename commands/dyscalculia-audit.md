---
description: Audit a dyscalculia program, tool, curriculum, or initiative against IDEA, Section 504, NCTM, and CRA standards. Generates a graded report (A–F) with findings and remediation roadmap into audits/.
argument-hint: <project-name> [scope-description]
allowed-tools: [Read, Glob, Grep, Bash, Write, Edit]
---

# /dyscalculia-audit

Audit a dyscalculia program, tool, curriculum, or educational initiative for compliance with the legal framework and best practices of the specified locale: US (IDEA/Section 504/NCTM), France (Code de l'éducation/PAP/PPS), or Spain (LOE/LOMLOE/ACNEAE).

## Usage

```
/dyscalculia-audit <project-name> [--locale us|fr|es] [optional: scope description]
```

**`--locale`** (default: `us`)
- `us` — United States: IDEA, Section 504, NCTM standards
- `fr` — France: Code de l'éducation, Loi 2005-102, PAP/PPS system, French number-word irregularities
- `es` — Spain: LOE/LOMLOE, ACNEAE/DEA framework, ACNS pathway, regional variation

## What This Command Does

1. **Creates audit directory structure**: `audits/` subdirectory is created if not present
2. **Generates comprehensive audit report**: Detailed markdown file documenting findings, scores, remediation roadmap, and locale-specific crosswalk
3. **File naming**: `audits/Dyscalculia-Compliance-Audit-<project-name>-<YYYY-MM-DD>-<locale>.md`

## Audit Scope

The audit evaluates across these domains (weights apply to all locales):

- **Math Instruction Alignment** (25% weight): CRA fidelity, number sense emphasis, multisensory strategies, program selection, manipulative use; **locale-specific math** (FR: vigesimal number-word irregularities; ES: transparent number system and fluency assessment)
- **Assessment & Evaluation** (20% weight): Comprehensive identification procedures, progress monitoring, assessment instruments; **locale-specific instruments** (FR: BMT-i and bilan orthophonique; ES: EOEP evaluation and Informe Psicopedagógico; US: KeyMath-3, TEMA-3, WISC-V)
- **Legal Plan Compliance** (20% weight): Correct plan type, documentation requirements, review cycles, signatures; **locale-specific** (FR: PAP vs. PPS determination; ES: ACNS vs. ACS/Dictamen; US: IEP vs. 504)
- **Instructional Methodology** (15% weight): Evidence-based practices, CRA implementation, anxiety management, Kosc subtype consideration
- **Progress Monitoring** (10% weight): Data collection frequency, multiple measures, decision rules, intervention adjustment
- **Ethical Standards & Training** (10% weight): Non-discrimination, confidentiality, professional development, family collaboration; **locale-specific** (FR: CAPPEI for specialized roles; ES: LOMLOE Art. 102 CPD requirements; US: state certification)

## Report Contents

Each audit report includes:

1. **Metadata Table**: Project info, audit date, locale, standards audited, scope
2. **Executive Summary**: Overview with composite score, interpretation, and locale context
3. **Findings Summary**: CRITICAL/HIGH/MEDIUM/LOW severity grouping
4. **Compliance by Domain Table**: Percent compliance across all domains
5. **Detailed Findings**: F-001, F-002, etc., with Standard/Law, Severity, Category, Description, Impact, Evidence, Remediation, Effort Estimate
6. **Locale-Specific Standards Crosswalk**: Matrix of locale requirements vs. evidence (see below)
7. **Locale-Specific Math Section**: Number system analysis and language-linked assessment findings
8. **Cross-Locale Crosswalk Reference**: FR↔US or ES↔US mapping for stakeholders familiar with the other system
9. **Composite Score**: Weighted domain scores; final grade (A-F)
10. **Score Interpretation Scale**: Grade conversion and meaning
11. **Remediation Roadmap**: Prioritized actions with owner, timeline, success criteria
12. **What Passed**: Documentation of strengths (75%+ compliance areas)
13. **Version History**: For tracking re-audits and progress

## Locale-Specific Standards Crosswalk

The crosswalk matrix is populated with locale-appropriate requirements:

### When locale=us (default)

| Requirement | Met? | Evidence | Notes |
|---|---|---|---|
| CRA Progression | Y/N | | |
| IDEA IEP/504 Plan in place | Y/N | | |
| Progress monitoring bi-weekly | Y/N | | |
| Number sense assessment (KeyMath-3/TEMA-3) | Y/N | | |
| Kosc subtype considered | Y/N | | |
| Math anxiety addressed | Y/N | | |
| Teacher trained in CRA | Y/N | | |

### When locale=fr

| Requirement | Met? | Evidence | Notes |
|---|---|---|---|
| Correct plan type: PAP vs. PPS | Y/N | | PAP if no MDPH; PPS if MDPH/CDAPH |
| PAP validated by school physician | Y/N | | Médecin de l'Éducation nationale signature |
| Bilan orthophonique conducted | Y/N | | Orthophoniste evaluation for dyscalculie |
| Mathematics accommodations in PAP | Y/N | | Calculator, number line, extra time |
| Tiers-temps traceable to PAP/PPS | Y/N | | Required for exam accommodations |
| Transcoding assessment (70–99 range) | Y/N | | Vigesimal number-word irregularities |
| Annual review documented | Y/N | | PAP: annual; PPS: ESS meeting |
| Exam accommodations filed with rectorat | Y/N | | Second trimester of preceding year |
| AESH in PPS only (not PAP) | Y/N | | If AESH present |

### When locale=es

| Requirement | Met? | Evidence | Notes |
|---|---|---|---|
| Student correctly classified as DEA (not NEE) | Y/N | | ACNEAE/DEA for dyscalculia alone |
| Informe Psicopedagógico by EOEP/orientador | Y/N | | Basis for ACNS |
| Achievement below Pc 25 documented | Y/N | | With exclusionary criteria |
| ACNS document produced (not ACS) | Y/N | | ACS only for NEE |
| No Dictamen unless comorbid NEE | Y/N | | Flag if Dictamen present without NEE basis |
| Regional regulations applied | Y/N | | Identify Comunidad Autónoma |
| Both accuracy AND fluency assessed | Y/N | | Transparent number system requires fluency measure |
| EBAU accommodation history documented | Y/N | | Accommodations during Bachillerato |
| Family notification and consent documented | Y/N | | |
| ACNS reviewed annually | Y/N | | |

## Locale-Specific Math Section

The audit report includes a dedicated **Math and Language Analysis** section based on locale:

### When locale=fr: French Number-Word Irregularity Analysis

Evaluate and document:
- **Transcoding error pattern**: Does the student/program show disproportionate errors in the 70–99 range?
- **Error type analysis**: Are errors computational (numerical concept weakness) or transcoding (linguistic processing of vigesimal forms)?
- **Assessment instrument validity**: Were instruments normed on French-speaking populations?
- **CRA adaptation evidence**: Does instruction explicitly address the vigesimal structure with concrete materials?

Report section template:
```
### French Number-Word Irregularity Assessment

Vigesimal Range (70–99) Error Rate: [%] errors vs. [%] in 1–69 range
Error Pattern: [Transcoding errors / Computational errors / Mixed]
Disproportionate vigesimal impact: [Yes/No/Inconclusive]
Assessment instrument(s) normed on French population: [Yes/No — list]
CRA instruction adapted for vigesimal structure: [Yes/No/Partial]
Recommendations: [Specific actions for 70–99 range]

France–US Crosswalk: PAP=504 Plan | PPS=IEP | Tiers-temps=Extended Time |
  Orthophoniste=SLP | MDPH/CDAPH=LEA eligibility determination
```

### When locale=es: Spanish Transparent Number System Analysis

Evaluate and document:
- **Fluency vs. accuracy gap**: Does assessment measure both accuracy AND processing speed?
- **Residual irregularity errors**: Does the student show selective difficulty with 11–15 (once through quince)?
- **False negative risk**: Risk of appearing unaffected due to accurate transcoding while struggling with fluency
- **Assessment instrument validity**: Normed on Spanish-speaking populations; bilingual context documented

Report section template:
```
### Spanish Number System Analysis

Transcoding Accuracy (20–99): [%] — high expected due to transparency
Fluency Score (processing speed): [digits/min or equivalent] vs. norm
Residual Irregularity Errors (11–15): [Present/Absent]
False Negative Risk: [Low/Medium/High — explain]
Assessment instruments normed on Spanish population: [Yes/No — list]
Bilingual/regional context: [Castilian only / Bilingual — specify language]
ACNS leverages transparency as strength: [Yes/No/Partial]
Recommendations: [Fluency-focused interventions; transparency-leveraging strategies]

Spain–US Crosswalk: ACNS=504 Plan | Dictamen+ACS=IEP (NEE only) |
  DEA=SLD | EOEP=school psychology team | Orientador=School Psychologist |
  PT=Special Education Teacher | PRODISLEX/PRODISCALCULIA=RTI screening protocols
```

## Composite Score Calculation

Scores are weighted by domain impact:

```
(Instruction Alignment × 0.25) +
(Assessment & Evaluation × 0.20) +
(IEP/504 Compliance × 0.20) +
(Instructional Methodology × 0.15) +
(Progress Monitoring × 0.10) +
(Ethical Standards × 0.10)
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

### US: Auditing a Curriculum Program
```
/dyscalculia-audit TouchMath-K2 Audit of TouchMath implementation for K-2 math instruction
```
Output: `audits/Dyscalculia-Compliance-Audit-TouchMath-K2-2026-04-03-us.md`

### US: Auditing a School's Special Education Math Services
```
/dyscalculia-audit Elementary-School-Math Compliance audit of district's dyscalculia identification and intervention services
```
Output: `audits/Dyscalculia-Compliance-Audit-Elementary-School-Math-2026-04-03-us.md`

### France: Auditing a French School's DYS Support
```
/dyscalculia-audit College-Beaumont --locale fr Audit of PAP/PPS documentation and dyscalculie accommodations
```
Output: `audits/Dyscalculia-Compliance-Audit-College-Beaumont-2026-04-03-fr.md`
- Evaluates: PAP vs. PPS determination, school physician signature, bilan orthophonique, tiers-temps traceability, vigesimal transcoding assessment, annual review
- Includes: French number-word irregularity analysis, France–US crosswalk

### Spain: Auditing a Spanish School's DEA Support
```
/dyscalculia-audit IES-Salamanca --locale es Audit of discalculia identification, ACNS documentation, and EBAU accommodation eligibility
```
Output: `audits/Dyscalculia-Compliance-Audit-IES-Salamanca-2026-04-03-es.md`
- Evaluates: DEA classification, Informe Psicopedagógico, ACNS documentation, regional regulations (Castilla y León), fluency assessment
- Includes: Spanish number system analysis, Spain–US crosswalk

### US: Auditing a Digital Tool or App
```
/dyscalculia-audit Math-Learning-App-v2 Audit of app's CRA methodology, accommodations, progress monitoring, and accessibility
```
Output: `audits/Dyscalculia-Compliance-Audit-Math-Learning-App-v2-2026-04-03-us.md`

## Key Questions the Audit Addresses

All locales:
- **Identification**: Does the program include comprehensive dyscalculia screening and diagnostic assessment?
- **Instruction**: Is CRA methodology implemented with fidelity? Are manipulatives used throughout?
- **Number Sense**: Is foundational number sense prioritized before computation?
- **Multisensory**: Are multiple sensory modalities engaged?
- **Anxiety**: Is math anxiety explicitly addressed in instruction and assessment?
- **Assessment**: Are multiple progress monitoring measures used? Is data reviewed frequently?
- **Accommodation**: Are accommodations provided without reducing conceptual demands?
- **Legal Compliance**: Does the program meet applicable legal requirements for the locale?
- **Training**: Do teachers have professional development on dyscalculia and CRA?
- **Effectiveness**: Is there evidence of student progress and intervention responsiveness?

Additional when locale=fr:
- **Plan Type**: Is the PAP vs. PPS determination correct? Is the school physician's validation documented?
- **Vigesimal Assessment**: Has the student been assessed for transcoding errors in the 70–99 range?
- **Exam Traceability**: Can exam accommodations (tiers-temps, calculatrice) be traced to PAP/PPS documentation?
- **MDPH Involvement**: If a PPS is in place, is CDAPH decision documented? If PAP only, is MDPH appropriately not involved?

Additional when locale=es:
- **Classification Accuracy**: Is the student classified as DEA (not NEE) for dyscalculia? Is the Informe Psicopedagógico complete?
- **ACNS vs. ACS**: Are non-significant adaptations used (not significant)? Is this distinction documented?
- **Fluency Assessment**: Does the evaluation measure processing speed, not only accuracy?
- **Regional Compliance**: Which Comunidad Autónoma governs this school? Are regional regulations applied?
- **Bilingual Context**: If applicable (Cataluña, País Vasco, Galicia, Valencia), is bilingual assessment documented?

## How to Use This Report

1. **Identify Critical Gaps**: Focus first on CRITICAL and HIGH severity findings
2. **Prioritize Remediation**: Develop action plan using Remediation Roadmap
3. **Track Progress**: Schedule re-audit after 90 days to measure improvement
4. **Share Findings**: Use report to communicate with stakeholders (teachers, administrators, parents, leadership)
5. **Iterate**: Continuous improvement cycle: audit → remediate → re-audit → improve

## Standards and Frameworks Used

**locale=us**:
- **IDEA** (Individuals with Disabilities Education Act): Special education identification, IEP requirements, least restrictive environment
- **Section 504** (Rehabilitation Act): Non-discrimination, accommodation requirements
- **NCTM Standards** (National Council of Teachers of Mathematics): Content and process standards
- **CRA Methodology**: Concrete-Representational-Abstract progression evidence-based framework

**locale=fr**:
- **Loi n° 2005-102 du 11 février 2005** (Loi Handicap): Disability rights, MDPH, schooling rights
- **Code de l'éducation** (Art. L112-1 to L112-5, L311-7, L321-4): PAP basis, accommodation mandate
- **Circulaire n° 2015-016** (PAP implementing circular): Content requirements, annual review
- **Circulaire n° 2023-033** (Exam accommodations): Tiers-temps, calculatrice, aménagements d'examens
- **CIM-11 / DSM-5**: Diagnostic criteria for troubles spécifiques des apprentissages
- **French number-word structure**: Vigesimal irregularity in 70–99 and CRA adaptation requirements

**locale=es**:
- **LOE (Ley Orgánica 2/2006)** and **LOMLOE (Ley Orgánica 3/2020)**: National education law; ACNEAE/DEA framework
- **LOE Articles 71, 72, 79 bis**: Resources mandate, early identification, DEA-specific provisions
- **Real Decreto 157/2022 and 217/2022**: Curriculum under LOMLOE
- **Regional Comunidad Autónoma legislation**: Applied alongside national law
- **PRODISLEX/PRODISCALCULIA protocols**: Detection and intervention at each educational stage (PRODISLEX for dyslexia; PRODISCALCULIA for dyscalculia)
- **Spanish number-word structure**: Transparent system and fluency assessment requirements

## See Also

- `skills/standards-compliance`: Full locale-aware details on US/FR/ES legal frameworks, crosswalks, math language analysis
- `skills/remediation-strategies`: CRA methodology, French/Spanish adaptations, program selection
- `skills/gap-analysis`: Eight critical gaps framework; cross-linguistic number system gap analysis
- `skills/document-generation`: US IEP/504, French PAP/PPS, Spanish PTI/ACNS document templates
- `commands/remediation-plan`: Create a CRA-based remediation plan
- `commands/generate-iep`: Generate a math-focused IEP (US)
