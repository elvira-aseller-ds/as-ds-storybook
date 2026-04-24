import type { Meta, StoryObj } from '@storybook/react-vite';
import { Header } from './Header';
import { IoIosNotificationsOff } from 'react-icons/io';
import { PiSunLight } from 'react-icons/pi';

const meta = {
  title: 'Patterns/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Pattern Header (Figma `81:8757`) — верхняя полоса 50px. Слева title + subtitle; справа Ваша роль + Клієнт, locale-флаг, колокольчик, переключатель темы, UserCard.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

const LocaleUa = () => (
  <div
    style={{
      width: 22,
      height: 20,
      borderRadius: 4,
      overflow: 'hidden',
      border: '1px solid #cdcccc',
      display: 'flex',
      flexDirection: 'column',
    }}
    aria-label="Ua"
  >
    <div style={{ flex: 1, background: '#005BBB' }} />
    <div style={{ flex: 1, background: '#FFD500' }} />
  </div>
);

export const Default: Story = {
  args: {
    title: 'String value',
    subtitle: 'String value',
    role: 'Клієнт',
    user: { name: 'Client', balance: '3604160.36 $' },
    userMenu: [
      { key: 'profile', label: 'Профіль' },
      { key: 'logout', label: 'Вийти' },
    ],
    locale: <LocaleUa />,
    notifications: (
      <IoIosNotificationsOff size={26} color="var(--color-icon-default, #001029)" />
    ),
    themeToggle: (
      <PiSunLight size={24} color="var(--color-icon-default, #001029)" />
    ),
  },
  render: (args) => (
    <div style={{ background: 'var(--color-bg-page)', padding: 24 }}>
      <div style={{ width: 1200, margin: '0 auto' }}>
        <Header {...args} />
      </div>
    </div>
  ),
};
