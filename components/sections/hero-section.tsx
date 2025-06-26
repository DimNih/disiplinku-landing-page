'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Star, X } from 'lucide-react';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { useRef, useState } from 'react';

export function HeroSection() {
  // State for popup visibility
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // Reference to the hidden download link
  const downloadRef = useRef<HTMLAnchorElement>(null);

  // Animation variants for content
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  // Animation variants for phone mockup
  const phoneVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: 0.2,
      },
    },
    hover: {
      scale: 1.05,
      rotate: 2,
      transition: { duration: 0.3 },
    },
  };

  // Background gradient animation
  const backgroundVariants = {
    initial: { backgroundPosition: '0% 50%' },
    animate: {
      backgroundPosition: '200% 50%',
      transition: {
        duration: 15,
        ease: ["linear"],
        repeat: Infinity,
        repeatType: "reverse" as "reverse",
      },
    },
  };

  // Particle animation for decorative elements
  const particleVariants = {
    initial: { opacity: 0, y: 50, scale: 0.5 },
    animate: (i: number) => ({
      opacity: [0.2, 0.8, 0.2],
      y: [50, -50, 50],
      scale: [0.5, 1, 0.5],
      transition: {
        duration: 3 + i * 0.5,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: i * 0.2,
      },
    }),
  };

  // Popup animation variants
  const popupVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
  };

  // Function to handle WhatsApp click and download
  const handleWhatsAppClick = () => {
    if (downloadRef.current) {
      downloadRef.current.click();
    }
    setIsPopupOpen(false);
  };

  return (
    <motion.section
      className="relative min-h-screen mt-5 bg-gradient-to-b from-white via-orange-50 to-gray-50 flex items-center overflow-hidden"
      variants={backgroundVariants}
      initial="initial"
      animate="animate"
      style={{
        background: 'linear-gradient(90deg, #ffffff, #fef3e7, #f0f0f0, #ffffff)',
        backgroundSize: '200% 200%',
      }}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6 sm:space-y-8 z-10"
          >
            {/* Badge */}
            <motion.div
              variants={contentVariants}
              className="inline-flex items-center px-3 py-1.5 bg-orange-100 text-orange-800 rounded-full text-xs sm:text-sm font-medium"
            >
              <Star className="w-4 h-4 mr-1.5 fill-current" />
              #1 Aplikasi Manajemen Disiplin Sekolah
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={contentVariants}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
            >
              <span className="block">Aplikasi</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                DISIPLINKU
              </span>
              <span className="block text-xl sm:text-2xl md:text-3xl">Digital Era</span>
            </motion.h1>

            <motion.p
              variants={contentVariants}
              className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-md sm:max-w-lg"
            >
              Aplikasi Android terdepan untuk mencatat, memantau, dan mengelola pelanggaran siswa 
              yang mudah digunakan oleh guru dan Osis di sekolah.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={contentVariants}
              className="grid grid-cols-3 gap-4 sm:gap-6"
            >
              <div className="text-center">
                <div className="text-lg sm:text-xl font-bold text-orange-500">
                  <AnimatedCounter end={1} />
                </div>
                <div className="text-xs sm:text-sm text-gray-600">Sekolah</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl font-bold text-orange-500">
                  <AnimatedCounter end={30} suffix="+" />
                </div>
                <div className="text-xs sm:text-sm text-gray-600">Osis</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl font-bold text-orange-500">
                  <AnimatedCounter end={20} suffix="+" />
                </div>
                <div className="text-xs sm:text-sm text-gray-600">Guru</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={contentVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <motion.button
                onClick={() => setIsPopupOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-semibold shadow-md hover:shadow-lg flex items-center justify-center"
              >
                <Download className="mr-1.5 w-4 h-4" />
                Download Gratis
                <ArrowRight className="ml-1.5 w-4 h-4" />
              </motion.button>
              <motion.a
                href="https://adminku-web.vercel.app/login"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-semibold shadow-md hover:shadow-lg flex items-center justify-center"
              >
                Demo Admin Web
                <ArrowRight className="ml-1.5 w-4 h-4" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Phone Mockup with Decorative Elements */}
          <motion.div
            variants={phoneVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex justify-center lg:justify-end mt-8 sm:mt-0"
          >
            <div className="relative w-full max-w-[80%] sm:max-w-[70%] md:max-w-sm">
              {/* Background Decorative Circle */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-200/30 to-red-200/30 rounded-full blur-3xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.5, scale: 1.2 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
              />

              {/* Floating Particles */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-orange-400 rounded-full"
                  style={{
                    width: Math.random() * 8 + 4,
                    height: Math.random() * 8 + 4,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  variants={particleVariants}
                  initial="initial"
                  animate="animate"
                  custom={i}
                />
              ))}

              {/* Phone Mockup */}
              <motion.img
                src="/Mockup.jpg"
                alt="Phone Mockup"
                className="relative w-full h-auto object-contain rounded-2xl shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-4 h-7 border-2 border-orange-500 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-2 bg-orange-500 rounded-full mt-1"
          />
        </motion.div>
      </motion.div>

      {/* Hidden Download Link */}
      <a
        ref={downloadRef}
        href="/Disiplinku.apk"
        download
        style={{ display: 'none' }}
      />

      {/* Popup */}
      <AnimatePresence>
        {isPopupOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4 sm:px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsPopupOpen(false)}
          >
            <motion.div
              className="relative bg-white rounded-2xl p-4 sm:p-6 max-w-[90vw] sm:max-w-md w-full shadow-xl"
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsPopupOpen(false)}
              >
                <X className="w-5 h-5" />
              </motion.button>

              {/* Popup Content */}
              <div className="text-center space-y-3 sm:space-y-4">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                  Mohon Izin Ke Admin
                </h2>
                <p className="text-xs sm:text-sm text-gray-600">
                  Silakan hubungi admin untuk mendapatkan izin download aplikasi Disiplinku.
                </p>
                <div className="bg-orange-100 text-orange-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg inline-flex items-center text-xs sm:text-sm">
                  <span className="font-semibold">Admin: Dimas</span>
                  <span className="ml-2">WhatsApp: 081585261728</span>
                </div>
                <motion.a
                  href="https://wa.me/6281585261728?text=Saya%20Izin%20Download%20Aplikasi%20Nya%20Bang"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppClick}
                  className="group inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm font-semibold shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Hubungi via WhatsApp
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}