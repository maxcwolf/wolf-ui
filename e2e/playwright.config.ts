import { defineConfig, devices } from '@playwright/test';
import { baseURL, reporter, webServer } from './server';

// Guard file (docs/engineering-standards.md 3). Visual specs run only with VISUAL=1, which
// run-in-docker.sh sets, so a screenshot is always compared with one from the same image.
// Screenshots are kept per project; screen reader transcripts (text snapshots) are not, because
// what a screen reader says does not depend on the viewport.
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter,
  snapshotPathTemplate: '{testDir}/../__transcripts__/{arg}{ext}',
  expect: {
    toHaveScreenshot: {
      animations: 'disabled',
      caret: 'hide',
      maxDiffPixelRatio: 0.001,
      pathTemplate: '{testDir}/../__screenshots__/{projectName}/{arg}{ext}',
    },
  },
  use: {
    baseURL,
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'desktop',
      use: { ...devices['Desktop Chrome'], viewport: { width: 1024, height: 768 } },
    },
    { name: 'mobile', use: { ...devices['Pixel 7'] } },
  ],
  webServer,
});
