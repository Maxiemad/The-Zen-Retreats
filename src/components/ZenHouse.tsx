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
      image: '/zh2.png',
      description: 'Spacious living areas with premium finishes'
    },
    { 
      icon: <Gamepad2 className="w-8 h-8 text-emerald-600" />, 
      title: 'Entertainment', 
      value: '1000 sq ft',
      image: '/zh3.png',
      description: 'Dedicated entertainment space with games'
    },
    { 
      icon: <Bed className="w-8 h-8 text-emerald-600" />, 
      title: 'Bedrooms', 
      value: '4',
      image: '/zh4.png',
      description: 'Comfortable bedrooms for all guests'
    },
    { 
      icon: <Bath className="w-8 h-8 text-emerald-600" />, 
      title: 'Bathrooms', 
      value: '4',
      image: '/zh5.png',
      description: 'Modern bathrooms with premium fixtures'
    },
    { 
      icon: <Users className="w-8 h-8 text-emerald-600" />, 
      title: 'Sleeps', 
      value: '12 guests',
      image: '/zh6.png',
      description: 'Perfect for large groups and families'
    },
    { 
      icon: <Eye className="w-8 h-8 text-emerald-600" />, 
      title: 'Lake Views', 
      value: 'Amazing',
      image: '/zh7.png',
      description: 'Breathtaking views of Shasta Lake'
    }
  ];

  return (
    <div className="min-h-screen dramatic-bg-2 particle-bg floating-elements relative overflow-hidden">
      {/* Hero Section */}
      <motion.section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/zh1.png"
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
          <motion.h1 className="text-6xl md:text-8xl font-bold mb-6 zen-font text-black"
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
            onClick={() => window.open('https://www.gotoretreats.com/l/entire-home-in-shasta-county-california-united-states/6631c108-f6ec-44bd-92f3-c0cecb484531', '_blank')}
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
            <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed">
              The Zen House is the first property we had purchased at Shasta Lake, and it's been very dear to us all along! This is a large house offering 2400 sq ft of living space and an additional 1000 sq ft of covered entertainment space, with amazing Shasta Lake views.
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
            <h2 className="text-4xl md:text-5xl font-bold text-black zen-font mb-6">
              Entertainment & Comfort
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="relative bg-gradient-to-br from-emerald-500 to-teal-500 text-white p-10 min-h-[320px]"
              style={{
                clipPath: 'polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)',
                borderRadius: '60px 30px 60px 30px'
              }}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-white/20 rounded-full"></div>
              <div className="absolute -top-2 -right-6 w-6 h-6 bg-white/20 rounded-full"></div>
              <div className="absolute -bottom-3 -left-2 w-7 h-7 bg-white/20 rounded-full"></div>
              <div className="absolute -bottom-2 -right-4 w-5 h-5 bg-white/20 rounded-full"></div>
              <div className="text-4xl mb-4"><Gamepad2 className="w-12 h-12 text-emerald-600 mx-auto" /></div>
              <h3 className="text-2xl font-bold mb-4 text-black">Entertainment Space</h3>
              <p className="text-white/90 leading-relaxed text-base">
                The large entertainment room features a pool table, ping pong table, and a projector with giant screen for movie nights. Perfect for family fun and group activities.
              </p>
            </motion.div>

            <motion.div
              className="relative bg-gradient-to-br from-teal-500 to-emerald-500 text-white p-10 min-h-[320px]"
              style={{
                clipPath: 'polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)',
                borderRadius: '60px 30px 60px 30px'
              }}
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-white/20 rounded-full"></div>
              <div className="absolute -top-2 -right-6 w-6 h-6 bg-white/20 rounded-full"></div>
              <div className="absolute -bottom-3 -left-2 w-7 h-7 bg-white/20 rounded-full"></div>
              <div className="absolute -bottom-2 -right-4 w-5 h-5 bg-white/20 rounded-full"></div>
              <div className="text-4xl mb-4">👑</div>
              <h3 className="text-2xl font-bold mb-4 text-black">Master Suites</h3>
              <p className="text-white/90 leading-relaxed text-base">
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
          <motion.h2 className="text-4xl md:text-5xl font-bold text-black zen-font mb-6"
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

      {/* Image Gallery Section 1 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-black zen-font mb-4">House Gallery</h3>
          </div>
          {/* Interior Views Section */}
          <div className="mb-16">
            <div className="text-left mb-8">
              <h4 className="text-2xl font-bold text-black zen-font mb-2">Interior Views</h4>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['/zh8.png', '/zh9.png', '/zh10.png', '/zh11.png', '/zh17.png', '/zh19.png', '/zh22.png', '/zh27.png'].map((image, imgIndex) => (
                <div key={imgIndex} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <img
                    src={image}
                    alt={`Zen House Interior ${imgIndex + 1}`}
                    className="w-full h-96 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Outdoor Views Section */}
          <div>
            <div className="text-left mb-8">
              <h4 className="text-2xl font-bold text-black zen-font mb-2">Outdoor Views</h4>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['/zh12.png', '/zh13.png', '/zh14.png', '/zh16.png', '/zh21.png', '/zh24.png', '/zh25.png', '/zh28.png'].map((image, imgIndex) => (
                <div key={imgIndex} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <img
                    src={image}
                    alt={`Zen House Outdoor ${imgIndex + 1}`}
                    className="w-full h-96 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ZenHouse;
