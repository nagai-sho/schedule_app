import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

// import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Assets } from './components/Assets';
import { Calender } from './components/Calender';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="assets/:id" element={<Assets />} />
        <Route path="Calender/:id" element={<Calender />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
