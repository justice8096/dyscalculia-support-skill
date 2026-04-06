# /remediation-plan

Create a comprehensive, CRA-based remediation plan for dyscalculia intervention.

## Usage

```
/remediation-plan <student-name> [--duration <weeks>] [--focus <domain>] [--intensity <frequency>] [--anxiety <level>]
```

## Required Information

- **Student Name**: Full name
- **Current Math Level**: Approximate grade level of performance (independent of actual grade)
- **Assessment Data**: Current number sense, computation, fluency, reasoning scores/observations
- **IEP Goals** (if applicable): Specific goals to address

## Optional Flags

### --duration
Length of remediation plan (default: 12 weeks):
- `6`: Short-term intensive focus
- `12`: Standard quarter-long plan
- `24`: Extended 6-month intervention

### --focus
Primary domain to emphasize (default: number-sense):
- `number-sense`: Subitizing, magnitude, cardinality, part-whole
- `computation`: Addition/subtraction algorithms with place value
- `fluency`: Fact retrieval and computational speed
- `problem-solving`: Word problems and reasoning
- `comprehensive`: Balanced focus across all domains

### --intensity
Instructional frequency (default: 3x-per-week):
- `intensive`: 5x per week, 45-60 min sessions (for critical deficits)
- `standard`: 3x per week, 30-45 min sessions (typical special ed model)
- `moderate`: 2x per week, 30 min sessions (supplemental to general classroom)

### --anxiety
Math anxiety level (influences environmental and motivational design):
- `low`: Standard instructional design
- `moderate`: Extra positive reinforcement, low-pressure assessment, growth mindset emphasis
- `high`: Significant anxiety management focus; safe environment paramount; untimed instruction throughout

## What This Command Does

1. **Analyzes Student Profile**: Identifies specific deficits and strengths
2. **Selects Instructional Programs**: Recommends evidence-based programs based on profile (TouchMath, Number Worlds, Stern, Singapore Math adaptations, Strategic Math)
3. **Designs CRA Progression**: Creates concreteâ†’representationalâ†’abstract sequence aligned to student needs
4. **Specifies Manipulatives**: Details which concrete tools needed for each lesson phase
5. **Plans Lesson Sequence**: Phase 1 (number sense), Phase 2 (concrete operations), Phase 3 (representational), Phase 4 (abstract)
6. **Creates Sample Lessons**: Detailed lesson plans demonstrating CRA progression
7. **Defines Progress Monitoring**: Specific measures, frequency, decision rules
8. **Addresses Math Anxiety**: Environmental, instructional, and assessment modifications to reduce anxiety
9. **Develops Home Connection**: Guidance for family support (brief, low-stress activities)
10. **Outputs Remediation Plan Document**: Comprehensive, implementation-ready plan

## Remediation Plan Structure

### 1. Student Profile Summary
- Current grade and math performance level
- Specific deficits (number sense, computation, fluency, reasoning)
- Math anxiety level and manifestations
- Learning preferences (tactile, visual, kinesthetic, auditory)
- Comorbidities affecting instruction (dyslexia, ADHD, dysgraphia)
- Strengths to leverage

### 2. Goal Statement
- Long-term goal for remediation plan (e.g., "Develop foundational number sense and subitizing competency")
- Short-term progress milestones (e.g., "By week 4, subitize quantities 1-3 with 90% accuracy")

### 3. Phase 1: Number Sense Foundation (Weeks 1-4)

**Rationale**: All computation is impossible without robust number sense

**Focus Areas**:
- Subitizing quantities 1-5
- Magnitude comparison ("more/less/equal")
- Counting and cardinality
- Quantity visualization

**Program**: Number Worlds or similar

**Manipulatives**: Counters, fingers, dot cards, Rekenrek

**Sample Lesson - Subitizing (Concrete Stage)**:
- Review: Show fingers 1-3; instant identification
- New Learning: Display 4-5 items for 2 seconds; student identifies quantity without counting
- Practice: Repeated subitizing with varied manipulatives (counters, dots, blocks)
- Assessment: Subitizing accuracy on 10 trials

