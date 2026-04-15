# Examples

Example outputs are generated during the build process. Run `npm run build` to produce all formats in `dist/`.

## Quick Usage Examples

### Claude Code Plugin
```bash
# Build the plugin
npm run build

# The plugin is in dist/claude-plugin/
# Install by pointing Claude Code to dist/claude-plugin/plugin.json
```

### MCP Server
```bash
# Build the MCP server
npm run build

# Install and run
cd dist/mcp-server
npm install
npx tsx src/index.ts
```

### OpenAI Functions
```bash
# Build function schemas
npm run build

# Load dist/openai/functions.json into your OpenAI API calls
```

### n8n Node
```bash
# Build the n8n node
npm run build

# Import dist/n8n/DyscalculiaAudit.node.json into your n8n instance
```
