'use client';

import { motion } from 'framer-motion';
import { 
  Shield, 
  Users, 
  BarChart3, 
  Bell, 
  FileText, 
  Camera,
  Database
} from 'lucide-react';

const features = [
  {
    icon: <FileText className="w-8 h-8" />,
    title: 'Pencatatan Digital',
    description: 'Catat pelanggaran siswa dengan mudah dan cepat menggunakan form digital yang user-friendly.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: 'Foto Bukti',
    description: 'Lampirkan foto sebagai bukti pelanggaran untuk dokumentasi yang lebih akurat.',
    color: 'from-red-500 to-pink-500'
  },
  {
    icon: <Bell className="w-8 h-8" />,
    title: 'Notifikasi Real-time',
    description: 'Dapatkan notifikasi instan ketika ada pelanggaran baru atau update status.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Keamanan Data',
    description: 'Data siswa terlindungi dengan enkripsi tingkat tinggi dan backup otomatis.',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'Sinkronisasi Firebase',
    description: 'Data tersinkronisasi otomatis dengan Firebase untuk akses cepat dan aman dari berbagai perangkat.',
    color: 'from-rose-500 to-pink-500'
  }
];

// Animation variants for the header
const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// Animation variants for feature cards
const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: index * 0.1,
    },
  }),
  hover: {
    scale: 1.05,
    boxShadow: '0 10px 20px rgba(0,0,0,0.15)',
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

// Animation variants for the icon
const iconVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.2,
    rotate: 5,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            FITUR UNGGULAN
            <motion.span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500"
              animate={{ backgroundPosition: ['0%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              style={{ backgroundSize: '200%' }}
            >
              DISIPLINKU
            </motion.span>
          </h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Dilengkapi dengan fitur-fitur canggih yang dirancang khusus untuk memudahkan 
            pengelolaan disiplin siswa di era digital
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover="hover"
              className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <motion.div
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
                className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-4`}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}