import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { cn, throttle } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
}

interface TubelightNavbarProps {
  items: NavItem[];
  className?: string;
}

export function TubelightNavbar({ items, className }: TubelightNavbarProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  // Implement scroll spy functionality with throttling for better performance
  useEffect(() => {
    const handleScroll = throttle(() => {
      // Calculate header height for offset
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      const scrollPosition = window.scrollY + headerHeight + 50; // Offset for better UX with header height
      
      // Get all section elements
      const sections = items
        .map(item => {
          // Handle the home section specially
          if (item.href === '#') {
            return document.querySelector('section'); // First section
          }
          return document.querySelector(item.href);
        })
        .filter(Boolean) as HTMLElement[];
      
      // Find the current section
      let currentIndex = 0;
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (
          scrollPosition >= sectionTop && 
          scrollPosition < sectionTop + sectionHeight
        ) {
          currentIndex = index;
        }
      });
      
      setActiveIndex(currentIndex);
    }, 100); // Throttled to improve performance
    
    // Add scroll event listener with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [items]);

  // Smooth scroll handler
  const handleClickNavLink = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string, index: number) => {
    if (href === '#') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        e.preventDefault();
        
        // Calculate the height of the sticky header container
        const headerHeight = document.querySelector('.sticky')?.clientHeight || 0;
        
        // Get the top position of the target element relative to the document
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        
        // Scroll to the element with the header height offset
        window.scrollTo({
          top: elementPosition - headerHeight,
          behavior: 'smooth'
        });
        
        // Update active index immediately for better UI feedback
        setActiveIndex(index);
      }
    }
  }, []);

  return (
    <nav className={cn("flex justify-center items-center", className)}>
      <div className="relative flex items-center gap-1 md:gap-2 lg:gap-3">
        {items.map((item, index) => (
          <motion.a
            key={item.label}
            href={item.href}
            className={cn(
              "relative px-3 py-2 text-sm font-medium tracking-wide transition-all duration-300 group",
              activeIndex === index 
                ? "text-white" 
                : "text-gray-300 hover:text-white"
            )}
            onClick={(e) => handleClickNavLink(e, item.href, index)}
            style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
          >
            {activeIndex === index && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-mvrk-teal/20 to-mvrk-aqua-blue/10 backdrop-blur-sm border border-white/10 rounded-md z-0"
                layoutId="navbar-active-background"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
                style={{ willChange: 'opacity, transform' }}
              />
            )}
            <span className="relative z-10">{item.label}</span>
            
            {/* Animated underline on hover and active */}
            <span 
              className={cn(
                "absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-mvrk-teal to-mvrk-aqua-blue transition-all duration-300 group-hover:w-full",
                activeIndex === index ? "w-full" : "w-0"
              )}
              style={{ willChange: 'width' }}
            />
          </motion.a>
        ))}
      </div>
    </nav>
  );
} 