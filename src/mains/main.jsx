import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Nav from './Nav.jsx';
import Apropos from './Apropos.jsx';
import Contact from './Contact.jsx';
import Events from './Events.jsx';
import Join from './Join.jsx';
import Projects from './Projetcs.jsx';
import Footer from './Footer.jsx';


createRoot(document.getElementById('root')).render(

  <BrowserRouter basename="/React-app">
  <Nav/>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/Apropos" element={<Apropos />} />
    <Route path="/Events" element={<Events />} />
    <Route path="/Projetcs" element={<Projects />} /> 
    <Route path="/Contact" element={<Contact />} />
    <Route path="/Join" element={<Join />} />
  </Routes>
  <Footer/>
</BrowserRouter>
);


