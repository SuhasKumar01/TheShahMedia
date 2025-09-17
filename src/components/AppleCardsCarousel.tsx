"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, X, Diamond, Building2, Camera, Bot, BookOpen, PenTool, Rocket, TrendingUp, Handshake, Sparkles, Zap, Target } from "lucide-react";
import Image from "next/image";

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

// Data structure for the 9-Pillar system
const pillarsData: Card[] = [
  {
    category: "Market Leadership",
    title: "The Brand Blueprint",
    src: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <PillarContent pillar={1} />
  },
  {
    category: "Digital Foundation",
    title: "Strategic Website",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <PillarContent pillar={2} />
  },
  {
    category: "Authority Engine",
    title: "Reputation System",
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <PillarContent pillar={3} />
  },
  {
    category: "AI Automation",
    title: "The AI Concierge",
    src: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <PillarContent pillar={4} />
  },
  {
    category: "Sales Mastery",
    title: "Consultation Playbook",
    src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <PillarContent pillar={5} />
  },
  {
    category: "Digital Closing",
    title: "Premium Proposals",
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <PillarContent pillar={6} />
  },
  {
    category: "Asset Creation",
    title: "Signature System",
    src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=2339&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <PillarContent pillar={7} />
  },
  {
    category: "Market Intelligence",
    title: "Strategic Dashboard",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <PillarContent pillar={8} />
  },
  {
    category: "Legacy Network",
    title: "Master Alliance",
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2484&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <PillarContent pillar={9} />
  }
];

