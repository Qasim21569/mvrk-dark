'use client';

import React, { useState, useEffect } from 'react';
import { cn, throttle } from '@/lib/utils';
import { TubelightNavbar } from '@/components/ui/tubelight-navbar';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Throttled scroll handler for better performance
    const handleScroll = throttle(() => {
      setIsScrolled(window.scrollY > 10);
    }, 20); 
    
    // Set initial scroll state
    setIsScrolled(window.scrollY > 10);
    
    // Add scroll event listener with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Set loaded state after a small delay for animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#about' },
    { label: 'Implementing Salesforce?', href: '#implementing' },
    { label: 'Improving Salesforce?', href: '#improving' },
    { label: 'Testimonials', href: '#testimonials' }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
      {/* Fixed/Sticky Header */}
      <div className="fixed top-0 left-0 w-full z-[100] md:sticky">
        <header className={cn(
          "w-full transition-all duration-300",
          isScrolled 
            ? "bg-[#1a1a2e]/90 backdrop-blur-md shadow-lg py-3" 
            : "bg-[#1a1a2e]/50 py-4"
        )}>
        <div className="container mx-auto px-6">
            <div className="flex items-center justify-between h-14">
            {/* Logo */}
              <a href="#" className="z-10 flex items-center">
              <img
                src="/logo-color.png"
                alt="MVRK Logo"
                  className="h-8 w-auto object-contain md:h-10"
              />
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <TubelightNavbar items={navItems} />
            </div>

            {/* Contact button - desktop only */}
            <div className="hidden md:block">
              <a 
                href="#contact"
                className="px-5 py-2 bg-gradient-to-r from-mvrk-teal to-mvrk-aqua-blue text-white rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                Get in Touch
              </a>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-mvrk-teal p-2 hover:text-mvrk-coral transition-colors duration-300 bg-white/5 rounded-full backdrop-blur-sm"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      </div>

      {/* Hero Section */}
      <section 
        id="hero" 
        className="relative min-h-[calc(100vh-76px)] flex flex-col overflow-hidden md:pt-0"
      >
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          {/* Gradient overlay for better text visibility */}
          <div className="absolute inset-0 bg-[#1a1a2e]/95" />
        </div>

        {/* Main Content - Hero Section */}
        <div className="flex-1 flex items-center z-10 pt-4 pb-10 md:py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content - Text and CTA */}
            <motion.div 
              className="lg:col-span-7 flex flex-col items-start justify-center"
              initial="hidden"
              animate={isLoaded ? "show" : "hidden"}
              variants={container}
            >
              {/* Headline */}
              <motion.h1 
                variants={item}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Giving you <span className="inline-block text-transparent bg-clip-text bg-[linear-gradient(90deg,#617f95_0%,#A5C1D9_25%,#8EABC4_50%,#617f95_75%,#617f95_100%)] bg-[length:400%_100%] animate-shimmer font-extrabold">control</span> of your investment in the{" "}
                <span className="inline-block text-transparent bg-clip-text bg-[linear-gradient(90deg,#00A1E0_0%,#7FECFF_25%,#63D7E4_50%,#00A1E0_75%,#00A1E0_100%)] bg-[length:400%_100%] animate-shimmer font-extrabold">Salesforce</span>{" "}
                <span className="inline-block text-transparent bg-clip-text bg-[linear-gradient(90deg,#00A1E0_0%,#7FECFF_25%,#63D7E4_50%,#00A1E0_75%,#00A1E0_100%)] bg-[length:400%_100%] animate-shimmer font-extrabold">platform</span>
              </motion.h1>
              
              {/* Description */}
              <motion.div variants={item} className="mb-8">
                <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
                  As Mavericks, we see your business with fresh eyes, aren't afraid to 
                  question the status quo, and have the expertise to help you forge your 
                  own trail, delivering lasting value and Salesforce stability.
                </p>
              </motion.div>
              
              {/* CTA Buttons */}
              <motion.div variants={item} className="flex flex-wrap gap-4">
                <a 
                    href="#contact" 
                  className="px-8 py-3 bg-gradient-to-r from-mvrk-teal to-mvrk-aqua-blue text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
                >
                    <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
              
              {/* Scroll indicator */}
              <motion.div 
                variants={item}
                className="mt-16 hidden lg:flex items-center gap-2 text-gray-400"
              >
                <span className="text-sm">Scroll to explore</span>
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Right Content - Decorative Elements */}
              <div className="hidden lg:block relative flex-1 mt-12 lg:mt-0 w-full max-w-md mx-auto">
                <div className="relative w-full aspect-square">
                  
                  {/* Main decorative element */}
                  <div className="relative w-full h-full">
                    {/* No decorative elements */}
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Menu with frosted glass */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-72 bg-[#1a1a2e]/95 backdrop-blur-xl shadow-xl transform transition-transform duration-500 ease-in-out z-[101] border-l border-white/10",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col pt-20 px-6">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-mvrk-coral p-2 bg-white/5 rounded-full"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="py-3 text-white hover:text-mvrk-aqua-blue transition-colors duration-300 text-base font-medium border-b border-white/10 last:border-b-0 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="w-0 h-[1px] bg-mvrk-aqua-blue mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
              {item.label}
            </a>
          ))}
          
          {/* Mobile contact button */}
          <a 
            href="#contact"
            className="mt-6 px-5 py-3 bg-gradient-to-r from-mvrk-teal to-mvrk-aqua-blue text-white rounded-lg font-medium text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Overlay for Mobile Menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Hero;
