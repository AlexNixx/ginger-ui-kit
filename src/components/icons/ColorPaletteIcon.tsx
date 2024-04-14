import type { SVGProps } from 'react';
const SvgColorPaletteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 22 22'
    width='1em'
    height='1em'
    {...props}
  >
    <rect
      width={10}
      height={20}
      x={1}
      y={1}
      stroke='currentColor'
      strokeWidth={1.5}
      rx={3}
    />
    <path
      stroke='currentColor'
      strokeWidth={1.5}
      d='m11.142 4 .879-.879a3 3 0 0 1 4.242 0l2.829 2.829a3 3 0 0 1 0 4.242l-7.95 7.95'
    />
    <path
      stroke='currentColor'
      strokeWidth={1.5}
      d='M18 11a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H6'
    />
    <circle cx={6} cy={17} r={1} fill='currentColor' />
  </svg>
);
export default SvgColorPaletteIcon;
