import { memo } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

import { classNames } from '../../utils/classNames';
import type { Mods } from '../../utils/classNames';

import cls from './Button.module.scss';

type ButtonSizes = 'sm' | 'md' | 'lg';
type ButtonVariants = 'solid' | 'outlined' | 'clear';
type ButtonColors = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
type ButtonRadius = 'none' | ButtonSizes;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: ButtonSizes;
  variant?: ButtonVariants;
  color?: ButtonColors;
  radius?: ButtonRadius;
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
