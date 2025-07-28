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
import Case1 from './sections/Case1';
import Case2 from './sections/Case2';
import Case3 from './sections/Case3';
import Case4 from './sections/Case4';
import Case5 from './sections/Case5';
import Shots from './sections/Shots';
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
            <DotGrid style={{ position: 'fixed', width: '100vw', height: '100dvh', zIndex:'0' }}
                        dotSize={2}
                        gap={32}
                        baseColor="rgba(127, 127, 116, 0.2)"
                        activeColor="#ffffff"
                        proximity={120}
                        shockRadius={350}
                        shockStrength={15}
                        resistance={1650}
                        returnDuration={3.5}
                    />
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
      <Route path="/case-1" element={<Case1 />} />
      <Route path="/case-2" element={<Case2 />} />
      <Route path="/case-3" element={<Case3 />} />
      <Route path="/case-4" element={<Case4 />} />
      <Route path="/case-5" element={<Case5 />} />
      <Route path="/shots" element={<Shots />} />
    </Routes >
    </>
  );
}

export default App;
