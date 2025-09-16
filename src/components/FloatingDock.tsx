"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Target, FileText, Star, Users, Phone } from "lucide-react";
import Link from "next/link";
import { useLoading } from "@/contexts/LoadingContext";

const dockItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "System", href: "#system", icon: Target },
  { name: "Pricing", href: "#pricing", icon: FileText },
  { name: "Results", href: "#results", icon: Star },
  { name: "About", href: "#about", icon: Users },
  { name: "Contact", href: "#contact", icon: Phone },
];

export default function FloatingDock() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { isLoading, hasLoadedOnce } = useLoading();

  useEffect(() => {
    const handleScroll = () => {
      // Show floating dock when scrolled away from hero section (when header is hidden)
      setIsVisible(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hide floating dock during loading animation for premium experience
  if (isLoading || !hasLoadedOnce) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 rounded-2xl shadow-2xl p-3">
            <div className="flex items-center space-x-2">
              {dockItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <Link href={item.href}>
                      <motion.div
                        className="relative p-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-[#007BFF]/10 hover:to-[#008080]/10 cursor-pointer group"
                        whileHover={{ 
                          scale: 1.1, 
                          y: -2,
                          transition: { type: "spring", stiffness: 400, damping: 10 }
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <IconComponent 
                          className={`h-5 w-5 transition-colors duration-300 ${
                            hoveredIndex === index 
                              ? "text-[#007BFF]" 
                              : "text-[#111111]/70 dark:text-white/70 group-hover:text-[#007BFF]"
                          }`} 
                        />
                        
                        {/* Tooltip */}
                        <AnimatePresence>
                          {hoveredIndex === index && (
                            <motion.div
                              initial={{ opacity: 0, y: -10, scale: 0.8 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -10, scale: 0.8 }}
                              transition={{ duration: 0.2 }}
                              className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-[#111111] dark:bg-white text-white dark:text-black px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap"
                            >
                              {item.name}
                              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-[#111111] dark:border-b-white" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
          
          {/* Floating dock indicator */}
          <motion.div
            className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-[#007BFF] to-[#008080] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 32 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
