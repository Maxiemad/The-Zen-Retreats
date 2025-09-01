import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Home, Gamepad2, Bed, Bath, Users, Eye } from 'lucide-react';

const ZenHouse = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const features = [
    '2400 sq ft living space + 1000 sq ft entertainment space',
    'One large deck, one small deck, two patios, garden area',
    'Large water fountain and beautiful landscaping',
    '4 bedrooms and 4 bathrooms for maximum comfort',
    'Furnished kitchen with electric stove and modern appliances',
    'Large entertainment room with pool table and ping pong table',
    'Projector with giant screen for movie nights',
    'Two master suites with amazing lake views',
    'One master suite with fireplace, another with soaking tub',
    'Comfortably sleeps 12 (max 9 adults) with premium bedding'
  ];

  const amenities = [
    { 
      icon: <Home className="w-8 h-8 text-emerald-600" />, 
      title: 'Living Space', 
      value: '2400 sq ft',
      image: '/pimg1.png',
      description: 'Spacious living areas with premium finishes'
    },
    { 
      icon: <Gamepad2 className="w-8 h-8 text-emerald-600" />, 
      title: 'Entertainment', 
      value: '1000 sq ft',
      image: '/pimg2.png',
      description: 'Dedicated entertainment space with games'
    },
    { 
      icon: <Bed className="w-8 h-8 text-emerald-600" />, 
      title: 'Bedrooms', 
      value: '4',
      image: '/pimg3.png',
      description: 'Comfortable bedrooms for all guests'
    },
    { 
      icon: <Bath className="w-8 h-8 text-emerald-600" />, 
      title: 'Bathrooms', 
      value: '4',
      image: '/pimg4.png',
      description: 'Modern bathrooms with premium fixtures'
    },
    { 
      icon: <Users className="w-8 h-8 text-emerald-600" />, 
      title: 'Sleeps', 
      value: '12 guests',
      image: '/pimg5.png',
      description: 'Perfect for large groups and families'
    },
    { 
      icon: <Eye className="w-8 h-8 text-emerald-600" />, 
      title: 'Lake Views', 
      value: 'Amazing',
      image: '/pimg1.png',
      description: 'Breathtaking views of Shasta Lake'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Hero Section */}
      <motion.section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/pimg1.png"
            alt="The Zen House"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <motion.div className="relative z-10 text-center text-white px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1 className="text-6xl md:text-8xl font-bold mb-6 zen-font"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            The Zen House
          </motion.h1>
          <motion.p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            A large house with rustic feel, beautiful views & lots of amenities for fun and entertainment
          </motion.p>
          <motion.button
            className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 flex items-center space-x-2 mx-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <span>Book Now</span>
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Overview Section */}
      <motion.section ref={ref} className="py-20 px-6"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 zen-font mb-6">
              The Zen House - An Overview
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The Zen House is the first property we had purchased at Shasta Lake, and it's been very dear to us all along! This is a large house offering 2400 sq ft of living space and an additional 1000 sq ft of covered entertainment space, with amazing Shasta Lake views.
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
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                    {amenity.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{amenity.title}</h3>
                  <p className="text-emerald-600 font-medium text-xl mb-2">{amenity.value}</p>
                  <p className="text-gray-600 text-sm">{amenity.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Property Highlights Section */}
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
              Property Highlights
            </motion.h3>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group"
                  whileHover={{ x: 5, scale: 1.02 }}
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

      {/* Special Features Section */}
      <motion.section className="py-20 px-6"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 zen-font mb-6">
              Entertainment & Comfort
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-8 text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-2xl font-bold mb-4">Entertainment Space</h3>
              <p className="text-white/90 leading-relaxed">
                The large entertainment room features a pool table, ping pong table, and a projector with giant screen for movie nights. Perfect for family fun and group activities.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl p-8 text-white"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-4xl mb-4">👑</div>
              <h3 className="text-2xl font-bold mb-4">Master Suites</h3>
              <p className="text-white/90 leading-relaxed">
                Two master suites with amazing lake views - one featuring a fireplace for cozy evenings, and another with a luxurious soaking tub for ultimate relaxation.
              </p>
            </motion.div>
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
            Experience the Perfect Family Getaway
          </motion.h2>
          <motion.p className="text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Book The Zen House for your next family reunion, retreat, or group getaway with comfort, fun, and stunning lakefront moments.
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

export default ZenHouse;
