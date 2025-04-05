import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // メインカラーを設定
    },
    secondary: {
      main: '#ff4081', // サブカラーを設定
    },
    // 他のカラーパレットの設定も可能
  },
  typography: {
    fontFamily: '"Roboto", sans-serif', // フォントファミリを設定
    h1: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    // その他のtypography設定
  },
  // 必要なカスタマイズをここで追加
});

export default theme;
