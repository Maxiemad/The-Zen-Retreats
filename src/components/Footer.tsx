import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <motion.div
            className="flex items-center justify-center space-x-2 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="/d89015fd-5281-4afb-8cb0-c2b1a658c0bc.png" 
              alt="The Zen Retreats" 
              className="h-10 w-auto"
            />
          </motion.div>

          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://instagram.com/thezen.retreats"
              className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram className="w-6 h-6 text-white" />
            </motion.a>
          </motion.div>

          <motion.div
            className="space-y-4 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300">
              For booking inquiries or additional details, Email us at{' '}
              <a 
                href="mailto:info@thezenretreats.com" 
                className="text-emerald-400 hover:text-emerald-300 transition-colors underline"
              >
                info@thezenretreats.com
              </a>
            </p>
          </motion.div>

          <motion.div
            className="border-t border-gray-800 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-sm mb-2">
              Copyright © 2023 The Zen Retreats, LLC. All rights reserved.
            </p>
            <motion.p 
              className="text-gray-400 text-sm flex items-center justify-center space-x-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              
            </motion.p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;