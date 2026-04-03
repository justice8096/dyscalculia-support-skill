# /content-accessibility-check

Audit math content, materials, or tools for dyscalculia-friendly design and accessibility.

## Usage

```
/content-accessibility-check <content-name> [--format <type>] [--audience <level>] [--depth <audit-depth>]
```

## Required Information

- **Content Name**: Title or description of what to audit (curriculum, app, lesson, worksheet, etc.)
- **Content Location/Link**: Where to access the content (file path, URL, description)

## Optional Flags

### --format
Type of content being audited (default: curriculum):
- `curriculum`: Multi-unit instructional program
- `tool`: Digital app, platform, or software
- `lesson`: Individual lesson plan or activity
- `assessment`: Test or assessment material
- `worksheet`: Individual worksheet or practice activity
- `material`: Manipulative or concrete material

### --audience
Target grade/audience (default: elementary):
- `early-elementary`: K-2
- `elementary`: 3-5
- `middle`: 6-8
- `secondary`: 9-12
- `post-secondary`: College/adult

### --depth
Audit thoroughness (default: standard):
- `quick`: Superficial review; 10-15 minutes
- `standard`: Comprehensive review; 30-60 minutes
- `deep`: Detailed analysis with evidence collection; 60-120 minutes

## What This Command Does

1. **Evaluates CRA Alignment**: Checks whether content progresses through Concrete-Representational-Abstract stages
2. **Assesses Number Sense Priority**: Verifies that foundational number sense is emphasized
3. **Analyzes Multisensory Design**: Evaluates tactile, kinesthetic, visual, auditory, proprioceptive engagement
4. **Checks Manipulation and Manipulatives**: Confirms hands-on learning and concrete tool integration
5. **Reviews Accessibility Features**: Visual clarity, contrast, font, layout, readability
6. **Examines Accommodation Support**: Presence of scaffolds, visual aids, alternative input/output
7. **Assesses Math Anxiety Considerations**: Safety, positive framing, untimed approach
8. **Evaluates Progress Monitoring Alignment**: Assessment integration and data use
9. **Checks Equity and Inclusion**: Non-discriminatory language, diverse representations, accessibility
10. **Generates Detailed Report**: Structured findings with severity ratings and remediation recommendations

## Accessibility Audit Framework

### 1. Concrete-Representational-Abstract (CRA) Fidelity

**Criteria**:
- [ ] **Concrete Stage Present**: Physical manipulatives featured; not skipped or abbreviated
- [ ] **Concrete Examples**: Sample lessons with concrete materials shown
- [ ] **Representational Included**: Pictures, diagrams, semi-concrete models bridge to abstract
- [ ] **Progression Clear**: Three stages explicitly labeled or distinguishable
- [ ] **Mastery Gating**: Requirement to demonstrate concrete competency before advancing
- [ ] **No Premature Abstraction**: Abstract work not introduced until representational ready

**Scoring**:
- 0 points: No CRA progression; abstract only
- 1 point: Some representation; minimal concrete
- 2 points: CRA present but not explicit; variable emphasis
- 3 points: Clear CRA progression; concrete stage honored

**Findings Template**:
- Finding ID: F-CRA-001
- Severity: [Critical/High/Medium/Low]
- Description: "CRA progression is [present/inadequate/absent]. Concrete stage includes [description]."
- Remediation: "Redesign to include extended concrete stage with [specific materials/activities]."

### 2. Number Sense Emphasis

**Criteria**:
- [ ] **Subitizing Explicit**: Instant quantity recognition taught and practiced
- [ ] **Magnitude Comparison**: "More/less/equal" and quantity comparison emphasized
- [ ] **Quantity Visualization**: Students practice imagining quantities without objects
- [ ] **Cardinality**: "Last count = total amount" understanding assessed
- [ ] **Part-Whole Relationships**: Decomposition and composition explored with models
- [ ] **Foundation Before Computation**: Number sense prioritized before operations

**Scoring**:
- 0 points: No number sense focus; computation drill only
- 1 point: Limited number sense; mostly computation
- 2 points: Some number sense; mix with computation
- 3 points: Strong number sense foundation; computation builds from it

**Findings Template**:
- Finding ID: F-NS-001
- Severity: [Critical/High/Medium/Low]
- Description: "Number sense emphasis: [strong/moderate/weak]. Subitizing [present/absent]. Magnitude comparison [integrated/missing]."
- Remediation: "Add specific units on [subitizing/magnitude comparison/decomposition] before computation instruction."

