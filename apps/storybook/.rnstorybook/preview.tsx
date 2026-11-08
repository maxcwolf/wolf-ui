import type { Preview } from '@storybook/react-native';
import { withTheme } from '../src/decorators';

const preview: Preview = {
  decorators: [withTheme],
  parameters: { controls: { matchers: { color: /(background|color)$/i } } },
};

export default preview;
