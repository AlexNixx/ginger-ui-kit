import type { ReactElement, ReactNode } from 'react';

import { ArrowDownIcon } from 'components/icons';
import { Typography } from 'components/typography';
import { classNames } from 'shared/utils';
import type { Mods } from 'shared/utils';

import cls from './AccordionItem.module.scss';

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
