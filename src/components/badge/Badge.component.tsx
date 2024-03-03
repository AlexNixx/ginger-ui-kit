import { ReactNode } from 'react';

import { classNames } from 'shared/utils';

import cls from './Badge.module.scss';

interface BadgeProps {
  badgeContent: number | string;
  max?: number;
  children: ReactNode;
  className?: string;
}

export const Badge = (props: BadgeProps) => {
  const { badgeContent, max, className, children } = props;

  const getContent = (value: string | number): string | number => {
    if (typeof value === 'string') return value;

    if (max && value > max) return `${max}+`;

    return value;
  };

  return (
    <div className={classNames(cls.badgeContainer, {}, [className])}>
      {children}
      <span className={cls.badge}>{getContent(badgeContent)}</span>
    </div>
  );
};
