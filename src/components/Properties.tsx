import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PropertyCard from './PropertyCard';

const Properties = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const properties = [
    {
      id: 1,
      name: 'The Zen Paradise',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      description: 'Premium property with stunning Shasta Lake views and luxury amenities.',
      features: [
        '3 bedrooms & 2.5 bathrooms',
        'Wrap-around decks',
        'Master suite with fireplace',
        '65" TV & sound system',
        'Gourmet kitchen',
        'Formal dining room',
        'Outdoor BBQ & hammock',
        'Sleeps 9'
      ],
      capacity: '9 guests',
      sqft: '2800 sq ft'
    },
    {
      id: 2,
      name: 'The Zen Space',
      image: 'https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      description: 'Group activity space perfect for retreats and gatherings.',
      features: [
        'Beautiful gazebo',
        'Outdoor fireplace',
        'BBQ & entertainment space',
        'Outdoor bathroom',
        'Lake views',
        'Private hiking trail',
        'String lighting',
        'Outdoor yoga & meditation zone'
      ],
      capacity: 'Group activities',
      sqft: 'Outdoor space'
    },
    {
      id: 3,
      name: 'The Zen House',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      description: 'Large house with 2400 sq ft living plus 1000 sq ft entertainment space.',
      features: [
        '2400 + 1000 sq ft',
        '3 bedrooms & 3.5 bathrooms',
        '2 master suites',
        'Pool & ping pong tables',
        'Projector & giant screen',
        'Sleeps 12',
        'Wrap-around deck',
        'Fireplace & BBQ'
      ],
      capacity: '12 guests',
      sqft: '3400 sq ft'
    },
    {
      id: 4,
      name: 'The Zen Haven',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      description: 'Family-friendly lakeside oasis with 4 bedrooms, entertainment-packed retreat just 2 minutes from the lake.',
      features: [
        '4 bedrooms & 3 bathrooms',
        'Sleeps 12+ guests',
        '900 sq ft deck with BBQ',
        'Poker set & corn hole',
        'Ping pong table',
        'Gourmet kitchen',
        'Elevator access available',
        'Kid-friendly amenities'
      ],
      capacity: '12+ guests',
      sqft: 'Family retreat space'
    }
  ];

  return (
    <section id="properties" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 zen-font mb-6">
            An Overview of The Zen Retreats
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our three distinct spaces, each designed to provide the ultimate retreat experience 
            with modern amenities and breathtaking natural beauty.
          </p>
        </motion.div>

        <div className="space-y-8">
          {properties.map((property, index) => (
            <PropertyCard
              key={property.id}
              property={property}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;