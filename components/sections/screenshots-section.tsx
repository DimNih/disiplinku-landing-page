'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, X } from 'lucide-react';

const screenshots = [
  {
    id: 1,
    title: 'Splash Screen',
    description: 'Tampilan awal aplikasi dengan desain menarik dan animasi selamat datang',
    image: '/screenshots/splash.jpg',
    category: 'Splash'
  },
  {
    id: 2,
    title: 'Login',
    description: 'Form login dengan autentikasi yang aman dan cepat',
    image: '/screenshots/login.jpg',
    category: 'Login'
  },
  {
    id: 3,
    title: 'Register',
    description: 'Form pendaftaran untuk pengguna baru dengan validasi lengkap',
    image: '/screenshots/register.jpg',
    category: 'Login'
  },
  {
    id: 4,
    title: 'Verifikasi',
    description: 'Proses verifikasi akun dengan kode OTP untuk keamanan tambahan',
    image: '/screenshots/verification.jpg',
    category: 'Login'
  },
  {
    id: 5,
    title: 'Beranda',
    description: 'Dashboard utama dengan informasi penting dan navigasi yang mudah',
    image: '/screenshots/home.jpg',
    category: 'Home'
  },
  {
    id: 6,
    title: 'Riwayat Tanggal',
    description: 'Daftar riwayat pelanggaran siswa dengan pencarian cepat',
    image: '/screenshots/history-tanggal.jpg',
    category: 'Riwayat'
  },
  {
    id: 7,
    title: 'Riwayat Nama',
    description: 'Daftar riwayat pelanggaran siswa dengan pencarian cepat',
    image: '/screenshots/history-nama.jpg',
    category: 'Riwayat'
  },
  {
    id: 8,
    title: 'Detail Riwayat',
    description: 'Detail lengkap pelanggaran siswa dengan data terperinci',
    image: '/screenshots/history-detail.jpg',
    category: 'Riwayat'
  },
  {
    id: 9,
    title: 'Profil',
    description: 'Tampilan profil pengguna dengan informasi dan riwayat aktivitas',
    image: '/screenshots/profile.jpg',
    category: 'Profil'
  },
  {
    id: 10,
    title: 'Edit Profil',
    description: 'Form untuk mengedit informasi profil pengguna',
    image: '/screenshots/edit-profile.jpg',
    category: 'Profil'
  },
  {
    id: 11,
    title: 'Pengaturan',
    description: 'Pengaturan aplikasi untuk personalisasi dan preferensi pengguna',
    image: '/screenshots/settings.jpg',
    category: 'Setting'
  },
  {
    id: 12,
    title: 'Notifikasi',
    description: 'Sistem notifikasi real-time untuk update dan pengingat',
    image: '/screenshots/notification.jpg',
    category: 'Notifikasi'
  }
];

