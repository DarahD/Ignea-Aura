import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BioPage from './pages/BioPage';
import CollectionPage from './pages/CollectionPage';
import SustainabilityPage from './pages/SustainabilityPage';
import ExperiencesPage from './pages/ExperiencesPage';
import ContactPage from './pages/ContactPage';
import NewsletterModal from './components/NewsletterModal';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-black">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/bio" element={<BioPage />} />
            <Route path="/collection" element={<CollectionPage />} />
            <Route path="/sustainability" element={<SustainabilityPage />} />
            <Route path="/experiences" element={<ExperiencesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>
        <Footer />
        <NewsletterModal />
      </div>
    </Router>
  );
}

export default App;