### 3. Multisensory Design

**Criteria**:
- [ ] **Visual**: High-contrast numerals (minimum 16pt), clear layouts, color-coded place value
- [ ] **Tactile**: Manipulatives with varied textures; student touching/handling materials
- [ ] **Kinesthetic**: Movement-based activities, body-based number exploration, walking number lines
- [ ] **Auditory**: Counting chants, verbal skip counting, rhythm-based practice, sound effects
- [ ] **Proprioceptive**: Weighted objects, pressure-based number exploration
- [ ] **Sensory Redundancy**: Each concept explored through multiple modalities

**Scoring**:
- 0 points: Single modality only (e.g., abstract symbols)
- 1 point: Two modalities present
- 2 points: Three modalities; some redundancy
- 3 points: Four+ modalities; strong multisensory design

**Findings Template**:
- Finding ID: F-MS-001
- Severity: [Critical/High/Medium/Low]
- Description: "Multisensory engagement includes [visual, kinesthetic]. Missing: [tactile, auditory]."
- Remediation: "Incorporate [specific tactile/auditory activities] into lesson sequence."

### 4. Manipulative Integration

**Criteria**:
- [ ] **Concrete Materials Available**: Base-10 blocks, counters, Rekenrek, number lines, place value charts listed/provided
- [ ] **Regular Use**: Manipulatives used in most lessons, not just introduction
- [ ] **Permanence**: Accessible throughout learning (not faded too quickly)
- [ ] **Hands-On Engagement**: Students manipulate materials; not teacher-directed only
- [ ] **Transition Planned**: Explicit fade from concrete to representational; not abrupt
- [ ] **Quality/Accuracy**: Manipulatives represent concepts correctly

**Scoring**:
- 0 points: No manipulatives or only pictures shown
- 1 point: Manipulatives mentioned but rarely used
- 2 points: Manipulatives regularly used; some transition support
- 3 points: Robust manipulative integration; intentional progression

**Findings Template**:
- Finding ID: F-MAN-001
- Severity: [Critical/High/Medium/Low]
- Description: "Manipulative use: [described/limited/absent]. Materials available: [specific list]. Transition plan: [present/missing]."
- Remediation: "Provide [specific materials]. Include [X] lessons using manipulatives before representational work."

### 5. Visual Accessibility and Clarity

**Criteria**:
- [ ] **Font Size**: Minimum 14pt (16pt+ for younger students); readable in classroom setting
- [ ] **Contrast**: High contrast between text and background (black on white minimum)
- [ ] **Font Style**: Sans-serif preferred; consistent throughout
- [ ] **Layout**: Adequate spacing; uncluttered; one problem per line or section
- [ ] **Color**: Color used meaningfully (e.g., place value); not sole distinguishing feature
- [ ] **Numerals**: Clear, distinct number shapes (not confused with letters: 0/O, 1/l)
- [ ] **Visual Clarity**: Diagrams, graphs, tables clear and labeled

**Scoring**:
- 0 points: Very small font, low contrast, cluttered layout
- 1 point: Readable but not optimized; mixed fonts or spacing issues
- 2 points: Generally clear; minor contrast or spacing issues
- 3 points: Excellent visual clarity throughout

**Findings Template**:
- Finding ID: F-VA-001
- Severity: [Critical/High/Medium/Low]
- Description: "Visual clarity: Font sizes range [X-Y], contrast is [adequate/low]. Layout [description]."
- Remediation: "Increase font to minimum [X]pt. Improve contrast to [X:1 ratio]. [Specific layout improvements]."

### 6. Accommodation and Scaffolding Support

**Criteria**:
- [ ] **Manipulative Scaffolds**: Blocks, counters, number lines available as support tools
- [ ] **Visual Supports**: Place value charts, operation cards, reference sheets provided
- [ ] **Simplified Language**: Word problems use clear, grade-appropriate language
- [ ] **Explicit Structure**: Problem structure made visible (What do we know? What are we finding?)
- [ ] **Step-by-Step Guidance**: Algorithm steps explained; process visible
- [ ] **Alternative Representations**: Multiple ways to show same concept (picture, symbol, manipulative)
- [ ] **Calculator Access**: Noted for computation-heavy tasks
- [ ] **Extended Time**: No time limits on practice or formative assessment

**Scoring**:
- 0 points: No scaffolds; high cognitive demand without support
- 1 point: Minimal scaffolding; students left to struggle independently
- 2 points: Adequate scaffolding; some student independence
- 3 points: Robust scaffolding; gradual fading as competence grows

