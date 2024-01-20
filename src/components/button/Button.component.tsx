import { memo } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

import { Spinner } from 'components/spinner';
import type { SpinnerColor } from 'components/spinner';

import { classNames } from 'utils';
import type { Mods } from 'utils';
import type { BorderRadius, Color, Size, Variant } from 'model';

import cls from './Button.module.scss';

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

  const isDisabled: boolean = isLoading || disabled;

  const getSpinnerColor = (): SpinnerColor => {
    return variant === 'solid' ? 'white' : color;
  };

  const mods: Mods = {
    [cls.disabled]: isDisabled,
    [cls.fullWidth]: fullWidth
  };

  const additional: string[] = [
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
      {isLoading && (
        <Spinner
          color={getSpinnerColor()}
          height={24}
          width={24}
          className={cls.spinner}
        />
      )}
      {startContent}
      {children}
      {endContent}
    </button>
  );
});
