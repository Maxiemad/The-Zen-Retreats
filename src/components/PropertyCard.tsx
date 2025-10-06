import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Home, Check, ArrowRight, Eye } from 'lucide-react';
import ImageCarousel from './ImageCarousel';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const isReverse = index % 2 === 1;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zenSpaceImageIndex, setZenSpaceImageIndex] = useState(0);
  const [zenHouseImageIndex, setZenHouseImageIndex] = useState(0);
  const [zenHavenImageIndex, setZenHavenImageIndex] = useState(0);

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

  // Carousel images for The Zen Haven
  const zenHavenImages = [
    {
      src: '/himg1.png',
      title: 'The Zen Haven',
      subtitle: 'Family-friendly lakeside oasis'
    },
    {
      src: '/himg2.png',
      title: '4 Bedrooms',
      subtitle: 'Sleeps 12+ guests comfortably'
    },
    {
      src: '/himg3.png',
      title: '900 sq ft Deck',
      subtitle: 'With BBQ and stunning lake views'
    },
    {
      src: '/himg4.png',
      title: 'Entertainment Area',
      subtitle: 'Poker set, corn hole & ping pong'
    },
    {
      src: '/himg5.png',
      title: 'Gourmet Kitchen',
      subtitle: 'Fully equipped for family meals'
    },
    {
      src: '/himg1.png',
      title: 'Kid-Friendly',
      subtitle: 'Dedicated kids room & amenities'
    }
  ];

  const handleBookNow = () => {
    const bookingUrls: { [key: string]: string } = {
      'The Zen Paradise': 'https://www.gotoretreats.com/l/entire-villa-in-shasta-county-california-united-states/66305151-798d-40a1-971f-a6c5b75da920',
      'The Zen House': 'https://www.gotoretreats.com/l/entire-home-in-shasta-county-california-united-states/6631c108-f6ec-44bd-92f3-c0cecb484531',
      'The Zen Space': 'https://www.gotoretreats.com/l/mt-shasta-retreat-venue-with-premium-views-of-shasta-lake/65ebfa9d-a3d7-41b2-81c1-2201c222a56f',
      'The Zen Haven': 'https://www.gotoretreats.com/l/the-zen-haven-family-friendly-lakeside-oasis/681e960b-0681-4efa-8c53-41aefd092507'
    };
    
    const bookingUrl = bookingUrls[property.name];
    if (bookingUrl) {
      window.open(bookingUrl, '_blank');
    }
  };

  const handleViewDetails = () => {
    const routeMap: { [key: string]: string } = {
      'The Zen Paradise': '/zen-paradise',
      'The Zen Space': '/zen-space',
      'The Zen House': '/zen-house',
      'The Zen Haven': '/zen-haven'
    };
    
    const route = routeMap[property.name];
    if (route) {
      navigate(route);
    }
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
        ) : property.name === 'The Zen Haven' ? (
          <ImageCarousel
            images={zenHavenImages}
            autoSlideInterval={3500}
            currentIndex={zenHavenImageIndex}
            onIndexChange={setZenHavenImageIndex}
            onImageChange={(index) => {
              console.log('Zen Haven image index:', index);
              setZenHavenImageIndex(index);
            }}
          />
        ) : (
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-[300px] object-cover"
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

        <div className="flex flex-col sm:flex-row gap-3">
          <motion.button
            onClick={handleViewDetails}
            className="flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 group"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            <Eye className="w-5 h-5" />
            <span>View Details</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          <motion.button
            onClick={handleBookNow}
            className="flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 group py-3 px-6 rounded-lg shadow-lg hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.95 + index * 0.1 }}
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Book Now</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PropertyCard;