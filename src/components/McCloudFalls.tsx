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
            src="/Yoga-Poses-For-Beginners-Wallpaper-for-Wall-710x488.jpg"
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
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
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

          <div className="space-y-12">
            <motion.div
              className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-8 text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-4xl mb-4"><Droplets className="w-12 h-12 text-emerald-600" /></div>
              <h3 className="text-2xl font-bold mb-4">Upper Falls</h3>
              <p className="text-white/90 leading-relaxed">
                Starting with Upper Falls, visitors are greeted with a powerful cascade of water plunging into a crystal-clear pool below. The sight and sound of the rushing water create a sense of awe and tranquility. The pool at the base of Upper Falls is also a popular swimming spot during the warmer months, offering a refreshing respite from the summer heat.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl p-8 text-white"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-4xl mb-4">🏄</div>
              <h3 className="text-2xl font-bold mb-4">Middle Falls</h3>
              <p className="text-white/90 leading-relaxed">
                Continuing downstream, Middle Falls unveils a picturesque scene as the water gracefully tumbles over a wide ledge and into a deep pool. The surrounding granite cliffs and lush vegetation add to the beauty and serenity of the area. Middle Falls is known for its natural waterslides, which provide an exhilarating experience for both children and adults.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-8 text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-4xl mb-4"><Camera className="w-12 h-12 text-emerald-600" /></div>
              <h3 className="text-2xl font-bold mb-4">Lower Falls</h3>
              <p className="text-white/90 leading-relaxed">
                Finally, Lower Falls awaits with its grandeur and majesty. This waterfall showcases a dramatic 50-foot drop, creating a mesmerizing display of cascading water. Lower Falls is a popular spot for photographers, who are drawn to capture the stunning beauty of the waterfall against the backdrop of the surrounding forested landscape.
              </p>
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

          <motion.div className="bg-white rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Accessibility & Trail System</h3>
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              One of the most appealing aspects of McCloud Falls is its accessibility. The falls are easily reached via a well-maintained trail system, allowing visitors of all ages and fitness levels to enjoy the natural splendor. The trail to Upper Falls is a short walk from the parking area, while Middle and Lower Falls require a slightly longer hike. However, the scenic beauty that awaits at each waterfall makes the journey well worth it.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* River Activities Section */}
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
              McCloud River Adventures
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-4xl mb-4 text-center"><Fish className="w-12 h-12 text-emerald-600" /></div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Fishing Paradise</h3>
              <p className="text-gray-700 leading-relaxed">
                In addition to the waterfalls, the McCloud River offers ample opportunities for fishing, kayaking, and picnicking along its banks. The river is renowned for its trout fisheries, attracting anglers from near and far who seek the thrill of casting a line in its pristine waters. Whether you are an experienced angler or a novice looking to try your hand at fishing, the McCloud River provides a serene and picturesque setting to test your skills.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-4xl mb-4 text-center"><Waves className="w-12 h-12 text-emerald-600" /></div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Water Activities</h3>
              <p className="text-gray-700 leading-relaxed">
                The McCloud River provides the perfect setting for various water activities. From kayaking through the gentle currents to picnicking along the scenic riverbanks, visitors can enjoy a full day of outdoor recreation. The crystal-clear waters and surrounding natural beauty create an idyllic environment for relaxation and adventure.
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
          >
            <span>Plan Your Adventure!</span>
            <ArrowRight size={20} />
          </motion.button>
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
            <h3 className="text-4xl font-bold text-gray-800 zen-font mb-4">McCloud Gallery</h3>
            <p className="text-lg text-gray-600">Explore the three beautiful McCloud Falls</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['/himg1.png', '/himg2.png', '/himg3.png', '/himg4.png'].map((image, imgIndex) => (
              <motion.div key={imgIndex} className="relative overflow-hidden rounded-xl shadow-lg group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.0 + imgIndex * 0.1 }}
              >
                <img
                  src={image}
                  alt={`McCloud Falls ${imgIndex + 1}`}
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
            {['/himg5.png', '/himg1.png', '/himg2.png'].map((image, imgIndex) => (
              <motion.div key={imgIndex} className="relative overflow-hidden rounded-xl shadow-lg group"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.4 + imgIndex * 0.1 }}
              >
                <img
                  src={image}
                  alt={`McCloud Falls ${imgIndex + 5}`}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default McCloudFalls;

