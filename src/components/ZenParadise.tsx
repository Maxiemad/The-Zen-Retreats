import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Home, Bed, Bath, Users, Eye, Flame } from 'lucide-react';

const ZenParadise = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const features = [
    '3 spacious bedrooms & 2.5 luxurious bathrooms',
    '2 large wrap-around decks with panoramic lake views',
    'Master suite with fireplace, soaking tub & walk-in closet',
    '65" TV with premium sound-bar for immersive entertainment',
    'Fully equipped gourmet kitchen with modern appliances',
    'Elegant formal dining room with lake views',
    'Dimmable lighting in every room for perfect ambiance',
    'Outdoor BBQ grill & hammock for lakeside relaxation',
    'Sleeps 9 comfortably with plush bedding and premium linens'
  ];

  const amenities = [
    { 
      icon: <Home className="w-8 h-8 text-emerald-600" />, 
      title: 'Living Space', 
      value: '2800 sq ft',
      image: '/himg1.png',
      description: 'Spacious living areas with premium finishes'
    },
    { 
      icon: <Bed className="w-8 h-8 text-emerald-600" />, 
      title: 'Bedrooms', 
      value: '3',
      image: '/himg2.png',
      description: 'Luxurious bedrooms with lake views'
    },
    { 
      icon: <Bath className="w-8 h-8 text-emerald-600" />, 
      title: 'Bathrooms', 
      value: '2.5',
      image: '/himg3.png',
      description: 'Modern bathrooms with premium fixtures'
    },
    { 
      icon: <Users className="w-8 h-8 text-emerald-600" />, 
      title: 'Sleeps', 
      value: '9 guests',
      image: '/himg4.png',
      description: 'Comfortable accommodation for groups'
    },
    { 
      icon: <Eye className="w-8 h-8 text-emerald-600" />, 
      title: 'Lake Views', 
      value: 'Panoramic',
      image: '/himg5.png',
      description: 'Breathtaking views of Shasta Lake'
    },
    { 
      icon: <Flame className="w-8 h-8 text-emerald-600" />, 
      title: 'Fireplace', 
      value: 'Master Suite',
      image: '/himg1.png',
      description: 'Cozy fireplace in the master suite'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Hero Section */}
      <motion.section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/himg1.png"
            alt="The Zen Paradise"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <motion.div className="relative z-10 text-center text-white px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1 className="text-6xl md:text-8xl font-bold mb-6 zen-font gradient-text-animated"
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          >
            The Zen Paradise
          </motion.h1>
          <motion.p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            A premium house with breathtaking lake views
          </motion.p>
          <motion.button
            className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 flex items-center space-x-2 mx-auto pulse-glow relative overflow-hidden group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
            />
            <span className="relative z-10">Book Now</span>
            <ArrowRight size={20} className="relative z-10" />
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Overview Section */}
      <motion.section ref={ref} className="py-20 px-6 dramatic-bg-2 particle-bg floating-elements relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 zen-font mb-6">
              The Zen Paradise - An Overview
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The Zen Paradise is our premium property offering 2800 sq ft of living space with the most breathtaking views of Shasta Lake.
            </p>
          </motion.div>

          {/* Amenities Grid with Images */}
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.title}
                className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group card-dramatic-hover ${
                  index % 2 === 0 ? 'staggered-reveal-dramatic-left' : 'staggered-reveal-dramatic-right'
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                onAnimationComplete={() => {
                  const element = document.querySelector(`[data-amenity="${index}"]`);
                  if (element) {
                    element.classList.add('revealed');
                  }
                }}
                data-amenity={index}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <motion.div 
                    className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3"
                    transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
                  >
                    {amenity.icon}
                  </motion.div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors duration-300">{amenity.title}</h3>
                  <p className="text-emerald-600 font-medium text-xl mb-2">{amenity.value}</p>
                  <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">{amenity.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Property Features Section */}
          <motion.div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.h3 
              className="text-3xl font-bold text-gray-800 mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Property Features
            </motion.h3>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                    <p className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      {feature}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Image Gallery Section 1 */}
      <motion.section className="py-20 bg-gray-50"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-4xl font-bold text-gray-800 zen-font mb-4">Property Gallery</h3>
            <p className="text-lg text-gray-600">Discover the beauty of The Zen Paradise</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['/pimg1.png', '/pimg2.png', '/pimg3.png', '/pimg4.png'].map((image, imgIndex) => (
              <motion.div key={imgIndex} className="relative overflow-hidden rounded-xl shadow-lg group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.0 + imgIndex * 0.1 }}
              >
                <img
                  src={image}
                  alt={`Zen Paradise ${imgIndex + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Image Gallery Section 2 */}
      <motion.section className="py-20 bg-white"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['/pimg5.png', '/pimg1.png', '/pimg2.png'].map((image, imgIndex) => (
              <motion.div key={imgIndex} className="relative overflow-hidden rounded-xl shadow-lg group"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.4 + imgIndex * 0.1 }}
              >
                <img
                  src={image}
                  alt={`Zen Paradise ${imgIndex + 5}`}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section className="py-20 px-6 bg-gradient-to-r from-emerald-500 to-teal-500"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2 className="text-4xl md:text-5xl font-bold text-white zen-font mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Ready to Experience Paradise?
          </motion.h2>
          <motion.p className="text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Book your stay at The Zen Paradise and immerse yourself in luxury and natural beauty.
          </motion.p>
          <motion.button
            className="bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 mx-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span>Book Now!</span>
            <ArrowRight size={20} />
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default ZenParadise;
