import { createRef } from 'react';
import { darkTheme, lightTheme } from '../../theme';
import { render, screen, userEvent } from '../../test-utils/render';
import { Button, type ButtonRef } from './Button';

describe('Button', () => {
  it('is a button named by its label', async () => {
    const onPress = jest.fn();
    await render(<Button onPress={onPress}>Save</Button>);
    await userEvent.press(screen.getByRole('button', { name: 'Save' }));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('states busy only while loading, so a screen reader does not say "not busy"', async () => {
    await render(<Button>Save</Button>);
    expect(screen.getByRole('button', { name: 'Save' })).not.toHaveProp('aria-busy');
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

  it('names the spinner with loadingLabel, so it can be translated', async () => {
    await render(
      <Button loading loadingLabel="Chargement">
        Enregistrer
      </Button>,
    );
    expect(screen.getByRole('progressbar', { name: 'Chargement' })).toBeOnTheScreen();
  });

  it('hands its host view to a ref', async () => {
    const ref = createRef<ButtonRef>();
    await render(<Button ref={ref}>Save</Button>);
    expect(ref.current).not.toBeNull();
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

describe('Button with only an icon', () => {
  it('is named by its accessibilityLabel and can be pressed', async () => {
    const onPress = jest.fn();
    await render(<Button icon="close" accessibilityLabel="Close" onPress={onPress} />);
    await userEvent.press(screen.getByRole('button', { name: 'Close' }));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it.each([
    ['s', 36],
    ['m', 44],
    ['l', 52],
  ] as const)('is square at size %s', async (size, edge) => {
    await render(<Button icon="close" accessibilityLabel="Close" size={size} />);
    expect(screen.getByRole('button', { name: 'Close' })).toHaveStyle({
      minWidth: edge,
      minHeight: edge,
      paddingHorizontal: 0,
    });
  });

  it('keeps its name and shows a spinner while loading', async () => {
    await render(<Button icon="close" accessibilityLabel="Close" loading />);
    expect(screen.getByRole('button', { name: 'Close' })).toBeBusy();
    expect(screen.getByRole('progressbar', { name: 'Loading' })).toBeOnTheScreen();
  });
});
