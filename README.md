# Dyscalculia Support Skill

Evidence-based dyscalculia standards compliance, remediation strategies, document generation, and gap analysis — grounded in CRA methodology, NCTM standards, and IDEA/504 requirements.

**For developers and tool builders:** This skill provides actionable frameworks, templates, and audit procedures to integrate dyscalculia-informed instruction into educational tools, curricula, and services.

## What This Is

A comprehensive skill addressing a critical gap in special education support: **there is no widely-adopted, standardized remediation framework for dyscalculia equivalent to Orton-Gillingham for dyslexia.**

This skill:
- Establishes **Concrete-Representational-Abstract (CRA) methodology** as the core remediation framework
- Provides **evidence-based program guidance** (TouchMath, Number Worlds, Stern Structural Arithmetic, Singapore Math adaptations, Strategic Math Series)
- Specifies **legal requirements** (IDEA, Section 504, NCTM standards)
- Delivers **document templates** for IEPs, 504 Plans, screening, evaluation, and progress monitoring
- Identifies **8 critical gaps** in the dyscalculia support ecosystem
- Offers **audit procedures** for standards compliance and tool accessibility
- Supports **teacher implementation** with lesson templates and professional guidance

**Target Audience**: Special educators, school psychologists, math specialists, EdTech developers, curriculum designers, administrators overseeing special education, parents advocating for students with dyscalculia.

## Quick Start

### For Special Educators

1. **Understand dyscalculia remediation**: Read `skills/remediation-strategies/SKILL.md`
2. **Create a remediation plan**: Use `/remediation-plan <student-name>` command
3. **Develop an IEP**: Use `/generate-iep <student-name>` command
4. **Monitor progress**: Use templates in `skills/document-generation/SKILL.md`

### For Tool Builders and Curriculum Designers

1. **Understand standards**: Review `skills/standards-compliance/SKILL.md`
2. **Identify gaps in your tool**: Use `/content-accessibility-check` command
3. **Audit for compliance**: Use `/dyscalculia-audit <tool-name>` command
4. **Understand the gaps**: Read `skills/gap-analysis/SKILL.md`

### For Administrators and Leaders

1. **Audit your program**: Use `/dyscalculia-audit <school-name>` command
2. **Understand compliance requirements**: Read `skills/standards-compliance/SKILL.md`
3. **Create improvement plans**: Use remediation roadmaps from audit reports
4. **Track progress**: Schedule re-audits every 90 days

## Skills

### 1. Remediation Strategies
**Path**: `skills/remediation-strategies/SKILL.md`

Evidence-based intervention framework for dyscalculia, centered on CRA methodology.

**Contents**:
- Concrete-Representational-Abstract progression (the core framework)
- Multisensory math instruction principles
- Program comparisons: TouchMath, Number Worlds, Stern Structural Arithmetic, Singapore Math adaptations, Strategic Math Series
- Number sense foundations: subitizing, magnitude comparison, quantity visualization
- Kosc's 6 subtypes and how remediation targets each
- Math anxiety management integrated with instruction
- Detailed remediation plan structure with templates
- Lesson template demonstrating CRA progression
- Behavior guidelines and evidence base

**Key Insight**: Just as dyslexia requires "structure" (Orton-Gillingham), dyscalculia requires "concreteness" (CRA). Premature advancement to abstract work is the primary cause of intervention failure.

### 2. Standards Compliance
**Path**: `skills/standards-compliance/SKILL.md`

Comprehensive standards and legal framework for dyscalculia identification, intervention, and documentation.

**Contents**:
- IDEA requirements (identification, IEP goal areas: number sense, computation, fluency, problem solving, reasoning)
- Section 504 accommodations specific to dyscalculia (calculator, extended time, manipulatives, visual supports, reduced problems, graph paper, formula sheets)
- NCTM standards (5 content strands × 5 process standards)
- Assessment compliance (KeyMath-3, TEMA-3, PAL-II Math, WRAT-5, WISC-V tiered approach)
- Compliance audit checklist
- **CRITICAL: Audit file generation** with comprehensive report format, metadata, findings, composite scoring, remediation roadmap

