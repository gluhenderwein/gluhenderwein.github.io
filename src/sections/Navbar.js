import React, { useEffect, useRef, useState, useCallback } from "react";
import './Navbar.css'
import { HugeiconsIcon } from '@hugeicons/react';
import { UserCircle02Icon, MenuSquareIcon, Calendar04Icon, FavouriteIcon, SentIcon } from '@hugeicons/core-free-icons';
import ThemeToggle from '../components/ThemeToggle';

const aboutRef = React.createRef();
const portfolioRef = React.createRef();
const experienceRef = React.createRef();
const feedbackRef = React.createRef();
const contactsRef = React.createRef();

function Navbar() {
  const navbarRef = useRef(null);
  const [activeSection, setActiveSection] = useState("about");

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
    const href = e.currentTarget.getAttribute("href")?.slice(1);
    const targetRef = refs[href];

    if (targetRef?.current) {
      const offset = 76; // высота navbar'а
      const targetTop = targetRef.current.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: targetTop,
        behavior: "smooth"
      });

      window.history.pushState(null, '', `#${href}`);
      setActiveSection(href);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!navbarRef.current) return;
      const isSmallScreen = window.innerWidth < 1079;

      if (isSmallScreen) {
        navbarRef.current.classList.add("blurred");
      } else if (window.scrollY > 250) {
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
      <nav ref={navbarRef} className="navbar">

        {Object.entries(refs).map(([key, ref]) => (
          <a
            key={key}
            href={`#${key}`}
            onClick={handleAnchorClick}
            className={`nav-link ${activeSection === key ? "active" : ""}`}
          >
            <HugeiconsIcon className='icon' icon={icons[key]} size={24} strokeWidth={2} />
            <p className='label-text'>{labels[key]}</p>
          </a>
        ))}

        <ThemeToggle />
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