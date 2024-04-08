import type { SVGProps } from 'react';
const SvgFoodIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 26 30'
    width='1em'
    height='1em'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M6.3 29A2.3 2.3 0 0 1 4 26.7l1-12.5h2.7l1 12.5A2.3 2.3 0 0 1 6.3 29m0-14.8c2.927 0 5.3-2.955 5.3-6.6S9.227 1 6.3 1 1 3.955 1 7.6s2.373 6.6 5.3 6.6M20.2 29a2.3 2.3 0 0 1-2.3-2.3l1-12.5h2.7l1 12.5a2.3 2.3 0 0 1-2.4 2.3'
    />
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M24.7 9.7a4.6 4.6 0 0 1-4.6 4.5 4.5 4.5 0 0 1-4.5-4.5zm-9.1-8.3v8.3m4.5-8.3v8.1m4.6-8.1v8.3'
    />
  </svg>
);
export default SvgFoodIcon;
