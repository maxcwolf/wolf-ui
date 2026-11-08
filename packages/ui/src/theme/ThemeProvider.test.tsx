// The provider is under test here, so it renders without the test-utils wrapper.
// eslint-disable-next-line no-restricted-imports -- render must not add a second ThemeProvider
import { render, screen, userEvent } from '@testing-library/react-native';
import * as ReactNative from 'react-native';
import { Box, Pressable, Text } from '../primitives';
import { createWolfTheme } from './create-theme';
import { darkTheme, lightTheme } from './theme';
import { ThemeProvider, useColorMode } from './ThemeProvider';

/** Shows what useColorMode reports and offers one button per theme, like a settings screen. */
function ThemeSettings() {
  const { name, mode, names, setMode } = useColorMode();
  return (
    <Box testID="screen" backgroundColor="background">
      <Text variant="body">{`active: ${name}`}</Text>
      <Text variant="body">{`mode: ${mode}`}</Text>
      {['system', ...names].map((option) => (
        <Pressable
          key={option}
          role="button"
          accessibilityLabel={`Use ${option}`}
          onPress={() => {
            setMode(option);
          }}
        />
      ))}
    </Box>
  );
}

const colorScheme = jest.spyOn(ReactNative, 'useColorScheme');

beforeEach(() => {
  colorScheme.mockReturnValue('light');
});

describe('ThemeProvider', () => {
  it('follows the device by default', async () => {
    colorScheme.mockReturnValue('dark');
    await render(
      <ThemeProvider>
        <ThemeSettings />
      </ThemeProvider>,
    );
    expect(screen.getByText('active: dark')).toBeOnTheScreen();
    expect(screen.getByText('mode: system')).toBeOnTheScreen();
    expect(screen.getByTestId('screen')).toHaveStyle({
      backgroundColor: darkTheme.colors.background,
    });
  });

  it('switches theme at runtime and reports the change', async () => {
    const onModeChange = jest.fn();
    await render(
      <ThemeProvider onModeChange={onModeChange}>
        <ThemeSettings />
      </ThemeProvider>,
    );
    await userEvent.press(screen.getByRole('button', { name: 'Use dark' }));
    expect(screen.getByTestId('screen')).toHaveStyle({
      backgroundColor: darkTheme.colors.background,
    });
    expect(screen.getByText('mode: dark')).toBeOnTheScreen();
    expect(onModeChange).toHaveBeenCalledWith('dark');
  });

  it('switches between any number of named themes', async () => {
    const sepia = createWolfTheme({ colors: { background: '#F4ECD8' } });
    await render(
      <ThemeProvider themes={{ light: lightTheme, dark: darkTheme, sepia }} defaultMode="sepia">
        <ThemeSettings />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('screen')).toHaveStyle({ backgroundColor: '#F4ECD8' });
    await userEvent.press(screen.getByRole('button', { name: 'Use light' }));
    expect(screen.getByText('active: light')).toBeOnTheScreen();
  });

  it('can be controlled by its parent', async () => {
    const { rerender } = await render(
      <ThemeProvider mode="light">
        <ThemeSettings />
      </ThemeProvider>,
    );
    expect(screen.getByText('active: light')).toBeOnTheScreen();
    await rerender(
      <ThemeProvider mode="dark">
        <ThemeSettings />
      </ThemeProvider>,
    );
    expect(screen.getByText('active: dark')).toBeOnTheScreen();
  });
});

describe('useColorMode', () => {
  it('explains itself when used outside a ThemeProvider', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => undefined);
    await expect(render(<ThemeSettings />)).rejects.toThrow(
      'useColorMode must be used inside a wolf-ui ThemeProvider.',
    );
  });
});
