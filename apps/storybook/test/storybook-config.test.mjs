import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';

const app = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (file) => readFileSync(join(app, file), 'utf8');
const storiesGlob = (file) =>
  read(file)
    .match(/stories:\s*\[([^\]]*)\]/)?.[1]
    ?.trim();

test('on-device and web Storybook load the same stories', () => {
  assert.ok(storiesGlob('.rnstorybook/main.ts'));
  assert.equal(storiesGlob('.storybook/main.ts'), storiesGlob('.rnstorybook/main.ts'));
});

// Metro regenerates storybook.requires.ts only when it runs, so a story added or removed without
// `yarn storybook:generate` would be missing on device. Regenerate and compare.
test('storybook.requires.ts is up to date', () => {
  const file = '.rnstorybook/storybook.requires.ts';
  const committed = read(file);
  try {
    execFileSync('yarn', ['storybook:generate'], { cwd: app, stdio: 'pipe' });
    assert.equal(read(file), committed, 'Run `yarn storybook:generate` and commit the result.');
  } finally {
    // Leave the tree as it was even when the check fails.
    writeFileSync(join(app, file), committed);
  }
});
