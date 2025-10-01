import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Star, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Attraction {
  id: number;
  name: string;
  image: string;
  description: string;
  features: string[];
  distance: string;
  rating: number;
  driveTime: string;
}

interface AttractionCardProps {
  attraction: Attraction;
  index: number;
  inView: boolean;
}

const AttractionCard: React.FC<AttractionCardProps> = ({ attraction, index, inView }) => {
  const navigate = useNavigate();

  const handleAttractionClick = (attractionName: string) => {
    const routeMap: { [key: string]: string } = {
      'Lake Shasta Caverns': '/lake-shasta-caverns',
      'Mount Shasta': '/mount-shasta',
      'Lassen Volcanic National Park': '/lassen-volcanic',
      'City of Redding': '/city-of-redding',
      'The Burney Falls': '/burney-falls',
      'The McCloud Falls': '/mccloud-falls',
      'Shasta Dam': '/shasta-dam'
    };
    
    const route = routeMap[attractionName];
    if (route) {
      navigate(route);
    }
  };

  return (
    <motion.div
      className={`flex flex-col lg:flex-row gap-8 items-center ${
        index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      {/* Image Section */}
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
      >
        <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
          <img
            src={attraction.image}
            alt={attraction.name}
            className="w-full h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
          <motion.div 
            className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="w-5 h-5 text-yellow-500 fill-current" />
            <span className="text-sm font-bold text-gray-800">{attraction.rating}</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="lg:w-1/2 space-y-6"
        initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
      >
        <div>
          <motion.h3 
            className="text-3xl lg:text-4xl font-bold text-gray-800 zen-font mb-4"
            whileHover={{ color: '#059669' }}
            transition={{ duration: 0.3 }}
          >
            {attraction.name}
          </motion.h3>
          
          <motion.p 
            className="text-lg text-gray-600 leading-relaxed mb-6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
          >
            {attraction.description}
          </motion.p>

          {/* Distance and Rating Info */}
          <div className="flex items-center space-x-6 mb-6">
            <motion.div 
              className="flex items-center space-x-2 text-gray-600"
              whileHover={{ color: '#059669', x: 2 }}
              transition={{ duration: 0.3 }}
            >
              <MapPin className="w-5 h-5" />
              <span className="font-medium">{attraction.distance}</span>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-2 text-gray-600"
              whileHover={{ color: '#059669', x: 2 }}
              transition={{ duration: 0.3 }}
            >
              <Clock className="w-5 h-5" />
              <span className="font-medium">{attraction.driveTime}</span>
            </motion.div>
          </div>
        </div>

        {/* Features List */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
        >
          <h4 className="text-xl font-semibold text-gray-800 mb-4">Key Highlights:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {attraction.features.map((feature, featureIndex) => (
              <motion.div
                key={featureIndex}
                className="flex items-start space-x-3"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.8 + featureIndex * 0.1 }}
              >
                <motion.div 
                  className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.2 }}
                />
                <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Action Button */}
        <motion.button
          onClick={() => handleAttractionClick(attraction.name)}
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold px-8 py-4 rounded-full hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 group shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 + 1.0 }}
        >
          <span>Explore Details</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default AttractionCard;
