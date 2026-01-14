import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { PageLoadingProvider } from './context/PageLoadingContext.tsx'; // LOADING (desativado)

import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      {/* PROVIDER DE LOADING (desativado) */}
      {/*
      <PageLoadingProvider>
        <App />
      </PageLoadingProvider>
      */}
      
      {/* App renderizado normalmente */}
      <App />
    </BrowserRouter>
  </StrictMode>,
);
