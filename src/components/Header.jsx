import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Globe, ChevronDown, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const { currentLang, setLanguage, t } = useLanguage();

  const navigate = useNavigate();
  const langRef = useRef(null);

  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'PT', name: 'Português' },
    { code: 'ES', name: 'Español' },
  ];

  const mapCodeToName = (code) => languages.find(l => l.code === code)?.name || 'English';

  const location = useLocation();

  const navLinks = [
    { name: t.nav.ventures, href: '/ventures' },
    { name: t.nav.expertise, href: '/expertise' },
    { name: t.nav.theLab, href: '/#about' },
  ];

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const [path, id] = href.split('#');

    if (path === '/' && id) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const targetElement = document.getElementById(id);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300);
      } else {
        const targetElement = document.getElementById(id);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(href);
    }

    if (isOpen) {
      setIsOpen(false);
    }
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate('/');
    if (isOpen) {
      setIsOpen(false);
    }
  }

  const handleCTA = () => {
    navigate('/contact');
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const isActive = (href) => {
    if (href === '/ventures' && location.pathname === '/ventures') return true;
    if (href === '/expertise' && location.pathname === '/expertise') return true;
    return false;
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0C0D0D]/90 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" onClick={handleHomeClick} className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-accent-purple/10 border border-accent-purple/30 rounded flex items-center justify-center text-accent-purple group-hover:bg-accent-purple group-hover:text-white transition-all duration-300">
              <Code size={20} />
            </div>
            <span className="text-xl font-bold text-white tracking-[0.2em] uppercase">
              CHED LABS
            </span>
          </Link>

          {/* Center Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleSmoothScroll}
                className={`text-[13px] font-bold tracking-[0.15em] transition-colors relative group uppercase ${isActive(link.href) ? 'text-white' : 'text-gray-400 hover:text-white'}`}
              >
                {link.name}
                <span className={`absolute left-0 -bottom-1 h-0.5 bg-accent-purple transition-all duration-300 ${isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </a>
            ))}
          </nav>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-8">
            {/* Language Selector */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Globe size={18} className="text-gray-400" />
                <span className="text-sm font-bold tracking-widest">{currentLang}</span>
                <ChevronDown size={14} className={`text-gray-500 transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-4 w-40 glass-card p-2 rounded-xl border border-white/10 z-[60]"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${currentLang === lang.code ? 'bg-accent-purple/10 text-accent-purple' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
                      >
                        {lang.name}
                        {currentLang === lang.code && (
                          <div className="w-1.5 h-1.5 bg-accent-purple rounded-full shadow-[0_0_8px_rgba(147,114,255,0.8)]" />
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Button
              className="bg-white text-black hover:bg-gray-100 font-bold px-8 py-5 rounded-none text-[12px] tracking-[0.1em] uppercase"
              onClick={handleCTA}
            >
              {t.nav.partner}
            </Button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 bg-[#0C0D0D] z-[100] md:hidden"
          >
            <div className="container mx-auto px-6 h-full flex flex-col">
              <div className="flex justify-between items-center h-20">
                <Link to="/" onClick={handleHomeClick} className="flex items-center gap-3">
                  <Code size={20} className="text-accent-purple" />
                  <span className="text-xl font-bold text-white tracking-wider">CHED LABS</span>
                </Link>
                <button onClick={() => setIsOpen(false)} className="text-white">
                  <X size={28} />
                </button>
              </div>
              <nav className="flex-grow flex flex-col justify-center items-center gap-10">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={handleSmoothScroll}
                    className="text-4xl font-bold text-gray-400 hover:text-white tracking-widest transition-colors uppercase"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>

              <div className="py-12 border-t border-white/5 flex flex-col gap-8">
                {/* Mobile Lang */}
                <div className="flex justify-center gap-6">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={`text-lg font-bold tracking-widest ${currentLang === lang.code ? 'text-accent-purple' : 'text-gray-500'}`}
                    >
                      {lang.code}
                    </button>
                  ))}
                </div>
                <Button className="bg-white text-black hover:bg-gray-100 font-bold w-full py-7 rounded-none text-md uppercase" onClick={handleCTA}>
                  {t.nav.partner}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;