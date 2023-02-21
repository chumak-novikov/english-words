import React from 'react';
import { Button as MUIButton } from '@mui/material';

import classNames from 'classnames';
import styles from './Button.module.scss';

type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit';
  color?: 'contained' | 'text';
  fullWidth?: boolean;
  className?: string;
};

export const Button = (props: ButtonProps) => {
  const {
    color = 'contained',
    type,
    onClick,
    children,
    disabled,
    fullWidth,
    className: externalClassName,
  } = props;

  const buttonClasses = {
    root: classNames(styles.root, externalClassName),
    contained: styles.button,
    text: styles.text,
    disabled: styles.disabled,
  };

  return (
    <MUIButton
      fullWidth={fullWidth}
      variant={color}
      disabled={disabled}
      type={type}
      onClick={onClick}
      classes={buttonClasses}
      size="large"
    >
      {children}
    </MUIButton>
  );
};
