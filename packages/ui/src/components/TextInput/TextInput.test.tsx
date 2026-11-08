import { createWolfTheme, darkTheme, lightTheme } from '../../theme';
import { fireEvent, render, screen, userEvent } from '../../test-utils/render';
import { TextInput } from './TextInput';

describe('TextInput', () => {
  it('is named by its label and reports typing', async () => {
    const onChangeText = jest.fn();
    await render(<TextInput label="Email" onChangeText={onChangeText} />);
    await userEvent.type(screen.getByLabelText('Email'), 'a@b.c');
    expect(onChangeText).toHaveBeenLastCalledWith('a@b.c');
  });

  it('shows helper text, and an error in its place when invalid', async () => {
    const { rerender } = await render(<TextInput label="Email" helperText="We never share it" />);
    expect(screen.getByText('We never share it')).toBeOnTheScreen();
    await rerender(
      <TextInput label="Email" helperText="We never share it" errorText="Enter an email" />,
    );
    expect(screen.queryByText('We never share it')).toBeNull();
    expect(screen.getByRole('alert')).toHaveTextContent('Enter an email');
  });

  it('cannot be edited when disabled', async () => {
    await render(<TextInput label="Email" disabled />);
    const field = screen.getByLabelText('Email');
    expect(field).toHaveProp('editable', false);
    expect(field).toBeDisabled();
  });

  it('hides a secure value until revealed, and hides it again', async () => {
    await render(<TextInput label="Password" secure />);
    const input = screen.getByLabelText('Password');
    expect(input).toHaveProp('secureTextEntry', true);
    await userEvent.press(screen.getByRole('button', { name: 'Show password' }));
    expect(input).toHaveProp('secureTextEntry', false);
    await userEvent.press(screen.getByRole('button', { name: 'Hide password' }));
    expect(input).toHaveProp('secureTextEntry', true);
  });

  it('forwards focus and blur', async () => {
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    await render(<TextInput label="Name" onFocus={onFocus} onBlur={onBlur} />);
    const input = screen.getByLabelText('Name');
    await fireEvent(input, 'focus');
    await fireEvent(input, 'blur');
    expect(onFocus).toHaveBeenCalledTimes(1);
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  it('works without focus handlers', async () => {
    await render(<TextInput label="Name" />);
    const input = screen.getByLabelText('Name');
    await fireEvent(input, 'focus');
    await fireEvent(input, 'blur');
    expect(input).toBeOnTheScreen();
  });

  it('takes its text color and font from the theme', async () => {
    const branded = createWolfTheme({ fontFamily: 'Inter' }, darkTheme);
    await render(<TextInput label="Name" />, {
      themes: { light: lightTheme, dark: branded },
      theme: 'dark',
    });
    expect(screen.getByLabelText('Name')).toHaveStyle({
      color: darkTheme.colors.text,
      fontFamily: 'Inter',
    });
  });
});
