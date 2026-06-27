import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutUsPage from './pages/AboutUsPage.jsx';
import OurProgramsPage from './pages/OurProgramsPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import HowToHelpPage from './pages/HowToHelpPage.jsx';
import ContactUsPage from './pages/ContactUsPage.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/programs" element={<OurProgramsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/help" element={<HowToHelpPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;