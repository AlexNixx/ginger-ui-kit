import {
  Children,
  cloneElement,
  isValidElement,
  memo,
  ReactElement,
  ReactNode
} from 'react';

import { classNames } from '../../shared/utils';

import cls from './Tabs.module.scss';

type Value = number | string;
type TabListElement = ReactElement<TabListProps>;
type TabElement = ReactElement<TabProps>;
type TabPanelElement = ReactElement<TabPanelProps>;

interface TabContainerProps {
  value: Value;
  children: TabListElement | TabPanelElement | TabPanelElement[];
}

interface TabListProps {
  activeTab?: Value;
  onChange: (tab: Value) => void;
  children: TabElement | TabElement[];
  className?: string;
}

interface TabProps {
  value: Value;
  active?: boolean;
  onClick?: () => void;
  children: ReactNode;
  classNames?: string;
}

interface TabPanelProps {
  value: Value;
  children: ReactNode;
}

export const TabContainer = memo(({ value, children }: TabContainerProps) => {
  return (
    <>
      {Children.map(children, child => {
        if (isValidElement<TabListProps>(child) && child.type === TabList) {
          return cloneElement(child, {
            activeTab: value
          });
        }
        if (isValidElement<TabPanelProps>(child) && child.type === TabPanel) {
          if (child.props.value === value) {
            return child;
          }
          return null;
        }
        return null;
      })}
    </>
  );
});

export const TabList = memo((props: TabListProps) => {
  return (
    <div className={classNames(cls.tabList, {}, [props.className])}>
      {Children.map(props.children, child => {
        const isActive = child.props.value === props.activeTab;

        return cloneElement(child, {
          key: child.props.value,
          active: isActive,
          onClick: () => props.onChange(child.props.value)
        });
      })}
    </div>
  );
});

export const Tab = memo((props: TabProps) => {
  return (
    <div
      className={classNames(cls.tab, { [cls.active]: props.active }, [
        props.classNames
      ])}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
});

export const TabPanel = ({ children }: TabPanelProps) => children;
