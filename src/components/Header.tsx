"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Users, Target, Star, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLoading } from "@/contexts/LoadingContext";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { isLoading, hasLoadedOnce } = useLoading();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only show header when at the very top (hero section visible)
      if (currentScrollY < 50) {
        setIsVisible(true);
        setIsScrolled(false);
      } else {
        setIsVisible(false);
        setIsScrolled(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: "System", href: "#system", icon: Target },
    { name: "Pricing", href: "#pricing", icon: FileText },
    { name: "Results", href: "#results", icon: Star },
    { name: "About", href: "#about", icon: Users },
  ];

  // Hide header during loading animation for premium experience
  if (isLoading || !hasLoadedOnce) {
    return null;
  }

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
        isScrolled 
          ? "glass-navigation shadow-premium-strong" 
          : "glass-navigation"
      }`}
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Shah Media Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/" className="flex items-center group">
              <div className="relative">
                {/* Shah Media Logo */}
                <div className="w-12 h-12 relative overflow-hidden">
                  <Image
                    src="/logo-new.png"
                    alt="Shah Media Logo" 
                    width={48}
                    height={48}
                    priority
                    className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110"
                  />
                  {/* Glass reflection effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Professional Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="relative px-6 py-3 font-medium text-[#F1F1F1]/90 hover:text-[#F1F1F1] transition-all duration-300 rounded-xl hover:bg-white/10 group hover-lift"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <span className="relative z-10 flex items-center">
                    <item.icon className="h-4 w-4 mr-2 opacity-70 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </span>
                  {/* Premium highlight effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#007BFF]/10 via-[#008080]/15 to-[#007BFF]/10 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl"></div>
                  <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-all duration-300 rounded-xl"></div>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Call-to-Action Section */}
          <div className="flex items-center space-x-4">
            {/* Business Hours Indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="hidden lg:flex items-center space-x-2 glass-card-subtle px-4 py-2"
            >
              <div className="w-2 h-2 bg-[#007BFF] rounded-full animate-premium-pulse"></div>
              <span className="text-[#F1F1F1]/80 text-sm font-medium font-inter">
                Available
              </span>
              <span className="text-[#F1F1F1] text-sm font-semibold font-inter">
                Mon-Sat
              </span>
            </motion.div>
            {/* Primary CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Button 
                asChild 
                className="btn-primary px-6 py-3 font-semibold rounded-xl"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <Link href="#contact" className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  Book Discovery Call
                </Link>
              </Button>
            </motion.div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <motion.button
                onClick={toggleMobileMenu}
                className="p-3 text-[#F1F1F1]/80 hover:text-[#F1F1F1] transition-all duration-300 rounded-xl hover:bg-white/10 glass-card-subtle"
                aria-label="Toggle mobile menu"
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-[#b9b2aa]/30 mt-4 overflow-hidden"
            >
              <div className="py-6 space-y-2 bg-[#b9b2aa]/30 backdrop-blur-xl rounded-2xl mt-4 border border-[#b9b2aa]/40">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center px-6 py-3 text-[#F1F1F1]/90 hover:text-[#F1F1F1] hover:bg-[#36454f]/40 transition-all duration-300 rounded-xl font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      <item.icon className="h-4 w-4 mr-3 opacity-70" />
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-4 px-4"
                >
                  <Button 
                    asChild 
                    className="w-full bg-[#007BFF] hover:bg-[#0056b3] text-white font-semibold py-4 rounded-xl shadow-lg shadow-[#007BFF]/20"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <Link 
                      href="#contact" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-center"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Book Discovery Call
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;