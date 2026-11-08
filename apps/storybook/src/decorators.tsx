import { Box, ThemeProvider, type ThemePreference } from '@maxcwolf/ui-react-native';
import type { Decorator } from '@storybook/react';

/** The themes the toolbar (web) and captures can pick. `system` follows the device. */
export const themeOptions = [
  'system',
  'light',
  'dark',
] as const satisfies readonly ThemePreference[];

const toPreference = (value: unknown): ThemePreference =>
  themeOptions.find((option) => option === value) ?? 'system';

/**
 * Wraps every story in the wolf-ui ThemeProvider on the page background. The theme comes from the
 * `theme` global (the web toolbar, or `&globals=theme:dark` in a URL), so every story can be seen
 * and tested in every theme; on a device, `system` follows the simulator's appearance.
 */
export const withTheme: Decorator = (Story, context) => {
  const preference = toPreference(context.globals.theme);
  return (
    <ThemeProvider preference={preference}>
      {/* e2e waits for this id, so axe and screenshots never see the previous theme. */}
      <Box testID={`story-theme-${preference}`} flex={1} backgroundColor="background" padding="l">
        <Story />
      </Box>
    </ThemeProvider>
  );
};
