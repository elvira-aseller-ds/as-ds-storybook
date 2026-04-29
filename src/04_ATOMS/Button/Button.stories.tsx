import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ReactNode } from 'react';
import { Button } from './Button';
import { IconPlus, IconDelete, IconArrowForward } from '../../components/icons';

const meta = {
  title: 'Shared components/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <section style={{ display: 'grid', gap: 12, padding: '20px 24px', borderBottom: '1px solid var(--color-border-subtle)' }}>
    <h3 style={{ margin: 0, fontSize: 12, fontWeight: 500, color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.13px' }}>
      {title}
    </h3>
    {children}
  </section>
);

const TYPES: Array<'primary' | 'default' | 'dashed' | 'ghost' | 'link' | 'text'> =
  ['primary', 'default', 'dashed', 'ghost', 'link', 'text'];
const SIZES: Array<'large' | 'middle' | 'small'> = ['large', 'middle', 'small'];

// ---------------------------------------------------------------------------
// Overview — все варианты в одной истории, по секциям
// ---------------------------------------------------------------------------
export const Overview: Story = {
  render: () => (
    <div>
      <Section title="Type × Size · matrix">
        <div style={{ display: 'grid', gap: 16 }}>
          {SIZES.map((size) => (
            <div key={size} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <span style={{ width: 64, fontSize: 12, color: 'var(--color-text-secondary)', textTransform: 'uppercase' }}>
                {size}
              </span>
              {TYPES.map((type) => (
                <Button key={type} type={type} size={size}>
                  {type}
                </Button>
              ))}
            </div>
          ))}
        </div>
      </Section>

      <Section title="States · default / disabled / loading">
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
      </Section>

      <Section title="Danger · all types + with icon">
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <Button type="primary" danger>Primary</Button>
          <Button type="default" danger>Default</Button>
          <Button type="dashed" danger>Dashed</Button>
          <Button type="link" danger>Link</Button>
          <Button type="text" danger>Text</Button>
          <Button type="primary" danger icon={<IconDelete />}>Delete</Button>
          <Button type="default" danger shape="circle" icon={<IconDelete />} />
        </div>
      </Section>

      <Section title="Shape · default / round / circle">
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Button type="primary" shape="default" icon={<IconPlus />}>Default</Button>
          <Button type="primary" shape="round" icon={<IconPlus />}>Round</Button>
          <Button type="primary" shape="circle" icon={<IconPlus />} />
          <Button type="default" shape="circle" icon={<IconDelete />} danger />
        </div>
      </Section>

      <Section title="Icon · prefix / suffix / icon-only">
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Button type="primary" icon={<IconPlus />}>Create</Button>
          <Button type="default" icon={<IconArrowForward />} iconPosition="end">Next</Button>
          <Button type="default" icon={<IconPlus />} />
          <Button type="primary" danger icon={<IconDelete />}>Delete</Button>
          <Button type="default" danger icon={<IconDelete />} />
        </div>
      </Section>

      <Section title="Block · full width">
        <div style={{ width: 320, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Button type="primary" block>Primary block</Button>
          <Button type="default" block>Default block</Button>
          <Button type="ghost" block>Ghost block</Button>
        </div>
      </Section>
    </div>
  ),
};
