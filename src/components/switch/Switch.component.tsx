import { ChangeEvent, ReactNode } from 'react';

import { Typography } from 'components/typography';
import { classNames } from 'shared/utils';
import { CheckboxValue } from 'model';

import cls from './Switch.module.scss';

interface SwitchProps {
  value?: CheckboxValue;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (value: CheckboxValue, checked: boolean) => void;
  children?: ReactNode;
  className?: string;
}

export const Switch = (props: SwitchProps) => {
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
    <div className={classNames(cls.container, {}, [className])}>
      <div className={classNames(cls.switch, { [cls.disabled]: disabled })}>
        <input
          className={cls.input}
          id='toggle'
          type='checkbox'
          checked={checked}
          disabled={disabled}
          onChange={handleOnChange}
        />
        <label className={cls.label} htmlFor='toggle' />
      </div>
      <Typography variant='body1' className={cls.label}>
        {children}
      </Typography>
    </div>
  );
};
