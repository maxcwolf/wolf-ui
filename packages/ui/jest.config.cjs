// Guard file: coverage thresholds only go up (docs/engineering-standards.md 3.1).
// The preset is plain React Native, not jest-expo: the library must work without Expo (ADR 0002).
/** @type {import('jest').Config} */
module.exports = {
  preset: '@react-native/jest-preset',
  roots: ['<rootDir>/src'],
  testEnvironmentOptions: {
    // Resolve workspace packages to their src/ (ADR 0004).
    customExportConditions: ['wolf-ui-source', 'require', 'react-native'],
  },
  setupFilesAfterEnv: ['<rootDir>/src/test-utils/setup.ts'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.stories.tsx',
    '!src/**/index.ts',
    '!src/test-utils/**',
    '!src/__contracts__/**',
  ],
  coverageThreshold: { global: { lines: 100, branches: 100, functions: 100, statements: 100 } },
};
