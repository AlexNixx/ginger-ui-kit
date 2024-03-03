import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Step, Stepper } from './Stepper.component';

const meta: Meta<typeof Stepper> = {
  component: Stepper,
  title: 'Components/Stepper',
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: args => (
    <Stepper activeStep={0} {...args}>
      <Step>My 1st step</Step>
      <Step>My 2nd step</Step>
      <Step>My 3rd step</Step>
    </Stepper>
  )
};
