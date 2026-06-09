import type { ThemeVars } from '../core/theme';

export const illustrationDimensions = {
  heroSquare: ['240x240', '200x200'],
  spotRectangle: ['240x120'],
  spotSquare: ['96x96'],
  spotIcon: ['32x32', '24x24'],
  pictogram: ['48x48', '64x64'],
} as const;

export const illustrationDimensionDefaults = {
  all: '48x48',
  heroSquare: '240x240',
  pictogram: '48x48',
  spotSquare: '96x96',
  spotIcon: '32x32',
  spotRectangle: '240x120',
} as const;

/** [width, height] tuples for allowed dimensions */
export const illustrationSizes = {
  '24x24': [24, 24],
  '32x32': [32, 32],
  '48x48': [48, 48],
  '64x64': [64, 64],
  '96x96': [96, 96],
  '120x120': [120, 120],
  '200x200': [200, 200],
  '240x120': [240, 120],
  '240x240': [240, 240],
} as const;

/**
 * Canonical fallback values for the light illustration color palette. Used by ThemeProvider to
 * fill in any tokens a consumer's custom theme omits, so every theme exposes a complete palette
 * at runtime. This guarantees illustrations always render even when the consumer's theme predates
 * a newly added illustration color token.
 */
export const defaultLightIllustrationColor: {
  [key in ThemeVars.IllustrationColor]: string;
} = {
  primary: 'rgb(0, 82, 255)',
  black: 'rgb(10, 11, 13)',
  white: 'rgb(255, 255, 255)',
  gray: 'rgb(206, 210, 219)',
  gray2: 'rgb(10, 11, 15)',
  gray3: 'rgb(206, 210, 220)',
  positive: 'rgb(60, 194, 138)',
  negative: 'rgb(225, 57, 71)',
  accent1: 'rgb(255, 210, 0)',
  accent2: 'rgb(93, 226, 248)',
  accent3: 'rgb(237, 112, 47)',
  accent4: 'rgb(115, 162, 255)',
  invert: 'rgb(10, 11, 14)',
  invert2: 'rgb(255, 255, 254)',
  dotPrimary: 'rgb(0, 82, 254)',
  dotSecondary: 'rgb(176, 202, 255)',
  dotTertiary: 'rgb(200, 203, 210)',
};

/**
 * Canonical fallback values for the dark illustration color palette. See
 * {@link defaultLightIllustrationColor} for usage details.
 */
export const defaultDarkIllustrationColor: {
  [key in ThemeVars.IllustrationColor]: string;
} = {
  primary: 'rgb(87, 139, 250)',
  black: 'rgb(10, 11, 13)',
  white: 'rgb(255, 255, 255)',
  gray: 'rgb(70, 75, 85)',
  gray2: 'rgb(70, 75, 85)',
  gray3: 'rgb(255, 255, 255)',
  positive: 'rgb(68, 194, 141)',
  negative: 'rgb(240, 97, 109)',
  accent1: 'rgb(236, 208, 105)',
  accent2: 'rgb(69, 217, 245)',
  accent3: 'rgb(240, 120, 54)',
  accent4: 'rgb(132, 170, 253)',
  invert: 'rgb(255, 255, 255)',
  invert2: 'rgb(114, 120, 134)',
  dotPrimary: 'rgb(0, 82, 254)',
  dotSecondary: 'rgb(176, 202, 255)',
  dotTertiary: 'rgb(255, 255, 255)',
};
