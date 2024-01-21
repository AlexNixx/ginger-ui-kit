import type { Meta, StoryObj } from '@storybook/react';

import { Accordion } from './Accordion.component';
import { AccordionItem } from './AccordionItem.component';

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: 'Components/Accordion',
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: args => (
    <Accordion>
      <AccordionItem title='Title' isOpen={true}>
        Test
      </AccordionItem>
      <AccordionItem title='Title'>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </AccordionItem>
      <AccordionItem title='Title'>Test</AccordionItem>
    </Accordion>
  )
};
