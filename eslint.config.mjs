// Guard file (docs/engineering-standards.md 2). Every rule here backs a written standard; loosening
// one needs an ADR and a CODEOWNERS review. Fix the code, not this file.
import eslintComments from '@eslint-community/eslint-plugin-eslint-comments/configs';
import js from '@eslint/js';
import importX from 'eslint-plugin-import-x';
import jest from 'eslint-plugin-jest';
import reactHooks from 'eslint-plugin-react-hooks';
import reactNativeA11y from 'eslint-plugin-react-native-a11y';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import wolf from './eslint-rules/index.mjs';

const restyleOnlyInTheme = {
  name: '@shopify/restyle',
  importNames: ['useTheme', 'ThemeProvider'],
  message:
    'Use useTheme / ThemeProvider from the theme layer (src/theme), which types the theme and adds theme switching (ADR 0005).',
};

const testingLibraryRender = {
  name: '@testing-library/react-native',
  importNames: ['render'],
  message:
    'Import render from src/test-utils/render, which wraps the tree in a ThemeProvider with a fixed theme.',
};

// Components compose primitives; only primitives wrap React Native views (ADR 0003).
const reactNativeViewsInComponents = {
  name: 'react-native',
  importNames: [
    'View',
    'Text',
    'Pressable',
    'TouchableOpacity',
    'TouchableHighlight',
    'TouchableWithoutFeedback',
    'Button',
    'StyleSheet',
  ],
  message:
    'Components build on the primitives (Box, Text, Pressable) so every style is a theme value. Only src/primitives wraps React Native views.',
};

// Every react-native-a11y rule is an error except two, for the reasons in ADR 0008:
// hints are optional on iOS and Android, and the descriptor rule cannot see that a wolf-ui
// component (TextInput's `label`, Button's text) supplies the accessible name itself. The
// accessibility contract test checks names on the rendered tree instead.
const a11yExceptions = new Set(['has-accessibility-hint', 'has-valid-accessibility-descriptors']);
const a11yRules = Object.fromEntries(
  Object.keys(reactNativeA11y.rules).map((name) => [
    `react-native-a11y/${name}`,
    a11yExceptions.has(name) ? 'off' : 'error',
  ]),
);

export default tseslint.config(
  {
    ignores: [
      '**/node_modules/**',
      '**/lib/**',
      '**/coverage/**',
      '**/storybook-static/**',
      '**/.expo/**',
      'apps/*/ios/**',
      'apps/*/android/**',
      'apps/storybook/.rnstorybook/storybook.requires.ts',
      'e2e/test-results/**',
      'e2e/playwright-report/**',
      '.yarn/**',
      // Claude Code keeps worktrees here, each a full copy of the repo.
      '.claude/**',
    ],
  },
  {
    linterOptions: { reportUnusedDisableDirectives: 'error' },
  },
  js.configs.recommended,
  eslintComments.recommended,
  {
    rules: {
      '@eslint-community/eslint-comments/require-description': ['error', { ignore: [] }],
      '@eslint-community/eslint-comments/no-unlimited-disable': 'error',
    },
  },

  // TypeScript, type-aware, everywhere.
  {
    files: ['**/*.{ts,tsx,mts}'],
    extends: [...tseslint.configs.strictTypeChecked, ...tseslint.configs.stylisticTypeChecked],
    languageOptions: {
      parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname },
    },
    plugins: { 'import-x': importX, wolf },
    settings: {
      'import-x/resolver-next': [
        (await import('eslint-import-resolver-typescript')).createTypeScriptImportResolver({
          conditionNames: ['wolf-ui-source', 'types', 'import', 'default'],
        }),
      ],
    },
    rules: {
      // Code standards (docs/engineering-standards.md 2).
      '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],
      '@typescript-eslint/ban-ts-comment': [
        'error',
        { 'ts-expect-error': 'allow-with-description' },
      ],
      'import-x/no-cycle': 'error',
      'import-x/no-self-import': 'error',
      'import-x/no-duplicates': 'error',
      'import-x/no-useless-path-segments': 'error',
      'import-x/no-extraneous-dependencies': 'error',
      'max-lines': ['error', { max: 300, skipBlankLines: true, skipComments: true }],
      'max-lines-per-function': ['error', { max: 60, skipBlankLines: true, skipComments: true }],
      complexity: ['error', 10],
      'max-depth': ['error', 3],
      'max-params': ['error', 3],
      'no-console': 'error',
      'no-restricted-imports': ['error', { paths: [restyleOnlyInTheme] }],
      'wolf/no-raw-color': 'error',
    },
  },

  // React and accessibility rules for every component, story and app file.
  {
    files: ['**/*.tsx'],
    plugins: { 'react-hooks': reactHooks, 'react-native-a11y': reactNativeA11y },
    rules: {
      ...reactHooks.configs['recommended-latest'].rules,
      'react-hooks/exhaustive-deps': 'error',
      ...a11yRules,
    },
  },

  // Layering inside the UI package (ADR 0003).
  {
    files: ['packages/ui/src/components/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        { paths: [restyleOnlyInTheme, reactNativeViewsInComponents] },
      ],
    },
  },
  {
    files: ['packages/ui/src/theme/**/*.{ts,tsx}'],
    ignores: ['**/*.test.{ts,tsx}'],
    rules: { 'no-restricted-imports': 'off' },
  },
  // Design tokens are where literal colors live.
  {
    files: ['packages/tokens/src/**'],
    rules: { 'wolf/no-raw-color': 'off' },
  },

  // Tests.
  {
    files: ['**/*.test.{ts,tsx}', '**/test-utils/**'],
    ...jest.configs['flat/recommended'],
    languageOptions: { globals: { ...globals.jest, ...globals.node } },
    rules: {
      ...jest.configs['flat/recommended'].rules,
      'jest/no-focused-tests': 'error',
      'jest/no-disabled-tests': 'error',
      'jest/no-conditional-expect': 'error',
      'jest/valid-title': ['error', { ignoreTypeOfDescribeName: true }],
      'max-lines-per-function': 'off',
      // Tests build custom themes from literal colors on purpose.
      'wolf/no-raw-color': 'off',
      'no-restricted-imports': ['error', { paths: [restyleOnlyInTheme, testingLibraryRender] }],
    },
  },
  {
    // The one place RNTL's render is wrapped.
    files: ['packages/ui/src/test-utils/render.tsx'],
    rules: { 'no-restricted-imports': ['error', { paths: [restyleOnlyInTheme] }] },
  },
  {
    files: ['**/*.stories.tsx'],
    rules: { 'max-lines-per-function': 'off' },
  },

  // Plain JavaScript: config files, scripts, local rules.
  {
    files: ['**/*.{js,cjs,mjs}'],
    extends: [tseslint.configs.disableTypeChecked],
    languageOptions: { globals: { ...globals.node } },
  },
);
