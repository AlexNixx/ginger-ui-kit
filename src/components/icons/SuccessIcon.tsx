import type { SVGProps } from 'react';
const SvgSuccessIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 18 12'
    width='1em'
    height='1em'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='m1 6 4.8 5L17 1'
    />
  </svg>
);
export default SvgSuccessIcon;
