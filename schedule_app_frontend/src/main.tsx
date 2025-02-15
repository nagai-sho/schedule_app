// エントリーポイント（レンダリング）
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './pages/Top.tsx';

// import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Assets } from './pages/Assets.tsx';
import { Vehicles } from './pages/Vehicles.tsx';
import { Calender } from './pages/Calender.tsx';
import { Box } from '@mui/material';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Box
          sx={{
            width: '100vw',
            height: '100vh',
            backgroundImage: 'url(/images/Second_factory_apprearance.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Route path="/" element={<App />} />
          <Route path="assets/:id" element={<Assets />} />
          <Route path="vehicles/:id" element={<Vehicles />} />
          <Route path="Calender/:id" element={<Calender />} />
        </Box>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
