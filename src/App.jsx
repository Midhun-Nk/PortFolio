import React, { useState, useEffect, useRef } from "react";
import certificate1 from "./assets/certificate/certificate-1.png";
import certificate2 from "./assets/certificate/certificate-2.png";
import certificate3 from "./assets/certificate/certificate-3.png";
import certificate4 from "./assets/certificate/certificate-4.png";
import certificate5 from "./assets/certificate/certificate-5.png";
import certificate6 from "./assets/certificate/certificate-6.png";
import certificate7 from "./assets/certificate/certificate-7.png";
import certificate8 from "./assets/certificate/certificate-8.png";
import realtimecode from "./assets/images/realtimecode.jpg";
import quickchat from "./assets/images/quickchat.png";
import logo from "./assets/images/logo2.png";
import atsresume from "./assets/images/atsresume.jpg";
import bookmydoc from "./assets/images/bookmydoc.jpg";
import disaster from "./assets/images/disaster.jpg";
import nursery from "./assets/images/nursery.jpg";
import blooddonation from "./assets/images/blooddonation.jpg";
// --- SVG Icons ---
const MailIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const PhoneIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const LocationIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const CalendarIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);
const GithubIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
const LinkedinIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const TwitterIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 16 16"
    fill="currentColor"
    {...props}
  >
    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
  </svg>
);
const InstagramIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
const LeetCodeIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M13 15l-4-4 4-4" />
    <path d="M9.5 13.5l-2-2 2-2" />
    <path d="M21 3.6v16.8c0 .9-.7 1.6-1.6 1.6H4.6c-.9 0-1.6-.7-1.6-1.6V3.6C3 2.7 3.7 2 4.6 2h14.8c.9 0 1.6.7 1.6 1.6z" />
  </svg>
);
const ArrowRightIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);
const MenuIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);
const XIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);
const DownloadIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </svg>
);
const ArrowUpIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m5 12 7-7 7 7" />
    <path d="M12 19V5" />
  </svg>
);
const BookOpenIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

// --- Service Icons ---
const WebDesignIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 19l7-7 3 3-7 7-3-3z" />
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    <path d="M2 2l7.586 7.586" />
    <circle cx="11" cy="11" r="2" />
  </svg>
);
const WebDevIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);
const AppDevIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);
const ContentCreationIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
    <circle cx="12" cy="13" r="3" />
  </svg>
);

// --- Custom Hook for Scroll Animations ---
const useAnimatedInView = () => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [
    ref,
    `transition-all duration-1000 ease-out ${
      isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`,
  ];
};

