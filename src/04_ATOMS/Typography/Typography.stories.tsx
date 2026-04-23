import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ReactNode } from 'react';
import { Text } from './Text';
import { Link } from './Link';
import { Title } from './Title';
import { Label } from './Label';

const meta = {
  title: '04_ATOMS/Typography',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Семейство Typography: Text / Link / Title / Label. Figma: `638:114057`. Все компоненты — обёртки над antd `Typography.*` (кроме Label — свой span с ASeller text-styles).',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <section style={{ display: 'grid', gap: 12, padding: '20px 24px', borderBottom: '1px solid var(--color-border-subtle)' }}>
    <h3 style={{ margin: 0, fontSize: 14, fontWeight: 500, color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.13px' }}>
      {title}
    </h3>
    {children}
  </section>
);

const Row = ({ label, children }: { label: string; children: ReactNode }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 16, alignItems: 'center' }}>
    <span style={{ fontSize: 12, color: 'var(--color-text-secondary)', fontFamily: 'ui-monospace, monospace' }}>{label}</span>
    <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>{children}</div>
  </div>
);

const LABEL_TYPES = ['default', 'secondary', 'disabled', 'white', 'primary', 'error', 'success', 'warning'] as const;

// ---------------------------------------------------------------------------
// Overview — все 4 семейства на одной странице
// ---------------------------------------------------------------------------
export const Overview: Story = {
  render: () => (
    <div>
      <Section title="Title">
        <Title level={1}>H1 — Ag Заголовок</Title>
        <Title level={2}>H2 — Ag Заголовок</Title>
        <Title level={3}>H3 — Ag Заголовок</Title>
        <Title level={4}>H4 — Ag Заголовок</Title>
        <Title level={5}>H5 — Ag Заголовок</Title>
      </Section>

      <Section title="Text">
        <Row label="sm"><Text size="sm">Text base</Text><Text size="sm" strong>Text base</Text><Text size="sm" disabled>Text base</Text><Text size="sm" caps>Text base</Text><Text size="sm" skeleton /></Row>
        <Row label="base"><Text size="base">Text base</Text><Text size="base" strong>Text base</Text><Text size="base" disabled>Text base</Text><Text size="base" caps>Text base</Text><Text size="base" skeleton /></Row>
        <Row label="lg"><Text size="lg">Text base</Text><Text size="lg" strong>Text base</Text><Text size="lg" disabled>Text base</Text><Text size="lg" caps>Text base</Text><Text size="lg" skeleton /></Row>
      </Section>

      <Section title="Link">
        <Row label="sm"><Link size="sm" type="primary" href="#">Primary</Link><Link size="sm" type="default" href="#">Default</Link><Link size="sm" type="danger" href="#">Danger</Link><Link size="sm" disabled href="#">Disabled</Link></Row>
        <Row label="base"><Link size="base" type="primary" href="#">Primary</Link><Link size="base" type="default" href="#">Default</Link><Link size="base" type="danger" href="#">Danger</Link><Link size="base" disabled href="#">Disabled</Link></Row>
        <Row label="lg"><Link size="lg" type="primary" href="#">Primary</Link><Link size="lg" type="default" href="#">Default</Link><Link size="lg" type="danger" href="#">Danger</Link><Link size="lg" disabled href="#">Disabled</Link></Row>
      </Section>

      <Section title="Label">
        <Row label="sm">
          {LABEL_TYPES.map((type) => <Label key={type} size="sm" type={type}>{type}</Label>)}
        </Row>
        <Row label="sm strong">
          {LABEL_TYPES.map((type) => <Label key={type} size="sm" type={type} strong>{type}</Label>)}
        </Row>
        <Row label="default">
          {LABEL_TYPES.map((type) => <Label key={type} size="default" type={type}>{type}</Label>)}
        </Row>
        <Row label="default strong">
          {LABEL_TYPES.map((type) => <Label key={type} size="default" type={type} strong>{type}</Label>)}
        </Row>
        <Row label="inverse">
          <Label type="white" inverse>On dark</Label>
          <Label type="white" inverse strong>On dark strong</Label>
        </Row>
      </Section>
    </div>
  ),
};

// ---------------------------------------------------------------------------
// Per-family matrices — deeper views for visual regression
// ---------------------------------------------------------------------------

export const TitleLevels: Story = {
  render: () => (
    <Section title="Title — Level × Type">
      <Row label="h1"><Title level={1}>Ag Заголовок</Title><Title level={1} skeleton /></Row>
      <Row label="h2"><Title level={2}>Ag Заголовок</Title><Title level={2} skeleton /></Row>
      <Row label="h3"><Title level={3}>Ag Заголовок</Title><Title level={3} skeleton /></Row>
      <Row label="h4"><Title level={4}>Ag Заголовок</Title><Title level={4} skeleton /></Row>
      <Row label="h5"><Title level={5}>Ag Заголовок</Title><Title level={5} skeleton /></Row>
    </Section>
  ),
};

export const TextMatrix: Story = {
  render: () => (
    <Section title="Text — Size × Strong × State">
      {(['sm', 'base', 'lg'] as const).map((size) => (
        <div key={size} style={{ display: 'grid', gap: 8 }}>
          <Row label={size}><Text size={size}>Text base</Text><Text size={size} strong>Text base</Text><Text size={size} disabled>Text base</Text><Text size={size} strong disabled>Text base</Text><Text size={size} caps>Text base</Text><Text size={size} skeleton /></Row>
        </div>
      ))}
    </Section>
  ),
};

export const LinkMatrix: Story = {
  render: () => (
    <Section title="Link — Size × Type × Disabled">
      {(['sm', 'base', 'lg'] as const).map((size) => (
        <Row key={size} label={size}>
          <Link size={size} type="primary" href="#">Primary</Link>
          <Link size={size} type="default" href="#">Default</Link>
          <Link size={size} type="danger" href="#">Danger</Link>
          <Link size={size} disabled href="#">Disabled</Link>
        </Row>
      ))}
    </Section>
  ),
};

export const LabelMatrix: Story = {
  render: () => (
    <Section title="Label — Size × Type × Strong × Inverse">
      {(['sm', 'default'] as const).map((size) => (
        <div key={size} style={{ display: 'grid', gap: 8 }}>
          <Row label={size}>
            {LABEL_TYPES.map((type) => <Label key={type} size={size} type={type}>{type}</Label>)}
          </Row>
          <Row label={`${size} · strong`}>
            {LABEL_TYPES.map((type) => <Label key={type} size={size} type={type} strong>{type}</Label>)}
          </Row>
        </div>
      ))}
      <Row label="inverse">
        <Label type="white" inverse>On dark</Label>
        <Label type="white" inverse strong>On dark strong</Label>
      </Row>
    </Section>
  ),
};
