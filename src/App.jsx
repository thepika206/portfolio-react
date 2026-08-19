/* eslint-disable react/prop-types */

import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import NavBar from './components/NavBar';

function HashScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      return;
    }

    const elementId = location.hash.replace('#', '');
    const target = document.getElementById(elementId);

    if (target) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <>
      <a className='skip-link' href='#main-content'>
        Skip to main content
      </a>
      <NavBar />
      <HashScrollToSection />
      <main id='main-content' className='d-flex flex-column  align-items-center'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Navigate to='/' replace />} />
          <Route path='/projects/:projectId' element={<Navigate to='/' replace />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
