import { darkTheme, lightTheme } from '../../theme';
import { render, screen, userEvent } from '../../test-utils/render';
import { Button } from './Button';

describe('Button', () => {
  it('is a button named by its label', async () => {
    const onPress = jest.fn();
    await render(<Button onPress={onPress}>Save</Button>);
    await userEvent.press(screen.getByRole('button', { name: 'Save' }));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('ignores presses and says so when disabled', async () => {
    const onPress = jest.fn();
    await render(
      <Button onPress={onPress} disabled>
        Save
      </Button>,
    );
    const button = screen.getByRole('button', { name: 'Save' });
    expect(button).toBeDisabled();
    await userEvent.press(button);
    expect(onPress).not.toHaveBeenCalled();
  });

  it('keeps its name, shows a spinner and ignores presses while loading', async () => {
    const onPress = jest.fn();
    await render(
      <Button onPress={onPress} loading iconStart="check">
        Save
      </Button>,
    );
    const button = screen.getByRole('button', { name: /Save/ });
    expect(button).toBeBusy();
    expect(screen.getByRole('progressbar', { name: 'Loading' })).toBeOnTheScreen();
    await userEvent.press(button);
    expect(onPress).not.toHaveBeenCalled();
  });

  it('renders start and end icons', async () => {
    await render(
      <Button iconStart="plus" iconEnd="arrow-right" testID="button">
        Add
      </Button>,
    );
    expect(screen.getByTestId('button')).toBeOnTheScreen();
    expect(screen.queryByRole('progressbar')).toBeNull();
  });

  it.each([
    ['light', lightTheme],
    ['dark', darkTheme],
  ] as const)('uses the %s theme colors', async (theme, expected) => {
    await render(<Button testID="button">Save</Button>, { theme });
    expect(screen.getByTestId('button')).toHaveStyle({ backgroundColor: expected.colors.primary });
    expect(screen.getByText('Save')).toHaveStyle({ color: expected.colors.onPrimary });
  });

  it('stretches when fullWidth', async () => {
    await render(
      <Button fullWidth variant="secondary" size="l" testID="button">
        Continue
      </Button>,
    );
    expect(screen.getByTestId('button')).toHaveStyle({ alignSelf: 'stretch' });
  });
});
