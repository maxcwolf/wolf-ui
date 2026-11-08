import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '../Stack';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  args: { children: 'Continue', variant: 'primary', size: 'm', disabled: false, loading: false },
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'secondary', 'ghost', 'danger'] },
    size: { control: 'inline-radio', options: ['s', 'm', 'l'] },
    onPress: { action: 'pressed' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Secondary: Story = { args: { variant: 'secondary' } };
export const Ghost: Story = { args: { variant: 'ghost' } };
export const Danger: Story = { args: { variant: 'danger', children: 'Delete' } };
export const Disabled: Story = { args: { disabled: true } };
export const WithIcons: Story = {
  args: { iconStart: 'plus', iconEnd: 'arrow-right', children: 'Add item' },
};
export const Loading: Story = { args: { loading: true }, tags: ['skip-visual'] };

export const Sizes: Story = {
  render: (args) => (
    <Stack gap="m">
      <Button {...args} size="s">
        Small
      </Button>
      <Button {...args} size="m">
        Medium
      </Button>
      <Button {...args} size="l">
        Large
      </Button>
    </Stack>
  ),
};
