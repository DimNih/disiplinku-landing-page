'use client';

import { motion } from 'framer-motion';
import { Star, Quote, School, Users, Award } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Arman Abdurohman',
    role: 'Testimonial Pengguna',
    school: 'SMK Cibitung 1',
    content: 'Aplikasi Terbagus, Melebihi ShoopePay Nih Aplikasi, Jos Pokoknya.',
    rating: 5,
    image: "/testimonials/arman.png",
    stats: { students: '1200+', teachers: 20 }
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-orange-50">
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
            TESTIMONI
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
            Pendidik
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dengarkan pengalaman langsung dari para pendidik yang telah 
            merasakan manfaat DISIPLINKU di sekolah mereka
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
            <div className="inline-flex p-4 bg-orange-100 rounded-full mb-4">
              <School className="w-8 h-8 text-orange-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">1</div>
            <div className="text-gray-600">Sekolah Terdaftar</div>
          </div>
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
            <div className="inline-flex p-4 bg-orange-100 rounded-full mb-4">
              <Users className="w-8 h-8 text-orange-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">30+</div>
            <div className="text-gray-600">Osis Aktif</div>
          </div>
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
            <div className="inline-flex p-4 bg-orange-100 rounded-full mb-4">
              <Award className="w-8 h-8 text-orange-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
            <div className="text-gray-600">Rating Pengguna</div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-orange-200">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Profile */}
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-orange-500 text-sm font-medium">{testimonial.role}</div>
                  <div className="text-gray-500 text-sm">{testimonial.school}</div>
                </div>
              </div>

              {/* School Stats */}
              <div className="flex justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                <span>{testimonial.stats.students} Siswa</span>
                <span>{testimonial.stats.teachers} Guru</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}