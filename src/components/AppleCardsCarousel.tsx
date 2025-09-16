"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, X, Diamond, Building2, Camera, Bot, BookOpen, PenTool, Rocket, TrendingUp, Handshake, Sparkles, Zap, Target } from "lucide-react";
import { useOutsideClick } from "@/hooks/use-outside-click";
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
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-indigo-900" />
      
      {/* Content */}
      <div className="relative z-10 p-8 md:p-12">
        {/* Header Section */}
        <div className="flex items-start gap-6 mb-8">
          <div className="flex-shrink-0">
            <div className={`w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br ${pillarData.iconColor} rounded-2xl flex items-center justify-center shadow-2xl`}>
              <pillarData.icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg mb-4">
              <div className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse" />
              Stage {Math.ceil(pillarData.id / 3)}: {pillarData.stage}
            </div>
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Pillar {pillarData.id}: {pillarData.title}
            </h3>
          </div>
        </div>
        
        {/* Headline */}
        <div className="mb-8">
          <h4 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-white mb-4 leading-tight">
            {pillarData.headline}
          </h4>
          
          {/* Decorative line */}
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
        </div>
        
        {/* Description */}
        <div className="mb-10">
          <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed font-light">
            {pillarData.description}
          </p>
        </div>
        
        {/* Benefits & Implementation Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="group">
            <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-indigo-100 dark:border-neutral-700 hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h5 className="text-xl font-bold text-neutral-800 dark:text-white">Key Benefits</h5>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0" />
                  <span className="text-neutral-700 dark:text-neutral-300 font-medium">Strategic market positioning</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0" />
                  <span className="text-neutral-700 dark:text-neutral-300 font-medium">Increased conversion rates</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0" />
                  <span className="text-neutral-700 dark:text-neutral-300 font-medium">Premium pricing capability</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0" />
                  <span className="text-neutral-700 dark:text-neutral-300 font-medium">Streamlined operations</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="group">
            <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-purple-100 dark:border-neutral-700 hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h5 className="text-xl font-bold text-neutral-800 dark:text-white">Implementation</h5>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-4 flex-shrink-0" />
                  <span className="text-neutral-700 dark:text-neutral-300 font-medium">Week 1-2: Discovery & Strategy</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-4 flex-shrink-0" />
                  <span className="text-neutral-700 dark:text-neutral-300 font-medium">Week 3-4: Development</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-4 flex-shrink-0" />
                  <span className="text-neutral-700 dark:text-neutral-300 font-medium">Week 5-6: Testing & Launch</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-4 flex-shrink-0" />
                  <span className="text-neutral-700 dark:text-neutral-300 font-medium">Week 7-8: Optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
            <span className="text-lg font-semibold mr-3">Ready to implement this pillar?</span>
            <Target className="w-6 h-6 text-white" />
          </div>
        </div>
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
  layout?: boolean;
}

export function Card({ card, layout = false }: CardProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useOutsideClick(containerRef, () => setOpen(false));

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 h-screen z-50 overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-black/60 backdrop-blur-xl h-full w-full fixed inset-0"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="max-w-6xl mx-auto bg-white/95 dark:bg-neutral-900/95 backdrop-blur-2xl h-fit z-[60] my-10 p-2 rounded-3xl font-sans relative shadow-2xl border border-white/20 dark:border-neutral-700/20"
            >
              {/* Close button with premium styling */}
              <button
                className="sticky top-6 h-10 w-10 right-6 ml-auto bg-gradient-to-r from-neutral-800 to-neutral-900 dark:from-white dark:to-neutral-100 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 z-50"
                onClick={() => setOpen(false)}
                aria-label="Close modal"
              >
                <X className="h-5 w-5 text-white dark:text-neutral-900" />
              </button>
              
              {/* Header section with premium gradient */}
              <div className="px-8 md:px-12 pb-6">
                <motion.p
                  layoutId={layout ? `category-${card.title}` : undefined}
                  className="text-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                >
                  {card.category}
                </motion.p>
                <motion.p
                  layoutId={layout ? `title-${card.title}` : undefined}
                  className="text-3xl md:text-6xl font-bold text-neutral-800 dark:text-white mt-2 leading-tight"
                >
                  {card.title}
                </motion.p>
              </div>
              
              {/* Content with scroll */}
              <div className="max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-300 dark:scrollbar-thumb-neutral-600 scrollbar-track-transparent">
                {card.content}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={() => setOpen(true)}
        className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10"
      >
        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 z-30 pointer-events-none" />
        <div className="relative z-40 p-8">
          <motion.p
            layoutId={layout ? `category-${card.title}` : undefined}
            className="text-white text-sm md:text-base font-medium font-sans text-left"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
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
}: {
  items: React.ReactElement[];
  initialScroll?: number;
}) {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

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

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full">
      <div
        className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
        ref={carouselRef}
        onScroll={checkScrollability}
      >
        <div className="absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l" />

        <div className="flex flex-row justify-start gap-4 pl-4 max-w-7xl mx-auto">
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
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex justify-end gap-2 mr-10">
        <button
          className="relative z-40 h-10 w-10 rounded-full bg-gray-100 dark:bg-neutral-900 flex items-center justify-center disabled:opacity-50"
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-6 w-6 text-gray-500" />
        </button>
        <button
          className="relative z-40 h-10 w-10 rounded-full bg-gray-100 dark:bg-neutral-900 flex items-center justify-center disabled:opacity-50"
          onClick={scrollRight}
          disabled={!canScrollRight}
          aria-label="Scroll right"
        >
          <ChevronRight className="h-6 w-6 text-gray-500" />
        </button>
      </div>
    </div>
  );
}

export function AppleCardsCarousel() {
  const cards = pillarsData.map((card) => (
    <Card key={card.title} card={card} layout={true} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Get to know your 9-Pillar System.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}