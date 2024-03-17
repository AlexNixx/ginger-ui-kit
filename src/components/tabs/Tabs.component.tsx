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
type TabElement = ReactElement<TabProps>;

interface TabContainerProps {
  value: Value;
  children: ReactNode;
  className?: string;
}

interface TabListProps {
  activeTab?: Value;
  onChange?: (tab: Value) => void;
  children: TabElement | TabElement[];
  className?: string;
}

interface TabProps {
  value: Value;
  active?: boolean;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

interface TabPanelProps {
  value: Value;
  children: ReactNode;
  className?: string;
}

export const TabContainer = memo(
  ({ value, children, className }: TabContainerProps) => {
    return (
      <div className={className}>
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
      </div>
    );
  }
);

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
        props.className
      ])}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
});

export const TabPanel = ({ children, className }: TabPanelProps) => (
  <div className={className}>{children}</div>
);
