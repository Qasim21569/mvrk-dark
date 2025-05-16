'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn, throttle } from "@/lib/utils";
import { Wrench, Zap, Sparkles, ChevronRight } from "lucide-react";

const phases = [
  {
    letter: "S",
    title: "Stabilize",
    description: "For clients not effectively utilizing Salesforce nor generating ROI. We help stabilize your platform usage, ensuring you have a solid foundation for growth.",
    icon: <Wrench className="w-12 h-12 text-mvrk-aqua-blue" />
  },
  {
    letter: "E",
    title: "Enhance",
    description: "For clients using Salesforce but not leveraging it fully. We improve functionality and user adoption, unlocking the platform's full potential.",
    icon: <Zap className="w-12 h-12 text-mvrk-aqua-blue" />
  },
  {
    letter: "T",
    title: "Transform",
    description: "For clients needing to scale and integrate additional business systems. We guide strategic transformation and full execution of your vision.",
    icon: <Sparkles className="w-12 h-12 text-mvrk-aqua-blue" />
  }
];

const Improvement = () => {
  const [activeCard, setActiveCard] = useState(0);

  // Track scroll position for mobile cards with throttling for performance
  const handleScroll = throttle((e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.offsetWidth;
    const newActiveCard = Math.round(scrollPosition / cardWidth);
    
    if (newActiveCard !== activeCard) {
      setActiveCard(newActiveCard);
    }
  }, 100); // Only run at most once every 100ms

  return (
    <section 
      id="improving" 
      className="relative py-24 overflow-hidden section-wrapper"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/90 via-[#1a1a2e] to-[#1a1a2e]/80" />
      </div>
      
      <div className="container mx-auto px-6 z-10 relative">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center mb-4"
        >
          <span className="px-4 py-1 bg-mvrk-coral/10 text-mvrk-coral text-sm font-medium rounded-full">
            Improvement
          </span>
        </motion.div>
        
        {/* Section Title */}
        <motion.h2 
          className="text-4xl font-bold text-center text-white mb-4 md:text-5xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Improving <span className="text-transparent bg-clip-text bg-gradient-to-r from-mvrk-coral to-mvrk-plum">Salesforce?</span>
        </motion.h2>
        
        {/* Supporting Paragraph */}
        <motion.div 
          className="max-w-[800px] mx-auto px-6 text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <p className="text-base text-gray-300 mt-4 leading-relaxed tracking-wide">
            Already using Salesforce? Whether you need to Stabilize, Enhance, or Transform your platform, our 'SET' framework meets you where you are—providing expert analysis and tailored solutions to elevate your team's Salesforce expertise.
          </p>
        </motion.div>
        
        {/* Desktop Phase Cards Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
          {phases.map((phase, index) => (
            <PhaseCard 
              key={phase.title} 
              phase={phase}
              delay={0.6 + index * 0.2}
              isLast={index === phases.length - 1}
              isFirst={index === 0}
              index={index}
            />
          ))}
        </div>
        
        {/* Mobile Phase Cards Horizontal Scroll */}
        <div className="md:hidden w-full">
          <div 
            className="w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6 flex"
            onScroll={handleScroll}
            style={{ scrollBehavior: 'smooth' }}
          >
            {phases.map((phase, index) => (
              <div 
                key={phase.title} 
                className="snap-center w-full flex-shrink-0 px-4 first:pl-4 last:pr-4"
              >
                <PhaseCard 
                  phase={phase}
                  delay={0.6 + index * 0.2}
                  isLast={index === phases.length - 1}
                  isFirst={index === 0}
                  index={index}
                />
              </div>
            ))}
          </div>
          
          {/* Mobile scroll indicators */}
          <div className="flex justify-center items-center space-x-2 mt-6">
            {phases.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  activeCard === index ? "bg-mvrk-coral w-6" : "bg-mvrk-slate/30"
                )}
                onClick={() => {
                  const container = document.querySelector('#improving .snap-x');
                  if (container) {
                    container.scrollTo({
                      left: index * container.clientWidth,
                      behavior: 'smooth'
                    });
                  }
                }}
                aria-label={`View phase ${index + 1}: ${phases[index].title}`}
              />
            ))}
          </div>
        </div>

        {/* SET Framework Progress Indicator */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="inline-flex items-center justify-center px-6 py-3 bg-[#252542]/40 backdrop-blur-sm rounded-full border border-white/10">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-mvrk-coral/30 to-mvrk-plum/20 text-white font-bold">S</span>
            <ArrowIcon className="mx-3" />
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-mvrk-coral/30 to-mvrk-plum/20 text-white font-bold">E</span>
            <ArrowIcon className="mx-3" />
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-mvrk-coral/30 to-mvrk-plum/20 text-white font-bold">T</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface PhaseProps {
  phase: {
    letter: string;
    title: string;
    description: string;
    icon: React.ReactNode;
  };
  delay: number;
  isLast: boolean;
  isFirst: boolean;
  index: number;
}

const PhaseCard = ({ phase, delay, isLast, isFirst, index }: PhaseProps) => {
  return (
    <motion.div 
      className="relative pt-4 px-1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <div 
        className="bg-[#252542]/40 backdrop-blur-md rounded-xl p-6 h-full border border-white/5 shadow-lg hover:border-mvrk-coral/30 transition-all duration-300 focus-within:ring-2 focus-within:ring-mvrk-coral/50"
        tabIndex={0}
        aria-label={`${phase.title} phase: ${phase.description}`}
      >
        <div className="absolute -top-1 md:-top-3 left-2 md:-left-3 bg-gradient-to-r from-mvrk-coral to-mvrk-plum text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl shadow-md">
          {phase.letter}
        </div>
        <div className="pt-6">
          <div className="mb-4 flex items-center justify-center">
            <div className={cn(
              "w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br",
              index === 0 ? "from-mvrk-coral/20 to-mvrk-plum/30" : 
              index === 1 ? "from-mvrk-plum/20 to-mvrk-coral/30" : 
              "from-mvrk-coral/30 to-mvrk-plum/20"
            )}>
              {phase.icon}
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-mvrk-coral text-center">{phase.title}</h3>
          <p className="text-base text-gray-300 leading-relaxed tracking-wide">{phase.description}</p>
        </div>
      </div>
      
      {/* Desktop connector arrows */}
      {!isLast && (
        <div className="absolute top-1/2 -right-5 transform -translate-y-1/2 hidden md:block z-10">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: delay + 0.3 }}
            className="bg-mvrk-coral/20 rounded-full p-1"
          >
            <ChevronRight className="w-8 h-8 text-mvrk-coral" />
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

const ArrowIcon = ({ className }: { className?: string }) => (
  <ChevronRight className={cn("w-4 h-4 text-mvrk-coral", className)} />
);

export default Improvement;
