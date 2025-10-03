import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, MapPin, Users, Star, Home, Wifi, Car, Utensils, Gamepad2, Baby, Accessibility, Shield, Clock, Phone } from 'lucide-react';

const ZenHaven = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const sleepingArrangements = [
    { room: 'Master', beds: 'King + rollaway' },
    { room: 'Junior Suite', beds: 'King' },
    { room: 'Room 3', beds: 'Queen' },
    { room: 'Kids', beds: 'Bunk, trundle (king), + rollaway' }
  ];

  const funActivities = [
    { activity: 'Poker set', location: 'Garage' },
    { activity: 'Corn hole', location: 'Backyard' },
    { activity: 'Ping pong', location: 'Under stairs' }
  ];

  const essentials = [
    { item: 'Breaker', location: 'Kitchen pantry' },
    { item: 'Toiletries', location: 'Bath vanity' },
    { item: 'Blankets', location: 'Laundry room' }
  ];

  const amenities = [
    { icon: <Home className="w-8 h-8 text-emerald-600" />, title: 'Air Conditioning', value: 'Climate Control' },
    { icon: <Wifi className="w-8 h-8 text-emerald-600" />, title: 'WiFi', value: 'High-Speed Internet' },
    { icon: <Car className="w-8 h-8 text-emerald-600" />, title: 'Parking', value: 'Ample Space' },
    { icon: <Utensils className="w-8 h-8 text-emerald-600" />, title: 'BBQ Grill', value: 'Outdoor Cooking' },
    { icon: <Gamepad2 className="w-8 h-8 text-emerald-600" />, title: 'Entertainment', value: 'Games & Activities' },
    { icon: <Baby className="w-8 h-8 text-emerald-600" />, title: 'Kid-Friendly', value: 'Family Amenities' },
    { icon: <Accessibility className="w-8 h-8 text-emerald-600" />, title: 'Elevator Access', value: 'On Request' },
    { icon: <Shield className="w-8 h-8 text-emerald-600" />, title: 'Security', value: 'Safe & Secure' }
  ];

  const propertyHighlights = [
    {
      title: 'Prime Location, Yet Peaceful',
      description: 'Just a 2-minute stroll to the lake and marina, yet tucked on a quiet hillside with breathtaking views—offering the best of both access and serenity.'
    },
    {
      title: 'Space for Everyone',
      description: 'Whether it\'s a big family trip or a group getaway, the spacious layout with multiple gathering areas and plenty of beds means no one\'s left out.'
    },
    {
      title: 'Designed for Fun & Connection',
      description: 'From the poker set and corn hole to ping pong and a full entertainment system, it\'s packed with games and spaces meant for bonding and laughter.'
    },
    {
      title: 'Kid-Friendly Comforts',
      description: 'A dedicated kids\' room, toys, books, and daybeds make it magical for younger guests—and relaxing for parents.'
    },
    {
      title: 'Stylish & Functional',
      description: 'High ceilings, tasteful furnishings, a well-stocked kitchen, and luxury linens create a sense of ease and elegance throughout the home.'
    },
    {
      title: 'Outdoor Living at Its Best',
      description: 'A 900 sq. ft. deck with comfy seating, a grill, and jaw-dropping views makes every meal and sunset feel special.'
    }
  ];

  const accessibleAreas = [
    '🏡 The Main House – All bedrooms, bathrooms, kitchen, dining areas, and cozy lounges.',
    '🧘‍♀️ Indoor & Outdoor Gathering Spaces – Perfect for group activities, workshops, yoga, or quiet reflection.',
    '🌅 900 sq. ft. Deck – With comfortable seating, a large dining table, and BBQ grill—all overlooking stunning lake and hill views.',
    '🎉 Entertainment Areas – Including the pool table, ping pong table, poker set, corn hole, and 65" smart TV.',
    '🧸 Kids\' Room & Play Area – Ideal for family-friendly retreats.',
    '🚗 Ample Parking – Space for cars, boats, and trailers, plus a boat garage.',
    '🛗 Elevator Access – Available upon request for guests with mobility needs (note: not for children).'
  ];

  return (
    <div className="min-h-screen dramatic-bg-2 particle-bg floating-elements relative overflow-hidden">
      {/* Hero Section */}
      <motion.section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/himg1.png"
            alt="The Zen Haven"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <motion.div className="relative z-10 text-center text-white px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1 className="text-6xl md:text-8xl font-bold mb-6 zen-font gradient-text-animated"
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          >
            The Zen Haven
          </motion.h1>
          <motion.p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Family-Friendly Lakeside Oasis
          </motion.p>
          <motion.button
            className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 flex items-center space-x-2 mx-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <span>Book Now</span>
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Overview Section */}
      <motion.section ref={ref}
        className="py-20 bg-white"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 zen-font mb-6">
              Lakeside Zen Haven – Spacious, Stylish & Fun!
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Welcome to your perfect escape just 2 minutes from the lake! This kid-friendly, entertainment-packed retreat features 4 cozy bedrooms (sleeps 12+), a gourmet kitchen, spacious indoor/outdoor living areas, and tons of activities—from poker and ping pong to a 900 sq. ft. deck with BBQ and views. With modern comforts, ample parking, and elevator access (by request), Zen Haven is your home for unforgettable lake memories!
            </p>
          </motion.div>

          {/* Property Details Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <motion.div className="bg-white rounded-xl p-6 shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Home className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Property Type</h3>
              <p className="text-gray-600">House, Villa or Mansion</p>
            </motion.div>
            <motion.div className="bg-white rounded-xl p-6 shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Users className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Sleeping Capacity</h3>
              <p className="text-gray-600">12+ Guests</p>
            </motion.div>
            <motion.div className="bg-white rounded-xl p-6 shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Home className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Bedrooms</h3>
              <p className="text-gray-600">4 Bedrooms</p>
            </motion.div>
            <motion.div className="bg-white rounded-xl p-6 shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Home className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Bathrooms</h3>
              <p className="text-gray-600">3 Bathrooms</p>
            </motion.div>
          </div>

          {/* Sleeping Arrangements */}
          <motion.div className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-gray-800 zen-font mb-8 text-center">🛏️ Sleeping Arrangements</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sleepingArrangements.map((room, index) => (
                <motion.div key={index} className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{room.room}</h4>
                  <p className="text-gray-600">{room.beds}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Fun Activities & Essentials */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-gray-800 zen-font mb-8">🎉 For Fun</h3>
              <div className="space-y-4">
                {funActivities.map((activity, index) => (
                  <motion.div key={index} className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  >
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    <div>
                      <p className="font-semibold text-gray-800">{activity.activity}</p>
                      <p className="text-gray-600 text-sm">({activity.location})</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-gray-800 zen-font mb-8">🧺 Essentials</h3>
              <div className="space-y-4">
                {essentials.map((item, index) => (
                  <motion.div key={index} className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md"
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  >
                    <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                    <div>
                      <p className="font-semibold text-gray-800">{item.item}</p>
                      <p className="text-gray-600 text-sm">({item.location})</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Amenities */}
          <motion.div className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h3 className="text-3xl font-bold text-gray-800 zen-font mb-8 text-center">Amenities</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {amenities.map((amenity, index) => (
                <motion.div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                >
                  {amenity.icon}
                  <h4 className="text-lg font-bold text-gray-800 mt-4 mb-2">{amenity.title}</h4>
                  <p className="text-gray-600">{amenity.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Property Highlights */}
          <motion.div className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <h3 className="text-3xl font-bold text-gray-800 zen-font mb-8 text-center">What makes this property lovable!</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {propertyHighlights.map((highlight, index) => (
                <motion.div key={index} className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-8 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                >
                  <h4 className="text-xl font-bold text-gray-800 mb-4">{highlight.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Accessible Areas */}
          <motion.div className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-800 zen-font mb-8 text-center">What parts of the property are accessible to retreat guests?</h3>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <p className="text-gray-600 mb-6">Retreat guests will have full, private access to the entire property, including:</p>
              <div className="space-y-4">
                {accessibleAreas.map((area, index) => (
                  <motion.div key={index} className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 2.0 + index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">{area}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* House Rules & Contact */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 2.2 }}
            >
              <h3 className="text-3xl font-bold text-gray-800 zen-font mb-8">🏡 House Rules</h3>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-6 h-6 text-red-500 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">No Smoking</p>
                      <p className="text-gray-600">Smoking of any kind (including vaping) is not allowed inside the home or on the deck.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-blue-500 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">Respect the Space</p>
                      <p className="text-gray-600">Please treat the home with care and leave it as you found it. Quiet hours begin at 10 PM.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 2.4 }}
            >
              <h3 className="text-3xl font-bold text-gray-800 zen-font mb-8">Contact Information</h3>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6 text-emerald-500" />
                    <div>
                      <p className="font-semibold text-gray-800">Emergency Contact</p>
                      <p className="text-gray-600">For emergency please call us through our number.</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-emerald-500" />
                    <div>
                      <p className="font-semibold text-gray-800">Location</p>
                      <p className="text-gray-600">17833 Skyline Drive, Lakehead, California 96051, United States</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Pricing & Booking */}
          <motion.div className="text-center bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-12 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 2.6 }}
          >
            <h3 className="text-4xl font-bold zen-font mb-6">Ready for Your Perfect Escape?</h3>
            <p className="text-xl mb-8">Starting at $575.00 per night</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Book Now</span>
                <ArrowRight size={20} />
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Send Inquiry</span>
                <ArrowRight size={20} />
              </motion.button>
            </div>
          </motion.div>
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
            <h3 className="text-4xl font-bold text-gray-800 zen-font mb-4">Haven Gallery</h3>
            <p className="text-lg text-gray-600">Explore The Zen Haven family-friendly spaces</p>
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
                  alt={`Zen Haven ${imgIndex + 1}`}
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
                  alt={`Zen Haven ${imgIndex + 5}`}
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

export default ZenHaven;
