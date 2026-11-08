import type { Meta, StoryObj } from '@storybook/react';
import { Box, Text } from '../../primitives';
import { Icon } from './Icon';
import { iconNames } from './icon-paths';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  args: { name: 'check', size: 'm', color: 'text' },
  argTypes: {
    name: { control: 'select', options: iconNames },
    size: { control: 'inline-radio', options: ['s', 'm', 'l'] },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Labelled: Story = {
  args: { name: 'alert', accessibilityLabel: 'Warning', color: 'warning' },
};

export const All: Story = {
  render: (args) => (
    <Box flexDirection="row" flexWrap="wrap" gap="l">
      {iconNames.map((name) => (
        <Box key={name} alignItems="center" gap="xs" width={88}>
          <Icon {...args} name={name} />
          <Text variant="caption">{name}</Text>
        </Box>
      ))}
    </Box>
  ),
};