export function ScreenshotsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<null | typeof screenshots[0]>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: false, timeZone: 'Asia/Jakarta' }));

  const categories = ['All', 'Splash', 'Login', 'Home', 'Riwayat', 'Profil', 'Setting', 'Notifikasi'];

  const filteredScreenshots = selectedCategory === 'All' 
    ? screenshots 
    : screenshots.filter(screenshot => screenshot.category === selectedCategory);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: false, timeZone: 'Asia/Jakarta' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredScreenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredScreenshots.length) % filteredScreenshots.length);
  };

  interface Screenshot {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
  }

  const handleImageClick = (screenshot: Screenshot): void => {
    setSelectedImage(screenshot);
    setZoomLevel(1);
  };

  const imageVariants = {
    initial: { opacity: 0, x: 50, scale: 0.95 },
    animate: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    },
    exit: { 
      opacity: 0, 
      x: -50, 
      scale: 0.95,
      transition: { duration: 0.5, ease: 'easeIn' }
    }
  };

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  };

  return (
    <section id="screenshots" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            TAMPILAN
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              APLIKASI
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Jelajahi fitur-fitur DISIPLINKU melalui tampilan antarmuka yang modern dan intuitif
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentIndex(0);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:text-orange-500 border border-gray-200 hover:border-orange-300'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Main Screenshot Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative mb-8 sm:mb-12"
        >
          <div className="relative bg-gradient-to-br from-orange-500 to-red-500 p-4 sm:p-6 lg:p-8 rounded-3xl shadow-2xl">
            <div className="bg-orange rounded-3xl p-3 sm:p-4 shadow-inner">
              <div className="relative bg-orange rounded-3xl overflow-hidden">
                {/* Phone Frame */}
                <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] mx-auto bg-black rounded-3xl p-2 sm:p-3 relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 sm:w-28 h-6 sm:h-7 bg-black rounded-b-2xl flex items-center justify-center">
                    <div className="w-12 sm:w-17 h-2 sm:h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="bg-white rounded-2xl overflow-hidden mt-6 sm:mt-7">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center px-3 sm:px-4 py-1 sm:py-1.5 bg-orange-500 text-white text-[10px] sm:text-xs font-medium">
                      <span>{currentTime}</span>
                      <span className="font-semibold">PHONE</span>
                      <span>
                        <svg className="w-4 sm:w-5 h-2 sm:h-2.5 inline-block" viewBox="0 0 20 10">
                          <rect x="0" y="2" width="4" height="6" rx="1" fill="white" />
                          <rect x="6" y="1" width="4" height="8" rx="1" fill="white" />
                          <rect x="12" y="0" width="4" height="10" rx="1" fill="white" />
                        </svg>
                      </span>
                    </div>
                    
                    {/* Screenshot Content */}
                    <motion.div
                      key={filteredScreenshots[currentIndex]?.id}
                      variants={imageVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="relative h-96 sm:h-[480px] md:h-[560px] bg-gray-100 cursor-pointer"
                      onClick={() => handleImageClick(filteredScreenshots[currentIndex])}
                    >
                      <img
                        src={filteredScreenshots[currentIndex]?.image}
                        alt={filteredScreenshots[currentIndex]?.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/fallback-image.jpg';
                          console.warn(`Failed to load image: ${filteredScreenshots[currentIndex]?.image}`);
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 text-white">
                        <h3 className="text-sm sm:text-lg font-semibold mb-1">
                          {filteredScreenshots[currentIndex]?.title}
                        </h3>
                        <p className="text-xs sm:text-sm opacity-90">
                          {filteredScreenshots[currentIndex]?.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <motion.button
                  onClick={prevSlide}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft className="w-4 sm:w-6 h-4 sm:h-6" />
                </motion.button>
                <motion.button
                  onClick={nextSlide}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300"
                  aria-label="Next screenshot"
                >
                  <ChevronRight className="w-4 sm:w-6 h-4 sm:h-6" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Thumbnail Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4 mb-8 sm:mb-12"
        >
          {filteredScreenshots.map((screenshot, index) => (
            <motion.div
              key={screenshot.id}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleImageClick(screenshot)}
              className={`cursor-pointer rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${
                index === currentIndex 
                  ? 'ring-2 sm:ring-4 ring-orange-500 shadow-xl' 
                  : 'hover:shadow-xl'
              }`}
            >
              <div className="aspect-[9/16] bg-gray-200">
                <img
                  src={screenshot.image}
                  alt={screenshot.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/fallback-image.jpg';
                    console.warn(`Failed to load image: ${screenshot.image}`);
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Popup */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            >
              <div className="relative bg-white rounded-2xl p-4 sm:p-6 max-w-[90vw] sm:max-w-3xl max-h-[90vh] overflow-auto">
                <motion.button
                  onClick={() => setSelectedImage(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-2 right-2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg"
                  aria-label="Close popup"
                >
                  <X className="w-5 h-5" />
                </motion.button>

                <div className="mb-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{selectedImage.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{selectedImage.description}</p>
                </div>

                <div className="relative overflow-hidden rounded-xl">
                  <motion.img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-auto max-h-[60vh] object-contain"
                    style={{ transform: `scale(${zoomLevel})` }}
                    transition={{ duration: 0.3 }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/fallback-image.jpg';
                      console.warn(`Failed to load image: ${selectedImage.image}`);
                    }}
                  />
                </div>

                <div className="flex justify-center gap-2 sm:gap-4 mt-4">
                  <motion.button
                    onClick={() => setZoomLevel(prev => Math.min(prev + 0.2, 2))}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 sm:px-4 py-2 bg-orange-500 text-white rounded-full flex items-center gap-2"
                    aria-label="Zoom in"
                  >
                    <ZoomIn className="w-4 sm:w-5 h-4 sm:h-5" />
                    Zoom In
                  </motion.button>
                  <motion.button
                    onClick={() => setZoomLevel(prev => Math.max(prev - 0.2, 1))}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 sm:px-4 py-2 bg-orange-500 text-white rounded-full flex items-center gap-2"
                    aria-label="Zoom out"
                  >
                    <ZoomIn className="w-4 sm:w-5 h-4 sm:h-5 transform rotate-180" />
                    Zoom Out
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Inline Styles for iPhone Notch */}
        <style jsx>{`
          .phone-notch {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 100px;
            height: 30px;
            background: black;
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;
            z-index: 10;
          }

          .dynamic-island {
            width: 50px;
            height: 10px;
            background: #333;
            border-radius: 20px;
            margin: auto;
            margin-top: 10px;
          }
        `}</style>
      </div>
    </section>
  );
}