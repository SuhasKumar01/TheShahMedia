import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-[#F1F1F1] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-montserrat font-bold text-2xl mb-4">
                <span className="gradient-text">The Shah</span>
                <span className="text-white"> Media</span>
              </h3>
              <p className="font-inter text-[#888888] leading-relaxed">
                The Local Growth Engine for Shivamogga's Master Craftsmen. 
                Transforming traditional businesses with AI-enhanced digital systems.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <Link 
                href="https://linkedin.com/company/theshahmedia" 
                className="text-[#888888] hover:text-[#007BFF] transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
              
              <Link 
                href="https://instagram.com/theshahmedia" 
                className="text-[#888888] hover:text-[#007BFF] transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.331-1.291C3.787 14.498 3.325 13.12 3.325 11.5s.462-2.998 1.793-4.197C6.001 6.502 7.152 6.012 8.449 6.012s2.448.49 3.331 1.291c1.331 1.199 1.793 2.577 1.793 4.197s-.462 2.998-1.793 4.197c-.883.801-2.034 1.291-3.331 1.291zm7.518 0c-1.297 0-2.448-.49-3.331-1.291-1.331-1.199-1.793-2.577-1.793-4.197s.462-2.998 1.793-4.197c.883-.801 2.034-1.291 3.331-1.291s2.448.49 3.331 1.291c1.331 1.199 1.793 2.577 1.793 4.197s-.462 2.998-1.793 4.197c-.883.801-2.034 1.291-3.331 1.291z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-6 text-white">Our System</h4>
            <ul className="space-y-3">
              <li>
                <span className="font-inter text-[#888888] hover:text-[#007BFF] transition-colors duration-300 cursor-pointer">
                  Digital Foundation
                </span>
              </li>
              <li>
                <span className="font-inter text-[#888888] hover:text-[#007BFF] transition-colors duration-300 cursor-pointer">
                  Lead Generation Machine
                </span>
              </li>
              <li>
                <span className="font-inter text-[#888888] hover:text-[#007BFF] transition-colors duration-300 cursor-pointer">
                  AI Sales Assistant
                </span>
              </li>
              <li>
                <span className="font-inter text-[#888888] hover:text-[#007BFF] transition-colors duration-300 cursor-pointer">
                  Analytics & Optimization
                </span>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-6 text-white">Who We Serve</h4>
            <ul className="space-y-3">
              <li>
                <span className="font-inter text-[#888888] hover:text-[#007BFF] transition-colors duration-300 cursor-pointer">
                  Interior Designers
                </span>
              </li>
              <li>
                <span className="font-inter text-[#888888] hover:text-[#007BFF] transition-colors duration-300 cursor-pointer">
                  Architects
                </span>
              </li>
              <li>
                <span className="font-inter text-[#888888] hover:text-[#007BFF] transition-colors duration-300 cursor-pointer">
                  Real Estate Developers
                </span>
              </li>
              <li>
                <span className="font-inter text-[#888888] hover:text-[#007BFF] transition-colors duration-300 cursor-pointer">
                  Custom Contractors
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-6 text-white">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#008080] mt-1 flex-shrink-0" />
                <span className="font-inter text-[#888888] leading-relaxed">
                  Shivamogga, Karnataka<br />
                  India
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#008080] flex-shrink-0" />
                <Link 
                  href="tel:+919876543210" 
                  className="font-inter text-[#888888] hover:text-[#007BFF] transition-colors duration-300"
                >
                  +91 98765 43210
                </Link>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#008080] flex-shrink-0" />
                <Link 
                  href="mailto:hello@theshahmedia.com" 
                  className="font-inter text-[#888888] hover:text-[#007BFF] transition-colors duration-300"
                >
                  hello@theshahmedia.com
                </Link>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-[#008080] mt-1 flex-shrink-0" />
                <span className="font-inter text-[#888888] leading-relaxed">
                  Mon - Fri: 9:00 AM - 6:00 PM<br />
                  Sat: 10:00 AM - 4:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#333333] pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-inter text-[#888888] text-sm">
              © {currentYear} The Shah Media. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6">
              <Link 
                href="/privacy" 
                className="font-inter text-[#888888] hover:text-[#007BFF] transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="font-inter text-[#888888] hover:text-[#007BFF] transition-colors duration-300 text-sm"
              >
                Terms of Service
              </Link>
              <div className="flex items-center gap-2 text-[#888888] text-sm">
                <span className="font-inter">Made in</span>
                <span className="text-[#008080]">♥</span>
                <span className="font-inter">Shivamogga</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}