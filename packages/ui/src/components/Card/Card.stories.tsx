import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../../primitives';
import { Card } from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  args: { variant: 'elevated' },
  argTypes: { variant: { control: 'inline-radio', options: ['elevated', 'outlined', 'filled'] } },
  render: (args) => (
    <Card {...args}>
      <Text variant="heading3">Weekly summary</Text>
      <Text variant="body" color="textMuted" mt="xs">
        You completed 12 of 14 tasks this week.
      </Text>
    </Card>
  ),
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Elevated: Story = {};
export const Outlined: Story = { args: { variant: 'outlined' } };
export const Filled: Story = { args: { variant: 'filled' } };
