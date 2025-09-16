"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Target } from "lucide-react";
import Link from "next/link";

export default function EnhancedHero() {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const floatingElements = [
    { id: 1, icon: Sparkles, x: 10, y: 20, delay: 0 },
    { id: 2, icon: Zap, x: 85, y: 30, delay: 2 },
    { id: 3, icon: Target, x: 75, y: 70, delay: 4 },
  ];

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F8F9FA] via-white to-[#E8F4FD]"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-[#007BFF]/20 to-[#008080]/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-gradient-to-r from-[#008080]/10 to-[#007BFF]/10 rounded-full blur-2xl animate-bounce"></div>
        
        {/* Floating Icons */}
        {floatingElements.map((element) => {
          const IconComponent = element.icon;
          return (
            <motion.div
              key={element.id}
              className="absolute text-[#008080]/30"
              style={{
                left: `${element.x}%`,
                top: `${element.y}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4 + element.delay,
                repeat: Infinity,
                ease: "easeInOut",
                delay: element.delay,
              }}
            >
              <IconComponent size={24} />
            </motion.div>
          );
        })}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >


        <motion.div variants={itemVariants} className="mb-8">
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#007BFF]/10 to-[#008080]/10 rounded-full border border-[#007BFF]/20 mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Sparkles className="h-4 w-4 text-[#007BFF] mr-2" />
            <span className="text-sm font-medium text-[#007BFF]">
              Exclusive to Shivamogga&apos;s Master Craftsmen
            </span>
          </motion.div>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#111111] leading-tight mb-6"
        >
          <span className="block font-montserrat">
            Stop Chasing
          </span>
          <span className="block bg-gradient-to-r from-[#007BFF] to-[#008080] bg-clip-text text-transparent font-montserrat">
            Clients.
          </span>
          <span className="block font-montserrat">
            Start Attracting Them.
          </span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl text-[#666666] font-inter max-w-4xl mx-auto leading-relaxed mb-12"
        >
          Transform your business from unpredictable word-of-mouth to a{" "}
          <span className="font-semibold text-[#007BFF]">steady stream of high-value clients</span>{" "}
          with our Local Growth Engine—designed exclusively for Interior Designers, 
          Architects, and Premium Contractors.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild className="btn-primary px-8 py-4 text-lg font-semibold rounded-lg flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="#contact">
                Book Your Strategy Call
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              variant="outline" 
              className="btn-secondary px-8 py-4 text-lg font-medium rounded-lg border-2 border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white transition-all duration-300"
            >
              See How It Works
            </Button>
          </motion.div>
        </motion.div>



        {/* Trust Indicators */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            {
              title: "Local Focus",
              description: "Exclusively serving Shivamogga's premium market",
              icon: Target,
            },
            {
              title: "Proven System",
              description: "3-pillar growth engine for consistent results",
              icon: Zap,
            },
            {
              title: "High-Value Clients",
              description: "Attract premium projects, not price shoppers",
              icon: Sparkles,
            },
          ].map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                className="p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0, 123, 255, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#007BFF] to-[#008080] rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-montserrat font-semibold text-[#111111] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#666666] font-inter text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/80 to-transparent pointer-events-none"></div>
    </section>
  );
}
