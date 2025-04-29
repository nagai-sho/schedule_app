const palette = {
  white: '#FFFFFF',
  mistWhite: '#F9FAFB',
  extraLightGray: '#F3F4F6',
  lightGray: '#E5E7EB',
  silver: '#C0C0C0',
  darkGray: '#6B7280',
  black: '#111827',

  cobaltBlue: '#2563EB',
  deepCobaltBlue: '#1D4ED8',

  freshGreen: '#22C55E',
  evergreen: '#007B43',
  yellowgreen: '#9acd32',

  sunsetOrange: '#F59E0B',
  tomatoRed: '#EF4444',
};

const colorCodes = {
  background: {
    default: palette.extraLightGray,
    inverse: palette.black,
    secondary: palette.silver,
    card: palette.white,
    disabled: palette.lightGray,
  },
  text: {
    default: palette.black,
    secondary: palette.darkGray,
    tertiary: palette.silver,
    inverse: palette.white,
    emphasis: palette.yellowgreen,
    required: palette.tomatoRed,
  },
  action: {
    primary: palette.cobaltBlue,
    success: palette.freshGreen,
    warning: palette.sunsetOrange,
    error: palette.tomatoRed,
    disabled: palette.silver,
    inverse: palette.white,
  },
  hover: {
    primary: palette.black,
    secondary: palette.darkGray,
    tertiary: palette.lightGray,
    inverse: palette.white,
  },
  input: {
    default: palette.extraLightGray,
  },
  border: {
    default: palette.lightGray,
  },
};

export default colorCodes;
