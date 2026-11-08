import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import { allStories, openStory, themes } from './stories';

// docs/accessibility.md: every story renders without errors and passes axe's WCAG 2.2 A and AA
// rules, in every theme, on desktop and mobile viewports.
const WCAG_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];

for (const story of allStories()) {
  for (const theme of themes) {
    test(`${story.title} / ${story.name} (${theme})`, async ({ page }) => {
      const errors: string[] = [];
      page.on('pageerror', (error) => errors.push(error.message));
      page.on('console', (message) => {
        if (message.type() === 'error') errors.push(message.text());
      });

      await openStory(page, story.id, theme);

      const { violations } = await new AxeBuilder({ page })
        .include('#storybook-root')
        .withTags(WCAG_TAGS)
        .analyze();
      const summary = violations.map((v) => `${v.id}: ${v.help} (${String(v.nodes.length)} nodes)`);
      expect(summary, 'axe violations').toEqual([]);
      expect(errors, 'console errors').toEqual([]);
    });
  }
}
