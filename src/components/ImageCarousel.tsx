import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselImage {
  src: string;
  title: string;
  subtitle: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  autoSlideInterval?: number;
  onImageChange?: (index: number) => void;
  currentIndex?: number;
  onIndexChange?: (index: number) => void;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  autoSlideInterval = 4000,
  onImageChange,
  currentIndex: controlledIndex,
  onIndexChange
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Use controlled index if provided, otherwise use internal state
  const activeIndex = controlledIndex !== undefined ? controlledIndex : currentIndex;

  const nextSlide = () => {
    const nextIndex = (activeIndex + 1) % images.length;
    if (controlledIndex !== undefined) {
      onIndexChange?.(nextIndex);
    } else {
      setCurrentIndex(nextIndex);
    }
    onImageChange?.(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    if (controlledIndex !== undefined) {
      onIndexChange?.(prevIndex);
    } else {
      setCurrentIndex(prevIndex);
    }
    onImageChange?.(prevIndex);
  };

  const goToSlide = (index: number) => {
    if (controlledIndex !== undefined) {
      onIndexChange?.(index);
    } else {
      setCurrentIndex(index);
    }
    onImageChange?.(index);
  };

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);

    return () => {
      clearInterval(slideInterval);
    };
  }, [activeIndex, autoSlideInterval, images.length]);

  // Pause auto-play on hover
  const handleMouseEnter = () => {
    // Pause auto-play on hover
  };
  const handleMouseLeave = () => {
    // Resume auto-play on mouse leave
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, images.length]);

  // Touch handlers for mobile swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <div 
      className="relative overflow-hidden rounded-2xl shadow-2xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Image Container */}
      <div className="relative h-[600px] w-full">
        <div className="absolute inset-0">
          <img
            src={images[activeIndex].src}
            alt={images[activeIndex].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        </div>

        {/* Text Overlay */}
        <div className="absolute bottom-8 left-8 right-8 text-white">
          <h3 className="text-2xl font-bold zen-font mb-2">{images[activeIndex].title}</h3>
          <p className="text-white/90">{images[activeIndex].subtitle}</p>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

              {/* Image Counter */}
        <div className="absolute top-4 right-4 bg-black/30 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
          {activeIndex + 1} / {images.length}
        </div>
    </div>
  );
};

export default ImageCarousel;
