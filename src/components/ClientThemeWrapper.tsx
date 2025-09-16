'use client';

import React, { useEffect } from 'react';

interface ClientThemeWrapperProps {
  children: React.ReactNode;
}

export default function ClientThemeWrapper({ children }: ClientThemeWrapperProps) {
  useEffect(() => {
    // Always apply dark mode
    document.documentElement.classList.add('dark');
  }, []);

  return <>{children}</>;
}