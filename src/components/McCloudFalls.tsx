import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, MapPin, Star, Droplets, TreePine, Camera, Mountain, Fish, Waves, Utensils, Footprints } from 'lucide-react';

const McCloudFalls = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const highlights = [
    'Three distinct waterfalls: Upper, Middle, and Lower Falls',
    'Upper Falls with powerful cascade and crystal-clear swimming pool',
    'Middle Falls featuring natural waterslides on smooth rock face',
    'Lower Falls with dramatic 50-foot drop and photogenic beauty',
    'Well-maintained trail system accessible to all fitness levels',
    'Renowned trout fisheries in the McCloud River',
    'Popular swimming spots during warmer months',
    'Scenic granite cliffs and lush vegetation surroundings'
  ];

  const falls = [
    { icon: <Droplets className="w-8 h-8" />, title: 'Upper Falls', value: 'Powerful Cascade' },
    { icon: <Waves className="w-8 h-8" />, title: 'Middle Falls', value: 'Natural Waterslides' },
    { icon: <Camera className="w-8 h-8" />, title: 'Lower Falls', value: '50-foot Drop' },
    { icon: <Waves className="w-8 h-8" />, title: 'Swimming', value: 'Crystal-clear Pools' },
    { icon: <Fish className="w-8 h-8" />, title: 'Fishing', value: 'Trout Fisheries' },
    { icon: <Footprints className="w-8 h-8" />, title: 'Hiking', value: 'Well-maintained Trails' }
  ];

  const activities = [
    { icon: <Waves className="w-8 h-8" />, title: 'Swimming', value: 'Refreshing Pools' },
    { icon: <Waves className="w-8 h-8" />, title: 'Waterslides', value: 'Natural Rock Slides' },
    { icon: <Fish className="w-8 h-8" />, title: 'Fishing', value: 'Trout & Salmon' },
    { icon: <Waves className="w-8 h-8" />, title: 'Kayaking', value: 'McCloud River' },
    { icon: <Utensils className="w-8 h-8" />, title: 'Picnicking', value: 'Riverside Spots' },
    { icon: <Camera className="w-8 h-8" />, title: 'Photography', value: 'Stunning Views' }
  ];

  return (
    <div className="min-h-screen dramatic-bg-2 particle-bg floating-elements relative overflow-hidden">
      {/* Hero Section */}
      <motion.section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/mcf1.png"
            alt="McCloud Falls"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
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
            The McCloud Falls
          </motion.h1>
          <motion.div className="flex items-center justify-center space-x-4 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="flex items-center space-x-2">
              <MapPin size={20} />
              <span>1 Hour, 10 minutes from The Zen Retreats</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star size={20} className="text-yellow-400" />
              <span>4.6/5 Rating</span>
            </div>
          </motion.div>
          <motion.p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            A Hidden Gem - Three Breathtaking Waterfalls Along the McCloud River
          </motion.p>
          <motion.button
            className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 flex items-center space-x-2 mx-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
            onClick={() => window.open('https://www.gotoretreats.com/u/65e6d763-d1c0-40b2-bac3-b358c2da44d5', '_blank')}
          >
            <span>Plan Your Visit</span>
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
              A Hidden Treasure in Northern California
            </h2>
            <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed">
              McCloud Falls, a hidden gem nestled in the beautiful wilderness of Northern California, is a breathtaking natural wonder that captivates visitors with its cascading waterfalls and stunning surroundings. Located near the town of McCloud in Siskiyou County, this trio of waterfalls along the McCloud River offers a serene escape and an opportunity to immerse oneself in the beauty of nature.
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {falls.map((fall, index) => (
              <motion.div
                key={fall.title}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="text-4xl mb-4">{fall.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{fall.title}</h3>
                <p className="text-emerald-600 font-medium">{fall.value}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="bg-white rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Falls Highlights</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Three Falls Section */}
      <motion.section className="py-20 px-6 bg-gradient-to-r from-emerald-50 to-teal-50"
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
              The Three Falls Experience
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Content */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                    <Droplets className="w-6 h-6 text-emerald-600 mr-2" />
                    Upper Falls
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Powerful cascade plunging into crystal-clear pool, creating awe and tranquility. Popular swimming spot during warmer months.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                    <Waves className="w-6 h-6 text-emerald-600 mr-2" />
                    Middle Falls
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Water gracefully tumbles over wide ledge into deep pool. Known for natural waterslides providing exhilarating experience.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                    <Camera className="w-6 h-6 text-emerald-600 mr-2" />
                    Lower Falls
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Dramatic 50-foot drop creating mesmerizing display. Popular photography spot with stunning forested backdrop.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - YouTube Video */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                McCloud Falls: Visiting all Three Tiers of the Waterfall
              </h3>
              <div className="relative w-full h-64 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/2Rudm_inCBo"
                  title="McCloud Falls: Visiting all Three Tiers of the Waterfall"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>



      {/* Activities Section */}
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
              Activities & Recreation
            </h2>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="text-4xl mb-4">{activity.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{activity.title}</h3>
                <p className="text-emerald-600 font-medium">{activity.value}</p>
              </motion.div>
            ))}
          </motion.div>

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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Discover the Hidden Gem of Northern California
          </motion.h2>
          <motion.p className="text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            McCloud Falls truly is a hidden treasure in the heart of Northern California. Its picturesque waterfalls, serene atmosphere, and accessibility make it an ideal destination for families, outdoor enthusiasts, and nature lovers. Whether you are seeking adventure, relaxation, or simply a moment to reconnect with nature, a visit to McCloud Falls promises an unforgettable experience.
          </motion.p>
          <motion.button
            className="bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 mx-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={() => window.open('https://www.gotoretreats.com/u/65e6d763-d1c0-40b2-bac3-b358c2da44d5', '_blank')}
          >
            <span>Plan Your Adventure!</span>
            <ArrowRight size={20} />
          </motion.button>
        </div>
      </motion.section>

      {/* McCloud Falls Gallery Section */}
      <motion.section className="py-20 bg-gradient-to-r from-emerald-50 to-teal-50"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-4xl font-bold text-gray-800 zen-font mb-4">McCloud Falls Gallery</h3>
            <p className="text-lg text-gray-600">Discover the three beautiful waterfalls along the McCloud River</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {['/mcf1.png', '/mcf2.png', '/mcf3.png', '/mcf4.png', '/mcf5.png', '/mcf6.png'].map((image, imgIndex) => (
              <motion.div key={imgIndex} className="relative overflow-hidden rounded-xl shadow-lg group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + imgIndex * 0.1 }}
              >
                <img
                  src={image}
                  alt={`McCloud Falls ${imgIndex + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="font-semibold text-sm">Waterfall Beauty</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default McCloudFalls;

