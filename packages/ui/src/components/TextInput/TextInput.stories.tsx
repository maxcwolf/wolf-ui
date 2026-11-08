import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { TextInput, type TextInputProps } from './TextInput';

function Controlled(props: TextInputProps) {
  const [value, setValue] = useState(props.value ?? '');
  return <TextInput {...props} value={value} onChangeText={setValue} />;
}

const meta = {
  title: 'Components/TextInput',
  component: TextInput,
  args: { label: 'Email', placeholder: 'you@example.com' },
  render: (args) => <Controlled {...args} />,
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithHelper: Story = { args: { helperText: 'We never share your email.' } };
export const WithError: Story = {
  args: { value: 'max@', errorText: 'Enter a valid email address.' },
};
export const Disabled: Story = { args: { disabled: true, value: 'max@example.com' } };
export const Password: Story = {
  args: { label: 'Password', placeholder: '', secure: true, value: 'hunter22' },
};

/** Checks the address when the field loses focus, the way a sign-up form would. */
function Validated(props: TextInputProps) {
  const [value, setValue] = useState('');
  const [touched, setTouched] = useState(false);
  const error =
    touched && !value.includes('@') ? { errorText: 'Enter a valid email address.' } : {};
  return (
    <TextInput
      {...props}
      {...error}
      value={value}
      onChangeText={setValue}
      onBlur={() => {
        setTouched(true);
      }}
    />
  );
}

export const Validation: Story = {
  args: { helperText: 'We never share your email.' },
  render: (args) => <Validated {...args} />,
};
