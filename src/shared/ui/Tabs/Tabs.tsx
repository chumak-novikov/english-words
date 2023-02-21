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
  onChange: (event: React.SyntheticEvent, newValue: string) => void;
  orientation?: 'vertical' | 'horizontal';
};

export const Tabs = (props: TabsProps) => {
  const { tabs, onChange, orientation } = props;

  return (
    <TabList
      orientation={orientation}
      classes={{
        root: styles.root,
        indicator: styles.indicator,
        scrollableX: styles.divider,
        vertical: styles.vertical,
      }}
      onChange={onChange}
    >
      {tabs.map((tab) => (
        <Tab
          key={tab.value}
          label={tab.label}
          value={tab.value}
          classes={{
            root: styles.tab,
            selected: styles.active,
          }}
        />
      ))}
    </TabList>
  );
};
