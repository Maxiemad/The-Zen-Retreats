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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h3 className="text-2xl font-bold zen-font mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <motion.div
                  className="flex items-start space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
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
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-gray-300">Shasta Lake, Northern California</p>
                    <p className="text-sm text-gray-400 mt-1">
                      5-acre private hillside estate with lake views
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Clock className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
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
                  <div>
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
              className="bg-gradient-to-r from-emerald-900/50 to-teal-900/50 p-6 rounded-xl border border-emerald-700/30"
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

          {/* Contact Form */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold zen-font mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent placeholder-gray-400"
                    placeholder="John"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent placeholder-gray-400"
                    placeholder="Doe"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent placeholder-gray-400"
                  placeholder="john@example.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <label className="block text-sm font-medium mb-2">Retreat Type</label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent">
                  <option value="">Select retreat type</option>
                  <option value="yoga">Yoga Retreat</option>
                  <option value="meditation">Meditation Retreat</option>
                  <option value="corporate">Corporate Off-site</option>
                  <option value="family">Family Reunion</option>
                  <option value="other">Other</option>
                </select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent placeholder-gray-400 resize-none"
                  placeholder="Tell us about your retreat plans, dates, and any special requirements..."
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;