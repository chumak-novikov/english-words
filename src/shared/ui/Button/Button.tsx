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
  size?: 'large' | 'medium';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
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
    size = 'large',
    startIcon,
    endIcon,
    className: externalClassName,
  } = props;

  const buttonClasses = {
    root: classNames(styles.root, externalClassName),
    contained: classNames(styles.button, styles[size]),
    text: classNames(styles.text, styles[size]),
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
      size={size}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {children}
    </MUIButton>
  );
};
