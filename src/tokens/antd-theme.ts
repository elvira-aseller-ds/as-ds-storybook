import type { ThemeConfig } from 'antd';
import { theme as antdTheme } from 'antd';
import { lightTokens, darkTokens, type ThemeTokens } from './aseller-tokens';

const fontFamily =
  '"Rubik", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

function buildTheme(t: ThemeTokens, mode: 'light' | 'dark'): ThemeConfig {
  return {
    algorithm:
      mode === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
    token: {
      fontFamily,
      fontSize: 14,

      colorPrimary: t.color.actionPrimary,
      colorPrimaryHover: t.color.actionPrimaryHover,
      colorPrimaryActive: t.color.actionPrimaryActive,
      colorLink: t.color.textLink,
      colorLinkHover: t.color.actionPrimaryHover,
      colorLinkActive: t.color.actionPrimaryActive,

      colorText: t.color.textPrimary,
      colorTextHeading: t.color.textHeading,
      colorTextSecondary: t.color.textSecondary,
      colorTextDisabled: t.color.textDisabled,

      colorBgContainer: t.color.bgSurface,
      colorBgElevated: t.color.bgElevated,
      colorBgLayout: t.color.bgPage,
      colorBgContainerDisabled: t.color.bgDisabled,

      colorBorder: t.color.borderDefault,
      colorBorderSecondary: t.color.borderSubtle,

      colorError: t.color.statusError,
      colorErrorBg: t.color.statusErrorBg,
      colorErrorBorder: t.color.statusErrorBorder,
      colorSuccess: t.color.statusSuccess,
      colorSuccessBg: t.color.statusSuccessBg,
      colorWarning: t.color.statusWarning,
      colorWarningBg: t.color.statusWarningBg,

      borderRadius: t.radius.surface,
      borderRadiusSM: t.radius.interactive,
      borderRadiusLG: t.radius.card,
    },
    components: {
      Button: {
        fontFamily,
        fontWeight: 400,
        // Sizes per Figma Button component (56:758):
        // Small 22h, Middle 32h, Large 40h.
        controlHeightSM: 22,
        controlHeight: 32,
        controlHeightLG: 40,
        paddingInline: 15,
        paddingInlineSM: 7,
        paddingInlineLG: 15,
        // Figma: all button sizes use --radius-card (16px).
        borderRadius: t.radius.card,
        borderRadiusSM: t.radius.card,
        borderRadiusLG: t.radius.card,

        defaultBg: t.color.bgSurface,
        defaultColor: t.color.textPrimary,
        defaultBorderColor: t.color.borderDefault,
        defaultHoverBg: t.color.bgHover,
        defaultHoverColor: t.color.textPrimary,
        defaultHoverBorderColor: t.color.borderDefault,
        defaultActiveBg: t.color.bgActive,
        defaultActiveColor: t.color.textPrimary,
        defaultActiveBorderColor: t.color.borderDefault,

        primaryShadow: 'none',
        dangerShadow: 'none',
        defaultShadow: 'none',
      },
    },
  };
}

export const lightTheme = buildTheme(lightTokens, 'light');
export const darkTheme = buildTheme(darkTokens, 'dark');
