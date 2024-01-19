import type { SVGProps } from 'react';
const SvgFilterIcon = (props: SVGProps<SVGSVGElement>) => (
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
        d='M21 4v2h-1l-5 7.5V22H9v-8.5L4 6H3V4zM6.404 6 11 12.894V20h2v-7.106L17.596 6z'
      />
    </g>
  </svg>
);
export default SvgFilterIcon;
