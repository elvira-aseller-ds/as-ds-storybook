import { Button as AntButton } from 'antd';
import type { ButtonProps as AntButtonProps } from 'antd';
import type { ReactNode } from 'react';

export type ButtonType =
  | 'primary'
  | 'default'
  | 'dashed'
  | 'link'
  | 'text';

export interface ButtonProps
  extends Omit<AntButtonProps, 'type' | 'variant'> {
  /** Visual type. Figma: Type=Primary|Default|Dashed|Ghost|Link|Text */
  type?: ButtonType | 'ghost';
  /** Figma: Size=Small|Middle|Large */
  size?: 'small' | 'middle' | 'large';
  /** Figma: Danger=True — red Primary/Default/Text/Link */
  danger?: boolean;
  /** Figma: Shape=Default|Circle */
  shape?: 'default' | 'circle' | 'round';
  /** Figma: Block=True — fill container width */
  block?: boolean;
  /** Figma: Loading=True */
  loading?: boolean | { delay?: number };
  /** Icon slot (left by default) */
  icon?: ReactNode;
  /** When true, icon renders to the right of children */
  iconPosition?: 'start' | 'end';
  children?: ReactNode;
}

/**
 * ASeller DS Button — wrapper over antd `<Button>` configured via ConfigProvider
 * in .storybook/preview.tsx. Figma component: file VMTYDDrmUYtsva4gGPVEcg,
 * node 56:758 (Button, 7 variant axes).
 *
 * antd does not have a `ghost="true"` type; it's a boolean prop on Button.
 * We map our unified API (`type="ghost"`) onto antd's (`ghost` boolean +
 * `type="default"`) so consumers get a single prop.
 */
export const Button = ({
  type = 'default',
  size = 'middle',
  ...rest
}: ButtonProps) => {
  if (type === 'ghost') {
    return <AntButton {...rest} size={size} ghost type="primary" />;
  }
  return <AntButton {...rest} size={size} type={type} />;
};

Button.displayName = 'Button';
