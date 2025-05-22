'use client';

import React, { useState, useEffect } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Send, Mail, User, Building2, AtSign, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { event } from "@/lib/analytics";

const ContactForm = () => {
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  // Load reCAPTCHA script
  useEffect(() => {
    // Check if the script is already loaded
    if (!document.querySelector('script[src="https://www.google.com/recaptcha/api.js"]')) {
      const script = document.createElement('script');
      script.src = "https://www.google.com/recaptcha/api.js";
      script.async = true;
      script.defer = true;
      script.onload = () => setRecaptchaLoaded(true);
      document.head.appendChild(script);
    } else {
      setRecaptchaLoaded(true);
    }

    // Add timestamp function for reCAPTCHA
    const timestampFunction = `
      function timestamp() { 
        var response = document.getElementById("g-recaptcha-response"); 
        if (response == null || response.value.trim() == "") {
          var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
          elems["ts"] = JSON.stringify(new Date().getTime());
          document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); 
        } 
      } 
      setInterval(timestamp, 500);
    `;

    const timestampScript = document.createElement('script');
    timestampScript.innerHTML = timestampFunction;
    document.head.appendChild(timestampScript);

    return () => {
      document.head.removeChild(timestampScript);
    };
  }, []);

  // Handle form submission tracking
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Track the form submission event
    event({
      action: 'form_submit',
      category: 'contact',
      label: 'Contact Form Submission'
    });
    
    // Continue with normal form submission
    // Form will handle POST action normally
  };

  return (
    <section 
      id="contact" 
      className="relative py-24 overflow-hidden section-wrapper bg-[#1a1a2e]"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#1a1a2e]" />
      </div>
      
      <div className="container mx-auto px-6 z-10 relative">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center mb-8"
        >
          <span className="px-4 py-1 bg-mvrk-teal/10 text-mvrk-aqua-blue text-sm font-medium rounded-full">
            Get in Touch
          </span>
        </motion.div>
        
        {/* Section Title */}
        <motion.h2 
          className="text-4xl font-bold text-center text-white mb-8 md:text-5xl antialiased"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Ready to <span className="inline-block text-transparent bg-clip-text bg-[linear-gradient(90deg,#00A1E0_0%,#7FECFF_25%,#63D7E4_50%,#00A1E0_75%,#00A1E0_100%)] bg-[length:400%_100%] animate-shimmer font-extrabold">Get Started?</span>
        </motion.h2>
        
        {/* Supporting Paragraph */}
        <motion.div 
          className="max-w-[800px] mx-auto px-6 text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <p className="text-base text-gray-300 mt-4 leading-relaxed tracking-wide antialiased">
            Let us help you transform your Salesforce implementation or improve your existing platform. 
            Fill out the form below and our team of Salesforce experts will get back to you shortly.
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
              action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00Dau000004IrI5" 
              method="POST"
              onSubmit={handleFormSubmit}
              className="bg-[#1e1e36] backdrop-filter-none rounded-xl p-8 md:p-10 shadow-lg border border-white/10 hover:border-mvrk-teal/20 transition-all duration-300 w-full"
            >
              {/* Hidden fields for Salesforce Web-to-Lead */}
              <input type="hidden" name="captcha_settings" value='{"keyname":"MVRkW2LReCaptcha","fallback":"true","orgId":"00Dau000004IrI5","ts":""}' />
              <input type="hidden" name="oid" value="00Dau000004IrI5" />
              <input type="hidden" name="retURL" value="http://www.mvrk.ca" />
              <input type="hidden" name="lead_source" value="mvrk.ca W2L" />
              
              <div className="grid grid-cols-1 gap-6 md:gap-8">
                {/* First Name and Last Name - side by side on desktop, stacked on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="relative">
                    <label htmlFor="first_name" className="block text-white font-medium mb-2 text-sm antialiased">
                      First Name <span className="text-mvrk-aqua-blue">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-mvrk-aqua-blue/70" />
                      </div>
                      <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        maxLength={40}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-[#252542] border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-mvrk-teal/50 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200 antialiased"
                        placeholder="Your first name"
                      />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label htmlFor="last_name" className="block text-white font-medium mb-2 text-sm antialiased">
                      Last Name <span className="text-mvrk-aqua-blue">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-mvrk-aqua-blue/70" />
                      </div>
                      <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        maxLength={80}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-[#252542] border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-mvrk-teal/50 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200 antialiased"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Email field */}
                <div className="relative">
                  <label htmlFor="email" className="block text-white font-medium mb-2 text-sm antialiased">
                    Email Address <span className="text-mvrk-aqua-blue">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <AtSign className="h-5 w-5 text-mvrk-aqua-blue/70" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      maxLength={80}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-[#252542] border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-mvrk-teal/50 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200 antialiased"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>
                
                {/* Company field */}
                <div className="relative">
                  <label htmlFor="company" className="block text-white font-medium mb-2 text-sm antialiased">
                    Company <span className="text-mvrk-aqua-blue">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Building2 className="h-5 w-5 text-mvrk-aqua-blue/70" />
                    </div>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      maxLength={40}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-[#252542] border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-mvrk-teal/50 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200 antialiased"
                      placeholder="Your company name"
                    />
                  </div>
                </div>
                
                {/* Message field */}
                <div className="relative">
                  <label htmlFor="description" className="block text-white font-medium mb-2 text-sm antialiased">
                    Message <span className="text-mvrk-aqua-blue">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-mvrk-aqua-blue/70" />
                    </div>
                    <textarea
                      id="description"
                      name="description"
                      required
                      rows={5}
                      className="w-full pl-10 pr-4 py-3 bg-[#252542] border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-mvrk-teal/50 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200 resize-none antialiased"
                      placeholder="Tell us about your project or requirements..."
                    ></textarea>
                  </div>
                </div>
                
                {/* reCAPTCHA */}
                <div className="flex justify-center pt-2 pb-2">
                  <div className="g-recaptcha bg-white/5 p-2 rounded-lg border border-white/10" data-sitekey="6LeD7DYrAAAAAOa80g4fZ7mOSlh7iFJvuWzVUTdD"></div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-center">
                <motion.button
                  type="submit"
                  name="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-mvrk-teal to-mvrk-aqua-blue text-white font-bold rounded-lg shadow-lg flex items-center gap-2 hover:shadow-mvrk-teal/20 hover:shadow-xl transition-all duration-300 antialiased"
                >
                  <span>Submit Request</span>
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
              
              <p className="text-sm text-center mt-4 text-gray-300 antialiased">
                By submitting this form, you agree to our <a href="/privacy-policy" className="text-mvrk-aqua-blue hover:underline">Privacy Policy</a>.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
