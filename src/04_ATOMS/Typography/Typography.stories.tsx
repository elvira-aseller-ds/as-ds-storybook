import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ReactNode } from 'react';
import { Text } from './Text';
import { Link } from './Link';
import { Title } from './Title';
import { Label } from './Label';

const meta = {
  title: 'Shared components/Typography',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

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

const Row = ({ label, children }: { label: string; children: ReactNode }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 16, alignItems: 'center' }}>
    <span style={{ fontSize: 12, color: 'var(--color-text-secondary)', fontFamily: 'ui-monospace, monospace' }}>{label}</span>
    <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>{children}</div>
  </div>
);

const LABEL_TYPES = ['default', 'secondary', 'disabled', 'white', 'primary', 'error', 'success', 'warning'] as const;

// ---------------------------------------------------------------------------
// Overview — все 4 семейства + матрицы вариантов в одной истории
// ---------------------------------------------------------------------------
export const Overview: Story = {
  render: () => (
    <div>
      <Section title="Title · Level 1–5 · default + skeleton">
        <Row label="h1"><Title level={1}>Ag Заголовок</Title><Title level={1} skeleton /></Row>
        <Row label="h2"><Title level={2}>Ag Заголовок</Title><Title level={2} skeleton /></Row>
        <Row label="h3"><Title level={3}>Ag Заголовок</Title><Title level={3} skeleton /></Row>
        <Row label="h4"><Title level={4}>Ag Заголовок</Title><Title level={4} skeleton /></Row>
        <Row label="h5"><Title level={5}>Ag Заголовок</Title><Title level={5} skeleton /></Row>
      </Section>

      <Section title="Text · Size × Strong × Disabled × CAPS × Skeleton">
        {(['sm', 'base', 'lg'] as const).map((size) => (
          <Row key={size} label={size}>
            <Text size={size}>Text base</Text>
            <Text size={size} strong>Text base</Text>
            <Text size={size} disabled>Text base</Text>
            <Text size={size} strong disabled>Text base</Text>
            <Text size={size} caps>Text base</Text>
            <Text size={size} skeleton />
          </Row>
        ))}
      </Section>

      <Section title="Link · Size × Type × Disabled">
        {(['sm', 'base', 'lg'] as const).map((size) => (
          <Row key={size} label={size}>
            <Link size={size} type="primary" href="#">Primary</Link>
            <Link size={size} type="default" href="#">Default</Link>
            <Link size={size} type="danger" href="#">Danger</Link>
            <Link size={size} disabled href="#">Disabled</Link>
          </Row>
        ))}
      </Section>

      <Section title="Label · Size × Type × Strong × Inverse">
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
    </div>
  ),
};
