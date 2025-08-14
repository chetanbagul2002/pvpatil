
import HomePage from './component/HomePage';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProjectsPage from './component/ProjectsPage';
import AboutPage from './component/AboutPage';
import ContactPage from './component/ContactPage';
import ProjectDetails from './component/ProjectDetails';

const App = () => {
  return (
    
    <BrowserRouter>
      
      <Routes>
       
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
