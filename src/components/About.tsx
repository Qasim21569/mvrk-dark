import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn, throttle } from "@/lib/utils";
import { Lightbulb, Search, Users, ArrowRight } from "lucide-react";

const About = () => {
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
  }, 100);

  return (
    <section 
      id="about" 
      className="relative py-12 md:py-16 lg:py-20 overflow-hidden section-wrapper"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/90 via-[#1a1a2e] to-[#1a1a2e]/80" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center mb-3 md:mb-8"
        >
          <span className="px-4 py-1 bg-mvrk-teal/10 text-mvrk-aqua-blue text-sm font-medium rounded-full">
            About Us
          </span>
        </motion.div>
        
        {/* Headline */}
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Who is <span className="text-transparent bg-clip-text bg-gradient-to-r from-mvrk-teal to-mvrk-aqua-blue">MVRK</span>?
        </motion.h2>
        
        {/* Intro Paragraph */}
        <motion.div 
          className="max-w-[800px] mx-auto mb-10 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <p className="text-base text-gray-300 text-center leading-relaxed tracking-wide">
            Founded in 2020 by Vuk Stajic, MVRK was born out of a frustration with seeing clients fail to implement Salesforce effectively. We exist to ensure our clients achieve their desired outcomes through strategic guidance, transparent practices, and a collaborative partnership that drives lasting success.
          </p>
        </motion.div>
        
        {/* Subheading */}
        <motion.div 
          className="flex items-center justify-center mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-mvrk-teal/50"></div>
          <h3 className="text-xl font-semibold text-mvrk-aqua-blue mx-4 text-center md:text-2xl">
            Our Values
          </h3>
          <div className="h-[1px] w-12 bg-gradient-to-r from-mvrk-teal/50 to-transparent"></div>
        </motion.div>
        
        {/* Desktop Values Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
          {values.map((value, index) => (
            <ValueCard 
              key={value.title} 
              title={value.title} 
              description={value.description} 
              delay={0.6 + index * 0.2}
              index={index}
              icon={value.icon}
            />
          ))}
        </div>
        
        {/* Mobile Values Horizontal Scroll - One card at a time */}
        <div className="md:hidden w-full">
          <div 
            className="w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6 flex"
            onScroll={handleScroll}
            style={{ scrollBehavior: 'smooth' }}
          >
            {values.map((value, index) => (
              <div 
                key={value.title} 
                className="snap-center w-full flex-shrink-0 px-4 first:pl-4 last:pr-4"
              >
                <ValueCard 
                  title={value.title} 
                  description={value.description} 
                  delay={0.6 + index * 0.2}
                  index={index}
                  icon={value.icon}
                />
              </div>
            ))}
          </div>

          {/* Scroll indicators */}
          <div className="flex justify-center items-center space-x-2 mt-6">
            {values.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  activeCard === index ? "bg-mvrk-teal w-6" : "bg-mvrk-slate/30"
                )}
                onClick={() => {
                  const container = document.querySelector('.snap-x');
                  if (container) {
                    container.scrollTo({
                      left: index * container.clientWidth,
                      behavior: 'smooth'
                    });
                  }
                }}
                aria-label={`View value ${index + 1}: ${values[index].title}`}
              />
            ))}
          </div>
        </div>
        
        {/* Learn more button */}
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <a 
            href="#implementing" 
            className="group flex items-center px-6 py-3 bg-mvrk-teal/10 hover:bg-mvrk-teal/20 text-mvrk-aqua-blue rounded-full transition-all duration-300"
          >
            <span className="mr-2">Discover Our Services</span>
            <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

interface ValueCardProps {
  title: string;
  description: string;
  delay: number;
  index: number;
  icon: React.ReactNode;
}

const ValueCard = ({ title, description, delay, index, icon }: ValueCardProps) => {
  return (
    <motion.div 
      className="bg-[#252542]/40 backdrop-blur-md rounded-xl border border-white/5 shadow-lg p-6 h-full hover:border-mvrk-teal/30 transition-all duration-300 focus-within:ring-2 focus-within:ring-mvrk-teal/50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      tabIndex={0}
      aria-label={`Value: ${title} - ${description}`}
    >
      <div className="mb-4 flex items-center justify-center">
        <div className={cn(
          "w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br",
          index === 0 ? "from-mvrk-teal/20 to-mvrk-soft-cyan/30" : 
          index === 1 ? "from-mvrk-aqua-blue/20 to-mvrk-teal/30" : 
          "from-mvrk-aqua-blue/20 to-mvrk-teal/30"
        )}>
          {icon}
        </div>
      </div>
      <h4 className="text-lg font-semibold mb-4 text-mvrk-aqua-blue md:text-xl text-center">{title}</h4>
      <p className="text-base text-gray-300 leading-relaxed tracking-wide text-center">{description}</p>
    </motion.div>
  );
};

const values = [
  {
    title: "Strategy > Technology",
    description: "We believe that technology should serve your business strategy, not the other way around. We focus on understanding your unique needs and objectives before recommending technical solutions, ensuring that every implementation drives meaningful business outcomes.",
    icon: <Lightbulb className="w-8 h-8 text-mvrk-aqua-blue" />
  },
  {
    title: "Radical Transparency",
    description: "We communicate openly and honestly at every step of the process. You'll always know where your project stands, what challenges we're facing, and how we plan to address them. We believe that transparency builds trust and leads to better results.",
    icon: <Search className="w-8 h-8 text-mvrk-aqua-blue" />
  },
  {
    title: "Win As A Team",
    description: "Success is a collaborative effort. We work closely with your team, sharing knowledge and skills to ensure that everyone is aligned and empowered. When your team succeeds, we succeed, and this partnership mentality drives everything we do.",
    icon: <Users className="w-8 h-8 text-mvrk-aqua-blue" />
  }
];

export default About;