const pillarDetails = [
  {
    id: 1,
    stage: "ATTRACT",
    icon: Diamond,
    iconColor: "from-blue-500 to-indigo-600",
    title: "The Brand Blueprint",
    headline: "Stop Selling Your Skills. Start Selling Your Signature.",
    description: "Your work has a distinct style, but your business lacks a distinct strategy. You are judged on price because you haven't given the market a more compelling metric. We fix this first. Before a single line of code is written, we architect your Brand Blueprint—a strategic deep-dive to define your unique market position, codify your core message, and identify the exact high-value client you were born to serve. This is the unshakeable foundation for your market leadership.",
  },
  {
    id: 2,
    stage: "ATTRACT",
    icon: Building2,
    iconColor: "from-emerald-500 to-green-600",
    title: "The Digital Foundation",
    headline: "The Digital Experience That Proves Your Price Tag.",
    description: "Your current website is likely a cost. Ours is a strategic asset. Built on the bedrock of your new Brand Blueprint, we construct a masterfully engineered, high-conversion digital headquarters. It is designed to do one thing with ruthless efficiency: convert discerning, high-value prospects into qualified leads. This is not a 'website'; it is a 24/7 testament to your quality, and the first tangible proof that you are in a different league from your competition.",
  },
  {
    id: 3,
    stage: "ATTRACT",
    icon: Camera,
    iconColor: "from-purple-500 to-violet-600",
    title: "The Reputation Engine",
    headline: "Become So Good, They Can't Ignore You.",
    description: "Being the best-kept secret is a fast track to bankruptcy. This pillar is a multi-channel system designed to broadcast your authority across your entire local market. We achieve Local Search Domination to make you the #1 result for clients ready to buy. We produce cinematic Signature Project Showcases that prove your mastery on visual platforms like Instagram and YouTube. Finally, our AI Thought Leadership engine establishes you as the definitive expert, making you the only logical choice.",
  },
  {
    id: 4,
    stage: "CONVERT",
    icon: Bot,
    iconColor: "from-cyan-500 to-blue-600",
    title: "The AI Concierge",
    headline: "Fire Yourself From the Reception Desk.",
    description: "Your most valuable asset is your time. Every minute spent with an unqualified 'tire-kicker' is a minute stolen from your craft. Our AI Concierge is your 24/7 digital gatekeeper. It engages every lead, intelligently qualifies their intent and budget via our 'Velvet Rope' protocol, and books meetings only with the high-value prospects you want to speak to. Your calendar, once a source of chaos, becomes a curated list of profitable conversations.",
  },
  {
    id: 5,
    stage: "CONVERT",
    icon: BookOpen,
    iconColor: "from-orange-500 to-red-600",
    title: "The Consultation Playbook",
    headline: "Stop Winging It. Start Winning It.",
    description: "Getting the lead is only half the battle. Closing it is what matters. We address the craftsman's biggest weakness—sales—by replacing guesswork with a system. We arm you with a bespoke Consultation Playbook: a toolkit containing pre-call briefing templates, a framework for guiding the discovery call with authority, and automated post-call follow-up sequences. We don't just give you leads; we give you the tools to close them.",
  },
  {
    id: 6,
    stage: "CONVERT",
    icon: PenTool,
    iconColor: "from-teal-500 to-cyan-600",
    title: "The Digital Closing Room",
    headline: "Close Deals Like a Fortune 500 CEO.",
    description: "How you close the deal is the final statement you make about your brand. Stop sending clumsy PDFs. We replace them with a stunning, interactive digital proposal and contract system. It's a branded, web-based experience that embeds your Signature Project Showcases for final proof and includes One-Click Close functionality for digital signatures and deposit payments. It turns a 'yes' into a paid project, instantly and impressively.",
  },
  {
    id: 7,
    stage: "DOMINATE",
    icon: Rocket,
    iconColor: "from-pink-500 to-rose-600",
    title: "The Signature Asset System",
    headline: "Stop Creating Content. Start Creating Assets.",
    description: "Social media posts die in 48 hours. A Signature Asset works for you for years. Each quarter, we create a permanent, high-value asset for your brand—a definitive video case study, a detailed project deep-dive, or an authoritative guide. These assets become the pillars of your long-term marketing moat, ranking on search engines and attracting ideal clients long after they are created, ensuring your legacy is built on a foundation of concrete proof.",
  },
  {
    id: 8,
    stage: "DOMINATE",
    icon: TrendingUp,
    iconColor: "from-yellow-500 to-orange-600",
    title: "The Market Intelligence Dashboard",
    headline: "Your Competitors Are Guessing. You Will Know.",
    description: "Gut feeling is not a business strategy. This pillar is your personal market intelligence briefing. We provide a simple, clean dashboard that delivers actionable insights, not just vanity metrics. You will see which of your services are in highest demand, what your competitors are doing, and where the next big opportunity in your local market lies. We give you the intelligence to stop competing and start dominating.",
  },
  {
    id: 9,
    stage: "DOMINATE",
    icon: Handshake,
    iconColor: "from-indigo-500 to-purple-600",
    title: "The Legacy Alliance",
    headline: "Mastery Shouldn't Be Lonely.",
    description: "The final stage of success is solving the isolation that comes with it. Your partnership with Shah Media grants you an invitation to The Legacy Alliance—an exclusive, private network for our 'Master Craftsman' clients. This is your new guild: a community for peer-to-peer collaboration, knowledge sharing, and high-level networking. We don't just build your business; we connect you to a room of equals who understand your level of mastery.",
  }
];

