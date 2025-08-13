import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Mountain, Waves, Sun } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Mountain,
      title: 'Scenic Location',
      description: 'Nestled on a 5-acre hillside estate with panoramic views of Shasta Lake and surrounding mountains.'
    },
    {
      icon: Waves,
      title: 'Waterfront Access',
      description: 'Marina located right below the property offering boat launching with 365 miles of shoreline to explore.'
    },
    {
      icon: Sun,
      title: 'Perfect Sunrises',
      description: 'Wake up to the most mesmerizing sunrises over the lake, creating magical moments every morning.'
    },
    {
      icon: Heart,
      title: 'Complete Privacy',
      description: 'Total privacy and tranquility in a naturesque setting, yet only 2 miles from Interstate I-5.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="container mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-gray-800 zen-font mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Who Are We?
              </motion.h2>
              <motion.p
                className="text-lg text-gray-600 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                The Zen Retreats is a premium 5-acre property located at Shasta Lake in Northern California. 
                We offer the most mesmerizing views of the lake, surrounding hills, and beautiful sunrises in a 
                completely private and tranquil setting.
              </motion.p>
              <motion.p
                className="text-lg text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Our property comprises two large houses with modern amenities and an open space between them 
                for group activities, offering the most zen views from almost everywhere - hence the name 
                "The Zen Retreats".
              </motion.p>
            </div>

            <motion.div
              className="grid sm:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                alt="Zen Retreats Property"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <motion.div
                className="absolute bottom-8 left-8 right-8 text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <h3 className="text-2xl font-bold zen-font mb-2">The Lake. The Hills. Beautiful Sunrises.</h3>
                <p className="text-white/90">Experience tranquility like never before</p>
              </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-20"
              animate={{ y: [0, -10, 0], rotate: [0, 180, 360] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full opacity-30"
              animate={{ y: [0, 10, 0], rotate: [0, -180, -360] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>

        {/* What We Offer Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 zen-font mb-6">
              What Do We Offer?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The property can easily accommodate groups of 20-25 people (max 18 adults) who would like to 
              co-locate for various purposes and conduct sightseeing and group activities together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Yoga Retreats', emoji: '🧘‍♀️' },
              { title: 'Meditation & Spiritual Retreats', emoji: '🕉️' },
              { title: 'Corporate Off-sites', emoji: '💼' },
              { title: 'Family Reunions', emoji: '👨‍👩‍👧‍👦' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;