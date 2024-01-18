import { CSSProperties, memo } from 'react';

import cls from './Skeleton.module.scss';

interface SkeletonProps {
  height: number | string;
  width: number | string;
  unit?: string;
  borderRadius?: number;
}

const getUnit = (value: number | string, unit: string): string => {
  if (typeof value === 'string') {
    return value;
  }
  const _value = Math.max(Math.max(0, value), value) || 0;

  return _value ? `${value}${unit}` : null;
};

export const Skeleton = memo((props: SkeletonProps) => {
  const { height, width, unit = 'px', borderRadius = 10 } = props;

  const style: CSSProperties = {
    width: getUnit(width, unit),
    height: getUnit(height, unit),
    borderRadius: Math.max(Math.max(0, borderRadius), borderRadius) || 0
  };

  return <div className={cls.skeleton} style={style}></div>;
});