**Progress Monitoring**: Subitizing fluency probes (trials to mastery); accuracy percent

**Pacing**: Advance when student subitizes quantities 1-5 with 90% accuracy in <2 seconds

### 4. Phase 2: Concrete Operations (Weeks 5-8)

**Focus**: Addition and subtraction with manipulatives; building understanding before procedure

**Key Principle**: Concrete stage must be extended; students must demonstrate mastery before advancing

**Program**: Stern Structural Arithmetic, Number Worlds, or TouchMath

**Manipulatives**: Base-10 blocks, counters, Rekenrek, measuring tape, number line

**Sample Lesson - Addition (Concrete Stage)**:
- Review: Quantity identification and subitizing
- New Learning: "Show me 3 blocks. Show me 2 more. How many altogether?"
- Repeated practice: Student constructs quantities and combines; counts result (or subitizes if able)
- Representation: Transition to drawing blocks (move to representational stage only after concrete mastery)

**Progress Monitoring**: Computation accuracy with manipulatives; speed and errors

**Pacing**: Move to representational stage when student computes single-digit addition 0-10 with 85% accuracy using manipulatives

### 5. Phase 3: Representational Operations (Weeks 9-12)

**Focus**: Pictorial and semi-concrete models; reducing concrete support gradually

**Key Principle**: Gradual fade of manipulatives as mental imagery develops

**Manipulatives**: Still available but used less; primary work with pictures/diagrams/ten-frames

**Sample Lesson - Addition (Representational Stage)**:
- Review: Concrete manipulation of quantities
- New Learning: Draw circles or use ten-frame to represent addition
- Practice: Student draws models of addition problems; labels with numerals
- Representation Fade: Gradually reduce detail of drawings; move toward abstract notation

**Progress Monitoring**: Accuracy with representational models; transition to abstract

**Pacing**: Move to abstract stage when student solves addition problems with 80% accuracy using diagrams; concrete manipulatives available if needed

### 6. Phase 4: Abstract Operations (Beyond Week 12)

**Focus**: Symbolic algorithms; emphasis on strategy flexibility and reasoning

**Prerequisite**: Solid concrete and representational competency (not time-based)

**Manipulatives**: Still available for students who need them; not removed

**Lesson Structure**:
- Strategic discussion (multiple algorithms presented)
- Student selection of strategy
- Problem-solving with verification
- Reasoning and explanation

**Progress Monitoring**: Fact fluency, computational accuracy, strategy flexibility, explanation quality

### 7. Specific Program Implementation

Based on student profile, detailed guidance for:

**TouchMath** (if subitizing/counting bridge needed):
- Use raised touch points on numerals
- Combine with finger counting
- Transition to representational models after quantity recognition

**Number Worlds** (if comprehensive number sense):
- Year-long sequential progression
- Large/small group stations with manipulatives
- Pacing flexible; may repeat units for mastery

**Stern Structural Arithmetic** (if place value weak):
- Golden beads represent quantities directly
- Visual place value relationships (ones/tens/hundreds)
- Extended concrete stage with golden bead operations

**Singapore Math Adaptations** (if reasoning important):
- Emphasize model-dependent problem solving
- Extend concrete stage before bar diagrams
- Develop multiple solution strategies

**Strategic Math Series** (if working memory affected):
- Explicit strategy instruction
- Metacognitive scaffolding
- External cognitive supports (step cards, reference sheets)

### 8. Accommodations for Phase Implementation

**Throughout All Phases**:
- Manipulatives permanently available (never denied)
- Math anxiety addressed through safe environment
- Untimed practice and formative assessment
- Private feedback and assessment
- Positive reinforcement for effort and strategy

