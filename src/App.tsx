import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Management from './pages/Management';
import Compliance from './pages/Compliance';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Policies from './pages/Policies';
import Careers from './pages/Careers';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/management" element={<Management />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </main>
        <Footer />
        <AdminPanel />
      </div>
    </Router>
  );
}

export default App;