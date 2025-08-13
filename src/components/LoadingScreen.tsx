import React from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center zen-gradient"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      onAnimationComplete={onComplete}
    >
      <div className="text-center">
        <motion.div
          className="mb-8"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img 
            src="/image copy.png" 
            alt="The Zen Retreats" 
            className="h-16 w-auto mx-auto"
          />
        </motion.div>
        
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white zen-font mb-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          The Zen Retreats
        </motion.h1>
        
        <motion.p
          className="text-xl text-white/80"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Where tranquility meets luxury
        </motion.p>
        
        <motion.div
          className="mt-8 w-64 h-1 bg-white/30 rounded-full mx-auto overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="h-full bg-white rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, delay: 1.2 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;