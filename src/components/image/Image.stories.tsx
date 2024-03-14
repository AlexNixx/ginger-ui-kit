import type { Meta, StoryObj } from '@storybook/react';

import { _Image as Image } from './Image.component';
import { Skeleton } from '../skeleton';
import { Typography } from '../typography';

const meta: Meta<typeof Image> = {
  component: Image,
  title: 'Components/Image',
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

const successfulUrl =
  'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg';
const largeUrl =
  'https://upload.wikimedia.org/wikipedia/commons/c/cc/ESC_large_ISS022_ISS022-E-11387-edit_01.JPG';
const errorUrl = 'https://example.com/nonexistent-image.jpg';
const smallUrl =
  'https://upload.wikimedia.org/wikipedia/commons/thumb' +
  '/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png';

export const Default: Story = {
  args: {},
  render: args => (
    <Image height={500} width={500} radius='md' src={successfulUrl} {...args} />
  )
};

export const ErrorFallbacks: Story = {
  args: {},
  render: args => (
    <Image
      height={500}
      width={500}
      radius='md'
      fallback={<Skeleton width={500} height={500} />}
      errorFallback={
        <div
          style={{
            height: 500,
            width: 500,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'var(--grey-300)',
            borderRadius: 'var(--border-radius-sm)'
          }}
        >
          <Typography>We're sorry, but we couldn't load your image</Typography>
        </div>
      }
      src={errorUrl}
      {...args}
    />
  )
};

export const LoadingFallbacks: Story = {
  args: {},
  render: args => (
    <Image
      height={500}
      width={500}
      radius='md'
      fallback={<Skeleton width={500} height={500} />}
      src={largeUrl}
      {...args}
    />
  )
};

export const FallbackUrl: Story = {
  args: {},
  render: args => (
    <Image
      height={500}
      width={500}
      radius='md'
      fallbackUrl={smallUrl}
      src={largeUrl}
      {...args}
    />
  )
};
