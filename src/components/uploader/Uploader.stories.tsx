import type { Meta, StoryObj } from '@storybook/react';
import { Uploader } from './Uploader.component';

const meta: Meta<typeof Uploader> = {
  component: Uploader,
  title: 'Components/Uploader',
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: args => <Uploader onChange={() => {}} {...args} />
};
