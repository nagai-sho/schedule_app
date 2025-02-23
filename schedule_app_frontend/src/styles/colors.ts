const palette = {
  white: '#f8fbf8',
  black: '#101010',
  silver: '#c0c0c0',
  emerald: '#00a09b',
  evergreen: '#007b43',
  vividgreen: '#00ff00',
  darkgreen: '#006400',
  bottlegreen: '#004d25',
  cobaltgreen: '#3cb37a',
  limegreen: '#32cd32',
  yellowgreen: '#9acd32',
};

const colorCodes = {
  text: {
    default: palette.black,
    reverse: palette.white,
    emphasis: palette.yellowgreen,
  },
  background: {
    default: palette.emerald,
    reverse: palette.white,
  },
  border: {
    default: palette.silver,
  },
};

export default colorCodes;
