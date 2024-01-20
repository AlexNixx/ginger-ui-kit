import type { Meta, StoryObj } from '@storybook/react';

import { Overlay } from './Overlay.component';

const meta: Meta<typeof Overlay> = {
  component: Overlay,
  title: 'Components/Overlay',
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: null,
    onClick: null
  },
  render: args => <Overlay {...args} />
};

export const Clickable: Story = {
  args: {
    className: null,
    onClick: () => {}
  },
  render: args => <Overlay {...args} />
};
