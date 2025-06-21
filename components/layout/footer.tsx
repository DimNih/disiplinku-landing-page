'use client';

import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Youtube,
  Instagram, 
  Download,
  ExternalLink,
} from 'lucide-react';

export function Footer() {
  const footerLinks = {
    product: [
      { name: 'Fitur', href: '#features' },
      { name: 'Screenshots', href: '#screenshots' },
      { name: 'Testimoni', href: '#testimonials' },

    ],
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: 'https://web.facebook.com/cibitung1smk/?_rdc=1&_rdr#', name: 'Facebook' },
    { icon: <Youtube className="w-5 h-5" />, href: 'https://www.youtube.com/channel/UCnYI3wv_TIb9oDulmHiQe9w', name: 'Youtube' },
    { icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/smkcibitung1/', name: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-orange-500">Menu</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Info (Centered) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                DISIPLINKU
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Platform digital terdepan untuk mencatat, memantau, dan mengelola pelanggaran siswa 
              dengan sistem yang terintegrasi dan mudah digunakan.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-3 text-orange-500" />
                <span className="text-sm">mydisiplinkuapp@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-3 text-orange-500" />
                <span className="text-sm">+62 815 8526 1728</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-3 text-orange-500" />
                <span className="text-sm">Bekasi, Indonesia</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 rounded-full flex items-center justify-center transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Empty column for balance */}
          <div></div>
        </div>

     
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 text-sm mb-4 md:mb-0"
            >
              © 2025 DISIPLINKU. Semua hak dilindungi undang-undang.
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-4"
            >
              <span className="text-gray-400 text-sm">Dibuat dengan TIM DISIPLINKU di Indonesia</span>
            
             
              
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}