# midnight-mcp Tutorial: Contract Development with AI Assistants

Companion repository for the tutorial **"Using midnight-mcp for Contract Development with AI Assistants"**.

This repo contains example Compact contracts, configuration files, and a verification script so you can follow along step-by-step.

## Prerequisites

- Node.js 20+
- Claude Desktop, Cursor, or VS Code with MCP support
- No API keys required

## Quick Start

### 1. Configure your AI assistant

Add to your Claude Desktop config (`claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "midnight": {
      "command": "npx",
      "args": ["-y", "midnight-mcp@latest"]
    }
  }
}
```

See the [tutorial](./tutorial.md) for Cursor and nvm configurations.

### 2. Verify your setup

```bash
npm run setup
```

This checks that Node.js 20+ is installed and midnight-mcp is accessible.

### 3. Try the example contracts

The `contracts/` directory contains the example Compact contracts from the tutorial:

| File | Description |
|------|-------------|
| `counter.compact` | Basic counter with public ledger state |
| `token-buggy.compact` | Token contract with deprecated syntax (used in bug-catching demo) |
| `token-fixed.compact` | Corrected version with modern ledger syntax |

### 4. Follow the tutorial

Open the [full tutorial](./tutorial.md) and work through each step with your AI assistant.

## What You'll Learn

- Installing and configuring midnight-mcp with Claude Desktop / Cursor
- Using 29 built-in tools across 7 categories
- Searching existing contract patterns from real projects
- Analyzing contracts for security issues
- Compiling Compact contracts with the real compiler
- Catching real bugs that manual review would miss

## Project Structure

```
contracts/           # Example Compact smart contracts
scripts/             # Setup verification and demo scripts
config/              # Example MCP configurations
tutorial.md          # Full tutorial text
```

## Links

- [midnight-mcp on npm](https://www.npmjs.com/package/midnight-mcp)
- [midnight-mcp on GitHub](https://github.com/Olanetsoft/midnight-mcp)
- [Midnight Documentation](https://docs.midnight.network)
- [Midnight Discord](https://discord.com/invite/midnightnetwork)

## License

MIT
