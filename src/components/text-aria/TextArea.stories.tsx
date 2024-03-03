import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea.component';

const meta: Meta<typeof TextArea> = {
  component: TextArea,
  title: 'Components/TextArea',
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: args => (
    <TextArea
      placeholder='Placeholder'
      label='Can you please describe this in detail?'
      hint='Some help info'
      showMaxLength
      {...args}
    />
  )
};
