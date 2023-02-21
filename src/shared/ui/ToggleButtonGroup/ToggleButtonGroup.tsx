import React from 'react';
import {
  ToggleButton,
  ToggleButtonGroup as MUIToggleButtonGroup,
} from '@mui/material';

import styles from './ToggleButtonGroup.module.scss';

type Item = {
  value: string;
  label: string;
};

type ButtonGroupProps = {
  items: Item[];
  value: string;
  onChange: (newValue: string) => void;
};

export const ToggleButtonGroup = (props: ButtonGroupProps) => {
  const { items, value, onChange } = props;

  return (
    <MUIToggleButtonGroup
      color="primary"
      value={value}
      exclusive
      classes={{ root: styles.root }}
      onChange={(e, newValue) => onChange(newValue || value)}
    >
      {items.map((item) => (
        <ToggleButton
          key={item.value}
          classes={{ root: styles.button, selected: styles.active }}
          value={item.value}
        >
          {item.label}
        </ToggleButton>
      ))}
    </MUIToggleButtonGroup>
  );
};
