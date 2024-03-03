import { Children, cloneElement, isValidElement } from 'react';

import type {
  RadioButtonElement,
  RadioButtonValue
} from './RadioButton.component';
import { Typography } from '../typography';

import cls from './RadioButtonGroup.module.scss';

interface RadioButtonGroupProps {
  label?: string;
  selected: RadioButtonValue;
  onValueChange: (value: RadioButtonValue) => void;
  children: RadioButtonElement | RadioButtonElement[];
}

export const RadioButtonGroup = (props: RadioButtonGroupProps) => {
  const { label, selected, onValueChange, children } = props;

  return (
    <div className={cls.radioButtonGroup}>
      {!!label && <Typography variant='h6'>{label}</Typography>}
      {Children.map(children, child => {
        if (isValidElement(child)) {
          return cloneElement(child, {
            key: child.props.value,
            checked: selected === child.props.value,
            onChange: onValueChange
          });
        }
        return child;
      })}
    </div>
  );
};
