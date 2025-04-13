import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'   
import { motion } from 'framer-motion'
import ScrollToTop from '../components/ScrollToTop'
import useScrollToTop from '../hooks/useScrollToTop'

const Privacy = () => {
  useScrollToTop();
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Privacy Policy</h1>
            <p className="text-gray-600">Effective Date: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).toUpperCase()}</p>
          </div>

          <div className="space-y-8">
            {/* Introduction */}
            <section className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4 text-primary">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                AMERICAN ROCK FACILITY MAINTENACE ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose your personal information when you interact with our website, products, or services.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4 text-primary">2. Information We Collect</h2>
              <p className="text-gray-700 mb-4">We may collect the following types of personal information from you:</p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
                <li><span className="font-semibold">Contact Information:</span> Your name, email address, phone number, and mailing address.</li>
                <li><span className="font-semibold">Usage Data:</span> Information about how you interact with our website, such as your IP address, browser type, and pages visited.</li>
                <li><span className="font-semibold">Other Information:</span> Any additional information you voluntarily provide, such as feedback or survey responses.</li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4 text-primary">3. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We may use your personal information for the following purposes:</p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
                <li><span className="font-semibold">To provide and improve our services:</span> We use your information to deliver the services you request, respond to inquiries, and personalize your experience.</li>
                <li><span className="font-semibold">To communicate with you:</span> We may use your contact information to send you important updates, news, and marketing communications related to our products and services.</li>
                <li><span className="font-semibold">For analytics and research:</span> We analyze your usage data to understand how our website is used and to improve our services.</li>
              </ul>
            </section>

            {/* Sharing Your Information */}
            <section className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4 text-primary">4. Sharing Your Information</h2>
              <p className="text-gray-700 mb-4">We do not share nor sell your personal information with third parties for marketing purposes. However, we may share your information with:</p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
                <li><span className="font-semibold">Service providers:</span> We may engage third-party service providers to assist us with certain aspects of our business, such as website hosting, email delivery, and data analysis.</li>
                <li><span className="font-semibold">Legal requirements:</span> We may disclose your personal information if required to do so by law, regulation, or in response to a valid legal request.</li>
              </ul>
              <p className="text-gray-700 mt-4">All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.</p>
            </section>

            {/* Data Security */}
            <section className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4 text-primary">5. Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the internet or electronic storage is completely secure. Please be aware that there may be risks involved in transmitting your personal information electronically.
              </p>
            </section>

            {/* Your Rights */}
            <section className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4 text-primary">6. Your Rights</h2>
              <p className="text-gray-700 mb-4">You have certain rights regarding your personal information, including:</p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
                <li><span className="font-semibold">Access:</span> You may request access to the personal information we hold about you.</li>
                <li><span className="font-semibold">Rectification:</span> You may request that we correct any inaccurate or incomplete information.</li>
                <li><span className="font-semibold">Erasure:</span> You may request that we delete your personal information under certain circumstances.</li>
                <li><span className="font-semibold">Restriction of processing:</span> You may request that we restrict the processing of your personal information.</li>
                <li><span className="font-semibold">Data portability:</span> You may request that we transfer your personal information to another organization.</li>
                <li><span className="font-semibold">Object:</span> You may object to the processing of your personal information for certain purposes.</li>
              </ul>
            </section>

            {/* Changes to Policy */}
            <section className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4 text-primary">7. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be effective upon posting on our website. We encourage you to review this Privacy Policy periodically for any updates.
              </p>
            </section>

            {/* Contact Us */}
            <section className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4 text-primary">8. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this Privacy Policy or our practices, please contact us at:{' '}
                <a href="mailto:info@americanrockfm.com" className="text-primary hover:underline">
                  info@americanrockfm.com
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Privacy
