import { Button } from "./ui/button";

const tiers = [
  {
    name: "Digital Atelier",
    price: "₹60,000",
    description: "For the craftsman who needs a world-class online presence.",
    features: [
      "Visually Stunning Portfolio Website",
      '"Dream Project" Intake Form',
      "24/7 AI Concierge",
    ],
    cta: "Get Started",
  },
  {
    name: "Local Growth Engine",
    price: "₹50,000 + ₹30,000/mo",
    description: "Our flagship product for ambitious professionals ready to scale.",
    features: [
      "Everything in Digital Atelier",
      "The Reputation Magnet",
      "The Velvet Rope",
    ],
    cta: "Book a Discovery Call",
    popular: true,
  },
  {
    name: "Market Leader",
    price: "₹75,000 + ₹65,000/mo",
    description: "For the top 1% of firms who want to dominate the market.",
    features: [
      "Everything in Local Growth Engine",
      "Professional Content Creation",
      "Thought Leadership",
      "Proactive PR",
    ],
    cta: "Book a Discovery Call",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 px-4 relative">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-r from-[#007BFF]/10 to-[#008080]/10 rounded-full blur-3xl animate-premium-float"></div>
        <div className="absolute bottom-32 right-1/4 w-80 h-80 bg-gradient-to-r from-[#008080]/8 to-[#007BFF]/8 rounded-full blur-3xl animate-premium-pulse"></div>
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-premium-hero font-bold mb-6 font-montserrat">
          The Local Growth Engine
        </h2>
        <p className="text-premium-subtitle font-inter max-w-3xl mx-auto mb-16">
          Complete customer acquisition system for Master Craftsmen
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`glass-card hover-lift relative overflow-hidden ${
                tier.popular 
                  ? "border-2 border-[#007BFF]/50 animate-premium-glow scale-105" 
                  : ""
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#007BFF] to-[#008080] py-2">
                  <span className="text-white font-semibold text-sm">Most Popular</span>
                </div>
              )}
              
              <div className={`p-8 ${tier.popular ? "pt-12" : ""}`}>
                <h3 className="text-2xl font-bold text-[#F1F1F1] mb-2 font-montserrat">
                  {tier.name}
                </h3>
                <div className="text-premium-accent text-3xl font-bold mb-4 font-inter">
                  {tier.price}
                </div>
                <p className="text-premium-subtitle text-sm mb-8 leading-relaxed">
                  {tier.description}
                </p>
                
                <ul className="space-y-4 mb-10">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-left">
                      <span className="text-[#007BFF] text-lg">✓</span>
                      <span className="text-[#F1F1F1]/90 font-inter">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  variant={tier.popular ? "default" : "outline"}
                  className={`w-full py-4 text-lg font-semibold ${
                    tier.popular 
                      ? "btn-primary" 
                      : "btn-secondary"
                  }`}
                >
                  {tier.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
