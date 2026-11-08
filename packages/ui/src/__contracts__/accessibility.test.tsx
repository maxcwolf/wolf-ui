import { minTouchTarget } from '@maxcwolf/ui-tokens';
import { join } from 'node:path';
import { flatStyle, render, screen } from '../test-utils/render';
import {
  composeStories,
  storyFiles,
  type ComposedStory,
  type StoryModule,
} from '../test-utils/stories';

// docs/accessibility.md: every story, in every theme, is checked for the WCAG 2.2 AA rules a
// component tree can show without a browser. Axe checks the rest on the web (e2e/stories.spec.ts).
// A new component is covered as soon as it has a story.

const src = join(__dirname, '..');
const stories: ComposedStory[] = [];
beforeAll(async () => {
  for (const file of storyFiles(src)) {
    stories.push(...composeStories((await import(join(src, file))) as StoryModule));
  }
});

interface Host {
  type: string;
  props: Record<string, unknown>;
}
const INTERACTIVE_ROLES = new Set([
  'button',
  'link',
  'checkbox',
  'radio',
  'switch',
  'tab',
  'menuitem',
]);

function hosts(): Host[] {
  return screen.root?.queryAll(() => true, { includeSelf: true }) ?? [];
}

function verticalSlop(hitSlop: unknown): number {
  if (typeof hitSlop === 'number') return hitSlop * 2;
  if (hitSlop && typeof hitSlop === 'object') {
    const { top = 0, bottom = 0 } = hitSlop as { top?: number; bottom?: number };
    return top + bottom;
  }
  return 0;
}

function touchHeight(host: Host): number {
  const style = flatStyle(host);
  const height = Number(style.minHeight ?? style.height ?? 0);
  return height + verticalSlop(host.props.hitSlop);
}

const isInteractive = (role: unknown) => typeof role === 'string' && INTERACTIVE_ROLES.has(role);

/** One check per WCAG criterion; each returns a problem or null. */
const checks: ((host: Host) => string | null)[] = [
  ({ props }) =>
    isInteractive(props.role) && touchHeight({ type: '', props }) < minTouchTarget
      ? `a ${String(props.role)} is under ${minTouchTarget}dp tall (2.5.8)`
      : null,
  ({ type, props }) =>
    type === 'TextInput' && !props.accessibilityLabel
      ? 'a text field has no label (1.3.1, 4.1.2)'
      : null,
  ({ type, props }) =>
    type === 'Text' &&
    (props.allowFontScaling === false || Number(props.maxFontSizeMultiplier ?? 2) < 2)
      ? 'text cannot scale to 200% (1.4.4)'
      : null,
  ({ props }) =>
    props.role === 'img' && !props.accessibilityLabel ? 'an image role has no name (1.1.1)' : null,
];

function problems(): string[] {
  return hosts().flatMap((host) => checks.map((check) => check(host)).filter((p) => p !== null));
}

it('finds the stories', () => {
  expect(stories.length).toBeGreaterThan(10);
});

describe.each(['light', 'dark'] as const)('in the %s theme', (theme) => {
  it('every story passes the accessibility contract', async () => {
    const failures: string[] = [];
    for (const story of stories) {
      const { unmount } = await render(story.render(), { theme });
      const named = screen.queryAllByRole(/button|link|checkbox|radio|switch|tab/);
      for (const element of named) {
        try {
          expect(element).toHaveAccessibleName();
        } catch {
          failures.push(`${story.id}: an interactive element has no accessible name (4.1.2)`);
        }
      }
      failures.push(...problems().map((problem) => `${story.id}: ${problem}`));
      await unmount();
    }
    expect(failures).toEqual([]);
  });
});
