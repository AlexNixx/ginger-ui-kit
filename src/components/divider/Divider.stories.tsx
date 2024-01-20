import type { Meta, StoryObj } from '@storybook/react';

import { BagIcon, BasketIcon, PackageIcon } from 'components/icons';

import { Divider } from './Divider.component';

const meta: Meta<typeof Divider> = {
  component: Divider,
  title: 'Components/Divider',
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: args => (
    <div
      style={{
        border: '1px solid var(--color-grey)',
        borderRadius: '10px',
        padding: '10px',
        height: '150px',
        width: '300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Divider {...args} />
    </div>
  )
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    className: null
  },
  render: args => (
    <div
      style={{
        display: 'flex',
        gap: '5px',
        borderRadius: '10px',
        width: 'max-content',
        padding: '5px',
        border: '1px solid var(--color-grey)'
      }}
    >
      <BagIcon />
      <Divider {...args} orientation='vertical' />
      <BasketIcon />
      <Divider {...args} orientation='vertical' />
      <PackageIcon />
    </div>
  )
};

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
    className: null
  },
  render: args => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        borderRadius: '10px',
        width: 'max-content',
        padding: '5px',
        border: '1px solid var(--color-grey)'
      }}
    >
      <BagIcon />
      <Divider {...args} orientation='horizontal' />
      <BasketIcon />
      <Divider {...args} orientation='horizontal' />
      <PackageIcon />
    </div>
  )
};
