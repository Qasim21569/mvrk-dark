'use client';

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { event } from "@/lib/analytics";

// Updated testimonials data with actual content
const testimonials = [
  {
    id: 1,
    quote: "Invaluable Expertise, Seamless Solutions",
    description: "We have had the pleasure of working with Vuk & MVRK for over five years. We rely on them for Salesforce implementation and broad integration expertise. MVRK has also been instrumental in optimizing our workflows to create seamless solutions. Their continued support of the Zapier integrations between our ERP system (Acumatica) with Salesforce, Amazon, and our various e-commerce platforms (BigCommerce and Shopify) has dramatically sped up our order-to-ship process, leading to greater efficiency and faster turnaround times for our customers. This has significantly improved our financial tracking and reporting. Their expertise has been invaluable to our business! The MVRK teams' technical skills, collaborative approach, and commitment to understanding our business needs have made them a trusted partner. We continue to embark on new ventures with MVRK and highly recommend them for their expertise in system integration and Salesforce consultation.",
    author: "Ian Merritt",
    position: "Financial Controller",
    company: "Armament Technology Inc",
    logo: "/testimonial logos/armament.png"
  },
  
  {
    id: 2,
    quote: "Game Changer",
    description: "Working with MVRK has been a game changer for us. Vuk didn't just come in and implement, he listened, asked the right questions and truly understood our business. There's no one I would recommend more for Salesforce implementation. He made a huge impact on our sales efforts.",
    author: "John Brocklebank",
    position: "VP, Business Development",
    company: "Scopes Facility Services",
    logo: "/testimonial logos/Scopes Logo.png"
  },
  
  {
    id: 3,
    quote: "Understands Our Business Inside and Out",
    description: "I've been working with Salesforce for over 15 years and have had the opportunity to collaborate with numerous consultants. I can confidently say that Vuk and the MVRK team stand out from the rest.\n\nMVRK's expertise is truly remarkable. What impresses me most is their dedication to understanding our business inside and out. They don't just implement solutions; they take the time to grasp our unique challenges and goals, ensuring that the Salesforce solutions they provide are perfectly tailored to our needs. This approach has made a significant difference in our operations.\n\nMVRK's commitment to client success is evident in every interaction. Their professionalism, combined with their deep knowledge of the Salesforce platform and Zapier integration, has been invaluable to Skedaddle. I highly recommend MVRK to any organization looking for a Salesforce partner who truly cares about their success.",
    author: "Barry Dowd",
    position: "Chief Operating Officer",
    company: "Skedaddle Humane Wildlife Control",
    logo: "/testimonial logos/Skedaddle_Logo-removebg-preview.png"
  },
  
  {
    id: 4,
    quote: "Three Implementations, Reliable Process",
    description: "I've had the pleasure of working with Vuk and the MVRK team for over 3 years across multiple CRM implementation. When we first began working together, I was the Director of Sales for a SaaS company with a disorganized and underperforming CRM system. From day one, MVRK demonstrated not only technical expertise but a deep understanding of business processes, strategy, and organizational needs.\n\nWhat sets MVRK apart is their approach: they take the time to thoroughly learn your business, understand your goals, and map out processes while simultaneously building out the architecture needed to support them. They blend strategic thinking with hands-on execution, and design systems to evolve with your business, not just serve your immediate needs.\n\nOver the years, I've partnered with MVRK on three separate full Salesforce implementations. Vuk's knowledge of Salesforce is extensive, and his connections within the ecosystem are both broad and deep. His team is responsive, professional, and committed to delivering value. Whenever challenges arise, Vuk brings creativity, clarity, and solutions. He's always available, always helpful, and genuinely invested in your success.\n\nIf you're looking for a partner to guide and build your CRM infrastructure with precision, creativity, and care, I cannot recommend MVRK and Vuk highly enough. The result will exceed your expectations—and the partnership will be one you value for years to come.",
    author: "Dave Haldi",
    position: "Founder & CEO",
    company: "Credit Gnomes",
    logo: "/testimonial logos/Credit Gnomes Logo.png"
  },
  
  {
    id: 5,
    quote: "Salesforce Mess to Functional System",
    description: "MVRK has helped me a ton. Before Vuk & MVRK got into our Salesforce, it was messy and had been touched by a few different developers, all with different approaches and code.\n\nWe decided to start over clean. They helped me secure a better licensing deal with Salesforce and built a new setup from the ground up. They documented everything so we know exactly what was done and why.\n\nThe new system they built includes a custom quoting tool, Job & PO tracking, QuickBooks Zapier integration, PDF generation, and customized reports based on the data we need. They also made it easier for me to explain to my team how to use it properly. We continue to evolve the system with their help.\n\nThey are easy to work with, quick to respond, and don't overcomplicate things. I really appreciate that their approach is straightforward and focused on what works. I recommend them if you need help making Salesforce actually work for your business. Especially if you're trying to avoid unnecessary subscriptions.",
    author: "Sam Forrest",
    position: "Project Manager",
    company: "Chosen Wood Window Maintenance",
    logo: "/testimonial logos/Chosen Wood Window Maintenance Logo.png"
  },
  
  {
    id: 6,
    quote: "Black Box to Real Salesforce Foundation",
    description: "Working with Vuk and the MVRK team has been incredibly valuable for us.\n\nOur Salesforce instance was originally set up by a consulting firm that felt like a total black box and we had no idea what was built or how to use it in a way that supported our day-to-day. Vuk came in, rolled up his sleeves, and helped us build a real foundation.\n\nOver the past 3+ years, he's helped us not only understand Salesforce, but use it - integrating with tools like Zapier, streamlining our systems, and helping us scale smarter. With Vuk's support, his growing team, and the resources they've shared along the way, we've been able to better connect across departments, collaborate with our broader community, and even win the CMX Best User Group Award - a huge milestone for us.\n\nHe's thoughtful, dependable, and great at bridging the gap between strategy and systems. I've learned so much working alongside him, and I'm always excited for what we'll build next.\n\nHighly Recommended!",
    author: "Tatiana Becerra",
    position: "Ambacebador Marketing Manager",
    company: "Yerba Madre",
    logo: "/testimonial logos/yerba madre logo.png"
  },
  
  {
    id: 7,
    quote: "Talented, Passionate, and Cost-Conscious",
    description: "Working with Vuk and the MVRK team has been an absolute game-changer for our organization. Over the last 3 years, they have helped us build out, tweak, and streamline work systems to seamlessly integrate them with Salesforce.\n\nPrior to working with MVRK, our organization was relying on a Salesforce implementation partner that was unable to bring our vision to life. MVRK is not only supremely talented and passionate about what they do and the results they achieve, but somehow, they are also incredibly efficient and mindful of costs. They are constantly finding ways to save my company money, even without being asked.\n\nThe MVRK team has been responsive to me at all hours and treats my projects like their own. It has been and continues to be a pleasure working with MVRK.",
    author: "James B. Drimmer, ESQ.",
    position: "Partner",
    company: "Lynch Carpenter, LLP",
    logo: "/testimonial logos/Lynch Carpenter Logo.png"
  },
  
  {
    id: 8,
    quote: "Meticulous Documentation, Smooth Process",
    description: "Working with Vuk and the MVRK team was an absolute game-changer for our firm. They took our overloaded Salesforce system and transformed it into a streamlined, high-performing platform. From the outset, Vuk and his team demonstrated exceptional expertise and a deep understanding of Salesforce. They meticulously documented every aspect of our system, ensuring that we not only had a functional solution but also a comprehensive guide for future reference. They were always responsive, proactive, and transparent, making the entire process smooth and collaborative.",
    author: "Ashley Anderson",
    position: "Advisor",
    company: "Sanctuary Wealth Management",
    logo: "/testimonial logos/Sanctuary Wealth Management Logo.png"
  }
];

