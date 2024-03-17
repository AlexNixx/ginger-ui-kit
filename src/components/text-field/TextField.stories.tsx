import type {Meta, StoryObj} from '@storybook/react';

import {TextField} from './TextField.component';
import HomeIcon from '../icons/HomeIcon';

const meta: Meta<typeof TextField> = {
  component: TextField,
  title: 'Components/TextField',
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: args => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '45px'
      }}
    >
      <TextField
        leftAddon={<HomeIcon />}
        rightAddon={<HomeIcon />}
        label='Email'
        {...args}
      />
      <TextField label='Email' value={null} {...args} />
    </div>
  )
};
