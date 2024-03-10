import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from './Switch.component';

const meta: Meta<typeof Switch> = {
  component: Switch,
  title: 'Components/Switch',
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
        gap: '10px'
      }}
    >
      <Switch value='1'>Unchecked switch</Switch>
      <Switch value='2' disabled>
        Unchecked disabled switch
      </Switch>
      <Switch value='3' checked>
        Checked switch
      </Switch>
      <Switch value='4' checked disabled>
        Checked disabled switch
      </Switch>
    </div>
  )
};
