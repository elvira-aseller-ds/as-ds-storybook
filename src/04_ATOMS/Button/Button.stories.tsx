import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';
import {
  IconPlus,
  IconDelete,
  IconArrowForward,
} from '../../components/icons';

const meta = {
  title: 'Shared components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'ASeller DS Button — обёртка над antd `<Button>`. Figma: file `VMTYDDrmUYtsva4gGPVEcg`, node `56:758` (7 осей варьирования).',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'inline-radio',
      options: ['primary', 'default', 'dashed', 'ghost', 'link', 'text'],
    },
    size: { control: 'inline-radio', options: ['small', 'middle', 'large'] },
    shape: { control: 'inline-radio', options: ['default', 'circle', 'round'] },
    danger: { control: 'boolean' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    block: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
  args: {
    type: 'primary',
    size: 'middle',
    shape: 'default',
    danger: false,
    disabled: false,
    loading: false,
    block: false,
    children: 'Label',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// --- Core playground --------------------------------------------------------

export const Playground: Story = {
  tags: ['!dev'],
};

// --- By type ----------------------------------------------------------------

const typeRow = (size: 'small' | 'middle' | 'large') => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
    <Button type="primary" size={size}>Primary</Button>
    <Button type="default" size={size}>Default</Button>
    <Button type="dashed" size={size}>Dashed</Button>
    <Button type="ghost" size={size}>Ghost</Button>
    <Button type="link" size={size}>Link</Button>
    <Button type="text" size={size}>Text</Button>
  </div>
);

export const Types: Story = {
  tags: ['!dev'],
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {typeRow('large')}
      {typeRow('middle')}
      {typeRow('small')}
    </div>
  ),
};

// --- Sizes ------------------------------------------------------------------

export const Sizes: Story = {
  tags: ['!dev'],
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Button size="large">Large</Button>
      <Button size="middle">Middle</Button>
      <Button size="small">Small</Button>
    </div>
  ),
};

// --- States -----------------------------------------------------------------

export const States: Story = {
  tags: ['!dev'],
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', gap: 12 }}>
        <Button type="primary">Default</Button>
        <Button type="primary" disabled>Disabled</Button>
        <Button type="primary" loading>Loading</Button>
      </div>
      <div style={{ display: 'flex', gap: 12 }}>
        <Button type="default">Default</Button>
        <Button type="default" disabled>Disabled</Button>
        <Button type="default" loading>Loading</Button>
      </div>
      <div style={{ display: 'flex', gap: 12 }}>
        <Button type="ghost">Default</Button>
        <Button type="ghost" disabled>Disabled</Button>
        <Button type="ghost" loading>Loading</Button>
      </div>
    </div>
  ),
};

// --- Danger -----------------------------------------------------------------

export const Danger: Story = {
  tags: ['!dev'],
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Button type="primary" danger>Primary</Button>
      <Button type="default" danger>Default</Button>
      <Button type="dashed" danger>Dashed</Button>
      <Button type="link" danger>Link</Button>
      <Button type="text" danger>Text</Button>
      <Button type="primary" danger icon={<IconDelete />}>
        Delete
      </Button>
      <Button type="default" danger shape="circle" icon={<IconDelete />} />
    </div>
  ),
};

// --- Shape ------------------------------------------------------------------

export const Shapes: Story = {
  tags: ['!dev'],
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Button type="primary" shape="default" icon={<IconPlus />}>Default</Button>
      <Button type="primary" shape="round" icon={<IconPlus />}>Round</Button>
      <Button type="primary" shape="circle" icon={<IconPlus />} />
      <Button type="default" shape="circle" icon={<IconDelete />} danger />
    </div>
  ),
};

// --- With icon --------------------------------------------------------------

export const WithIcon: Story = {
  tags: ['!dev'],
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Button type="primary" icon={<IconPlus />}>Create</Button>
      <Button type="default" icon={<IconArrowForward />} iconPosition="end">
        Next
      </Button>
      <Button type="default" icon={<IconPlus />} />
      <Button type="primary" danger icon={<IconDelete />}>
        Delete
      </Button>
      <Button type="default" danger icon={<IconDelete />} />
    </div>
  ),
};

// --- Block ------------------------------------------------------------------

export const Block: Story = {
  tags: ['!dev'],
  render: () => (
    <div style={{ width: 320, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Button type="primary" block>Primary block</Button>
      <Button type="default" block>Default block</Button>
      <Button type="ghost" block>Ghost block</Button>
    </div>
  ),
};

// --- Matrix (for visual regression in Chromatic) ----------------------------

export const Matrix: Story = {
  tags: ['!dev'],
  parameters: { layout: 'fullscreen' },
  render: () => {
    const types: Array<'primary' | 'default' | 'dashed' | 'ghost' | 'link' | 'text'> =
      ['primary', 'default', 'dashed', 'ghost', 'link', 'text'];
    const sizes: Array<'large' | 'middle' | 'small'> = ['large', 'middle', 'small'];
    return (
      <div style={{ display: 'grid', gap: 16, padding: 24 }}>
        {sizes.map((size) => (
          <div key={size} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <span
              style={{
                width: 64,
                fontSize: 12,
                opacity: 0.6,
                textTransform: 'uppercase',
              }}
            >
              {size}
            </span>
            {types.map((type) => (
              <Button key={type} type={type} size={size}>
                {type}
              </Button>
            ))}
          </div>
        ))}
      </div>
    );
  },
};
