import type { Meta, StoryObj } from '@storybook/react';

import { Spinner } from './Spinner.component';

const meta: Meta<typeof Spinner> = {
  component: Spinner,
  title: 'Components/Spinner',
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
