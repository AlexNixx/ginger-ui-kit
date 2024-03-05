import type { Meta, StoryObj } from '@storybook/react';

import { Tab, TabContainer, TabList, TabPanel } from './Tabs.component';
import { Typography } from '../typography';

const meta: Meta<typeof TabContainer> = {
  component: TabContainer,
  title: 'Components/Tabs',
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 1
  },
  render: args => (
    <TabContainer value={args.value}>
      <TabList onChange={value => console.log(value)}>
        <Tab value={1}>
          <Typography noWrap variant='h4'>
            Label 1
          </Typography>
        </Tab>
        <Tab value={2}>
          <Typography noWrap variant='h4'>
            Label 2
          </Typography>
        </Tab>
        <Tab value={3}>
          <Typography noWrap variant='h4'>
            Label 2
          </Typography>
        </Tab>
        <Tab value={4}>
          <Typography noWrap variant='h4'>
            Label 2
          </Typography>
        </Tab>
        <Tab value={5}>
          <Typography noWrap variant='h4'>
            Label 2
          </Typography>
        </Tab>
        <Tab value={6}>
          <Typography noWrap variant='h4'>
            Label 2
          </Typography>
        </Tab>
      </TabList>
      <TabPanel value={1}>content 1</TabPanel>
      <TabPanel value={2}>content 2</TabPanel>
    </TabContainer>
  )
};
