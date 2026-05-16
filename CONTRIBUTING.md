# Contributing

Contributions are welcome! Here's how to get started.

## Development Setup

```bash
git clone https://github.com/justice8096/dyscalculia-support-skill.git
cd dyscalculia-support-skill
npm install
```

## Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-change`)
3. Make your changes in `source/` (the single source of truth)
4. Build all formats: `npm run build`
5. Run tests: `npm test`
6. Run type check: `npm run type-check`
7. Run security audit: `npm run audit`
8. Commit and push your branch
9. Open a Pull Request

## Source Structure

All content lives in `source/`. The build system (`build.ts`) generates 7 outputs from this single source. Never edit files in `dist/` directly — they are overwritten on every build. **Never edit `commands/*.md` or `skills/*/SKILL.md` at the repo root directly** — they are also overwritten on every build by the root-canonical sync step (see below).

- `source/manifest.json` — Central definition of skills and commands
- `source/skills/*.md` — Skill content (one file per skill)
- `source/commands/*.md` — Command content (one file per command)
- `source/templates/*.md` — Document templates

### Build outputs

Each `npm run build` writes:

- `dist/claude-plugin/` — Claude Code plugin format
- `dist/openai/functions.json` — OpenAI function schemas
- `dist/n8n/DyscalculiaAudit.node.json` — n8n node definition
- `dist/prompts/*.yaml` — prompt library
- `dist/mcp-server/` — standalone MCP server (TypeScript)
- `dist/cli/` — standalone CLI audit tool
- `commands/*.md` + `skills/*/SKILL.md` — **root canonical, synced from `source/`** with YAML frontmatter `description` re-derived from `source/manifest.json` (any existing `argument-hint` / `allowed-tools` fields in root frontmatter are preserved)

Run a single output format with `npm run build:<format>` (formats: `claude-plugin`, `openai`, `n8n`, `prompts`, `mcp`, `cli`, `root-canonical`).

### Root canonical drift — do not bypass

The Claude Code marketplace points at `./` (`.claude-plugin/marketplace.json` `source: "./"`), so the plugin Claude Code installs reads root `commands/*.md` and `skills/*/SKILL.md`. **These files must remain build artifacts of `source/`** — edits made directly to root canonical without a corresponding `source/` change will be overwritten on the next build. If you need a content change, edit `source/` and run `npm run build`; the root-canonical sync step propagates it.

Pre-v1.3.0 the build did NOT sync root from source, and root canonical drifted from source between the marketplace scaffold (`c4b7f9d`) and v1.3.0 (`fa4d2fe`) — root missed the v1.1.0 W3C COGA additions, the v1.2.0 neurodevelopmental-cognitive-disorder reframe, and parts of the FR/ES expansion landed via PR #6. v1.3.0 added the sync step so this drift cannot recur.

## Testing

The test suite (`test-build.ts`) runs 42 tests across 7 suites covering all build formats. Tests must pass before merging.

```bash
npm test              # Run all tests
npx tsx test-build.ts --verbose          # Verbose output
npx tsx test-build.ts --format openai    # Test a single format
```

## Areas Where Help Is Needed

- State-specific dyscalculia mandate data
- Additional evidence-based program profiles
- Translations and multilingual support
- Validation studies for gap-analysis measures
- Integration examples with EdTech platforms

## Code of Conduct

Be respectful and constructive. This project serves educators and students with learning differences — keep that mission in mind.
