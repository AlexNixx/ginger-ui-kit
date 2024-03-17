import type { ChangeEvent, ReactElement, ReactNode } from 'react';

import { classNames } from 'shared/utils';
import { Typography } from 'components/typography';

import cls from './Checkbox.module.scss';

export type CheckboxElement = ReactElement<CheckboxProps>;

interface CheckboxProps {
  value?: number | string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (
    value: number | string,
    // event: ChangeEvent<HTMLInputElement>
    checked: boolean
  ) => void;
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

  return (
    <label className={classNames(cls.container, {}, [className])}>
      <input
        type='checkbox'
        checked={checked}
        disabled={disabled}
        onChange={event => onChange(value, event.target.checked)}
      />
      <div className={cls.checkmark}></div>
      <Typography variant='body1' className={cls.label}>
        {children}
      </Typography>
    </label>
  );
};
