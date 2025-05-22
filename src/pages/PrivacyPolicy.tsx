'use client';

import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <main className="bg-[#1a1a2e] min-h-screen">
      <div className="container mx-auto py-24 px-4 md:px-8">
        <motion.div
          className="max-w-4xl mx-auto bg-[#1a1a2e]/90 p-8 rounded-lg shadow-lg border border-mvrk-teal/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="/" 
            className="mb-6 px-6 py-2 rounded-md bg-gradient-to-r from-mvrk-teal to-mvrk-aqua-blue text-white font-semibold hover:opacity-90 transition-opacity flex items-center inline-block"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </a>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mvrk-teal to-mvrk-aqua-blue">
              Privacy Policy
            </span>
          </h1>

          <div className="prose prose-lg max-w-none prose-headings:text-mvrk-aqua-blue prose-headings:font-bold prose-p:text-white prose-strong:text-white prose-a:text-mvrk-aqua-blue hover:prose-a:text-mvrk-teal prose-a:transition-colors prose-li:text-white prose-ul:text-white">
            <p className="text-center mb-6 text-white">
              <strong className="text-mvrk-aqua-blue">Privacy Policy for MVRK</strong> (<a href="https://www.mvrk.ca" className="text-mvrk-aqua-blue hover:underline">https://www.mvrk.ca</a>)<br />
              Last Updated: May 18, 2025
            </p>

            <h2 className="mt-10">1. Introduction</h2>
            <p className="text-white">
              MVRK ("we," "us," or "our") is a Salesforce CRM implementation focused team dedicated to providing strategic guidance and transparent solutions to help businesses succeed with the platform. This Privacy Policy explains how we collect, use, and protect the personal data of visitors to our website, <a href="https://www.mvrk.ca" className="hover:underline">https://www.mvrk.ca</a>.
            </p>

            <h2 className="mt-8">2. What Personal Data We Collect</h2>
            <p className="text-white">We collect the following personal data from visitors to our website:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li className="text-white"><strong>Information Provided Through Contact Forms:</strong> When you fill out our contact form, we collect your name, email address, company name, and the content of your inquiry.</li>
              <li className="text-white"><strong>Information Provided in Emails:</strong> If you contact us via email at <a href="mailto:sayhi@mvrk.ca" className="hover:underline">sayhi@mvrk.ca</a>, we will collect the personal data you choose to include in your email, such as your email address, name, and the content of your message.</li>
            </ul>

            <h2 className="mt-8">3. How We Use Your Personal Data</h2>
            <p className="text-white">We use the personal data collected through our website solely for the purpose of providing our services and addressing your inquiries. Specifically:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li className="text-white">To understand the nature of your inquiry.</li>
              <li className="text-white">To identify you and your company.</li>
              <li className="text-white">To respond to your specific questions or requests regarding MVRK's services.</li>
            </ul>
            <p className="text-white">We do not use your personal data for marketing emails, newsletters, or sharing with mailing services.</p>

            <h2 className="mt-8">4. Sharing Your Personal Data</h2>
            <p className="text-white">
              We do not share the personal data collected through our website with any external third parties. The data from the contact form is stored in our Salesforce CRM system, and email communications are handled directly by our team via Gmail/Gdrive.
            </p>

            <h2 className="mt-8">5. Data Storage</h2>
            <p className="text-white">Personal data collected through our website is stored as follows:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li className="text-white"><strong>Contact Form Data:</strong> Stored in our Salesforce CRM system, which utilizes servers located in Canada (Central) on the CAN80 server. For information about Salesforce's data storage practices and security measures, please refer to Salesforce's Security and Compliance documentation.</li>
              <li className="text-white"><strong>Email Communications:</strong> Stored on Google's secure servers. For information about Google's data storage practices and security measures, please refer to the Google Workspace Privacy Policy.</li>
            </ul>

            <h2 className="mt-8">6. Data Retention</h2>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li className="text-white">Personal data collected through our contact form is retained indefinitely unless you explicitly request its deletion.</li>
              <li className="text-white">Personal data contained in email communications is retained in accordance with our standard email management practices, for as long as necessary to fulfill the purpose of the communication, provide ongoing support, and maintain business records.</li>
              <li className="text-white">Upon receiving a request for deletion, we will take reasonable steps to remove your personal data from our active systems, although some data may be retained in our backups for a period in accordance with our data backup and recovery policies.</li>
            </ul>

            <h2 className="mt-8">7. Your Rights</h2>
            <p className="text-white">
              You have certain rights regarding the personal data we collect about you through our website (<a href="https://www.mvrk.ca" className="hover:underline">https://www.mvrk.ca</a>). These rights may include the right to:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li className="text-white">Access the personal data we hold about you.</li>
              <li className="text-white">Rectify (correct) any inaccurate or incomplete personal data.</li>
              <li className="text-white">Erase your personal data under certain circumstances (also known as the "right to be forgotten").</li>
              <li className="text-white">Restrict the processing of your personal data in certain situations.</li>
              <li className="text-white">Object to the processing of your personal data.</li>
              <li className="text-white">Data Portability (in certain circumstances, to receive your personal data in a structured, commonly used, and machine-readable format and to transmit it to another controller).</li>
              <li className="text-white">Withdraw your consent at any time, where we are relying on consent to process your personal data (although, as stated, we do not currently rely on consent for marketing).</li>
              <li className="text-white">Lodge a complaint with a supervisory authority.</li>
            </ul>

            <h3 className="mt-4">Exercising Your Rights:</h3>
            <p className="text-white">
              To exercise any of these rights, please contact us directly at:<br />
              Email: <a href="mailto:sayhi@mvrk.ca" className="hover:underline">sayhi@mvrk.ca</a>
            </p>
            <p className="text-white">
              We will review your request and respond in accordance with applicable data protection laws. We may need to verify your identity before fulfilling your request.
            </p>

            <h3 className="mt-4">Opting Out of Communications:</h3>
            <p className="text-white">
              If you have contacted us through our form or via email and wish to limit further communication from us regarding your inquiry, please let us know by emailing us at <a href="mailto:sayhi@mvrk.ca" className="hover:underline">sayhi@mvrk.ca</a>.
            </p>

            <h2 className="mt-8">8. Cookies and Other Tracking Technologies</h2>
            <p className="text-white">
              Currently, our website (<a href="https://www.mvrk.ca" className="hover:underline">https://www.mvrk.ca</a>) does not use cookies or other tracking technologies to collect information about your browsing activity.
            </p>
            <p className="text-white">
              However, in the future, we may implement cookies or similar technologies. If we do, we will update this section of our Privacy Policy to provide you with clear information about their use and your choices.
            </p>

            <h2 className="mt-8">9. International Data Transfers</h2>
            <p className="text-white">
              MVRK is a Canadian corporation, and our intention is to primarily store and process the personal data collected through our website (<a href="https://www.mvrk.ca" className="hover:underline">https://www.mvrk.ca</a>) within Canada. The data submitted through our contact form is stored in our Salesforce CRM system, which utilizes servers located in Canada (Central).
            </p>
            <p className="text-white">
              For email communications, we utilize Google's services. By using our website and communicating with us via email, you acknowledge that your personal data may be processed in Canada and potentially other locations where Google maintains its servers. Google's data processing practices are outlined in their Google Workspace Privacy Policy.
            </p>

            <h2 className="mt-8">10. Children's Privacy</h2>
            <p className="text-white">
              Our website (<a href="https://www.mvrk.ca" className="hover:underline">https://www.mvrk.ca</a>) and our services are not directed at individuals under the age of 16. We do not knowingly collect personal data from children. If you are a parent or guardian and believe that your child has provided us with personal data without your consent, please contact us at <a href="mailto:sayhi@mvrk.ca" className="hover:underline">sayhi@mvrk.ca</a>, and we will take steps to remove that information from our systems.
            </p>

            <h2 className="mt-8">11. Changes to This Privacy Policy</h2>
            <p className="text-white">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on our website. You are advised to review this Privacy Policy periodically for any changes.
            </p>

            <h2 className="mt-8">12. Contact Us</h2>
            <p className="text-white">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:<br />
              Email: <a href="mailto:sayhi@mvrk.ca" className="hover:underline">sayhi@mvrk.ca</a>
            </p>

            <div className="border-t border-mvrk-teal/20 mt-12 pt-6 text-center">
              <p className="text-white">
                Privacy Policy<br />
                2020-2025 MVRK Inc.
              </p>
              
              <div className="mt-8">
                <a 
                  href="/"
                  className="px-6 py-2 rounded-md bg-gradient-to-r from-mvrk-teal to-mvrk-aqua-blue text-white font-semibold hover:opacity-90 transition-opacity inline-flex items-center mx-auto"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Home
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default PrivacyPolicy; 