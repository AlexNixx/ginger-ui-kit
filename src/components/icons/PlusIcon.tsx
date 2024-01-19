import type { SVGProps } from 'react';
const SvgPlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 16 16'
    width='1em'
    height='1em'
    {...props}
  >
    <path
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M8 1v14M1 8h14'
    />
  </svg>
);
export default SvgPlusIcon;
