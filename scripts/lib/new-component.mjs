import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import {
  accessibilityFile,
  componentFile,
  indexFile,
  storiesFile,
  testFile,
} from './component-templates.mjs';

const PASCAL_CASE = /^[A-Z][A-Za-z0-9]*$/;

/**
 * Writes a component folder (component, test, stories, index, accessibility spec) into
 * `<uiSrc>/components/` and adds it to `components/index.ts`, keeping the exports sorted. Returns
 * the files it wrote.
 *
 * @param {{ name: string, uiSrc: string }} options
 * @returns {string[]}
 */
export function newComponent({ name, uiSrc }) {
  if (!PASCAL_CASE.test(name)) {
    throw new Error(`Component names are PascalCase, like "DatePicker". Got "${name}".`);
  }
  const componentsDir = join(uiSrc, 'components');
  const dir = join(componentsDir, name);
  if (existsSync(dir)) {
    throw new Error(`${name} already exists at ${dir}.`);
  }
  mkdirSync(dir, { recursive: true });
  const files = {
    [`${name}.tsx`]: componentFile(name),
    [`${name}.test.tsx`]: testFile(name),
    [`${name}.stories.tsx`]: storiesFile(name),
    'index.ts': indexFile(name),
    'accessibility.md': accessibilityFile(name),
  };
  for (const [file, content] of Object.entries(files)) {
    writeFileSync(join(dir, file), content);
  }

  const barrelPath = join(componentsDir, 'index.ts');
  const lines = readFileSync(barrelPath, 'utf8').split('\n').filter(Boolean);
  lines.push(`export * from './${name}';`);
  writeFileSync(barrelPath, `${[...new Set(lines)].sort().join('\n')}\n`);

  return [...Object.keys(files).map((file) => join(dir, file)), barrelPath];
}