**Findings Template**:
- Finding ID: F-ACC-001
- Severity: [Critical/High/Medium/Low]
- Description: "Accommodation supports include [scaffolds listed]. Missing: [specific supports needed]."
- Remediation: "Add [specific visual supports/manipulative scaffolds] to [lessons/units]."

### 7. Math Anxiety Considerations

**Criteria**:
- [ ] **Low Pressure**: Untimed practice emphasized; no time limits on formative assessment
- [ ] **Safe Environment**: Private work; no public performance testing
- [ ] **Error Normalization**: Errors framed as learning ("That's a thinking opportunity")
- [ ] **Positive Framing**: Growth mindset language; effort recognized
- [ ] **Student Choice**: Options in order of problems, tools, representations
- [ ] **Confidence Building**: Frequent success experiences; manageable challenge level
- [ ] **No Pressure Tactics**: No shame, public comparison, or high-stakes testing in instruction
- [ ] **Anxiety Monitoring**: Student comfort level assessed

**Scoring**:
- 0 points: Pressure-based; timed drills, public testing, competitive framing
- 1 point: Mixed messaging; some safety, some pressure
- 2 points: Generally low-pressure; minor areas of improvement
- 3 points: Excellent anxiety management; psychologically safe environment

**Findings Template**:
- Finding ID: F-ANX-001
- Severity: [Critical/High/Medium/Low]
- Description: "Anxiety management approach: [description]. Pressure elements: [if present]. Safety features: [present/absent]."
- Remediation: "Remove [specific pressure tactics]. Add [anxiety management strategies]."

### 8. Assessment and Progress Monitoring Integration

**Criteria**:
- [ ] **Formative Assessment Frequent**: Regular check-ins during instruction (not just end-of-unit)
- [ ] **Multiple Measures**: Subitizing, magnitude, computation, reasoning all assessed
- [ ] **Mastery-Based Progression**: Advancement based on demonstrated understanding, not time
- [ ] **Data Visibility**: Progress tracked and shared with student
- [ ] **Decision Rules Clear**: Protocol for adjusting instruction based on progress (if X, then Y)
- [ ] **Error Analysis**: Student errors analyzed for conceptual vs. procedural issues
- [ ] **Untimed Assessment**: Formative assessment not timed; time-pressure not used until fluency stage

**Scoring**:
- 0 points: No progress monitoring; annual assessment only
- 1 point: Infrequent assessment; limited data use
- 2 points: Regular assessment; some data-based decisions
- 3 points: Robust progress monitoring; responsive instruction

**Findings Template**:
- Finding ID: F-PM-001
- Severity: [Critical/High/Medium/Low]
- Description: "Assessment integration: [frequency and types]. Decision-making: [data-driven/informal]."
- Remediation: "Add [specific progress monitoring measures]. Establish decision rules for [adjusting intensity/changing strategy]."

### 9. Equity and Inclusivity

**Criteria**:
- [ ] **Diverse Representations**: Multiple ethnicities, family structures, abilities shown in examples
- [ ] **Non-Discriminatory Language**: No stereotypes; respectful, inclusive terminology
- [ ] **Accessibility Beyond Dyscalculia**: Considered vision, hearing, motor, language diversity
- [ ] **Cultural Responsiveness**: Examples reflect diverse cultural contexts; not deficit-based
- [ ] **Disability Normalization**: Dyscalculia presented as learning difference, not deficit or "stupidity"
- [ ] **Universal Design for Learning (UDL)**: Multiple means of representation, action, engagement

**Scoring**:
- 0 points: Limited diversity; potentially offensive language; not inclusive
- 1 point: Some diversity; mixed messaging on disability
- 2 points: Good diversity and representation; minor inclusivity gaps
- 3 points: Excellent inclusive design; diverse representations throughout

**Findings Template**:
- Finding ID: F-EQ-001
- Severity: [Critical/High/Medium/Low]
- Description: "Diversity representation: [present/limited]. Language: [inclusive/problematic]. Accessibility: [multimodal/limited]."
- Remediation: "Add diverse representations of [specific groups/contexts]. Replace [problematic language] with [alternatives]."

### 10. Comorbidity Support

**Criteria**:
- [ ] **Dyslexia Considerations**: Multisensory numeral formation; auditory support for reading numbers
- [ ] **ADHD Considerations**: Shorter tasks, movement breaks, external organization supports
- [ ] **Dysgraphia Considerations**: Verbal response options; typed instead of handwritten
- [ ] **Spatial Deficits**: Clear place value models; spatial relationships explicitly taught
- [ ] **Language Difference**: Simplified, clear language; visual supports for ELL students

