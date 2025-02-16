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
// import { Container } from '@mui/material'; // responsiveデザイン用

const App: React.FC = () => {
  const location = useLocation();
  const backgroundImages: Record<string, string> = {
    '/': '/images/Second_factory_appearance.jpg',
    '/assets': '/images/Second_factory_appearance.jpg',
    '/vehicles': '/images/Second_factory_appearance.jpg',
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
          <AppRoutes />
          <Footer />
        </Box>
      </ThemeProvider>
    </>
  );
};

export default App;
