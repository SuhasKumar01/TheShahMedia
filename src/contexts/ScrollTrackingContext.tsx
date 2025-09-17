"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface ScrollTrackingContextType {
  isScrollTrackingDisabled: boolean;
  disableScrollTracking: () => void;
  enableScrollTracking: () => void;
}

const ScrollTrackingContext = createContext<ScrollTrackingContextType | undefined>(undefined);

export function ScrollTrackingProvider({ children }: { children: React.ReactNode }) {
  const [isScrollTrackingDisabled, setIsScrollTrackingDisabled] = useState(false);

  const disableScrollTracking = () => {
    console.log('🚫 GLOBAL SCROLL TRACKING DISABLED');
    setIsScrollTrackingDisabled(true);
  };

  const enableScrollTracking = () => {
    console.log('✅ GLOBAL SCROLL TRACKING ENABLED');
    setIsScrollTrackingDisabled(false);
  };

  // Log state changes
  useEffect(() => {
    console.log('🔄 Scroll Tracking State Changed:', { isScrollTrackingDisabled });
  }, [isScrollTrackingDisabled]);

  return (
    <ScrollTrackingContext.Provider 
      value={{ 
        isScrollTrackingDisabled, 
        disableScrollTracking, 
        enableScrollTracking 
      }}
    >
      {children}
    </ScrollTrackingContext.Provider>
  );
}

export function useScrollTracking() {
  const context = useContext(ScrollTrackingContext);
  if (context === undefined) {
    throw new Error('useScrollTracking must be used within a ScrollTrackingProvider');
  }
  return context;
}