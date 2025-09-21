import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Clock, Star } from 'lucide-react';

const LocalAttractions = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const handlePlanAdventure = () => {
    const subject = encodeURIComponent('Plan My Adventure at The Zen Retreats');
    const body = encodeURIComponent(`Hello Team The Zen Retreats,

I'd love to plan an adventure visit. Could you share available packages, recommended itineraries, and pricing?
I'm considering dates around [Month/Date], for [X] people, with interests in [trekking/yoga/wellness].
Please let me know next steps and any essentials to prepare.

Thanks and Regards,
[Your Name]`);
    
    window.location.href = `mailto:info@thezenretreats.com?subject=${subject}&body=${body}`;
  };

  const attractions = [
    {
      name: 'Lake Shasta Caverns',
      image: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      distance: '15 minutes',
      rating: 4.8,
      description: 'Explore stunning underground limestone caverns with guided tours and boat rides.'
    },
    {
      name: 'Mount Shasta',
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      distance: '45 minutes',
      rating: 4.9,
      description: 'Majestic volcanic peak offering hiking, climbing, and spiritual experiences.'
    },
    {
      name: 'Lassen Volcanic National Park',
      image: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      distance: '1.5 hours',
      rating: 4.7,
      description: 'Unique volcanic landscape with geothermal features, lakes, and hiking trails.'
    },
    {
      name: 'City of Redding',
      image: 'https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      distance: '20 minutes',
      rating: 4.5,
      description: 'Modern city with shopping, dining, and cultural attractions including Turtle Bay.'
    },
    {
      name: 'The Burney Falls',
      image: 'https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      distance: '1 hour',
      rating: 4.8,
      description: 'Spectacular 129-foot waterfall known as the "Eighth Wonder of the World".'
    },
    {
      name: 'The McCloud Falls',
      image: 'https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      distance: '1 hour',
      rating: 4.6,
      description: 'Three beautiful waterfalls along the McCloud River with swimming holes.'
    }
  ];

  return (
    <section id="attractions" className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 zen-font mb-6">
            Local Attractions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Northern California is blessed with unmatched natural beauty. Discover amazing locations 
            within an hour's drive from our retreat, each offering unique experiences and breathtaking views.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction, index) => (
            <motion.div
              key={attraction.name}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.02, rotateY: 5 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <motion.div 
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center space-x-1"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold text-gray-800">{attraction.rating}</span>
                </motion.div>
              </div>
              
              <div className="p-6">
                <motion.h3 
                  className="text-xl font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {attraction.name}
                </motion.h3>
                <p className="text-gray-600 mb-4 text-sm group-hover:text-gray-700 transition-colors duration-300">{attraction.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <motion.div 
                    className="flex items-center space-x-1 group-hover:text-emerald-600 transition-colors duration-300"
                    whileHover={{ x: 2 }}
                  >
                    <MapPin className="w-4 h-4" />
                    <span>{attraction.distance}</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center space-x-1 group-hover:text-emerald-600 transition-colors duration-300"
                    whileHover={{ x: 2 }}
                  >
                    <Clock className="w-4 h-4" />
                    <span>Drive time</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <p className="text-lg text-gray-600 mb-6">
            The city of Redding is only 20 minutes away with all modern amenities, including a local airport.
          </p>
          <motion.button
            onClick={handlePlanAdventure}
            className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-full hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
            />
            <span className="relative z-10">Plan Your Adventure</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default LocalAttractions;