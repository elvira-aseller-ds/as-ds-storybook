import React, { useEffect } from 'react';
import { ConfigProvider } from 'antd';
import type { Preview } from '@storybook/react-vite';
import { addons } from 'storybook/preview-api';
import { lightTheme, darkTheme } from '../src/tokens/antd-theme';
import '../src/tokens/tokens.css';

type ThemeMode = 'light' | 'dark';

function applyTheme(mode: ThemeMode) {
  if (typeof document === 'undefined') return;
  document.documentElement.setAttribute('data-theme', mode);
  if (document.body) {
    document.body.setAttribute('data-theme', mode);
  }
}

// Sync data-theme to the *document* (both canvas and docs iframes) whenever
// the Storybook global "theme" changes — even on pure MDX pages where story
// decorators never fire.
if (typeof window !== 'undefined') {
  const channel = addons.getChannel();
  const sync = ({ globals }: { globals: Record<string, unknown> }) => {
    const t = (globals?.theme as ThemeMode) ?? 'light';
    applyTheme(t);
  };
  channel.on('globalsUpdated', sync);
  channel.on('setGlobals', sync);
}

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Light / Dark',
      defaultValue: 'light',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: { disable: true },
    a11y: { test: 'todo' },
  },
  decorators: [
    (Story, context) => {
      const mode = (context.globals.theme as ThemeMode) ?? 'light';
      const themeConfig = mode === 'dark' ? darkTheme : lightTheme;
      useEffect(() => {
        applyTheme(mode);
      }, [mode]);
      return (
        <div
          data-theme={mode}
          style={{
            background: 'var(--color-bg-page)',
            color: 'var(--color-text-primary)',
          }}
        >
          <ConfigProvider theme={themeConfig}>
            <Story />
          </ConfigProvider>
        </div>
      );
    },
  ],
};

export default preview;
