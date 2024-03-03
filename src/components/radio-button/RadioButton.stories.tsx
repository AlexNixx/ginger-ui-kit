import type { Meta, StoryObj } from '@storybook/react';

import { RadioButton } from './RadioButton.component';
import { RadioButtonGroup } from './RadioButtonGroup.component';

const meta: Meta<typeof RadioButton> = {
  component: RadioButton,
  title: 'Components/RadioButton',
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: args => (
    <>
      <RadioButton value='value1' checked>
        Label Checked
      </RadioButton>
      <RadioButton value='value2'>Label not checked</RadioButton>
      <RadioButton value='value3' disabled>
        Label disabled
      </RadioButton>
      <RadioButton value='value4' disabled checked>
        Label Checked disabled
      </RadioButton>
    </>
  )
};
