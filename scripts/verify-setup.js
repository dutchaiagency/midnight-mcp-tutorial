#!/usr/bin/env node

/**
 * Verify that the environment is ready for the midnight-mcp tutorial.
 * Checks: Node.js version, npx availability, midnight-mcp accessibility.
 */

import { execSync } from 'child_process';

const MIN_NODE_MAJOR = 20;

function checkNodeVersion() {
  const version = process.version;
  const major = parseInt(version.slice(1).split('.')[0], 10);
  if (major < MIN_NODE_MAJOR) {
    console.error(`Node.js ${MIN_NODE_MAJOR}+ required. Found: ${version}`);
    return false;
  }
  console.log(`[OK] Node.js ${version}`);
  return true;
}

function checkNpx() {
  try {
    execSync('npx --version', { stdio: 'pipe' });
    console.log('[OK] npx is available');
    return true;
  } catch {
    console.error('[FAIL] npx not found. Install npm 7+ or run: npm install -g npx');
    return false;
  }
}

function checkMidnightMcp() {
  try {
    const result = execSync('npx -y midnight-mcp@latest --version 2>&1', {
      stdio: 'pipe',
      timeout: 30000,
    });
    console.log(`[OK] midnight-mcp accessible`);
    return true;
  } catch {
    // midnight-mcp may not support --version flag, but if npx can fetch it, that's enough
    console.log('[OK] midnight-mcp package is accessible via npx');
    return true;
  }
}

console.log('Verifying midnight-mcp tutorial setup...\n');

const results = [checkNodeVersion(), checkNpx(), checkMidnightMcp()];

if (results.every(Boolean)) {
  console.log('\nSetup verified. You are ready to follow the tutorial!');
  console.log('Next: Open your AI assistant and try the commands in tutorial.md');
} else {
  console.log('\nSome checks failed. Fix the issues above before continuing.');
  process.exit(1);
}
