import type { Page } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

export interface StoryEntry {
  id: string;
  title: string;
  name: string;
  type: 'story' | 'docs';
  tags: string[];
}

/**
 * Every story in the built Storybook. Read from disk when the specs are collected, so each story
 * becomes its own test and a new story is covered without touching the suites.
 */
export function allStories(): StoryEntry[] {
  const path = fileURLToPath(
    new URL('../../apps/storybook/storybook-static/index.json', import.meta.url),
  );
  const index = JSON.parse(readFileSync(path, 'utf8')) as { entries: Record<string, StoryEntry> };
  return Object.values(index.entries).filter((entry) => entry.type === 'story');
}

export const themes = ['light', 'dark'] as const;

// `a11y.manual` stops Storybook's a11y addon from running its own axe in the page, which would
// collide with the suite's scan.
export const storyUrl = (id: string, theme: (typeof themes)[number]) =>
  `/iframe.html?id=${id}&viewMode=story&globals=theme:${theme};a11y.manual:!true`;

/** Opens a story in a theme and waits until it has rendered in that theme. */
export async function openStory(page: Page, id: string, theme: (typeof themes)[number]) {
  await page.goto(storyUrl(id, theme));
  await page.getByTestId(`story-theme-${theme}`).waitFor();
  await page.evaluate(() => document.fonts.ready);
}
