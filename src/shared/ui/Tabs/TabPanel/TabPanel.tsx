import React from 'react';
import { TabPanel as MUITabPanel } from '@mui/lab';
import classNames from 'classnames';

import styles from './TabPanel.module.scss';

type TabPanelProps = {
  value: string;
  children: React.ReactNode;
};

export const TabPanel = (props: TabPanelProps) => {
  const { children, value } = props;

  return (
    <MUITabPanel
      classes={{ root: classNames(styles.root, styles.override) }}
      value={value}
    >
      {children}
    </MUITabPanel>
  );
};
