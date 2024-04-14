import type { SVGProps } from 'react';
const SvgFileIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 16 20'
    width='1em'
    height='1em'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M9 1v.6c0 2.25 0 3.375.573 4.163a3 3 0 0 0 .664.664C11.025 7 12.15 7 14.4 7h.6m0 1.237V13.6c0 2.25 0 3.375-.573 4.163q-.28.384-.664.664C12.975 19 11.85 19 9.6 19H6.4c-2.25 0-3.375 0-4.163-.573a3 3 0 0 1-.664-.664C1 16.975 1 15.85 1 13.6V6.4c0-2.25 0-3.375.573-4.163a3 3 0 0 1 .664-.664C3.025 1 4.15 1 6.4 1h1.363c.98 0 1.47 0 1.921.147q.225.073.435.18c.424.216.77.562 1.463 1.255l1.836 1.836c.693.693 1.04 1.04 1.255 1.463q.107.21.18.435c.147.451.147.941.147 1.92Z'
    />
  </svg>
);
export default SvgFileIcon;
