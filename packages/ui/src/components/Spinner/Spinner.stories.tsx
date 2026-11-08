import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  args: { size: 'small', color: 'primary' },
  // An animation never settles, so visual tests skip it (e2e/tests/visual.spec.ts).
  tags: ['skip-visual'],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {};
export const Large: Story = { args: { size: 'large' } };
