import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, MapPin, Star, ShoppingBag, Utensils, Camera, Mountain, Building, Car, Leaf, Theater, Store } from 'lucide-react';

const CityOfRedding = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const shoppingHighlights = [
    'Mt. Shasta Mall - largest shopping center with popular stores',
    'Downtown Redding - charming boutiques and unique stores',
    'Vintage and Antique Shops - hidden treasures and collectibles',
    'Farmers Markets - fresh produce and local artisan crafts',
    'Local boutiques with curated clothing and accessories',
    'Art galleries and handmade goods stores',
    'Regular art walks and street fairs',
    'Support for local artisans and craftspeople'
  ];

  const diningHighlights = [
    'Downtown dining with farm-to-table restaurants',
    'Riverfront dining with Sacramento River views',
    'Craft breweries and wineries with tastings',
    'Diverse ethnic cuisine from around the world',
    'Cozy cafes and upscale bistros',
    'International flavors - Thai, Japanese, Italian, Mexican',
    'On-site restaurants at breweries and wineries',
    'Romantic dinners and casual family outings'
  ];

  const attractions = [
    { icon: <Building className="w-8 h-8" />, title: 'Sundial Bridge', value: 'Iconic Architecture' },
    { icon: <Leaf className="w-8 h-8" />, title: 'Turtle Bay Park', value: 'Exploration & Gardens' },
    { icon: <Mountain className="w-8 h-8" />, title: 'Whiskeytown NRA', value: 'Hiking & Lake' },
    { icon: <Building className="w-8 h-8" />, title: 'Shasta Historic Park', value: 'Gold Rush History' },
    { icon: <Car className="w-8 h-8" />, title: 'Volcanic Legacy Byway', value: 'Scenic Drive' },
    { icon: <Building className="w-8 h-8" />, title: 'Shasta Dam', value: 'Engineering Marvel' }
  ];

  const activities = [
    { icon: <ShoppingBag className="w-8 h-8" />, title: 'Shopping', value: 'Malls & Boutiques' },
    { icon: <Utensils className="w-8 h-8" />, title: 'Dining', value: 'Diverse Cuisine' },
    { icon: <Theater className="w-8 h-8" />, title: 'Culture', value: 'Cascade Theatre' },
    { icon: <Leaf className="w-8 h-8" />, title: 'Nature', value: 'Parks & Gardens' },
    { icon: <Camera className="w-8 h-8" />, title: 'Sightseeing', value: 'Iconic Landmarks' },
    { icon: <Car className="w-8 h-8" />, title: 'Distance', value: '25 minutes' }
  ];

  return (
    <div className="min-h-screen dramatic-bg-2 particle-bg floating-elements relative overflow-hidden">
      {/* Hero Section */}
      <motion.section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/pexels-photo-5638612.jpeg"
            alt="City of Redding"
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
            City of Redding
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
              <span>4.5/5 Rating</span>
            </div>
          </motion.div>
          <motion.p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            A Travel Guide to Shopping, Dining & Cultural Attractions
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
            <span>Explore Redding</span>
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
              A Modern City with Endless Possibilities
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The city of Redding, which is just a few minutes away from the Zen Retreats, is a large city with lots to see & explore, variety of shopping and dining options that cater to a range of tastes and preferences. Whether you're looking for unique boutiques, well-known retailers, or diverse culinary experiences, Redding has something to satisfy every shopper and food lover.
            </p>
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

      {/* Shopping Section */}
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
              Shopping Options in Redding
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-8 text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-4xl mb-4"><ShoppingBag className="w-12 h-12 text-emerald-600" /></div>
              <h3 className="text-2xl font-bold mb-4">Mt. Shasta Mall</h3>
              <p className="text-white/90 leading-relaxed">
                As the largest shopping center in Redding, Mt. Shasta Mall is home to a wide range of popular stores and brands. From department stores like Macy's and JCPenney to specialty shops and boutiques, the mall offers a diverse shopping experience for fashion, home goods, electronics, and more.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl p-8 text-white"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-4xl mb-4"><Store className="w-12 h-12 text-emerald-600 mx-auto" /></div>
              <h3 className="text-2xl font-bold mb-4">Downtown Redding</h3>
              <p className="text-white/90 leading-relaxed">
                The downtown area of Redding is known for its charming boutiques and unique stores. Explore locally owned shops that offer a curated selection of clothing, accessories, home decor, art, and handmade goods. The downtown district also hosts regular events, such as art walks and street fairs.
              </p>
            </motion.div>
          </div>

          <motion.div className="bg-white rounded-2xl p-8 shadow-lg mt-12"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Shopping Highlights</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {shoppingHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Dining Section */}
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
              Dining Options in Redding
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-8 text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-4xl mb-4"><Utensils className="w-12 h-12 text-emerald-600" /></div>
              <h3 className="text-2xl font-bold mb-4">Downtown Dining</h3>
              <p className="text-white/90 leading-relaxed">
                Redding's downtown area is a hub for diverse culinary experiences. From farm-to-table restaurants to international cuisines, the downtown district offers a range of dining options to satisfy any palate. Enjoy a meal at one of the many cozy cafes, upscale bistros, or vibrant eateries.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl p-8 text-white"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-4xl mb-4"><Camera className="w-12 h-12 text-emerald-600" /></div>
              <h3 className="text-2xl font-bold mb-4">Riverfront Dining</h3>
              <p className="text-white/90 leading-relaxed">
                Several restaurants in Redding offer picturesque views of the Sacramento River, allowing diners to savor their meals while enjoying the scenic beauty of the surroundings. These riverfront establishments provide a delightful atmosphere for a romantic dinner or a casual outing with friends and family.
              </p>
            </motion.div>
          </div>

          <motion.div className="bg-white rounded-2xl p-8 shadow-lg mt-12"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Dining Highlights</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {diningHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Attractions Section */}
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
              Things to Do in Redding
            </h2>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {attractions.map((attraction, index) => (
              <motion.div
                key={attraction.title}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="text-4xl mb-4">{attraction.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{attraction.title}</h3>
                <p className="text-emerald-600 font-medium">{attraction.value}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="bg-white rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Must-Visit Attractions</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700"><strong>Sundial Bridge:</strong> Iconic pedestrian bridge designed by architect Santiago Calatrava, spanning the Sacramento River with stunning views.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700"><strong>Turtle Bay Exploration Park:</strong> Interactive exhibits, botanical gardens, and wildlife center adjacent to the Sundial Bridge.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700"><strong>Whiskeytown National Recreation Area:</strong> Hiking trails, crystal-clear waters of Whiskeytown Lake, and natural beauty.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700"><strong>Shasta State Historic Park:</strong> Gold rush era remnants with restored courthouse and historic district.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700"><strong>Volcanic Legacy Scenic Byway:</strong> Breathtaking route from Lassen Volcanic National Park to Crater Lake National Park.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700"><strong>Shasta Dam:</strong> One of the tallest dams in the United States with guided tours and engineering marvels.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700"><strong>McConnell Arboretum:</strong> Beautifully landscaped gardens, walking trails, and peaceful ponds within Turtle Bay Park.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700"><strong>Cascade Theatre:</strong> Historic theater hosting concerts, plays, and cultural performances throughout the year.</p>
                </div>
              </div>
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Discover the Best of Redding
          </motion.h2>
          <motion.p className="text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From world-class shopping and dining to iconic attractions and cultural experiences, Redding offers a plethora of activities that cater to a variety of tastes and preferences. Whether you're a dedicated foodie or a passionate shopper, Redding has something to satisfy your cravings and fulfill your desires.
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
            <span>Plan Your Redding Visit!</span>
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
            <h3 className="text-4xl font-bold text-gray-800 zen-font mb-4">Urban Highlights</h3>
            <p className="text-lg text-gray-600">Discover the vibrant city of Redding</p>
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
                  alt={`Urban Highlights ${imgIndex + 1}`}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="font-semibold text-sm">City Life</h4>
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
            <h3 className="text-4xl font-bold text-gray-800 zen-font mb-4">City Gallery</h3>
            <p className="text-lg text-gray-600">Discover the vibrant city of Redding</p>
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
                  alt={`Redding ${imgIndex + 1}`}
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
                  alt={`Redding ${imgIndex + 5}`}
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
            <h3 className="text-4xl font-bold text-gray-800 zen-font mb-4">City Life</h3>
            <p className="text-lg text-gray-600">Experience the vibrant culture and attractions of Redding</p>
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
                  alt={`City Life ${imgIndex + 1}`}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="font-semibold text-sm">Urban Attractions</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default CityOfRedding;
