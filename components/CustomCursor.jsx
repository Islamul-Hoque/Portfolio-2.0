'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const cursorX = useSpring(0, { damping: 20, stiffness: 200 });
  const cursorY = useSpring(0, { damping: 20, stiffness: 200 });
  
  const ringX = useSpring(0, { damping: 15, stiffness: 150 });
  const ringY = useSpring(0, { damping: 15, stiffness: 150 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches || 'ontouchstart' in window);
    };
    checkMobile();

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
    };

    const handleHover = (e) => {
      const target = e.target;
      if (
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Small Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-blue-500 rounded-full z-[9999] pointer-events-none mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      {/* Glowing Outer Circle */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-blue-500/50 rounded-full z-[9998] pointer-events-none shadow-[0_0_15px_rgba(59,130,246,0.3)]"
        animate={{
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
          borderColor: isHovered ? 'rgba(59, 130, 246, 0.8)' : 'rgba(59, 130, 246, 0.3)',
        }}
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
};

export default CustomCursor;
