'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Star } from 'lucide-react';
import { AnimatedCounter } from '@/components/ui/animated-counter';

export function HeroSection() {
  // Animation variants for the phone mockup
  const phoneVariants = {
    initial: { opacity: 0, x: 50, scale: 0.8 },
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: 0.2,
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
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-100/30 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-orange-50/50 to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-red-50/50 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center min-h-[calc(100vh-80px)]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-orange-100 text-orange-800 rounded-full text-xs sm:text-sm font-medium"
              whileHover={{ scale: 1.05 }}
            >
              <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 fill-current" />
              #1 Aplikasi Manajemen Disiplin Sekolah
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-3 sm:space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                <motion.span
                  className="block"
                  whileHover={{ x: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  Aplikasi
                </motion.span>
                <motion.span
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500"
                  animate={{ backgroundPosition: ['0%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  style={{ backgroundSize: '200%' }}
                >
                  DISIPLINKU
                </motion.span>
                <motion.span
                  className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                  whileHover={{ x: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  Digital Era
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl"
              >
                Aplikasi Android terdepan untuk mencatat, memantau, dan mengelola pelanggaran siswa 
                dengan sistem terintegrasi yang mudah digunakan oleh guru dan staff sekolah.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-3 gap-4 sm:gap-6"
            >
              <div className="text-center">
                <motion.div
                  className="text-xl sm:text-2xl font-bold text-orange-500"
                  whileHover={{ scale: 1.1 }}
                >
                  <AnimatedCounter end={1} />
                </motion.div>
                <div className="text-xs sm:text-sm text-gray-600">Sekolah</div>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-xl sm:text-2xl font-bold text-orange-500"
                  whileHover={{ scale: 1.1 }}
                >
                  <AnimatedCounter end={30} suffix="+" />
                </motion.div>
                <div className="text-xs sm:text-sm text-gray-600">Osis</div>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-xl sm:text-2xl font-bold text-orange-500"
                  whileHover={{ scale: 1.1 }}
                >
                  <AnimatedCounter end={20} suffix="+" />
                </motion.div>
                <div className="text-xs sm:text-sm text-gray-600">Guru</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <motion.a
                href="/app.apk"
                download
                whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-base sm:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <Download className="mr-2 w-4 sm:w-5 h-4 sm:h-5" />
                Download Gratis
                <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="https://adminku-web.vercel.app/login"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-base sm:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                Demo Admin Web
                <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Phone Image */}
          <motion.div
            variants={phoneVariants}
            initial="initial"
            animate={['animate', 'float']}
            className="flex justify-center lg:justify-end relative"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl transform -rotate-6 scale-110 opacity-30" />
              <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-3xl transform rotate-3 scale-105 shadow-xl" />
              
              {/* Border Decoration */}
              <div className="absolute inset-0 border-4 border-orange-500/20 rounded-3xl transform -rotate-3" />
              <div className="absolute inset-0 border-2 border-red-500/20 rounded-3xl transform rotate-6" />
              
              {/* Phone Mockup */}
              <motion.div
                className="relative z-10 p-4 sm:p-6 bg-white rounded-3xl shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <motion.img
                  src="/Mockup.jpg"
                  alt="Phone Mockup"
                  className="w-full h-auto object-contain rounded-2xl"
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
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-orange-500 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 sm:h-3 bg-orange-500 rounded-full mt-1 sm:mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}