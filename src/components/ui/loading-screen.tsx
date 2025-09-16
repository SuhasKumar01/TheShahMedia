"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

interface LoadingScreenProps {
  onComplete?: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [counter, setCounter] = useState(0);

  // Lusion-style counter animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleAnimationComplete = () => {
    console.log('Loading animation sequence completed');
    // Wait a bit after the animation completes before hiding
    setTimeout(() => {
      console.log('Loading screen hiding now');
      setIsVisible(false);
      onComplete?.();
    }, 800);
  };

  // Split "SHAH MEDIA" into individual letters for staggered animation
  const text = "SHAH MEDIA";
  const letters = text.split('');

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-colors duration-1000 bg-[#0a0a0a]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            backgroundColor: '#0a0a0a',
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
          }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center justify-center h-full">
            
            {/* Logo Container */}
            <div className="relative mb-16">
              {/* Your Logo - Lusion style entrance */}
              <motion.div
                initial={{ scale: 0.3, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  delay: 0.5,
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="relative"
              >
                <Image
                  src="/logo-new.png"
                  alt="Shah Media"
                  width={120}
                  height={120}
                  className="w-24 h-24 md:w-32 md:h-32"
                  priority
                />
              </motion.div>
            </div>

            {/* Lusion-style Letter Animation */}
            <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
              {letters.map((letter, index) => (
                <div key={index} className="relative">
                  {/* Duplicate letters for Lusion effect */}
                  <motion.span
                    className="text-white text-4xl md:text-6xl lg:text-7xl font-light tracking-wider absolute"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 0.3 }}
                    transition={{
                      delay: 2 + (index * 0.1),
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                  
                  <motion.span
                    className="text-white text-4xl md:text-6xl lg:text-7xl font-light tracking-wider relative z-10"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 2 + (index * 0.1) + 0.2,
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                </div>
              ))}
            </div>

            {/* Subtitle with Lusion-style reveal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.5, duration: 1 }}
              className="text-white/60 text-sm md:text-base font-light tracking-[0.2em] text-center mb-16"
              onAnimationComplete={handleAnimationComplete}
            >
              DIGITAL EXCELLENCE
            </motion.div>

            {/* Lusion-style Counter */}
            <div className="absolute bottom-8 left-8">
              <div className="flex items-center space-x-4 text-white/40 text-sm font-light">
                <motion.span
                  key={counter}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="font-mono tracking-wider"
                >
                  {counter.toString().padStart(2, '0')}
                </motion.span>
                <div className="w-12 h-px bg-white/20"></div>
                <span className="tracking-wider">100</span>
              </div>
            </div>

            {/* Minimal loading indicator */}
            <div className="absolute bottom-8 right-8">
              <motion.div
                className="w-8 h-8 border border-white/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <motion.div
                  className="w-1 h-1 bg-white rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}