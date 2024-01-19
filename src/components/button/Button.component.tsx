import { memo } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

import { classNames } from '../../utils';
import type { Mods } from '../../utils';
import type { BorderRadius, Color, Size, Variant } from '../../model';

import cls from './Button.module.scss';
import { Spinner } from '../spinner';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: Size;
  variant?: Variant;
  color?: Color;
  radius?: BorderRadius;
  isLoading?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  startContent?: ReactNode;
  endContent?: ReactNode;
  children: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    size = 'md',
    variant = 'solid',
    color = 'primary',
    radius = 'md',
    isLoading = false,
    fullWidth = false,
    disabled = false,
    startContent,
    endContent,
    children,
    ...otherProps
  } = props;

  const isDisabled = isLoading || disabled;

  const mods: Mods = {
    [cls.disabled]: isDisabled,
    [cls.fullWidth]: fullWidth
  };

  const additional = [
    className,
    cls[variant],
    cls[color],
    cls[`size_${size}`],
    cls[`radius_${radius}`]
  ];

  return (
    <button
      disabled={isDisabled}
      className={classNames(cls.button, mods, additional)}
      {...otherProps}
    >
      {startContent}
      {children}
      {endContent}
    </button>
  );
});
