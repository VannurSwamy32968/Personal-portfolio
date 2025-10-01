import React from 'react';
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import ModernNavbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Footer from './Footer';
import Education from './pages/Education';

export default function App() {
  return (
   <>
   <BrowserRouter>

      <ModernNavbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/contact" element={<Contact/>}/>
         <Route path="/education" element={<Education/>}/>
      </Routes>
      <Footer/>
  
   </BrowserRouter>
   </>
  );
}
