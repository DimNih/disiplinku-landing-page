'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const downloadRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Handle scroll for navigation blur effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Set initial active section based on URL hash
    const initialHash = window.location.hash;
    if (['#features', '#screenshots', '#testimonials'].includes(initialHash)) {
      setActiveSection(initialHash);
      console.log(`Initial active section from URL: ${initialHash}`);
    }

    // IntersectionObserver to detect active section
    const sections = document.querySelectorAll('#features, #screenshots, #testimonials');
    if (sections.length === 0) {
      console.warn('No sections found with IDs: #features, #screenshots, #testimonials');
    }

    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let mostVisibleSection = null;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisibleSection = `#${entry.target.id}`;
          }
        });

        if (mostVisibleSection) {
          setActiveSection(mostVisibleSection);
          console.log(`Active section: ${mostVisibleSection} (ratio: ${maxRatio})`);
        }
      },
      {
        threshold: [0.1], // Trigger when 10% of the section is visible
        rootMargin: '-100px 0px -100px 0px', // Account for nav bar and bottom visibility
      }
    );

    // Observe sections with a delay to ensure DOM is ready
    const observeSections = () => {
      const updatedSections = document.querySelectorAll('#features, #screenshots, #testimonials');
      updatedSections.forEach((section) => {
        observer.observe(section);
        console.log(`Observing section: #${section.id}`);
      });
    };

    // Delay observation to ensure sections are rendered
    const timeoutId = setTimeout(observeSections, 100);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, []);

  const navItems = [
    { href: '#features', label: 'Fitur' },
    { href: '#screenshots', label: 'Screenshots' },
    { href: '#testimonials', label: 'Testimoni' },
  ];

  interface NavItem {
    href: string;
    label: string;
  }

  interface HandleLinkClickEvent extends React.MouseEvent<HTMLAnchorElement, MouseEvent> {}

  const handleLinkClick = (e: HandleLinkClickEvent, href: string): void => {
    e.preventDefault();
    setIsMenuOpen(false); // Close menu immediately
    setActiveSection(href); // Set active section

    // Delay scroll to allow menu animation to complete
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.warn(`Target element ${href} not found. Ensure the section exists with the correct ID.`);
      }
    }, 300); // Match animation duration
  };

  // Function to handle WhatsApp click and download
  const handleWhatsAppClick = () => {
    // Trigger download by simulating click on hidden link
    if (downloadRef.current) {
      downloadRef.current.click();
    }
    // Close popup
    setIsPopupOpen(false);
  };

  // Popup animation variants with reduced motion support
  const popupVariants = {
    hidden: { opacity: 0, y: '100%', scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
        when: 'beforeChildren',
      },
    },
    exit: {
      opacity: 0,
      y: '100%',
      scale: 0.95,
      transition: { duration: 0.2, ease: 'easeIn' },
    },
  };

  // Backdrop animation
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/70 backdrop-blur-lg shadow-md border-b border-orange-100'
            : 'bg-transparent backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <div className="flex-shrink-0 flex items-center gap-2 sm:gap-3">
                <img
                  src="/logo.png"
                  alt="DISIPLINKU Logo"
                  className="w-8 h-8 sm:w-9 lg:w-10 sm:h-9 lg:h-10 object-contain"
                />
                <span className="text-lg sm:text-xl lg:text-2xl font-bold shimmer-text">
                  DISIPLINKU
                </span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  scroll={true}
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  <motion.span
                    whileHover={{ scale: 1.05, color: '#f97316' }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-3 py-2 text-sm lg:text-base font-medium transition-colors relative ${
                      activeSection === item.href
                        ? 'text-orange-500 font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-orange-500'
                        : scrolled
                        ? 'text-gray-700 hover:text-orange-500'
                        : 'text-gray-800 hover:text-orange-500'
                    }`}
                  >
                    {item.label}
                  </motion.span>
                </Link>
              ))}
              <motion.button
                onClick={() => setIsPopupOpen(true)}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 16px rgba(0,0,0,0.15)' }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex items-center"
              >
                <Download className="mr-1.5 sm:mr-2 w-4 sm:w-5 h-4 sm:h-5" />
                Download
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg transition-colors ${
                  scrolled
                    ? 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
                    : 'text-gray-800 hover:text-orange-500 hover:bg-white/10'
                }`}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/90 backdrop-blur-lg border-t border-orange-100 overflow-hidden"
            >
              <div className="px-4 pt-4 pb-6 space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    scroll={true}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="block"
                  >
                    <motion.span
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                      className={`text-gray-700 hover:text-orange-500 hover:bg-orange-50 block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                        activeSection === item.href ? 'text-orange-500 font-bold bg-orange-50' : ''
                      }`}
                    >
                      {item.label}
                    </motion.span>
                  </Link>
                ))}
                <motion.button
                  onClick={() => setIsPopupOpen(true)}
                  whileHover={{ scale: 1.05, boxShadow: '0 8px 16px rgba(0,0,0,0.15)' }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-xl text-base font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center w-full"
                >
                  <Download className="mr-2 w-5 h-5" />
                  Download
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hidden Download Link */}
      <a
        ref={downloadRef}
        href="/Disiplinku.apk"
        download
        style={{ display: 'none' }}
      />

      {/* Popup */}
      <motion.div
        className={`fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 transition-opacity duration-300 ${
          isPopupOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        variants={backdropVariants}
        initial="hidden"
        animate={isPopupOpen ? 'visible' : 'hidden'}
        onClick={() => setIsPopupOpen(false)}
      >
        <motion.div
          className="relative bg-white rounded-t-2xl sm:rounded-2xl p-4 sm:p-6 w-full max-w-md sm:max-w-lg shadow-2xl sm:shadow-lg flex flex-col gap-4 sm:gap-6"
          variants={popupVariants}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drag Handle for Mobile */}
          <div className="flex justify-center sm:hidden">
            <div className="w-10 h-1.5 bg-gray-300 rounded-full" />
          </div>

          {/* Close Button */}
          <motion.button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsPopupOpen(false)}
          >
            <X className="w-5 h-5" />
          </motion.button>

          {/* Popup Content */}
          <div className="text-center space-y-3 sm:space-y-4">
            <motion.h2
              className="text-lg sm:text-xl font-bold text-gray-900"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              Mohon Izin Ke Admin
            </motion.h2>
            <motion.p
              className="text-xs sm:text-sm text-gray-600 leading-relaxed"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Silakan hubungi admin untuk mendapatkan izin download aplikasi Disiplinku.
            </motion.p>
            <motion.div
              className="bg-orange-100 text-orange-800 px-3 py-2 rounded-lg text-xs sm:text-sm inline-flex items-center flex-wrap justify-center gap-2"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="font-semibold">Admin: Dimas</span>
              <span>WhatsApp: 081585261728</span>
            </motion.div>
            <motion.a
              href="https://wa.me/6281585261728?text=Saya%20Izin%20Download%20Aplikasi%20Nya%20Bang"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="group inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-semibold shadow-md hover:shadow-lg w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Hubungi via WhatsApp
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Inline CSS for shimmer effect and reduced motion */}
      <style jsx>{`
        .shimmer-text {
          background: linear-gradient(
            90deg,
            #f97316 25%,
            #ef4444 50%,
            #f97316 75%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: shimmer 2.5s linear infinite;
        }

        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        /* Ensure body scroll is not locked */
        body {
          overflow: auto !important;
        }

        /* Reduced motion styles */
        @media (prefers-reduced-motion: reduce) {
          .motion-div,
          .motion-button,
          .motion-a,
          .motion-h2,
          .motion-p,
          .motion-span {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
}