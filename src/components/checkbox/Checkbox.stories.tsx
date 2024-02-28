import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox.component';
import { CheckboxGroup } from './CheckboxGroup.component';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Components/Checkbox',
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

let selected: (string | number)[] = ['value1'];

const onValueChange = (value: (string | number)[]) => {
  selected = value;
};

export const Default: Story = {
  args: {},
  render: args => (
    <CheckboxGroup
      selected={selected}
      onValueChange={onValueChange}
      label='My checkbox'
    >
      <Checkbox value='value 2'>Label 1</Checkbox>
      <Checkbox value={selected[0]}>Label 2</Checkbox>
      <Checkbox value={selected[0]} disabled>
        Label 3
      </Checkbox>
      <Checkbox value='value 3' disabled>
        Label 4
      </Checkbox>
    </CheckboxGroup>
  )
};
