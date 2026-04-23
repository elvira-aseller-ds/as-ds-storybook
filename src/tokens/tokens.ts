// MDX shim — rebuilds legacy token shape from aseller-tokens.ts so that
// Foundations-*.mdx pages show real Figma values (light theme).
// Source of truth: aseller-tokens.ts (Figma ASeller-DS-v0.1.0).

import {
  lightTokens,
  darkTokens,
  primitives,
  fontSize,
  lineHeight,
  fontFamily,
  fontWeight,
  letterSpacing,
  textStyles,
} from './aseller-tokens';

export type ColorToken = {
  name: string;
  value: string;
  dark?: string;
};

export type NumericToken = {
  name: string;
  value: number;
};

export type StringToken = {
  name: string;
  value: string;
};

export type TypographyToken = {
  name: string;
  fontFamily?: string;
  fontSize?: number;
  lineHeight?: number;
  fontWeight?: number | string;
  letterSpacing?: number | string;
  value?: string;
};

const L = lightTokens.color;
const D = darkTokens.color;

// ---------------------------------------------------------------------------
// Colors — grouped as in Figma 35:3020 (Semantic) + used primitives (32:3074)
// ---------------------------------------------------------------------------

export const colors = {
  action: [
    { name: '--color-action-primary', value: L.actionPrimary, dark: D.actionPrimary },
    { name: '--color-action-primary-hover', value: L.actionPrimaryHover, dark: D.actionPrimaryHover },
    { name: '--color-action-primary-active', value: L.actionPrimaryActive, dark: D.actionPrimaryActive },
    { name: '--color-action-on-primary', value: L.actionOnPrimary, dark: D.actionOnPrimary },
  ] as ColorToken[],

  text: [
    { name: '--color-text-primary', value: L.textPrimary, dark: D.textPrimary },
    { name: '--color-text-secondary', value: L.textSecondary, dark: D.textSecondary },
    { name: '--color-text-disabled', value: L.textDisabled, dark: D.textDisabled },
    { name: '--color-text-heading', value: L.textHeading, dark: D.textHeading },
    { name: '--color-text-inverse', value: L.textInverse, dark: D.textInverse },
    { name: '--color-text-link', value: L.textLink, dark: D.textLink },
  ] as ColorToken[],

  icon: [
    { name: '--color-icon-default', value: L.iconDefault, dark: D.iconDefault },
    { name: '--color-icon-active', value: L.iconActive, dark: D.iconActive },
    { name: '--color-icon-disabled', value: L.iconDisabled, dark: D.iconDisabled },
  ] as ColorToken[],

  background: [
    { name: '--color-bg-page', value: L.bgPage, dark: D.bgPage },
    { name: '--color-bg-surface', value: L.bgSurface, dark: D.bgSurface },
    { name: '--color-bg-elevated', value: L.bgElevated, dark: D.bgElevated },
    { name: '--color-bg-hover', value: L.bgHover, dark: D.bgHover },
    { name: '--color-bg-active', value: L.bgActive, dark: D.bgActive },
    { name: '--color-bg-selected', value: L.bgSelected, dark: D.bgSelected },
    { name: '--color-bg-selected-hover', value: L.bgSelectedHover, dark: D.bgSelectedHover },
    { name: '--color-bg-backdrop', value: L.bgBackdrop, dark: D.bgBackdrop },
    { name: '--color-bg-disabled', value: L.bgDisabled, dark: D.bgDisabled },
    { name: '--color-bg-subtle', value: L.bgSubtle, dark: D.bgSubtle },
  ] as ColorToken[],

  border: [
    { name: '--color-border-default', value: L.borderDefault, dark: D.borderDefault },
    { name: '--color-border-subtle', value: L.borderSubtle, dark: D.borderSubtle },
    { name: '--color-border-strong', value: L.borderStrong, dark: D.borderStrong },
    { name: '--color-border-focus', value: L.borderFocus, dark: D.borderFocus },
    { name: '--color-border-brand', value: L.borderBrand, dark: D.borderBrand },
  ] as ColorToken[],

  status: [
    { name: '--color-status-success', value: L.statusSuccess, dark: D.statusSuccess },
    { name: '--color-status-success-bg', value: L.statusSuccessBg, dark: D.statusSuccessBg },
    { name: '--color-status-warning', value: L.statusWarning, dark: D.statusWarning },
    { name: '--color-status-warning-bg', value: L.statusWarningBg, dark: D.statusWarningBg },
    { name: '--color-status-error', value: L.statusError, dark: D.statusError },
    { name: '--color-status-error-bg', value: L.statusErrorBg, dark: D.statusErrorBg },
    { name: '--color-status-error-border', value: L.statusErrorBorder, dark: D.statusErrorBorder },
  ] as ColorToken[],

  // Primitives: only scales actually referenced by semantic tokens above.
  primitivesGrey: [
    { name: 'grey-50', value: primitives.grey[50] },
    { name: 'grey-100', value: primitives.grey[100] },
    { name: 'grey-200', value: primitives.grey[200] },
    { name: 'grey-300', value: primitives.grey[300] },
    { name: 'grey-400', value: primitives.grey[400] },
    { name: 'grey-500', value: primitives.grey[500] },
    { name: 'grey-600', value: primitives.grey[600] },
    { name: 'grey-700', value: primitives.grey[700] },
    { name: 'grey-800', value: primitives.grey[800] },
    { name: 'grey-900', value: primitives.grey[900] },
    { name: 'grey-950', value: primitives.grey[950] },
    { name: 'ink', value: primitives.grey.ink },
  ] as ColorToken[],

  primitivesBlue: [
    { name: 'blue-100', value: primitives.blue[100] },
    { name: 'blue-200', value: primitives.blue[200] },
    { name: 'blue-300', value: primitives.blue[300] },
    { name: 'blue-400', value: primitives.blue[400] },
    { name: 'blue-500', value: primitives.blue[500] },
    { name: 'blue-600', value: primitives.blue[600] },
    { name: 'blue-700', value: primitives.blue[700] },
    { name: 'blue-dark-100', value: primitives.blue.dark100 },
    { name: 'blue-dark-200', value: primitives.blue.dark200 },
  ] as ColorToken[],

  primitivesStatus: [
    { name: 'red-100', value: primitives.red[100] },
    { name: 'red-200', value: primitives.red[200] },
    { name: 'red-300', value: primitives.red[300] },
    { name: 'red-dark-100', value: primitives.red.dark100 },
    { name: 'green-100', value: primitives.green[100] },
    { name: 'green-500', value: primitives.green[500] },
    { name: 'green-dark-100', value: primitives.green.dark100 },
    { name: 'yellow-100', value: primitives.yellow[100] },
    { name: 'yellow-500', value: primitives.yellow[500] },
    { name: 'yellow-dark-100', value: primitives.yellow.dark100 },
  ] as ColorToken[],

  primitivesAlpha: [
    { name: 'ink/06', value: primitives.alpha.ink06 },
    { name: 'ink/15', value: primitives.alpha.ink15 },
    { name: 'ink/25', value: primitives.alpha.ink25 },
    { name: 'ink/45', value: primitives.alpha.ink45 },
    { name: 'ink/65', value: primitives.alpha.ink65 },
    { name: 'white/12', value: primitives.alpha.white12 },
    { name: 'white/18', value: primitives.alpha.white18 },
    { name: 'white/25', value: primitives.alpha.white25 },
    { name: 'white/65', value: primitives.alpha.white65 },
  ] as ColorToken[],
};

