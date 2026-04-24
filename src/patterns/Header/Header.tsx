import type { CSSProperties, ReactNode } from 'react';
import { Avatar, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { Button } from '../../04_ATOMS/Button/Button';

export type HeaderUser = {
  name: string;
  balance?: string;
  email?: string;
  avatar?: string;
};

export interface HeaderProps {
  /** Page title (Figma: headerTitle) */
  title: string;
  /** Optional breadcrumb-style subtitle (Figma: subtitle=True) */
  subtitle?: string;
  /** "Ваша роль" button label, e.g. "Клієнт" */
  role?: string;
  onRoleClick?: () => void;
  /** User card at the right edge */
  user?: HeaderUser;
  userMenu?: MenuProps['items'];
  /** Locale chip (flag + code). If null — hidden */
  locale?: ReactNode;
  /** Notifications slot (bell icon etc.) */
  notifications?: ReactNode;
  /** Theme toggle slot (sun/moon). Set to null to hide. */
  themeToggle?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const chevronDown = (
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden>
    <path
      d="M3 4.5L6 7.5L9 4.5"
      stroke="var(--color-icon-default, #001029)"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

/**
 * ASeller DS Header (pattern).
 * Figma: 81:8757 — top bar 50px, title+subtitle left, controls+user right.
 */
export const Header = ({
  title,
  subtitle,
  role,
  onRoleClick,
  user,
  userMenu,
  locale,
  notifications,
  themeToggle,
  className,
  style,
}: HeaderProps) => {
  return (
    <header
      className={className}
      style={{
        height: 50,
        background: 'var(--color-bg-surface, #fff)',
        borderBottom: '1px solid var(--color-border-subtle, #e4e4e7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 10px 0 15px',
        ...style,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        <span
          style={{
            fontFamily: 'var(--font-family-sans, Rubik)',
            fontWeight: 500,
            fontSize: 20,
            lineHeight: '22px',
            color: 'var(--color-text-primary, #001029)',
          }}
        >
          {title}
        </span>
        {subtitle && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <span
              style={{
                fontSize: 12,
                lineHeight: '16px',
                color: 'var(--color-text-secondary)',
                textTransform: 'uppercase',
                letterSpacing: '0.13px',
              }}
            >
              /
            </span>
            <span
              style={{
                fontSize: 12,
                lineHeight: '16px',
                color: 'var(--color-text-secondary)',
                letterSpacing: '0.13px',
              }}
            >
              {subtitle}
            </span>
          </div>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        {role && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '0 8px' }}>
            <span
              style={{
                fontFamily: 'var(--font-family-sans, Rubik)',
                fontWeight: 500,
                fontSize: 14,
                lineHeight: '19px',
                color: 'var(--color-icon-default, #001029)',
                letterSpacing: '0.13px',
              }}
            >
              Ваша роль
            </span>
            <Button type="primary" size="middle" onClick={onRoleClick}>
              {role}
            </Button>
          </div>
        )}

        {locale}
        {notifications}
        {themeToggle}

        {user && (
          <Dropdown menu={{ items: userMenu ?? [] }} trigger={['click']} disabled={!userMenu?.length}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 5,
                maxWidth: 160,
                cursor: userMenu?.length ? 'pointer' : 'default',
              }}
            >
              <Avatar size={36} src={user.avatar} style={{ background: 'var(--color-bg-subtle)' }}>
                {user.name[0]}
              </Avatar>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  lineHeight: 1,
                  gap: 0,
                }}
              >
                <span
                  style={{
                    fontSize: 14,
                    lineHeight: '19px',
                    color: 'var(--color-text-primary, #001029)',
                  }}
                >
                  {user.name}
                </span>
                {user.balance && (
                  <span
                    style={{
                      fontSize: 13,
                      lineHeight: '16px',
                      color: 'var(--color-text-primary, #001029)',
                    }}
                  >
                    {user.balance}
                  </span>
                )}
                {user.email && (
                  <span
                    style={{
                      fontSize: 13,
                      lineHeight: '16px',
                      color: 'var(--color-text-link, #007bff)',
                    }}
                  >
                    {user.email}
                  </span>
                )}
              </div>
              {userMenu?.length ? chevronDown : null}
            </div>
          </Dropdown>
        )}
      </div>
    </header>
  );
};

Header.displayName = 'Header';
