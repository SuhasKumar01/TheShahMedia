"use client"

import { useState } from "react"
import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { Building2, Target, Bot, TrendingUp, Users, Zap, Shield, Award, ArrowUpRight, Sparkles } from "lucide-react"

interface BentoCard {
  id: string
  title: string
  description: string
  longDescription?: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  gradient: string
  darkGradient: string
  size: 'small' | 'medium' | 'large' | 'tall'
  stats?: string
  features?: string[]
  image?: string
  special?: boolean
}

const bentoCards: BentoCard[] = [
  {
    id: "digital-foundation",
    title: "Premium Digital Foundation",
    description: "AI-enhanced website that converts visitors into high-value clients",
    longDescription: "Your digital headquarters designed to impress discerning clients and convert them into qualified leads with surgical precision.",
    icon: Building2,
    gradient: "from-blue-600 via-purple-600 to-indigo-600",
    darkGradient: "from-blue-500 via-purple-500 to-indigo-500",
    size: "large",
    stats: "95% Conversion Rate",
    features: ["Cinematic Portfolio Showcase", "AI-Powered Lead Qualification", "Mobile-First Responsive Design"],
    special: true
  },
  {
    id: "lead-generation",
    title: "Hyper-Local Domination",
    description: "SEO + Meta Ads that make you the #1 choice in Shivamogga",
    icon: Target,
    gradient: "from-emerald-500 to-teal-600",
    darkGradient: "from-emerald-400 to-teal-500",
    size: "medium",
    stats: "3x More Qualified Leads",
    features: ["Local Search Domination", "Targeted Meta Advertising"]
  },
  {
    id: "ai-assistant",
    title: "AI Sales Concierge",
    description: "24/7 digital gatekeeper that qualifies leads automatically",
    icon: Bot,
    gradient: "from-orange-500 to-red-500",
    darkGradient: "from-orange-400 to-red-400",
    size: "tall",
    stats: "45% Time Saved",
    features: ["Velvet Rope Protocol", "Smart Calendar Booking", "Automated Follow-ups"]
  },
  {
    id: "growth-analytics",
    title: "Intelligence Dashboard",
    description: "Know exactly what's working with real-time insights",
    icon: TrendingUp,
    gradient: "from-pink-500 to-rose-500",
    darkGradient: "from-pink-400 to-rose-400",
    size: "small"
  },
  {
    id: "local-focus",
    title: "Local Market Mastery",
    description: "Deep understanding of Shivamogga's unique market dynamics",
    icon: Users,
    gradient: "from-cyan-500 to-blue-500",
    darkGradient: "from-cyan-400 to-blue-400",
    size: "small"
  },
  {
    id: "premium-support",
    title: "White-Glove Support",
    description: "Dedicated success manager ensures your continuous growth",
    icon: Shield,
    gradient: "from-violet-500 to-purple-600",
    darkGradient: "from-violet-400 to-purple-500",
    size: "medium",
    stats: "99.9% Uptime"
  },
  {
    id: "proven-results",
    title: "Proven Track Record",
    description: "12+ Master Craftsmen already dominating their markets",
    icon: Award,
    gradient: "from-amber-500 to-orange-500",
    darkGradient: "from-amber-400 to-orange-400",
    size: "medium",
    stats: "12+ Success Stories",
    special: true
  }
]

