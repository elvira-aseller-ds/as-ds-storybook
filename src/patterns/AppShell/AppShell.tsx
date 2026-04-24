import type { CSSProperties, ReactNode } from 'react';

export interface AppShellProps {
  /** Left navigation rail (usually <Sidebar />) */
  sidebar: ReactNode;
  /** Top bar (usually <Header />) */
  header: ReactNode;
  /** Main content area */
  children: ReactNode;
  /** Optional footer strip at the very bottom of the content column */
  footer?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

/**
 * ASeller DS AppShell (pattern).
 * Figma: 81:21649 — композиция Sidebar + Header + Content + footer.
 */
export const AppShell = ({
  sidebar,
  header,
  children,
  footer,
  className,
  style,
}: AppShellProps) => (
  <div
    className={className}
    style={{
      display: 'flex',
      minHeight: '100vh',
      background: 'var(--color-bg-page)',
      ...style,
    }}
  >
    {sidebar}
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0,
      }}
    >
      {header}
      <main style={{ flex: 1, padding: 16, overflow: 'auto' }}>{children}</main>
      {footer && (
        <div
          style={{
            padding: '8px 16px',
            borderTop: '1px solid var(--color-border-subtle)',
            background: 'var(--color-bg-surface)',
            fontSize: 12,
            color: 'var(--color-text-secondary)',
          }}
        >
          {footer}
        </div>
      )}
    </div>
  </div>
);

AppShell.displayName = 'AppShell';
