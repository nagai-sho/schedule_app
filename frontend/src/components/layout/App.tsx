// ルーティング＆全体レイアウト
import { useLocation } from 'react-router-dom';
import AppRoutes from '../../routes/AppRoutes';
import Header from './Header';
import Footer from './Footer';
import { GlobalStyles } from '@mui/system';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../../theme/theme';
import { Box } from '@mui/material';
import '../../styles/top.css';
import { useEffect, useState } from 'react';
// import { Container } from '@mui/material'; // responsiveデザイン用

const App = ({ children }: { children: React.ReactNode }) => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.getElementById('header');
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };
    updateHeaderHeight(); // 初回実行
    window.addEventListener('resize', updateHeaderHeight); // 画面サイズ変更時に再取得
    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  const location = useLocation();
  const backgroundImages: Record<string, string> = {
    '/': '/images/Second_factory_appearance.jpg',
    '/assets': '/images/Second_factory_appearance.jpg',
    '/vehicles': '/images/Second_factory_appearance.jpg',
    '/mypage': '/images/Second_factory_appearance.jpg',
  };

  return (
    <>
      <GlobalStyles
        styles={{
          '*': {
            margin: 0,
            padding: 0,
            baxSizing: 'border-box',
          },
          'html, body, #root': {
            margin: 0,
            padding: 0,
            height: 'auto',
            minHeight: '100%',
            width: '100%',
          },
        }}
      />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            width: '100%',
            minHeight: '100%',
            backgroundImage: `url(${
              backgroundImages[location.pathname] ||
              '/images/Second_factory_appearance.jpg'
            })`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        >
          <Header />
          <Box sx={{ paddingTop: `${headerHeight}px` }}>{children}</Box>
          <AppRoutes />
          <Footer />
        </Box>
      </ThemeProvider>
    </>
  );
};

export default App;
