# Dyscalculia Support Skill

[![CI](https://github.com/justice8096/dyscalculia-support-skill/actions/workflows/ci.yml/badge.svg)](https://github.com/justice8096/dyscalculia-support-skill/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A comprehensive, portable dyscalculia support system built on evidence-based CRA (Concrete-Representational-Abstract) methodology with compliance to NCTM, IDEA, and Section 504 standards.

> **AI-Assisted Development**: This project was built with Claude AI assistance. See [audits/contribution-analysis.md](audits/contribution-analysis.md) for the full human-vs-AI attribution breakdown.

## What It Does

Provides educators, special education professionals, and parents with:

- **Standards Compliance Audits** — Evaluate curricula against NCTM, IDEA, Section 504, and UDL
- **Gap Analysis** — Identify specific dyscalculia deficits across math domains
- **Remediation Planning** — CRA-based intervention plans customized by anxiety level and intensity
- **IEP Document Generation** — Compliant, personalized Individualized Education Programs
- **Content Accessibility Evaluation** — Assess educational materials for dyscalculia accessibility

## Commands

| Command | Description |
|---------|-------------|
| `/dyscalculia-audit` | Run a standards compliance audit on a program, tool, or curriculum |
| `/generate-iep` | Generate a math-focused IEP from student profile data |
| `/remediation-plan` | Create a CRA-based remediation plan with lesson templates |
| `/content-accessibility-check` | Audit content for dyscalculia-friendly design |

## Quick Start

```bash
git clone https://github.com/justice8096/dyscalculia-support-skill.git
cd dyscalculia-support-skill
npm install
npm run build        # Build all 6 distribution formats
npm test             # Run 42 integration tests across 7 suites
npm run type-check   # TypeScript validation
npm run audit        # Security audit
```

## Platform Support

This skill builds to 6 formats from a single source of truth in `source/`:

| Format | Use Case | Build Command | Output |
|--------|----------|---------------|--------|
| **Claude Code Plugin** | Claude.ai / Claude Code | `npm run build` | `dist/claude-plugin/` |
| **MCP Server** | External LLM integration | `npm run build` | `dist/mcp-server/` |
| **OpenAI Functions** | GPT-4 function calling | `npm run build` | `dist/openai/` |
| **n8n Workflow Node** | Automation & workflows | `npm run build` | `dist/n8n/` |
| **Prompt Library** | Standalone prompt templates | `npm run build` | `dist/prompts/` |
| **CLI Audit Tool** | Command-line auditing | `npm run build` | `dist/cli/` |

## Project Structure

```
dyscalculia-support-skill/
├── source/                  # Single source of truth
│   ├── manifest.json        # Central definition (4 skills, 4 commands)
│   ├── skills/              # Skill markdown files
│   ├── commands/            # Command markdown files
│   └── templates/           # Document templates
├── build.ts                 # Multi-format build system
├── test-build.ts            # 42-test integration suite (7 suites)
├── skills/                  # Cowork plugin skill directories
├── commands/                # Cowork plugin command files
├── audits/                  # Security & compliance audit reports
├── sbom.cdx.json            # CycloneDX SBOM
├── SECURITY.md              # Vulnerability disclosure policy
└── .github/workflows/ci.yml # CI pipeline (Node 18/20/22)
```

## Standards & Research Foundation

Grounded in:

- **CRA Methodology** — Concrete-Representational-Abstract progression (Bruner, 1966)
- **NCTM Standards** — 5 content + 5 process strands
- **IDEA** — Individuals with Disabilities Education Act
- **Section 504** — Rehabilitation Act of 1973
- **Kosc's 6 Subtypes** — Verbal, practognostic, lexical, graphical, ideognostical, operational
- **Evidence-based programs** — TouchMath, Number Worlds, Stern Structural Arithmetic, Singapore Math

## Contributing

Contributions welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

Areas where help is especially needed:

- State-specific dyscalculia mandate data
- Additional evidence-based program profiles
- Translations and multilingual support
- Validation studies for gap-analysis measures
- Integration examples with EdTech platforms

## License

MIT
