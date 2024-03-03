import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal.component';
import React from 'react';

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: 'Components/Modal',
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: args => (
    <Modal isOpen={true} {...args}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
        commodi consequatur eligendi impedit incidunt necessitatibus possimus
        quis saepe sunt totam.
      </p>
    </Modal>
  )
};
