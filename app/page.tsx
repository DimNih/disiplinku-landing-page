'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { ScreenshotsSection } from '@/components/sections/screenshots-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { useVisitorCount } from '@/hooks/useVisitorCount';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const visitorCount = useVisitorCount();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const loaderVariants = {
    initial: { opacity: 1, scale: 1 },
    exit: {
      opacity: 0,
      scale: 1.2,
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
  };

  const logoVariants = {
    animate: {
      scale: [1, 1.05, 1],
      rotate: [0, 5, -5, 0],
      filter: ['brightness(1)', 'brightness(1.2)', 'brightness(1)'],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const progressBarVariants = {
    initial: { width: '0%' },
    animate: {
      width: '100%',
      transition: { duration: 2.5, ease: 'easeInOut' },
    },
  };

  const particleVariants = {
    animate: {
      y: [0, -10, 0],
      opacity: [0, 0.5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: Math.random() * 2,
      },
    },
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            variants={loaderVariants}
            initial="initial"
            exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-orange-500 to-red-500 overflow-hidden"
          >
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  variants={particleVariants}
                  animate="animate"
                  className="absolute w-2 h-2 bg-white rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>

            <div className="relative flex flex-col items-center gap-6 z-10">
              <motion.div
                variants={logoVariants}
                animate="animate"
                className="flex items-center gap-4"
              >
                <img
                  src="/logo.png"
                  alt="DISIPLINKU Logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-lg"
                />
              </motion.div>

              <motion.div className="w-48 sm:w-64 h-2 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  variants={progressBarVariants}
                  initial="initial"
                  animate="animate"
                  className="h-full bg-white"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-white text-sm sm:text-base font-medium"
              >
                Memuat...
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
        transition={{ duration: 0.6, delay: isLoading ? 0 : 0.8 }}
        className="min-h-screen bg-white"
      >
        <Navigation />
        <main>
          <HeroSection visitorCount={visitorCount} />
          <FeaturesSection />
          <ScreenshotsSection />
          <TestimonialsSection />

          <div className="text-center py-8 text-gray-700">
            <p className="text-sm sm:text-base">
              👥 <span className="font-medium">Orang yang melihat web ini:</span>{' '}
              <span className="font-bold text-orange-600">{visitorCount}</span>
            </p>
          </div>
        </main>
        <Footer />
      </motion.div>
    </>
  );
}
