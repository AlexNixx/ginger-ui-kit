import { Children, cloneElement, memo, ReactElement } from 'react';

import { Typography } from 'components/typography';
import { SuccessIcon } from 'components/icons';
import { classNames } from 'shared/utils';
import type { Mods } from 'shared/utils';

import cls from './Stepper.module.scss';

export type StepElement = ReactElement<StepProps>;

interface StepperProps {
  activeStep: number;
  children: StepElement[];
}

export const Stepper = ({ activeStep, children }: StepperProps) => {
  return (
    <div className={cls.stepper}>
      {Children.map(children, (child, index) => {
        const isActive = index === activeStep;
        const isPassed = activeStep > index;
        return cloneElement(child, {
          key: index,
          active: isActive,
          passed: isPassed
        });
      })}
    </div>
  );
};

interface StepProps {
  active?: boolean;
  passed?: boolean;
  children?: string;
}

export const Step = memo((props: StepProps) => {
  const { children, passed = false, active = false } = props;
  const mods: Mods = {
    [cls.active]: active,
    [cls.passed]: passed
  };

  return (
    <div className={classNames(cls.step, mods)}>
      <div className={cls.circle}>{passed && <SuccessIcon />}</div>
      <Typography className={cls.label} noWrap>
        {children}
      </Typography>
    </div>
  );
});
