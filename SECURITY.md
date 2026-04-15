# Security Policy

## Supported Versions

| Version | Supported |
|---------|-----------|
| 1.0.x   | ✅ Current |

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it responsibly.

**Do NOT open a public GitHub issue for security vulnerabilities.**

Instead, please email: **security@justice8096.dev**

You should receive an acknowledgment within 48 hours. We will work with you to understand and address the issue before any public disclosure.

### What to include

- Description of the vulnerability
- Steps to reproduce
- Affected versions
- Any potential impact assessment

## Security Practices

This project follows these security practices:

- **Dependency management**: All dependencies are pinned via `package-lock.json` and regularly audited with `npm audit`
- **SBOM**: A CycloneDX Software Bill of Materials (`sbom.cdx.json`) is maintained in the repo
- **Input validation**: All MCP server tool inputs are validated with Zod schemas
- **No runtime dependencies**: The build tool uses only devDependencies; generated artifacts declare their own deps
- **Automated security scanning**: Post-commit audit suite covers SAST/DAST, supply chain, and CWE mapping
- **MCP SDK**: Kept current to address known vulnerabilities (upgraded from ^0.6.0 to ^1.6.0 on 2026-04-15)

## Known Accepted Risks

| CWE | Description | Justification |
|-----|-------------|---------------|
| CWE-22 | Path traversal in knowledge loader | Input sourced from manifest (trusted), not user input |
| CWE-502 | JSON.parse on local manifest | Local build tool, file under developer control |
| CWE-1357 | Caret dependency ranges | devDependencies only, lockfile mitigates |
