import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, MapPin, Star, Zap, Droplets, Building, Camera, Users, BookOpen, Video, Footprints } from 'lucide-react';

const ShastaDam = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const highlights = [
    'Second tallest dam in the United States at 602 feet',
    'Spans 3,460 feet across the Sacramento River',
    'Reservoir capacity of 4.55 million acre-feet',
    'Hydroelectric power plant generating 710 megawatts',
    'Provides water for up to 3 million acres of farmland',
    'Constructed between 1938 and 1945 as part of Central Valley Project',
    'Free guided tours with advance reservations required',
    'Interactive visitor center with exhibits and displays'
  ];

  const features = [
    { icon: <Building className="w-8 h-8" />, title: 'Height', value: '602 feet' },
    { icon: <Building className="w-8 h-8" />, title: 'Length', value: '3,460 feet' },
    { icon: <Droplets className="w-8 h-8" />, title: 'Capacity', value: '4.55M acre-feet' },
    { icon: <Zap className="w-8 h-8" />, title: 'Power', value: '710 megawatts' },
    { icon: <Building className="w-8 h-8" />, title: 'Irrigation', value: '3M acres' },
    { icon: <Building className="w-8 h-8" />, title: 'Built', value: '1938-1945' }
  ];

  const activities = [
    { icon: <Users className="w-8 h-8" />, title: 'Guided Tours', value: 'Free with Reservation' },
    { icon: <Building className="w-8 h-8" />, title: 'Visitor Center', value: 'Interactive Exhibits' },
    { icon: <Camera className="w-8 h-8" />, title: 'Photography', value: 'Spectacular Views' },
    { icon: <BookOpen className="w-8 h-8" />, title: 'Education', value: 'History & Engineering' },
    { icon: <Video className="w-8 h-8" />, title: 'Videos', value: 'Educational Content' },
    { icon: <Footprints className="w-8 h-8" />, title: 'Walking', value: 'Stairs & Ramps' }
  ];

  return (
    <div className="min-h-screen dramatic-bg-2 particle-bg floating-elements relative overflow-hidden">
      {/* Hero Section */}
      <motion.section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/pexels-photo-5638612.jpeg"
            alt="Shasta Dam"
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
            Shasta Dam
          </motion.h1>
          <motion.div className="flex items-center justify-center space-x-4 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="flex items-center space-x-2">
              <MapPin size={20} />
              <span>25 minutes from The Zen Retreats</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star size={20} className="text-yellow-400" />
              <span>4.7/5 Rating</span>
            </div>
          </motion.div>
          <motion.p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            A Marvel of Engineering - California's Water Management Wonder
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
              An Engineering Marvel
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Shasta Dam, located on the Sacramento River in Northern California, is a marvel of engineering that has been providing water for irrigation, hydroelectric power generation, and flood control for over 75 years. This impressive structure stands as a testament to human ingenuity and continues to shape California's agricultural landscape.
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
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Dam Highlights</h3>
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

      {/* History Section */}
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
              Rich History & Engineering
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-8 text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-4xl mb-4"><BookOpen className="w-12 h-12 text-emerald-600" /></div>
              <h3 className="text-2xl font-bold mb-4">Historical Significance</h3>
              <p className="text-white/90 leading-relaxed">
                Shasta Dam was constructed between 1938 and 1945 as part of the Central Valley Project, a federal water management project designed to provide water for irrigation, hydroelectric power, and flood control in California's Central Valley. The dam stands at a height of 602 feet, making it the second tallest dam in the United States.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl p-8 text-white"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-4xl mb-4"><Zap className="w-12 h-12 text-emerald-600" /></div>
              <h3 className="text-2xl font-bold mb-4">Engineering Excellence</h3>
              <p className="text-white/90 leading-relaxed">
                The dam is a concrete gravity structure that spans 3,460 feet across the Sacramento River. It has a reservoir capacity of 4.55 million acre-feet, which can provide water for up to 3 million acres of farmland. The hydroelectric power plant at the dam can generate up to 710 megawatts of electricity, enough to power over 500,000 homes.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Tourism Section */}
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
              Tourism & Visitor Experience
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
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Visitor Center Experience</h3>
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              Shasta Dam is not only an important piece of California's water management system, but it is also a popular tourist destination. Visitors can take guided tours of the dam and learn about its history and engineering. The visitor center offers interactive exhibits, videos, and displays that showcase the dam's role in shaping California's agricultural landscape.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Tips Section */}
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
              Visitor Tips & Information
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-4xl mb-4 text-center">📋</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Planning Your Visit</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">Tours are free, but advance reservations are required</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">Limited number of visitors per tour - book early</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">Wear comfortable shoes for walking stairs and ramps</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">Don't forget your camera for spectacular views</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-4xl mb-4 text-center"><Star className="w-12 h-12 text-emerald-600" /></div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">What to Expect</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">Educational guided tours with knowledgeable staff</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">Interactive exhibits showcasing dam's engineering</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">Breathtaking views from the top of the dam</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">Learn about California's water management system</p>
                </div>
              </div>
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
            Experience the Engineering Marvel
          </motion.h2>
          <motion.p className="text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Shasta Dam is an impressive engineering marvel that has been providing water and power to California for over 75 years. Its rich history, engineering aspects, and tourism opportunities make it a must-visit destination for anyone interested in California's water management system and engineering feats. With a little planning, you can experience the magnificence of Shasta Dam firsthand and create unforgettable memories.
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
            <span>Book Your Tour!</span>
            <ArrowRight size={20} />
          </motion.button>
        </div>
      </motion.section>

      {/* New Image Gallery Section */}
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
            <h3 className="text-4xl font-bold text-gray-800 zen-font mb-4">Engineering Marvel</h3>
            <p className="text-lg text-gray-600">Witness the impressive Shasta Dam</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['/img1.png', '/img2.png', '/img3.png', '/img4.png'].map((image, imgIndex) => (
              <motion.div key={imgIndex} className="relative overflow-hidden rounded-xl shadow-lg group"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + imgIndex * 0.1 }}
              >
                <img
                  src={image}
                  alt={`Engineering Marvel ${imgIndex + 1}`}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="font-semibold text-sm">Dam Views</h4>
                </div>
              </motion.div>
            ))}
          </div>
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
            <h3 className="text-4xl font-bold text-gray-800 zen-font mb-4">Dam Gallery</h3>
            <p className="text-lg text-gray-600">Discover the engineering marvel of Shasta Dam</p>
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
                  alt={`Shasta Dam ${imgIndex + 1}`}
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
                  alt={`Shasta Dam ${imgIndex + 5}`}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Additional Image Gallery Section */}
      <motion.section className="py-20 bg-gradient-to-r from-emerald-50 to-teal-50"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <h3 className="text-4xl font-bold text-gray-800 zen-font mb-4">Dam Perspectives</h3>
            <p className="text-lg text-gray-600">Explore different views and angles of the impressive Shasta Dam</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['/img1.png', '/img2.png', '/img3.png', '/img4.png'].map((image, imgIndex) => (
              <motion.div key={imgIndex} className="relative overflow-hidden rounded-xl shadow-lg group"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 2.0 + imgIndex * 0.1 }}
              >
                <img
                  src={image}
                  alt={`Dam Perspectives ${imgIndex + 1}`}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="font-semibold text-sm">Engineering Marvel</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ShastaDam;

