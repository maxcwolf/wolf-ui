import { RuleTester } from 'eslint';
import { describe, it } from 'node:test';
import rule from './no-raw-color.mjs';

RuleTester.describe = describe;
RuleTester.it = it;

new RuleTester({ languageOptions: { ecmaVersion: 2024, sourceType: 'module' } }).run(
  'no-raw-color',
  rule,
  {
    valid: [
      "const a = { bg: 'surface' };",
      "const b = 'transparent';",
      "const c = 'issue #12 and #abcdefg';",
      'const d = `${theme.colors.text}`;',
    ],
    invalid: [
      "const a = '#fff';",
      "const b = '#3563E9';",
      "const c = '#3563E980';",
      "const d = 'rgb(0, 0, 0)';",
      "const e = 'rgba(0,0,0,.5)';",
      "const f = 'hsl(10 20% 30%)';",
      'const g = `1px solid #000`;',
    ].map((code) => ({ code, errors: [{ messageId: 'rawColor' }] })),
  },
);
