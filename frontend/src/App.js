import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import HowWeHelp from './pages/HowWeHelp';
import Impact from './pages/Impact';
import FileComplaint from './pages/FileComplaint';
import Orphanages from './pages/Orphanages';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-we-help" element={<HowWeHelp />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/file-complaint" element={<FileComplaint />} />
          <Route path="/orphanages" element={<Orphanages />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
