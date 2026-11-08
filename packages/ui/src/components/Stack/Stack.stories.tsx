import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '../../primitives';
import type { ColorName } from '../../theme';
import { Stack } from './Stack';

const swatches: ColorName[] = ['primary', 'success', 'warning'];

const meta = {
  title: 'Components/Stack',
  component: Stack,
  args: { direction: 'column', gap: 'm' },
  argTypes: {
    direction: { control: 'inline-radio', options: ['row', 'column'] },
    gap: { control: 'select', options: ['none', '2xs', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl'] },
  },
  render: (args) => (
    <Stack {...args}>
      {swatches.map((color) => (
        <Box key={color} width={64} height={48} borderRadius="m" bg={color} />
      ))}
    </Stack>
  ),
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Column: Story = {};
export const Row: Story = { args: { direction: 'row', gap: 'l' } };
