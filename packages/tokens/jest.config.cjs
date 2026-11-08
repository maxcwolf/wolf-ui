// Guard file: coverage thresholds only go up (docs/engineering-standards.md 3.1).
/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['src/**/*.ts', '!src/**/*.test.ts', '!src/index.ts'],
  coverageThreshold: { global: { lines: 100, branches: 100, functions: 100, statements: 100 } },
};
