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
  
  // WhatsApp message URL with a pre-filled message
  const whatsappUrl = "https://wa.me/917977801024?text=Hi%20Qasim,%20I%20saw%20the%20MVRK%20website%20you%20created%20and%20I'm%20interested%20in%20discussing%20web%20development%20services%20for%20my%20project.";

  return (
    <footer className="relative z-10 py-16">
      {/* Footer background with solid color */}
      <div className="absolute inset-0 bg-[#151525] z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Column */}
          <div>
            <div className="mb-5">
              <div className="mb-4">
                <img src="/logo-color.png" alt="MVRK Logo" className="h-10 w-auto" />
              </div>
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
        
        {/* Bottom Bar - Copyright & Credits with Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/10">
          <p className="text-gray-400 text-sm">
            © {currentYear} MVRK Consulting. All rights reserved.
          </p>
          
          {/* Social Icons moved here */}
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="https://www.linkedin.com/company/mvrk-inc/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 hover:bg-mvrk-teal/20 flex items-center justify-center text-gray-300 hover:text-mvrk-aqua-blue transition-all duration-300">
              <Linkedin size={16} />
            </a>
            <a href="https://www.youtube.com/@mvrkinc" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 hover:bg-mvrk-teal/20 flex items-center justify-center text-gray-300 hover:text-mvrk-aqua-blue transition-all duration-300">
              <Youtube size={16} />
            </a>
            <a href="https://zapier.com/experts/mvrk" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 hover:bg-mvrk-teal/20 flex items-center justify-center text-gray-300 hover:text-mvrk-aqua-blue transition-all duration-300">
              <img src="/zapier_icon-removebg-preview.png" alt="Zapier" className="w-[14px] h-[14px] object-contain" />
            </a>
          </div>
          
          <div className="flex space-x-6">
            <a href="/privacy-policy" className="text-gray-400 hover:text-mvrk-aqua-blue transition-colors text-sm">
              Privacy Policy
            </a>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-mvrk-aqua-blue transition-colors text-sm flex items-center group"
            >
              <span className="group-hover:underline">Built by Qasim Kharodia</span>
              <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
