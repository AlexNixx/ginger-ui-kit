import type { SVGProps } from 'react';
const SvgSuccessCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    width='1em'
    height='1em'
    {...props}
  >
    <path
      fill='#030D45'
      fillRule='evenodd'
      d='M15.62 9.405c.301.3.301.787 0 1.088l-4.102 4.102c-.3.3-.787.3-1.088 0l-2.05-2.051a.77.77 0 1 1 1.087-1.088l1.507 1.507 3.559-3.558c.3-.3.787-.3 1.088 0'
      clipRule='evenodd'
    />
    <path
      fill='#030D45'
      fillRule='evenodd'
      d='M12 3.538a8.462 8.462 0 1 0 0 16.924 8.462 8.462 0 0 0 0-16.924M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgSuccessCircleIcon;
