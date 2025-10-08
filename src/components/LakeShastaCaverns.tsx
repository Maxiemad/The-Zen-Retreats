import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, MapPin, Clock, Star, Timer, Bus, Users, Waves, Bird, Camera, Sparkles } from 'lucide-react';

const LakeShastaCaverns = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const highlights = [
    'Millions of years old geological formations',
    'The stunning Crystal Room with sparkling crystals',
    'Rainbow Falls underground waterfall',
    'Underground Chapel for special events',
    'Guided tours with knowledgeable guides',
    'Unique ecosystem with bats and wildlife',
    'Bus and boat ride experience',
    'Breathtaking views of Shasta Lake'
  ];

  const tourInfo = [
    { icon: <Timer className="w-8 h-8" />, title: 'Tour Duration', value: '1.5 hours' },
    { icon: <Bus className="w-8 h-8" />, title: 'Transportation', value: 'Bus & Boat' },
    { icon: <Users className="w-8 h-8" />, title: 'Group Size', value: 'Guided Tours' },
    { icon: <Waves className="w-8 h-8" />, title: 'Boat Ride', value: '15 minutes' },
    { icon: <Bird className="w-8 h-8" />, title: 'Wildlife', value: 'Bald Eagles' },
    { icon: <Camera className="w-8 h-8" />, title: 'Photo Ops', value: 'Unlimited' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Hero Section */}
      <motion.section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/ls1.png"
            alt="Lake Shasta Caverns"
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
            Lake Shasta Caverns
          </motion.h1>
          <motion.div className="flex items-center justify-center space-x-4 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="flex items-center space-x-2">
              <MapPin size={20} />
              <span>15 minutes from The Zen Retreats</span>
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
            Explore stunning underground limestone caverns with guided tours and boat rides
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
              A Natural Wonder
            </h2>
            <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed">
              Located near the stunning Shasta Lake in Northern California, the Lake Shasta Caverns are a must-visit destination for anyone who loves natural beauty and adventure. These caves are millions of years old and are full of fascinating geological formations that will leave you in awe.
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {tourInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center card-dramatic-hover ${
                  index % 2 === 0 ? 'staggered-reveal-dramatic-left' : 'staggered-reveal-dramatic-right'
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                onAnimationComplete={() => {
                  const element = document.querySelector(`[data-tour="${index}"]`);
                  if (element) {
                    element.classList.add('revealed');
                  }
                }}
                data-tour={index}
              >
                <motion.div 
                  className="text-5xl mb-4"
                  transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
                >
                  {info.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors duration-300">{info.title}</h3>
                <p className="text-emerald-600 font-medium text-lg">{info.value}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="bg-white rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Cave Highlights</h3>
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
              The Adventure Experience
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="bg-white border-2 border-emerald-200 shadow-xl rounded-2xl p-10 text-black relative"
              style={{
                clipPath: 'polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%)',
                borderRadius: '20px',
                minHeight: '320px'
              }}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Bus className="w-12 h-12 mb-4 text-emerald-600" />
              <h3 className="text-2xl font-bold mb-4 text-black">Bus & Boat Adventure</h3>
              <ul className="text-base space-y-2">
                <li>• Scenic bus ride to Shasta Lake</li>
                <li>• 15-minute catamaran boat ride</li>
                <li>• Wildlife viewing (bald eagles, ospreys)</li>
                <li>• Stunning lake scenery</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white border-2 border-emerald-200 shadow-xl rounded-2xl p-10 text-black relative"
              style={{
                clipPath: 'polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%)',
                borderRadius: '20px',
                minHeight: '320px'
              }}
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Sparkles className="w-12 h-12 mb-4 text-emerald-600" />
              <h3 className="text-2xl font-bold mb-4 text-black">Crystal Room</h3>
              <ul className="text-base space-y-2">
                <li>• Sparkling crystals with colorful lights</li>
                <li>• Rainbow Falls underground waterfall</li>
                <li>• Underground Chapel for events</li>
                <li>• Magical mystical atmosphere</li>
              </ul>
            </motion.div>
          </div>

          {/* YouTube Video Section */}
          <motion.div className="mt-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Lake Shasta Caverns Tour in Northern California</h3>
            <div className="relative w-full max-w-4xl mx-auto">
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/dl9lETLnahw"
                title="Lake Shasta Caverns Tour in Northern California"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl shadow-lg"
              ></iframe>
            </div>
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
          <motion.h2 className="text-4xl md:text-5xl font-bold text-white zen-font mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Ready for an Underground Adventure?
          </motion.h2>
          <motion.p className="text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Book your guided tour of the Lake Shasta Caverns and discover the hidden wonders beneath the surface.
          </motion.p>
          <motion.button
            className="bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 mx-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={() => window.open('https://www.gotoretreats.com/u/65e6d763-d1c0-40b2-bac3-b358c2da44d5', '_blank')}
          >
            <span>Book Tour Now!</span>
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
            <h3 className="text-4xl font-bold text-gray-800 zen-font mb-4">Cavern Gallery</h3>
            <p className="text-lg text-gray-600">Explore the underground wonders of Lake Shasta Caverns</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {['/ls2.png', '/ls3.png', '/ls4.png', '/ls5.png'].map((image, imgIndex) => (
              <motion.div key={imgIndex} className="relative overflow-hidden rounded-xl shadow-lg group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.0 + imgIndex * 0.1 }}
              >
                <img
                  src={image}
                  alt={`Cavern ${imgIndex + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
          {/* Second row for desktop */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['/ls6.png', '/ls7.png', '/ls8.png', '/ls9.png'].map((image, imgIndex) => (
              <motion.div key={imgIndex + 4} className="relative overflow-hidden rounded-xl shadow-lg group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.4 + imgIndex * 0.1 }}
              >
                <img
                  src={image}
                  alt={`Cavern ${imgIndex + 5}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
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

export default LakeShastaCaverns;
