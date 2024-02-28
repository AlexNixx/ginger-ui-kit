import type { ReactElement, ReactNode } from 'react';

import { ArrowDownIcon } from 'components/icons';
import { classNames, Mods } from 'utils';

import cls from './AccordionItem.module.scss';
import { Typography } from '../typography';

export type AccordionItemElement = ReactElement<AccordionItemProps>;

interface AccordionItemProps {
  title: string;
  isOpen?: boolean;
  onClick: () => void;
  ariaControls?: string;
  children: ReactNode;
}

export const AccordionItem = (props: AccordionItemProps) => {
  const { title, isOpen = false, onClick, ariaControls, children } = props;

  const mods: Mods = {
    [cls.open]: isOpen
  };

  return (
    <div
      className={classNames(cls.accordionItem, mods)}
      aria-expanded={isOpen}
      aria-controls={ariaControls}
      aria-label={(isOpen ? 'hide ' : 'show ') + ariaControls}
    >
      <div onClick={onClick} className={cls.header}>
        <Typography variant='h6' fontWeight='medium'>
          {title}
        </Typography>
        <ArrowDownIcon className={cls.arrowIcon} />
      </div>
      <section className={cls.content} id={ariaControls}>
        {children}
      </section>
    </div>
  );
};
