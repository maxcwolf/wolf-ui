#!/usr/bin/env node
// Claude Code PostToolUse hook (docs/engineering-standards.md 4.2). After an agent edits a file,
// lint it (with --fix) and type-check its workspace, and hand any error straight back to the
// agent so it fixes it before building on it. Never blocks the edit and never fails loudly.
// Registered in .claude/settings.json.
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';

const LINTED = /\.(ts|tsx|js|mjs|cjs)$/;
const MAX_OUTPUT = 4000;

/** @param {string} cmd @param {string[]} args @param {string} cwd */
function run(cmd, args, cwd) {
  try {
    execFileSync(cmd, args, { cwd, stdio: 'pipe', timeout: 120_000 });
    return '';
  } catch (error) {
    const { stdout = '', stderr = '' } = /** @type {{ stdout?: Buffer, stderr?: Buffer }} */ (
      error
    );
    return `${String(stdout)}${String(stderr)}`.trim();
  }
}

/** The nearest directory above `file` with its own tsconfig.json and package.json. */
function workspaceOf(/** @type {string} */ file, /** @type {string} */ root) {
  for (let dir = dirname(file); dir.startsWith(root) && dir !== root; dir = dirname(dir)) {
    if (existsSync(join(dir, 'tsconfig.json')) && existsSync(join(dir, 'package.json'))) {
      return dir;
    }
  }
  return null;
}

/** @param {string} raw */
function check(raw) {
  const { tool_input: toolInput = {}, cwd = process.cwd() } = JSON.parse(raw);
  const file = toolInput.file_path;
  if (typeof file !== 'string' || !LINTED.test(file) || !file.startsWith(cwd)) return;

  const lintArgs = ['eslint', '--fix', '--max-warnings', '0', '--no-warn-ignored', file];
  const problems = [run('yarn', lintArgs, cwd)];
  const workspace = /\.tsx?$/.test(file) ? workspaceOf(file, cwd) : null;
  if (workspace) problems.push(run('yarn', ['tsc', '-p', join(workspace, 'tsconfig.json')], cwd));

  const report = problems.filter(Boolean).join('\n\n');
  if (!report) return;
  const additionalContext =
    `yarn check will fail on ${relative(cwd, file)}. Fix these before moving on; do not loosen ` +
    `a rule (AGENTS.md):\n\n${report.slice(0, MAX_OUTPUT)}`;
  process.stdout.write(
    JSON.stringify({ hookSpecificOutput: { hookEventName: 'PostToolUse', additionalContext } }),
  );
}

let input = '';
process.stdin.on('data', (chunk) => (input += String(chunk)));
process.stdin.on('end', () => {
  try {
    check(input);
  } catch {
    // A broken hook must never block an edit.
  }
});