export default function PremiumBentoGrid() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const getSizeClasses = (size: 'small' | 'medium' | 'large' | 'tall') => {
    switch (size) {
      case 'large':
        return 'col-span-1 md:col-span-2 row-span-2'
      case 'tall':
        return 'col-span-1 row-span-2'
      case 'medium':
        return 'col-span-1 md:col-span-2 row-span-1'
      case 'small':
        return 'col-span-1 row-span-1'
      default:
        return 'col-span-1 row-span-1'
    }
  }

  return (
    <section 
      ref={ref}
      className="py-20 transition-colors duration-1000 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-900/30 to-blue-900/30 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">Complete Growth Ecosystem</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Everything You Need to
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Dominate Your Market
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Every component works in perfect harmony to create an unstoppable growth engine for your business
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[280px]">
          {bentoCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 40 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className={`${getSizeClasses(card.size)} group cursor-pointer`}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-full overflow-hidden rounded-3xl p-6 transition-all duration-700 hover:scale-[1.02]">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.darkGradient} opacity-90`} />
                
                {/* Animated Gradient Overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${card.darkGradient} opacity-0`}
                  animate={{
                    opacity: hoveredCard === card.id ? 0.3 : 0,
                    scale: hoveredCard === card.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                />

                {/* Mesh Pattern Overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,white_1px,transparent_1px),radial-gradient(circle_at_70%_25%,white_1px,transparent_1px),radial-gradient(circle_at_40%_80%,white_1px,transparent_1px)] bg-[40px_40px,60px_60px,80px_80px]" />
                </div>

                {/* Border Glow Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl ${
                    card.special 
                      ? 'ring-2 ring-white/30 shadow-2xl shadow-purple-500/20' 
                      : ''
                  }`}
                  animate={{
                    boxShadow: hoveredCard === card.id 
                      ? `0 25px 50px -12px rgba(255, 255, 255, 0.25), inset 0 0 30px rgba(255, 255, 255, 0.1)`
                      : 'none',
                  }}
                  transition={{ duration: 0.4 }}
                />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Special Badge */}
                  {card.special && (
                    <motion.div
                      initial={{ scale: 0, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 0.6, type: "spring" }}
                      className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <Sparkles className="w-6 h-6 text-white" />
                    </motion.div>
                  )}

                  {/* Icon */}
                  <motion.div
                    className="mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 shadow-lg">
                      <card.icon className="h-7 w-7 text-white" />
                    </div>
                  </motion.div>

                  {/* Content Area */}
                  <div className="flex-1 flex flex-col">
                    <motion.h3 
                      className="text-xl font-bold text-white mb-3 leading-tight"
                      animate={{
                        scale: hoveredCard === card.id ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {card.title}
                    </motion.h3>
                    
                    <p className="text-white/90 text-sm leading-relaxed mb-4 flex-1">
                      {hoveredCard === card.id && card.longDescription 
                        ? card.longDescription 
                        : card.description
                      }
                    </p>

                    {/* Features List (for hovered state) */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: hoveredCard === card.id ? 1 : 0,
                        height: hoveredCard === card.id ? "auto" : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      {card.features && (
                        <ul className="space-y-1 mb-4">
                          {card.features.map((feature, idx) => (
                            <li key={idx} className="text-white/80 text-xs flex items-center gap-2">
                              <div className="w-1 h-1 bg-white/60 rounded-full" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      )}
                    </motion.div>
                  </div>

                  {/* Bottom Section */}
                  <div className="flex items-center justify-between mt-auto">
                    {/* Stats */}
                    {card.stats && (
                      <motion.div
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <Zap className="h-3 w-3 text-white" />
                        <span className="text-xs font-medium text-white">
                          {card.stats}
                        </span>
                      </motion.div>
                    )}

                    {/* Arrow */}
                    <motion.div
                      className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center ml-auto"
                      animate={{
                        scale: hoveredCard === card.id ? 1.1 : 0.9,
                        backgroundColor: hoveredCard === card.id ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.2)',
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowUpRight className="h-4 w-4 text-white" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-20"
        >
          <div className="relative overflow-hidden rounded-3xl p-8 border bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm border-neutral-700/50">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,white_1px,transparent_1px)] bg-[20px_20px]" />
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 text-white">
                Ready to Experience the Complete System?
              </h3>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
                See how all these components work together to create predictable, scalable growth for your business
              </p>
              
              <motion.button
                className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Schedule Your Discovery Call
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </span>
                
                {/* Button Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}