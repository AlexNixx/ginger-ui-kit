import type { Meta, StoryObj } from '@storybook/react';

import { TextField } from './TextField.component';

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
        placeholder='test placeholder'
        label='Email'
        hint='Some text'
        {...args}
      />
      <TextField
        placeholder='test placeholder'
        label='Email'
        hint='Some text'
        {...args}
      />
    </div>
  )
};
