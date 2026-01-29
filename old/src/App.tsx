import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ChiSiamoPage from './pages/ChiSiamoPage';
import StatutoPage from './pages/StatutoPage';
import TrasparenzaPage from './pages/TrasparenzaPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="chi-siamo" element={<ChiSiamoPage />} />
          <Route path="statuto" element={<StatutoPage />} />
          <Route path="trasparenza" element={<TrasparenzaPage />} />
          <Route path="privacy" element={<PrivacyPolicyPage />} />
          <Route path="cookies" element={<CookiePolicyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
