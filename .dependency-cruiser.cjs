// Architecture guard (docs/engineering-standards.md 1). `yarn depcruise`, part of `yarn check`,
// fails on any violation. Loosening a rule needs an ADR and a CODEOWNERS review.
const UI = '^packages/ui/src/';
const TEST_FILE = '\\.(test|stories)\\.(ts|tsx)$|/test-utils/|/__contracts__/';

/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  forbidden: [
    {
      name: 'no-circular',
      comment: 'No import cycles anywhere.',
      severity: 'error',
      from: {},
      to: { circular: true },
    },
    {
      name: 'tokens-are-pure',
      comment:
        'packages/tokens is plain data and pure functions: no package, no Node builtin, no other workspace (ADR 0003).',
      severity: 'error',
      from: { path: '^packages/tokens/src/', pathNot: TEST_FILE },
      to: { pathNot: '^packages/tokens/src/' },
    },
    {
      name: 'ui-dependency-allowlist',
      comment:
        'The library runs in bare React Native, Expo and react-native-web, so it may import only ' +
        'React, React Native, Restyle, react-native-svg and the tokens. An Expo module here would ' +
        'break bare React Native (ADR 0002). Widening this list needs an ADR.',
      severity: 'error',
      from: { path: UI, pathNot: TEST_FILE },
      to: {
        dependencyTypesNot: ['local', 'type-only'],
        pathNot: [
          '^packages/tokens/src/',
          'node_modules/react/',
          'node_modules/react-native/',
          'node_modules/@shopify/restyle/',
          'node_modules/react-native-svg/',
        ],
      },
    },
    {
      name: 'ui-theme-is-the-base',
      comment: 'theme/ is the bottom layer: it never imports primitives or components (ADR 0003).',
      severity: 'error',
      from: { path: `${UI}theme/`, pathNot: TEST_FILE },
      to: { path: `${UI}(primitives|components)/` },
    },
    {
      name: 'ui-primitives-below-components',
      comment:
        'primitives/ builds on theme/ only; components are built from primitives (ADR 0003).',
      severity: 'error',
      from: { path: `${UI}primitives/`, pathNot: TEST_FILE },
      to: { path: `${UI}components/` },
    },
    {
      name: 'ui-components-meet-through-index',
      comment:
        "A component reaches another component only through that component's index.ts, never " +
        'into its files, so each component folder can change its insides freely.',
      severity: 'error',
      from: { path: `${UI}components/([^/]+)/` },
      to: {
        path: `${UI}components/`,
        pathNot: [`${UI}components/$1/`, `${UI}components/[^/]+/index\\.ts$`],
      },
    },
    {
      name: 'no-test-code-in-production',
      comment: 'Shipped modules never import tests, stories or test helpers.',
      severity: 'error',
      from: { path: '^packages/[^/]+/src/', pathNot: TEST_FILE },
      to: { path: TEST_FILE },
    },
    {
      name: 'only-public-package-entry',
      comment:
        "A workspace reaches another only through its package entry (src/index.ts via the 'wolf-ui-source' " +
        'condition), never into its internals (ADR 0004).',
      severity: 'error',
      from: { path: '^((?:packages|apps)/[^/]+|e2e)/' },
      to: {
        path: '^(?:packages|apps)/[^/]+/',
        pathNot: ['^$1/', '^packages/[^/]+/src/index\\.ts$'],
      },
    },
    {
      name: 'nothing-imports-apps-or-e2e',
      severity: 'error',
      from: { pathNot: '^(apps/([^/]+)|e2e)/' },
      to: { path: '^(apps|e2e)/' },
    },
    {
      name: 'not-to-unresolvable',
      comment: 'Every import resolves (catches typos and undeclared packages).',
      severity: 'error',
      from: {},
      to: { couldNotResolve: true },
    },
    {
      name: 'not-to-dev-dep',
      comment: 'Shipped package code imports no devDependency (peer dependencies are fine).',
      severity: 'error',
      from: { path: '^packages/[^/]+/src/', pathNot: TEST_FILE },
      to: { dependencyTypes: ['npm-dev'], dependencyTypesNot: ['type-only', 'npm-peer'] },
    },
  ],
  options: {
    doNotFollow: { path: ['node_modules'] },
    exclude: {
      path: [
        '/(lib|coverage|storybook-static|\\.expo|ios|android|test-results|playwright-report)/',
        '\\.rnstorybook/storybook\\.requires\\.ts$',
      ],
    },
    tsPreCompilationDeps: true,
    tsConfig: { fileName: 'tsconfig.depcruise.json' },
    enhancedResolveOptions: {
      exportsFields: ['exports'],
      // "wolf-ui-source" maps workspace packages to src/index.ts (ADR 0004). Without it they resolve to
      // lib/, which is excluded above, and every cross-workspace edge silently disappears.
      conditionNames: [
        'wolf-ui-source',
        'react-native',
        'import',
        'require',
        'node',
        'default',
        'types',
      ],
      mainFields: ['react-native', 'module', 'main', 'types'],
      extensions: ['.ts', '.tsx', '.d.ts', '.js', '.mjs', '.cjs', '.json'],
    },
    reporterOptions: { text: { highlightFocused: true } },
  },
};
