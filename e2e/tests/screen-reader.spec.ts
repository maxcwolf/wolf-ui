import { expect, test } from '@playwright/test';
import { startScreenReader } from './screen-reader';
import { allStories, openStory } from './stories';

// docs/accessibility.md: what a screen reader says for every story, and that the flows a screen
// reader user depends on work. Speech does not depend on the viewport or the theme, so this runs
// once, on desktop, in the light theme.
test.skip(({ isMobile }) => isMobile, 'speech is the same on every viewport');

// Words a screen reader adds after a control's role and name to describe its state.
const states = new Set(['disabled', 'busy', 'invalid', 'required', 'selected', 'pressed']);
const controls = /^(button|textbox|link|checkbox|radio|switch|combobox|slider|tab|image)$/;

/** Phrases that announce a control by role and state alone, with no name to tell it apart. */
function unnamed(transcript: string[]) {
  return transcript.filter((phrase) => {
    const [role = '', ...rest] = phrase.split(', ');
    return controls.test(role) && rest.every((part) => states.has(part));
  });
}

test.describe('transcript', () => {
  // A reviewed record of what is announced, item by item, in e2e/__transcripts__/. A change to
  // a component's semantics shows up as a diff here. Update with `yarn e2e --update-snapshots`.
  for (const story of allStories()) {
    test(story.id, async ({ page }) => {
      await openStory(page, story.id, 'light');
      const transcript = await (await startScreenReader(page)).readToEnd();
      expect(unnamed(transcript), 'controls announced without a name').toEqual([]);
      expect(`${transcript.join('\n')}\n`).toMatchSnapshot(`${story.id}.txt`);
    });
  }
});

test.describe('flows', () => {
  test('tabbing to a button announces its role and name, and no state it does not have', async ({
    page,
  }) => {
    await openStory(page, 'components-button--primary', 'light');
    const reader = await startScreenReader(page);
    expect(await reader.press('Tab')).toBe('button, Continue');
  });

  test('a loading button says it is busy and cannot be pressed', async ({ page }) => {
    await openStory(page, 'components-button--loading', 'light');
    const reader = await startScreenReader(page);
    expect(await reader.next()).toBe('button, Continue, busy, disabled');
  });

  test('a field is read with its label and helper text', async ({ page }) => {
    await openStory(page, 'components-textinput--with-helper', 'light');
    const reader = await startScreenReader(page);
    expect(await reader.press('Tab')).toBe(
      'textbox, Email, We never share your email., placeholder you@example.com',
    );
  });

  test('an invalid field says so, and reads its error', async ({ page }) => {
    await openStory(page, 'components-textinput--with-error', 'light');
    const reader = await startScreenReader(page);
    expect(await reader.press('Tab')).toBe(
      'textbox, Email, max@, Enter a valid email address., invalid',
    );
  });

  test('an error that appears while typing is announced without moving focus', async ({ page }) => {
    await openStory(page, 'components-textinput--validation', 'light');
    const reader = await startScreenReader(page);
    await reader.press('Tab');
    await reader.type('max');
    await reader.clear();
    await reader.press('Tab');
    await expect.poll(() => reader.log()).toContain('polite: Enter a valid email address.');
  });

  test('a password can be revealed and hidden, and the button says which it will do', async ({
    page,
  }) => {
    await openStory(page, 'components-textinput--password', 'light');
    const reader = await startScreenReader(page);
    await reader.press('Tab');
    expect(await reader.press('Tab')).toBe('button, Show password');
    await reader.act();
    expect(await reader.press('Shift+Tab')).toBe('textbox, Password, hunter22');
    expect(await reader.press('Tab')).toBe('button, Hide password');
  });

  test('a decorative icon is silent and a labelled one is read as an image', async ({ page }) => {
    await openStory(page, 'components-icon--default', 'light');
    expect(await (await startScreenReader(page)).readToEnd()).toEqual([]);
    await openStory(page, 'components-icon--labelled', 'light');
    expect(await (await startScreenReader(page)).readToEnd()).toEqual(['image, Warning']);
  });
});
