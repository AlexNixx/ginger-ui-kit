import type { Meta, StoryObj } from '@storybook/react';
import { Drawer } from './Drawer.component';

const meta: Meta<typeof Drawer> = {
  component: Drawer,
  title: 'Components/Drawer',
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: args => (
    <Drawer isOpen={true} {...args}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
        commodi consequatur eligendi impedit incidunt necessitatibus possimus
        quis saepe sunt totam.
      </p>
    </Drawer>
  )
};
