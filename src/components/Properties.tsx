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
      description: 'Our premium property with the most breathtaking views of Shasta Lake, offering a perfect blend of comfort, style, and nature\'s beauty. Designed for those who seek both relaxation and luxury in one unforgettable stay.',
      features: [
        '3 spacious bedrooms & 2.5 luxurious bathrooms',
        '2 large wrap-around decks with panoramic lake views',
        'Master suite with fireplace, soaking tub & walk-in closet',
        '65" TV with premium sound-bar for immersive entertainment',
        'Fully equipped gourmet kitchen with modern appliances',
        'Elegant formal dining room with lake views',
        'Dimmable lighting in every room for perfect ambiance',
        'Outdoor BBQ grill & hammock for lakeside relaxation',
        'Sleeps 9 comfortably with plush bedding and premium linens'
      ],
      capacity: '9 guests',
      sqft: '2800 sq ft'
    },
    {
      id: 2,
      name: 'The Zen Space',
      image: 'https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      description: 'The group activity space centrally located between the two houses, designed specifically for retreat rentals. A place where guests gather, connect, and create unforgettable moments. Surrounded by nature, it\'s the heart of every stay.',
      features: [
        'Beautiful gazebo',
        'Outdoor sitting area with fireplace',
        'BBQ grill and entertainment area',
        'Outdoor bathroom with hot water',
        'Clear, unobstructed lake views',
        'Private hiking trail',
        'Cozy string lighting for evening ambiance',
        'Outdoor yoga & meditation zone',
        'Lawn area for games & events',
        'Shaded lounge corners for relaxing afternoons'
      ],
      capacity: 'Group activities',
      sqft: 'Outdoor space'
    },
    {
      id: 3,
      name: 'The Zen House',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      description: 'A large house offering 2400 sq ft of living space and an additional 1000 sq ft of dedicated entertainment space. Perfect for family reunions, retreats, and group getaways. Designed for comfort, fun, and stunning lakefront moments.',
      features: [
        '2400 sq ft + 1000 sq ft entertainment space',
        '3 bedrooms & 3.5 bathrooms',
        '2 master suites with breathtaking lake views',
        'Pool table & ping pong table',
        'Projector with giant screen for movie nights',
        'Sleeps 12 (max 9 adults)',
        'Spacious wrap-around deck with outdoor seating',
        'Fully equipped kitchen with modern appliances',
        'Indoor fireplace for cozy evenings',
        'Outdoor BBQ area with panoramic views'
      ],
      capacity: '12 guests',
      sqft: '3400 sq ft'
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

        <div className="space-y-16">
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