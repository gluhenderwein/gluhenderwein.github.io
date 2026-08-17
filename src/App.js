import './App.css';
import ScrollToTop from './components/ScrollToTop';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Portfolio from './sections/Portfolio';
import Experience from './sections/Experience';
import Feedback from './sections/Feedback';
import Contacts from './sections/Contacts';
import { useEffect, lazy, Suspense } from 'react';

/* Всё тяжёлое грузится отдельными чанками, чтобы первая отрисовка
   не ждала их скачивания и разбора.

   Lanyard тянет three + rapier — это 2.7 МБ, 70% прежнего бандла,
   ради одного декоративного бейджа. DotGrid тянет gsap.
   Оба лежат вне потока (position: absolute/fixed), так что
   их появление чуть позже не двигает макет.

   Страницы кейсов и шотов уносят с собой лайтбокс и свою разметку —
   на главной они не нужны вовсе. */
const Lanyard = lazy(() => import('./components/Lanyard'));
const DotGrid = lazy(() => import('./components/DotGrid'));
const Case1 = lazy(() => import('./sections/Case1'));
const Case2 = lazy(() => import('./sections/Case2'));
const Case3 = lazy(() => import('./sections/Case3'));
const Case4 = lazy(() => import('./sections/Case4'));
const Case5 = lazy(() => import('./sections/Case5'));
const Shots = lazy(() => import('./sections/Shots'));

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

            {/* Границы раздельные не для красоты: в общей границе React
                держит поддерево скрытым, пока не приедут ОБА чанка, а когда
                уже показанное поддерево подвешивается снова — прячет его
                через display: none. DotGrid в этот момент меряет себя в ноль
                и записывает канвасу width: 0px. Своя граница у каждого. */}
            <Suspense fallback={null}>
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
            </Suspense>
            <Suspense fallback={null}>
              <Lanyard position={[0, 0, 30]} gravity={[0, -40, 0]} />
            </Suspense>
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
      <Route path="/case-1" element={<Suspense fallback={null}><Case1 /></Suspense>} />
      <Route path="/case-2" element={<Suspense fallback={null}><Case2 /></Suspense>} />
      <Route path="/case-3" element={<Suspense fallback={null}><Case3 /></Suspense>} />
      <Route path="/case-4" element={<Suspense fallback={null}><Case4 /></Suspense>} />
      <Route path="/case-5" element={<Suspense fallback={null}><Case5 /></Suspense>} />
      <Route path="/shots" element={<Suspense fallback={null}><Shots /></Suspense>} />
    </Routes >
    </>
  );
}

export default App;
