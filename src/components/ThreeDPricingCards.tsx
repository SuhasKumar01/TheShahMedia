"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check, Star, Zap, Crown } from "lucide-react";

interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: string;
  priceSubtext: string;
  features: string[];
  isPopular?: boolean;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  buttonText: string;
  buttonVariant: "outline" | "default";
  gradient: string;
}

const pricingTiers: PricingTier[] = [
  {
    id: "digital-atelier",
    name: "Digital Atelier",
    description: "Perfect Portfolio Foundation",
    price: "₹50,000",
    priceSubtext: "One-time investment",
    features: [
      "Stunning portfolio website built on modern stack",
      "Dream Project intake form with inspiring questions",
      "24/7 AI Concierge trained on your philosophy",
      "Integrated booking system",
      "Mobile-first, fast-loading design"
    ],
    icon: Star,
    buttonText: "Get Started",
    buttonVariant: "outline",
    gradient: "from-[#007BFF]/10 to-[#0056b3]/10"
  },
  {
    id: "growth-engine",
    name: "Growth Engine",
    description: "Complete Customer Acquisition System",
    price: "₹30,000",
    priceSubtext: "per month + ₹40,000 setup",
    features: [
      "Everything in Digital Atelier",
      "Complete Google Business Profile optimization",
      "Sophisticated Meta ad campaigns",
      "Geographic targeting within Shivamogga",
      "AI-powered lead qualification",
      "Monthly performance reporting"
    ],
    isPopular: true,
    icon: Zap,
    buttonText: "Start Growing",
    buttonVariant: "default",
    gradient: "from-[#007BFF]/20 to-[#0056b3]/20"
  },
  {
    id: "enterprise",
    name: "Enterprise Level",
    description: "Maximum Market Domination",
    price: "₹50,000",
    priceSubtext: "per month + ₹60,000 setup",
    features: [
      "Everything in Growth Engine",
      "Multi-platform advertising (Google, Meta, LinkedIn)",
      "Advanced marketing automation",
      "Dedicated account manager",
      "Weekly strategy calls",
      "Brand expansion consulting"
    ],
    icon: Crown,
    buttonText: "Go Enterprise",
    buttonVariant: "outline",
    gradient: "from-[#007BFF]/15 to-[#0056b3]/15"
  }
];

export function ThreeDPricingCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-6">
      {pricingTiers.map((tier) => (
        <CardContainer key={tier.id} className="inter-var py-4 sm:py-8" containerClassName="py-2">
          <CardBody 
            className={`
              bg-[#36454f] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] 
              dark:bg-[#36454f] dark:border-white/[0.2] border-black/[0.1] 
              w-full h-auto rounded-xl p-4 sm:p-6 border
              ${tier.isPopular 
                ? 'border-[#007BFF] shadow-2xl shadow-[#007BFF]/[0.1] bg-[#36454f] dark:bg-[#36454f]' 
                : 'border-black/[0.1] hover:shadow-2xl hover:shadow-emerald-500/[0.1]'
              }
              hover:border-[#007BFF] transition-all duration-300
              bg-gradient-to-br ${tier.gradient}
            `}
          >
            {/* Popular Badge */}
            {tier.isPopular && (
              <CardItem
                translateZ="60"
                rotateX={-10}
                className="absolute -top-4 left-1/2 transform -translate-x-1/2"
              >
                <span className="bg-gradient-to-r from-[#007BFF] to-[#0056b3] text-white px-4 py-2 rounded-full text-sm font-medium shadow-2xl shadow-[#007BFF]/50 hover:shadow-emerald-500/50 transition-all duration-300">
                  Most Popular
                </span>
              </CardItem>
            )}

            {/* Icon */}
            <CardItem
              translateZ="50"
              rotateX={tier.isPopular ? 10 : 0}
              rotateZ={tier.isPopular ? -5 : 0}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#007BFF]/20 to-[#0056b3]/30 backdrop-blur-sm flex items-center justify-center mb-3 sm:mb-4 mx-auto group-hover/card:shadow-xl group-hover/card:shadow-[#007BFF]/20 transition-all duration-300"
            >
              <tier.icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#007BFF] group-hover/card:scale-110 transition-transform duration-300" />
            </CardItem>

            {/* Title */}
            <CardItem
              translateZ="50"
              rotateX={tier.isPopular ? 5 : 0}
              className="text-lg sm:text-xl font-bold text-[#F1F1F1] dark:text-[#F1F1F1] text-center group-hover/card:text-[#007BFF] transition-colors duration-300"
            >
              {tier.name}
            </CardItem>

            {/* Description */}
            <CardItem
              as="p"
              translateZ="60"
              className="text-[#b9b2aa] text-xs sm:text-sm max-w-sm mt-1 sm:mt-2 dark:text-[#b9b2aa] text-center leading-relaxed group-hover/card:text-[#F1F1F1] dark:group-hover/card:text-[#F1F1F1] transition-colors duration-300"
            >
              {tier.description}
            </CardItem>

            {/* Price */}
            <CardItem 
              translateZ="100" 
              rotateX={tier.isPopular ? 15 : 0}
              rotateZ={tier.isPopular ? -8 : 0}
              className="w-full mt-4 sm:mt-6 text-center"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#007BFF] mb-2 group-hover/card:scale-105 transition-transform duration-300">
                {tier.price}
              </div>
              <p className="text-xs sm:text-sm text-[#b9b2aa] dark:text-[#b9b2aa] group-hover/card:text-[#F1F1F1] dark:group-hover/card:text-[#F1F1F1] transition-colors duration-300">
                {tier.priceSubtext}
              </p>
            </CardItem>

            {/* Features */}
            <CardItem translateZ="80" className="w-full mt-4 sm:mt-6">
              <ul className="space-y-2 sm:space-y-3">
                {tier.features.map((feature, idx) => (
                  <li 
                    key={idx} 
                    className={`
                      flex items-start gap-2 text-xs sm:text-sm 
                      group-hover/card:translate-x-1 transition-transform duration-300
                      ${idx === 0 ? 'delay-0' : 
                        idx === 1 ? 'delay-75' : 
                        idx === 2 ? 'delay-150' : 
                        idx === 3 ? 'delay-300' : 'delay-500'}
                    `}
                  >
                    <Check className="h-3 w-3 sm:h-4 sm:w-4 text-[#007BFF] mt-0.5 flex-shrink-0 group-hover/card:text-emerald-500 transition-colors duration-300" />
                    <span className="text-[#F1F1F1] dark:text-[#F1F1F1] leading-relaxed group-hover/card:text-[#F1F1F1] dark:group-hover/card:text-white transition-colors duration-300">
                      {feature.includes("Everything in") ? (
                        <strong>{feature}</strong>
                      ) : (
                        feature
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </CardItem>

            {/* Button */}
            <CardItem 
              translateZ={20} 
              translateX={tier.isPopular ? (tier.id === "growth-engine" ? 0 : 20) : 0}
              translateY={tier.isPopular ? -5 : 0}
              className="w-full mt-6 sm:mt-8"
            >
              <Button
                asChild
                variant={tier.buttonVariant}
                className={`
                  w-full transition-all duration-300 hover:scale-105 text-sm sm:text-base py-2 sm:py-3
                  ${tier.buttonVariant === "default" 
                    ? "bg-[#007BFF] hover:bg-[#0056b3] text-white shadow-lg hover:shadow-xl" 
                    : "border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white hover:shadow-lg"
                  }
                `}
              >
                <Link href="#contact">{tier.buttonText}</Link>
              </Button>
            </CardItem>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}