import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash navigation on page load
  useEffect(() => {
    if (location.pathname === '/' && window.location.hash === '#about') {
      setTimeout(() => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
    }
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const properties = [
    { name: 'The Zen Paradise', href: '/zen-paradise' },
    { name: 'The Zen Space', href: '/zen-space' },
    { name: 'The Zen House', href: '/zen-house' },
  ];

  const attractions = [
    { name: 'Lake Shasta Caverns', href: '/lake-shasta-caverns' },
    { name: 'Mount Shasta', href: '/mount-shasta' },
    { name: 'Lassen Volcanic National Park', href: '/lassen-volcanic' },
    { name: 'City of Redding', href: '/city-of-redding' },
    { name: 'The Burney Falls', href: '/burney-falls' },
    { name: 'The McCloud Falls', href: '/mccloud-falls' },
    { name: 'Shasta Dam', href: '/shasta-dam' },
  ];

  const navItems = [
    { name: 'Home', href: '/', isLink: true },
    { name: 'About', href: '#about', isLink: false },
    { name: 'Properties', href: '#properties', hasDropdown: true, dropdownItems: properties },
    { name: 'Local Attractions', href: '#attractions', hasDropdown: true, dropdownItems: attractions },
    { name: 'Contact', href: '/contact', isLink: true },
  ];

  const handleDropdownToggle = (e: React.MouseEvent, itemName: string) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const handleAboutClick = () => {
    if (location.pathname === '/') {
      // If on homepage, scroll to about section
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // If on other pages, navigate to homepage with about section
      navigate('/#about');
    }
  };

  return (
    <motion.header
      className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center space-x-2"
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/">
              <img 
                src="/image copy.png" 
                alt="The Zen Retreats" 
                className="h-8 w-auto"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <motion.button
                      onClick={(e) => handleDropdownToggle(e, item.name)}
                      className={`font-medium transition-colors duration-300 hover:text-emerald-500 flex items-center space-x-1 ${
                        isScrolled ? 'text-gray-700' : 'text-white'
                      }`}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -2 }}
                    >
                      <span>{item.name}</span>
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} 
                      />
                    </motion.button>
                    
                    {/* Dropdown Menu */}
                    {activeDropdown === item.name && (
                      <motion.div
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.dropdownItems?.map((dropdownItem, idx) => (
                          <motion.div
                            key={dropdownItem.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: idx * 0.05 }}
                          >
                            <Link
                              to={dropdownItem.href}
                              className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-200"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {dropdownItem.name}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {item.isLink ? (
                      <Link
                        to={item.href}
                        className={`font-medium transition-colors duration-300 hover:text-emerald-500 ${
                          isScrolled ? 'text-gray-700' : 'text-white'
                        }`}
                        whileHover={{ y: -2 }}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <button
                        onClick={handleAboutClick}
                        className={`font-medium transition-colors duration-300 hover:text-emerald-500 ${
                          isScrolled ? 'text-gray-700' : 'text-white'
                        }`}
                      >
                        {item.name}
                      </button>
                    )}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className={`md:hidden ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          className={`md:hidden mt-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-white/95 backdrop-blur-md rounded-lg shadow-lg p-4 space-y-3">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <motion.button
                      onClick={(e) => handleDropdownToggle(e, item.name)}
                      className="w-full text-left text-gray-700 font-medium hover:text-emerald-500 transition-colors flex items-center justify-between"
                      whileHover={{ x: 5 }}
                    >
                      <span>{item.name}</span>
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} 
                      />
                    </motion.button>
                    
                    {/* Mobile Dropdown */}
                    {activeDropdown === item.name && (
                      <motion.div
                        className="mt-2 ml-4 space-y-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.dropdownItems?.map((dropdownItem) => (
                          <motion.div
                            key={dropdownItem.name}
                            whileHover={{ x: 5 }}
                          >
                            <Link
                              to={dropdownItem.href}
                              className="block text-gray-600 hover:text-emerald-500 transition-colors text-sm"
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setActiveDropdown(null);
                              }}
                            >
                              {dropdownItem.name}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <motion.div whileHover={{ x: 5 }}>
                    {item.isLink ? (
                      <Link
                        to={item.href}
                        className="block text-gray-700 font-medium hover:text-emerald-500 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <button
                        onClick={() => {
                          handleAboutClick();
                          setIsMobileMenuOpen(false);
                        }}
                        className="block text-gray-700 font-medium hover:text-emerald-500 transition-colors w-full text-left"
                      >
                        {item.name}
                      </button>
                    )}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Header;