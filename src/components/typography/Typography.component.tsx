import { ReactNode } from 'react';

import { classNames } from 'shared/utils';
import type { Mods } from 'shared/utils';

import cls from './Typography.module.scss';

interface TypographyProps {
  color?: Color;
  align?: Align;
  variant?: Variant;
  fontWeight?: fontWeight;
  noWrap?: boolean;
  className?: string;
  children: ReactNode;
}

type Variant = 'body1' | 'body2' | 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1';
type Color = 'default' | 'danger' | 'warning' | 'success';
type Align = 'left' | 'center' | 'right';
type fontWeight = 'regular' | 'medium' | 'semiBold' | 'bold';

type TagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

const mapSizeToTag: Record<Variant, TagType> = {
  body1: 'p',
  body2: 'span',
  h6: 'h6',
  h5: 'h5',
  h4: 'h4',
  h3: 'h3',
  h2: 'h2',
  h1: 'h1'
};

export const Typography = (props: TypographyProps) => {
  const {
    color = 'default',
    align = 'left',
    variant = 'body1',
    fontWeight = 'regular',
    noWrap = false,
    className,
    children
  } = props;

  const mods: Mods = {
    [cls.noWrap]: noWrap
  };

  const additional: string[] = [
    cls[color],
    cls[fontWeight],
    cls[align],
    cls[variant],
    className
  ];

  const HeaderTag = mapSizeToTag[variant];

  return (
    <HeaderTag className={classNames(cls.typography, mods, additional)}>
      {children}
    </HeaderTag>
  );
};
