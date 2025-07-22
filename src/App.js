import logo from './logo.svg';
import './App.css';
import Lanyard from './components/Lanyard'
import ScrollToTop from './components/ScrollToTop';
import DotGrid from './components/DotGrid'
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Portfolio from './sections/Portfolio';
import Experience from './sections/Experience';
import Feedback from './sections/Feedback';
import Contacts from './sections/Contacts';
import Case from './sections/Case';
import { useEffect } from 'react';

function App() {
  const location = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    if (location.pathname === '/') {
      const mainScrollY = sessionStorage.getItem('mainScrollY');
      if (mainScrollY) {
        setTimeout(() => {
          window.scrollTo(0, parseInt(mainScrollY, 10));
          sessionStorage.removeItem('mainScrollY');
        }, 0);
        return;
      }

      const savedY = sessionStorage.getItem('scrollY');
      if (savedY) {
        setTimeout(() => {
          window.scrollTo(0, parseInt(savedY, 10));
        }, 0);
      }
    }

    const saveScroll = () => {
      if (location.pathname === '/') {
        sessionStorage.setItem('scrollY', window.scrollY.toString());
      }
    };

    window.addEventListener('scroll', saveScroll);
    return () => window.removeEventListener('scroll', saveScroll);
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
          
          <div>
            <Lanyard position={[0, 0, 30]} gravity={[0, -40, 0]} />
            <Navbar />
            <Hero />
            <About />
            <Portfolio />
            <Experience />
            <Feedback />
            <Contacts />
          </div>
          
        }
      />
      <Route path="/case-1" element={<Case />} />
      <Route path="/case-2" element={<Case />} />
      <Route path="/case-3" element={<Case />} />
      <Route path="/case-4" element={<Case />} />
      <Route path="/case-5" element={<Case />} />
      <Route path="/case-6" element={<Case />} />
    </Routes >
    </>
  );
}

export default App;
