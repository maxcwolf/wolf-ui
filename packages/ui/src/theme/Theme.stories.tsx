import { palette } from '@maxcwolf/ui-tokens';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Stack } from '../components/Stack';
import { Box, Text } from '../primitives';
import type { ColorName } from './colors';
import { createWolfTheme } from './create-theme';
import { darkTheme, lightTheme, type TextVariant } from './theme';
import { ThemeProvider, useColorMode } from './ThemeProvider';
import { useTheme } from './use-theme';

const meta = { title: 'Foundations/Theme' } satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

function ColorSwatches() {
  const theme = useTheme();
  const names = Object.keys(theme.colors) as ColorName[];
  return (
    <Stack gap="s">
      {names.map((name) => (
        <Stack key={name} direction="row" gap="m" alignItems="center">
          <Box
            width={40}
            height={28}
            borderRadius="s"
            borderWidth={1}
            borderColor="border"
            bg={name}
          />
          <Text variant="bodyStrong">{name}</Text>
          <Text variant="caption">{theme.colors[name]}</Text>
        </Stack>
      ))}
    </Stack>
  );
}

export const Colors: Story = { render: () => <ColorSwatches /> };

const variants: TextVariant[] = [
  'heading1',
  'heading2',
  'heading3',
  'body',
  'bodyStrong',
  'label',
  'caption',
  'button',
];

export const Typography: Story = {
  render: () => (
    <Stack gap="m">
      {variants.map((variant) => (
        <Text key={variant} variant={variant}>
          {`${variant}: The quick brown wolf`}
        </Text>
      ))}
    </Stack>
  ),
};

// A brand theme is a few overrides built from the token palette; contrast is checked like any theme.
const brand = createWolfTheme({
  colors: {
    primary: palette.green700,
    primaryPressed: palette.green800,
    primarySubtle: palette.green50,
  },
});
const brandDark = createWolfTheme(
  {
    colors: {
      primary: palette.green300,
      primaryPressed: palette.green200,
      primarySubtle: palette.green900,
    },
  },
  darkTheme,
);

function ThemeSettings() {
  const { name, mode, names, setMode } = useColorMode();
  return (
    <Box backgroundColor="background" padding="l" gap="m">
      <Text variant="heading3" role="heading">
        Appearance
      </Text>
      <Text variant="body">{`Showing "${name}" (mode: ${mode})`}</Text>
      <Stack direction="row" gap="s" flexWrap="wrap">
        {['system', ...names].map((option) => (
          <Button
            key={option}
            size="s"
            variant={option === mode ? 'primary' : 'secondary'}
            onPress={() => {
              setMode(option);
            }}
          >
            {option}
          </Button>
        ))}
      </Stack>
      <Card variant="outlined">
        <Text variant="body">Every component follows the active theme.</Text>
      </Card>
    </Box>
  );
}

/** A settings screen in miniature: its own ThemeProvider, switched at runtime. */
export const Switching: Story = {
  render: () => (
    <ThemeProvider
      themes={{ light: lightTheme, dark: darkTheme, brand, brandDark }}
      defaultMode="light"
    >
      <ThemeSettings />
    </ThemeProvider>
  ),
};
