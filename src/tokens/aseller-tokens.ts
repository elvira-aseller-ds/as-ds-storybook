// Semantic tokens extracted from Figma Token Reference frames
// Source: ASeller-DS-v0.1.0, file VMTYDDrmUYtsva4gGPVEcg
//   01 Primitives (32:3074) — physical scales referenced below
//   02 Semantic (35:3020) — resolved hex for light/dark
//   03 Typography (35:4619) — type scale + composite text styles

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

// Primitives referenced by semantic tokens (subset actually used).
// From Figma node 32:3074.
export const primitives = {
  grey: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#F1F1F1',
    300: '#D9D9D9',
    400: '#C7CDD4',
    500: '#9CA3AF',
    600: '#4B5563',
    700: '#424242',
    800: '#303030',
    900: '#1F1F1F',
    950: '#111827',
    ink: '#001029',
  },
  blue: {
    100: '#E6F6FF',
    200: '#A3DCFF',
    300: '#7AC8FF',
    400: '#4CA1DE',
    500: '#2997FF',
    600: '#007BFF',
    700: '#0062D9',
    dark100: '#253E51',
    dark200: '#387097',
  },
  red: {
    100: '#FFF2F0',
    200: '#FF8C80',
    300: '#DD0404',
    dark100: '#2C1618',
  },
  green: {
    100: '#DFF7E4',
    500: '#00B746',
    dark100: '#112118',
  },
  yellow: {
    100: '#FFFCE6',
    500: '#F3AF00',
    dark100: '#2A2111',
  },
  alpha: {
    ink06: 'rgba(0, 16, 41, 0.06)',
    ink15: 'rgba(0, 16, 41, 0.15)',
    ink25: 'rgba(0, 16, 41, 0.25)',
    ink45: 'rgba(0, 16, 41, 0.45)',
    ink65: 'rgba(0, 16, 41, 0.65)',
    white12: 'rgba(255, 255, 255, 0.12)',
    white18: 'rgba(255, 255, 255, 0.18)',
    white25: 'rgba(255, 255, 255, 0.25)',
    white65: 'rgba(255, 255, 255, 0.65)',
  },
  size: {
    // Control heights used by Button/Input (Figma 32:3074)
    controlSM: 22,
    controlMD: 32,
    controlLG: 40,
  },
} as const;

// Typography primitives — Figma node 35:4619
export const fontSize = {
  xs: 12,
  sm: 13,
  md: 14,
  lg: 16,
  xl: 18,
  '2xl': 20,
  '3xl': 24,
  '4xl': 30,
  '5xl': 38,
} as const;

export const lineHeight = {
  xs: 16,
  sm: 19,
  md: 22,
  lg: 30,
  xl: 36,
  '2xl': 44,
} as const;

export const fontFamily = {
  base: '"Rubik", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  code: '"Rubik", monospace',
} as const;

export const fontWeight = {
  regular: 400,
  medium: 500,
} as const;

export const letterSpacing = {
  default: '0.13px',
  zero: '0',
} as const;

// Composite text styles — Figma 35:4619
export type TextStyle = {
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
  fontWeight: number;
  letterSpacing: string;
};

export const textStyles = {
  'heading-1': {
    fontFamily: fontFamily.base,
    fontSize: fontSize['5xl'],
    lineHeight: fontSize['5xl'],
    fontWeight: fontWeight.medium,
    letterSpacing: letterSpacing.default,
  },
  'heading-2': {
    fontFamily: fontFamily.base,
    fontSize: fontSize['4xl'],
    lineHeight: fontSize['4xl'],
    fontWeight: fontWeight.medium,
    letterSpacing: letterSpacing.default,
  },
  'heading-3': {
    fontFamily: fontFamily.base,
    fontSize: fontSize['3xl'],
    lineHeight: fontSize['3xl'],
    fontWeight: fontWeight.medium,
    letterSpacing: letterSpacing.default,
  },
  'heading-4': {
    fontFamily: fontFamily.base,
    fontSize: fontSize.xl,
    lineHeight: 20,
    fontWeight: fontWeight.medium,
    letterSpacing: letterSpacing.default,
  },
  'heading-5': {
    fontFamily: fontFamily.base,
    fontSize: fontSize.lg,
    lineHeight: fontSize['3xl'],
    fontWeight: fontWeight.medium,
    letterSpacing: letterSpacing.default,
  },
  'body-lg': {
    fontFamily: fontFamily.base,
    fontSize: fontSize.lg,
    lineHeight: lineHeight.sm,
    fontWeight: fontWeight.regular,
    letterSpacing: letterSpacing.default,
  },
  'body-md': {
    fontFamily: fontFamily.base,
    fontSize: fontSize.md,
    lineHeight: lineHeight.sm,
    fontWeight: fontWeight.regular,
    letterSpacing: letterSpacing.default,
  },
  'body-md-strong': {
    fontFamily: fontFamily.base,
    fontSize: fontSize.md,
    lineHeight: lineHeight.sm,
    fontWeight: fontWeight.medium,
    letterSpacing: letterSpacing.default,
  },
  'body-sm': {
    fontFamily: fontFamily.base,
    fontSize: fontSize.sm,
    lineHeight: lineHeight.xs,
    fontWeight: fontWeight.regular,
    letterSpacing: letterSpacing.default,
  },
  'body-sm-strong': {
    fontFamily: fontFamily.base,
    fontSize: fontSize.sm,
    lineHeight: fontSize.sm,
    fontWeight: fontWeight.medium,
    letterSpacing: letterSpacing.default,
  },
  'caption-md': {
    fontFamily: fontFamily.base,
    fontSize: fontSize.xs,
    lineHeight: lineHeight.xs,
    fontWeight: fontWeight.regular,
    letterSpacing: letterSpacing.default,
  },
  'caption-md-strong': {
    fontFamily: fontFamily.base,
    fontSize: fontSize.xs,
    lineHeight: lineHeight.sm,
    fontWeight: fontWeight.medium,
    letterSpacing: letterSpacing.default,
  },
} as const satisfies Record<string, TextStyle>;

export type TextStyleName = keyof typeof textStyles;

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