function PillarContent({ pillar }: { pillar: number }) {
  const pillarData = pillarDetails[pillar - 1];
  
  return (
    <div className="relative overflow-hidden">
      {/* Outskill theme gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#36454f] via-[#2a3138] to-[#36454f]" />
      
      {/* Content */}
      <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-12">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="flex-shrink-0">
            <div className={`w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br ${pillarData.iconColor} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl`}>
              <pillarData.icon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r from-[#007BFF] to-[#0056b3] text-white shadow-lg mb-3 sm:mb-4">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mr-2 sm:mr-3 animate-pulse" />
              Stage {Math.ceil(pillarData.id / 3)}: {pillarData.stage}
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#007BFF] to-[#0056b3] bg-clip-text text-transparent mb-2">
              Pillar {pillarData.id}: {pillarData.title}
            </h3>
          </div>
        </div>
        
        {/* Headline */}
        <div className="mb-6 sm:mb-8">
          <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#F1F1F1] mb-3 sm:mb-4 leading-tight">
            {pillarData.headline}
          </h4>
          
          {/* Decorative line */}
          <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-[#007BFF] to-[#0056b3] rounded-full" />
        </div>
        
        {/* Description */}
        <div className="mb-8 sm:mb-10">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#b9b2aa] leading-relaxed font-light">
            {pillarData.description}
          </p>
        </div>
        
        {/* Benefits & Implementation Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Key Benefits Card */}
          <motion.div 
            className="group"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div 
              className="bg-[#2a3138]/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-xl border border-[#b9b2aa]/20 cursor-pointer"
              whileHover={{
                backgroundColor: "rgba(42, 49, 56, 0.95)",
                borderColor: "rgba(0, 128, 128, 0.4)",
                boxShadow: "0 25px 50px -12px rgba(0, 128, 128, 0.25)"
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <motion.div 
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#008080] to-[#00A0A0] rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    background: "linear-gradient(to right, #00A0A0, #00C0C0)"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </motion.div>
                <motion.h5 
                  className="text-lg sm:text-xl font-bold text-[#F1F1F1]"
                  whileHover={{ color: "#00A0A0" }}
                  transition={{ duration: 0.2 }}
                >
                  Key Benefits
                </motion.h5>
              </div>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  "Strategic market positioning",
                  "Increased conversion rates", 
                  "Premium pricing capability",
                  "Streamlined operations"
                ].map((benefit, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#008080] rounded-full mt-2 sm:mt-3 mr-3 sm:mr-4 flex-shrink-0"
                      whileHover={{ 
                        scale: 1.5, 
                        backgroundColor: "#00A0A0",
                        boxShadow: "0 0 10px rgba(0, 160, 160, 0.6)"
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    />
                    <motion.span 
                      className="text-sm sm:text-base text-[#b9b2aa] font-medium"
                      whileHover={{ color: "#F1F1F1" }}
                      transition={{ duration: 0.2 }}
                    >
                      {benefit}
                    </motion.span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
          
          {/* Implementation Card */}
          <motion.div 
            className="group"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div 
              className="bg-[#2a3138]/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-xl border border-[#b9b2aa]/20 cursor-pointer"
              whileHover={{
                backgroundColor: "rgba(42, 49, 56, 0.95)",
                borderColor: "rgba(0, 123, 255, 0.4)",
                boxShadow: "0 25px 50px -12px rgba(0, 123, 255, 0.25)"
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <motion.div 
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#007BFF] to-[#0056b3] rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: -5,
                    background: "linear-gradient(to right, #0056b3, #007BFF)"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </motion.div>
                <motion.h5 
                  className="text-lg sm:text-xl font-bold text-[#F1F1F1]"
                  whileHover={{ color: "#007BFF" }}
                  transition={{ duration: 0.2 }}
                >
                  Implementation
                </motion.h5>
              </div>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  "Week 1-2: Discovery & Strategy",
                  "Week 3-4: Development",
                  "Week 5-6: Testing & Launch", 
                  "Week 7-8: Optimization"
                ].map((step, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#007BFF] rounded-full mt-2 sm:mt-3 mr-3 sm:mr-4 flex-shrink-0"
                      whileHover={{ 
                        scale: 1.5, 
                        backgroundColor: "#0080FF",
                        boxShadow: "0 0 10px rgba(0, 123, 255, 0.6)"
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    />
                    <motion.span 
                      className="text-sm sm:text-base text-[#b9b2aa] font-medium"
                      whileHover={{ color: "#F1F1F1" }}
                      transition={{ duration: 0.2 }}
                    >
                      {step}
                    </motion.span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Call to Action */}
        <motion.div 
          className="mt-8 sm:mt-10 md:mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <motion.div 
            className="inline-flex items-center px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#007BFF] to-[#0056b3] text-white rounded-xl sm:rounded-2xl shadow-lg cursor-pointer"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px -12px rgba(0, 123, 255, 0.4)",
              background: "linear-gradient(to right, #0056b3, #007BFF, #0080FF)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.span 
              className="text-sm sm:text-base md:text-lg font-semibold mr-2 sm:mr-3"
              whileHover={{ letterSpacing: "0.02em" }}
              transition={{ duration: 0.2 }}
            >
              Ready to implement this pillar?
            </motion.span>
            <motion.div
              whileHover={{ rotate: 15, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Target className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export function BlurImage({
  height,
  width,
  src,
  className,
  alt = "Background of a beautiful view",
  ...rest
}: {
  height?: number | string;
  width?: number | string;
  src: string;
  className?: string;
  alt?: string;
  [key: string]: unknown;
}) {
  const [isLoading, setLoading] = useState(true);
  
  return (
    <Image
      className={`transition duration-300 ${isLoading ? "blur-sm" : "blur-0"} ${className}`}
      onLoad={() => setLoading(false)}
      src={src}
      width={typeof width === "number" ? width : 500}
      height={typeof height === "number" ? height : 500}
      alt={alt}
      {...rest}
    />
  );
}

interface CardProps {
  card: Card;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export function Card({ card, isOpen, onOpen, onClose }: CardProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Removed useOutsideClick to prevent modal from closing on backdrop click
  // Modal now only closes when close button is clicked or Escape key is pressed
  // useOutsideClick(containerRef, () => {
  //   if (isOpen) {
  //     onClose();
  //   }
  // });

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    }

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  const handleCardClick = () => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div 
            className="fixed inset-0 h-screen z-50 overflow-hidden"
            onWheel={(e) => {
              // Prevent wheel events from propagating to background
              e.stopPropagation();
            }}
            onTouchMove={(e) => {
              // Prevent touch scroll events from propagating to background
              e.stopPropagation();
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-black/60 backdrop-blur-xl h-full w-full fixed inset-0"
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
            />
            <div 
              className="h-full w-full flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 overflow-auto pointer-events-auto"
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                transition={{ 
                  duration: 0.4, 
                  ease: [0.4, 0.0, 0.2, 1],
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
                ref={containerRef}
                className="w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-4xl lg:max-w-5xl xl:max-w-6xl bg-[#36454f]/95 backdrop-blur-2xl h-fit z-[60] p-2 sm:p-3 md:p-4 lg:p-2 rounded-2xl sm:rounded-3xl font-sans relative shadow-2xl border border-[#b9b2aa]/20 max-h-[90vh] overflow-auto pointer-events-auto"
                onMouseEnter={(e) => e.stopPropagation()}
                onMouseLeave={(e) => e.stopPropagation()}
                onMouseMove={(e) => e.stopPropagation()}
                onMouseOver={(e) => e.stopPropagation()}
                onMouseOut={(e) => e.stopPropagation()}
              >
              {/* Close button with premium styling */}
              <button
                className="sticky top-4 sm:top-6 h-8 w-8 sm:h-10 sm:w-10 right-4 sm:right-6 ml-auto bg-gradient-to-r from-[#F1F1F1] to-[#b9b2aa] rounded-full flex items-center justify-center shadow-lg z-50 pointer-events-auto no-transition isolate"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onClose();
                }}
                onMouseEnter={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                onMouseLeave={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                onMouseMove={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                onMouseOver={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                onMouseOut={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                aria-label="Close modal"
                type="button"
              >
                <X className="h-4 w-4 sm:h-5 sm:w-5 text-[#36454f]" />
              </button>
              
              {/* Header section with premium gradient */}
              <div className="px-4 sm:px-6 md:px-8 lg:px-12 pb-4 sm:pb-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-sm sm:text-base md:text-lg font-semibold bg-gradient-to-r from-[#007BFF] to-[#0056b3] bg-clip-text text-transparent"
                >
                  {card.category}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#F1F1F1] mt-2 leading-tight"
                >
                  {card.title}
                </motion.p>
              </div>
              
              {/* Enhanced Content with Premium Scroll */}
              <div 
                className="modal-scroll-container max-h-[60vh] sm:max-h-[65vh] md:max-h-[70vh] lg:max-h-[75vh] overflow-y-auto overflow-x-hidden scroll-smooth pr-2 sm:pr-3 pointer-events-auto"
              >
                {/* Scroll fade indicators */}
                <div className="relative">
                  {/* Top fade indicator */}
                  <div className="sticky top-0 h-4 bg-gradient-to-b from-[#36454f]/95 to-transparent z-10 pointer-events-none"></div>
                  
                  {/* Content */}
                  <div className="px-2 sm:px-3 py-2">
                    {card.content}
                  </div>
                  
                  {/* Bottom fade indicator */}
                  <div className="sticky bottom-0 h-4 bg-gradient-to-t from-[#36454f]/95 to-transparent z-10 pointer-events-none"></div>
                </div>
              </div>
            </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        onClick={handleCardClick}
        className="rounded-3xl bg-[#36454f] h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10"
        whileHover={!isOpen ? { scale: 1.02, y: -8 } : {}}
        whileTap={!isOpen ? { scale: 0.98 } : {}}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{ pointerEvents: isOpen ? 'none' : 'auto' }}
        onMouseEnter={isOpen ? (e) => e.stopPropagation() : undefined}
        onMouseLeave={isOpen ? (e) => e.stopPropagation() : undefined}
      >
        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 z-30 pointer-events-none" />
        <div className="relative z-40 p-8">
          <motion.p
            className="text-white text-sm md:text-base font-medium font-sans text-left"
          >
            {card.category}
          </motion.p>
          <motion.p
            className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2"
          >
            {card.title}
          </motion.p>
        </div>
        <BlurImage
          src={card.src}
          alt={card.title}
          width={500}
          height={500}
          className="object-cover absolute z-10 inset-0 w-full h-full"
        />
      </motion.button>
    </>
  );
}

export function Carousel({
  items,
  initialScroll = 0,
  isModalOpen = false,
}: {
  items: React.ReactElement[];
  initialScroll?: number;
  isModalOpen?: boolean;
}) {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [isHovering, setIsHovering] = React.useState(false);
  const [isDragging, setIsDragging] = React.useState(false);
  const scrollSpeed = 1; // Fixed scroll speed multiplier

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  // Responsive card scroll amounts based on screen size
  const getScrollAmount = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width < 768) return 280; // Mobile: 1 card
      if (width < 1024) return 560; // Tablet: 2 cards  
      return 840; // Desktop: 3 cards
    }
    return 300;
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ 
        left: -getScrollAmount(), 
        behavior: "smooth" 
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ 
        left: getScrollAmount(), 
        behavior: "smooth" 
      });
    }
  };

  // Auto-scroll with hover pause functionality
  useEffect(() => {
    if (!isHovering && !isDragging && carouselRef.current) {
      const interval = setInterval(() => {
        if (carouselRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
          
          if (scrollLeft >= scrollWidth - clientWidth) {
            // Reset to beginning with smooth animation
            carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            carouselRef.current.scrollBy({ 
              left: getScrollAmount() * scrollSpeed, 
              behavior: "smooth" 
            });
          }
          checkScrollability();
        }
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isHovering, isDragging, scrollSpeed]);

  return (
    <div className="relative w-full">
      {/* Glassmorphic Navigation Overlay - Desktop Only */}
      <motion.div 
        className="absolute top-1/2 left-4 right-4 transform -translate-y-1/2 z-[70] pointer-events-none hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: (isHovering && !isModalOpen) ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex justify-between items-center">
          <motion.button
            className="pointer-events-auto relative h-12 w-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center disabled:opacity-50 shadow-lg no-transition"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            onMouseEnter={(e) => e.stopPropagation()}
            onMouseLeave={(e) => e.stopPropagation()}
          >
            <ChevronLeft className="h-6 w-6 text-white drop-shadow-sm" />
          </motion.button>

          <motion.button
            className="pointer-events-auto relative h-12 w-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center disabled:opacity-50 shadow-lg no-transition"
            onClick={scrollRight}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            onMouseEnter={(e) => e.stopPropagation()}
            onMouseLeave={(e) => e.stopPropagation()}
          >
            <ChevronRight className="h-6 w-6 text-white drop-shadow-sm" />
          </motion.button>
        </div>
      </motion.div>

      {/* Carousel Container */}
      <motion.div
        className={`flex w-full py-10 md:py-20 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${
          isModalOpen 
            ? 'overflow-hidden pointer-events-none' 
            : 'overflow-x-scroll overscroll-x-auto'
        }`}
        ref={carouselRef}
        onScroll={!isModalOpen ? checkScrollability : undefined}
        onMouseEnter={!isModalOpen ? () => setIsHovering(true) : undefined}
        onMouseLeave={!isModalOpen ? () => setIsHovering(false) : undefined}
        onMouseDown={!isModalOpen ? () => setIsDragging(true) : undefined}
        onMouseUp={!isModalOpen ? () => setIsDragging(false) : undefined}
        whileHover={{}}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Gradient Fade Effects */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#36454f] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#36454f] to-transparent z-10 pointer-events-none" />

        <div className="flex flex-row justify-start gap-6 pl-4 max-w-7xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.1 * index,
                  ease: "easeOut",
                },
              }}
              key={"card" + index}
              className="last:pr-[5%] md:last:pr-[33%] rounded-3xl"
              whileHover={!isModalOpen ? { 
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              } : {}}
              style={{ pointerEvents: isModalOpen ? 'none' : 'auto' }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Mobile Horizontal Scroll Indicator */}
      <div className="block md:hidden mt-4 px-4">
        <div className="flex items-center justify-center space-x-2">
          {items.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-white/30 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function AppleCardsCarousel() {
  const [openCardIndex, setOpenCardIndex] = useState<number | null>(null);

  // Cleanup: restore body scrolling when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'static';
      document.body.style.top = 'auto';
      document.body.style.left = 'auto';
      document.body.style.right = 'auto';
      document.body.style.touchAction = 'auto';
      document.body.classList.remove('modal-open');
    };
  }, []);

  const handleOpenCard = (index: number) => {
    setOpenCardIndex(index);
    // Store current scroll position
    const scrollY = window.scrollY;
    // Disable body scrolling when modal opens with enhanced prevention
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.touchAction = 'none';
    // Hide header when modal is open
    document.body.classList.add('modal-open');
  };

  const handleCloseCard = () => {
    setOpenCardIndex(null);
    // Get the scroll position from the body top style
    const scrollY = parseInt(document.body.style.top || '0') * -1;
    // Re-enable body scrolling when modal closes
    document.body.style.overflow = 'unset';
    document.body.style.position = 'static';
    document.body.style.top = 'auto';
    document.body.style.left = 'auto';
    document.body.style.right = 'auto';
    document.body.style.touchAction = 'auto';
    // Show header when modal is closed
    document.body.classList.remove('modal-open');
    // Restore scroll position
    window.scrollTo(0, scrollY);
  };

  const cards = pillarsData.map((card, index) => (
    <Card 
      key={card.title} 
      card={card} 
      isOpen={openCardIndex === index}
      onOpen={() => handleOpenCard(index)}
      onClose={handleCloseCard}
    />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-[#F1F1F1] font-sans">
        Get to know your 9-Pillar System.
      </h2>
      <Carousel items={cards} isModalOpen={openCardIndex !== null} />
    </div>
  );
}