'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, BarChart3, Zap, Target, Trophy, Star, Globe, Brain, Users, Sparkles, Rocket } from 'lucide-react';
import ShaderBackground from '@/components/ui/shader-background';

export default function UnifiedBentoGrid() {
  const results = [
    { value: "3×", label: "More Qualified Leads", description: "Increase in qualified inquiries within 60 days", icon: BarChart3 },
    { value: "45%", label: "Time Saved", description: "Reduction in time spent with unqualified leads", icon: Zap },
    { value: "+95", label: "Search Visibility", description: "Local search visibility score through GBP optimization", icon: Target }
  ];

  const brandServices = [
    {
      title: "Digital Atelier",
      subtitle: "Premium Digital Foundation",
      description: "Transform your online presence with modern, AI-powered websites that convert visitors into high-value clients.",
      icon: Globe,
      features: [
        "Visually stunning portfolio website built on modern stack",
        "The 'Dream Project' intake form with inspiring questions",
        "24/7 AI Concierge trained on your services and philosophy"
      ]
    },
    {
      title: "Growth Engine",
      subtitle: "Systematic Lead Generation", 
      description: "Hyper-local domination that makes you the #1 choice in your market through strategic digital marketing.",
      icon: Target,
      features: [
        "Complete Google Business Profile optimization",
        "Sophisticated Meta ad campaigns on Instagram and Facebook"
      ]
    },
    {
      title: "AI Sales Assistant",
      subtitle: "24/7 Digital Gatekeeper",
      description: "Intelligent lead qualification system that saves time and delivers pre-vetted, high-value prospects.",
      icon: Brain,
      features: [
        "Automatic lead enrichment and data collection",
        "AI-powered qualification via email/WhatsApp sequences"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  // Brand palette from globals.css
  // --color-focus-blue: #007BFF
  // --color-ascendant-teal-start: #008080; --color-ascendant-teal-end: #00A0A0
  const brand = {
    blue: '#007BFF',
    teal1: '#008080',
    teal2: '#00A0A0',
    charcoal: '#111111',
    canvas: '#F1F1F1',
  };

  return (
    <section className="py-20 bg-[var(--color-canvas-white)]">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-[var(--color-focus-blue)] text-white font-bold text-sm mb-6 shadow-lg">
            <Sparkles className="w-4 h-4 mr-2" />
            SHAH MEDIA SOLUTIONS
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[var(--color-foundation-charcoal)] mb-6 leading-tight">
            The Complete{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-focus-blue)] via-[var(--color-ascendant-teal-start)] to-[var(--color-ascendant-teal-end)]">Growth System</span>
          </h2>
          <p className="text-xl text-[var(--color-accent-gray)] max-w-3xl mx-auto leading-relaxed">
            Transform your business from referral-dependent to systematically profitable with our integrated digital growth platform.
          </p>
        </motion.div>

        {/* Premium Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 max-w-7xl mx-auto"
        >
          {/* Hero Card - Digital Atelier */}
          <motion.div
            variants={cardVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            className="lg:col-span-4 rounded-3xl overflow-hidden group cursor-pointer relative border border-gray-800 transition-all duration-500"
          >
            {/* Shader Background using brand colors */}
            <ShaderBackground className="absolute inset-0" colors={[brand.charcoal, brand.blue, brand.teal2]} opacity={0.6} speed={0.4} grain={0.12} />
            
            <div className="relative z-10 p-8 h-full flex flex-col">
              {/* Header */}
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl bg-gradient-to-br from-[var(--color-focus-blue)] to-[var(--color-ascendant-teal-end)]">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-1">{brandServices[0].title}</h3>
                    <p className="text-[var(--color-focus-blue)] font-medium">{brandServices[0].subtitle}</p>
                  </div>
                </div>
                
                {/* Floating Animation */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-[var(--color-focus-blue)]/70"
                >
                  <Sparkles className="w-8 h-8" />
                </motion.div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-lg leading-relaxed mb-8 flex-grow">
                {brandServices[0].description}
              </p>

              {/* Results Grid */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
                {results.map((result) => (
                  <motion.div 
                    key={result.label} 
                    className="text-center group/metric cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 bg-[var(--color-canvas-white)]/5 group-hover/metric:bg-[var(--color-canvas-white)]/10 transition-all duration-300">
                      <result.icon className="w-6 h-6 text-[var(--color-focus-blue)]" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{result.value}</div>
                    <div className="text-sm text-gray-300">{result.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Growth Engine Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            className="lg:col-span-2 rounded-3xl overflow-hidden group cursor-pointer relative border border-gray-700 transition-all duration-500"
          >
            <ShaderBackground className="absolute inset-0" colors={[brand.charcoal, brand.teal1, brand.blue]} opacity={0.55} speed={0.35} grain={0.1} />
            {/* Premium Badge */}
            <div className="absolute top-4 right-4 z-20">
              <div className="bg-white/90 text-[var(--color-foundation-charcoal)] px-3 py-1 rounded-full text-xs font-bold">
                PREMIUM
              </div>
            </div>

            {/* Animated Icon Background */}
            <div className="absolute top-6 left-6 z-10">
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center"
              >
                <Target className="w-10 h-10 text-[var(--color-focus-blue)]" />
              </motion.div>
            </div>

            <div className="relative z-10 p-6 pt-28">
              <h3 className="text-2xl font-bold text-white mb-2">{brandServices[1].title}</h3>
              <p className="text-[var(--color-ascendant-teal-end)] font-medium text-sm mb-4">{brandServices[1].subtitle}</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                {brandServices[1].description}
              </p>
            </div>
          </motion.div>

          {/* AI Sales Assistant Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            className="lg:col-span-2 rounded-3xl overflow-hidden group cursor-pointer relative border border-gray-700 transition-all duration-500"
          >
            <ShaderBackground className="absolute inset-0" colors={[brand.charcoal, brand.blue, brand.teal1]} opacity={0.55} speed={0.45} grain={0.12} />
            {/* Pulsing Brain Animation */}
            <div className="absolute top-6 right-6 z-10">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center"
              >
                <Brain className="w-8 h-8 text-[var(--color-ascendant-teal-end)]" />
              </motion.div>
            </div>

            <div className="relative z-10 p-6">
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-white mb-2">{brandServices[2].title}</h3>
                <p className="text-[var(--color-focus-blue)] font-medium text-sm mb-4">{brandServices[2].subtitle}</p>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {brandServices[2].description}
              </p>
            </div>
          </motion.div>

          {/* Success Metrics Wide Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            className="lg:col-span-4 rounded-3xl overflow-hidden group cursor-pointer relative text-white"
          >
            <ShaderBackground className="absolute inset-0" colors={[brand.blue, brand.teal1, brand.teal2]} opacity={0.5} speed={0.3} grain={0.1} />

            <div className="relative z-10 p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-black/20 rounded-2xl flex items-center justify-center">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">Proven Results</h3>
                    <p className="text-white/80 font-medium">Real outcomes from our growth methodology</p>
                  </div>
                </div>
                
                <div className="text-6xl font-bold text-white/30">50+</div>
              </div>

              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                From local visibility to enterprise-level lead generation, our integrated approach delivers measurable growth across all business metrics.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/20 rounded-2xl p-4">
                  <div className="text-2xl font-bold text-white">60+</div>
                  <div className="text-white/80 text-sm">Clients Scaled</div>
                </div>
                <div className="bg-black/20 rounded-2xl p-4">
                  <div className="text-2xl font-bold text-white">100M+</div>
                  <div className="text-white/80 text-sm">Revenue Generated</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Team Excellence Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            className="lg:col-span-3 rounded-3xl overflow-hidden group cursor-pointer relative border border-gray-700 transition-all duration-500"
          >
            <ShaderBackground className="absolute inset-0" colors={[brand.charcoal, brand.teal2, brand.blue]} opacity={0.55} speed={0.35} grain={0.1} />
            <div className="relative z-10 p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                  <Users className="w-7 h-7 text-[var(--color-focus-blue)]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Expert Team</h3>
                  <p className="text-[var(--color-ascendant-teal-end)] font-medium text-sm">Your Success Partners</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Work with seasoned professionals who understand your market and business goals.
              </p>

              <div className="space-y-3">
                {['Strategic Digital Marketing', 'AI Integration Specialists'].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[var(--color-ascendant-teal-end)] flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Innovation Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            className="lg:col-span-3 rounded-3xl overflow-hidden group cursor-pointer relative border border-gray-700 transition-all duration-500"
          >
            <ShaderBackground className="absolute inset-0" colors={[brand.charcoal, brand.blue, brand.teal2]} opacity={0.55} speed={0.35} grain={0.1} />
            {/* Floating Rocket */}
            <div className="absolute top-4 right-4 z-10">
              <motion.div
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, 15, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Rocket className="w-8 h-8 text-[var(--color-focus-blue)]" />
              </motion.div>
            </div>

            <div className="relative z-10 p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                  <Star className="w-7 h-7 text-[var(--color-ascendant-teal-end)]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Innovation</h3>
                  <p className="text-[var(--color-focus-blue)] font-medium text-sm">Cutting-Edge Technology</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Stay ahead with the latest AI tools and marketing technologies.
              </p>

              <div className="space-y-3">
                {['AI-Powered Automation', 'Advanced Analytics'].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[var(--color-ascendant-teal-end)] flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <h3 className="text-3xl font-bold text-[var(--color-foundation-charcoal)] mb-4">
            Ready to Experience the Complete{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-focus-blue)] via-[var(--color-ascendant-teal-start)] to-[var(--color-ascendant-teal-end)]">Growth System?</span>
          </h3>
          <p className="text-[var(--color-accent-gray)] mb-8 max-w-2xl mx-auto text-lg">
            See how all these components work together to create predictable, scalable growth for your business
          </p>
          <motion.button 
            className="inline-flex items-center px-10 py-5 text-white font-bold text-lg rounded-2xl transition-all duration-300 group shadow-2xl bg-gradient-to-r from-[var(--color-focus-blue)] to-[var(--color-ascendant-teal-end)] hover:to-[var(--color-ascendant-teal-start)]"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(0, 123, 255, 0.30)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Schedule Your Discovery Call</span>
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}