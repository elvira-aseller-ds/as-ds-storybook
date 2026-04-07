import React from 'react';
import './button.css';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  variant = 'primary',
  size = 'medium',
  label,
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className={[
        'storybook-button',
        `storybook-button--${size}`,
        `storybook-button--${variant}`,
        disabled ? 'storybook-button--disabled' : '',
      ].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};