import type { SVGProps } from 'react';
const SvgInfoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    width='1em'
    height='1em'
    {...props}
  >
    <circle
      cx={12}
      cy={12}
      r={9}
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
    />
    <path
      stroke='currentColor'
      strokeLinejoin='round'
      strokeWidth={3}
      d='M12 8h.01v.01H12z'
    />
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M12 12v4'
    />
  </svg>
);
export default SvgInfoIcon;
