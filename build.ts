import { readFileSync, writeFileSync, mkdirSync, existsSync, copyFileSync, rmSync, watch, readdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

interface CommandParameter {
  name: string;
  type: string;
  required: boolean;
  description: string;
  values?: string[];
  default?: string;
}

interface Command {
  id: string;
  name: string;
  description: string;
  category: string;
  syntax: string;
  parameters: CommandParameter[];
  output: string;
}

interface Skill {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
}

interface Repository {
  type: string;
  url: string;
}

interface Manifest {
  name: string;
  version: string;
  description: string;
  author: string;
  license: string;
  keywords: string[];
  repository: Repository;
  skills: Skill[];
  commands: Command[];
}

// ============================================================================
// VALIDATION FUNCTIONS
// ============================================================================

function validateCommandParameter(
  obj: Record<string, unknown>
): asserts obj is CommandParameter {
  if (
    typeof obj.name !== "string" ||
    typeof obj.type !== "string" ||
    typeof obj.required !== "boolean" ||
    typeof obj.description !== "string"
  ) {
    throw new Error("Invalid CommandParameter structure");
  }
}

function validateCommand(obj: Record<string, unknown>): asserts obj is Command {
  if (
    typeof obj.id !== "string" ||
    typeof obj.name !== "string" ||
    typeof obj.description !== "string" ||
    typeof obj.category !== "string" ||
    typeof obj.syntax !== "string" ||
    !Array.isArray(obj.parameters) ||
    typeof obj.output !== "string"
  ) {
    throw new Error("Invalid Command structure");
  }
  (obj.parameters as unknown[]).forEach((p) => validateCommandParameter(p as Record<string, unknown>));
}

function validateSkill(obj: Record<string, unknown>): asserts obj is Skill {
  if (
    typeof obj.id !== "string" ||
    typeof obj.name !== "string" ||
    typeof obj.description !== "string" ||
    typeof obj.category !== "string" ||
    !Array.isArray(obj.tags)
  ) {
    throw new Error("Invalid Skill structure");
  }
}

function validateManifest(
  obj: Record<string, unknown>
): asserts obj is Manifest {
  if (
    typeof obj.name !== "string" ||
    typeof obj.version !== "string" ||
    typeof obj.description !== "string" ||
    typeof obj.author !== "string" ||
    typeof obj.license !== "string" ||
    !Array.isArray(obj.keywords) ||
    typeof obj.repository !== "object" ||
    !Array.isArray(obj.skills) ||
    !Array.isArray(obj.commands)
  ) {
    throw new Error("Invalid Manifest structure");
  }
  (obj.skills as unknown[]).forEach((s) => validateSkill(s as Record<string, unknown>));
  (obj.commands as unknown[]).forEach((c) => validateCommand(c as Record<string, unknown>));
}

// ============================================================================
// SIMPLE YAML STRINGIFIER
// ============================================================================

function stringifyYaml(obj: unknown, indent: number = 2): string {
  function stringify(val: unknown, depth: number = 0): string {
    const spaces = " ".repeat(depth * indent);

    if (val === null || val === undefined) {
      return "null";
    }

    if (typeof val === "string") {
      if (val.includes("\n") || val.includes(":") || val.includes("#")) {
        return `'${val.replace(/'/g, "''")}'`;
      }
      return val;
    }

    if (typeof val === "number" || typeof val === "boolean") {
      return String(val);
    }

    if (Array.isArray(val)) {
      if (val.length === 0) {
        return "[]";
      }
      const items: string[] = [];
      for (const item of val) {
        const itemStr = stringify(item, depth + 1);
        if (typeof item === "object" && item !== null) {
          items.push(`- ${itemStr}`);
        } else {
          items.push(`- ${itemStr}`);
        }
      }
      return items.join(`\n${spaces}`);
    }

    if (typeof val === "object") {
      const entries = Object.entries(val);
      if (entries.length === 0) {
        return "{}";
      }
      const items: string[] = [];
      for (const [key, value] of entries) {
        if (typeof value === "object" && value !== null && !Array.isArray(value)) {
          items.push(`${key}:`);
          const nested = stringify(value, depth + 1);
          const nestedLines = nested.split("\n");
          for (const line of nestedLines) {
            items.push(`  ${line}`);
          }
        } else if (Array.isArray(value)) {
          items.push(`${key}:`);
          const nested = stringify(value, depth + 1);
          const nestedLines = nested.split("\n");
          for (const line of nestedLines) {
            items.push(`  ${line}`);
          }
        } else {
          const valueStr = stringify(value, depth + 1);
          items.push(`${key}: ${valueStr}`);
        }
      }
      return items.join(`\n${spaces}`);
    }

    return String(val);
  }

  return stringify(obj);
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

function ensureDir(path: string): void {
  mkdirSync(path, { recursive: true });
}

function readMarkdown(filePath: string): string {
  try {
    return readFileSync(filePath, "utf-8");
  } catch (error) {
    console.warn(`Warning: Could not read ${filePath}`);
    return "";
  }
}

function log(message: string): void {
  console.log(`[build] ${message}`);
}

function logSuccess(message: string): void {
  console.log(`✓ ${message}`);
}

function logError(message: string): void {
  console.error(`✗ ${message}`);
}

// ============================================================================
// LOAD SOURCE FILES
// ============================================================================

function loadManifest(): Manifest {
  log("Loading manifest.json...");
  const manifestPath = resolve(__dirname, "source/manifest.json");
  const manifestRaw = JSON.parse(readFileSync(manifestPath, "utf-8")) as Record<string, unknown>;
  validateManifest(manifestRaw);
  logSuccess(`Manifest loaded (${manifestRaw.commands.length} commands, ${manifestRaw.skills.length} skills)`);
  return manifestRaw;
}

function loadSkillMarkdown(skillId: string): string {
  const skillPath = resolve(__dirname, `source/skills/${skillId}.md`);
  return readMarkdown(skillPath);
}

function loadCommandMarkdown(commandId: string): string {
  const commandPath = resolve(__dirname, `source/commands/${commandId}.md`);
  return readMarkdown(commandPath);
}

function loadTemplateMarkdown(templateId: string): string {
  const templatePath = resolve(__dirname, `source/templates/${templateId}.md`);
  return readMarkdown(templatePath);
}

// ============================================================================
// CLAUDE PLUGIN GENERATION
// ============================================================================

function generateClaudePlugin(manifest: Manifest): void {
  log("Generating Claude Code plugin...");
  ensureDir(resolve(__dirname, "dist/claude-plugin"));

  const plugin = {
    name: manifest.name,
    version: manifest.version,
    description: manifest.description,
    author: manifest.author,
    license: manifest.license,
    repository: manifest.repository,
    commands: manifest.commands.map((cmd) => ({
      name: cmd.id,
      displayName: cmd.name,
      description: cmd.description,
      category: cmd.category,
      syntax: cmd.syntax,
    })),
    skills: manifest.skills.map((skill) => ({
      name: skill.id,
      displayName: skill.name,
      description: skill.description,
      category: skill.category,
    })),
    keywords: manifest.keywords,
  };

  writeFileSync(
    resolve(__dirname, "dist/claude-plugin/plugin.json"),
    JSON.stringify(plugin, null, 2)
  );
  // Copy skill markdown files
  const skillsDir = resolve(__dirname, "source/skills");
  const cmdDir = resolve(__dirname, "source/commands");
  const pluginSkillsDir = resolve(__dirname, "dist/claude-plugin/skills");
  const pluginCmdsDir = resolve(__dirname, "dist/claude-plugin/commands");

  if (existsSync(skillsDir)) {
    manifest.skills.forEach((skill) => {
      const srcFile = resolve(skillsDir, `${skill.id}.md`);
      if (existsSync(srcFile)) {
        const destDir = resolve(pluginSkillsDir, skill.id);
        ensureDir(destDir);
        copyFileSync(srcFile, resolve(destDir, "SKILL.md"));
      }
    });
  }

  if (existsSync(cmdDir)) {
    ensureDir(pluginCmdsDir);
    manifest.commands.forEach((cmd) => {
      const srcFile = resolve(cmdDir, `${cmd.id}.md`);
      if (existsSync(srcFile)) {
        copyFileSync(srcFile, resolve(pluginCmdsDir, `${cmd.id}.md`));
      }
    });
  }

  logSuccess("Claude plugin generated");
}

// ============================================================================
// OPENAI FUNCTION GENERATION
// ============================================================================

function generateOpenAIFunctions(manifest: Manifest): void {
  log("Generating OpenAI function schemas...");
  ensureDir(resolve(__dirname, "dist/openai"));

  const functions = manifest.commands.map((cmd) => {
    const properties: Record<string, unknown> = {};
    const required: string[] = [];

    cmd.parameters.forEach((param) => {
      const paramSchema: Record<string, unknown> = {
        type: param.type === "enum" ? "string" : param.type,
        description: param.description,
      };

      if (param.values) {
        paramSchema.enum = param.values;
      }

      if (param.default) {
        paramSchema.default = param.default;
      }

      properties[param.name] = paramSchema;

      if (param.required) {
        required.push(param.name);
      }
    });

    return {
      type: "function",
      function: {
        name: cmd.id.replace(/-/g, "_"),
        description: cmd.description,
        parameters: {
          type: "object",
          properties,
          required,
        },
      },
    };
  });

  writeFileSync(
    resolve(__dirname, "dist/openai/functions.json"),
    JSON.stringify(functions, null, 2)
  );
  logSuccess("OpenAI functions generated");
}

// ============================================================================
// N8N NODE GENERATION
// ============================================================================

function generateN8nNode(manifest: Manifest): void {
  log("Generating n8n node definition...");
  ensureDir(resolve(__dirname, "dist/n8n"));

  const operations = manifest.commands.map((cmd) => ({
    name: cmd.id.replace(/-/g, "_"),
    value: cmd.id.replace(/-/g, "_"),
    description: cmd.description,
    action: cmd.id.replace(/-/g, "_"),
    routing: {
      send: {
        when: [
          {
            condition: `={{ $parameter.operation === '${cmd.id.replace(/-/g, "_")}' }}`,
            output: cmd.id.replace(/-/g, "_"),
          },
        ],
      },
    },
  }));

  const node = {
    displayName: manifest.name,
    name: manifest.name.toLowerCase().replace(/[^a-z0-9]/g, "_"),
    icon: "file:dyscalculia.svg",
    group: ["transform"],
    version: 1,
    description: manifest.description,
    defaults: {
      name: manifest.name,
    },
    inputs: ["main"],
    outputs: ["main"],
    properties: [
      {
        displayName: "Operation",
        name: "operation",
        type: "options",
        options: operations,
        default: manifest.commands[0].id.replace(/-/g, "_"),
      },
      ...manifest.commands.flatMap((cmd) =>
        cmd.parameters.map((param) => ({
          displayName: param.name,
          name: param.name,
          type: param.type === "enum" ? "options" : "string",
          required: param.required,
          default: param.default || "",
          options: param.values?.map((v) => ({ name: v, value: v })) || [],
          displayOptions: {
            show: {
              operation: [cmd.id.replace(/-/g, "_")],
            },
          },
        }))
      ),
    ],
  };

  writeFileSync(
    resolve(__dirname, "dist/n8n/DyscalculiaAudit.node.json"),
    JSON.stringify(node, null, 2)
  );
  logSuccess("n8n node definition generated");
}

// ============================================================================
// PROMPT LIBRARY GENERATION
// ============================================================================

function generatePromptLibrary(manifest: Manifest): void {
  log("Generating prompt library...");
  ensureDir(resolve(__dirname, "dist/prompts"));

  // Generate index
  const promptIndex = {
    name: "Dyscalculia Support Prompts",
    version: manifest.version,
    description: manifest.description,
    author: manifest.author,
    keywords: manifest.keywords,
    prompts: manifest.commands.map((cmd) => ({
      id: cmd.id,
      name: cmd.name,
      description: cmd.description,
      file: `${cmd.id}.yaml`,
      category: cmd.category,
    })),
  };

  writeFileSync(
    resolve(__dirname, "dist/prompts/index.yaml"),
    stringifyYaml(promptIndex, 2)
  );

  // Generate individual prompt files
  manifest.commands.forEach((cmd) => {
    const prompt = {
      name: cmd.name,
      id: cmd.id,
      description: cmd.description,
      category: cmd.category,
      syntax: cmd.syntax,
      keywords: cmd.parameters
        .filter((p) => p.required)
        .map((p) => p.name),
      models: ["gpt-4", "gpt-4-turbo", "claude-3-opus", "claude-3-sonnet"],
      context: {
        role: "You are an expert educational psychologist specializing in dyscalculia (math learning disability) remediation. You implement evidence-based Concrete-Representational-Abstract (CRA) methodology in accordance with NCTM standards, IDEA requirements, and Section 504 accessibility guidelines.",
        expertise: [
          "Dyscalculia subtypes and manifestations",
          "CRA learning progression",
          "NCTM Principles & Standards",
          "IDEA and Section 504 compliance",
          "IEP development",
          "Math anxiety remediation",
          "Universal Design for Learning",
        ],
        values: ["Evidence-based practices", "Student-centered approach", "Accessibility-first design"],
      },
      parameters: cmd.parameters.map((p) => ({
        name: p.name,
        type: p.type,
        required: p.required,
        description: p.description,
        values: p.values,
        default: p.default,
      })),
      output: {
        format: "markdown",
        description: cmd.output,
      },
    };

    writeFileSync(
      resolve(__dirname, `dist/prompts/${cmd.id}.yaml`),
      stringifyYaml(prompt, 2)
    );
  });

  logSuccess("Prompt library generated");
}

// ============================================================================
// MCP SERVER GENERATION
// ============================================================================

function generateMcpServer(manifest: Manifest): void {
  log("Generating MCP server...");
  ensureDir(resolve(__dirname, "dist/mcp-server/src/tools"));
  ensureDir(resolve(__dirname, "dist/mcp-server/src/knowledge"));

  // Generate tool files
  generateMcpTools(manifest);

  // Generate knowledge loader
  generateMcpKnowledgeLoader();

  // Generate index.ts (main server)
  generateMcpIndex(manifest);

  // Generate package.json
  generateMcpPackageJson(manifest);

  // Generate tsconfig.json
  generateMcpTsConfig();

  // Copy knowledge markdown files
  const mcpKnowledgeSkills = resolve(__dirname, "dist/mcp-server/knowledge/skills");
  const mcpKnowledgeCmds = resolve(__dirname, "dist/mcp-server/knowledge/commands");
  const srcSkills = resolve(__dirname, "source/skills");
  const srcCmds = resolve(__dirname, "source/commands");

  ensureDir(mcpKnowledgeSkills);
  ensureDir(mcpKnowledgeCmds);

  if (existsSync(srcSkills)) {
    manifest.skills.forEach((skill) => {
      const srcFile = resolve(srcSkills, `${skill.id}.md`);
      if (existsSync(srcFile)) {
        copyFileSync(srcFile, resolve(mcpKnowledgeSkills, `${skill.id}.md`));
      }
    });
  }

  if (existsSync(srcCmds)) {
    manifest.commands.forEach((cmd) => {
      const srcFile = resolve(srcCmds, `${cmd.id}.md`);
      if (existsSync(srcFile)) {
        copyFileSync(srcFile, resolve(mcpKnowledgeCmds, `${cmd.id}.md`));
      }
    });
  }

  logSuccess("MCP server generated");
}

function generateMcpTools(manifest: Manifest): void {
  manifest.commands.forEach((cmd) => {
    const toolName = cmd.id.replace(/-/g, "_");
    const requiredParams = cmd.parameters
      .filter((p) => p.required)
      .map((p) => p.name);

    const paramDefs = cmd.parameters
      .map((p) => {
        let fieldDef = `  ${p.name}: z.${
          p.type === "enum"
            ? `enum([${p.values?.map((v) => `"${v}"`).join(", ") || ""}])`
            : `${p.type === "number" ? "number()" : "string()"}`
        }`;
        if (!p.required) fieldDef += ".optional()";
        if (p.default) fieldDef += `.default("${p.default}")`;
        fieldDef += ",";
        return fieldDef;
      })
      .join("\n");

    const paramProps = cmd.parameters
      .map((p) => {
        let prop = `      ${p.name}: { type: "${p.type === "enum" ? "string" : p.type}"`;
        if (p.description) prop += `, description: "${p.description}"`;
        if (p.values) prop += `, enum: [${p.values.map((v) => `"${v}"`).join(", ")}]`;
        prop += " }";
        return prop;
      })
      .join(",\n");

    const handlerName = `handle${toolName.replace(/_/g, "").charAt(0).toUpperCase()}${toolName.slice(1).replace(/_/g, "")}`;

    const toolCode = `import { Tool } from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";
import { loadSkillContent } from "../knowledge/loader.js";

// Zod schema for input validation
const ${toolName}Schema = z.object({
${paramDefs}
});

export const ${toolName}Tool: Tool = {
  name: "${toolName}",
  description: "${cmd.description}",
  inputSchema: {
    type: "object",
    properties: {
${paramProps}
    },
    required: [${requiredParams.map((p) => `"${p}"`).join(", ")}],
  },
};

export async function ${handlerName}(input: Record<string, unknown>): Promise<string> {
  const validated = ${toolName}Schema.parse(input);

  // Load relevant skill knowledge
  const skillContent = await loadSkillContent("${cmd.category}");

  // TODO: Implement tool logic using skillContent
  // For now, return placeholder response
  const response = {
    status: "success",
    command: "${cmd.id}",
    message: "Tool implementation pending. Knowledge loaded from skill files.",
    skill: skillContent.slice(0, 200) + "...",
  };

  return JSON.stringify(response, null, 2);
}`;

    writeFileSync(
      resolve(__dirname, `dist/mcp-server/src/tools/${toolName}.ts`),
      toolCode
    );
  });
}

function generateMcpKnowledgeLoader(): void {
  const loaderCode = `import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SKILL_CACHE = new Map<string, string>();

export async function loadSkillContent(skillId: string): Promise<string> {
  if (SKILL_CACHE.has(skillId)) {
    return SKILL_CACHE.get(skillId)!;
  }

  try {
    const skillPath = resolve(
      __dirname,
      \`../../knowledge/skills/\${skillId}.md\`
    );
    const content = readFileSync(skillPath, "utf-8");
    SKILL_CACHE.set(skillId, content);
    return content;
  } catch (error) {
    console.error(\`Failed to load skill: \${skillId}\`, error);
    return "";
  }
}

export async function loadCommandContent(commandId: string): Promise<string> {
  try {
    const commandPath = resolve(
      __dirname,
      \`../../knowledge/commands/\${commandId}.md\`
    );
    const content = readFileSync(commandPath, "utf-8");
    return content;
  } catch (error) {
    console.error(\`Failed to load command: \${commandId}\`, error);
    return "";
  }
}

export function getCachedSkills(): string[] {
  return Array.from(SKILL_CACHE.keys());
}
`;

  writeFileSync(
    resolve(__dirname, "dist/mcp-server/src/knowledge/loader.ts"),
    loaderCode
  );
}

function generateMcpIndex(manifest: Manifest): void {
  const toolImports = manifest.commands
    .map((cmd) => {
      const toolName = cmd.id.replace(/-/g, "_");
      const handlerName = `handle${toolName.replace(/_/g, "").charAt(0).toUpperCase()}${toolName.slice(1).replace(/_/g, "")}`;
      return `import { ${toolName}Tool, ${handlerName} } from "./tools/${toolName}.js";`;
    })
    .join("\n");

  const toolList = manifest.commands
    .map((cmd) => {
      const toolName = cmd.id.replace(/-/g, "_");
      return `  ${toolName}Tool,`;
    })
    .join("\n");

  const toolHandlers = manifest.commands
    .map((cmd) => {
      const toolName = cmd.id.replace(/-/g, "_");
      const handlerName = `handle${toolName.replace(/_/g, "").charAt(0).toUpperCase()}${toolName.slice(1).replace(/_/g, "")}`;
      return `      if (request.params.name === "${toolName}") {
        const result = await ${handlerName}(request.params.arguments || {});
        return { content: [{ type: "text", text: result }] };
      }`;
    })
    .join("\n\n");

  const indexCode = `import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  ToolsListRequest,
  CallToolRequest,
  McpError,
  ErrorCode,
  Tool,
} from "@modelcontextprotocol/sdk/types.js";

${toolImports}

// Tool definitions
const tools: Tool[] = [
${toolList}
];

async function main(): Promise<void> {
  const server = new McpServer({
    name: "${manifest.name}",
    version: "${manifest.version}",
  });

  const transport = new StdioServerTransport();

  server.setRequestHandler(ToolsListRequest, async () => ({
    tools,
  }));

  server.setRequestHandler(CallToolRequest, async (request) => {
    try {
${toolHandlers}

      throw new McpError(
        ErrorCode.MethodNotFound,
        \`Unknown tool: \${request.params.name}\`
      );
    } catch (error) {
      if (error instanceof McpError) throw error;
      throw new McpError(
        ErrorCode.InternalError,
        \`Tool error: \${error instanceof Error ? error.message : String(error)}\`
      );
    }
  });

  await server.connect(transport);
  console.error("Dyscalculia Support MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
`;

  writeFileSync(
    resolve(__dirname, "dist/mcp-server/src/index.ts"),
    indexCode
  );
}

function generateMcpPackageJson(manifest: Manifest): void {
  const pkg = {
    name: `@dyscalculia/${manifest.name.toLowerCase()}`,
    version: manifest.version,
    description: manifest.description,
    author: manifest.author,
    license: manifest.license,
    type: "module",
    main: "src/index.ts",
    scripts: {
      start: "tsx src/index.ts",
      build: "tsc",
      "type-check": "tsc --noEmit",
    },
    dependencies: {
      "@modelcontextprotocol/sdk": "^0.6.0",
      zod: "^3.22.4",
    },
    devDependencies: {
      "@types/node": "^20.10.0",
      typescript: "^5.3.3",
      tsx: "^4.7.0",
    },
  };

  writeFileSync(
    resolve(__dirname, "dist/mcp-server/package.json"),
    JSON.stringify(pkg, null, 2)
  );
}

function generateMcpTsConfig(): void {
  const tsconfig = {
    compilerOptions: {
      target: "ES2020",
      module: "ESNext",
      lib: ["ES2020"],
      moduleResolution: "bundler",
      strict: true,
      esModuleInterop: true,
      skipLibCheck: true,
      forceConsistentCasingInFileNames: true,
      resolveJsonModule: true,
      declaration: true,
      outDir: "./dist",
      rootDir: "./src",
    },
    include: ["src/**/*"],
    exclude: ["node_modules"],
  };

  writeFileSync(
    resolve(__dirname, "dist/mcp-server/tsconfig.json"),
    JSON.stringify(tsconfig, null, 2)
  );
}

// ============================================================================
// ============================================================================
// CLI AUDIT TOOL GENERATION (6th output format)
// ============================================================================

function copyDirRecursive(src: string, dest: string): void {
  ensureDir(dest);
  const entries = readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = resolve(src, entry.name);
    const destPath = resolve(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
}

function generateCliAudit(manifest: Manifest): void {
  const cliDir = resolve(__dirname, "dist/cli");
  const templateDir = resolve(__dirname, "cli-template");
  copyDirRecursive(templateDir, cliDir);

  const pkg = {
    name: "dyscalculia-audit-cli",
    version: manifest.version,
    description: "CLI tool for auditing content and code for dyscalculia accessibility",
    bin: { "dyscalculia-audit": "./bin/audit.js" },
    main: "./src/index.js",
    scripts: { build: "tsc", start: "node bin/audit.js" },
    keywords: ["dyscalculia", "accessibility", "audit", "a11y", "math", "cli"],
    author: manifest.author, license: manifest.license,
    dependencies: {},
    devDependencies: { typescript: "^5.4.0", "@types/node": "^20.0.0" },
  };
  writeFileSync(resolve(cliDir, "package.json"), JSON.stringify(pkg, null, 2));

  const tsconfig = {
    compilerOptions: { target: "ES2022", module: "commonjs", lib: ["ES2022"],
      outDir: ".", rootDir: ".", strict: true, esModuleInterop: true,
      skipLibCheck: true, resolveJsonModule: true, declaration: false },
    include: ["bin/**/*.ts", "src/**/*.ts"], exclude: ["node_modules"],
  };
  writeFileSync(resolve(cliDir, "tsconfig.json"), JSON.stringify(tsconfig, null, 2));

  const knowledgeDir = resolve(cliDir, "knowledge");
  ensureDir(knowledgeDir);
  for (const skill of manifest.skills) {
    const srcFile = resolve(__dirname, `source/skills/${skill.id}.md`);
    if (existsSync(srcFile)) copyFileSync(srcFile, resolve(knowledgeDir, `${skill.id}.md`));
  }
  for (const cmd of manifest.commands) {
    const srcFile = resolve(__dirname, `source/commands/${cmd.id}.md`);
    if (existsSync(srcFile)) copyFileSync(srcFile, resolve(knowledgeDir, `${cmd.id}.md`));
  }

  logSuccess("CLI audit tool generated");
}

// CLI ARGUMENT PARSING
// ============================================================================

interface CliOptions {
  format?: string;
  clean: boolean;
  validateOnly: boolean;
  watch: boolean;
  help: boolean;
}

function parseArgs(): CliOptions {
  const args = process.argv.slice(2);
  const opts: CliOptions = {
    clean: false,
    validateOnly: false,
    watch: false,
    help: false,
  };

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case "--format":
      case "-f":
        opts.format = args[++i];
        break;
      case "--clean":
        opts.clean = true;
        break;
      case "--validate-only":
      case "--validate":
        opts.validateOnly = true;
        break;
      case "--watch":
      case "-w":
        opts.watch = true;
        break;
      case "--help":
      case "-h":
        opts.help = true;
        break;
    }
  }
  return opts;
}

function printHelp(): void {
  console.log(`
Usage: tsx build.ts [options]

Options:
  --format, -f <name>   Build only one format:
                          claude-plugin, openai, n8n, prompts, mcp-server
  --clean               Delete dist/ before building
  --validate-only       Validate manifest without generating outputs
  --watch, -w           Watch source/ for changes and rebuild
  --help, -h            Show this help message

Examples:
  tsx build.ts                           # Build all formats
  tsx build.ts --format openai           # Build only OpenAI functions
  tsx build.ts --clean                   # Clean build
  tsx build.ts --validate-only           # Just validate manifest
  tsx build.ts --watch                   # Watch mode (rebuilds on change)
  tsx build.ts --clean -f mcp-server     # Clean + single format
`);
}

const VALID_FORMATS = [
  "claude-plugin",
  "openai",
  "n8n",
  "prompts",
  "mcp-server",
  "cli",
] as const;

type BuildFormat = (typeof VALID_FORMATS)[number];

const generators: Record<BuildFormat, (m: Manifest) => void> = {
  "claude-plugin": generateClaudePlugin,
  openai: generateOpenAIFunctions,
  n8n: generateN8nNode,
  prompts: generatePromptLibrary,
  "mcp-server": generateMcpServer,
  cli: generateCliAudit,
};

function cleanDist(): void {
  const distPath = resolve(__dirname, "dist");
  if (existsSync(distPath)) {
    rmSync(distPath, { recursive: true, force: true });
    log("Cleaned dist/");
  }
}

function runBuild(opts: CliOptions): void {
  log("Starting build...");
  log(`Output directory: ${resolve(__dirname, "dist")}`);

  const manifest = loadManifest();

  if (opts.validateOnly) {
    logSuccess("Manifest validated successfully!");
    log(`  ${manifest.commands.length} commands, ${manifest.skills.length} skills`);
    return;
  }

  if (opts.format) {
    if (!VALID_FORMATS.includes(opts.format as BuildFormat)) {
      logError(`Unknown format: ${opts.format}`);
      log(`Valid formats: ${VALID_FORMATS.join(", ")}`);
      process.exit(1);
    }
    generators[opts.format as BuildFormat](manifest);
    log("");
    logSuccess(`Built format: ${opts.format}`);
  } else {
    generateClaudePlugin(manifest);
    generateOpenAIFunctions(manifest);
    generateN8nNode(manifest);
    generatePromptLibrary(manifest);
    generateMcpServer(manifest);
    generateCliAudit(manifest);

    log("");
    logSuccess("Build completed successfully!");
    log("Generated artifacts:");
    log("  - dist/claude-plugin/plugin.json");
    log("  - dist/openai/functions.json");
    log("  - dist/n8n/DyscalculiaAudit.node.json");
    log("  - dist/prompts/*.yaml");
    log("  - dist/mcp-server/ (full TypeScript MCP server)");
    log("  - dist/cli/ (standalone audit CLI tool)");
  }
}

function watchSource(): void {
  const sourceDir = resolve(__dirname, "source");
  log(`Watching ${sourceDir} for changes...`);
  log("Press Ctrl+C to stop.\n");

  let debounceTimer: ReturnType<typeof setTimeout> | null = null;

  watch(sourceDir, { recursive: true }, (_event, filename) => {
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      log(`\n--- Change detected: ${filename || "unknown"} ---`);
      try {
        const opts = parseArgs();
        opts.watch = false; // prevent recursion
        runBuild(opts);
      } catch (err) {
        logError(`Rebuild failed: ${err instanceof Error ? err.message : String(err)}`);
      }
    }, 250);
  });
}

// ============================================================================
// MAIN BUILD
// ============================================================================

async function main(): Promise<void> {
  const opts = parseArgs();

  if (opts.help) {
    printHelp();
    return;
  }

  try {
    if (opts.clean) {
      cleanDist();
    }

    runBuild(opts);

    if (opts.watch) {
      watchSource();
    }
  } catch (error) {
    logError("Build failed!");
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("Build failed:", err);
  process.exit(1);
});
