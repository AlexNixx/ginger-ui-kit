import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Image } from 'components/image';

import { Slider } from './Slider.component';

const meta: Meta<typeof Slider> = {
  component: Slider,
  title: 'Components/Slider',
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: args => (
    <Slider>
      {slides.map(slide => (
        <Image
          key={slide}
          src={slide}
          alt='some alt text'
          draggable={false}
          radius='md'
          height='100%'
          width='100%'
        />
      ))}
    </Slider>
  )
};

const slides = [
  'https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
  'https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
];