**Scoring**:
- 0 points: No accommodation for comorbidities
- 1 point: Limited consideration of comorbidities
- 2 points: Good support for common comorbidities
- 3 points: Robust support for multiple comorbidities

**Findings Template**:
- Finding ID: F-COM-001
- Severity: [Critical/High/Medium/Low]
- Description: "Comorbidity support includes [specific accommodations]. Missing support for: [conditions]."
- Remediation: "Add [specific strategies] for [comorbid condition]."

## Audit Report Template

### DYSCALCULIA-FRIENDLY CONTENT AUDIT

**Content**: [Name/Title]
**Format**: [Curriculum/Tool/Lesson/Assessment/Worksheet]
**Audience**: [Grade range]
**Audit Date**: [Date]
**Auditor**: [Name]
**Audit Depth**: [Quick/Standard/Deep]

### Executive Summary
[1-2 sentence overview of findings; overall compliance percentage]

### Overall Accessibility Score
[Composite score across 10 dimensions; 0-30 scale where 30 = excellent dyscalculia-friendliness]

### Findings by Dimension

| Dimension | Score | Status | Key Findings |
|-----------|-------|--------|--------------|
| CRA Fidelity | [0-3] | [Pass/Concern/Fail] | [Brief description] |
| Number Sense | [0-3] | [Pass/Concern/Fail] | [Brief description] |
| Multisensory | [0-3] | [Pass/Concern/Fail] | [Brief description] |
| Manipulative Use | [0-3] | [Pass/Concern/Fail] | [Brief description] |
| Visual Accessibility | [0-3] | [Pass/Concern/Fail] | [Brief description] |
| Accommodations | [0-3] | [Pass/Concern/Fail] | [Brief description] |
| Math Anxiety | [0-3] | [Pass/Concern/Fail] | [Brief description] |
| Progress Monitoring | [0-3] | [Pass/Concern/Fail] | [Brief description] |
| Equity/Inclusion | [0-3] | [Pass/Concern/Fail] | [Brief description] |
| Comorbidity Support | [0-3] | [Pass/Concern/Fail] | [Brief description] |

### Detailed Findings

#### CRITICAL Issues (Must Address Immediately)

**F-001**: [Finding ID]
- **Dimension**: [CRA/Number Sense/etc.]
- **Description**: [What is problematic]
- **Impact**: [How it harms dyscalculic students]
- **Remediation**: [Specific fix needed]
- **Effort**: [Small/Medium/Large hours]

[Continue for all CRITICAL findings]

#### HIGH Issues (Address Within 1-2 Months)

[Same format as CRITICAL]

#### MEDIUM Issues (Address Within 3-6 Months)

[Same format]

#### LOW Issues (Continuous Improvement)

[Same format]

### Strengths (Areas of Excellence)

- [Area with strong compliance; specific evidence]
- [Area with good implementation; example]

### Recommendations

**Priority 1** (Highest impact; easiest effort):
- [Action]
- [Action]

**Priority 2** (High impact; moderate effort):
- [Action]

**Priority 3** (Good to have; larger effort):
- [Action]

### Remediation Roadmap

| Action | Owner | Timeline | Resources | Success Criteria |
|--------|-------|----------|-----------|-----------------|
| [Fix CRITICAL finding] | [Person] | [Weeks] | [What's needed] | [How to know it's done] |

### Conclusion

[Summary of overall dyscalculia-friendliness; key strengths; priority improvements needed]

---

## Example Audits

### Audit 1: Worksheet
```
/content-accessibility-check "Grade 2 Addition Worksheet" --format worksheet --audience early-elementary --depth standard
```

### Audit 2: App
```
/content-accessibility-check "MathPro Elementary App v2" --format tool --audience elementary --depth deep
```

### Audit 3: Lesson
```
/content-accessibility-check "Unit 3: Regrouping in Addition" --format lesson --audience elementary --depth quick
```

## Related Commands

- `/dyscalculia-audit`: Full program/system audit
- `/generate-iep`: Create IEP with accommodations matching content accessibility
- `/remediation-plan`: Develop plan based on content accessibility findings

## See Also

- `skills/gap-analysis`: Dyscalculia UX Heuristics and Content Audit Checklist
- `skills/remediation-strategies`: CRA methodology details for audit reference
