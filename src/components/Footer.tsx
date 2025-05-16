import React from "react";
import { cn } from "@/lib/utils";
import { Mail, MapPin, Linkedin, Youtube } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#implementing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' }
  ];
  
  const serviceItems = [
    { label: 'Implementing Salesforce', href: '#implementing' },
    { label: 'Improving Salesforce', href: '#improving' },
    { label: 'Strategy Consulting', href: '#implementing' },
    { label: 'Support & Maintenance', href: '#improving' },
  ];
  
  return (
    <footer className="relative z-10 py-16">
      {/* Footer background with solid color */}
      <div className="absolute inset-0 bg-[#151525] z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Footer top with logo and pattern */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 pb-12 border-b border-white/10">
          <div className="mb-8 md:mb-0">
            <img src="/logo-color.png" alt="MVRK Logo" className="h-12 w-auto" />
          </div>
          
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/company/mvrk-inc/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-mvrk-teal/20 flex items-center justify-center text-gray-300 hover:text-mvrk-aqua-blue transition-all duration-300">
              <Linkedin size={18} />
            </a>
            <a href="https://www.youtube.com/@mvrkinc" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-mvrk-teal/20 flex items-center justify-center text-gray-300 hover:text-mvrk-aqua-blue transition-all duration-300">
              <Youtube size={18} />
            </a>
          </div>
        </div>
        
        {/* Salesforce Partner Section */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-6 pb-4 border-b border-white/10">
          <div className="flex items-center gap-0">
            <p className="text-white text-lg font-semibold">Partnered with</p>
            <div className="overflow-hidden -ml-9">
              <img 
                src="/Salesforce_Logo-removebg-preview.png" 
                alt="Salesforce Partner" 
                className="h-28 w-auto" 
              />
            </div>
          </div>
        </div>
      
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Column */}
          <div>
            <div className="mb-5">
              <h2 className="text-2xl font-bold text-white mb-4">MVRK Inc.</h2>
              <p className="text-gray-300 leading-relaxed">
                Driving clarity, stability, and success with Salesforce. Your trusted partner for implementation, improvement, and transformation.
              </p>
            </div>
          </div>
          
          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-mvrk-teal/30 inline-block">Quick Links</h3>
            <nav className="flex flex-col space-y-2 mt-4">
              {navItems.map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-mvrk-aqua-blue transition-colors py-1 flex items-center group"
                >
                  <span className="w-0 h-[1px] bg-mvrk-aqua-blue mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          
          {/* Services Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-mvrk-teal/30 inline-block">Our Services</h3>
            <nav className="flex flex-col space-y-2 mt-4">
              {serviceItems.map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-mvrk-aqua-blue transition-colors py-1 flex items-center group"
                >
                  <span className="w-0 h-[1px] bg-mvrk-aqua-blue mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
            
          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-mvrk-teal/30 inline-block">Contact Us</h3>
            <div className="space-y-4 mt-4">
              <div className="flex items-start group">
                <MapPin className="text-mvrk-aqua-blue mr-3 mt-1 flex-shrink-0 group-hover:text-mvrk-coral transition-colors duration-300" size={18} />
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">7 Babineau St Suite 206, Charlottetown, PE, Canada C0A 1H4</p>
              </div>
              <div className="flex items-center group">
                <Mail className="text-mvrk-aqua-blue mr-3 flex-shrink-0 group-hover:text-mvrk-coral transition-colors duration-300" size={18} />
                <a href="mailto:sayhi@mvrk.ca" className="text-gray-300 hover:text-white transition-colors duration-300">
                  sayhi@mvrk.ca
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar - Copyright & Credits */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} MVRK Consulting. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-mvrk-aqua-blue transition-colors text-sm">
              Privacy Policy
            </a>
            <span className="text-gray-400 text-sm">
              Built by Qasim Kharodia
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
