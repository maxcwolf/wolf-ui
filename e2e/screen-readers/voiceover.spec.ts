import { voiceOverTest as test, type VoiceOverPlaywright } from '@guidepup/playwright';
import { expect, type Page } from '@playwright/test';
import { openStory } from '../tests/stories';

// docs/accessibility.md: the virtual screen reader suite (tests/screen-reader.spec.ts) checks
// every story on every pull request; this one checks the same promises with real VoiceOver and
// Safari. Assertions match words, not whole phrases, because VoiceOver's wording and order change
// between macOS releases.
test.skip(!process.env.CI, 'needs a runner prepared by @guidepup/setup');

/** Opens a story with VoiceOver at the start of its content. */
async function open(page: Page, voiceOver: VoiceOverPlaywright, id: string) {
  await openStory(page, id, 'light');
  await voiceOver.navigateToWebContent();
}

/** Opens a story, moves VoiceOver through it and returns what it said. */
async function hear(page: Page, voiceOver: VoiceOverPlaywright, id: string) {
  await open(page, voiceOver, id);
  for (let step = 0; step < 6; step += 1) await voiceOver.next();
  const spoken = (await voiceOver.spokenPhraseLog()).join(' | ');
  test.info().annotations.push({ type: 'VoiceOver', description: spoken });
  return spoken;
}

test('a button is read with its name and role', async ({ page, voiceOver }) => {
  const spoken = await hear(page, voiceOver, 'components-button--primary');
  expect(spoken).toMatch(/Continue/);
  expect(spoken).toMatch(/button/i);
  expect(spoken).not.toMatch(/busy/i);
});

test('a disabled button is read as unavailable', async ({ page, voiceOver }) => {
  expect(await hear(page, voiceOver, 'components-button--disabled')).toMatch(/dimmed/i);
});

test('a field is read with its label and helper text', async ({ page, voiceOver }) => {
  const spoken = await hear(page, voiceOver, 'components-textinput--with-helper');
  expect(spoken).toMatch(/Email/);
  expect(spoken).toMatch(/We never share your email/);
});

test('an invalid field is read as invalid', async ({ page, voiceOver }) => {
  const spoken = await hear(page, voiceOver, 'components-textinput--with-error');
  expect(spoken).toMatch(/invalid/i);
  expect(spoken).toMatch(/Enter a valid email address/);
});

test('a labelled icon is read as an image', async ({ page, voiceOver }) => {
  const spoken = await hear(page, voiceOver, 'components-icon--labelled');
  expect(spoken).toMatch(/Warning/);
  expect(spoken).toMatch(/image/i);
});

test('an error that appears when leaving a field is announced', async ({ page, voiceOver }) => {
  await open(page, voiceOver, 'components-textinput--validation');
  const field = page.getByLabel('Email', { exact: true });
  await field.focus();
  await page.keyboard.type('max');
  // Guidepup records speech only during its own commands, or inside `capture` for an action
  // driven from Playwright. A live region may speak after the capture settles, so also read
  // what VoiceOver said last.
  const { spokenPhrase } = await voiceOver.capture(() => field.blur(), { capture: true });
  await expect
    .poll(async () => `${spokenPhrase} | ${await voiceOver.lastSpokenPhrase()}`, {
      timeout: 15_000,
    })
    .toMatch(/Enter a valid email address/);
});
