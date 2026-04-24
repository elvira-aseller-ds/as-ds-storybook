import type { CSSProperties, ReactNode } from 'react';
import { useState } from 'react';

export type SidebarItem = {
  key: string;
  label: ReactNode;
  icon?: ReactNode;
  /** Red notification badge shown on icon (e.g. "99") */
  iconBadge?: ReactNode;
  /** Blue inline badge rendered right of label (e.g. "99") */
  inlineBadge?: ReactNode;
  children?: Array<{ key: string; label: ReactNode }>;
};

export interface SidebarProps {
  items: SidebarItem[];
  /** Active leaf key (matches SidebarItem.key or child.key) */
  selectedKey?: string;
  /** Collapsed = icon-only 80px rail */
  collapsed?: boolean;
  /** Brand logo (full when open, compact when collapsed) */
  logo?: ReactNode;
  /** Pinned slot at the bottom (e.g. app version) */
  footer?: ReactNode;
  onSelect?: (key: string) => void;
  className?: string;
  style?: CSSProperties;
}

const OPEN_WIDTH = 240;
const CLOSED_WIDTH = 80;
const ITEM_HEIGHT = 40;

const row: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  height: ITEM_HEIGHT,
  padding: '0 16px',
  borderRadius: 16,
  cursor: 'pointer',
  fontFamily: 'var(--font-family-sans, Rubik)',
  fontSize: 14,
  lineHeight: '19px',
  color: 'var(--color-text-primary)',
  userSelect: 'none',
};

const iconWrap: CSSProperties = {
  position: 'relative',
  width: 20,
  height: 20,
  display: 'grid',
  placeItems: 'center',
  flexShrink: 0,
  fontSize: 20,
};

const redBadge: CSSProperties = {
  position: 'absolute',
  top: -8,
  right: -12,
  minWidth: 18,
  height: 16,
  padding: '0 5px',
  borderRadius: 8,
  background: 'var(--color-status-error, #dd0404)',
  color: '#fff',
  fontSize: 10,
  fontWeight: 500,
  display: 'grid',
  placeItems: 'center',
  lineHeight: 1,
};

const blueBadge: CSSProperties = {
  minWidth: 30,
  height: 18,
  padding: '0 8px',
  borderRadius: 10,
  background: 'var(--color-action-primary, #007bff)',
  color: '#fff',
  fontSize: 11,
  fontWeight: 500,
  display: 'grid',
  placeItems: 'center',
  lineHeight: 1,
};

const chevron = (open: boolean, color: string) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    style={{
      transform: open ? 'rotate(180deg)' : 'none',
      transition: 'transform 0.15s',
      flexShrink: 0,
    }}
    aria-hidden
  >
    <path
      d="M2.5 4.5L6 8L9.5 4.5"
      stroke={color}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

/**
 * ASeller DS Sidebar (pattern).
 * Figma: 79:6480 — left navigation rail. Open: 240px, Collapsed: 80px.
 */
export const Sidebar = ({
  items,
  selectedKey,
  collapsed = false,
  logo,
  footer,
  onSelect,
  className,
  style,
}: SidebarProps) => {
  const initialOpen = new Set<string>();
  for (const it of items) {
    if (it.children?.some((c) => c.key === selectedKey)) initialOpen.add(it.key);
  }
  const [openKeys, setOpenKeys] = useState<Set<string>>(initialOpen);

  const toggleOpen = (k: string) => {
    const next = new Set(openKeys);
    if (next.has(k)) next.delete(k);
    else next.add(k);
    setOpenKeys(next);
  };

  const isItemActive = (it: SidebarItem) =>
    it.key === selectedKey ||
    (it.children?.some((c) => c.key === selectedKey) ?? false);

  return (
    <aside
      className={className}
      style={{
        width: collapsed ? CLOSED_WIDTH : OPEN_WIDTH,
        minHeight: '100%',
        background: 'var(--color-bg-surface, #fff)',
        borderRight: '1px solid var(--color-border-subtle, #e4e4e7)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'width 0.2s ease',
        flexShrink: 0,
        ...style,
      }}
    >
      {logo && (
        <div
          style={{
            height: 64,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          {logo}
        </div>
      )}

      <nav style={{ flex: 1, overflowY: 'auto', padding: collapsed ? '4px 12px' : '4px 12px' }}>
        {items.map((it) => {
          const hasChildren = !!it.children?.length;
          const active = isItemActive(it);
          const opened = openKeys.has(it.key);
          const tint = active ? 'var(--color-action-primary, #007bff)' : 'var(--color-text-primary, #001029)';

          // Collapsed: icon-only, no labels/badges/chevrons
          if (collapsed) {
            return (
              <div
                key={it.key}
                role="button"
                tabIndex={0}
                onClick={() => {
                  if (hasChildren) toggleOpen(it.key);
                  else onSelect?.(it.key);
                }}
                style={{
                  ...row,
                  height: ITEM_HEIGHT,
                  justifyContent: 'center',
                  padding: 0,
                  color: tint,
                  background: active
                    ? 'var(--color-bg-selected, #eef6ff)'
                    : 'transparent',
                }}
              >
                <span style={{ ...iconWrap, color: tint }}>{it.icon}</span>
              </div>
            );
          }

          return (
            <div key={it.key}>
              <div
                role="button"
                tabIndex={0}
                onClick={() => {
                  if (hasChildren) toggleOpen(it.key);
                  else onSelect?.(it.key);
                }}
                style={{
                  ...row,
                  color: tint,
                  fontWeight: active ? 500 : 400,
                  background: active && !hasChildren
                    ? 'var(--color-bg-selected, #eef6ff)'
                    : 'transparent',
                }}
              >
                <span style={{ ...iconWrap, color: tint }}>
                  {it.icon}
                  {it.iconBadge != null && <span style={redBadge}>{it.iconBadge}</span>}
                </span>
                <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {it.label}
                </span>
                {it.inlineBadge != null && <span style={blueBadge}>{it.inlineBadge}</span>}
                {hasChildren && chevron(opened, tint)}
              </div>

              {hasChildren && opened && (
                <div style={{ paddingLeft: 32, display: 'flex', flexDirection: 'column' }}>
                  {it.children!.map((c) => {
                    const childActive = c.key === selectedKey;
                    return (
                      <div
                        key={c.key}
                        role="button"
                        tabIndex={0}
                        onClick={() => onSelect?.(c.key)}
                        style={{
                          ...row,
                          padding: '0 12px',
                          color: 'var(--color-text-primary, #001029)',
                          background: childActive
                            ? 'var(--color-bg-selected, #eef6ff)'
                            : 'transparent',
                          fontWeight: childActive ? 500 : 400,
                        }}
                      >
                        <span style={{ flex: 1 }}>{c.label}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {footer && (
        <div
          style={{
            padding: '12px',
            display: 'flex',
            justifyContent: 'center',
            fontSize: 13,
            color: 'var(--color-text-link, #007bff)',
            flexShrink: 0,
          }}
        >
          {footer}
        </div>
      )}
    </aside>
  );
};

Sidebar.displayName = 'Sidebar';
