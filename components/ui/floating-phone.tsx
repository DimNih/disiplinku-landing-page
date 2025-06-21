'use client';

import { motion } from 'framer-motion';
import { Smartphone } from 'lucide-react';

export function FloatingPhone() {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="relative"
    >
      <div className="bg-gradient-to-br from-orange-500 to-red-500 p-8 rounded-3xl shadow-2xl">
        <div className="bg-black rounded-2xl p-1 shadow-inner">
          <div className="bg-white rounded-xl overflow-hidden">
            {/* Phone Screen */}
            <div className="w-64 h-96 bg-gradient-to-b from-orange-50 to-white relative">
              {/* Status Bar */}
              <div className="flex justify-between items-center px-4 py-2 bg-orange-500 text-white text-xs">
                <span>9:41</span>
                <span>DISIPLINKU</span>
                <span>100%</span>
              </div>
              
              {/* App Content */}
              <div className="p-4 space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                  </div>
                  <div>
                    <div className="h-3 bg-gray-300 rounded w-20 mb-1"></div>
                    <div className="h-2 bg-gray-200 rounded w-16"></div>
                  </div>
                </div>
                
                <div className="bg-orange-100 rounded-lg p-3">
                  <div className="h-2 bg-orange-300 rounded w-full mb-2"></div>
                  <div className="h-2 bg-orange-200 rounded w-3/4"></div>
                </div>
                
                <div className="space-y-2">
                  <div className="h-8 bg-gray-100 rounded"></div>
                  <div className="h-8 bg-gray-100 rounded"></div>
                  <div className="h-8 bg-orange-100 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}