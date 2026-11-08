import type { StorybookConfig } from '@storybook/react-native';

const config: StorybookConfig = {
  // Keep in sync with src/stories-glob.ts; sb-rn-get-stories reads this file statically.
  stories: ['../../../packages/ui/src/**/*.stories.@(ts|tsx)'],
  deviceAddons: ['@storybook/addon-ondevice-controls', '@storybook/addon-ondevice-actions'],
};

export default config;
