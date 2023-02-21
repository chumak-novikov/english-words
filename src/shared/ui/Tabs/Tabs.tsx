import React from 'react';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';

import styles from './Tabs.module.scss';

type TabProps = {
  label: string;
  value: string;
};

type TabsProps = {
  tabs: TabProps[];
  onChange: (newValue: string) => void;
  orientation?: 'vertical' | 'horizontal';
};

export const Tabs = (props: TabsProps) => {
  const { tabs, onChange, orientation } = props;

  const tabListClasses = {
    root: styles.root,
    indicator: styles.indicator,
    scrollableX: styles.divider,
    vertical: styles.vertical,
  };

  const tabClasses = {
    root: styles.tab,
    selected: styles.active,
  };

  return (
    <TabList
      orientation={orientation}
      classes={tabListClasses}
      onChange={(e, value) => onChange(value)}
    >
      {tabs.map((tab) => (
        <Tab
          key={tab.value}
          label={tab.label}
          value={tab.value}
          classes={tabClasses}
        />
      ))}
    </TabList>
  );
};
