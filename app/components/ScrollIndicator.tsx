'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ScrollIndicatorProps {
  currentSection: number;
  totalSections: number;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ currentSection, totalSections }) => {
  return (
    <div className="fixed right-10 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
      <div className="flex flex-col items-center space-y-4">
        {Array.from({ length: totalSections }).map((_, index) => (
          <motion.a
            key={index}
            href={`#section${index + 1}`}
            className="block w-3 h-3 rounded-full border-2 border-white"
            initial={false}
            animate={{
              scale: currentSection === index ? 1.5 : 1,
              backgroundColor: currentSection === index ? '#facc15' : 'rgba(255, 255, 255, 0.3)',
            }}
            whileHover={{ scale: 1.8 }}
            transition={{ duration: 0.2 }}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollIndicator;