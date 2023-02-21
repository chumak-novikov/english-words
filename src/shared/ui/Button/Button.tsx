import React from 'react';

import { Button as MUIButton } from '@mui/material';
import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit';
  color?: 'contained' | 'text';
  className?: string;
}

export const Button = (props: ButtonProps) => {
  const {
    color = 'contained',
    type,
    onClick,
    children,
    disabled,
    className: externalClassName,
  } = props;

  const buttonClasses = {
    root: styles.root,
    contained: styles.button,
    text: styles.text,
    disabled: styles.disabled,
  };

  return (
    <div className={externalClassName}>
      <MUIButton
        variant={color}
        disabled={disabled}
        type={type}
        onClick={onClick}
        classes={buttonClasses}
        size="large"
      >
        {children}
      </MUIButton>
    </div>
  );
};
