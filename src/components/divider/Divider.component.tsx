import { classNames } from 'utils';
import type { Orientation } from 'model';

import cls from './Divider.module.scss';

interface DividerProps {
  orientation?: Orientation;
  className?: string;
}

export const Divider = (props: DividerProps) => {
  const { orientation = 'horizontal', className } = props;

  const additional: string[] = [className, cls[orientation]];

  return <div className={classNames(cls.divider, {}, additional)} />;
};
