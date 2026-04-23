import type { CSSProperties, ReactNode } from 'react';
import { Typography } from 'antd';
import { textStyles } from '../../tokens/aseller-tokens';

export type TitleLevel = 1 | 2 | 3 | 4 | 5;

export interface TitleProps {
  /** Figma: Level=1..5 — maps to text-heading-1..5 */
  level?: TitleLevel;
  /** Figma: Type=Skeleton */
  skeleton?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

/**
 * ASeller DS Title — wrapper over antd Typography.Title.
 * Figma: Typography/Title (node 638:94278).
 */
export const Title = ({
  level = 1,
  skeleton = false,
  className,
  style,
  children,
}: TitleProps) => {
  const ts = textStyles[`heading-${level}` as keyof typeof textStyles];

  const baseStyle: CSSProperties = {
    fontFamily: ts.fontFamily,
    fontSize: ts.fontSize,
    lineHeight: `${ts.lineHeight}px`,
    fontWeight: ts.fontWeight,
    letterSpacing: ts.letterSpacing,
    color: 'var(--color-text-heading)',
    margin: 0,
    ...style,
  };

  if (skeleton) {
    return (
      <span
        aria-hidden
        className={className}
        style={{
          display: 'inline-block',
          width: '8em',
          height: ts.lineHeight,
          borderRadius: 'var(--radius-surface)',
          background: 'var(--color-bg-hover)',
          ...style,
        }}
      />
    );
  }

  return (
    <Typography.Title level={level} className={className} style={baseStyle}>
      {children}
    </Typography.Title>
  );
};

Title.displayName = 'Title';
