import type { Meta, StoryObj } from '@storybook/react';

import { BagIcon } from 'components/icons';

import { Badge } from './Badge.component';

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: 'Components/Badge',
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: args => (
    <Badge badgeContent={2}>
      <BagIcon height={28} width={28} />
    </Badge>
  )
};
