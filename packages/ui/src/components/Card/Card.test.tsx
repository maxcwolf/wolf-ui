import { Text } from '../../primitives';
import { darkTheme, lightTheme } from '../../theme';
import { render, screen } from '../../test-utils/render';
import { Card } from './Card';

describe('Card', () => {
  it('renders its children on the surface color, elevated by default', async () => {
    await render(
      <Card testID="card">
        <Text variant="body">Hello</Text>
      </Card>,
    );
    expect(screen.getByText('Hello')).toBeOnTheScreen();
    expect(screen.getByTestId('card')).toHaveStyle({
      backgroundColor: lightTheme.colors.surface,
      elevation: 3,
    });
  });

  it('applies the outlined and filled variants from the theme', async () => {
    await render(
      <>
        <Card testID="outlined" variant="outlined" />
        <Card testID="filled" variant="filled" />
      </>,
    );
    expect(screen.getByTestId('outlined')).toHaveStyle({
      borderWidth: 1,
      borderColor: lightTheme.colors.border,
    });
    expect(screen.getByTestId('filled')).toHaveStyle({
      backgroundColor: lightTheme.colors.surfaceMuted,
    });
  });

  it('follows the active theme', async () => {
    await render(<Card testID="card" />, { theme: 'dark' });
    expect(screen.getByTestId('card')).toHaveStyle({ backgroundColor: darkTheme.colors.surface });
  });
});
