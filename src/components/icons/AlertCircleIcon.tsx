import type { SVGProps } from 'react';
const SvgAlertCircleIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d='M12 3.538a8.462 8.462 0 1 0 0 16.924 8.462 8.462 0 0 0 0-16.924M2 12C2 6.477 6.477 2 12
         2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12'
      clipRule='evenodd'
    />
    <path
      fill='#030D45'
      fillRule='evenodd'
      d='M12 7.641a.77.77 0 0 1 .77.77v4.102a.77.77 0 1 1-1.54 0V8.41a.77.77 0 0 1 .77-.769'
      clipRule='evenodd'
    />
    <path
      fill='#030D45'
      d='M13.026 15.59a1.026 1.026 0 1 1-2.052 0 1.026 1.026 0 0 1 2.052 0'
    />
  </svg>
);
export default SvgAlertCircleIcon;
