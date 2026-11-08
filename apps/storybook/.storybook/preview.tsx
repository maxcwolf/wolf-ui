import type { Preview } from '@storybook/react';
import { themeOptions, withTheme } from '../src/decorators';

const preview: Preview = {
  decorators: [withTheme],
  globalTypes: {
    theme: {
      description: 'wolf-ui theme',
      toolbar: { title: 'Theme', icon: 'mirror', items: [...themeOptions], dynamicTitle: true },
    },
  },
  initialGlobals: { theme: 'light' },
  parameters: {
    controls: { matchers: { color: /(background|color)$/i } },
    // Axe runs on every story in the a11y panel, and fails the e2e run (e2e/stories.spec.ts).
    a11y: { test: 'error' },
  },
};

export default preview;
