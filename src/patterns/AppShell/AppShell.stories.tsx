import type { Meta, StoryObj } from '@storybook/react-vite';
import { AppShell } from './AppShell';
import { Sidebar } from '../Sidebar/Sidebar';
import type { SidebarItem } from '../Sidebar/Sidebar';
import { Header } from '../Header/Header';
import {
  GoInfo,
  GoBriefcase,
  GoRocket,
  GoChecklist,
  GoPeople,
} from 'react-icons/go';
import {
  IoCartOutline,
  IoBusinessOutline,
  IoCubeOutline,
  IoStorefrontOutline,
  IoStatsChartOutline,
  IoNotificationsOutline,
  IoChatbubbleEllipsesOutline,
} from 'react-icons/io5';
import { IoIosNotificationsOff } from 'react-icons/io';
import { PiSunLight } from 'react-icons/pi';
import { TbAtom2 } from 'react-icons/tb';

const meta = {
  title: 'Patterns/AppShell',
  component: AppShell,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Pattern AppShell (Figma `81:21649`) — композиция Sidebar (`79:6480`) + Header (`81:8757`) + контентная область.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AppShell>;

export default meta;
type Story = StoryObj<typeof meta>;

const items: SidebarItem[] = [
  { key: 'dashboard', label: 'Дашборд', icon: <GoInfo /> },
  {
    key: 'service-provider',
    label: 'Постачальник послуг',
    icon: <GoBriefcase />,
    iconBadge: '99',
    children: [{ key: 'sp-orders', label: 'Замовлення' }],
  },
  {
    key: 'inventory',
    label: 'Інвентар',
    icon: <TbAtom2 />,
    children: [
      { key: 'products', label: 'Продукти' },
      { key: 'reports', label: 'Звіти' },
    ],
  },
  {
    key: 'product-launch',
    label: 'Запуск продукту',
    icon: <GoRocket />,
    iconBadge: '99',
    children: [{ key: 'pl-drafts', label: 'Чернетки' }],
  },
  {
    key: 'orders',
    label: 'Замовлення',
    icon: <GoChecklist />,
    iconBadge: '99',
    children: [{ key: 'orders-all', label: 'Всі' }],
  },
  { key: 'marketplace', label: 'Біржа товарів', icon: <IoCartOutline /> },
  { key: 'warehouse', label: 'Склад', icon: <IoBusinessOutline /> },
  { key: 'batches', label: 'Мої партії', icon: <IoCubeOutline /> },
  { key: 'users', label: 'Користувачі', icon: <GoPeople /> },
  { key: 'shops', label: 'Магазини', icon: <IoStorefrontOutline /> },
  { key: 'finance', label: 'Фінанси', icon: <IoStatsChartOutline /> },
  {
    key: 'notifications',
    label: 'Сповіщення',
    icon: <IoNotificationsOutline />,
    inlineBadge: '99',
  },
  { key: 'support', label: 'Підтримка', icon: <IoChatbubbleEllipsesOutline /> },
];

const LogoFull = () => (
  <img src="/assets/logo-small.svg" alt="ASeller" style={{ height: 40 }} />
);

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

const header = (
  <Header
    title="String value"
    subtitle="String value"
    role="Клієнт"
    user={{ name: 'Client', balance: '3604160.36 $' }}
    userMenu={[
      { key: 'profile', label: 'Профіль' },
      { key: 'logout', label: 'Вийти' },
    ]}
    locale={<LocaleUa />}
    notifications={
      <IoIosNotificationsOff size={26} color="var(--color-icon-default, #001029)" />
    }
    themeToggle={
      <PiSunLight size={24} color="var(--color-icon-default, #001029)" />
    }
  />
);

export const Default: Story = {
  args: {
    sidebar: (
      <Sidebar
        items={items}
        selectedKey="products"
        logo={<LogoFull />}
        footer="5.71.870"
      />
    ),
    header,
    children: null,
  },
  render: (args) => (
    <AppShell {...args}>
      <div style={{ minHeight: 600 }} />
    </AppShell>
  ),
};
