import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Form,
  Input,
  Select,
  DatePicker,
  Switch,
  Checkbox,
  InputNumber,
} from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import type { ReactNode } from 'react';
import { Button } from '../../04_ATOMS/Button/Button';
import { Link } from '../../04_ATOMS/Typography/Link';
import {
  IconUser,
  IconMail,
  IconLock,
  IconCloseCircleFill,
  IconCheckCircleFill,
} from '../../components/icons';

const meta = {
  title: 'Shared components/Form',
  component: Form,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

const SIZES: Array<{ size: SizeType; label: string; px: number }> = [
  { size: 'small', label: 'Small', px: 22 },
  { size: 'middle', label: 'Middle', px: 32 },
  { size: 'large', label: 'Large', px: 40 },
];

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <section style={{ display: 'grid', gap: 12, padding: '20px 24px', borderBottom: '1px solid var(--color-border-subtle)' }}>
    <h3 style={{ margin: 0, fontSize: 12, fontWeight: 500, color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.13px' }}>
      {title}
    </h3>
    {children}
  </section>
);

// ---------------------------------------------------------------------------
// Overview — все кейсы в одной истории.
// Включает auth-формы (login / register) с prefix-иконками, password,
// validation-состояниями и custom suffix (clear / success).
// ---------------------------------------------------------------------------
export const Overview: Story = {
  render: () => (
    <div>
      {/* Vertical · стандартная форма */}
      <Section title="Vertical · default form">
        <Form
          layout="vertical"
          style={{ width: 360 }}
          initialValues={{ sku: 'B082W3XKPT', qty: 1000, currency: 'USD' }}
        >
          <Form.Item label="SKU" name="sku" required>
            <Input size="middle" placeholder="Enter SKU" />
          </Form.Item>
          <Form.Item label="Quantity" name="qty" required tooltip="Per box quantity">
            <InputNumber size="middle" style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item label="Currency" name="currency" help="Used for profit calculations">
            <Select
              size="middle"
              options={[
                { value: 'USD', label: 'USD' },
                { value: 'EUR', label: 'EUR' },
                { value: 'UAH', label: 'UAH' },
              ]}
            />
          </Form.Item>
          <Form.Item label="Ship date" name="shipDate">
            <DatePicker size="middle" style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item style={{ marginTop: 20, marginBottom: 0 }}>
            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
              <Button type="default">Cancel</Button>
              <Button type="primary">Save</Button>
            </div>
          </Form.Item>
        </Form>
      </Section>

      {/* Auth · register с prefix-иконками + Email error + Password success */}
      <Section title="Auth · register with prefix icons, validation, password toggle">
        <Form
          layout="vertical"
          style={{ width: 420 }}
          initialValues={{ password: 'supersecretvalue123' }}
        >
          <Form.Item name="name">
            <Input
              size="large"
              placeholder="Name"
              prefix={<IconUser style={{ color: 'var(--color-icon-default)', fontSize: 18 }} />}
            />
          </Form.Item>

          <Form.Item
            name="email"
            validateStatus="error"
            help="Please input your email!"
          >
            <Input
              size="large"
              placeholder="Email"
              prefix={<IconMail style={{ color: 'var(--color-status-error)', fontSize: 18 }} />}
              suffix={
                <IconCloseCircleFill
                  style={{ color: 'var(--color-status-error)', fontSize: 20, cursor: 'pointer' }}
                />
              }
            />
          </Form.Item>

          <Form.Item name="password" validateStatus="success" hasFeedback={false}>
            <Input.Password
              size="large"
              placeholder="Password"
              prefix={<IconLock style={{ color: 'var(--color-icon-default)', fontSize: 18 }} />}
              suffix={
                <IconCheckCircleFill
                  style={{ color: 'var(--color-status-success)', fontSize: 20 }}
                />
              }
            />
          </Form.Item>

          <Form.Item name="confirmPassword">
            <Input.Password
              size="large"
              placeholder="Confirm password"
              prefix={<IconLock style={{ color: 'var(--color-icon-default)', fontSize: 18 }} />}
            />
          </Form.Item>

          <Form.Item name="role">
            <Select
              size="large"
              defaultValue="guest"
              options={[
                { value: 'guest', label: 'Guest' },
                { value: 'admin', label: 'Admin' },
                { value: 'manager', label: 'Manager' },
              ]}
            />
          </Form.Item>

          <Form.Item style={{ marginTop: 8, marginBottom: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Button type="primary" size="large">Register</Button>
              <Link size="base" href="#">Already have account?</Link>
            </div>
          </Form.Item>
        </Form>
      </Section>

      {/* Horizontal */}
      <Section title="Horizontal · label слева">
        <Form
          layout="horizontal"
          labelCol={{ flex: '160px' }}
          wrapperCol={{ flex: 1 }}
          style={{ width: 480 }}
        >
          <Form.Item label="SKU" name="sku-h" required>
            <Input size="middle" placeholder="Enter SKU" />
          </Form.Item>
          <Form.Item label="Currency" name="cur-h">
            <Select
              size="middle"
              options={[
                { value: 'USD', label: 'USD' },
                { value: 'EUR', label: 'EUR' },
              ]}
            />
          </Form.Item>
          <Form.Item label="Ship date" name="date-h">
            <DatePicker size="middle" style={{ width: '100%' }} />
          </Form.Item>
        </Form>
      </Section>

      {/* Validation states */}
      <Section title="Validation states · default / error / warning / success">
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          {(['default', 'error', 'warning', 'success'] as const).map((status) => (
            <Form key={status} layout="vertical" style={{ width: 220 }}>
              <Form.Item
                label={`Field · ${status}`}
                required
                validateStatus={status === 'default' ? '' : status}
                help={status !== 'default' ? `${status} message` : 'Helper text'}
                hasFeedback={status === 'success'}
              >
                <Input size="middle" placeholder="Placeholder" />
              </Form.Item>
            </Form>
          ))}
        </div>
      </Section>

      {/* Control sizes */}
      <Section title="Control sizes · size prop on each control (22 / 32 / 40)">
        <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
          {SIZES.map(({ size, label, px }) => (
            <Form key={size} layout="vertical" style={{ width: 220 }}>
              <h4 style={{ margin: '0 0 4px 0', fontSize: 12, color: 'var(--color-text-secondary)' }}>
                {label} · {px}px
              </h4>
              <Form.Item label="Input" name={`i-${size}`}>
                <Input size={size} placeholder={`size="${size}"`} />
              </Form.Item>
              <Form.Item label="Select" name={`s-${size}`}>
                <Select
                  size={size}
                  placeholder={size}
                  options={[{ value: 'a', label: 'A' }, { value: 'b', label: 'B' }]}
                />
              </Form.Item>
              <Form.Item label="DatePicker" name={`d-${size}`}>
                <DatePicker size={size} style={{ width: '100%' }} placeholder={size} />
              </Form.Item>
            </Form>
          ))}
        </div>
      </Section>

      {/* Mixed controls */}
      <Section title="Mixed controls · все антд field-компоненты">
        <Form layout="vertical" style={{ width: 360 }}>
          <Form.Item label="Input" name="t-text">
            <Input size="middle" placeholder="Plain text" />
          </Form.Item>
          <Form.Item label="InputNumber" name="t-num">
            <InputNumber size="middle" style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item label="Select" name="t-sel">
            <Select
              size="middle"
              options={[
                { value: 'a', label: 'Option A' },
                { value: 'b', label: 'Option B' },
              ]}
            />
          </Form.Item>
          <Form.Item label="DatePicker" name="t-date">
            <DatePicker size="middle" style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item label="Switch" name="t-sw" valuePropName="checked">
            <Switch />
          </Form.Item>
          <Form.Item label="Checkbox" name="t-cb" valuePropName="checked">
            <Checkbox>I agree to the terms</Checkbox>
          </Form.Item>
        </Form>
      </Section>

      {/* Disabled */}
      <Section title="Disabled · все поля задизейблены">
        <Form layout="vertical" style={{ width: 360 }} disabled>
          <Form.Item label="SKU" name="d-sku" required>
            <Input size="middle" defaultValue="B082W3XKPT" />
          </Form.Item>
          <Form.Item label="Currency" name="d-cur">
            <Select size="middle" options={[{ value: 'USD', label: 'USD' }]} defaultValue="USD" />
          </Form.Item>
          <Form.Item label="Ship date" name="d-date">
            <DatePicker size="middle" style={{ width: '100%' }} />
          </Form.Item>
        </Form>
      </Section>
    </div>
  ),
};
