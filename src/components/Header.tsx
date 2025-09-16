"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLoading } from "@/contexts/LoadingContext";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { isLoading, hasLoadedOnce } = useLoading();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownToggle = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const navItems = [
    { 
      name: "Solutions", 
      href: "#solutions",
      hasDropdown: true,
      dropdownItems: [
        { name: "9-Pillar System", href: "#system" },
        { name: "Business Growth", href: "#growth" },
        { name: "Digital Strategy", href: "#strategy" },
        { name: "Client Results", href: "#results" }
      ]
    },
    { name: "Pricing", href: "#pricing", hasDropdown: false },
    { name: "Integrations", href: "#integrations", hasDropdown: false },
    { 
      name: "Resources", 
      href: "#resources",
      hasDropdown: true,
      dropdownItems: [
        { name: "Case Studies", href: "#case-studies" },
        { name: "Blog", href: "#blog" },
        { name: "Documentation", href: "#docs" },
        { name: "About Us", href: "#about" }
      ]
    },
  ];

  if (isLoading || !hasLoadedOnce) {
    return null;
  }

  return (
    <motion.header 
      className="fixed top-4 left-4 right-4 z-[60] transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className={`${
        isScrolled 
          ? "bg-white/95 backdrop-blur-xl border border-gray-200/50 shadow-lg" 
          : "bg-white/90 backdrop-blur-md border border-gray-200/30"
      } rounded-2xl transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 relative">
                <Image
                  src="/logo-new.png"
                  alt="Shah Media Logo" 
                  width={32}
                  height={32}
                  priority
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="ml-2 text-lg font-semibold text-gray-900 font-inter">
                Shah Media
              </span>
            </Link>
          </motion.div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white/95 border border-gray-200/50 rounded-xl shadow-xl backdrop-blur-xl"
                        >
                          <div className="py-2">
                            {item.dropdownItems?.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50/50 transition-colors duration-200"
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              href="#login"
              className="hidden lg:inline-flex text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Log in
            </Link>

            <Link
              href="#contact"
              className="hidden lg:inline-flex px-4 py-2 text-gray-600 hover:text-gray-900 border border-gray-300/50 hover:border-gray-300 rounded-lg transition-colors duration-200 font-medium"
            >
              Talk to sales
            </Link>

            <Button
              asChild
              className="hidden lg:inline-flex bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <Link href="#signup">
                Try for free
              </Link>
            </Button>

            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-200/30 mt-4 overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => handleDropdownToggle(item.name)}
                          className="flex items-center justify-between w-full px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
                        >
                          {item.name}
                          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`} />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="ml-4 overflow-hidden"
                            >
                              {item.dropdownItems?.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className="block px-4 py-2 text-[#F1F1F1]/70 hover:text-[#F1F1F1] transition-colors duration-200"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {dropdownItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-[#F1F1F1]/80 hover:text-[#F1F1F1] transition-colors duration-200 font-medium"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                
                <div className="pt-4 space-y-2 border-t border-[#b9b2aa]/20">
                  <Link
                    href="#login"
                    className="block px-4 py-2 text-[#F1F1F1]/80 hover:text-[#F1F1F1] transition-colors duration-200 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Log in
                  </Link>
                  <Link
                    href="#contact"
                    className="block px-4 py-2 text-[#F1F1F1]/80 hover:text-[#F1F1F1] transition-colors duration-200 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Talk to sales
                  </Link>
                  <Button
                    asChild
                    className="w-full bg-[#007BFF] hover:bg-[#0056b3] text-white font-medium rounded-lg"
                  >
                    <Link 
                      href="#signup"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Try for free
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
