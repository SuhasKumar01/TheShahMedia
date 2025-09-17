"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CardsStackSection from "@/components/CardsStackSection";
import { ThreeDPricingCards } from "@/components/ThreeDPricingCards";
import { ClientShowcase } from "@/components/ClientShowcase";
import EnhancedHero from "@/components/EnhancedHero";
import AnimatedSection from "@/components/AnimatedSection";
import { AppleCardsCarousel } from "@/components/AppleCardsCarousel";
import { AiConcierge } from "@/components/interactive/AiConcierge";
import { motion } from "framer-motion";

export default function Home() {
  const [selectedInvestment, setSelectedInvestment] = useState<string>("growth");

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section with Enhanced Hero Component */}
      <section className="relative min-h-screen bg-[#36454f] overflow-hidden pt-20">
        <EnhancedHero />
      </section>

      {/* Problem & Promise Section */}
      <section className="py-20 bg-[#36454f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fadeInLeft">
              <div>
                <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[#F1F1F1] mb-8">
                  Your Craft is World-Class. Is Your Client Pipeline?
                </h2>
                <ul className="space-y-6">
                  <AnimatedSection animation="fadeInUp" delay={0.1}>
                    <li className="flex items-start hover-lift p-4 rounded-lg transition-all duration-300">
                      <div className="w-2 h-2 rounded-full bg-[#007BFF] mt-3 mr-4 flex-shrink-0 pulse-glow"></div>
                      <p className="font-inter text-lg text-[#F1F1F1]">
                        <strong>Inconsistent Leads:</strong> You rely on word-of-mouth, which is unpredictable and not scalable.
                      </p>
                    </li>
                  </AnimatedSection>
                  <AnimatedSection animation="fadeInUp" delay={0.2}>
                    <li className="flex items-start hover-lift p-4 rounded-lg transition-all duration-300">
                      <div className="w-2 h-2 rounded-full bg-[#007BFF] mt-3 mr-4 flex-shrink-0 pulse-glow"></div>
                      <p className="font-inter text-lg text-[#F1F1F1]">
                        <strong>Wasted Time:</strong> Hours spent on phone calls with unqualified &ldquo;tire-kicker&rdquo; leads instead of billable work.
                      </p>
                    </li>
                  </AnimatedSection>
                  <AnimatedSection animation="fadeInUp" delay={0.3}>
                    <li className="flex items-start hover-lift p-4 rounded-lg transition-all duration-300">
                      <div className="w-2 h-2 rounded-full bg-[#007BFF] mt-3 mr-4 flex-shrink-0 pulse-glow"></div>
                      <p className="font-inter text-lg text-[#F1F1F1]">
                        <strong>Revenue Anxiety:</strong> Unpredictable income cycles leave you stressed about next month&apos;s payments.
                      </p>
                    </li>
                  </AnimatedSection>
                  <AnimatedSection animation="fadeInUp" delay={0.4}>
                    <li className="flex items-start hover-lift p-4 rounded-lg transition-all duration-300">
                      <div className="w-2 h-2 rounded-full bg-[#007BFF] mt-3 mr-4 flex-shrink-0 pulse-glow"></div>
                      <p className="font-inter text-lg text-[#F1F1F1]">
                        <strong>Undervalued Work:</strong> Competing on price rather than showcasing the true value of your expertise.
                      </p>
                    </li>
                  </AnimatedSection>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight">
              <div className="text-center lg:text-left">
                <h3 className="font-montserrat font-bold text-2xl md:text-3xl text-[#007BFF] mb-6">
                  What if you could flip this script?
                </h3>
                <p className="font-inter text-lg text-[#b9b2aa] leading-relaxed mb-8">
                  We build you a Digital Growth Engine that delivers qualified leads consistently—so you can 
                  focus on what you do best: creating exceptional work that commands premium prices. Our 
                  system doesn&apos;t just generate leads; it delivers prospects who understand your value 
                  and are ready to invest in quality.
                </p>
                <p className="font-inter text-lg text-[#b9b2aa] leading-relaxed">
                  Imagine having a steady stream of high-quality clients who find YOU, understand your worth, 
                  and are excited to work with a master craftsman. That&apos;s what The Shah Media delivers—
                  a steady stream of high-quality clients. We don&apos;t just run ads or build websites; we install 
                  a complete, end-to-end customer acquisition system into your business.
                </p>
                <p className="font-inter text-lg text-[#b9b2aa] leading-relaxed">
                  In Shivamogga and our surrounding districts, there are masters of their craft—brilliant 
                  interior designers, visionary architects, and builders who create masterpieces. But their 
                  growth is often left to chance, held back by inconsistent referrals and the constant 
                  headache of finding the next great client.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 9-Pillar System Section with Apple-Style Carousel */}
      <AppleCardsCarousel />

      {/* Cards Stack Section - Growth System Components */}
      <CardsStackSection />

      {/* Client Showcase - Animated Testimonials */}
      <ClientShowcase />

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp" className="text-center mb-16">
            <div>
              <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-[var(--text-primary)] mb-6">
                The Local Growth Engine
              </h2>
              <p className="font-inter text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
                Investment packages designed for ambitious craftsmen ready to dominate their local market.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-7xl mx-auto">
            <ThreeDPricingCards />
          </div>

          <AnimatedSection animation="fadeInUp" className="text-center mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-r from-[#007BFF]/10 to-[#008080]/10 rounded-2xl p-8 border border-[#007BFF]/20"
            >
              <h3 className="font-montserrat font-bold text-2xl text-[var(--text-primary)] mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="font-inter text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
                Book a free 30-minute strategy call to discover how The Shah Media can build your local growth engine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-[#007BFF] hover:bg-[#0056b3] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover-lift"
                >
                  Book Strategy Call
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  <Link href="#about">Learn More</Link>
                </Button>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Investment Plans Table */}
      <section className="py-20 bg-[#36454f]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp" className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[#F1F1F1] mb-8">
              Choose Your Growth Investment
            </h2>
            <div className="flex justify-center mb-8">
              <div className="bg-[#2a2a2a] p-1 rounded-lg inline-flex">
                <button
                  onClick={() => setSelectedInvestment("growth")}
                  className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                    selectedInvestment === "growth"
                      ? "bg-[#007BFF] text-white shadow-lg"
                      : "text-[#b9b2aa] hover:text-[#F1F1F1]"
                  }`}
                >
                  Growth Investment
                </button>
                <button
                  onClick={() => setSelectedInvestment("roi")}
                  className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                    selectedInvestment === "roi"
                      ? "bg-[#007BFF] text-white shadow-lg"
                      : "text-[#b9b2aa] hover:text-[#F1F1F1]"
                  }`}
                >
                  ROI Analysis
                </button>
              </div>
            </div>

            {selectedInvestment === "growth" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-3 gap-8"
              >
                {/* Digital Atelier */}
                <div className="bg-[#2a2a2a] rounded-2xl p-8 border border-[#b9b2aa]/20 hover-lift">
                  <div className="text-center">
                    <h3 className="font-montserrat font-bold text-xl text-[#F1F1F1] mb-4">
                      Digital Atelier
                    </h3>
                    <div className="mb-6">
                      <span className="text-3xl font-bold text-[#007BFF]">₹50,000</span>
                      <p className="text-[#b9b2aa] text-sm">One-time investment</p>
                    </div>
                    <ul className="text-left space-y-3 text-[#b9b2aa] mb-8">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-[#007BFF] rounded-full mr-3"></div>
                        Portfolio website with AI Concierge
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-[#007BFF] rounded-full mr-3"></div>
                        Intelligent booking system
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-[#007BFF] rounded-full mr-3"></div>
                        Professional brand positioning
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-[#007BFF] rounded-full mr-3"></div>
                        Mobile-optimized experience
                      </li>
                    </ul>
                    <Button className="w-full bg-[#007BFF] hover:bg-[#0056b3] text-white">
                      Start Building
                    </Button>
                  </div>
                </div>

                {/* Growth Engine */}
                <div className="bg-gradient-to-br from-[#007BFF]/20 to-[#008080]/20 rounded-2xl p-8 border-2 border-[#007BFF] hover-lift relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#007BFF] text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                  <div className="text-center">
                    <h3 className="font-montserrat font-bold text-xl text-[#F1F1F1] mb-4">
                      Growth Engine
                    </h3>
                    <div className="mb-6">
                      <span className="text-3xl font-bold text-[#007BFF]">₹30,000</span>
                      <p className="text-[#b9b2aa] text-sm">per month + ₹40,000 setup</p>
                    </div>
                    <ul className="text-left space-y-3 text-[#b9b2aa] mb-8">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-[#007BFF] rounded-full mr-3"></div>
                        Everything in Digital Atelier
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-[#007BFF] rounded-full mr-3"></div>
                        Google Business optimization
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-[#007BFF] rounded-full mr-3"></div>
                        Strategic Meta advertising
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-[#007BFF] rounded-full mr-3"></div>
                        Lead qualification system
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-[#007BFF] rounded-full mr-3"></div>
                        Monthly performance optimization
                      </li>
                    </ul>
                    <Button className="w-full bg-[#007BFF] hover:bg-[#0056b3] text-white">
                      Launch Growth Engine
                    </Button>
                  </div>
                </div>

                {/* Enterprise Level */}
                <div className="bg-[#2a2a2a] rounded-2xl p-8 border border-[#b9b2aa]/20 hover-lift">
                  <div className="text-center">
                    <h3 className="font-montserrat font-bold text-xl text-[#F1F1F1] mb-4">
                      Enterprise Level
                    </h3>
                    <div className="mb-6">
                      <span className="text-3xl font-bold text-[#007BFF]">₹50,000</span>
                      <p className="text-[#b9b2aa] text-sm">per month + ₹60,000 setup</p>
                    </div>
                    <ul className="text-left space-y-3 text-[#b9b2aa] mb-8">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-[#007BFF] rounded-full mr-3"></div>
                        Everything in Growth Engine
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-[#007BFF] rounded-full mr-3"></div>
                        Multi-platform advertising
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-[#007BFF] rounded-full mr-3"></div>
                        Dedicated account manager
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-[#007BFF] rounded-full mr-3"></div>
                        Custom integrations
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-[#007BFF] rounded-full mr-3"></div>
                        Priority support & optimization
                      </li>
                    </ul>
                    <Button className="w-full bg-[#007BFF] hover:bg-[#0056b3] text-white">
                      Go Enterprise
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}

            {selectedInvestment === "roi" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
              >
                <div className="bg-[#2a2a2a] rounded-2xl p-8 border border-[#b9b2aa]/20">
                  <h3 className="font-montserrat font-bold text-2xl text-[#F1F1F1] mb-8 text-center">
                    Return on Investment Analysis
                  </h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-lg text-[#007BFF] mb-4">Growth Engine ROI</h4>
                      <div className="space-y-3 text-[#b9b2aa]">
                        <p><strong>Monthly Investment:</strong> ₹30,000</p>
                        <p><strong>Typical Client Value:</strong> ₹1,50,000</p>
                        <p><strong>Clients Needed to Break Even:</strong> 1 every 5 months</p>
                        <p><strong>Conservative Estimate:</strong> 2-3 qualified leads per month</p>
                        <p><strong>Expected ROI:</strong> 300-500% annually</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-[#007BFF] mb-4">The Reality Check</h4>
                      <div className="space-y-3 text-[#b9b2aa]">
                        <p>Most interior designers land 1 client from every 10 serious inquiries.</p>
                        <p>Our system delivers pre-qualified leads with 40-60% conversion rates.</p>
                        <p>One high-value project pays for 5+ months of our service.</p>
                        <p>Your time saved on lead generation = more billable hours.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#36454f]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fadeInLeft">
              <div>
                <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[#F1F1F1] mb-8">
                  About The Shah Media
                </h2>
                <p className="font-inter text-lg text-[#b9b2aa] leading-relaxed mb-6">
                  We&apos;re not another generic marketing agency. We&apos;re specialists in local business growth for 
                  high-value service professionals. Our founders understand the unique challenges faced by 
                  craftsmen and service providers in competitive local markets.
                </p>
                <p className="font-inter text-lg text-[#b9b2aa] leading-relaxed mb-8">
                  Based in Shivamogga, we&apos;ve helped interior designers, architects, and premium contractors 
                  build sustainable growth engines that deliver consistent, high-quality leads. We combine 
                  cutting-edge digital marketing with AI-powered automation to create systems that work 
                  24/7 for your business.
                </p>
                <Button className="bg-[#007BFF] hover:bg-[#0056b3] text-white px-8 py-3 rounded-lg">
                  <Link href="#pricing">See Our Systems</Link>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight" className="card-hover">
              <div className="bg-[#36454f] rounded-lg p-8 shadow-lg border border-[#b9b2aa]/20">
                <h3 className="font-montserrat font-bold text-xl text-[#007BFF] mb-6">
                  Why Local Craftsmen Choose Us
                </h3>
                <ul className="space-y-4 font-inter text-[#F1F1F1]">
                  <li className="flex items-start gap-3 hover-lift p-2 rounded transition-all duration-300">
                    <div className="w-2 h-2 bg-[#007BFF] rounded-full mt-2 flex-shrink-0 pulse-glow"></div>
                    <span><strong>Local Market Expertise:</strong> Deep understanding of Shivamogga&apos;s business landscape</span>
                  </li>
                  <li className="flex items-start gap-3 hover-lift p-2 rounded transition-all duration-300">
                    <div className="w-2 h-2 bg-[#007BFF] rounded-full mt-2 flex-shrink-0 pulse-glow"></div>
                    <span><strong>Proven Results:</strong> Consistent lead generation for premium service providers</span>
                  </li>
                  <li className="flex items-start gap-3 hover-lift p-2 rounded transition-all duration-300">
                    <div className="w-2 h-2 bg-[#007BFF] rounded-full mt-2 flex-shrink-0 pulse-glow"></div>
                    <span><strong>AI-Enhanced Systems:</strong> Cutting-edge automation that qualifies leads automatically</span>
                  </li>
                  <li className="flex items-start gap-3 hover-lift p-2 rounded transition-all duration-300">
                    <div className="w-2 h-2 bg-[#007BFF] rounded-full mt-2 flex-shrink-0 pulse-glow"></div>
                    <span><strong>Transparent Partnership:</strong> Clear reporting and open communication throughout</span>
                  </li>
                  <li className="flex items-start gap-3 hover-lift p-2 rounded transition-all duration-300">
                    <div className="w-2 h-2 bg-[#007BFF] rounded-full mt-2 flex-shrink-0 pulse-glow"></div>
                    <span><strong>Mutual Success:</strong> We only win when you win, creating true partnership</span>
                  </li>
                  <li className="flex items-start gap-3 hover-lift p-2 rounded transition-all duration-300">
                    <div className="w-2 h-2 bg-[#007BFF] rounded-full mt-2 flex-shrink-0 pulse-glow"></div>
                    <span><strong>Elite Standards:</strong> We work exclusively with high-value service professionals</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* AI Concierge Chat Assistant */}
      <AiConcierge />
    </main>
  );
}