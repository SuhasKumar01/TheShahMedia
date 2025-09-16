"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send, User, Bot, X, Sparkles, Mic, MicOff } from "lucide-react";
import { motion } from "framer-motion";
import { useAnalytics } from "@/lib/analytics";

// Speech Recognition type declarations
interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string;
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  abort(): void;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null;
  onend: (() => void) | null;
  onstart: (() => void) | null;
}

interface SpeechRecognitionStatic {
  new (): SpeechRecognition;
}

// Extend Window interface for Speech Recognition
declare global {
  interface Window {
    SpeechRecognition?: SpeechRecognitionStatic;
    webkitSpeechRecognition?: SpeechRecognitionStatic;
  }
}

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const initialBotMessage: Message = {
  id: '1',
  content: "Hi! I'm your AI assistant from The Shah Media. I'm here to help you understand how our Local Growth Engine can transform your construction business. What would you like to know?",
  sender: 'bot',
  timestamp: new Date()
};

const quickActions = [
  "Get Pricing",
  "View Portfolio", 
  "Book Consultation",
  "Our Services"
];

// Enhanced bot responses with comprehensive use case handling
const getBotResponse = (userMessage: string): string => {
  const lowerMessage = userMessage.toLowerCase();
  
  // Pricing related queries
  if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pricing') || lowerMessage.includes('package') || lowerMessage.includes('plan')) {
    return "Our Local Growth Engine has three investment levels designed for different business stages:\n\n🎨 **Digital Atelier** - ₹50,000 one-time\n• Complete portfolio website with modern design\n• Dream Project intake form\n• 24/7 AI Concierge (like me!)\n• Integrated booking system\n• Mobile-first, fast-loading design\n• Perfect for established craftsmen wanting digital presence\n\n🚀 **Growth Engine** (Most Popular) - ₹30,000/month + ₹40,000 setup\n• Everything in Digital Atelier PLUS:\n• Google Business Profile optimization\n• Sophisticated Meta ad campaigns\n• Geographic targeting within Shivamogga\n• AI-powered lead qualification\n• Monthly performance reporting\n• Best for scaling your business systematically\n\n👑 **Enterprise Level** - ₹50,000/month + ₹60,000 setup\n• Everything in Growth Engine PLUS:\n• Multi-platform advertising (Google, Meta, LinkedIn)\n• Advanced marketing automation\n• Dedicated account manager\n• Weekly strategy calls\n• Brand expansion consulting\n• For market-dominating businesses\n\n💡 **ROI Promise:** One premium client typically covers the monthly investment. Most clients see 3x ROI within 90 days.\n\nWhich investment level aligns with your current business goals?";
  }
  
  // Services and system queries
  if (lowerMessage.includes('service') || lowerMessage.includes('what do you') || lowerMessage.includes('how does') || lowerMessage.includes('system') || lowerMessage.includes('work')) {
    return "Our Local Growth Engine is a complete customer acquisition system built on three powerful pillars:\n\n🏗️ **The Digital Foundation** (Your Digital Shopfront)\n• Visually stunning portfolio website showcasing your best work\n• Professional brand presentation that reflects your expertise\n• 24/7 AI Concierge trained on your services (like me!)\n• Integrated booking system for consultations\n• Mobile-first, fast-loading design\n• Dream Project intake form with inspiring questions\n\n🎯 **The Lead Generation Machine** (The Engine)\n• Complete Google Business Profile optimization\n• Sophisticated Meta ad campaigns on Instagram & Facebook\n• Geographic targeting specifically for Shivamogga region\n• Local search domination for high-intent keywords\n• Visually-driven ads targeting high-income homeowners\n• High-value client attraction (not price shoppers)\n\n🤖 **The AI Sales Assistant** (The Qualifier)\n• Automatic lead enrichment and data collection\n• AI-powered qualification via email/WhatsApp sequences\n• Budget and timeline pre-screening\n• Pre-vetted, high-value leads delivered to your inbox\n• Complete lead handoff with full context\n• WhatsApp integration for seamless communication\n\n🎯 **The Result:** You get a steady stream of qualified, ready-to-buy clients instead of chasing random referrals.\n\nWhich pillar interests you most, or would you like to see how they work together?";
  }
  
  // Results and success stories
  if (lowerMessage.includes('result') || lowerMessage.includes('success') || lowerMessage.includes('proven') || lowerMessage.includes('testimonial') || lowerMessage.includes('example')) {
    return "Our Local Growth Engine delivers measurable, predictable results:\n\n📈 **Typical Results in 90 Days:**\n• 3x increase in qualified inquiries\n• 45% reduction in time spent with unqualified leads\n• +95 local search visibility score\n• Average project value increase of 40-60%\n• 60% reduction in marketing costs\n• 24/7 lead capture (never miss an opportunity)\n\n🏆 **Real Client Success Stories from Shivamogga:**\n\n**Priya Sharma** - Interior Designer (Elegant Spaces Studio)\n• From struggling to find clients → 3-month waitlist for premium projects\n• 3x increase in qualified leads\n• AI chatbot handles inquiries perfectly\n\n**Rajesh Kumar** - Architect (Vision Architecture)\n• 60% reduction in time spent on unqualified leads\n• Every lead now has real budget and genuine interest\n• Focus returned to actual architecture work\n\n**Anita Rao** - Premium Contractor (Rao Constructions)\n• 15 new premium projects in just 4 months\n• Clients now come pre-qualified and ready to invest\n• Business growth without hiring more sales staff\n\n**Vikram Shetty** - Interior Designer (Modern Living Designs)\n• Highest conversion rate ever achieved\n• Quality leads over quantity leads\n• Premium pricing accepted without negotiation\n\n🎯 **Why It Works:** We focus exclusively on high-value service professionals in Shivamogga, so our results are specifically tailored to your market and client base.\n\nWould you like to book a discovery call to discuss your specific growth goals?";
  }
  
  // Booking and consultation queries
  if (lowerMessage.includes('book') || lowerMessage.includes('call') || lowerMessage.includes('consultation') || lowerMessage.includes('meeting') || lowerMessage.includes('schedule') || lowerMessage.includes('appointment')) {
    return "Perfect! I'd love to connect you with our team for a FREE discovery call.\n\n📅 **What we'll cover in 30 minutes:**\n• Analysis of your current marketing approach\n• Identification of missed opportunities in your specific market\n• Custom strategy recommendations tailored to your business\n• Clear roadmap for implementing your growth system\n• Honest assessment of whether we're the right fit\n\n✨ **Our Promise:** No pressure, just value. We only work with businesses that are a perfect strategic fit.\n\n🎯 **How to Book:**\n1. Click the 'Book Your Strategy Call' button at the top of the page\n2. Choose a time that works for your schedule\n3. Complete the brief questionnaire (helps us prepare)\n4. Get ready for actionable insights!\n\n⏰ **Availability:** Next slots usually available within 2-3 business days. Most clients say it's the most valuable 30 minutes they've spent on their business growth.\n\n📞 **What You'll Get:**\n• Specific recommendations for your business\n• Analysis of your competition\n• Growth opportunities you might be missing\n• Clear next steps (whether you work with us or not)\n\nShall I guide you to the booking page, or do you have any specific questions before scheduling?";
  }
  
  // Local and area-specific queries
  if (lowerMessage.includes('local') || lowerMessage.includes('shivamogga') || lowerMessage.includes('area') || lowerMessage.includes('location') || lowerMessage.includes('region')) {
    return "Absolutely! We're 100% focused on Shivamogga and surrounding areas - that's our superpower!\n\n🎯 **Our Local Advantage:**\n• Deep understanding of Shivamogga's market dynamics\n• Knowledge of local client preferences and budgets\n• Understanding of seasonal construction patterns\n• Connections with local suppliers and contractors\n• Insight into local competition and pricing\n• Cultural nuances that matter in client relationships\n\n📍 **Primary Areas We Serve:**\n• Shivamogga city and all suburbs\n• Thirthahalli and surrounding villages\n• Sagar and nearby areas\n• Hosanagar region\n• Shikarpur and adjacent districts\n• Bhadravathi industrial area\n\n🏠 **Why Local Focus Matters:**\n• We create campaigns that speak your clients' language\n• Target homeowners in your service radius\n• Understand local festivals, events, and timing\n• Know which areas have higher-income families\n• Tailor messaging to local cultural values\n• Build trust through local credibility\n\n💡 **Local Success Formula:**\nGeneric marketing fails → Local precision wins. We don't just run ads; we create community connections that turn into premium projects.\n\n🌟 **100% Local Focus Guarantee:** We ONLY work with Shivamogga professionals. Your success is our reputation in the community.\n\nWhat specific area of Shivamogga do you primarily serve? I can share insights about opportunities in your exact market.";
  }
  
  // AI and technology queries
  if (lowerMessage.includes('ai') || lowerMessage.includes('technology') || lowerMessage.includes('chatbot') || lowerMessage.includes('artificial') || lowerMessage.includes('automation')) {
    return "Excellent question! AI is the secret weapon that makes our Local Growth Engine so effective.\n\n🤖 **How AI Powers Your Business Growth:**\n\n**24/7 Client Interaction** (Like right now!)\n• Never miss a lead, even at 2 AM\n• Instant responses to common questions\n• Professional first impression every time\n• Consistent brand voice and messaging\n\n**Intelligent Lead Qualification**\n• Automatically screens prospects for budget, timeline, project scope\n• Asks the right questions to identify serious buyers\n• Filters out tire-kickers before they reach you\n• Collects complete project details upfront\n\n**Smart Response Automation**\n• Trained specifically on your services and pricing\n• Handles 80% of initial inquiries without human intervention\n• Escalates complex queries to you with full context\n• Maintains warm leads until you're available\n\n**Data-Driven Optimization**\n• Tracks which marketing channels bring highest-value clients\n• Identifies best times to reach your ideal customers\n• Optimizes ad spending for maximum ROI\n• Provides insights for business growth decisions\n\n⚡ **Real Benefits for Your Business:**\n• Focus your time on design/architecture, not lead screening\n• Scale your business without hiring more staff\n• Qualify 10x more leads in the same time\n• Never lose a potential client due to delayed response\n• Professional handling of inquiries even during busy project phases\n\n🎯 **The Human Touch Enhanced:** AI doesn't replace your expertise - it amplifies it by handling routine tasks so you can focus on creating amazing spaces and building client relationships.\n\nWould you like to see a demo of how the AI qualification process works for your specific type of projects?";
  }
  
  // Portfolio and past work queries
  if (lowerMessage.includes('portfolio') || lowerMessage.includes('example') || lowerMessage.includes('sample') || lowerMessage.includes('previous') || lowerMessage.includes('past work')) {
    return "Great question! While I can't show you our clients' confidential business metrics in detail, I can share what our systems typically include:\n\n🎨 **Portfolio Website Examples:**\n• Stunning visual galleries showcasing best work\n• Professional photography integration\n• Before/after project showcases\n• Client testimonial integration\n• Service-specific landing pages\n• Mobile-optimized viewing experience\n\n📊 **System Performance Examples:**\n• Lead tracking dashboards\n• ROI reporting interfaces\n• Client communication flows\n• Automated follow-up sequences\n• Performance analytics displays\n\n🏆 **Success Metrics We Track:**\n• Website visitor conversion rates\n• Lead quality scores\n• Response time improvements\n• Client acquisition costs\n• Average project values\n• Customer lifetime value\n\n💼 **What You'll Get:**\n• Custom portfolio website designed for your brand\n• Examples from your specific industry (interior design/architecture/construction)\n• Templates proven to convert browsers into buyers\n• Professional presentation of your unique style\n\n🎯 **Ready to See Your Vision Come to Life?**\nDuring our discovery call, we'll:\n• Review examples specific to your industry\n• Show you competitor analysis\n• Walk through system demos\n• Discuss your unique brand positioning\n\nWould you like to book a discovery call where we can show you detailed examples and discuss how we'd position your specific business?";
  }
  
  // Competition and comparison queries
  if (lowerMessage.includes('competitor') || lowerMessage.includes('competition') || lowerMessage.includes('compare') || lowerMessage.includes('different') || lowerMessage.includes('better') || lowerMessage.includes('alternative')) {
    return "Smart question! Here's what makes The Shah Media different from other marketing agencies:\n\n🎯 **Our Unique Advantages:**\n\n**100% Local Specialization**\n• ONLY serve Shivamogga master craftsmen\n• Deep market knowledge vs. generic solutions\n• Local connections and credibility\n• Understanding of regional client behavior\n\n**Complete System vs. Piecemeal Services**\n• One integrated growth engine vs. multiple vendors\n• All components work together seamlessly\n• Single point of accountability\n• Consistent brand experience across all touchpoints\n\n**AI-Enhanced vs. Traditional Marketing**\n• 24/7 automated lead qualification\n• Data-driven optimization\n• Predictable results vs. hoping for the best\n• Scalable without proportional cost increases\n\n**Premium Focus vs. Volume Approach**\n• Target high-value clients, not bargain hunters\n• Quality over quantity lead generation\n• Positioning you as the premium choice\n• Higher project values and better margins\n\n❌ **What We're NOT:**\n• A freelance agency juggling hundreds of clients\n• A generic marketing company using templates\n• A social media management service\n• A website-only solution\n\n✅ **What We ARE:**\n• Strategic growth partners for elite craftsmen\n• Specialists in luxury construction marketing\n• AI technology integrated with human expertise\n• Results-focused with measurable outcomes\n\n💡 **The Bottom Line:** We sell one product - a complete Local Growth Engine. Others sell pieces. We solve the entire customer acquisition challenge.\n\n🤝 **Our Mutual Success Model:** We only win when you win. Our reputation in Shivamogga depends on your success.\n\nWhat specific concerns do you have about working with marketing partners that I can address?";
  }
  
  // Timeline and implementation queries
  if (lowerMessage.includes('timeline') || lowerMessage.includes('time') || lowerMessage.includes('long') || lowerMessage.includes('fast') || lowerMessage.includes('quick') || lowerMessage.includes('setup') || lowerMessage.includes('implementation')) {
    return "Perfect timing question! Here's our proven implementation timeline:\n\n📅 **Phase 1: Foundation Setup (Weeks 1-2)**\n• Discovery call and strategy session\n• Brand analysis and positioning\n• Website design and development begins\n• Content creation and photography planning\n• AI chatbot training with your service details\n\n🏗️ **Phase 2: Digital Foundation (Weeks 3-4)**\n• Portfolio website goes live\n• Google Business Profile optimization\n• AI assistant integration and testing\n• Booking system setup and testing\n• Initial SEO optimization\n\n🎯 **Phase 3: Lead Generation Launch (Weeks 5-6)**\n• Meta ads campaigns launch\n• Local targeting setup\n• Lead qualification system activation\n• Performance tracking implementation\n• Monitoring and initial optimization\n\n📈 **Phase 4: Optimization & Scaling (Weeks 7-12)**\n• Performance analysis and refinement\n• Ad creative testing and optimization\n• Lead flow fine-tuning\n• Conversion rate improvements\n• Scaling successful campaigns\n\n⚡ **Quick Wins Timeline:**\n• Week 1: Strategy and planning complete\n• Week 2: Professional website live\n• Week 4: First qualified leads generated\n• Week 6: Consistent lead flow established\n• Week 8: ROI positive (typically)\n• Week 12: 3x lead increase (average)\n\n🚀 **Why This Timeline Works:**\n• Builds solid foundation before scaling\n• Allows for testing and optimization\n• Ensures quality over rushed implementation\n• Provides time for AI learning and improvement\n\n💡 **During Setup:** You'll receive weekly progress updates and can provide feedback at every stage. We don't disappear during implementation!\n\n🎯 **Ready to Start:** Most clients are eager to begin within 2-3 days of our discovery call.\n\nWhat's your ideal timeline for seeing results? I can share how we can align with your business calendar.";
  }
  
  // Contract, commitment, and terms queries
  if (lowerMessage.includes('contract') || lowerMessage.includes('commitment') || lowerMessage.includes('term') || lowerMessage.includes('cancel') || lowerMessage.includes('guarantee') || lowerMessage.includes('refund')) {
    return "Great question! Transparency in our partnership terms is crucial:\n\n📋 **Contract Terms:**\n\n**Digital Atelier Package:**\n• One-time investment: ₹50,000\n• No ongoing monthly commitment\n• You own the website and all assets\n• Lifetime access to AI chatbot\n• 6-month support included\n\n**Growth Engine Package:**\n• Setup fee: ₹40,000 (one-time)\n• Monthly investment: ₹30,000\n• 6-month minimum commitment\n• Month-to-month after initial period\n• 30-day cancellation notice required\n\n**Enterprise Level Package:**\n• Setup fee: ₹60,000 (one-time)\n• Monthly investment: ₹50,000\n• 6-month minimum commitment\n• Dedicated account manager included\n• Quarterly strategy reviews\n\n🛡️ **Our Guarantees:**\n\n**Performance Guarantee:**\n• 3x increase in qualified leads within 90 days\n• If not achieved, we work for free until you do\n• Monthly performance reports with clear metrics\n\n**Quality Guarantee:**\n• Professional-grade deliverables or complete redo\n• 24/7 system uptime (99.9% guaranteed)\n• Response time under 24 hours for support\n\n**Investment Protection:**\n• Setup work completed in 30 days or full refund\n• All assets transfer to you if partnership ends\n• No hidden fees or surprise costs\n• Clear ROI tracking from day one\n\n🤝 **Why Minimum Commitment:**\n• Digital marketing requires time to optimize\n• AI systems improve with data over time\n• Building local market presence takes consistency\n• Ensures both parties are committed to success\n\n💡 **After Minimum Period:** Most clients choose to continue because results speak for themselves. Our average client relationship is 2+ years.\n\n✅ **What You Own:** Website, content, social profiles, and all creative assets remain yours regardless of partnership status.\n\nWhat specific terms or guarantees are most important for your peace of mind?";
  }
  
  // Greeting and general conversation
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey') || lowerMessage.includes('good') || lowerMessage.includes('thank')) {
    return "Hello! Welcome to The Shah Media! 👋\n\nI'm thrilled you're here. As your AI assistant, I'm here to help you understand how our Local Growth Engine can transform your business from unpredictable referrals to a steady stream of premium clients.\n\n🎯 **I can help you with:**\n• Detailed pricing and package information\n• Understanding our three-pillar system\n• Real success stories from Shivamogga professionals\n• Booking your free discovery call\n• Answering any questions about our process\n\n💡 **Quick Start Questions:**\n• What type of business do you run? (Interior Design, Architecture, Construction)\n• What's your biggest challenge with finding clients?\n• Are you looking to scale or just get started?\n\nWhat would you like to explore first? I'm here to provide clear, honest answers about everything we do!";
  }
  
  // Default fallback with intelligent routing
  return "That's an excellent question! I want to make sure I give you the most helpful answer.\n\n🎯 **I can provide detailed information about:**\n\n📊 **Pricing & Packages** - Complete breakdown of our three investment levels\n🏗️ **Our System** - How the three-pillar Local Growth Engine works\n📈 **Results & Success Stories** - Real outcomes from Shivamogga professionals\n📅 **Getting Started** - Booking your free discovery call\n🤖 **AI Technology** - How automation enhances your business\n🌍 **Local Focus** - Why Shivamogga specialization matters\n⏰ **Timeline** - Implementation and results timeline\n📋 **Terms & Guarantees** - Partnership details and commitments\n\n💡 **To help you better, could you tell me:**\n• What specific aspect interests you most?\n• What's your main challenge with client acquisition?\n• Are you comparing different solutions?\n\n🚀 **Or try asking:**\n• \"What are your prices?\"\n• \"How does your system work?\"\n• \"Can I see some results?\"\n• \"How do I get started?\"\n\nWhat would be most valuable for you to learn about first?";
};