**Key Insight**: Compliance is achievable through structured audit and remediation; this skill provides the complete framework.

### 3. Document Generation
**Path**: `skills/document-generation/SKILL.md`

Ready-to-use templates and detailed guidance for essential documents in dyscalculia identification and intervention.

**Templates Included**:
- **Math-Focused IEP**: PLAAFP, goals (number sense/computation/fluency/problem-solving/anxiety), services, accommodations, LRE
- **Section 504 Plan for Dyscalculia**: Detailed accommodation specifications with implementation guidance
- **Progress Monitoring Report**: Data presentation and trend analysis
- **Accommodation Letter**: Clear communication of accommodations to students and families
- **Dyscalculia Screening Checklist**: Grade-band-specific indicators
- **Psychoeducational Evaluation Summary**: Assessment interpretation and recommendations

**Key Insight**: Quality documentation ensures legal compliance and clear communication of student needs and supports.

### 4. Gap Analysis
**Path**: `skills/gap-analysis/SKILL.md`

Systematic identification of critical gaps in the dyscalculia support ecosystem and guidance for remediation.

**8 Critical Gaps Identified**:
1. No structured math equivalent to structured literacy
2. Missing number sense visualization tools
3. Inadequate CRA-based digital platforms
4. Math anxiety not integrated with remediation tools
5. Poor math-specific assistive technology
6. Fragmented tool ecosystem
7. Disconnected progress monitoring
8. Teacher implementation support gap

