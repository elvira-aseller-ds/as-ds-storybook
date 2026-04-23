import type { CSSProperties, ReactNode } from 'react';
import { textStyles } from '../../tokens/aseller-tokens';

export type LabelSize = 'sm' | 'default';
export type LabelType =
  | 'default'
  | 'secondary'
  | 'disabled'
  | 'white'
  | 'primary'
  | 'error'
  | 'success'
  | 'warning';

export interface LabelProps {
  /** Figma: Size=Sm|Default (Default renders at body-md size) */
  size?: LabelSize;
  /** Figma: Type — semantic color role */
  type?: LabelType;
  /** Figma: Strong=True */
  strong?: boolean;
  /** Figma: Inverse=True — render on dark surface (for Type=White) */
  inverse?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

const sizeToStyleKey = (size: LabelSize, strong: boolean) => {
  if (size === 'sm') return strong ? 'body-sm-strong' : 'body-sm';
  return strong ? 'body-md-strong' : 'body-md';
};

const typeToColor = (type: LabelType): string => {
  switch (type) {
    case 'default':
      return 'var(--color-text-primary)';
    case 'secondary':
      return 'var(--color-text-secondary)';
    case 'disabled':
      return 'var(--color-text-disabled)';
    case 'white':
      // Always literal white — intended for dark/inverse surfaces regardless of theme
      return '#FFFFFF';
    case 'primary':
      return 'var(--color-text-link)';
    case 'error':
      return 'var(--color-status-error)';
    case 'success':
      return 'var(--color-status-success)';
    case 'warning':
      return 'var(--color-status-warning)';
  }
};

/**
 * ASeller DS Label — compact inline text for UI labels.
 * Figma: Typography/Label (node 54:373). antd has no Label primitive; this
 * component styles a span via ASeller text styles + semantic color tokens.
 */
export const Label = ({
  size = 'default',
  type = 'default',
  strong = false,
  inverse = false,
  className,
  style,
  children,
}: LabelProps) => {
  const ts = textStyles[sizeToStyleKey(size, strong)];

  const resolvedStyle: CSSProperties = {
    fontFamily: ts.fontFamily,
    fontSize: ts.fontSize,
    lineHeight: `${ts.lineHeight}px`,
    fontWeight: ts.fontWeight,
    letterSpacing: ts.letterSpacing,
    color: typeToColor(type),
    ...(inverse
      ? {
          // "On dark surface" pattern — pill background stays ink in both themes
          background: '#001029',
          padding: '2px 6px',
          borderRadius: 'var(--radius-interactive)',
        }
      : null),
    ...style,
  };

  return (
    <span className={className} style={resolvedStyle}>
      {children}
    </span>
  );
};

Label.displayName = 'Label';
