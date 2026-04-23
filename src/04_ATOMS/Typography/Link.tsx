import type { CSSProperties, ReactNode } from 'react';
import { Typography } from 'antd';
import { textStyles } from '../../tokens/aseller-tokens';

export type LinkSize = 'sm' | 'base' | 'lg';
export type LinkType = 'primary' | 'default' | 'danger';

export interface LinkProps {
  /** Figma: Size=Sm|Base|Lg */
  size?: LinkSize;
  /** Figma: Type=Primary|Default|Danger */
  type?: LinkType;
  /** Figma: Disabled=True */
  disabled?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

const sizeToStyleKey = (size: LinkSize) => {
  if (size === 'lg') return 'body-lg';
  if (size === 'sm') return 'body-sm';
  return 'body-md';
};

const typeToColor = (type: LinkType): string => {
  if (type === 'primary') return 'var(--color-text-link)';
  if (type === 'danger') return 'var(--color-status-error)';
  return 'var(--color-text-primary)';
};

/**
 * ASeller DS Link — wrapper over antd Typography.Link.
 * Figma: Typography/Link (node 54:330).
 */
export const Link = ({
  size = 'base',
  type = 'primary',
  disabled = false,
  href,
  target,
  rel,
  onClick,
  className,
  style,
  children,
}: LinkProps) => {
  const ts = textStyles[sizeToStyleKey(size)];

  const resolvedStyle: CSSProperties = {
    fontFamily: ts.fontFamily,
    fontSize: ts.fontSize,
    lineHeight: `${ts.lineHeight}px`,
    fontWeight: ts.fontWeight,
    letterSpacing: ts.letterSpacing,
    color: disabled ? 'var(--color-text-disabled)' : typeToColor(type),
    cursor: disabled ? 'not-allowed' : 'pointer',
    ...style,
  };

  return (
    <Typography.Link
      href={disabled ? undefined : href}
      target={target}
      rel={rel}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={className}
      style={resolvedStyle}
    >
      {children}
    </Typography.Link>
  );
};

Link.displayName = 'Link';
