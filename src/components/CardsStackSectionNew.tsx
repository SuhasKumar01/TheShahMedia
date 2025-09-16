"use client"

import { ContainerScroll, CardSticky } from "@/components/blocks/cards-stack"

const GROWTH_PILLARS = [
  {
    id: "pillar-1",
    title: "Digital Foundation",
    description: "Transform your online presence with a visually stunning portfolio website that showcases your mastery. Complete with 24/7 AI Concierge, professional brand presentation, and integrated booking system - your digital showroom that works around the clock.",
  },
  {
    id: "pillar-2",
    title: "Lead Generation Machine",
    description: "Dominate Shivamogga's market with sophisticated Meta ad campaigns and complete Google Business Profile optimization. Geographic targeting that brings high-intent, qualified prospects directly to your door.",
  },
  {
    id: "pillar-3",
    title: "AI Sales Assistant",
    description: "Intelligent lead qualification system that pre-screens prospects for budget, timeline, and project scope. Get pre-vetted, ready-to-buy clients delivered with complete context - no more tire-kickers.",
  },
  {
    id: "pillar-4",
    title: "Local Market Domination",
    description: "Become the undisputed #1 choice for premium projects in Shivamogga. Our hyper-local approach ensures you're the first name that comes to mind when someone needs a master craftsman.",
  },
  {
    id: "pillar-5",
    title: "Strategic Partnership",
    description: "Work with a dedicated team that understands Shivamogga's market and your craft. We're not just service providers - we're invested in making you the market leader in your field.",
  },
]

const CardsStackSection = () => {
  return (
    <div className="container min-h-svh place-content-center bg-[var(--bg-primary)] px-6 text-[var(--text-primary)] xl:px-12">
      <div className="grid md:grid-cols-2 md:gap-8 xl:gap-12">
        <div className="left-0 top-0 md:sticky md:h-svh md:py-12">
          <h5 className="text-xs uppercase tracking-wide text-[var(--text-muted)]">the local growth engine</h5>
          <h2 className="mb-6 mt-4 text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            Building your{" "}
            <span className="text-[var(--accent-primary)]">customer acquisition</span> system
          </h2>
          <p className="max-w-prose text-sm text-[var(--text-secondary)]">
            We don&apos;t just run ads or build websites. We install a complete, end-to-end customer acquisition system that transforms unpredictable referrals into a steady stream of qualified prospects ready to invest in quality work.
          </p>
        </div>
        <ContainerScroll className="min-h-[400vh] space-y-8 py-12">
          {GROWTH_PILLARS.map((pillar, index) => (
            <CardSticky
              key={pillar.id}
              index={index + 2}
              className="rounded-2xl border border-[var(--border-primary)] bg-[var(--card-bg)] p-8 shadow-md backdrop-blur-md"
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="my-6 text-2xl font-bold tracking-tighter text-[var(--text-primary)]">
                  {pillar.title}
                </h2>
                <h3 className="text-2xl font-bold text-[var(--accent-primary)]">
                  {String(index + 1).padStart(2, "0")}
                </h3>
              </div>
              <p className="text-[var(--text-secondary)]">{pillar.description}</p>
            </CardSticky>
          ))}
        </ContainerScroll>
      </div>
    </div>
  )
}

export default CardsStackSection