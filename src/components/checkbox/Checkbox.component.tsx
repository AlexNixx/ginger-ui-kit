import type { ChangeEvent, ReactElement, ReactNode } from 'react';

import { classNames } from 'shared/utils';
import { Typography } from '../typography';

import cls from './Checkbox.module.scss';

export type CheckboxElement = ReactElement<CheckboxProps>;

export type CheckboxValue = string | number;

interface CheckboxProps {
  value: CheckboxValue;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (value: CheckboxValue, checked: boolean) => void;
  children: ReactNode;
  className?: string;
}

export const Checkbox = (props: CheckboxProps) => {
  const {
    value,
    checked = false,
    disabled = false,
    onChange,
    className,
    children
  } = props;

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(value, e.target.checked);
  };

  return (
    <label className={classNames(cls.container, {}, [className])}>
      <input
        type='checkbox'
        checked={checked}
        disabled={disabled}
        onChange={handleOnChange}
      />
      <div className={cls.checkmark}></div>
      <Typography variant='body1' className={cls.label}>
        {children}
      </Typography>
    </label>
  );
};
