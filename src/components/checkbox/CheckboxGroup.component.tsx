import { Children, cloneElement, isValidElement } from 'react';

import type { CheckboxElement, CheckboxValue } from './Checkbox.component';
import { Typography } from '../typography';

import cls from './CheckboxGroup.module.scss';

interface CheckboxGroupProps {
  label?: string;
  selected: Array<CheckboxValue>;
  onValueChange: (value: Array<CheckboxValue>) => void;
  children: CheckboxElement | CheckboxElement[];
}

export const CheckboxGroup = (props: CheckboxGroupProps) => {
  const { label, selected, onValueChange, children } = props;

  const handleCheckboxChange = (value: CheckboxValue, checked: boolean) => {
    const updatedValues = checked
      ? [...selected, value]
      : selected.filter(selectedValue => selectedValue !== value);

    onValueChange(updatedValues);
  };

  return (
    <div className={cls.checkboxGroup}>
      {!!label && <Typography variant='h6'>{label}</Typography>}
      {Children.map(children, child => {
        if (isValidElement(child)) {
          return cloneElement(child, {
            key: child.props.value,
            checked: selected.includes(child.props.value),
            onChange: handleCheckboxChange
          });
        }
        return child;
      })}
    </div>
  );
};
