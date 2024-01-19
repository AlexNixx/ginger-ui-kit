import type { SVGProps } from 'react';
const SvgArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    width='1em'
    height='1em'
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fill='#09121F'
        d='M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z'
      />
    </g>
  </svg>
);
export default SvgArrowLeftIcon;
