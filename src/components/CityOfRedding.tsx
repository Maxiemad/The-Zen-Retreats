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
            src="/cor1.png"
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

      {/* Shopping & Dining Section */}
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
              Shopping & Dining in Redding
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Shopping Column */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <ShoppingBag className="w-8 h-8 text-emerald-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Shopping</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Mt. Shasta Mall</h4>
                  <p className="text-gray-600 text-sm">Largest shopping center with Macy's, JCPenney, and specialty stores.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Downtown Redding</h4>
                  <p className="text-gray-600 text-sm">Charming boutiques, art galleries, and local artisan shops.</p>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800 mb-3">Highlights:</h4>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                    <span className="text-sm text-gray-600">Vintage & antique shops</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                    <span className="text-sm text-gray-600">Farmers markets</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                    <span className="text-sm text-gray-600">Art walks & street fairs</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                    <span className="text-sm text-gray-600">Local artisan crafts</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Dining Column */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center mb-6">
                <Utensils className="w-8 h-8 text-emerald-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Dining</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Downtown Dining</h4>
                  <p className="text-gray-600 text-sm">Farm-to-table restaurants, cafes, and international cuisine.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Riverfront Dining</h4>
                  <p className="text-gray-600 text-sm">Scenic Sacramento River views with romantic and casual dining.</p>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800 mb-3">Highlights:</h4>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                    <span className="text-sm text-gray-600">Craft breweries & wineries</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                    <span className="text-sm text-gray-600">Thai, Japanese, Italian, Mexican</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                    <span className="text-sm text-gray-600">Upscale bistros & cozy cafes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                    <span className="text-sm text-gray-600">Family & romantic dining</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* First Redding Gallery Section */}
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
            <h3 className="text-4xl font-bold text-gray-800 zen-font mb-4">Redding Cityscape</h3>
            <p className="text-lg text-gray-600">Experience the vibrant urban landscape of Redding</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['/cor1.png', '/cor2.png', '/cor3.png', '/cor4.png'].map((image, imgIndex) => (
              <motion.div key={imgIndex} className="relative overflow-hidden rounded-xl shadow-lg group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.0 + imgIndex * 0.1 }}
              >
                <img
                  src={image}
                  alt={`Redding Cityscape ${imgIndex + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="font-semibold text-sm">Urban Beauty</h4>
                </div>
              </motion.div>
            ))}
          </div>
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
          <motion.h2 className="text-4xl md:text-5xl font-bold text-black zen-font mb-6"
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


      {/* City of Redding Gallery Section */}
      <motion.section className="py-20 bg-white"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <h3 className="text-4xl font-bold text-gray-800 zen-font mb-4">Redding City Views</h3>
            <p className="text-lg text-gray-600">Explore the beautiful cityscape and landmarks of Redding</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['/cor5.png', '/cor6.png', '/cor7.png', '/cor8.png'].map((image, imgIndex) => (
              <motion.div key={imgIndex} className="relative overflow-hidden rounded-xl shadow-lg group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.8 + imgIndex * 0.1 }}
              >
                <img
                  src={image}
                  alt={`Redding City View ${imgIndex + 5}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="font-semibold text-sm">Redding Landmarks</h4>
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
