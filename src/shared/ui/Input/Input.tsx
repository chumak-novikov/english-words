import React from 'react';
import { TextField } from '@mui/material';
import classNames from 'classnames';

import styles from './Input.module.scss';

type InputProps = {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  errorMessage?: string;
  name?: string;
  label?: string;
  required?: boolean;
  className?: string;
};

export const Input = (props: InputProps) => {
  const {
    error,
    errorMessage,
    name,
    label,
    required,
    value,
    onChange,
    className: externalClassName,
  } = props;

  const [focused, setFocused] = React.useState(false);

  const inputClasses = {
    root: styles.input,
    notchedOutline: styles.fieldset,
    focused: styles.focused,
    error: styles.error,
  };

  const labelClasses = {
    root: styles.label,
    required: styles.required,
    focused: styles.focused,
    error: styles.error,
  };

  return (
    <div className={externalClassName}>
      <div className={classNames(styles.root)}>
        <TextField
          label={value || focused ? (error && errorMessage) || label : label}
          name={name}
          variant="outlined"
          value={value}
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={() => onChange}
          error={error}
          classes={{ root: styles['text-field'] }}
          InputProps={{ classes: inputClasses }}
          InputLabelProps={{ classes: labelClasses }}
          fullWidth
        />
      </div>
    </div>
  );
};
