import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AttractionCard from './AttractionCard';

const LocalAttractions = () => {
  const navigate = useNavigate();
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

  const attractions = [
    {
      id: 1,
      name: 'Lake Shasta Caverns',
      image: '/ls3.png',
      description: 'Underground limestone caverns with guided tours.',
      features: [
        'Guided cave tours',
        'Boat ride to caverns',
        'Limestone formations',
        'Family-friendly',
        'Photography',
        'Gift shop'
      ],
      rating: 4.8
    },
    {
      id: 2,
      name: 'Mount Shasta',
      image: '/ms3.png',
      description: '14,179-foot volcanic peak with hiking and spiritual experiences.',
      features: [
        'Hiking trails',
        'Spiritual retreats',
        'Alpine lakes',
        'Wildlife viewing',
        'Photography',
        'Year-round activities'
      ],
      rating: 4.9
    },
    {
      id: 3,
      name: 'Lassen Volcanic National Park',
      image: '/lvp2.png',
      description: 'Volcanic landscape with geothermal features and lakes.',
      features: [
        'Geothermal features',
        'Alpine lakes',
        'Hiking trails',
        'Wildlife viewing',
        'Visitor center',
        'Camping'
      ],
      rating: 4.7
    },
    {
      id: 4,
      name: 'City of Redding',
      image: '/cor1.png',
      description: 'Modern city with shopping, dining, and cultural attractions.',
      features: [
        'Sundial Bridge',
        'Turtle Bay Park',
        'Shopping',
        'Dining',
        'Museums',
        'Airport'
      ],
      rating: 4.5
    },
    {
      id: 5,
      name: 'The Burney Falls',
      image: '/bf1.png',
      description: '129-foot waterfall - "Eighth Wonder of the World".',
      features: [
        '129-foot waterfall',
        'Viewing platform',
        'Swimming',
        'Photography',
        'Picnic areas',
        'Hiking'
      ],
      rating: 4.8
    },
    {
      id: 6,
      name: 'The McCloud Falls',
      image: '/mcf1.png',
      description: 'Three waterfalls along the McCloud River.',
      features: [
        'Three waterfalls',
        'Hiking trails',
        'Swimming',
        'Photography',
        'Picnic areas',
        'Forest setting'
      ],
      rating: 4.6
    },
    {
      id: 7,
      name: 'Shasta Dam',
      image: '/sd1.png',
      description: 'Second tallest dam in the US with guided tours.',
      features: [
        'Guided tours',
        'Lake views',
        'Educational exhibits',
        'Photography',
        'Visitor center',
        'Hiking'
      ],
      rating: 4.7
    }
  ];

  return (
    <section id="attractions" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 zen-font mb-6">
            Local Attractions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Northern California is blessed with unmatched natural beauty. Discover amazing locations 
            within an hour's drive from our retreat, each offering unique experiences and breathtaking views.
          </p>
        </motion.div>

        <div className="space-y-8">
          {attractions.map((attraction, index) => (
            <AttractionCard
              key={attraction.id}
              attraction={attraction}
              index={index}
              inView={inView}
            />
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
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