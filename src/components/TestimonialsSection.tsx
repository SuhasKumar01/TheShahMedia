"use client"

import { useState } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import AnimatedSection from "@/components/AnimatedSection"

interface Testimonial {
  id: string
  name: string
  title: string
  company: string
  rating: number
  content: string
  result: string
  image?: string
  location: string
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Priya Sharma",
    title: "Interior Designer", 
    company: "Elegant Spaces Studio",
    rating: 5,
    content: "Shah Media transformed our online presence completely. We went from struggling to find clients to having a 3-month waitlist for premium projects. Their AI chatbot handles initial inquiries perfectly, and the leads are exactly what we're looking for.",
    result: "3x increase in qualified leads",
    location: "Shivamogga"
  },
  {
    id: "2", 
    name: "Rajesh Kumar",
    title: "Architect",
    company: "Vision Architecture",
    rating: 5,
    content: "The Local Growth Engine is exactly what our firm needed. No more chasing random leads or wasting time with unqualified prospects. Every lead that comes through has real budget and genuine interest in premium architecture.",
    result: "↓ 60% time spent on unqualified leads",
    location: "Shivamogga"
  },
  {
    id: "3",
    name: "Anita Rao",
    title: "Premium Contractor",
    company: "Rao Constructions",
    rating: 5,
    content: "Before Shah Media, we relied completely on word-of-mouth. Now we have a steady stream of high-value clients finding us online. The Google Business optimization alone brought us 15 new premium projects in 4 months.",
    result: "15 new premium projects in 4 months",
    location: "Shivamogga"
  },
  {
    id: "4",
    name: "Vikram Shetty",
    title: "Interior Designer",
    company: "Modern Living Designs", 
    rating: 5,
    content: "The AI Sales Assistant is incredible. It pre-qualifies every lead, collects all the necessary information, and schedules consultations only with serious clients. Our conversion rate has never been higher.",
    result: "Highest conversion rate ever achieved",
    location: "Shivamogga"
  }
]

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTest = testimonials[currentTestimonial]

  return (
    <section className="py-20 bg-gradient-to-br from-[#F8FAFC] to-[#E2E8F0] dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">
          <div>
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-[#111111] dark:text-white mb-6">
              Success Stories from Shivamogga&apos;s Master Craftsmen
            </h2>
            <p className="font-inter text-lg text-[#666666] dark:text-gray-300 max-w-3xl mx-auto">
              Real results from local professionals who transformed their businesses with our Local Growth Engine
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Main Testimonial Card */}
          <AnimatedSection animation="fadeInLeft" className="order-2 lg:order-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-[#007BFF]/20">
                <Quote className="h-12 w-12" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(currentTest.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="font-inter text-lg text-[#111111] dark:text-white leading-relaxed mb-6 relative">
                &ldquo;{currentTest.content}&rdquo;
              </blockquote>

              {/* Result Highlight */}
              <div className="bg-[#007BFF]/10 rounded-lg p-4 mb-6">
                <div className="font-montserrat font-bold text-[#007BFF] text-xl">
                  {currentTest.result}
                </div>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-montserrat font-bold text-lg text-[#111111] dark:text-white">
                    {currentTest.name}
                  </div>
                  <div className="font-inter text-[#666666] dark:text-gray-300">
                    {currentTest.title} • {currentTest.company}
                  </div>
                  <div className="font-inter text-sm text-[#999999] dark:text-gray-400">
                    📍 {currentTest.location}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-full bg-[#F1F1F1] dark:bg-gray-700 hover:bg-[#E1E1E1] dark:hover:bg-gray-600 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-5 w-5 text-[#666666] dark:text-gray-300" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-full bg-[#007BFF] hover:bg-[#0056b3] transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Testimonial Grid */}
          <AnimatedSection animation="fadeInRight" className="order-1 lg:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-[#007BFF] text-white shadow-lg scale-105'
                      : 'bg-white dark:bg-gray-800 text-[#111111] dark:text-white hover:bg-[#F8FAFC] dark:hover:bg-gray-700 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 fill-current ${
                          index === currentTestimonial ? 'text-white' : 'text-yellow-400'
                        }`} 
                      />
                    ))}
                  </div>
                  <div className="font-montserrat font-bold text-sm mb-1">
                    {testimonial.name}
                  </div>
                  <div className={`font-inter text-xs mb-2 ${
                    index === currentTestimonial ? 'text-white/80' : 'text-[#666666] dark:text-gray-300'
                  }`}>
                    {testimonial.title} • {testimonial.company}
                  </div>
                  <div className={`font-inter text-sm font-semibold ${
                    index === currentTestimonial ? 'text-white' : 'text-[#007BFF]'
                  }`}>
                    {testimonial.result}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Trust Indicators */}
        <AnimatedSection animation="fadeInUp" delay={0.3} className="mt-16">
          <div className="text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-[#007BFF] mb-2">100%</div>
                <div className="font-inter text-[#666666] dark:text-gray-300">Local Focus</div>
                <div className="font-inter text-sm text-[#999999] dark:text-gray-400">Exclusively serving Shivamogga</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-[#007BFF] mb-2">5⭐</div>
                <div className="font-inter text-[#666666] dark:text-gray-300">Average Rating</div>
                <div className="font-inter text-sm text-[#999999] dark:text-gray-400">From all our Master Craftsmen</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-[#111111] dark:text-white mb-2">12+</div>
                <div className="font-inter text-[#666666] dark:text-gray-300">Success Stories</div>
                <div className="font-inter text-sm text-[#999999] dark:text-gray-400">And growing every month</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
