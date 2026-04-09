export type ColorToken = {
  name: string;
  value: string;
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

// VERIFIED foundation tokens extracted from Figma source of truth:
// 01_primitives / light.tokens.json

export const colors = {
  neutrals: [
    { name: "colorTextBase", value: "#001029" },
    { name: "colorBgBase", value: "#FFFFFF" },
    { name: "colorText", value: "rgba(0,0,0,0.88)" },
    { name: "colorWhite", value: "rgba(255,255,255,1)" },
    { name: "colorBlack", value: "rgba(0,0,0,0.88)" },
    { name: "colorTextSecondary", value: "rgba(0,0,0,0.65)" },
    { name: "colorTextTertiary", value: "rgba(0,0,0,0.45)" },
    { name: "colorTextQuaternary", value: "rgba(0,0,0,0.25)" },
    { name: "colorBgContainer", value: "#FFFFFF" },
    { name: "colorBgElevated", value: "#FFFFFF" },
    { name: "colorBgLayout", value: "#F8F8F8" },
    { name: "colorBgSpotlight", value: "#F5F5F5" },
    { name: "colorBorder", value: "#D9D9D9" },
    { name: "colorBorderSecondary", value: "#F0F0F0" },
    { name: "colorBorderSubtle", value: "#999999" },
    { name: "colorBorderDefault", value: "#737373" },
    { name: "colorBorderStrong", value: "#4D4D4D" },
    { name: "colorBorderDisabled", value: "#BFBFBF" },
    { name: "colorBgHover", value: "#EBEBEB" },
    { name: "colorBgActive", value: "#E0E0E0" },
    { name: "colorBgSelected", value: "#E6F4FF" },
    { name: "colorFocusRing", value: "#1677FF" },
    { name: "colorDividerSubtle", value: "#E6E6E6" },
    { name: "color.surface.primary", value: "#FFFFFF" },
    { name: "color.surface.secondary", value: "#F5F5F5" },
    { name: "color.text.primary", value: "#001029" },
    { name: "color.text.secondary", value: "rgba(0,16,41,0.65)" },
    { name: "color.text.disabled", value: "rgba(0,16,41,0.25)" },
    { name: "color.border.subtle", value: "#F0F0F0" },
    { name: "color.border.default", value: "#D9D9D9" },
    { name: "color.grid.header.bg", value: "#FFFFFF" },
    { name: "color.grid.row.hover", value: "#F5F5F5" },
    { name: "color.grid.text", value: "#001029" },
  ] as ColorToken[],

  featureTag: [] as ColorToken[],

  featureTiles: [] as ColorToken[],

  brand: [
    { name: "colorPrimary", value: "#1677FF" },
    { name: "colorPrimaryHover", value: "#4096FF" },
    { name: "colorPrimaryActive", value: "#0958D9" },
    { name: "colorPrimaryBg", value: "#E6F4FF" },
    { name: "colorPrimaryBgHover", value: "#BAE0FF" },
    { name: "colorPrimaryBorder", value: "#91CAFF" },
    { name: "colorPrimaryBorderHover", value: "#69B1FF" },
    { name: "colorPrimaryText", value: "#1677FF" },
    { name: "colorPrimaryTextHover", value: "#4096FF" },
    { name: "colorPrimaryTextActive", value: "#0958D9" },
    { name: "color.status.info", value: "#007BFF" },
  ] as ColorToken[],

  success: [
    { name: "colorSuccess", value: "#00B746" },
    { name: "colorSuccessHover", value: "#43D170" },
    { name: "colorSuccessActive", value: "#00913D" },
    { name: "colorSuccessBg", value: "#DFF7E4" },
    { name: "colorSuccessBgHover", value: "#96EBAB" },
    { name: "colorSuccessBorder", value: "#6ADE8B" },
    { name: "colorSuccessText", value: "#00B746" },
    { name: "colorSuccessTextHover", value: "#1FC459" },
    { name: "colorSuccessTextActive", value: "#00913D" },
    { name: "colorSuccessBorderHover", value: "#43D170" },
    { name: "color.status.success", value: "#00B746" },
  ] as ColorToken[],

  warning: [
    { name: "colorWarning", value: "#F3AF00" },
    { name: "colorWarningHover", value: "#FFD952" },
    { name: "colorWarningActive", value: "#CC8B00" },
    { name: "colorWarningBg", value: "#FFFBE6" },
    { name: "colorWarningBgHover", value: "#FFF1A3" },
    { name: "colorWarningBorder", value: "#FFE77A" },
    { name: "colorWarningBorderHover", value: "#FFD952" },
    { name: "colorWarningText", value: "#F3AF00" },
    { name: "colorWarningTextHover", value: "#FFC929" },
    { name: "colorWarningTextActive", value: "#CC8B00" },
    { name: "color.status.warning", value: "#F3AF00" },
  ] as ColorToken[],

  danger: [
    { name: "colorError", value: "#DD0404" },
    { name: "colorErrorHover", value: "#EB312A" },
    { name: "colorErrorActive", value: "#B80006" },
    { name: "colorErrorBg", value: "#FFEAE6" },
    { name: "colorErrorBgHover", value: "#FFB4A8" },
    { name: "colorErrorBorder", value: "#FF8C80" },
    { name: "colorErrorBorderHover", value: "#F75F54" },
    { name: "colorErrorText", value: "#DD0404" },
    { name: "colorErrorTextHover", value: "#EB312A" },
    { name: "colorErrorTextActive", value: "#B80006" },
    { name: "color.status.error", value: "#DD0404" },
  ] as ColorToken[],

  accent: [] as ColorToken[],

  alpha: [
    { name: "alpha-text-88", value: "rgba(0,0,0,0.88)" },
    { name: "alpha-text-65", value: "rgba(0,0,0,0.65)" },
    { name: "alpha-text-45", value: "rgba(0,0,0,0.45)" },
    { name: "alpha-text-25", value: "rgba(0,0,0,0.25)" },
  ] as ColorToken[],
};

export const radius = [
  { name: "radius-sm", value: 4 },
  { name: "radius-md", value: 8 },
  { name: "radius-lg", value: 12 },
] as NumericToken[];

export const size = [
  { name: "size-base-height", value: 40 },
  { name: "size-base-paddingX", value: 12 },
  { name: "size-base-paddingY", value: 8 },
  { name: "size-base-fontSize", value: 14 },
  { name: "size-base-lineHeight", value: 20 },
  { name: "size-base-iconSize", value: 16 },
  { name: "size-base-minHitArea", value: 32 },
  { name: "size-base-radius", value: 16 },
  { name: "size-sm-height", value: 32 },
  { name: "size-sm-paddingX", value: 8 },
  { name: "size-sm-paddingY", value: 6 },
  { name: "size-sm-fontSize", value: 13 },
  { name: "size-sm-lineHeight", value: 18 },
  { name: "size-sm-iconSize", value: 14 },
  { name: "size-sm-minHitArea", value: 32 },
  { name: "size-sm-radius", value: 16 },
] as NumericToken[];

export const spacing = [
  { name: "spacing-4", value: 4 },
  { name: "spacing-8", value: 8 },
  { name: "spacing-16", value: 16 },
  { name: "spacing-24", value: 24 },
  { name: "spacing-32", value: 32 },
  { name: "spacing-48", value: 48 },
  { name: "spacing-64", value: 64 },
] as NumericToken[];

export const opacity = [
  { name: "opacity-88", value: "88%" },
  { name: "opacity-65", value: "65%" },
  { name: "opacity-45", value: "45%" },
  { name: "opacity-25", value: "25%" },
] as StringToken[];

export const border = [
  { name: "border-width-1", value: "1px" },
  { name: "border-width-2", value: "2px" },
] as StringToken[];

export const font = [
  { name: "fontFamily", value: "Rubik" },
  { name: "letterSpacing", value: "0.13px" },
  { name: "fontSizeHeading1", fontFamily: "Rubik", fontSize: 38, lineHeight: 38, fontWeight: 500, letterSpacing: "0.13px" },
  { name: "fontSizeHeading2", fontFamily: "Rubik", fontSize: 30, lineHeight: 30, fontWeight: 500, letterSpacing: "0.13px" },
  { name: "fontSizeHeading3", fontFamily: "Rubik", fontSize: 24, lineHeight: 24, fontWeight: 500, letterSpacing: "0.13px" },
  { name: "fontSizeHeading4", fontFamily: "Rubik", fontSize: 18, lineHeight: 20, fontWeight: 500, letterSpacing: "0.13px" },
  { name: "fontSizeHeading5", fontFamily: "Rubik", fontSize: 16, lineHeight: 24, fontWeight: 500, letterSpacing: "0.13px" },
  { name: "fontSizeLG", fontFamily: "Rubik", fontSize: 16, lineHeight: 19, fontWeight: 400, letterSpacing: "0.13px" },
  { name: "fontSizeM", fontFamily: "Rubik", fontSize: 14, lineHeight: 19, fontWeight: 400, letterSpacing: "0.13px" },
  { name: "fontSizeMStrong", fontFamily: "Rubik", fontSize: 14, lineHeight: 19, fontWeight: 500, letterSpacing: "0.13px" },
  { name: "fontSizeSM", fontFamily: "Rubik", fontSize: 13, lineHeight: 16, fontWeight: 400, letterSpacing: "0.13px" },
  { name: "fontSizeSMStrong", fontFamily: "Rubik", fontSize: 13, lineHeight: 13, fontWeight: 500, letterSpacing: "0.13px" },
  { name: "fontSizeS", fontFamily: "Rubik", fontSize: 12, lineHeight: 16, fontWeight: 400, letterSpacing: "0.13px" },
  { name: "fontSizeSStrong", fontFamily: "Rubik", fontSize: 12, lineHeight: 19, fontWeight: 500, letterSpacing: "0.13px" },
  { name: "font.weight.regular", fontWeight: 400 },
  { name: "font.weight.medium", fontWeight: 500 },
  { name: "font.weight.bold", fontWeight: 600 },
] as TypographyToken[];

export const shadow = [
  { name: "elevation-sm", value: "0 1px 2px rgba(0,0,0,0.03), 0 1px 6px -1px rgba(0,0,0,0.02), 0 2px 4px rgba(0,0,0,0.02)" },
  { name: "elevation-md", value: "0 6px 16px rgba(0,0,0,0.08), 0 3px 6px -4px rgba(0,0,0,0.12), 0 9px 28px 8px rgba(0,0,0,0.05)" },
  { name: "elevation-lg", value: "0 12px 48px 16px rgba(0,0,0,0.08), 0 9px 28px rgba(0,0,0,0.05), 0 6px 16px -8px rgba(0,0,0,0.08)" },
] as StringToken[];

export const zIndex = [] as NumericToken[];
