"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { useLoading } from "@/contexts/LoadingContext";

interface ClientLayoutWrapperProps {
  children: React.ReactNode;
}

export function ClientLayoutWrapper({ children }: ClientLayoutWrapperProps) {
  const { isLoading, hasLoadedOnce, setIsLoading } = useLoading();
  const [showLoading, setShowLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    if (hasLoadedOnce) {
      setShowLoading(false);
      // Delay content visibility to ensure smooth transition
      setTimeout(() => setContentVisible(true), 100);
    }
  }, [hasLoadedOnce]);

  const handleLoadingComplete = () => {
    console.log('ClientLayoutWrapper: Loading complete, setting session storage');
    setIsLoading(false);
    setShowLoading(false);
    // Smooth transition to content
    setTimeout(() => setContentVisible(true), 200);
  };

  return (
    <div className="min-h-screen transition-colors duration-1000 bg-[var(--bg-primary)]">
      <AnimatePresence mode="wait">
        {showLoading && isLoading && (
          <LoadingScreen onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: contentVisible || hasLoadedOnce ? 1 : 0,
        }}
        transition={{ 
          duration: 1.2, 
          ease: [0.16, 1, 0.3, 1],
          delay: showLoading ? 0 : 0.3
        }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </div>
  );
}