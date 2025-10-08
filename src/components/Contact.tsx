import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Instagram, Clock } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold zen-font mb-6">
            Book Your Retreat
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to experience tranquility like never before? Get in touch with us to discuss 
            options for your perfect retreat at The Zen Retreats.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Left Column */}
              <div className="space-y-6">
                <motion.div
                  className="flex items-start space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <div className="text-left">
                    <h4 className="font-semibold mb-1">Email Us</h4>
                    <p className="text-gray-300">info@thezenretreats.com</p>
                    <p className="text-sm text-gray-400 mt-1">
                      For booking inquiries and additional details
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <MapPin className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <div className="text-left">
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-gray-300">Shasta Lake, Northern California</p>
                    <p className="text-sm text-gray-400 mt-1">
                      5-acre private hillside estate with lake views
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <motion.div
                  className="flex items-start space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Clock className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <div className="text-left">
                    <h4 className="font-semibold mb-1">Response Time</h4>
                    <p className="text-gray-300">Within 24 hours</p>
                    <p className="text-sm text-gray-400 mt-1">
                      We're here to help plan your perfect retreat
                    </p>
                  </div>
                </motion.div>

                <motion.a
                  href="https://instagram.com/thezen.retreats"
                  className="flex items-start space-x-4 hover:text-emerald-400 transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Instagram className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <div className="text-left">
                    <h4 className="font-semibold mb-1">Follow Us</h4>
                    <p className="text-gray-300">@thezen.retreats</p>
                    <p className="text-sm text-gray-400 mt-1">
                      See our latest photos and updates
                    </p>
                  </div>
                </motion.a>
              </div>
            </div>

            <motion.div
              className="bg-gradient-to-r from-emerald-900/50 to-teal-900/50 p-6 rounded-xl border border-emerald-700/30 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h4 className="text-xl font-semibold zen-font mb-4">Perfect For:</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Yoga Retreats',
                  'Meditation Groups',
                  'Corporate Off-sites',
                  'Family Reunions',
                  'Spiritual Retreats',
                  'Group Getaways'
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;