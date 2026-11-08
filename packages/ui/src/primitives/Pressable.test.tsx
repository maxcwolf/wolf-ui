import { darkTheme, lightTheme } from '../theme';
import { fireEvent, flatStyle, render, screen, userEvent } from '../test-utils/render';
import { Pressable } from './Pressable';

describe('Pressable', () => {
  it('takes theme props and calls onPress', async () => {
    const onPress = jest.fn();
    await render(
      <Pressable
        role="button"
        accessibilityLabel="Go"
        backgroundColor="primary"
        padding="m"
        onPress={onPress}
      />,
    );
    const button = screen.getByRole('button', { name: 'Go' });
    expect(button).toHaveStyle({
      backgroundColor: lightTheme.colors.primary,
      padding: lightTheme.spacing.m,
    });
    await userEvent.press(button);
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('dims while pressed by default', async () => {
    await render(<Pressable testID="p" testOnly_pressed />);
    expect(flatStyle(screen.getByTestId('p'))).toMatchObject({ opacity: 0.7 });
  });

  it('applies a custom pressed style', async () => {
    await render(<Pressable testID="p" testOnly_pressed pressedStyle={{ opacity: 0.5 }} />);
    expect(flatStyle(screen.getByTestId('p'))).toMatchObject({ opacity: 0.5 });
  });

  it('shows no pressed style when disabled', async () => {
    const onPress = jest.fn();
    await render(<Pressable testID="p" testOnly_pressed disabled onPress={onPress} />);
    expect(flatStyle(screen.getByTestId('p')).opacity).toBeUndefined();
    await userEvent.press(screen.getByTestId('p'));
    expect(onPress).not.toHaveBeenCalled();
  });
});

describe('Pressable focus', () => {
  it('shows a focus ring in the theme color while focused, and forwards the events', async () => {
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    await render(<Pressable testID="p" onFocus={onFocus} onBlur={onBlur} />, { theme: 'dark' });
    await fireEvent(screen.getByTestId('p'), 'focus');
    expect(flatStyle(screen.getByTestId('p'))).toMatchObject({
      outlineColor: darkTheme.colors.focusRing,
      outlineWidth: 2,
    });
    await fireEvent(screen.getByTestId('p'), 'blur');
    expect(flatStyle(screen.getByTestId('p')).outlineWidth).toBeUndefined();
    expect(onFocus).toHaveBeenCalledTimes(1);
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  it('works without focus handlers', async () => {
    await render(<Pressable testID="p" />);
    await fireEvent(screen.getByTestId('p'), 'focus');
    await fireEvent(screen.getByTestId('p'), 'blur');
    expect(screen.getByTestId('p')).toBeOnTheScreen();
  });
});