**Phase-Specific**:
- **Phase 1**: Frequent, short sessions (10-15 min); high success rate
- **Phase 2**: Concrete materials at hand; no expectation of mental math
- **Phase 3**: Manipulatives available if representational fails; no shame in using concrete tools
- **Phase 4**: Calculator available; focus on reasoning and strategy, not computation speed

### 9. Progress Monitoring Plan

**Measures Collected**:
- **Subitizing Fluency**: Number of items correctly identified; speed (seconds)
- **Magnitude Comparison Accuracy**: Percent correct on "more/less/equal" tasks
- **Computation Accuracy**: Percent correct on single-digit and multi-digit operations (with manipulatives in Phase 2, representational in Phase 3, symbolic in Phase 4)
- **Strategy Flexibility**: Number of different strategies used; ability to explain strategy choice
- **Work Sample Analysis**: Error patterns, conceptual misunderstandings, manipulative use

**Frequency**:
- **Phase 1-2** (foundational): Weekly probes; data review at weekly instructional planning meeting
- **Phase 3** (representational): Bi-weekly probes; data review at bi-weekly meetings
- **Phase 4** (abstract): Bi-weekly to monthly; review at monthly meetings

**Decision Rules**:
- **Adequate Progress**: 1+ additional correct responses per week; advance phase/adjust only if needed
- **Inadequate Progress**: <1 correct additional response per week; intensify instruction
  - Increase frequency or duration
  - Change strategy or program
  - Extend current phase; do not advance

### 10. Lesson Plan Templates

#### Lesson Template - Concrete Stage

**Objective**: [What student will learn/demonstrate]

**Materials**: [Concrete manipulatives needed]

**Review** (5 min):
- Subitizing practice (2-3 quantities)
- Prior concept review

**New Learning - Concrete** (10-15 min):
- Teacher models with manipulatives: "Watch me show 3 blocks and 2 more blocks"
- Guided exploration: "Can you show me 3 and 2?"
- Student discovery: "What happened when we put them together?"
- Conceptual discussion: "How many altogether? How do you know?"

**Guided Practice - Concrete** (10-15 min):
- Repeated trials with different quantities
- Student constructs, manipulates, counts
- Teacher provides immediate feedback

**Assessment Check** (5 min):
- Quick mastery check: 3-5 representative problems
- Teacher notes: Correct, correct, error pattern, correct
- Adjustment: If 80%+ accuracy, ready for representational. If <80%, repeat lesson tomorrow.

#### Lesson Template - Representational Stage

**Objective**: [Transition from concrete to pictures]

**Materials**: [Drawing paper, pencils, ten-frames, manipulatives for reference]

**Review** (5 min):
- Concrete manipulation of prior concept
- Quick subitizing

**New Learning - Representational** (10-15 min):
- Teacher models: "Here are 3 blocks. Now I'll draw 3 circles to show the same thing"
- Guided transition: "You have 3 blocks. Draw circles to match your blocks"
- Representation fading: "Now draw the blocks without looking at yours; can you remember 3?"

**Guided Practice - Representational** (10-15 min):
- Student draws pictures of addition combinations
- Numerals labeled on drawings
- Manipulatives available if needed

**Assessment Check** (5 min):
- Representational accuracy: Can student draw to represent quantities and operations?
- If 80%+ accuracy with drawings, ready for abstract. If <80%, return to concrete/representational combination.

### 11. Family Connection and Home Support

**Recommendations for Parents**:
- Very brief, low-pressure activities (5-10 minutes, 2-3x per week)
- Focus on concrete, playful number activities (not worksheets)
- Examples:
  - "Which hand has more fingers up?"
  - "Show me 3 pennies, now 2 pennies. How many altogether?"
  - "How many steps to the bathroom?"
  - Card games involving number recognition and comparison
- **Do NOT**: Flashcards, timed drills, or pressure-based practice
- **Do**: Fun, brief, with concrete objects

**Communication**: Monthly progress reports; ask for parent observations of math activities at home

### 12. Timeline and Milestones

