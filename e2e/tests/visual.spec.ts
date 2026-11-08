import { expect, test } from '@playwright/test';
import { allStories, openStory, themes } from './stories';

// Screenshot of every story in every theme, compared with the committed baseline in
// e2e/__screenshots__/. Runs only in the Playwright image (yarn e2e:docker), never on a host
// browser. Stories that never settle (spinners) carry the `skip-visual` tag. On-device captures
// are targus's job (ADR 0009).
test.skip(!process.env.VISUAL, 'visual tests run in Docker: yarn e2e:docker');

for (const story of allStories().filter((s) => !s.tags.includes('skip-visual'))) {
  for (const theme of themes) {
    test(`${story.id} (${theme})`, async ({ page }) => {
      await openStory(page, story.id, theme);
      await expect(page.locator('#storybook-root')).toHaveScreenshot(`${story.id}--${theme}.png`);
    });
  }
}
