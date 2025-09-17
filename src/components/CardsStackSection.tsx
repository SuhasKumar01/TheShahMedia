'use client'

import { ContainerScroll, CardSticky } from "@/components/blocks/cards-stack"

const GROWTH_PILLARS = [
  {
    id: "digital-foundation",
    title: "Digital Foundation",
    description: "Transform your online presence with a visually stunning portfolio website that showcases your mastery. Complete with 24/7 AI Concierge, professional brand presentation, and integrated booking system - your digital showroom that works around the clock.",
  },
  {
    id: "lead-generation",
    title: "Lead Generation Machine", 
    description: "Dominate Shivamogga&apos;s market with sophisticated Meta ad campaigns and complete Google Business Profile optimization. Geographic targeting that brings high-intent, qualified prospects directly to your door.",
  },
  {
    id: "ai-sales-assistant",
    title: "AI Sales Assistant",
    description: "Intelligent lead qualification system that pre-screens prospects for budget, timeline, and project scope. Get pre-vetted, ready-to-buy clients delivered with complete context - no more tire-kickers.",
  },
  {
    id: "market-domination",
    title: "Local Market Domination",
    description: "Become the undisputed #1 choice for premium projects in Shivamogga. Our hyper-local approach ensures you&apos;re the first name that comes to mind when someone needs a master craftsman.",
  },
  {
    id: "strategic-partnership",
    title: "Strategic Partnership",
    description: "Work with a dedicated team that understands Shivamogga&apos;s market and your craft. We&apos;re not just service providers - we&apos;re invested in making you the market leader in your field.",
  }
]

export default function CardsStackSection() {
  return (
    <div className="container min-h-svh place-content-center bg-[#36454f] px-6 text-white xl:px-12">
      <div className="grid md:grid-cols-2 md:gap-8 xl:gap-12">
        <div className="left-0 top-0 md:sticky md:h-svh md:py-12">
          <h5 className="text-xs uppercase tracking-wide text-blue-500">our process</h5>
          <h2 className="mb-6 mt-4 text-4xl font-bold tracking-tight text-white">
            Building your{" "}
            <span className="text-blue-500">customer acquisition</span> system
          </h2>
          <p className="max-w-prose text-sm text-gray-400">
            We don&apos;t just run ads or build websites. We install a complete, 
            end-to-end customer acquisition system that transforms unpredictable 
            referrals into a steady stream of qualified prospects ready to invest in quality work.
          </p>
        </div>
        
        <ContainerScroll className="min-h-[400vh] space-y-8 py-12">
          {GROWTH_PILLARS.map((pillar, index) => (
            <CardSticky
              key={pillar.id}
              index={index + 2}
              className="group rounded-2xl border border-white/10 bg-transparent backdrop-blur-md p-8 shadow-lg hover:backdrop-blur-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="my-6 text-2xl font-bold tracking-tighter text-white">
                  {pillar.title}
                </h3>
                <div className="text-2xl font-bold text-blue-500">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">{pillar.description}</p>
            </CardSticky>
          ))}
        </ContainerScroll>
      </div>
    </div>
  )
}