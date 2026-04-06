# /generate-iep

Generate a comprehensive, legally-compliant, math-focused IEP from student profile data.

## Usage

```
/generate-iep <student-name> [--grade <grade>] [--subtype <kosc-subtype>] [--anxiety <level>] [--comorbidities <conditions>]
```

## Required Information

- **Student Name**: Full name
- **Grade**: Current grade level (K-12)
- **Assessment Data**: KeyMath-3 or TEMA-3 scores (or similar math achievement data)
- **Cognitive Data**: IQ score (from WISC-V or similar)
- **Intervention History**: What Tier 2/3 interventions have been tried; outcomes

## Optional Flags

### --subtype
Kosc's six dyscalculia subtypes (determines intervention focus):
- `verbal`: Difficulty with number naming, counting sequences, fact retrieval
- `practognostic`: Spatial arrangement deficits, finger gnosia issues
- `lexical`: Difficulty reading/recognizing numerals and symbols
- `graphical`: Difficulty writing numerals and notation
- `operational`: Cannot execute algorithms despite understanding
- `ideognostical`: Cannot understand numerical concepts and relationships
- Multiple subtypes allowed: `--subtype verbal lexical`

### --anxiety
Math anxiety severity level (influences accommodation and instructional emphasis):
- `low`: Occasional hesitation; doesn't significantly interfere with performance
- `moderate`: Visible anxiety in math situations; impacts performance; avoidance at times
- `high`: Significant anxiety; marked avoidance; shutdown behaviors; major barrier to performance

### --comorbidities
Co-occurring conditions (determines accommodation and multisensory emphasis):
- `dyslexia`: Affects number naming, numeral recognition
- `adhd`: Affects working memory, attention; requires shorter tasks, movement breaks
- `dysgraphia`: Affects number formation, showing work; requires alternative response formats
- `dyscalculia-dyslexia`: Combined profile; requires both structured math and literacy supports
- Multiple conditions allowed: `--comorbidities dyslexia adhd`

## What This Command Does

1. **Gathers Student Profile Data**: Collects or validates assessment results, intervention history, strengths/deficits
2. **Generates Present Levels (PLAAFP)**: Math-specific performance description including:
   - Number sense current level
   - Computation strengths/deficits
   - Fluency assessment
   - Problem-solving ability
   - Math anxiety manifestations
   - Formal assessment data summary
   - RTI/intervention history

3. **Creates IEP Goals**: Develops SMART, measurable goals for:
   - Number Sense Foundation
   - Computational Fluency
   - Problem Solving and Reasoning
   - Math Anxiety Management

4. **Specifies Services**: Detailed description of:
   - Frequency and duration
   - Setting (pull-out, push-in, hybrid)
   - Service provider and credentials
   - Instructional focus (CRA, multisensory, specific program)
   - Supplementary aids and services

5. **Documents Accommodations**: Clear specification of:
   - Calculator use parameters
   - Time accommodations
   - Presentation modifications
   - Response format options
   - Manipulatives and visual supports (always available)
   - Environmental accommodations

6. **Addresses LRE**: Describes how student will participate in general education with appropriate support

7. **Captures Comorbidity Considerations**: If ADHD/dyslexia/dysgraphia noted, accommodation and instruction tailored

8. **Documents Behavior/Social-Emotional**: Math anxiety and related concerns explicitly addressed

9. **Outputs IEP Document**: Professional, legally-compliant IEP ready for team review and signature

## Example Commands

### Basic IEP for Grade 2 Student with Dyscalculia
```
/generate-iep Emma-Martinez --grade 2
```

### IEP for High-Anxiety Student with Verbal and Lexical Dyscalculia
```
/generate-iep James-Chen --grade 4 --subtype verbal lexical --anxiety high
```

### IEP for Student with Dyscalculia + Dyslexia + ADHD
```
/generate-iep Sofia-Rodriguez --grade 5 --subtype operational --anxiety moderate --comorbidities dyslexia adhd
```

## Key Features of Generated IEPs

### Math-Specific PLAAFP
- Distinguishes number sense, computation, fluency, reasoning, and anxiety as separate domains
- Includes formal assessment data (KeyMath-3, TEMA-3, WRAT-5, CBM)
- Documents RTI history showing insufficient response to intensive intervention
- Describes impact of deficits on learning

### Goals Aligned to Domains
- **Number Sense Goal**: Subitizing, magnitude comparison, cardinality, part-whole
- **Fluency Goal**: Fact retrieval and computational speed with accuracy
- **Problem-Solving Goal**: Word problem comprehension, strategy selection, verification
- **Anxiety Management Goal**: Engagement without avoidance, self-regulation, resilience with struggle

### Evidence-Based Service Specifications
- Services explicitly state CRA methodology as instructional approach
- Programs named (TouchMath, Number Worlds, Stern, Singapore Math adaptations, Strategic Math)
- Manipulatives and visual supports listed as essential to instruction
- Frequency and duration based on severity of deficit

### Comprehensive Accommodations
- Accommodations are access-providing (not reducing rigor)
- Calculator use specified without impact on math reasoning assessment
- Extended time justified
- Manipulatives described as permanent, not "fading" (dyscalculia often requires ongoing support)
- Environmental accommodations address anxiety

### Legally Compliant Documentation
- IDEA requirements met (comprehensive evaluation, IEP components, parent involvement)
- LRE addressed (general education participation with accommodations)
- Free Appropriate Public Education (FAPE) ensured through services and accommodations
- Behavior/social-emotional considerations documented
- Language clear and understandable to parents

## Using the Generated IEP

1. **Team Review**: Share with IEP team (parents, general ed teacher, special ed teacher, administrator, psychologist)
2. **Customize**: Add school-specific information (service provider names, schedule details, related services)
3. **Signatures**: Obtain required signatures (parent consent, teacher signatures, administrator sign-off)
4. **Implementation**: Ensure accommodations and services are implemented with fidelity
5. **Progress Monitoring**: Establish and follow progress monitoring schedule
6. **Communication**: Regular (at minimum quarterly) progress reports to parents

## Accommodation Notes

### Accommodations Are NOT Modifications
- **Accommodations**: Provide ACCESS to curriculum; rigor unchanged (e.g., calculator for computation while still assessing reasoning)
- **Modifications**: Change CONTENT/expectations (e.g., student solves single-digit problems while peers solve multi-digit); reserved for students with intellectual disability

### Manipulatives Are Not Optional
- Dyscalculic students often need permanent access to concrete tools
- Using manipulatives while solving "abstract" problems is valid and necessary
- Manipulatives are accommodation, not sign of incomplete learning

### Extended Time Considerations
- Applied to assessment of problem-solving and reasoning, not just computation
- Allows time for concrete/representational models when needed
- Does NOT change expectation for accuracy or complexity

### Math Anxiety Accommodation
- Untimed practice and formative assessment during instruction
- Separate testing location (reduces anxiety from peer observation)
- Private feedback (reduces embarrassment)
- Positive reinforcement (builds efficacy)

## Related Commands

- `/remediation-plan`: Create a CRA-based remediation plan aligned with IEP goals
- `/dyscalculia-audit`: Audit school/program for IEP compliance
- `/content-accessibility-check`: Evaluate IEP accommodations implementation

## See Also

- `skills/standards-compliance`: Full IDEA requirements, IEP goal development, accommodation specifications
- `skills/document-generation`: IEP templates and guidance
- `skills/remediation-strategies`: CRA methodology, instructional programs, behavior guidelines

