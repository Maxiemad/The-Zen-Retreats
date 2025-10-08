import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, MapPin, Users, Star } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import TypewriterText from './TypewriterText';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden parallax-bg"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url('/frontbg.jpg')`
      }}
    >
      <div className="absolute inset-0">
        {/* Enhanced floating particles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 0,
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/40 rounded-full"
          animate={{
            y: [0, -15, 0],
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-white/20 rounded-full"
          animate={{
            y: [0, -25, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 2,
          }}
        />
        
        {/* Additional floating elements */}
        <motion.div
          className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-emerald-300/40 rounded-full"
          animate={{
            y: [0, -30, 0],
            x: [0, 10, 0],
            opacity: [0.2, 0.8, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-2.5 h-2.5 bg-teal-300/30 rounded-full"
          animate={{
            y: [0, -20, 0],
            x: [0, -15, 0],
            opacity: [0.3, 0.9, 0.3],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            delay: 1.5,
          }}
        />
        <motion.div
          className="absolute top-2/3 left-1/5 w-1 h-1 bg-white/50 rounded-full"
          animate={{
            y: [0, -35, 0],
            opacity: [0.4, 1, 0.4],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            delay: 2.5,
          }}
        />
      </div>

      <div ref={ref} className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white cursive-font mb-6 text-shadow">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-wrap justify-center items-center gap-2"
            >
              <TypewriterText
                text="The "
                speed={150}
                delay={500}
                className="zen-text-gradient bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent font-bold"
              />
              <TypewriterText
                text="Zen Retreats"
                speed={150}
                delay={2000}
                className="zen-text-gradient bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent font-bold"
              />
            </motion.div>
          </h1>

          <motion.p
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 text-shadow"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Two magnificent houses with breathtaking views of Shasta Lake in California,
            nestled on a private 5-acre hillside estate where tranquility meets luxury.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="flex items-center space-x-2 text-white/80">
              <MapPin className="w-5 h-5" />
              <span>Shasta Lake, California</span>
            </div>
            <div className="flex items-center space-x-2 text-white/80">
              <Users className="w-5 h-5" />
              <span>Up to 25 Guests</span>
            </div>
            <div className="flex items-center space-x-2 text-white/80">
              <Star className="w-5 h-5" />
              <span>Premium Amenities</span>
            </div>
          </motion.div>

          <motion.div
            className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-full hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 glow-effect relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' })}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0"
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Explore Properties</span>
            </motion.button>
            <motion.button
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-800 transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.7 }}
            >
              <motion.div
                className="absolute inset-0 bg-white opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Book Your Retreat</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors"
        onClick={scrollToNext}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
};

export default Hero;