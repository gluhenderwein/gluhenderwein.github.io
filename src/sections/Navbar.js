import React, { useEffect, useRef, useState, useCallback } from "react";
import './Navbar.css'
import { HugeiconsIcon } from '@hugeicons/react';
import { UserCircle02Icon, MenuSquareIcon, Calendar04Icon, FavouriteIcon, SentIcon } from '@hugeicons/core-free-icons';
import ThemeToggle from '../components/ThemeToggle';
import GradualBlurMemo from '../components/GradualBlur';

const aboutRef = React.createRef();
const portfolioRef = React.createRef();
const experienceRef = React.createRef();
const feedbackRef = React.createRef();
const contactsRef = React.createRef();

function Navbar() {
  const navbarRef = useRef(null);
  const [activeSection, setActiveSection] = useState("about");
  const [menuScrollLocked, setMenuScrollLocked] = useState(false);

  const navItemRefs = {
    about: useRef(null),
    portfolio: useRef(null),
    experience: useRef(null),
    feedback: useRef(null),
    contacts: useRef(null),
  };

  const refs = {
    about: aboutRef,
    portfolio: portfolioRef,
    experience: experienceRef,
    feedback: feedbackRef,
    contacts: contactsRef,
  };

  const icons = {
    about: UserCircle02Icon,
    portfolio: MenuSquareIcon,
    experience: Calendar04Icon,
    feedback: FavouriteIcon,
    contacts: SentIcon,
  };

  const labels = {
    about: "обо мне",
    portfolio: "портфолио",
    experience: "опыт",
    feedback: "отзывы",
    contacts: "контакты",
  };

  const handleAnchorClick = useCallback((e) => {
    e.preventDefault();
    const href = Object.keys(refs).find((key) =>
      e.currentTarget.textContent?.toLowerCase().includes(labels[key])
    );
    const targetRef = refs[href];

    if (targetRef?.current) {
      const offset = 76; // высота navbar'а
      const targetTop = targetRef.current.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: targetTop,
        behavior: "smooth"
      });

      setMenuScrollLocked(true);
      setTimeout(() => setMenuScrollLocked(false), 700);
      setActiveSection(href);
    }
  }, []);

  useEffect(() => {
    if (menuScrollLocked) return;

    const activeRef = navItemRefs[activeSection];
    const container = document.querySelector('.menu-wrapper');

    if (activeRef?.current && container) {
      const el = activeRef.current;
      const elCenter = el.offsetLeft - container.offsetWidth / 2 + el.offsetWidth / 2;

      container.scrollTo({
        left: elCenter,
        behavior: 'smooth'
      });
    }
  }, [activeSection, menuScrollLocked]);

  useEffect(() => {
    const handleScroll = () => {
      if (!navbarRef.current) return;

      const navigation = navbarRef.current.closest('.navigation');
      if (!navigation) return;

      const isSmallScreen = window.innerWidth < 1079;

      const start = 80;
      const end = 280;

      const y = window.scrollY;
      const progress = Math.min(
        Math.max((y - start) / (end - start), 0),
        1
      );

      const shouldBlur = isSmallScreen || y > 250;

      navigation.style.setProperty(
        '--blur-progress',
        shouldBlur ? progress : 0
      );

      if (shouldBlur) {
        navbarRef.current.classList.add("blurred");
      } else {
        navbarRef.current.classList.remove("blurred");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleSectionChange = () => {
      const offset = 100;
      let currentSection = "about";

      Object.entries(refs).forEach(([key, ref]) => {
        const el = ref.current;
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= offset) {
            currentSection = key;
          }
        }
      });

      setActiveSection(currentSection);
      //window.history.replaceState(null, "", `#${currentSection}`);
    };

    window.addEventListener("scroll", handleSectionChange);
    handleSectionChange();

    return () => window.removeEventListener("scroll", handleSectionChange);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    const hasScrolled = sessionStorage.getItem('scrolledToHash');

    if (!hasScrolled) {
      const targetRef = refs[hash];
      if (targetRef?.current) {
        setTimeout(() => {
          const offset = 88;
          const top = targetRef.current.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top });
          setActiveSection(hash);
          sessionStorage.setItem('scrolledToHash', 'true');
        }, 0);
      }
    }
  }, []);

  return (
    <section className='navigation'>
      <GradualBlurMemo />
      <nav ref={navbarRef} className="navbar">
        <div className="menu-mask-wrapper">
          <div className="menu-wrapper">
          {Object.entries(refs).map(([key, ref]) => (
            <a
              key={key}
              ref={navItemRefs[key]}
              href="#"
              onClick={handleAnchorClick}
              className={`nav-link ${activeSection === key ? "active" : ""}`}
            >
              <HugeiconsIcon className='icon' icon={icons[key]} size={24} strokeWidth={2} />
              <p className='text-label-18'>{labels[key]}</p>
            </a>
          ))}

          <ThemeToggle />
          </div>
        </div>
      </nav>
    </section>
  );
}

export {
  Navbar,
  aboutRef,
  portfolioRef,
  experienceRef,
  feedbackRef,
  contactsRef,
};