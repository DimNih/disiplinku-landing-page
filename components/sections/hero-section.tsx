'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Download, Star, X } from 'lucide-react';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { useRef, useState } from 'react';

export function HeroSection() {
  // State for popup visibility
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // Reference to the hidden download link
  const downloadRef = useRef<HTMLAnchorElement>(null);
  // Reference to the section for scroll tracking
  const sectionRef = useRef(null);

  // Track scroll progress within the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Transform scroll progress for smoother animations
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.7], [1, 0]), {
    stiffness: 100,
    damping: 30,
  });
  const yLeft = useSpring(useTransform(scrollYProgress, [0, 0.7], [0, 100]), {
    stiffness: 100,
    damping: 30,
  });
  const yRight = useSpring(useTransform(scrollYProgress, [0, 0.7], [0, -100]), {
    stiffness: 100,
    damping: 30,
  });
  const scalePhone = useSpring(useTransform(scrollYProgress, [0, 0.7], [1, 0.8]), {
    stiffness: 100,
    damping: 30,
  });

  // Animation variants for the phone mockup
  const phoneVariants = {
    initial: { opacity: 0, x: 60, scale: 0.7 },
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: 0.4,
      },
    },
    float: {
      y: [-10, 0, -10],
      rotate: [-1, 1, -1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    hover: {
      scale: 1.05,
      rotate: 2,
      transition: {
        type: 'spring',
        stiffness: 250,
        damping: 20,
      },
    },
  };

  // Background circle animation
  const circleVariants = {
    animate: {
      scale: [1, 1.15, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 7,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
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

  // Function to handle WhatsApp click and download
  const handleWhatsAppClick = () => {
    if (downloadRef.current) {
      downloadRef.current.click();
    }
    setIsPopupOpen(false);
  };

  return (
    <>
      <section
        ref={sectionRef}
        className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden"
      >
        {/* Background Decorations */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-100/40 via-transparent to-transparent"
            variants={circleVariants}
            animate="animate"
          />
          <motion.div
            className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-orange-50/60 to-transparent"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-red-50/60 to-transparent"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-10 sm:pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 items-center min-h-[calc(100vh-64px)]">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut', staggerChildren: 0.15 }}
              style={{ opacity, y: yLeft }}
              className="space-y-5 sm:space-y-7"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="inline-flex items-center mt-10 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-orange-100 text-orange-800 rounded-full text-xs sm:text-sm font-medium"
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-1.5 fill-current" />
                #1 Aplikasi Manajemen Disiplin Sekolah
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-2 sm:space-y-3">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                >
                  <motion.span
                    className="block"
                    whileHover={{ x: 10, color: '#f97316' }}
                    transition={{ type: 'spring', stiffness: 250 }}
                  >
                    Aplikasi
                  </motion.span>
                  <motion.span
                    className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500"
                    animate={{ backgroundPosition: ['0%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    style={{ backgroundSize: '200%' }}
                  >
                    DISIPLINKU
                  </motion.span>
                  <motion.span
                    className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl"
                    whileHover={{ x: 10, color: '#f97316' }}
                    transition={{ type: 'spring', stiffness: 250 }}
                  >
                    Digital Era
                  </motion.span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-xl"
                  whileHover={{ color: '#374151' }}
                >
                  Aplikasi Android terdepan untuk mencatat, memantau, dan mengelola pelanggaran siswa
                  yang mudah digunakan oleh guru dan Osis di sekolah.
                </motion.p>
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="grid grid-cols-3 gap-3 sm:gap-5"
              >
                <motion.div
                  className="text-center"
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <motion.div
                    className="text-lg sm:text-xl font-bold text-orange-500"
                    whileHover={{ scale: 1.1 }}
                  >
                    <AnimatedCounter end={1} />
                  </motion.div>
                  <div className="text-xs sm:text-sm text-gray-600">Sekolah</div>
                </motion.div>
                <motion.div
                  className="text-center"
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <motion.div
                    className="text-lg sm:text-xl font-bold text-orange-500"
                    whileHover={{ scale: 1.1 }}
                  >
                    <AnimatedCounter end={30} suffix="+" />
                  </motion.div>
                  <div className="text-xs sm:text-sm text-gray-600">Osis</div>
                </motion.div>
                <motion.div
                  className="text-center"
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <motion.div
                    className="text-lg sm:text-xl font-bold text-orange-500"
                    whileHover={{ scale: 1.1 }}
                  >
                    <AnimatedCounter end={20} suffix="+" />
                  </motion.div>
                  <div className="text-xs sm:text-sm text-gray-600">Guru</div>
                </motion.div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-2 sm:gap-3"
              >
                <motion.button
                  onClick={() => setIsPopupOpen(true)}
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.2)', backgroundPosition: '100%' }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
                  style={{ backgroundSize: '200%' }}
                  animate={{ backgroundPosition: ['0%', '100%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                >
                  <Download className="mr-1.5 w-3.5 sm:w-4 h-3.5 sm:h-4 group-hover:-rotate-12 transition-transform" />
                  Download Gratis
                  <ArrowRight className="ml-1.5 w-3.5 sm:w-4 h-3.5 sm:h-4 group-hover:translate-x-1.5 transition-transform" />
                </motion.button>
                <motion.a
                  href="https://adminku-web.vercel.app/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.2)', backgroundPosition: '100%' }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
                  style={{ backgroundSize: '200%' }}
                  animate={{ backgroundPosition: ['0%', '100%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                >
                  Demo Admin Web
                  <ArrowRight className="ml-1.5 w-3.5 sm:w-4 h-3.5 sm:h-4 group-hover:translate-x-1.5 transition-transform" />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Content - Phone Image */}
            <motion.div
              variants={phoneVariants}
              initial="initial"
              animate={['animate', 'float']}
              whileHover="hover"
              style={{ opacity, y: yRight, scale: scalePhone }}
              className="flex justify-center lg:justify-end relative mt-6 sm:mt-0"
            >
              <div className="relative w-full max-w-[70%] sm:max-w-xs md:max-w-sm">
                {/* Decorative Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl transform -rotate-6 scale-110 opacity-30"
                  animate={{ rotate: [-6, -4, -6], scale: [1.1, 1.15, 1.1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-3xl transform rotate-3 scale-105 shadow-xl"
                  animate={{ rotate: [3, 5, 3], scale: [1.05, 1.1, 1.05] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                />
                
                {/* Border Decoration */}
                <motion.div
                  className="absolute inset-0 border-4 border-orange-500/20 rounded-3xl transform -rotate-3"
                  animate={{ rotate: [-3, -1, -3] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute inset-0 border-2 border-red-500/20 rounded-3xl transform rotate-6"
                  animate={{ rotate: [6, 8, 6] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                />
                
                {/* Phone Mockup */}
                <motion.div
                  className="relative z-10 p-3 sm:p-5 bg-white rounded-3xl shadow-2xl"
                  whileHover={{ scale: 1.08, rotate: 3, boxShadow: '0 15px 30px rgba(0,0,0,0.25)' }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <motion.img
                    src="/Mockup.jpg"
                    alt="Phone Mockup"
                    className="w-full h-auto object-contain rounded-2xl"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          style={{ opacity }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-4 h-7 sm:w-5 sm:h-8 border-2 border-orange-500 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-2 sm:h-2.5 bg-orange-500 rounded-full mt-1 sm:mt-1.5"
            />
          </motion.div>
        </motion.div>
      </section>

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

      {/* Reduced Motion Styles */}
      <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          .motion-div,
          .motion-button,
          .motion-a,
          .motion-h1,
          .motion-h2,
          .motion-p,
          .motion-img,
          .motion-span {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
}