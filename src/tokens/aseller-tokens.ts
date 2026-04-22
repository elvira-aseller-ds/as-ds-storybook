// Semantic tokens extracted from Figma Token Reference frames
// Source: ASeller-DS-v0.1.0, file VMTYDDrmUYtsva4gGPVEcg
//   02 Semantic (35:3020) — resolved hex for light/dark
//   01 Primitives (32:3074) — physical scales referenced below

export type ThemeTokens = {
  color: {
    // Action
    actionPrimary: string;
    actionPrimaryHover: string;
    actionPrimaryActive: string;
    actionOnPrimary: string;

    // Text
    textPrimary: string;
    textSecondary: string;
    textDisabled: string;
    textHeading: string;
    textInverse: string;
    textLink: string;

    // Icon
    iconDefault: string;
    iconActive: string;
    iconDisabled: string;

    // Background
    bgPage: string;
    bgSurface: string;
    bgElevated: string;
    bgHover: string;
    bgActive: string;
    bgSelected: string;
    bgSelectedHover: string;
    bgBackdrop: string;
    bgDisabled: string;
    bgSubtle: string;

    // Border
    borderDefault: string;
    borderSubtle: string;
    borderStrong: string;
    borderFocus: string;
    borderBrand: string;

    // Status
    statusSuccess: string;
    statusSuccessBg: string;
    statusWarning: string;
    statusWarningBg: string;
    statusError: string;
    statusErrorBg: string;
    statusErrorBorder: string;
  };
  space: {
    xxs: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    '2xl': number;
  };
  radius: {
    interactive: number;
    surface: number;
    card: number;
  };
};

export const lightTokens: ThemeTokens = {
  color: {
    actionPrimary: '#007BFF',
    actionPrimaryHover: '#2997FF',
    actionPrimaryActive: '#0062D9',
    actionOnPrimary: '#FFFFFF',

    textPrimary: '#001029',
    textSecondary: 'rgba(0, 16, 41, 0.65)',
    textDisabled: 'rgba(0, 16, 41, 0.25)',
    textHeading: '#001029',
    textInverse: '#FFFFFF',
    textLink: '#007BFF',

    iconDefault: '#001029',
    iconActive: '#007BFF',
    iconDisabled: 'rgba(0, 16, 41, 0.25)',

    bgPage: '#F3F4F6',
    bgSurface: '#FFFFFF',
    bgElevated: '#FFFFFF',
    bgHover: 'rgba(0, 16, 41, 0.06)',
    bgActive: 'rgba(0, 16, 41, 0.15)',
    bgSelected: '#E6F6FF',
    bgSelectedHover: '#A3DCFF',
    bgBackdrop: 'rgba(0, 16, 41, 0.45)',
    bgDisabled: '#F1F1F1',
    bgSubtle: '#F9FAFB',

    borderDefault: '#D9D9D9',
    borderSubtle: '#F1F1F1',
    borderStrong: '#C7CDD4',
    borderFocus: '#007BFF',
    borderBrand: '#7AC8FF',

    statusSuccess: '#00B746',
    statusSuccessBg: '#DFF7E4',
    statusWarning: '#F3AF00',
    statusWarningBg: '#FFFCE6',
    statusError: '#DD0404',
    statusErrorBg: '#FFF2F0',
    statusErrorBorder: '#FF8C80',
  },
  space: { xxs: 3, xs: 5, sm: 10, md: 15, lg: 20, xl: 30, '2xl': 40 },
  radius: { interactive: 4, surface: 8, card: 16 },
};

export const darkTokens: ThemeTokens = {
  color: {
    actionPrimary: '#4CA1DE',
    actionPrimaryHover: '#2997FF',
    actionPrimaryActive: '#7AC8FF',
    actionOnPrimary: '#FFFFFF',

    textPrimary: '#FFFFFF',
    textSecondary: 'rgba(255, 255, 255, 0.65)',
    textDisabled: 'rgba(255, 255, 255, 0.25)',
    textHeading: '#FFFFFF',
    textInverse: '#001029',
    textLink: '#4CA1DE',

    iconDefault: '#FFFFFF',
    iconActive: '#4CA1DE',
    iconDisabled: 'rgba(255, 255, 255, 0.25)',

    bgPage: '#2B2B34',
    bgSurface: '#2B2B34',
    bgElevated: '#1F1F1F',
    bgHover: 'rgba(255, 255, 255, 0.12)',
    bgActive: 'rgba(255, 255, 255, 0.18)',
    bgSelected: '#253E51',
    bgSelectedHover: '#387097',
    bgBackdrop: 'rgba(0, 16, 41, 0.45)',
    bgDisabled: '#303030',
    bgSubtle: '#111827',

    borderDefault: '#424242',
    borderSubtle: '#303030',
    borderStrong: '#4B5563',
    borderFocus: '#4CA1DE',
    borderBrand: '#0062D9',

    statusSuccess: '#00B746',
    statusSuccessBg: '#112118',
    statusWarning: '#F3AF00',
    statusWarningBg: '#2A2111',
    statusError: '#DD0404',
    statusErrorBg: '#2C1618',
    statusErrorBorder: '#FF8C80',
  },
  space: { xxs: 3, xs: 5, sm: 10, md: 15, lg: 20, xl: 30, '2xl': 40 },
  radius: { interactive: 4, surface: 8, card: 16 },
};
