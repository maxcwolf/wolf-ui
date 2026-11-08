#!/usr/bin/env node
// yarn new:component <Name>: scaffolds a component that already meets the repo's contracts
// (docs/engineering-standards.md 4.4).
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { newComponent } from './lib/new-component.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const name = process.argv[2] ?? '';

try {
  const files = newComponent({ name, uiSrc: join(root, 'packages/ui/src') });
  process.stdout.write(
    [
      `Created ${name}:`,
      ...files.map((file) => `  ${relative(root, file)}`),
      '',
      'Next:',
      `  1. Build ${name} from the primitives and theme names; replace the TODO doc comment.`,
      `     Fill in accessibility.md and add a ${name} section to docs/assistive-technology-testing.md.`,
      '  2. yarn workspace @maxcwolf/ui-react-native test -u   (accept the new public API snapshot)',
      '  3. yarn storybook:generate                             (add the story to on-device Storybook)',
      '  4. yarn changeset                                      (it is a user-facing change)',
      '  5. yarn check',
      '',
    ].join('\n'),
  );
} catch (error) {
  process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`);
  process.exitCode = 1;
}
