import type { StorybookConfig } from '@storybook/react-native-web-vite';

const config: StorybookConfig = {
  // Keep in sync with .rnstorybook/main.ts (test/storybook-config.test.mjs checks).
  stories: ['../../../packages/ui/src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-a11y'],
  framework: { name: '@storybook/react-native-web-vite', options: {} },
  core: { disableTelemetry: true },
  // Workspace packages resolve to src/ (ADR 0004).
  viteFinal: (viteConfig) => ({
    ...viteConfig,
    resolve: {
      ...viteConfig.resolve,
      conditions: [
        'wolf-ui-source',
        ...(viteConfig.resolve?.conditions ?? ['module', 'browser', 'development|production']),
      ],
    },
  }),
};

export default config;
