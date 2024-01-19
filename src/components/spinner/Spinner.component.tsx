import { CSSProperties } from 'react';

import { classNames } from '../../utils';
import type { Color, Size } from '../../model';

import cls from './Spinner.module.scss';

interface SpinnerProps {
  size?: Size;
  color?: Color | 'disabled';
  height?: number;
  width?: number;
  borderWidth?: number;
  className?: string;
}

type SpinnerSize =
  | { size: Size; height?: never; width?: never; borderWidth?: never }
  | {
      size?: never;
      height: number;
      width: number;
      borderWidth?: number;
    };

export const Spinner = (props: SpinnerProps & SpinnerSize) => {
  const {
    size = 'md',
    color = 'primary',
    height,
    width,
    borderWidth,
    className
  } = props;

  const additional: string[] = [className, cls[color], cls[`size_${size}`]];

  const style: CSSProperties = {
    width: Math.min(width, height),
    height: Math.min(width, height),
    borderWidth: borderWidth ?? Math.min(width, height) / 8
  };

  return (
    <div className={classNames(cls.spinner, {}, additional)} style={style}>
      <div style={style}></div>
      <div style={style}></div>
      <div style={style}></div>
      <div style={style}></div>
    </div>
  );
};
