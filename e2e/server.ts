import type { PlaywrightTestConfig } from '@playwright/test';

// The built web Storybook, served for both Playwright configs (playwright.config.ts and
// screen-readers.config.ts).
const port = 6106;

export const baseURL = `http://127.0.0.1:${String(port)}`;

export const webServer: NonNullable<PlaywrightTestConfig['webServer']> = {
  command: `node serve.mjs ../apps/storybook/storybook-static ${String(port)}`,
  url: `${baseURL}/index.json`,
  reuseExistingServer: !process.env.CI,
};

export const reporter: NonNullable<PlaywrightTestConfig['reporter']> = process.env.CI
  ? [['github'], ['html', { open: 'never' }]]
  : 'list';
