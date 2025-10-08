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
    'Dimmable lighting in every room for perfect ambiance',
    'Outdoor BBQ grill & hammock for lakeside relaxation',
    'Sleeps 9 comfortably with plush bedding and premium linens'
  ];

  const amenities = [
    { 
      icon: <Home className="w-8 h-8 text-emerald-600" />, 
      title: 'Living Space', 
      value: '2800 sq ft',
      image: '/zp2.png',
      description: 'Spacious living areas with premium finishes'
    },
    { 
      icon: <Bed className="w-8 h-8 text-emerald-600" />, 
      title: 'Bedrooms', 
      value: '3',
      image: '/zp3.png',
      description: 'Luxurious bedrooms with lake views'
    },
    { 
      icon: <Bath className="w-8 h-8 text-emerald-600" />, 
      title: 'Bathrooms', 
      value: '2.5',
      image: '/zp4.png',
      description: 'Modern bathrooms with premium fixtures'
    },
    { 
      icon: <Users className="w-8 h-8 text-emerald-600" />, 
      title: 'Sleeps', 
      value: '9 guests',
      image: '/zp5.png',
      description: 'Comfortable accommodation for groups'
    },
    { 
      icon: <Eye className="w-8 h-8 text-emerald-600" />, 
      title: 'Lake Views', 
      value: 'Panoramic',
      image: '/zp6.png',
      description: 'Breathtaking views of Shasta Lake'
    },
    { 
      icon: <Flame className="w-8 h-8 text-emerald-600" />, 
      title: 'Fireplace', 
      value: 'Master Suite',
      image: '/zp7.png',
      description: 'Cozy fireplace in the master suite'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Hero Section */}
      <motion.section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/zp14.png"
            alt="The Zen Paradise"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <motion.div className="relative z-10 text-center text-white px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.h1 className="text-6xl md:text-8xl font-bold mb-6 zen-font text-black"
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            The Zen Paradise
          </motion.h1>
          <motion.p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            A premium house with breathtaking lake views
          </motion.p>
          <motion.button
            className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 flex items-center space-x-2 mx-auto pulse-glow relative overflow-hidden group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => window.open('https://www.gotoretreats.com/l/entire-villa-in-shasta-county-california-united-states/66305151-798d-40a1-971f-a6c5b75da920', '_blank')}
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
            <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed">
              The Zen Paradise is our premium property offering 2800 sq ft of living space with the most breathtaking views of Shasta Lake.
            </p>
          </motion.div>

          {/* Amenities Grid with Images */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {amenities.map((amenity, index) => (
              <div key={amenity.title} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src={amenity.image}
                  alt={amenity.title}
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
              </div>
            ))}
          </div>

          {/* Enhanced Property Features Section */}
          <motion.div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3 }}
          >
            <motion.h3 
              className="text-3xl font-bold text-gray-800 mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3 }}
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
                  transition={{ duration: 0.3 }}
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-black zen-font mb-4">Property Gallery</h3>
            <p className="text-lg text-emerald-500">Discover the beauty of The Zen Paradise</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['/zp8.png', '/zp9.png', '/zp10.png', '/zp11.png'].map((image, imgIndex) => (
              <div key={imgIndex} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src={image}
                  alt={`Zen Paradise ${imgIndex + 1}`}
                  className="w-full h-96 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section 2 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['/zp13.png', '/zp1.png', '/zp15.png'].map((image, imgIndex) => (
              <div key={imgIndex} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src={image}
                  alt={`Zen Paradise ${imgIndex + 5}`}
                  className="w-full h-[500px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section className="py-20 px-6 bg-gradient-to-r from-emerald-500 to-teal-500"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2 className="text-4xl md:text-5xl font-bold text-black zen-font mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Ready to Experience Paradise?
          </motion.h2>
          <motion.p className="text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3 }}
          >
            Book your stay at The Zen Paradise and immerse yourself in luxury and natural beauty.
          </motion.p>
          <motion.button
            className="bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 mx-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3 }}
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
