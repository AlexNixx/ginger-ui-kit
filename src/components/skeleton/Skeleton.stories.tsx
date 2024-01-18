import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from './Skeleton.component';

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
  title: 'Components/Skeleton',
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    height: '100px',
    width: '100px',
    borderRadius: 10
  }
};
