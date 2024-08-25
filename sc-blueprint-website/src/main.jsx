import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/home';
import Contact from './pages/contact';
import Nonprofits from './pages/nonprofits';
import Projects from './pages/projects';
import Students from './pages/students';
import Team from './pages/team';
import TabBar from './components/tabbar'; // We'll create this component next

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <TabBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/nonprofits" element={<Nonprofits />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/students" element={<Students />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);