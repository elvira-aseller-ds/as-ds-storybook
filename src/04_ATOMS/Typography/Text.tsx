import type { CSSProperties, ReactNode } from 'react';
import { Typography } from 'antd';
import { textStyles } from '../../tokens/aseller-tokens';

export type TextSize = 'sm' | 'base' | 'lg';

export interface TextProps {
  /** Figma: Size=Sm|Base|Lg — maps to text-body-sm|md|lg */
  size?: TextSize;
  /** Figma: Strong=True — medium weight */
  strong?: boolean;
  /** Figma: CAPS=True — uppercase transform */
  caps?: boolean;
  /** Figma: Disabled=True — --color-text-disabled */
  disabled?: boolean;
  /** Figma: Type=Skeleton — render a placeholder block instead of text */
  skeleton?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

const sizeToStyleKey = (size: TextSize, strong: boolean) => {
  if (size === 'lg') return strong ? 'body-lg' : 'body-lg';
  if (size === 'sm') return strong ? 'body-sm-strong' : 'body-sm';
  return strong ? 'body-md-strong' : 'body-md';
};

/**
 * ASeller DS Text — wrapper over antd Typography.Text.
 * Figma: Typography/Text (node 54:287).
 */
export const Text = ({
  size = 'base',
  strong = false,
  caps = false,
  disabled = false,
  skeleton = false,
  className,
  style,
  children,
}: TextProps) => {
  const ts = textStyles[sizeToStyleKey(size, strong)];

  const baseStyle: CSSProperties = {
    fontFamily: ts.fontFamily,
    fontSize: ts.fontSize,
    lineHeight: `${ts.lineHeight}px`,
    fontWeight: ts.fontWeight,
    letterSpacing: ts.letterSpacing,
    textTransform: caps ? 'uppercase' : undefined,
    ...style,
  };

  if (skeleton) {
    return (
      <span
        className={className}
        aria-hidden
        style={{
          display: 'inline-block',
          width: '6em',
          height: ts.lineHeight,
          borderRadius: 'var(--radius-surface)',
          background: 'var(--color-bg-hover)',
          verticalAlign: 'middle',
          ...style,
        }}
      />
    );
  }

  return (
    <Typography.Text
      disabled={disabled}
      className={className}
      style={baseStyle}
    >
      {children}
    </Typography.Text>
  );
};

Text.displayName = 'Text';
