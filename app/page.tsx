'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { ScreenshotsSection } from '@/components/sections/screenshots-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (replace with actual data fetching if needed)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds for demo to showcase animations

    return () => clearTimeout(timer);
  }, []);

  // Loading animation variants
  const loaderVariants = {
    initial: { opacity: 1, scale: 1 },
    exit: { 
      opacity: 0,
      scale: 1.2,
      transition: { duration: 0.8, ease: 'easeInOut' }
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
      transition: {
        duration: 2.5,
        ease: 'easeInOut',
      },
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
      {/* Loading Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            variants={loaderVariants}
            initial="initial"
            exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-orange-500 to-red-500 overflow-hidden"
          >
            {/* Background Particles */}
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
              {/* Logo with Glowing Animation */}
              <motion.div
                variants={logoVariants}
                animate="animate"
                className="flex items-center gap-4"
              >
                <img
                  src="/logo.png"
                  alt="DISIPLINKU Logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-lg"
                  onError={() => console.warn('Logo failed to load')}
                />
               
              </motion.div>

              {/* Progress Bar */}
              <motion.div
                className="w-48 sm:w-64 h-2 bg-white/20 rounded-full overflow-hidden"
              >
                <motion.div
                  variants={progressBarVariants}
                  initial="initial"
                  animate="animate"
                  className="h-full bg-white"
                />
              </motion.div>

              {/* Minimal Loading Text */}
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

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
        transition={{ duration: 0.6, delay: isLoading ? 0 : 0.8 }}
        className="min-h-screen bg-white"
      >
        <Navigation />
        <main>
          <HeroSection />
          <FeaturesSection />
          <ScreenshotsSection />
          <TestimonialsSection />
        </main>
        <Footer />
      </motion.div>

      {/* Inline CSS for Shimmer Effect */}
      <style jsx>{`
        .shimmer-text {
          background: linear-gradient(
            90deg,
            #ffffff 25%,
            #f0f0f0 50%,
            #ffffff 75%
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
      `}</style>
    </>
  );
}