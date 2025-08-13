import React from 'react';
import { motion } from 'framer-motion';
import { Users, Home, Check, ArrowRight } from 'lucide-react';

interface Property {
  id: number;
  name: string;
  image: string;
  description: string;
  features: string[];
  capacity: string;
  sqft: string;
}

interface PropertyCardProps {
  property: Property;
  index: number;
  inView: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, index, inView }) => {
  const isReverse = index % 2 === 1;

  return (
    <motion.div
      className={`grid lg:grid-cols-2 gap-12 items-center ${isReverse ? 'lg:grid-flow-col-dense' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      {/* Image */}
      <motion.div
        className={`relative overflow-hidden rounded-2xl shadow-2xl ${isReverse ? 'lg:col-start-2' : ''}`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* Floating Stats */}
        <div className="absolute top-6 right-6 space-y-2">
          <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
          >
            <Users className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
            <div className="text-sm font-semibold text-gray-800">{property.capacity}</div>
          </motion.div>
          <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
          >
            <Home className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
            <div className="text-sm font-semibold text-gray-800">{property.sqft}</div>
          </motion.div>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        className={`space-y-6 ${isReverse ? 'lg:col-start-1' : ''}`}
        initial={{ opacity: 0, x: isReverse ? 50 : -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
      >
        <div>
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-gray-800 zen-font mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
          >
            {property.name}
          </motion.h3>
          <motion.p
            className="text-lg text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
          >
            {property.description}
          </motion.p>
        </div>

        <motion.div
          className="grid sm:grid-cols-2 gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
        >
          {property.features.map((feature, featureIndex) => (
            <motion.div
              key={featureIndex}
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.8 + featureIndex * 0.05 }}
            >
              <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          className="flex items-center space-x-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors group"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
          whileHover={{ x: 5 }}
        >
          <span>View Details</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default PropertyCard;