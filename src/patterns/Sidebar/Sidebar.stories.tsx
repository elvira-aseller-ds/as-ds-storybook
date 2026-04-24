import type { Meta, StoryObj } from '@storybook/react-vite';
import { Sidebar } from './Sidebar';
import type { SidebarItem } from './Sidebar';
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
import { TbAtom2 } from 'react-icons/tb';

const meta = {
  title: 'Patterns/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Pattern Sidebar (Figma `79:6480`) — левая навигация. Open=240px, Collapsed=80px, 2 уровня меню, значки на иконках (red 99) и инлайн (blue 99), активный раздел — тонированный pill.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

const LogoFull = () => (
  <img src="/assets/logo-small.svg" alt="ASeller" style={{ height: 40 }} />
);

const LogoCompact = () => (
  <img src="/assets/favicon.svg" alt="ASeller" style={{ width: 32, height: 32 }} />
);

const items: SidebarItem[] = [
  { key: 'dashboard', label: 'Дашборд', icon: <GoInfo /> },
  {
    key: 'service-provider',
    label: 'Постачальник послуг',
    icon: <GoBriefcase />,
    iconBadge: '99',
    children: [
      { key: 'sp-orders', label: 'Замовлення' },
      { key: 'sp-services', label: 'Послуги' },
    ],
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
    children: [{ key: 'orders-all', label: 'Всі замовлення' }],
  },
  {
    key: 'marketplace',
    label: 'Біржа товарів',
    icon: <IoCartOutline />,
    children: [{ key: 'mp-all', label: 'Всі' }],
  },
  {
    key: 'warehouse',
    label: 'Склад',
    icon: <IoBusinessOutline />,
    children: [{ key: 'w-all', label: 'Всі' }],
  },
  {
    key: 'batches',
    label: 'Мої партії',
    icon: <IoCubeOutline />,
    children: [{ key: 'b-all', label: 'Всі' }],
  },
  { key: 'users', label: 'Користувачі', icon: <GoPeople /> },
  {
    key: 'shops',
    label: 'Магазини',
    icon: <IoStorefrontOutline />,
    children: [{ key: 's-all', label: 'Всі' }],
  },
  { key: 'finance', label: 'Фінанси', icon: <IoStatsChartOutline /> },
  {
    key: 'notifications',
    label: 'Сповіщення',
    icon: <IoNotificationsOutline />,
    inlineBadge: '99',
    children: [{ key: 'n-all', label: 'Всі' }],
  },
  { key: 'support', label: 'Підтримка', icon: <IoChatbubbleEllipsesOutline /> },
];

export const Default: Story = {
  args: {
    items,
    selectedKey: 'products',
    logo: <LogoFull />,
    footer: '5.71.870',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: 24, padding: 24, background: 'var(--color-bg-page)', minHeight: '100vh' }}>
      <Sidebar {...args} />
      <Sidebar {...args} collapsed logo={<LogoCompact />} />
    </div>
  ),
};