| Week | Phase | Focus | Milestone/Success Criterion |
|------|-------|-------|----------------------------|
| 1-2 | Phase 1 | Subitizing 1-3 | Subitize 1-3 with 90% accuracy |
| 3-4 | Phase 1 | Subitizing 4-5 | Subitize 1-5 with 90% accuracy |
| 5-6 | Phase 2 | Concrete addition | Single-digit addition with manipulatives, 85% accuracy |
| 7-8 | Phase 2 | Concrete with regrouping | Addition with regrouping if readiness shown |
| 9-10 | Phase 3 | Representational addition | Draw models, 80% accuracy; reduce manipulative use |
| 11-12 | Phase 3 | Representational mastery | Independent representational problem-solving |
| 13+ | Phase 4 | Abstract/symbolic | Symbolic addition; introduce strategy flexibility |

### 13. Math Anxiety Management (Throughout All Phases)

**Environmental Supports**:
- Private, low-distraction setting for instruction and assessment
- Calm, encouraging tone; normalize struggle
- No time pressure; untimed practice emphasized
- Safe to make errors; errors are learning opportunities

**Instructional Supports**:
- Early success: Design activities for frequent correct responses
- Growth mindset: "Your brain grows when you try hard and make mistakes"
- Effort recognition: "You worked really carefully on that; great thinking!"
- Strategy focus: "Let's try a different way; you're solving this step by step"

**Assessment Modifications**:
- Formative assessment only during instruction (not evaluated)
- Private feedback from teacher
- Positive feedback on reasoning and effort
- No peer comparison or public performance

**Student Engagement**:
- Choice: "Do you want to use blocks or counters?"
- Autonomy: Student decides pace and sequencing when possible
- Relevance: Connect to student interests when possible
- Competence: Ensure frequent success and skill development

### 14. Remediation Plan Summary

- **Student**: [Name]
- **Plan Duration**: [Weeks]
- **Frequency**: [X times per week]
- **Primary Program**: [Name]
- **Expected Progress**: [Specific milestone by end of plan]
- **Service Provider**: [Special education teacher name/credential]
- **Family Involvement**: [How parents will support]
- **Re-evaluation Date**: [When plan will be reviewed and adjusted]

## Example Plans

### Plan 1: Grade 1, Weak Subitizing and Counting
```
/remediation-plan Aisha-Johnson --duration 12 --focus number-sense --intensity standard --anxiety moderate
```

### Plan 2: Grade 3, Operational Dyscalculia (Can't Execute Algorithms)
```
/remediation-plan Marcus-Williams --duration 12 --focus computation --intensity intensive --anxiety high
```

### Plan 3: Grade 5, Weak Fluency with Comorbid ADHD
```
/remediation-plan Elijah-Brown --duration 8 --focus fluency --intensity standard --anxiety low
```

## Monitoring Fidelity

Use this checklist to verify plan implementation with fidelity:

- [ ] CRA progression followed: concreteâ†’representationalâ†’abstract
- [ ] Manipulatives used in all Phase 1-2 lessons
- [ ] Concrete stage mastery verified before advancing
- [ ] Progress monitoring data collected weekly (Phase 1-2) or bi-weekly (Phase 3)
- [ ] Data reviewed at planned intervals; decisions made based on progress rate
- [ ] Intervention adjusted if progress inadequate (<1 correct additional per week)
- [ ] Math anxiety accommodations implemented (private, untimed, safe environment)
- [ ] Family communication regular (monthly minimum)

## Related Commands

- `/generate-iep`: Create IEP with goals aligned to remediation plan
- `/dyscalculia-audit`: Audit school implementation of remediation plans
- `/content-accessibility-check`: Verify materials used in remediation plan are dyscalculia-accessible

## See Also

- `skills/remediation-strategies`: Full CRA methodology, programs, lesson templates
- `skills/standards-compliance`: Progress monitoring specifications
- `skills/document-generation`: Progress monitoring report templates

