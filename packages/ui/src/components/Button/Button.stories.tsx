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
/** No visible label, so `accessibilityLabel` is required and names the button. */
export const IconOnly: Story = {
  render: () => (
    <Stack direction="row" gap="m" alignItems="center">
      <Button icon="close" accessibilityLabel="Close" size="s" variant="ghost" />
      <Button icon="search" accessibilityLabel="Search" variant="secondary" />
      <Button icon="plus" accessibilityLabel="Add item" size="l" />
    </Stack>
  ),
};
export const Loading: Story = { args: { loading: true }, tags: ['skip-visual'] };

export const Sizes: Story = {
  // Only the props every button has: `args` may be either form of the props union.
  render: ({ variant = 'primary', disabled = false, loading = false }) => (
    <Stack gap="m">
      <Button variant={variant} disabled={disabled} loading={loading} size="s">
        Small
      </Button>
      <Button variant={variant} disabled={disabled} loading={loading} size="m">
        Medium
      </Button>
      <Button variant={variant} disabled={disabled} loading={loading} size="l">
        Large
      </Button>
    </Stack>
  ),
};
