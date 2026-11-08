import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
/** @param {string} file */
const read = (file) => readFileSync(join(root, file), 'utf8');

// Screenshots only match their baselines when CI runs the same Playwright as the image.
test('the e2e image tag matches @playwright/test', () => {
  const pinned = JSON.parse(read('e2e/package.json')).devDependencies['@playwright/test'];
  const image = read('.github/workflows/e2e.yml').match(/playwright:v([\d.]+)-/)?.[1];
  assert.equal(image, pinned);
});

test('CI runs the same check as the pre-push hook', () => {
  assert.match(read('.github/workflows/check.yml'), /run: yarn check\n/);
  assert.match(read('lefthook.yml'), /run: yarn check\n/);
});
