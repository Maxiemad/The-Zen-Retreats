import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, MapPin, Star, Droplets, TreePine, Camera, Mountain, Waves, Footprints, Tent, Fish, Utensils, Bird } from 'lucide-react';

const BurneyFalls = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const highlights = [
    '129-foot cascading waterfall with consistent year-round flow',
    'Fed by underground springs ensuring steady water supply',
    'Unique curtain-like appearance with single uninterrupted sheet',
    'Crystal-clear emerald pool at the base of the falls',
    'Sacred site for Native American tribes, especially Pit River Tribe',
    'Well-maintained trails with scenic viewpoints',
    'Diverse flora and fauna in surrounding wilderness',
    'Recreational activities including camping, fishing, and hiking'
  ];

  const features = [
    { icon: <Waves className="w-8 h-8" />, title: 'Height', value: '129 feet' },
    { icon: <Droplets className="w-8 h-8" />, title: 'Flow', value: 'Year-round' },
    { icon: <TreePine className="w-8 h-8" />, title: 'Park', value: 'McArthur-Burney Falls' },
    { icon: <Footprints className="w-8 h-8" />, title: 'Hiking', value: 'Scenic Trails' },
    { icon: <Tent className="w-8 h-8" />, title: 'Camping', value: 'Available' },
    { icon: <Fish className="w-8 h-8" />, title: 'Fishing', value: 'Burney Creek' }
  ];

  const activities = [
    { icon: <Camera className="w-8 h-8" />, title: 'Photography', value: 'Stunning Views' },
    { icon: <Footprints className="w-8 h-8" />, title: 'Hiking', value: 'Well-maintained Trails' },
    { icon: <Tent className="w-8 h-8" />, title: 'Camping', value: 'State Park Facilities' },
    { icon: <Fish className="w-8 h-8" />, title: 'Fishing', value: 'Crystal-clear Waters' },
    { icon: <Utensils className="w-8 h-8" />, title: 'Picnicking', value: 'Scenic Spots' },
    { icon: <Bird className="w-8 h-8" />, title: 'Wildlife', value: 'Deer & Bird Watching' }
  ];

  return (
    <div className="min-h-screen dramatic-bg-2 particle-bg floating-elements relative overflow-hidden">
      {/* Hero Section */}
      <motion.section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/HD-wallpaper-buddha-nature-lotus-relaxing-peace-meditation-thumbnail.jpg"
            alt="Burney Falls"
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
            The Burney Falls
          </motion.h1>
          <motion.div className="flex items-center justify-center space-x-4 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="flex items-center space-x-2">
              <MapPin size={20} />
              <span>1 Hour, 30 minutes from The Zen Retreats</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star size={20} className="text-yellow-400" />
              <span>4.8/5 Rating</span>
            </div>
          </motion.div>
          <motion.p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            The "Eighth Wonder of the World" - A Mesmerizing Natural Wonder
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
              A Natural Masterpiece
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Burney Falls, located in northern California, is a mesmerizing natural wonder that captivates visitors with its breathtaking beauty and awe-inspiring features. Nestled within McArthur-Burney Falls Memorial State Park, this waterfall is often referred to as the "Eighth Wonder of the World" and has become an iconic landmark in the region.
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-emerald-600 font-medium">{feature.value}</p>
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

      {/* Experience Section */}
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
              The Enchanting Experience
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-8 text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-4xl mb-4"><Waves className="w-12 h-12 text-emerald-600" /></div>
              <h3 className="text-2xl font-bold mb-4">Consistent Year-Round Flow</h3>
              <p className="text-white/90 leading-relaxed">
                What sets Burney Falls apart from many other waterfalls is its consistent flow throughout the year. The falls are fed by underground springs, ensuring a steady stream of water even during the dry summer months. This reliable flow creates a mesmerizing scene that seems almost magical, as if the waterfall emerges from the heart of the earth itself.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl p-8 text-white"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-4xl mb-4"><Droplets className="w-12 h-12 text-emerald-600" /></div>
              <h3 className="text-2xl font-bold mb-4">Curtain-Like Beauty</h3>
              <p className="text-white/90 leading-relaxed">
                One of the distinguishing features of Burney Falls is its unique curtain-like appearance. The water plunges over the cliff in a single uninterrupted sheet, creating a stunning display of cascading water that tumbles into the emerald pool below. The constant spray generates a delicate mist that hangs in the air, adding to the ethereal ambiance.
              </p>
            </motion.div>
          </div>

          <motion.div className="mt-12 bg-white rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">The Emerald Pool</h3>
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              The pool at the base of the falls, aptly named Burney Creek Falls, is a tranquil oasis of crystal-clear water. The pool is surrounded by vibrant green vegetation, including moss-covered rocks and ferns, creating a picturesque scene straight out of a fairytale. Visitors can explore the area surrounding the falls via well-maintained trails that offer scenic viewpoints and access to the pool.
            </p>
          </motion.div>
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

          <motion.div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Cultural & Historical Significance</h3>
            <p className="text-white/90 leading-relaxed text-center max-w-4xl mx-auto">
              Beyond its visual appeal, Burney Falls holds significant cultural and historical value. The falls and the surrounding area have been sacred to the Native American tribes of the region for centuries. The Pit River Tribe, in particular, considers Burney Falls a sacred site and a place of spiritual significance. The falls' natural beauty and cultural importance have led to the establishment of McArthur-Burney Falls Memorial State Park, ensuring its preservation for future generations.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Wildlife Section */}
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
              Natural Surroundings
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-4xl mb-4 text-center">🌲</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Diverse Flora</h3>
              <p className="text-gray-700 leading-relaxed">
                Exploring the park and its trails, visitors can witness the diverse flora that call this area home. Towering pines, oak trees, and vibrant wildflowers create a lush backdrop, while moss-covered rocks and ferns surround the crystal-clear pool, creating a picturesque scene straight out of a fairytale.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-4xl mb-4 text-center"><Bird className="w-12 h-12 text-emerald-600" /></div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Abundant Wildlife</h3>
              <p className="text-gray-700 leading-relaxed">
                The park offers a range of recreational activities, including camping, fishing, hiking, and picnicking, allowing visitors to immerse themselves in the natural splendor that surrounds Burney Falls. Wildlife such as deer, squirrels, and a variety of bird species can be spotted in the surrounding wilderness.
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
            Experience the Eighth Wonder of the World
          </motion.h2>
          <motion.p className="text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From its consistent flow of water to its ethereal mist and picturesque surroundings, Burney Falls offers a mesmerizing experience for visitors. Whether it's the awe-inspiring sight of the cascading water, the peacefulness of the emerald pool, or the cultural and historical significance of the area, Burney Falls is a destination that showcases the power and magnificence of nature.
          </motion.p>
          <motion.button
            className="bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 mx-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span>Plan Your Visit!</span>
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
            <h3 className="text-4xl font-bold text-gray-800 zen-font mb-4">Falls Gallery</h3>
            <p className="text-lg text-gray-600">Witness the spectacular beauty of Burney Falls</p>
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
                  alt={`Burney Falls ${imgIndex + 1}`}
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
                  alt={`Burney Falls ${imgIndex + 5}`}
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

export default BurneyFalls;
