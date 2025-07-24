import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (!element) return;

    const navbarHeight = 80;
    const targetY = element.offsetTop - navbarHeight;

    const threshold = 5;

    // Kalau sudah dekat, langsung tutup
    if (Math.abs(window.scrollY - targetY) < threshold) {
      setIsOpen(false);
      return;
    }

    // Scroll ke target
    window.scrollTo({
      top: targetY,
      behavior: 'smooth',
    });

    // Buat fungsi handler scroll
    const handleScroll = () => {
      if (Math.abs(window.scrollY - targetY) < threshold) {
        setIsOpen(false);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    // Tambahkan event listener sementara
    window.addEventListener('scroll', handleScroll);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      const dropdown = document.getElementById('mobile-menu');
      if (dropdown && !dropdown.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 px-4 md:px-8 py-4 transition-all duration-300 ${
        scrolled ? 'bg-white/90 shadow-soft backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <button
          onClick={() => scrollToSection('#home')}
          className="text-2xl font-bold text-primary-600 font-['Poppins'] tracking-wide flex items-center"
        >
          <span className="relative">Welcome<span className="text-gray-800">!</span>
            <motion.span
              className="absolute -bottom-1 left-0 w-full h-[3px] bg-primary-500 origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(link.href)}
              className={`relative font-medium transition-colors ${
                activeSection === link.href.substring(1)
                  ? 'text-primary-600'
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <motion.span
                  layoutId="navIndicator"
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary-500"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md shadow-soft p-4 overflow-hidden"
          >
            <motion.div
              className="flex flex-col space-y-4"
              variants={{
                open: { transition: { staggerChildren: 0.05 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
              }}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {navLinks.map((link, index) => (
                <motion.button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-left ${
                    activeSection === link.href.substring(1)
                      ? 'text-primary-600 font-medium bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600'
                  } transition-colors py-2 px-4 rounded-md hover:bg-gray-50`}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: -20 }
                  }}
                >
                  {link.name}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;