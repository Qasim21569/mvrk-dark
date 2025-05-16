'use client';

import React, { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This is a placeholder for the actual Salesforce endpoint integration
    console.log("Form submitted:", formData);
    
    // Show success message
    toast.success("Thank you for your message! We'll be in touch soon.");
    
    // Reset form
    setFormData({
      name: "",
      company: "",
      email: "",
      message: "",
    });
  };

  return (
    <section 
      id="contact" 
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
          <span className="px-4 py-1 bg-mvrk-teal/10 text-mvrk-aqua-blue text-sm font-medium rounded-full">
            Get in Touch
          </span>
        </motion.div>
        
        {/* Section Title */}
        <motion.h2 
          className="text-4xl font-bold text-center text-white mb-4 md:text-5xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-mvrk-teal to-mvrk-aqua-blue">Get Started?</span>
        </motion.h2>
        
        {/* Supporting Paragraph */}
        <motion.div 
          className="max-w-[800px] mx-auto px-6 text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <p className="text-base text-gray-300 mt-4 leading-relaxed tracking-wide">
            Reach out to discuss how we can help transform your Salesforce implementation or improve your existing platform.
          </p>
        </motion.div>
        
        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative flex justify-center items-center">
            {/* Floating mail icon */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -top-14 z-10"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-mvrk-teal/30 to-mvrk-aqua-blue/20 flex items-center justify-center shadow-xl border border-white/10">
                <Mail className="w-12 h-12 text-mvrk-aqua-blue" />
              </div>
            </motion.div>
            
            <form 
              onSubmit={handleSubmit} 
              className="bg-[#252542]/40 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white/5 hover:border-mvrk-teal/20 transition-all duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1e1e36] border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-mvrk-teal/50 focus:border-transparent text-white placeholder-gray-500 transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-gray-300 font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#1e1e36] border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-mvrk-teal/50 focus:border-transparent text-white placeholder-gray-500 transition-all duration-200"
                    placeholder="Your company"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1e1e36] border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-mvrk-teal/50 focus:border-transparent text-white placeholder-gray-500 transition-all duration-200"
                    placeholder="your.email@company.com"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#1e1e36] border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-mvrk-teal/50 focus:border-transparent text-white placeholder-gray-500 transition-all duration-200 resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
              </div>
              
              <div className="mt-8 flex justify-center">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-mvrk-teal to-mvrk-aqua-blue text-white rounded-lg shadow-lg flex items-center gap-2 hover:shadow-mvrk-teal/20 hover:shadow-xl transition-all duration-300"
                >
                  <span>Submit</span>
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
              
              <p className="text-sm text-center mt-4 text-gray-400">
                By submitting this form, you agree to our Privacy Policy.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
