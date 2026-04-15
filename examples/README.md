# Examples

## Sample Audit Reports

These reports demonstrate the full 8-dimension audit output format:

- **[eduprogress-academy-audit-2026-04-15.md](eduprogress-academy-audit-2026-04-15.md)** — K-12 math learning platform (React/Next.js). Scores 2.8/5 overall. Highlights critical dyslexia failures (serif font, justified text, 14px body) and dyscalculia failures (math CAPTCHA, manual grade calculation, dense tables). Strong UX and visual design.

- **[cloudmetrics-dashboard-audit-2026-04-15.md](cloudmetrics-dashboard-audit-2026-04-15.md)** — SaaS analytics dashboard (Angular/D3.js). Scores 3.3/5 overall. Highlights accessibility gaps (D3 charts invisible to screen readers, keyboard navigation issues) and performance problems (1.8MB bundle, 14 API calls on load). Excellent UX and visual design.

## Build Format Examples

Example outputs are generated during the build process. Run `npm run build` to produce all formats in `dist/`.

### Claude Code Plugin
```bash
npm run build
# Plugin in dist/claude-plugin/ — install by pointing Claude Code to plugin.json
```

### MCP Server
```bash
npm run build
cd dist/mcp-server && npm install && npx tsx src/index.ts
```

### OpenAI Functions
```bash
npm run build
# Load dist/openai/functions.json into your OpenAI API calls
```

### n8n Node
```bash
npm run build
# Import the .node.json file from dist/n8n/ into your n8n instance
```
