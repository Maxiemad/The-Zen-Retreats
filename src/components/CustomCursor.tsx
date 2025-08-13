import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;
    let animationFrame: number;
    let firstMove = true;

    const updateMousePosition = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (firstMove) {
        cursorX = mouseX;
        cursorY = mouseY;
        dotX = mouseX;
        dotY = mouseY;
        setVisible(true);
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate3d(${cursorX - 16}px, ${cursorY - 16}px, 0)`;
        }
        if (dotRef.current) {
          dotRef.current.style.transform = `translate3d(${dotX - 8}px, ${dotY - 8}px, 0)`;
        }
        firstMove = false;
      }
    };

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.22;
      cursorY += (mouseY - cursorY) * 0.22;
      dotX += (mouseX - dotX) * 0.38;
      dotY += (mouseY - dotY) * 0.38;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorX - 16}px, ${cursorY - 16}px, 0)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotX - 8}px, ${dotY - 8}px, 0)`;
      }
      animationFrame = requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => setCursorVariant('hover');
    const handleMouseLeave = () => setCursorVariant('default');

    window.addEventListener('mousemove', updateMousePosition);
    animationFrame = requestAnimationFrame(animate);

    // Add hover effects to interactive elements
    const links = document.querySelectorAll('a, button, [role="button"]');
    links.forEach((link) => {
      link.addEventListener('mouseenter', handleMouseEnter);
      link.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      cancelAnimationFrame(animationFrame);
      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleMouseEnter);
        link.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const variants = {
    default: {
      scale: 1,
    },
    hover: {
      scale: 2,
      mixBlendMode: 'difference' as const,
    },
  };

  if (!visible) return null;

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="fixed w-8 h-8 rounded-full border-2 border-emerald-400 bg-transparent pointer-events-none z-50"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
        style={{
          willChange: 'transform',
          transition: 'transform 0.15s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      />
      <motion.div
        ref={dotRef}
        className="fixed w-4 h-4 rounded-full pointer-events-none z-50 bg-black"
        style={{
          willChange: 'transform',
        }}
      />
    </>
  );
};

export default CustomCursor;