import React, {
  useState,
  Children,
  cloneElement,
  useEffect,
  useMemo,
  Fragment
} from 'react';

import type { AccordionItemElement } from './AccordionItem.component';

import cls from './Accordion.module.scss';
import { Divider } from 'components/divider';

interface AccordionProps {
  children: AccordionItemElement | AccordionItemElement[];
}

export const Accordion = ({ children }: AccordionProps) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const accordionItems = useMemo(
    () => Children.toArray(children) as AccordionItemElement[],
    [children]
  );

  useEffect(() => {
    const defaultOpenTitles = accordionItems.reduce(
      (acc: number[], { props: { isOpen } }, index) =>
        isOpen ? [...acc, index] : acc,
      []
    );

    setOpenItems(defaultOpenTitles);
  }, [accordionItems]);

  const isOpen = (index: number) => openItems.includes(index);

  const handleToggle = (index: number) => {
    setOpenItems(prevIndexes => {
      if (prevIndexes.includes(index)) {
        return prevIndexes.filter(item => item !== index);
      } else {
        return [...prevIndexes, index];
      }
    });
  };

  return (
    <div className={cls.accordion}>
      {accordionItems.map((item, index) => (
        <Fragment key={index}>
          {cloneElement(item, {
            isOpen: isOpen(index),
            onClick: () => handleToggle(index),
            ariaControls: `accordion_${index}`
          })}
          {index < accordionItems.length - 1 && <Divider />}
        </Fragment>
      ))}
    </div>
  );
};