export default function EnhancedAiChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([initialBotMessage]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { trackAIChatInteraction } = useAnalytics();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (messageText?: string) => {
    const textToSend = messageText || inputValue;
    if (!textToSend.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: textToSend,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Track user message
    trackAIChatInteraction('message_sent');

    setIsTyping(true);

    // Simulate bot typing delay with realistic timing
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getBotResponse(textToSend),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000); // Variable delay for realism
  };

  const handleQuickAction = (action: string) => {
    trackAIChatInteraction(`quick_action_${action.toLowerCase().replace(/\s+/g, '_')}`);
    handleSendMessage(action);
  };

  const handleChatOpen = () => {
    trackAIChatInteraction('chat_opened');
    setIsOpen(true);
  };

  const toggleVoiceRecognition = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Speech recognition is not supported in this browser');
      return;
    }

    if (isListening) {
      setIsListening(false);
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      console.error('Speech recognition not supported');
      return;
    }
    
    const recognition = new SpeechRecognition();
    
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
      trackAIChatInteraction('voice_input_started');
    };

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript;
      setInputValue(transcript);
      trackAIChatInteraction('voice_input_completed');
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      console.error('Speech recognition error:', event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      if (open) handleChatOpen();
      else setIsOpen(false);
    }}>
      <DialogTrigger asChild>
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20,
            delay: 1
          }}
        >
          <Button
            size="lg"
            className="relative rounded-full bg-gradient-to-r from-[#007BFF] to-[#008080] hover:from-[#0056b3] hover:to-[#006666] text-white shadow-2xl w-16 h-16 transition-all duration-300 hover:scale-110"
          >
            <MessageCircle size={24} />
            
            {/* Pulsing indicator */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse">
              <div className="absolute inset-0 w-4 h-4 bg-green-500 rounded-full animate-ping opacity-75"></div>
            </div>
          </Button>
        </motion.div>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-lg h-[700px] p-0 bg-[#F1F1F1] dark:bg-[#36454f] border-0 shadow-2xl">
        {/* Header */}
        <DialogHeader className="p-6 border-b !bg-[#36454f] dark:!bg-[#36454f] text-[#F1F1F1] rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F1F1F1]/20 flex items-center justify-center">
                <Bot size={20} />
              </div>
              <div>
                <DialogTitle className="font-montserrat font-semibold text-lg text-[#F1F1F1]">AI Assistant</DialogTitle>
                <p className="text-sm opacity-90 font-inter text-[#b9b2aa]">The Shah Media</p>
              </div>
            </div>
            <Button
              variant="ghost" 
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-[#F1F1F1] hover:bg-[#F1F1F1]/20 h-8 w-8 p-0"
            >
              <X size={16} />
            </Button>
          </div>
        </DialogHeader>

        {/* Messages */}
        <ScrollArea ref={scrollAreaRef} className="flex-1 p-4 h-96">
          <div className="space-y-4">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.sender === 'bot' && (
                  <div className="w-8 h-8 rounded-full bg-[#36454f] dark:bg-[#36454f] flex items-center justify-center flex-shrink-0">
                    <Bot size={16} className="text-[#F1F1F1]" />
                  </div>
                )}
                
                <div
                  className={`max-w-[85%] p-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-[#007BFF] text-[#F1F1F1] ml-8'
                      : 'bg-[#b9b2aa]/20 dark:bg-[#2a3138] text-[#111111] dark:text-[#F1F1F1] mr-8'
                  }`}
                >
                  <p className="font-inter text-sm whitespace-pre-line leading-relaxed">
                    {message.content}
                  </p>
                  <p className={`text-xs mt-1 opacity-70 ${
                    message.sender === 'user' ? 'text-[#F1F1F1]/70' : 'text-[#b9b2aa]'
                  }`}>
                    {message.timestamp.toLocaleTimeString('en-IN', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>

                {message.sender === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-[#36454f] dark:bg-[#F1F1F1] flex items-center justify-center flex-shrink-0">
                    <User size={16} className="text-[#F1F1F1] dark:text-[#36454f]" />
                  </div>
                )}
              </motion.div>
            ))}
            
            {isTyping && (
              <motion.div 
                className="flex gap-3 justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="w-8 h-8 rounded-full bg-[#36454f] dark:bg-[#36454f] flex items-center justify-center">
                  <Bot size={16} className="text-[#F1F1F1]" />
                </div>
                <div className="bg-[#b9b2aa]/20 dark:bg-[#2a3138] p-3 rounded-2xl">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-[#b9b2aa] rounded-full animate-bounce bounce-delay-0"></div>
                    <div className="w-2 h-2 bg-[#b9b2aa] rounded-full animate-bounce bounce-delay-100"></div>
                    <div className="w-2 h-2 bg-[#b9b2aa] rounded-full animate-bounce bounce-delay-200"></div>
                  </div>
                </div>
              </motion.div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        {/* Quick Actions */}
        {messages.length === 1 && (
          <div className="px-4 pb-2">
            <p className="text-xs text-[#b9b2aa] mb-2 font-inter">Quick actions:</p>
            <div className="flex flex-wrap gap-2">
              {quickActions.map((action) => (
                <Button
                  key={action}
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuickAction(action)}
                  className="text-xs font-inter hover:bg-[#007BFF] hover:text-[#F1F1F1] border-[#007BFF]/30 text-[#36454f] dark:text-[#F1F1F1]"
                >
                  {action}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-4 border-t bg-[#b9b2aa]/10 dark:bg-[#2a3138]">
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSendMessage()}
              className="flex-1 font-inter border-[#b9b2aa]/30 focus:border-[#007BFF] bg-[#F1F1F1] dark:bg-[#36454f] text-[#36454f] dark:text-[#F1F1F1]"
              disabled={isTyping}
            />
            <Button 
              onClick={toggleVoiceRecognition}
              disabled={isTyping}
              size="sm"
              variant="outline"
              className={`px-3 ${isListening ? 'bg-red-100 border-red-300 text-red-600' : 'hover:bg-[#b9b2aa]/20 border-[#b9b2aa]/30 text-[#36454f] dark:text-[#F1F1F1]'}`}
            >
              {isListening ? <MicOff size={16} /> : <Mic size={16} />}
            </Button>
            <Button 
              onClick={() => handleSendMessage()}
              disabled={!inputValue.trim() || isTyping}
              size="sm"
              className="bg-[#007BFF] hover:bg-[#0056b3] text-[#F1F1F1] px-4"
            >
              <Send size={16} />
            </Button>
          </div>
          <p className="text-xs text-[#b9b2aa] mt-2 text-center font-inter">
            <Sparkles className="inline h-3 w-3 mr-1" />
            Powered by The Shah Media AI
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
