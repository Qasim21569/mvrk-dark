'use client';

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Updated testimonials data with actual content
const testimonials = [
  {
    id: 1,
    quote: "Invaluable Expertise, Seamless Solutions",
    description: "We have had the pleasure of working with Vuk & MVRK for over five years. We rely on them for Salesforce implementation and broad integration expertise. MVRK has also been instrumental in optimizing our workflows to create seamless solutions. Their continued support of the Zapier integrations between our ERP system (Acumatica) with Salesforce, Amazon, and our various e-commerce platforms (BigCommerce and Shopify) has dramatically sped up our order-to-ship process, leading to greater efficiency and faster turnaround times for our customers. This has significantly improved our financial tracking and reporting. Their expertise has been invaluable to our business! The MVRK teams' technical skills, collaborative approach, and commitment to understanding our business needs have made them a trusted partner. We continue to embark on new ventures with MVRK and highly recommend them for their expertise in system integration and Salesforce consultation.",
    author: "Ian Merritt",
    position: "Financial Controller",
    company: "Armament Technology Inc",
    logo: "/testimonial logos/logo_armament_technologies.png"
  },
  {
    id: 2,
    quote: "Exceptional Service and Expertise",
    description: "Working with MVRK for our initial Salesforce configuration and implementation was a great experience. Their ability to connect with our team and understand our business processes was outstanding. Deliverables were consistently on time, with presentations showcasing how each configuration relates to our processes. We continue to rely on their expertise and professionalism surrounding the platform. I highly recommend MVRK for their exceptional people skills and dedication to client satisfaction.",
    author: "Patrick Leroux",
    position: "CTO",
    company: "Carmela Industries",
    logo: ""
  },
  {
    id: 3,
    quote: "Manufacturing experts",
    description: "I highly recommend MVRK for their deep expertise in Salesforce, streamlining manufacturing operations, optimizing financial applications and the Salesforce platform overall. We rely on them heavily as being the smartest people in the room when we are talking about Salesforce with our business stakeholders.",
    author: "Doug McIntyre",
    position: "Associate Director, Enterprise Applications",
    company: "Boston Dynamics",
    logo: ""
  }
];

// Duplicate the testimonials to ensure we have enough content for infinite scrolling
const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

const Testimonials = () => {
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollIntervalRef = useRef<number | null>(null);
  
  // Smooth infinite scrolling with consistent speed
  useEffect(() => {
    if (!carouselRef.current) return;
    
    const carousel = carouselRef.current;
    
    // Function to handle the scrolling
    const handleScroll = () => {
      if (isPaused) return;
      
      // Increment scroll position by a small amount
      carousel.scrollLeft += 0.5;
      
      // Reset when we've scrolled through the first set of testimonials
      const firstSetWidth = carousel.scrollWidth / 3;
      if (carousel.scrollLeft >= firstSetWidth) {
        // Jump back to the beginning of the second set (which is identical to the first)
        carousel.scrollLeft = 0;
      }
    };
    
    // Set up the interval for smooth scrolling
    if (!isPaused) {
      scrollIntervalRef.current = window.setInterval(handleScroll, 20);
    }
    
    // Clean up
    return () => {
      if (scrollIntervalRef.current !== null) {
        window.clearInterval(scrollIntervalRef.current);
      }
    };
  }, [isPaused]);
  
  // Handle window resize and visibility changes
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPaused(true);
      } else {
        setIsPaused(false);
      }
    };
    
    const handleResize = () => {
      if (carouselRef.current) {
        // Reset position on resize to prevent getting stuck
        carouselRef.current.scrollLeft = 0;
      }
    };
    
    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
  
  return (
    <section 
      id="testimonials" 
      className="relative py-24 overflow-hidden will-change-transform"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/80 via-[#1a1a2e] to-[#1a1a2e]/90" />
      </div>
      
      <div className="container mx-auto z-10 relative">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center mb-4"
        >
          <span className="px-4 py-1 bg-mvrk-teal/10 text-mvrk-aqua-blue text-sm font-medium rounded-full">
            Testimonials
          </span>
        </motion.div>
        
        {/* Section Title */}
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          What Our Clients <span className="text-transparent bg-clip-text bg-gradient-to-r from-mvrk-teal to-mvrk-aqua-blue">Say</span>
        </motion.h2>
        
        {/* Supporting Text */}
        <motion.p 
          className="text-gray-300 text-base md:text-lg mt-2 mb-16 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hear from our clients about their experiences working with us and the results they've achieved.
        </motion.p>

        {/* Testimonial Carousel - Horizontal Scrolling */}
        <div 
          className="relative overflow-hidden"
          style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' }}
        >
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide py-8"
            style={{ 
              WebkitOverflowScrolling: 'touch'
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {/* Extended set of cards for infinite scrolling */}
            {extendedTestimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={`testimonial-${testimonial.id}-${index}`}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: {
    id: number;
    quote: string;
    description: string;
    author: string;
    position: string;
    company: string;
    logo?: string;
  };
  index: number;
}

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  return (
    <motion.div 
      className="flex-shrink-0 w-[350px] md:w-[400px] h-[600px] rounded-none border-none shadow-lg overflow-hidden flex flex-col justify-between bg-[#1a1a2e]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="p-8">
        {/* Title */}
        <h3 className="text-2xl font-semibold text-white mb-6">
          {testimonial.quote}
        </h3>
        
        {/* Description - with scrollable container for long text */}
        <div className="h-[280px] overflow-y-auto scrollbar-hide pr-2">
          <p className="text-base text-gray-200 leading-relaxed">
            {testimonial.description}
          </p>
        </div>
      </div>
      
      <div className="mt-auto p-8 pt-0">
        {/* Author info */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-base font-semibold text-white">
            {testimonial.author}
          </p>
          <p className="text-sm text-gray-400">
            {testimonial.position}
          </p>
        </div>
        
        {/* Company logo and name */}
        <div className="mt-4 flex justify-start">
          <div className="h-16 flex items-center">
            {testimonial.logo ? (
              <>
                {/* Display company name */}
                <div className="text-xl font-bold text-white opacity-70 mr-4">
                  {testimonial.company}
                </div>
                
                {/* Display logo with previous styling */}
                <div className="relative h-12 w-auto">
                  <img 
                    src={testimonial.logo} 
                    alt={`${testimonial.company} logo`}
                    className="h-full w-auto object-contain"
                    style={{ 
                      mixBlendMode: 'difference',
                      filter: 'invert(1) hue-rotate(180deg) brightness(1.5) contrast(1.2)'
                    }}
                    onError={(e) => {
                      // Hide image if it fails to load
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              </>
            ) : (
              <div className="text-xl font-bold text-white opacity-70">
                {testimonial.company}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
