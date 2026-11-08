import type { Page } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// Guidepup's Virtual Screen Reader runs inside the page: it walks the browser's DOM and
// accessibility semantics the way a screen reader does and records what it would say. It is a
// model, not VoiceOver or NVDA (docs/accessibility.md says what it does not catch), but it is
// deterministic, so every story can have a reviewed transcript.
const bundle = readFileSync(
  fileURLToPath(import.meta.resolve('@guidepup/virtual-screen-reader/browser.js')),
  'utf8',
);
const bundlePath = '/__guidepup/virtual-screen-reader.js';

/** The part of Guidepup's `virtual` object the suites use, as it exists in the page. */
interface Virtual {
  start(options: { container: Element }): Promise<void>;
  stop(): Promise<void>;
  next(): Promise<void>;
  act(): Promise<void>;
  press(key: string): Promise<void>;
  type(text: string): Promise<void>;
  lastSpokenPhrase(): Promise<string>;
  spokenPhraseLog(): Promise<string[]>;
  clearSpokenPhraseLog(): Promise<void>;
}

type WithVirtual = typeof globalThis & { virtual: Virtual };

export interface ScreenReader {
  /** Moves to the next item and returns what was said. */
  next(): Promise<string>;
  /** Presses a key (`Tab`, `Shift+Tab`, `Enter`, ` `) and returns what was said last. */
  press(key: string): Promise<string>;
  /** Performs the default action of the item under the cursor. */
  act(): Promise<void>;
  /** Types into the focused field. */
  type(text: string): Promise<void>;
  /** Everything said since the last `clear`. */
  log(): Promise<string[]>;
  clear(): Promise<void>;
  /** Reads from the cursor to the end of the page, without the document wrapper phrases. */
  readToEnd(): Promise<string[]>;
}

const maxItems = 500;
const run = (page: Page, command: 'next' | 'act' | 'clearSpokenPhraseLog') =>
  page.evaluate((name) => (globalThis as WithVirtual).virtual[name](), command);
const last = (page: Page) =>
  page.evaluate(() => (globalThis as WithVirtual).virtual.lastSpokenPhrase());
const log = (page: Page) =>
  page.evaluate(() => (globalThis as WithVirtual).virtual.spokenPhraseLog());

async function readToEnd(page: Page) {
  for (let item = 0; item < maxItems; item += 1) {
    await run(page, 'next');
    const phrase = await last(page);
    // An empty page wraps straight back to "document" instead of reaching its end.
    if (phrase === 'end of document' || phrase === 'document') {
      return (await log(page)).filter((said) => said !== 'document' && said !== 'end of document');
    }
  }
  throw new Error(
    `The screen reader did not reach the end of the page in ${String(maxItems)} items`,
  );
}

/** Starts the Virtual Screen Reader on the whole page, its cursor on the document. */
export async function startScreenReader(page: Page): Promise<ScreenReader> {
  await page.route(`**${bundlePath}`, (route) =>
    route.fulfill({ body: bundle, contentType: 'text/javascript' }),
  );
  await page.evaluate(async (path) => {
    const module = (await import(path)) as { virtual: Virtual };
    (globalThis as WithVirtual).virtual = module.virtual;
    await module.virtual.start({ container: document.body });
  }, bundlePath);

  return {
    next: async () => {
      await run(page, 'next');
      return last(page);
    },
    press: async (key) => {
      await page.evaluate((k) => (globalThis as WithVirtual).virtual.press(k), key);
      return last(page);
    },
    act: () => run(page, 'act'),
    type: (text) => page.evaluate((t) => (globalThis as WithVirtual).virtual.type(t), text),
    log: () => log(page),
    clear: () => run(page, 'clearSpokenPhraseLog'),
    readToEnd: () => readToEnd(page),
  };
}
