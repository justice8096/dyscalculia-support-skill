# /dyscalculia-audit

Audit a dyscalculia program, tool, curriculum, or educational initiative for compliance with IDEA, Section 504, NCTM standards, and CRA methodology best practices.

## Usage

```
/dyscalculia-audit <project-name> [optional: scope description]
```

## What This Command Does

1. **Creates audit directory structure**: `audits/` subdirectory is created if not present
2. **Generates comprehensive audit report**: Detailed markdown file documenting findings, scores, and remediation roadmap
3. **File naming**: `audits/Dyscalculia-Compliance-Audit-<project-name>-<YYYY-MM-DD>.md`

## Audit Scope

The audit evaluates across these domains:

- **Math Instruction Alignment** (25% weight): CRA fidelity, number sense emphasis, multisensory strategies, program selection (TouchMath, Number Worlds, Stern, etc.), manipulative use
- **Assessment & Evaluation** (20% weight): Comprehensive identification procedures, progress monitoring frequency and quality, assessment instruments, data-based decision making
- **IEP/504 Compliance** (20% weight): Legal requirement compliance, goal specificity, accommodation appropriateness, service adequacy, documentation
- **Instructional Methodology** (15% weight): Evidence-based practices, manipulation implementation, anxiety management, Kosc subtype consideration
- **Progress Monitoring** (10% weight): Data collection frequency, multiple measures, decision rules, intervention adjustment responsiveness
- **Ethical Standards & Training** (10% weight): Non-discrimination, confidentiality, professional development, parent collaboration

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

### Auditing a Curriculum Program
```
/dyscalculia-audit TouchMath-K2 Audit of TouchMath implementation for K-2 math instruction
```
Output: `audits/Dyscalculia-Compliance-Audit-TouchMath-K2-2026-04-03.md`

### Auditing a School's Special Education Math Services
```
/dyscalculia-audit Elementary-School-Math Compliance audit of district's dyscalculia identification and intervention services
```
Output: `audits/Dyscalculia-Compliance-Audit-Elementary-School-Math-2026-04-03.md`

### Auditing a Digital Tool or App
```
/dyscalculia-audit Math-Learning-App-v2 Audit of app's CRA methodology, accommodations, progress monitoring, and accessibility
```
Output: `audits/Dyscalculia-Compliance-Audit-Math-Learning-App-v2-2026-04-03.md`

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

