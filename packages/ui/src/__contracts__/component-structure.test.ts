import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

// docs/engineering-standards.md 1.3: every component is a folder with the same four files, so
// nothing ships untested, without a story, or outside the public entry. `yarn new:component`
// writes all of them.
const componentsDir = join(__dirname, '..', 'components');
const components = readdirSync(componentsDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name);
const barrel = readFileSync(join(componentsDir, 'index.ts'), 'utf8');

it('finds the components', () => {
  expect(components.length).toBeGreaterThan(0);
});

describe.each(components)('%s', (name) => {
  const file = (suffix: string) => join(componentsDir, name, suffix);

  it('is named in PascalCase', () => {
    expect(name).toMatch(/^[A-Z][A-Za-z0-9]*$/);
  });

  it.each([`${name}.tsx`, `${name}.test.tsx`, `${name}.stories.tsx`, 'index.ts'])('has %s', (f) => {
    expect(existsSync(file(f))).toBe(true);
  });

  it('is exported from components/index.ts', () => {
    expect(barrel).toContain(`export * from './${name}';`);
  });

  it('titles its stories Components/<Name>', () => {
    expect(readFileSync(file(`${name}.stories.tsx`), 'utf8')).toContain(
      `title: 'Components/${name}'`,
    );
  });
});