// ---------------------------------------------------------------------------
// Scale tokens
// ---------------------------------------------------------------------------

export const spacing: NumericToken[] = [
  { name: '--space-xxs', value: lightTokens.space.xxs },
  { name: '--space-xs', value: lightTokens.space.xs },
  { name: '--space-sm', value: lightTokens.space.sm },
  { name: '--space-md', value: lightTokens.space.md },
  { name: '--space-lg', value: lightTokens.space.lg },
  { name: '--space-xl', value: lightTokens.space.xl },
  { name: '--space-2xl', value: lightTokens.space['2xl'] },
];

export const radius: NumericToken[] = [
  { name: '--radius-interactive', value: lightTokens.radius.interactive },
  { name: '--radius-surface', value: lightTokens.radius.surface },
  { name: '--radius-card', value: lightTokens.radius.card },
];

export const size: NumericToken[] = [
  { name: 'control-sm (height)', value: primitives.size.controlSM },
  { name: 'control-md (height)', value: primitives.size.controlMD },
  { name: 'control-lg (height)', value: primitives.size.controlLG },
];

// ---------------------------------------------------------------------------
// Typography — Figma 35:4619
// ---------------------------------------------------------------------------

const family = fontFamily.base;

export const font: TypographyToken[] = [
  // Composite text styles first — primary consumption surface
  ...Object.entries(textStyles).map(([name, s]) => ({
    name: `text-${name}`,
    fontFamily: s.fontFamily,
    fontSize: s.fontSize,
    lineHeight: s.lineHeight,
    fontWeight: s.fontWeight,
    letterSpacing: s.letterSpacing,
  })),
  // Base primitives
  { name: 'font-family-base', value: family, fontFamily: family },
  { name: 'font-family-code', value: fontFamily.code, fontFamily: fontFamily.code },
  { name: 'font-weight-regular', fontWeight: fontWeight.regular },
  { name: 'font-weight-medium', fontWeight: fontWeight.medium },
  { name: 'letter-spacing-default', value: letterSpacing.default },
];

export const fontSizes: NumericToken[] = [
  { name: '--font-size-xs', value: fontSize.xs },
  { name: '--font-size-sm', value: fontSize.sm },
  { name: '--font-size-md', value: fontSize.md },
  { name: '--font-size-lg', value: fontSize.lg },
  { name: '--font-size-xl', value: fontSize.xl },
  { name: '--font-size-2xl', value: fontSize['2xl'] },
  { name: '--font-size-3xl', value: fontSize['3xl'] },
  { name: '--font-size-4xl', value: fontSize['4xl'] },
  { name: '--font-size-5xl', value: fontSize['5xl'] },
];

export const lineHeights: NumericToken[] = [
  { name: '--line-height-xs', value: lineHeight.xs },
  { name: '--line-height-sm', value: lineHeight.sm },
  { name: '--line-height-md', value: lineHeight.md },
  { name: '--line-height-lg', value: lineHeight.lg },
  { name: '--line-height-xl', value: lineHeight.xl },
  { name: '--line-height-2xl', value: lineHeight['2xl'] },
];

// ---------------------------------------------------------------------------
// Misc
// ---------------------------------------------------------------------------

export const opacity: StringToken[] = [
  { name: 'opacity-text-strong', value: '100%' },
  { name: 'opacity-text-secondary', value: '65%' },
  { name: 'opacity-text-disabled', value: '25%' },
  { name: 'opacity-bg-hover', value: '6%' },
  { name: 'opacity-bg-active', value: '15%' },
  { name: 'opacity-backdrop', value: '45%' },
];

export const shadow: StringToken[] = [
  // ASeller DS doesn't ship explicit elevation tokens yet — kept empty
  // until Figma 01_FOUNDATIONS defines them. AntDesign defaults apply.
];

export const border: StringToken[] = [
  { name: 'border-width-default', value: '1px' },
];

export const zIndex: NumericToken[] = [];
