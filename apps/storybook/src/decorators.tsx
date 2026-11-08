import { Box, ThemeProvider, type ColorMode } from '@maxcwolf/ui-react-native';
import type { Decorator } from '@storybook/react';

/** The themes the toolbar (web) and captures can pick. `system` follows the device. */
export const themeOptions = ['system', 'light', 'dark'] as const satisfies readonly ColorMode[];

const toMode = (value: unknown): ColorMode =>
  themeOptions.find((option) => option === value) ?? 'system';

/**
 * Wraps every story in the wolf-ui ThemeProvider on the page background. The theme comes from the
 * `theme` global (the web toolbar, or `&globals=theme:dark` in a URL), so every story can be seen
 * and tested in every theme; on a device, `system` follows the simulator's appearance.
 */
export const withTheme: Decorator = (Story, context) => {
  const mode = toMode(context.globals.theme);
  return (
    <ThemeProvider mode={mode}>
      {/* e2e waits for this id, so axe and screenshots never see the previous theme. */}
      <Box testID={`story-theme-${mode}`} flex={1} backgroundColor="background" padding="l">
        <Story />
      </Box>
    </ThemeProvider>
  );
};
