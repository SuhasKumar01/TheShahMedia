"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import AnimatedSection from "@/components/AnimatedSection";

export function ClientShowcase() {
  const testimonials = [
    {
      quote:
        "Shah Media completely transformed our digital presence. We went from getting maybe 2-3 inquiries a month to having a steady stream of high-value clients. The AI chatbot alone saves us 10 hours a week by pre-qualifying leads perfectly.",
      name: "Priya Nair",
      designation: "Founder, Elegant Interiors Shivamogga",
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The Local Growth Engine has been a game-changer for our architecture firm. We now attract premium residential projects exclusively through our online presence. Every lead that comes in has real budget and genuine interest.",
      name: "Vikram Hegde",
      designation: "Principal Architect, Hegde Design Studio",
      src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Before Shah Media, we struggled to showcase our premium construction projects online. Now our website generates ₹2+ crore worth of project inquiries every month. The ROI has been incredible.",
      name: "Anita Shetty",
      designation: "Managing Director, Shetty Premium Builders",
      src: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The Meta Ads strategy they created for us brings in exactly the type of clients we want - homeowners planning ₹5+ lakh interior projects. Our booking calendar is full for the next 4 months.",
      name: "Rajesh Kumar",
      designation: "Creative Director, Modern Living Concepts",
      src: "https://images.unsplash.com/photo-1567515004624-219c11d31f2e?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Shah Media's approach is incredibly systematic. From Google Business optimization to lead nurturing, everything works together seamlessly. We've achieved consistent ₹15+ lakh monthly revenue for the first time.",
      name: "Deepa Reddy",
      designation: "Principal Designer, Reddy Architecture & Interiors",
      src: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-[#111111] mb-6">
              Meet Our Master Craftsmen
            </h2>
            <p className="font-inter text-xl text-[#666666] leading-relaxed">
              See how Shivamogga&apos;s leading designers, architects, and builders transformed their businesses 
              with our Local Growth Engine
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fadeInUp" delay={0.2}>
          <AnimatedTestimonials testimonials={testimonials} />
        </AnimatedSection>

        {/* Trust Indicators */}
        <AnimatedSection animation="fadeInUp" delay={0.4} className="mt-20">
          <div className="text-center">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-[#007BFF]/10 to-[#007BFF]/5 rounded-2xl p-6 border border-[#007BFF]/20">
                <div className="text-3xl font-bold text-[#007BFF] mb-2">25+</div>
                <div className="font-inter text-[#666666] font-medium">Master Craftsmen</div>
                <div className="font-inter text-sm text-[#999999]">Served across Shivamogga</div>
              </div>
              <div className="bg-gradient-to-br from-[#007BFF]/10 to-[#007BFF]/5 rounded-2xl p-6 border border-[#007BFF]/20">
                <div className="text-3xl font-bold text-[#007BFF] mb-2">₹3.2Cr+</div>
                <div className="font-inter text-[#666666] font-medium">Revenue Generated</div>
                <div className="font-inter text-sm text-[#999999]">For our clients in 2024</div>
              </div>
              <div className="bg-gradient-to-br from-[#007BFF]/10 to-[#007BFF]/5 rounded-2xl p-6 border border-[#007BFF]/20">
                <div className="text-3xl font-bold text-[#007BFF] mb-2">4.9⭐</div>
                <div className="font-inter text-[#666666] font-medium">Client Satisfaction</div>
                <div className="font-inter text-sm text-[#999999]">Average rating from all clients</div>
              </div>
              <div className="bg-gradient-to-br from-[#007BFF]/10 to-[#007BFF]/5 rounded-2xl p-6 border border-[#007BFF]/20">
                <div className="text-3xl font-bold text-[#007BFF] mb-2">180%</div>
                <div className="font-inter text-[#666666] font-medium">Average ROI</div>
                <div className="font-inter text-sm text-[#999999]">Within first 6 months</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}