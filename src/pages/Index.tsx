import Hero from "@/components/Hero";
import About from "@/components/About";
import Implementation from "@/components/Implementation";
import Improvement from "@/components/Improvement";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Index = () => {
  // Add smooth scrolling behavior
  useEffect(() => {
    // Apply smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Optimize performance by reducing repaints
    document.body.style.willChange = 'transform';
    document.body.style.backfaceVisibility = 'hidden';
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
      document.body.style.willChange = '';
      document.body.style.backfaceVisibility = '';
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative bg-[#1a1a2e]">
      {/* Globally blurred overlay with reduced blur for better performance */}
      <div 
        className="fixed inset-0 z-0 bg-[#1a1a2e]/70"
        style={{
          willChange: "transform",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden"
        }}
      />

      {/* Main content */}
      <main className="flex-grow relative z-10">
        <Hero />
        <About />
        <Implementation />
        <Improvement />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