const Testimonials = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleTestimonialInteraction = (interactionType: 'hover' | 'tap', testimonialId: number) => {
    event({
      action: interactionType === 'hover' ? 'testimonial_hover' : 'testimonial_tap',
      category: 'engagement',
      label: `Testimonial ${testimonialId}`
    });
  };

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX;
    setStartX(pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDragMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    
    const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX;
    const x = pageX - (carouselRef.current.offsetLeft || 0);
    const walk = (x - startX) * 1.5; // Reduced sensitivity multiplier
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section 
      id="testimonials" 
      className="relative py-24 overflow-hidden"
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
          className="flex items-center justify-center mb-8"
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
          className="text-gray-300 text-base md:text-lg mt-2 mb-8 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hear from our clients about their experiences working with us and the results they've achieved.
        </motion.p>

        {/* Drag hint */}
        <motion.div 
          className="flex items-center justify-center mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-2 px-4 py-1.5 bg-white/5 rounded-full text-gray-400 text-sm">
            <span>Drag to explore more testimonials</span>
          </div>
        </motion.div>

        {/* Testimonial Carousel - Horizontal Scrolling */}
        <div 
          className="relative overflow-hidden"
          style={{ 
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' 
          }}
        >
          <div
            ref={carouselRef}
            className={`
              flex gap-6 overflow-x-auto scrollbar-hide 
              ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}
            `}
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onMouseMove={handleDragMove}
            onTouchStart={handleDragStart}
            onTouchEnd={handleDragEnd}
            onTouchMove={handleDragMove}
            style={{
              scrollBehavior: isDragging ? 'auto' : 'smooth',
              scrollSnapType: isDragging ? 'none' : 'x proximity',
              userSelect: 'none'
            }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={`testimonial-${testimonial.id}`}
                testimonial={testimonial}
                index={index}
                onInteraction={handleTestimonialInteraction}
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
  onInteraction: (type: 'hover' | 'tap', id: number) => void;
}

const TestimonialCard = ({ testimonial, index, onInteraction }: TestimonialCardProps) => {
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);
  
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const { scrollTop, scrollHeight, clientHeight } = target;
    const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10; // 10px threshold
    setIsScrolledToBottom(isAtBottom);
  };

  // Get logo-specific styling based on company
  const getLogoStyle = (companyName: string) => {
    switch (companyName) {
      case 'Chosen Wood Window Maintenance':
      case 'Credit Gnomes':
      case 'Lynch Carpenter, LLP':
      case 'Yerba Madre':
      case 'Skedaddle Humane Wildlife Control':
      case 'Scopes Facility Services':
      case 'Sanctuary Wealth Management':
      case 'Armament Technology Inc':
        return {
          mixBlendMode: 'normal' as const,
          filter: 'brightness(0) invert(1) brightness(1.2)'
        };
      default:
        return {
          mixBlendMode: 'difference' as const,
          filter: 'invert(1) hue-rotate(180deg) brightness(1.5) contrast(1.2)'
        };
    }
  };

  return (
    <motion.div 
      className="flex-shrink-0 w-[350px] md:w-[400px] h-[680px] rounded-none border-none shadow-lg overflow-hidden flex flex-col justify-between bg-[#1a1a2e]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => onInteraction('hover', testimonial.id)}
      onClick={() => onInteraction('tap', testimonial.id)}
    >
      <div className="p-8">
        {/* Title */}
        <h3 className="text-2xl font-semibold text-white mb-6 h-[60px] flex items-center">
          {testimonial.quote}
        </h3>
        
        {/* Description - with scrollable container and visible scrollbar for long text */}
        <div className="relative h-[280px]">
          {/* Scrollable content area with always-visible scrollbar on mobile */}
          <div 
            className="h-full overflow-y-auto pr-2 custom-scrollbar show-scrollbar-mobile"
            onScroll={handleScroll}
          >
            <p className="text-base text-gray-200 leading-relaxed whitespace-pre-line pb-8">
            {testimonial.description}
          </p>
          </div>
          
          {/* Fade gradient at the bottom to indicate more content - only show if not scrolled to bottom */}
          {!isScrolledToBottom && (
            <div className="absolute left-0 right-2 bottom-0 h-16 bg-gradient-to-t from-[#1a1a2e] to-transparent pointer-events-none"></div>
          )}
          
          {/* Small scroll indicator for mobile - positioned better and hidden when scrolled to bottom */}
          {!isScrolledToBottom && (
            <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center md:hidden" style={{ bottom: '-18px' }}>
              <span className="text-mvrk-aqua-blue text-xs mb-1 bg-[#1a1a2e]/80 px-2 py-1 rounded">Scroll for more</span>
              <svg className="text-mvrk-aqua-blue animate-bounce w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 13l5 5 5-5"></path>
                <path d="M7 6l5 5 5-5"></path>
              </svg>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-auto p-8 pt-4">
        {/* Author info */}
        <div className="border-t border-white/10 pt-4">
          <p className="text-base font-semibold text-white">
            {testimonial.author}
          </p>
          <p className="text-sm text-gray-400">
            {testimonial.position}
          </p>
        </div>
        
        {/* Company logo and name */}
        <div className="mt-3 flex flex-col items-start">
                {/* Display company name */}
          <div className="text-xl font-bold text-white opacity-70 mb-3">
                  {testimonial.company}
                </div>
                
          {/* Display logo below company name with consistent size */}
          {testimonial.logo && (
            <div className="h-20 w-full flex justify-start">
                  <img 
                    src={encodeURI(testimonial.logo)}
                    alt={`${testimonial.company} logo`}
                    className="w-auto object-contain"
                    style={{ 
                      height: testimonial.company === 'Sanctuary Wealth Management' ? '120px' : 
                             ['Skedaddle Humane Wildlife Control', 'Credit Gnomes', 'Scopes Facility Services'].includes(testimonial.company) ? '90px' : '60px',
                      maxHeight: testimonial.company === 'Sanctuary Wealth Management' ? '120px' : 
                                ['Skedaddle Humane Wildlife Control', 'Credit Gnomes', 'Scopes Facility Services'].includes(testimonial.company) ? '90px' : '60px',
                      maxWidth: '200px',
                      ...getLogoStyle(testimonial.company)
                    }}
                    onError={(e) => {
                      console.error(`Failed to load logo: ${testimonial.logo}`);
                      // Hide image if it fails to load
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
              </div>
            )}
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
