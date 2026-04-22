import React from 'react';
import { ConfigProvider } from 'antd';
import type { Preview } from '@storybook/react-vite';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { lightTheme, darkTheme } from '../src/tokens/antd-theme';
import '../src/tokens/tokens.css';

const preview: Preview = {
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
      const theme = context.globals.theme === 'dark' ? darkTheme : lightTheme;
      return (
        <ConfigProvider theme={theme}>
          <div
            style={{
              background: 'var(--color-bg-page)',
              color: 'var(--color-text-primary)',
              fontFamily:
                '"Rubik", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              padding: 24,
              minHeight: '100vh',
            }}
          >
            <Story />
          </div>
        </ConfigProvider>
      );
    },
    withThemeByDataAttribute({
      themes: { light: 'light', dark: 'dark' },
      defaultTheme: 'light',
      attributeName: 'data-theme',
    }),
  ],
};

export default preview;
