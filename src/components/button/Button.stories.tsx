import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button.component';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Press me',
    size: 'md',
    variant: 'solid',
    color: 'primary',
    radius: 'md',
    isLoading: false,
    fullWidth: false,
    disabled: false,
    startContent: null,
    endContent: null
  }
};

export const Sizes: Story = {
  render: args => (
    <div
      style={{
        display: 'flex',
        gap: '15px'
      }}
    >
      <Button {...args} size='sm'>
        Small
      </Button>
      <Button {...args} size='md'>
        Medium
      </Button>
      <Button {...args} size='lg'>
        Large
      </Button>
    </div>
  )
};

export const Variants: Story = {
  render: args => (
    <div
      style={{
        display: 'flex',
        gap: '15px'
      }}
    >
      <Button {...args} variant='solid'>
        Solid
      </Button>
      <Button {...args} variant='outlined'>
        Outlined
      </Button>
      <Button {...args} variant='clear'>
        Clear
      </Button>
    </div>
  )
};

export const Colors: Story = {
  render: args => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '15px',
          justifyContent: 'space-between'
        }}
      >
        <Button {...args} variant='solid' color='primary'>
          Primary
        </Button>
        <Button {...args} variant='solid' color='secondary'>
          Secondary
        </Button>
        <Button {...args} variant='solid' color='success'>
          Success
        </Button>
        <Button {...args} variant='solid' color='warning'>
          Warning
        </Button>
        <Button {...args} variant='solid' color='danger'>
          Danger
        </Button>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '15px',
          justifyContent: 'space-between'
        }}
      >
        <Button {...args} variant='outlined' color='primary'>
          Primary
        </Button>
        <Button {...args} variant='outlined' color='secondary'>
          Secondary
        </Button>
        <Button {...args} variant='outlined' color='success'>
          Success
        </Button>
        <Button {...args} variant='outlined' color='warning'>
          Warning
        </Button>
        <Button {...args} variant='outlined' color='danger'>
          Danger
        </Button>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '15px',
          justifyContent: 'space-between'
        }}
      >
        <Button {...args} variant='clear' color='primary'>
          Primary
        </Button>
        <Button {...args} variant='clear' color='secondary'>
          Secondary
        </Button>
        <Button {...args} variant='clear' color='success'>
          Success
        </Button>
        <Button {...args} variant='clear' color='warning'>
          Warning
        </Button>
        <Button {...args} variant='clear' color='danger'>
          Danger
        </Button>
      </div>
    </div>
  )
};

export const BorderRadius: Story = {
  render: args => (
    <div
      style={{
        display: 'flex',
        gap: '15px'
      }}
    >
      <Button {...args} variant='solid' radius='none'>
        None
      </Button>
      <Button {...args} variant='solid' radius='sm'>
        Small
      </Button>
      <Button {...args} variant='solid' radius='md'>
        Medium
      </Button>
      <Button {...args} variant='solid' radius='lg'>
        Large
      </Button>
    </div>
  )
};

export const Disabled: Story = {
  render: args => (
    <div
      style={{
        display: 'flex',
        gap: '15px'
      }}
    >
      <Button {...args} variant='solid' disabled>
        Solid
      </Button>
      <Button {...args} variant='outlined' disabled>
        Outlined
      </Button>
      <Button {...args} variant='clear' disabled>
        Clear
      </Button>
    </div>
  )
};
