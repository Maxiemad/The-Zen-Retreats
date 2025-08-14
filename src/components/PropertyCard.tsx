import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Home, Check, ArrowRight } from 'lucide-react';
import ImageCarousel from './ImageCarousel';

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zenSpaceImageIndex, setZenSpaceImageIndex] = useState(0);
  const [zenHouseImageIndex, setZenHouseImageIndex] = useState(0);

  // Carousel images for The Zen Paradise
  const zenParadiseImages = [
    {
      src: '/pimg1.png',
      title: 'The Zen Paradise',
      subtitle: '2800 sq ft of luxury living space'
    },
    {
      src: '/pimg2.png',
      title: 'Master Suite',
      subtitle: 'With fireplace and lake views'
    },
    {
      src: '/pimg3.png',
      title: 'Wrap Around Decks',
      subtitle: 'Two large decks for outdoor living'
    },
    {
      src: '/pimg4.png',
      title: 'Premium Entertainment',
      subtitle: '65" TV with premium sound-bar'
    },
    {
      src: '/pimg5.png',
      title: 'Comfortable Living',
      subtitle: 'Sleeps 9 guests comfortably'
    },
    {
      src: '/pimg1.png',
      title: 'Breathtaking Views',
      subtitle: 'Most stunning views of Shasta Lake'
    }
  ];

  // Carousel images for The Zen Space
  const zenSpaceImages = [
    {
      src: '/simg1.png',
      title: 'The Zen Space',
      subtitle: 'Group activity space between houses'
    },
    {
      src: '/simg2.png',
      title: 'Beautiful Gazebo',
      subtitle: 'Perfect for outdoor gatherings'
    },
    {
      src: '/simg3.png',
      title: 'Outdoor Sitting Area',
      subtitle: 'With fireplace for cozy evenings'
    },
    {
      src: '/simg4.png',
      title: 'BBQ & Entertainment',
      subtitle: 'Grill and entertainment area'
    },
    {
      src: '/simg5.png',
      title: 'Lake Views',
      subtitle: 'Clear, unobstructed views of Shasta Lake'
    },
    {
      src: '/simg1.png',
      title: 'Private Hiking Trail',
      subtitle: 'Explore nature at your doorstep'
    }
  ];

  // Carousel images for The Zen House
  const zenHouseImages = [
    {
      src: '/himg1.png',
      title: 'The Zen House',
      subtitle: '2400 sq ft + 1000 sq ft entertainment space'
    },
    {
      src: '/himg2.png',
      title: 'Master Suites',
      subtitle: '2 Master suites with lake views'
    },
    {
      src: '/himg3.png',
      title: 'Entertainment Space',
      subtitle: 'Pool table & ping pong table'
    },
    {
      src: '/himg4.png',
      title: 'Giant Screen',
      subtitle: 'Projector with giant screen'
    },
    {
      src: '/himg5.png',
      title: 'Comfortable Living',
      subtitle: 'Sleeps 12 (max 9 adults)'
    },
    {
      src: '/himg1.png',
      title: 'Spacious Layout',
      subtitle: '3 bedrooms & 3.5 bathrooms'
    }
  ];

  const handleReachOut = () => {
    const subject = encodeURIComponent(`Inquiry About ${property.name} - The Zen Retreats`);
    const body = encodeURIComponent(`Hello Team Zen Retreats,

I visited your website and I'm interested in learning more about ${property.name}.
I would like to know more about the property details, availability, pricing, and booking process.
Please share any additional information, photos, or brochures that could help me make a decision.

Thanks and Regards,
[Your Name]`);
    
    window.location.href = `mailto:info@thezenretreats.com?subject=${subject}&body=${body}`;
  };

  return (
    <motion.div
      className={`grid lg:grid-cols-2 gap-12 items-center ${isReverse ? 'lg:grid-flow-col-dense' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      {/* Image or Carousel */}
      <motion.div
        className={`relative ${isReverse ? 'lg:col-start-2' : ''}`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {property.name === 'The Zen Paradise' ? (
          <ImageCarousel
            images={zenParadiseImages}
            autoSlideInterval={3500}
            currentIndex={currentImageIndex}
            onIndexChange={setCurrentImageIndex}
            onImageChange={(index) => {
              console.log('Zen Paradise image index:', index);
              setCurrentImageIndex(index);
            }}
          />
        ) : property.name === 'The Zen Space' ? (
          <ImageCarousel
            images={zenSpaceImages}
            autoSlideInterval={3500}
            currentIndex={zenSpaceImageIndex}
            onIndexChange={setZenSpaceImageIndex}
            onImageChange={(index) => {
              console.log('Zen Space image index:', index);
              setZenSpaceImageIndex(index);
            }}
          />
        ) : property.name === 'The Zen House' ? (
          <ImageCarousel
            images={zenHouseImages}
            autoSlideInterval={3500}
            currentIndex={zenHouseImageIndex}
            onIndexChange={setZenHouseImageIndex}
            onImageChange={(index) => {
              console.log('Zen House image index:', index);
              setZenHouseImageIndex(index);
            }}
          />
        ) : (
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
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
          </div>
        )}
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
          onClick={handleReachOut}
          className="flex items-center space-x-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors group"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
          whileHover={{ x: 5 }}
        >
          <span>Reach Out</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default PropertyCard;