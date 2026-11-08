import { withGuidepup } from '@guidepup/playwright';
import { devices } from '@playwright/test';
import { baseURL, reporter, webServer } from './server';

// Real VoiceOver, driven by Guidepup, against the built web Storybook. Runs on a macOS runner
// prepared by `@guidepup/setup` (.github/workflows/screen-reader.yml). That setup changes system
// settings so VoiceOver can be scripted, so do not run this suite on your own machine.
// withGuidepup runs tests one at a time in a headed browser: there is one VoiceOver per machine.
export default withGuidepup({
  testDir: './screen-readers',
  forbidOnly: true,
  retries: 2,
  timeout: 5 * 60 * 1000,
  reportSlowTests: null,
  reporter,
  use: { baseURL, trace: 'retain-on-failure', video: 'retain-on-failure' },
  webServer,
  projects: [{ name: 'voiceover-safari', use: { ...devices['Desktop Safari'] } }],
});