**Frameworks Provided**:
- Gap analysis process (6 steps)
- Dyscalculia-Friendly Content Audit Checklist (10 domains)
- Dyscalculia UX Heuristics (10 adapted from Nielsen's standards)
- New Measure Specification template
- Gap analysis report template

**Key Insight**: Understanding the ecosystem gaps helps tool builders and educators prioritize improvements that have the highest impact.

## Commands

### /dyscalculia-audit
Audit a program, tool, curriculum, or initiative for dyscalculia standards compliance.

**Usage**: `/dyscalculia-audit <project-name> [scope-description]`

**Generates**:
- Comprehensive audit report with findings, severity ratings, and composite score (A-F grade)
- Detailed findings with IDs (F-001, F-002...), standards, severity, impact, and remediation
- Standards crosswalk matrix
- Weighted composite score across 6 domains
- Remediation roadmap with prioritized actions
- Re-audit tracking for progress monitoring

**Example**: `/dyscalculia-audit Elementary-Math-Program Compliance audit of K-5 math instruction and services`

Output: `audits/Dyscalculia-Compliance-Audit-Elementary-Math-Program-2026-04-03.md`

### /generate-iep
Generate a comprehensive, legally-compliant IEP focused on mathematics.

**Usage**: `/generate-iep <student-name> [--grade <grade>] [--subtype <kosc-subtype>] [--anxiety <level>] [--comorbidities <conditions>]`

**Generates**:
- Present Levels (PLAAFP) for mathematics with assessment data
- SMART, measurable goals for number sense, computation, fluency, problem-solving, and anxiety management
- Service specifications (frequency, duration, setting, provider, instructional focus)
- Comprehensive accommodations (calculators, time, visual supports, manipulatives, environmental)
- Least restrictive environment (LRE) justification
- Comorbidity considerations (dyslexia, ADHD, dysgraphia)
- Professional, legally-compliant document ready for team review

**Example**: `/generate-iep Emma-Martinez --grade 3 --subtype verbal lexical --anxiety high --comorbidities dyslexia`

### /remediation-plan
Create a detailed, CRA-based remediation plan with lesson templates and progress monitoring.

**Usage**: `/remediation-plan <student-name> [--duration <weeks>] [--focus <domain>] [--intensity <frequency>] [--anxiety <level>]`

**Generates**:
- Student profile summary
- 4-phase progression: number sense foundation → concrete operations → representational operations → abstract operations
- Program recommendations (TouchMath, Number Worlds, Stern, Singapore Math, Strategic Math)
- Specific manipulatives and materials needed for each phase
- Sample lesson plans demonstrating CRA progression
- Concrete and representational lesson templates
- Progress monitoring specifications with decision rules
- Timeline with milestones
- Math anxiety management strategies throughout
- Family connection guidance with home activities
- Fidelity checklist for implementation monitoring

**Example**: `/remediation-plan Marcus-Johnson --duration 12 --focus computation --intensity intensive --anxiety moderate`

### /content-accessibility-check
Audit math content, tools, or materials for dyscalculia-friendly design.

**Usage**: `/content-accessibility-check <content-name> [--format <type>] [--audience <level>] [--depth <audit-depth>]`

**Evaluates Across 10 Dimensions**:
1. CRA fidelity
2. Number sense emphasis
3. Multisensory design
4. Manipulative integration
5. Visual accessibility and clarity
6. Accommodation and scaffolding support
7. Math anxiety management
8. Assessment and progress monitoring integration
9. Equity and inclusivity
10. Comorbidity support

**Generates**:
- Accessibility score across each dimension (0-3 scale)
- Severity-categorized findings (CRITICAL, HIGH, MEDIUM, LOW)
- Strengths and areas of excellence
- Specific remediation recommendations with effort estimates
- Remediation roadmap with priorities

**Example**: `/content-accessibility-check MathPro-App --format tool --audience elementary --depth deep`

## Standards and Research Foundation

This skill is grounded in:

### Legal Standards
- **IDEA 2004/2015**: Identification, IEP requirements, least restrictive environment
- **Section 504 of the Rehabilitation Act**: Non-discrimination, reasonable accommodations
- **ADA**: Accessibility requirements

### Educational Standards
- **NCTM Standards**: 5 content strands (Number/Operations, Algebra, Geometry, Measurement, Data Analysis) × 5 process standards (Problem Solving, Reasoning, Communication, Connections, Representation)
- **Council for Exceptional Children (CEC)**: Special education professional standards

### Intervention Framework
- **CRA Methodology**: Concrete-Representational-Abstract progression (Witzel, Mercer, & Miller; Mercer & Miller)
- **Multisensory Instruction**: Applied from dyslexia (Orton-Gillingham principles adapted for math)
- **Number Sense**: Foundational to all mathematics (National Academies, 2009)

### Dyscalculia Research
- **Kosc's Classification** (1974): Six distinct dyscalculia subtypes
- **Math Anxiety**: Ashcraft & Krause (2007); Hopko et al. (2003)
- **Evidence-Based Programs**: Research validation of TouchMath, Number Worlds, Stern materials, Singapore Math, Strategic Instruction
- **RTI for Math**: Fuchs et al. (2005); response to intervention as identification framework

### Assessment
- **KeyMath-3**: Comprehensive math achievement assessment; standard for dyscalculia diagnosis
- **TEMA-3**: Math fundamentals assessment for young children
- **WRAT-5 Math**: Quick screening of computation skills
- **WISC-V**: Cognitive assessment with processing profiles relevant to dyscalculia
- **CBM**: Curriculum-based measurement for progress monitoring

## Project Structure

```
dyscalculia-support-skill/
├── skills/
│   ├── remediation-strategies/
│   │   └── SKILL.md                 # CRA methodology, programs, lesson templates
│   ├── standards-compliance/
│   │   └── SKILL.md                 # IDEA, 504, NCTM, assessment, audit procedures
│   ├── document-generation/
│   │   └── SKILL.md                 # IEP, 504, screening, evaluation templates
│   └── gap-analysis/
│       └── SKILL.md                 # 8 gaps, audit checklist, UX heuristics
├── commands/
│   ├── dyscalculia-audit.md         # Run compliance audit
│   ├── generate-iep.md              # Create math-focused IEP
│   ├── remediation-plan.md          # Design CRA-based intervention plan
│   └── content-accessibility-check.md  # Audit content for dyscalculia-friendliness
├── templates/
│   └── audit-report-template.md     # Full audit report format and examples
├── audits/                          # Generated audit reports (created as needed)
│   └── Dyscalculia-Compliance-Audit-[project]-[date].md
├── plugin.json                      # Skill metadata and registration
├── README.md                        # This file
├── LICENSE                          # MIT License
└── .gitignore                       # Standard git ignore patterns
```

## Commands Table

| Command | Purpose | Input | Output |
|---------|---------|-------|--------|
| `/dyscalculia-audit` | Audit program/tool for standards compliance | Project name, scope | Audit report with findings, score, roadmap |
| `/generate-iep` | Create math-focused IEP | Student info, assessment data | Comprehensive IEP document |
| `/remediation-plan` | Design CRA-based intervention | Student info, duration, focus | Detailed plan with lessons, monitoring |
| `/content-accessibility-check` | Evaluate content for dyscalculia design | Content name, format, audience | Accessibility score, findings, remediation |

## Target Audience

### Special Educators and Math Specialists
- Understand dyscalculia characteristics and remediation
- Design and implement CRA-based instruction
- Create compliant IEPs and 504 Plans
- Monitor progress and make data-based decisions
- Collaborate with general education teachers

### School Psychologists and Evaluators
- Conduct comprehensive dyscalculia evaluations
- Interpret assessment data correctly
- Understand RTI and identification frameworks
- Document findings professionally
- Guide IEP team in service planning

### EdTech Developers
- Design tools aligned with CRA methodology
- Integrate manipulative-based learning
- Incorporate multisensory engagement
- Address math anxiety
- Build accessible, dyscalculia-friendly interfaces

### Curriculum and Instructional Designers
- Select evidence-based programs
- Sequence instruction according to CRA
- Align content with standards
- Design for accessibility and universality
- Develop progress monitoring measures

### School Administrators
- Ensure compliance with IDEA and Section 504
- Evaluate math intervention effectiveness
- Plan professional development for teachers
- Allocate resources strategically
- Track outcomes and accountability

### Parents and Advocates
- Understand dyscalculia and its impact
- Advocate for appropriate services and accommodations
- Support learning at home with research-based activities
- Ask informed questions at IEP meetings
- Understand standards and legal rights

## Disclaimer

This skill provides evidence-based frameworks, guidelines, and templates grounded in research and legal standards. However:

- **Not a substitute for professional judgment**: Special educators, school psychologists, and administrators must apply these frameworks with professional expertise, considering individual student needs, local context, and applicable state/district policies.

- **Legal compliance**: While grounded in IDEA and Section 504 requirements, laws vary by state and local jurisdiction. Consult with district legal counsel on specific implementation.

- **Assessment and diagnosis**: Assessment of dyscalculia must be conducted by qualified professionals (school psychologist, psychometrician). This skill supports assessment interpretation and documentation, not diagnosis.

- **Instructional delivery**: Effective instruction requires skilled implementation. Professional development and coaching are essential for fidelity.

- **Student outcomes**: While evidence-based, intervention effectiveness depends on consistent, high-quality implementation, adequate duration/intensity, and student engagement.

## Contributing

To contribute improvements, refinements, new templates, or additional programs/assessment tools:

1. Fork the repository: https://github.com/justice8096/dyscalculia-support-skill.git
2. Create a feature branch with a descriptive name
3. Make your changes with clear commit messages
4. Submit a pull request with description of improvements
5. Include evidence or research supporting additions

Areas for contribution:
- Additional program comparisons and guidance
- State-specific compliance checklists
- Translated templates for multilingual accessibility
- Case studies of successful interventions
- Additional assessment instrument guidance
- Professional development resources and training modules

## License

MIT License. See LICENSE file for details.

Copyright (c) 2026 Justice

## See Also

- **Dyslexia Support Skill**: https://github.com/justice8096/dyslexia-support-skill
- **IDEA Regulations**: https://sites.ed.gov/idea/
- **Section 504 Guidance**: https://www2.ed.gov/about/offices/list/ocr/504faq.html
- **NCTM Standards**: https://www.nctm.org/Standards-and-Positions/Principles-and-Standards/
- **LD Online**: https://www.ldonline.org/
- **National Academies on Number Sense**: https://www.nap.edu/catalog/12841/mathematics-learning-in-early-childhood

---

**Created**: April 2026
**Version**: 1.0.0
**Repository**: https://github.com/justice8096/dyscalculia-support-skill.git