// --- Header Component ---
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Portfolio" },
    { href: "#certificates", label: "Certificates" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const isLinkActive = (href) => {
    if (href === "#about") {
      return ["about", "services", "resume"].includes(activeSection);
    }
    return activeSection === href.substring(1);
  };

  const NavLink = ({ href, label }) => {
    const isActive = isLinkActive(href);
    return (
      <a
        href={href}
        onClick={() => setIsOpen(false)}
        className={`relative text-lg font-medium transition-colors duration-300 ${
          isActive ? "text-white" : "text-slate-400 hover:text-white"
        }`}
      >
        {label}
        {isActive && (
          <span className="absolute -bottom-1 left-0 w-full h-0.5 animate-rgb-line rounded-full"></span>
        )}
      </a>
    );
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-950/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#home"
          className="text-2xl font-bold text-white tracking-wider"
        >
          <span className="text-slate-300">M</span>idhun{" "}
          <span className="text-slate-300">N</span>k
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white z-50"
        >
          {isOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-gray-950 transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
      </div>
    </header>
  );
};

// --- Hero Section ---
const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gray-950 text-white overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gray-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-gray-700 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      <div className="container mx-auto px-6 text-center z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4 leading-tight">
          <span className="block animate-fade-in-down delay-200 animate-rgb-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Full Stack Developer
          </span>
          <span className="block animate-fade-in-down delay-400 min-h-[4rem] md:min-h-[7rem] animate-rgb-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text">
            MERN & Django
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mt-6 animate-fade-in-up delay-600">
          I build responsive full-stack apps with a focus on clean UI and
          efficient backend.
        </p>
        <a
          href="#projects"
          className="mt-10 inline-flex items-center gap-2 bg-slate-200 hover:bg-white text-black font-semibold py-3 px-8 rounded-full shadow-lg shadow-white/20 transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-800"
        >
          View My Work <ArrowRightIcon className="w-5 h-5" />
        </a>

        <div className="flex justify-center items-center space-x-4 md:space-x-6 mt-12 animate-fade-in-up delay-[1000ms]">
          <a
            href="https://github.com/Midhun-Nk"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="w-14 h-14 rounded-full bg-gray-900/80 border border-gray-700 flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 overflow-hidden">
              <div className="absolute -inset-0.5 rounded-full blur-sm opacity-0 group-hover:opacity-75 animate-rgb-border transition duration-300"></div>
              <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t from-cyan-400/30 to-purple-500/30 transition-all duration-300 group-hover:h-full"></div>
              <GithubIcon className="relative z-10 w-7 h-7 text-slate-400 group-hover:text-white transition-colors duration-300" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/midhun-nk"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="w-14 h-14 rounded-full bg-gray-900/80 border border-gray-700 flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 overflow-hidden">
              <div className="absolute -inset-0.5 rounded-full blur-sm opacity-0 group-hover:opacity-75 animate-rgb-border transition duration-300"></div>
              <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t from-cyan-400/30 to-purple-500/30 transition-all duration-300 group-hover:h-full"></div>
              <LinkedinIcon className="relative z-10 w-7 h-7 text-slate-400 group-hover:text-white transition-colors duration-300" />
            </div>
          </a>
          <a
            href="https://x.com/mike_devlogs"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="w-14 h-14 rounded-full bg-gray-900/80 border border-gray-700 flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 overflow-hidden">
              <div className="absolute -inset-0.5 rounded-full blur-sm opacity-0 group-hover:opacity-75 animate-rgb-border transition duration-300"></div>
              <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t from-cyan-400/30 to-purple-500/30 transition-all duration-300 group-hover:h-full"></div>
              <TwitterIcon className="relative z-10 w-7 h-7 text-slate-400 group-hover:text-white transition-colors duration-300" />
            </div>
          </a>
          <a
            href="https://www.instagram.com/mike.devlogs"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="w-14 h-14 rounded-full bg-gray-900/80 border border-gray-700 flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 overflow-hidden">
              <div className="absolute -inset-0.5 rounded-full blur-sm opacity-0 group-hover:opacity-75 animate-rgb-border transition duration-300"></div>
              <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t from-cyan-400/30 to-purple-500/30 transition-all duration-300 group-hover:h-full"></div>
              <InstagramIcon className="relative z-10 w-7 h-7 text-slate-400 group-hover:text-white transition-colors duration-300" />
            </div>
          </a>
          <a
            href="https://leetcode.com/u/midhunnk/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="w-14 h-14 rounded-full bg-gray-900/80 border border-gray-700 flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 overflow-hidden">
              <div className="absolute -inset-0.5 rounded-full blur-sm opacity-0 group-hover:opacity-75 animate-rgb-border transition duration-300"></div>
              <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t from-cyan-400/30 to-purple-500/30 transition-all duration-300 group-hover:h-full"></div>
              <LeetCodeIcon className="relative z-10 w-7 h-7 text-slate-400 group-hover:text-white transition-colors duration-300" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

// --- About Section ---
const AboutSection = () => {
  const [ref, animationClasses] = useAnimatedInView();
  return (
    <section id="about" className="py-20 md:py-32 bg-gray-950 text-white">
      <div ref={ref} className={`container mx-auto px-6 ${animationClasses}`}>
        <h2 className="text-4xl font-bold text-center mb-4">About Me</h2>
        <div className="w-24 h-1 bg-slate-300 mx-auto mb-12 rounded-full"></div>
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="md:w-1/3 flex justify-center">
            <div className="relative group w-56 h-56 md:w-72 md:h-72">
              <div className="absolute -inset-1.5 rounded-full blur opacity-50 group-hover:opacity-75 animate-rgb-border transition duration-1000 group-hover:duration-200"></div>
              <img
                src={logo}
                alt="Midhun Nk"
                className="relative rounded-full shadow-xl w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3 text-lg text-slate-300 space-y-6">
            <p>
              I'm a passionate Full-Stack Web Developer specializing in the{" "}
              <strong>MERN stack</strong>. I enjoy building interactive,
              scalable, and user-friendly web applications that solve real-world
              problems.
            </p>
            <p>
              Currently, I’m expanding my skills in backend development with{" "}
              <strong>Django</strong>, to strengthen my versatility. Beyond
              coding, I love creating projects that are visually engaging and
              impactful.
            </p>
            <p>
              Whether it's a real-time dashboard or an e-commerce site, I
              combine clean architecture, responsive design, and
              performance-driven code to bring ideas to life.
            </p>
            <a
              href="/MidhunNK.pdf" // file in public folder
              download="MidhunNK.pdf" // name when downloaded
              className="inline-flex items-center gap-3 bg-gray-900 hover:bg-gray-800 border border-gray-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <DownloadIcon className="w-5 h-5 text-slate-300" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Services Section ---
const ServicesSection = () => {
  const [ref, animationClasses] = useAnimatedInView();
  const services = [
    {
      icon: <WebDesignIcon className="w-10 h-10 mb-4 text-slate-300" />,
      title: "Web Design",
      description:
        "Modern and high-quality design made at a professional level.",
    },
    {
      icon: <WebDevIcon className="w-10 h-10 mb-4 text-slate-300" />,
      title: "Web Development",
      description: "Responsive full-stack apps using MERN stack and Django.",
    },
    {
      icon: <AppDevIcon className="w-10 h-10 mb-4 text-slate-300" />,
      title: "App Development",
      description: "Cross-platform mobile apps using Flutter and Firebase.",
    },
    {
      icon: <InstagramIcon className="w-10 h-10 mb-4 text-slate-300" />,
      title: "Content Creation",
      description:
        "Creating engaging tech content & sharing my developer journey on Instagram.",
      link: "https://www.instagram.com/mike.devlogs",
      linkText: "Follow Me",
    },
  ];
  return (
    <section id="services" className="py-20 md:py-32 bg-gray-950/95 text-white">
      <div ref={ref} className={`container mx-auto px-6 ${animationClasses}`}>
        <h2 className="text-4xl font-bold text-center mb-4">What I Do</h2>
        <div className="w-24 h-1 bg-slate-300 mx-auto mb-12 rounded-full"></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group rounded-xl text-center transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute -inset-0.5 rounded-xl blur opacity-0 group-hover:opacity-60 transition duration-300 animate-rgb-border"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-lg border border-gray-800 rounded-xl p-8 h-full flex flex-col">
                <div className="flex-grow">
                  {service.icon}
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-400">{service.description}</p>
                </div>
                {service.link && (
                  <div className="mt-4">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-slate-300 hover:text-white inline-flex items-center group/link"
                    >
                      {service.linkText}{" "}
                      <ArrowRightIcon className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Skills Section ---
const SkillsSection = () => {
  const [ref, animationClasses] = useAnimatedInView();
  const skills = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      invert: true,
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Django",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
      invert: true,
    },
    {
      name: "Flutter",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-gray-950 text-white">
      <div ref={ref} className={`container mx-auto px-6 ${animationClasses}`}>
        <h2 className="text-4xl font-bold text-center mb-4">My Tech Stack</h2>
        <div className="w-24 h-1 bg-slate-300 mx-auto mb-12 rounded-full"></div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center gap-2 transition-all duration-300 ease-in-out transform hover:-translate-y-2"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-gray-900 p-5 rounded-full shadow-lg transition-all duration-300 group-hover:bg-gray-400/20 group-hover:shadow-lg group-hover:shadow-white/20 group-hover:rotate-6">
                <img
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  className={`w-12 h-12 md:w-16 md:h-16 ${
                    skill.invert ? "invert" : ""
                  }`}
                />
              </div>
              <p className="text-slate-300 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Resume/Timeline Section ---
const ResumeSection = () => {
  const [ref, animationClasses] = useAnimatedInView();
  const education = [
    {
      title: "Computer Science Engineering",
      institution: "University of Calicut",
      years: "2021 — 2025",
    },
    {
      title: "Higher Secondary, Computer Science",
      institution: "Poilkave HSS",
      years: "2019 — 2021",
    },
  ];
  const experience = [
    {
      title: "MERN Stack Developer Trainee",
      institution: "Edunet Foundation",
      years: "2025 — Present",
      description:
        "Working on real-world projects using the MERN stack, gaining hands-on experience in full-stack development.",
    },
  ];

  return (
    <section id="resume" className="py-20 md:py-32 bg-gray-950/95 text-white">
      <div ref={ref} className={`container mx-auto px-6 ${animationClasses}`}>
        <h2 className="text-4xl font-bold text-center mb-4">My Journey</h2>
        <div className="w-24 h-1 bg-slate-300 mx-auto mb-12 rounded-full"></div>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <BookOpenIcon className="w-8 h-8 text-slate-300" />
              <h3 className="text-3xl font-bold">Education</h3>
            </div>
            <div className="relative border-l-2 border-gray-700 pl-8 space-y-12">
              <div className="absolute -left-[3px] top-0 h-full w-[2px] bg-gray-700"></div>
              {education.map((item, index) => (
                <div key={index} className="relative">
                  <div
                    className="absolute -left-[38px] top-1 w-4 h-4 rounded-full border-4 border-gray-950 animate-rgb-pulse"
                    style={{ animationDelay: `${index * 200}ms` }}
                  ></div>
                  <p className="text-slate-300 font-semibold mb-1">
                    {item.years}
                  </p>
                  <h4 className="text-xl font-bold text-white">{item.title}</h4>
                  <p className="text-slate-400">{item.institution}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4 mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-slate-300"
              >
                <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
              <h3 className="text-3xl font-bold">Experience</h3>
            </div>
            <div className="relative border-l-2 border-gray-700 pl-8 space-y-12">
              <div className="absolute -left-[3px] top-0 h-full w-[2px] bg-gray-700"></div>
              {experience.map((item, index) => (
                <div key={index} className="relative">
                  <div
                    className="absolute -left-[38px] top-1 w-4 h-4 rounded-full border-4 border-gray-950 animate-rgb-pulse"
                    style={{
                      animationDelay: `${(education.length + index) * 200}ms`,
                    }}
                  ></div>
                  <p className="text-slate-300 font-semibold mb-1">
                    {item.years}
                  </p>
                  <h4 className="text-xl font-bold text-white">{item.title}</h4>
                  <p className="text-slate-400 mb-2">{item.institution}</p>
                  <p className="text-slate-400 text-base">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Projects & Certificates Sections ---
const CardGridSection = ({ id, title, items, cardType }) => {
  const [ref, animationClasses] = useAnimatedInView();

  const Card = ({ item, index }) => (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`block relative rounded-xl overflow-hidden transition-all duration-300 group`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="absolute z-0 -inset-0.5 rounded-lg blur opacity-0 group-hover:opacity-60 transition duration-300 animate-rgb-border"></div>
      <div className="relative z-10 bg-gray-900/80 backdrop-blur-lg border border-gray-800 rounded-xl h-full flex flex-col transform group-hover:-translate-y-2 transition-transform duration-300">
        <div className="overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
          {cardType === "project" ? (
            <p className="text-slate-400 mb-4 flex-grow">{item.description}</p>
          ) : (
            <p className="text-slate-400 mb-4 flex-grow">
              Issued by: <strong>{item.issuer}</strong>
            </p>
          )}
          {item.tags && (
            <div className="flex flex-wrap gap-2 mb-4">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-800 text-slate-300 text-xs font-semibold px-2.5 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div className="mt-auto text-slate-300 font-semibold inline-flex items-center group-hover:text-white transition-colors">
            {cardType === "project" ? "View Project" : "View Certificate"}{" "}
            <ArrowRightIcon className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </a>
  );

  return (
    <section id={id} className="py-20 md:py-32 bg-gray-950 text-white">
      <div ref={ref} className={`container mx-auto px-6 ${animationClasses}`}>
        <h2 className="text-4xl font-bold text-center mb-4">{title}</h2>
        <div className="w-24 h-1 bg-slate-300 mx-auto mb-12 rounded-full"></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <Card key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Contact Section ---
// --- Contact Section ---
const ContactSection = () => {
  const [ref, animationClasses] = useAnimatedInView();

  // state for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Message from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A${formData.message}`;

    const mailtoLink = `mailto:midhunnk2023@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;

    window.location.href = mailtoLink;
  };

  const contactDetails = [
    {
      icon: <MailIcon className="w-6 h-6 text-slate-300" />,
      title: "Email",
      value: "midhunnk2023@gmail.com",
      href: "mailto:midhunnk2023@gmail.com",
    },
    {
      icon: <PhoneIcon className="w-6 h-6 text-slate-300" />,
      title: "Phone",
      value: "+91 7994863515",
      href: "tel:+917994863515",
    },
    {
      icon: <CalendarIcon className="w-6 h-6 text-slate-300" />,
      title: "Birthday",
      value: "April 30, 2003",
    },
    {
      icon: <LocationIcon className="w-6 h-6 text-slate-300" />,
      title: "Location",
      value: "Kerala, India",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-950/95 text-white">
      <div ref={ref} className={`container mx-auto px-6 ${animationClasses}`}>
        <h2 className="text-4xl font-bold text-center mb-4">Get In Touch</h2>
        <div className="w-24 h-1 bg-slate-300 mx-auto mb-12 rounded-full"></div>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side Contact Info */}
          <div className="space-y-8">
            {contactDetails.map((detail) => (
              <div key={detail.title} className="flex items-center gap-6">
                <div className="bg-gray-900 p-4 rounded-full">
                  {detail.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-400">
                    {detail.title}
                  </h3>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="text-white text-xl hover:text-slate-300 transition-colors"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="text-white text-xl">{detail.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-900/80 backdrop-blur-lg border border-gray-800 rounded-xl p-8 space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Send me a message
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
                required
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-slate-200 hover:bg-white text-black font-semibold py-3 px-8 rounded-full shadow-lg shadow-white/20 transition-all duration-300 transform hover:scale-105"
            >
              Send Message <ArrowRightIcon className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// --- Footer ---
const Footer = () => {
  const socialLinks = [
    { href: "https://github.com/Midhun-Nk", icon: <GithubIcon /> },
    { href: "https://www.linkedin.com/in/midhun-nk", icon: <LinkedinIcon /> },
    { href: "https://x.com/mike_devlogs", icon: <TwitterIcon /> },
    { href: "https://www.instagram.com/mike.devlogs", icon: <InstagramIcon /> },
    {
      href: "https://leetcode.com/u/midhunnk/",
      icon: <LeetCodeIcon className="w-6 h-6" />,
    },
  ];
  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-slate-400">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Midhun Nk. All rights reserved.
        </p>
        <div className="flex items-center space-x-6">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

// --- Scroll To Top Button ---
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 300);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 bg-slate-200 hover:bg-white text-black p-3 rounded-full shadow-lg shadow-white/20 transition-all duration-300 z-50 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
      }`}
    >
      <ArrowUpIcon className="w-6 h-6" />
    </button>
  );
};

// --- Custom Cursor ---
const CustomCursor = () => {
  const cursorRef = useRef(null);
  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - 10}px, ${
          e.clientY - 10
        }px, 0)`;
      }
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);
  return (
    <div
      ref={cursorRef}
      className="hidden lg:block fixed w-5 h-5 bg-white rounded-full pointer-events-none z-[100] mix-blend-difference transition-transform duration-75 ease-out"
    ></div>
  );
};

// --- Main App Component ---
export default function App() {
  const projects = [
    {
      title: "RealTime Collab Editor",
      description:
        "A collaborative code editor for real-time pair programming, built with modern web technologies.",
      image: realtimecode,
      tags: [
        "React",
        "Node.js",
        "Socket.IO",
        "Express",
        "Tailwind CSS",
        "MongoDB",
      ],
      link: "https://github.com/Midhun-Nk/RealTime-Collab-CodeEditor.git",
    },
    {
      title: "Book My Doctor",
      description:
        "A web application for booking doctor appointments, managing schedules, and patient records.",
      image: bookmydoc,
      tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      link: "https://github.com/Midhun-Nk/BookMyDoctor.git",
    },
    {
      title: "Quick Chat",
      description:
        "A mobile app for real-time chat and messaging, featuring user authentication and chat rooms.",
      image: quickchat,
      tags: [
        "React",
        "Node.js",
        "Socket.IO",
        "MongoDB",
        "Express",
        "Tailwind CSS",
      ],
      link: "https://github.com/Midhun-Nk/QuickChat.git",
    },
    {
      title: "ATS Resume Builder",
      description:
        "An AI-powered tool to create and optimize resumes for Applicant Tracking Systems (ATS).",
      image: atsresume,
      tags: [
        "React",
        "Python",
        "AI/ML",
        "Tailwind CSS",
        "Django",
        "MySQL",
        "OpenAI",
      ],
      link: "https://github.com/Midhun-Nk/ATS-Resume-Builder.git",
    },

    {
      title: "Disaster Management",
      description:
        "A comprehensive application for coordinating relief and rescue operations during natural disasters.",
      image: disaster,
      tags: [
        "Flutter",
        "Firebase",
        "APIs",
        "Google Maps",
        "Push Notifications",
        "Real-time Tracking",
      ],
      link: "https://github.com/MiKeStudi0/Disaster-Management.git",
    },
    {
      title: "E-Commerce Nursery App",
      description:
        "An online store for plants and gardening supplies, featuring product catalogs and a checkout system.",
      image: nursery,
      tags: ["Flutter", "Firebase", "E-commerce"],
      link: "https://github.com/Midhun-Nk/Ecommerce-Application.git",
    },
    {
      title: "Blood Donation App",
      description:
        "A mobile app connecting blood donors with recipients in need, facilitating emergency requests.",
      image: blooddonation,
      tags: ["Flutter", "Firebase"],
      link: "https://github.com/Midhun-Nk/BloodDonation.git",
    },
  ];
  const certificates = [
    {
      title: "Python & Django Web Dev",
      issuer: "Udemy",
      image: certificate1,
      link: "https://drive.google.com/file/d/1HRaWCD82YuOzWeiQ0Nzbp_5jFFqcKiTl/view",
    },
    {
      title: "Data Structures Using Python",
      issuer: "Udemy",
      image: certificate2,
      link: "https://drive.google.com/file/d/1GZBaAqVS44WCNHwBnZ8_zmXKFBQnpdTU/view",
    },
    {
      title: "IEEE Hackathon",
      issuer: "IEEE SPS Kerala Chapter",
      image: certificate3,
      link: "https://drive.google.com/file/d/150Bb8HjWjGq8YZJB1IHcFRb31sFkua88/view",
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      image: certificate4,
      link: "https://drive.google.com/file/d/14yNmvKpcKwEE4aABJ17RshNlNrk3ylqG/view",
    },
    {
      title: "Internship on Python Developer",
      issuer: "Revertech IT Solutions",
      image: certificate5,
      link: "https://drive.google.com/file/d/14xIHmHrX6pvqJhcLe5tQgTUJXNM1Wu5t/view",
    },
    {
      title: "MERN Stack Trainee",
      issuer: "Edunet & EY",
      image: certificate6,
      link: "https://drive.google.com/file/d/159Ac700r7CKR9Vua6K1bVEOHdMg6SW-b/view",
    },
    {
      title: "Introduction to MySQL",
      issuer: "Skill Up",
      image: certificate7,
      link: "https://drive.google.com/file/d/1tIMuBMe7Yb27sNWzQCzP0M12jPFYyKSS/view",
    },
    {
      title: "Python Django Rest Framework",
      issuer: "Udemy",
      image: certificate8,
      link: "https://drive.google.com/file/d/1Kafj7NnDVAoASBovp6Eg0J9Oj1g-A4PK/view?usp=drive_link",
    },
  ];

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute("href"));
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }, []);

  return (
    <div className="bg-gray-950 lg:cursor-none">
      <style>{`
            @keyframes rgb-text-anim {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            .animate-rgb-text {
                background-size: 200% 200%;
                animation: rgb-text-anim 5s ease infinite;
            }
            @keyframes rgb-border-anim {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            .animate-rgb-border {
                 background: linear-gradient(90deg, #22d3ee, #a855f7, #ec4899, #22d3ee);
                 background-size: 200% 200%;
                 animation: rgb-border-anim 4s linear infinite;
            }
             @keyframes rgb-pulse-anim {
                0%, 100% { background-color: #22d3ee; box-shadow: 0 0 12px #22d3ee; }
                33% { background-color: #a855f7; box-shadow: 0 0 14px #a855f7; }
                66% { background-color: #ec4899; box-shadow: 0 0 12px #ec4899; }
            }
            .animate-rgb-pulse {
                animation: rgb-pulse-anim 3s infinite;
            }
            @keyframes rgb-line-anim {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            .animate-rgb-line {
                background: linear-gradient(90deg, #22d3ee, #a855f7, #ec4899, #22d3ee);
                background-size: 200% 200%;
                animation: rgb-line-anim 4s linear infinite;
            }
        `}</style>
      <CustomCursor />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SkillsSection />
        <ResumeSection />
        <CardGridSection
          id="projects"
          title="My Portfolio"
          items={projects}
          cardType="project"
        />
        <CardGridSection
          id="certificates"
          title="My Certificates"
          items={certificates}
          cardType="certificate"
        />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
