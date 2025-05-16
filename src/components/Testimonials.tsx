'use client';

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

// Dummy testimonials data
const testimonials = [
  {
    id: 1,
    quote: "MVRK's strategic approach transformed our Salesforce implementation. Their SET framework helped us stabilize our platform and unlock new capabilities we didn't know were possible.",
    author: "Sarah Chen",
    position: "CTO",
    company: "TechGrowth Solutions",
    logo: "TGS"
  },
  {
    id: 2,
    quote: "Working with MVRK gave us the clarity and confidence we needed. Their process-driven methodology ensured our implementation was smooth, on-budget, and delivered real value.",
    author: "Michael Rodriguez",
    position: "VP of Operations",
    company: "Global Retail Dynamics",
    logo: "GRD"
  },
  {
    id: 3,
    quote: "The team at MVRK doesn't just implement Salesforce—they transform how your business operates. Their expertise and strategic guidance led to a 40% increase in our team's efficiency.",
    author: "Emily Thompson",
    position: "Director of Digital Strategy",
    company: "InnovateFirst Financial",
    logo: "IFF"
  }
];

const Testimonials = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const paginate = (newDirection: number) => {
    const newPage = page + newDirection;
    if (newPage < 0) {
      setPage([testimonials.length - 1, newDirection]);
    } else if (newPage >= testimonials.length) {
      setPage([0, newDirection]);
    } else {
      setPage([newPage, newDirection]);
    }

    // Reset auto-play after a shorter timeout
    if (!isAutoPlaying) {
      setTimeout(() => setIsAutoPlaying(true), 5000);
    }
  };

  // Auto-advance the carousel with a shorter interval
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        paginate(1);
      }, 6000);
    }
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, page]);

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <section 
      id="testimonials" 
      className="relative py-24 overflow-hidden will-change-transform"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/80 via-[#1a1a2e] to-[#1a1a2e]/90" />
      </div>
      
      <div className="container mx-auto px-6 z-10 relative">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center mb-4"
        >
          <span className="px-4 py-1 bg-white/5 text-white text-sm font-medium rounded-full">
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
          Curious about the <span className="text-transparent bg-clip-text bg-gradient-to-r from-mvrk-teal to-mvrk-aqua-blue">MVRK</span> difference?
        </motion.h2>
        
        {/* Supporting Text */}
        <motion.p 
          className="text-gray-300 text-base md:text-lg mt-2 mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hear directly from our satisfied clients.
        </motion.p>

        {/* Testimonial Carousel */}
        <div className="relative max-w-[900px] mx-auto px-4">
          <AnimatePresence
            initial={false}
            custom={direction}
            mode="wait"
          >
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.08 },
                scale: { duration: 0.15 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="w-full"
            >
              <motion.div 
                className="bg-[#252542]/40 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white/5 transition-all"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  {/* Logo Section */}
                  <motion.div 
                    className="w-[80px] h-[80px] bg-gradient-to-br from-mvrk-teal/30 to-mvrk-aqua-blue/20 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-md border border-white/10"
                    initial={{ rotate: -10, scale: 0.9 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  >
                    {testimonials[page].logo}
                  </motion.div>
                  
                  {/* Quote Section */}
                  <motion.div 
                    className="flex-1"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <blockquote className="text-lg md:text-xl leading-relaxed text-gray-200 italic">
                      "{testimonials[page].quote}"
                    </blockquote>
                    <div className="mt-4 text-sm md:text-base text-mvrk-aqua-blue">
                      <span className="font-semibold">— {testimonials[page].author}</span>
                      <span className="text-gray-400 italic">, {testimonials[page].position}</span>
                      <br />
                      <span className="text-gray-400">{testimonials[page].company}</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows - Fixed positioning parent container */}
          <div 
            className="absolute left-0 top-0 w-full h-full"
            style={{ pointerEvents: 'none' }}
          >
            {/* Previous Button - Fixed Size and Position */}
            <div 
              style={{ 
                position: 'absolute',
                left: '-20px',
                top: '50%',
                width: '40px',
                height: '40px',
                transform: 'translateY(-50%)',
                zIndex: 20,
                pointerEvents: 'auto'
              }}
            >
              <button
                onClick={() => {
                  paginate(-1);
                  setIsAutoPlaying(false);
                }}
                className="w-full h-full bg-[#252542]/80 hover:bg-mvrk-teal/30 text-white rounded-full flex items-center justify-center shadow-lg border border-white/10 transition-colors duration-200"
                aria-label="Previous testimonial"
                style={{ willChange: 'auto', transform: 'none' }}
              >
                <ChevronRight className="w-5 h-5 transform rotate-180" style={{ flexShrink: 0 }} />
              </button>
            </div>
            
            {/* Next Button - Fixed Size and Position */}
            <div 
              style={{ 
                position: 'absolute',
                right: '-20px',
                top: '50%',
                width: '40px',
                height: '40px',
                transform: 'translateY(-50%)',
                zIndex: 20,
                pointerEvents: 'auto'
              }}
            >
              <button
                onClick={() => {
                  paginate(1);
                  setIsAutoPlaying(false);
                }}
                className="w-full h-full bg-[#252542]/80 hover:bg-mvrk-teal/30 text-white rounded-full flex items-center justify-center shadow-lg border border-white/10 transition-colors duration-200"
                aria-label="Next testimonial"
                style={{ willChange: 'auto', transform: 'none' }}
              >
                <ChevronRight className="w-5 h-5" style={{ flexShrink: 0 }} />
              </button>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center items-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                page === index ? "bg-mvrk-aqua-blue w-6" : "bg-white/20"
              )}
              onClick={() => {
                const direction = index > page ? 1 : -1;
                setPage([index, direction]);
                setIsAutoPlaying(false);
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ArrowIcon = ({ className }: { className?: string }) => (
  <ChevronRight className={cn("w-6 h-6", className)} />
);

export default Testimonials;
