import { expect, test, type Page } from '@playwright/test';
import { openStory } from './stories';

// WCAG 2.1.1 (keyboard), 2.4.3 (focus order) and 2.4.7 (focus visible) on the web build.

async function focusedOutline(page: Page) {
  return page.evaluate(() => {
    const element = document.activeElement;
    if (!element) return null;
    const style = getComputedStyle(element);
    return { width: style.outlineWidth, style: style.outlineStyle, label: element.textContent };
  });
}

test('a button takes keyboard focus with a visible ring, and Enter presses it', async ({
  page,
}) => {
  await openStory(page, 'foundations-theme--switching', 'light');
  await page.keyboard.press('Tab');
  expect(await focusedOutline(page)).toEqual({ width: '2px', style: 'solid', label: 'system' });

  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Enter');
  await expect(page.getByText('Showing "dark" (mode: dark)')).toBeVisible();
});

test('a mouse click does not leave a focus ring behind', async ({ page }) => {
  await openStory(page, 'components-button--primary', 'light');
  await page.getByRole('button', { name: 'Continue' }).click();
  expect((await focusedOutline(page))?.style).not.toBe('solid');
});

test('a password field can be revealed and hidden by keyboard alone', async ({ page }) => {
  await openStory(page, 'components-textinput--password', 'light');
  const field = page.getByLabel('Password', { exact: true });
  await page.keyboard.press('Tab');
  await expect(field).toBeFocused();
  await expect(field).toHaveAttribute('type', 'password');

  await page.keyboard.press('Tab');
  await expect(page.getByRole('button', { name: 'Show password' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(field).not.toHaveAttribute('type', 'password');
  await expect(page.getByRole('button', { name: 'Hide password' })).toBeVisible();
});

test('switching theme at runtime recolors the page', async ({ page }) => {
  await openStory(page, 'foundations-theme--switching', 'light');
  const text = page.getByText('Every component follows the active theme.');
  const before = await text.evaluate((el) => getComputedStyle(el).color);
  await page.getByRole('button', { name: 'dark', exact: true }).click();
  await expect.poll(() => text.evaluate((el) => getComputedStyle(el).color)).not.toBe(before);
});
