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

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            FITUR UNGGULAN
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              DISIPLINKU
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dilengkapi dengan fitur-fitur canggih yang dirancang khusus untuk memudahkan 
            pengelolaan disiplin siswa di era digital
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
       
        </motion.div>
      </div>
    </section>
  );
}