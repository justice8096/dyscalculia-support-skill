# Dyscalculia Support Skill - Multi-Format Distribution System

A comprehensive, portable dyscalculia support system built on evidence-based CRA (Concrete-Representational-Abstract) methodology with compliance to NCTM, IDEA, and Section 504 standards.

This repository provides a **single source of truth** in `source/` that automatically builds to multiple formats, making the skill accessible across different platforms and use cases.

## Overview

The dyscalculia-support-skill provides educators, special education professionals, and parents with:
- **Standards Compliance Audits** - Evaluate curricula against NCTM, IDEA, Section 504, and UDL
- **Gap Analysis** - Identify specific dyscalculia deficits across math domains
- **Remediation Planning** - CRA-based intervention plans customized by anxiety and intensity
- **IEP Document Generation** - Compliant, personalized Individualized Education Programs
- **Content Accessibility Evaluation** - Assess educational materials for dyscalculia accessibility

## Platform Support

This skill is distributed in multiple formats for maximum portability:

| Format | Use Case | Build Artifact | Integration |
|--------|----------|-----------------|-------------|
| **Claude Code Plugin** | Claude.ai / Claude Code | `dist/claude-plugin/plugin.json` | Install as Claude Code plugin |
| **MCP Server** | External LLM integration | `dist/mcp-server/` | Runs as independent TypeScript server |
| **OpenAI Functions** | GPT-4 function calling | `dist/openai/functions.json` | Load into OpenAI API calls |
| **n8n Workflow Node** | Automation & workflow | `dist/n8n/DyscalculiaAudit.node.json` | Import as n8n community node |
| **Prompt Library** | Standalone prompt templates | `dist/prompts/` | Reference in any LLM context |

## Quick Start

```bash
# Install dependencies
npm install

# Build all distribution formats
npm run build

# Watch mode for development
npm run build:watch
```

## Project Structure

source/ contains the single source of truth. dist/ contains generated outputs.

See build.ts for the generation logic.
