import { readdirSync } from 'node:fs';
import { join, relative } from 'node:path';
import type { ComponentType, ReactElement } from 'react';

type Args = Record<string, unknown>;
type Render = (args: Args) => ReactElement;

interface StoryAnnotations {
  args?: Args;
  render?: Render;
  tags?: string[];
}

export interface StoryModule {
  default: StoryAnnotations & { title: string; component?: ComponentType<Args> };
  [name: string]: unknown;
}

export interface ComposedStory {
  id: string;
  render: () => ReactElement;
}

/** Every `*.stories.tsx` under `src/`, as paths relative to it. */
export function storyFiles(root: string): string[] {
  const entries = readdirSync(root, { recursive: true, encoding: 'utf8' });
  return entries
    .filter((file) => file.endsWith('.stories.tsx'))
    .map((file) => relative(root, join(root, file)));
}

/**
 * Turns a CSF3 module into renderable stories, the way Storybook does: story args over meta args,
 * story `render` over meta `render` over `<component {...args} />`. Storybook 10 is ESM-only, so
 * its own `composeStories` cannot load under the React Native Jest preset (ADR 0007).
 */
export function composeStories(module: StoryModule): ComposedStory[] {
  const { default: meta, ...exports } = module;
  return Object.entries(exports).map(([name, value]) => {
    const story = value as StoryAnnotations;
    const args = { ...meta.args, ...story.args };
    const Component = meta.component;
    const render: Render =
      story.render ?? meta.render ?? ((a) => (Component ? <Component {...a} /> : <></>));
    return { id: `${meta.title}/${name}`, render: () => render(args) };
  });
}
