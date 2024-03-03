import type { ChangeEvent, ReactElement, ReactNode } from 'react';

import { classNames } from 'shared/utils';
import { Typography } from '../typography';

import cls from './RadioButton.module.scss';

export type RadioButtonElement = ReactElement<RadioButtonProps>;

export type RadioButtonValue = string | number;

interface RadioButtonProps {
  value: RadioButtonValue;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (value: RadioButtonValue) => void;
  children: ReactNode;
  className?: string;
}

export const RadioButton = (props: RadioButtonProps) => {
  const {
    value,
    checked = false,
    disabled = false,
    onChange,
    className,
    children
  } = props;

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(value);
  };

  return (
    <label className={cls.container}>
      <input
        type='radio'
        checked={checked}
        disabled={disabled}
        className={classNames(cls.radio, {}, [className])}
        onChange={handleOnChange}
      />
      <span className={cls.checkmark} />
      <Typography variant='body1' className={cls.label}>
        {children}
      </Typography>
    </label>
  );
};
