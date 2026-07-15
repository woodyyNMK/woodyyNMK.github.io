import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import { Shield, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from './data';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');

  // Custom click handler to smoothly scroll to sections
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    const element = document.getElementById(tabId);
    if (element) {
      const offset = 64; // Navbar height offset (h-16 is 64px)
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // IntersectionObserver to auto-update active tab as user scrolls
  useEffect(() => {
    const sectionIds = ['home', 'about', 'experience', 'projects', 'certificates', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-35% 0px -55% 0px', // Triggers when section occupies the active zone of screen
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col font-sans selection:bg-indigo-100 selection:text-indigo-600">
      {/* Top Header Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabClick}
      />

      {/* Main Page Canvas Container */}
      <main className="flex-grow pt-16">
        <section id="home" className="scroll-mt-16">
          <Hero setActiveTab={handleTabClick} />
        </section>
        
        <section id="about" className="scroll-mt-16 bg-white border-t border-slate-100">
          <About />
        </section>

        <section id="experience" className="scroll-mt-16 border-t border-slate-100">
          <Experience />
        </section>

        <section id="projects" className="scroll-mt-16 bg-white border-t border-slate-100">
          <Projects />
        </section>

        <section id="certificates" className="scroll-mt-16 border-t border-slate-100">
          <Certificates />
        </section>

        <section id="contact" className="scroll-mt-16 bg-white border-t border-slate-100">
          <Contact />
        </section>
      </main>

      {/* Tablet and Mobile social footer */}
      <footer className="xl:hidden border-t border-slate-100 bg-white py-8 px-4 flex justify-center items-center shrink-0">
        <div className="flex items-center gap-8 text-slate-400">
          <a
            href={`https://${PERSONAL_INFO.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 hover:scale-110 transition-all duration-200 p-2 hover:bg-indigo-50 rounded-full"
            title="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href={`https://${PERSONAL_INFO.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 hover:scale-110 transition-all duration-200 p-2 hover:bg-indigo-50 rounded-full"
            title="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-indigo-600 hover:scale-110 transition-all duration-200 p-2 hover:bg-indigo-50 rounded-full"
            title="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </footer>

      {/* Floating social links on the right of the page - only visible on xl screens (large desktop) and up */}
      <div className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-4 bg-white/90 backdrop-blur-sm p-3 rounded-full border border-slate-200 shadow-lg shadow-slate-100/50">
        <a
          href={`https://${PERSONAL_INFO.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-indigo-600 hover:scale-110 transition-all duration-200 p-1.5 hover:bg-indigo-50 rounded-full"
          title="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href={`https://${PERSONAL_INFO.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-indigo-600 hover:scale-110 transition-all duration-200 p-1.5 hover:bg-indigo-50 rounded-full"
          title="GitHub"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="text-slate-400 hover:text-indigo-600 hover:scale-110 transition-all duration-200 p-1.5 hover:bg-indigo-50 rounded-full"
          title="Email"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
