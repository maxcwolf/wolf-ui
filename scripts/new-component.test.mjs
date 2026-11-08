import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { after, describe, it } from 'node:test';
import { fileURLToPath } from 'node:url';
import { newComponent } from './lib/new-component.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

function scratch() {
  const uiSrc = mkdtempSync(join(tmpdir(), 'wolf-ui-gen-'));
  mkdirSync(join(uiSrc, 'components'));
  writeFileSync(
    join(uiSrc, 'components/index.ts'),
    "export * from './Card';\nexport * from './Stack';\n",
  );
  return uiSrc;
}

describe('newComponent', () => {
  it('writes the four files and keeps the barrel sorted', () => {
    const uiSrc = scratch();
    newComponent({ name: 'Badge', uiSrc });
    for (const file of ['Badge.tsx', 'Badge.test.tsx', 'Badge.stories.tsx', 'index.ts']) {
      assert.ok(existsSync(join(uiSrc, 'components/Badge', file)), file);
    }
    assert.equal(
      readFileSync(join(uiSrc, 'components/index.ts'), 'utf8'),
      "export * from './Badge';\nexport * from './Card';\nexport * from './Stack';\n",
    );
    rmSync(uiSrc, { recursive: true });
  });

  it('rejects a name that is not PascalCase', () => {
    assert.throws(() => newComponent({ name: 'date-picker', uiSrc: scratch() }), /PascalCase/);
    assert.throws(() => newComponent({ name: '', uiSrc: scratch() }), /PascalCase/);
  });

  it('refuses to overwrite a component', () => {
    const uiSrc = scratch();
    newComponent({ name: 'Badge', uiSrc });
    assert.throws(() => newComponent({ name: 'Badge', uiSrc }), /already exists/);
  });
});

// The generated files go into the real tree under a probe name and must pass the same lint and
// type check as hand-written code. Everything is removed afterwards, whatever happens.
describe('generated output in the real tree', () => {
  const uiSrc = join(root, 'packages/ui/src');
  const barrel = join(uiSrc, 'components/index.ts');
  const probe = 'ZzGeneratorProbe';
  const probeDir = join(uiSrc, 'components', probe);
  rmSync(probeDir, { recursive: true, force: true });
  const original = readFileSync(barrel, 'utf8').replace(`export * from './${probe}';\n`, '');

  after(() => {
    rmSync(probeDir, { recursive: true, force: true });
    writeFileSync(barrel, original);
  });

  it('type-checks, lints and is formatted', () => {
    const files = newComponent({ name: probe, uiSrc });
    /** @param {string} cmd @param {string[]} args */
    const run = (cmd, args) => execFileSync(cmd, args, { cwd: root, stdio: 'pipe' });
    run('yarn', ['workspace', '@maxcwolf/ui-react-native', 'typecheck']);
    run('yarn', ['eslint', '--max-warnings', '0', ...files]);
    run('yarn', ['prettier', '--check', ...files]);
  });
});
