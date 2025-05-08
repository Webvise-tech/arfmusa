import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { motion } from 'framer-motion';
import { services } from '../assets/assets';
import useScrollToTop from '../hooks/useScrollToTop';
import { Link } from 'react-router-dom';

const WhyArfm = () => {
  useScrollToTop();

  // Get random images for different sections
  const randomImages = [...services].sort(() => 0.5 - Math.random()).slice(0, 3);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-[80px]">
        {/* Hero Section */}
        <div className="relative h-[60vh] bg-black">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url('${randomImages[0].image}')`
            }}
          />
          <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Trusted. Self-Performing. Always On Time.</h1>
              <p className="text-xl text-white/90">Your Direct Service Partner in Maryland and Northern Virginia</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full">
          {/* Services Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 bg-white"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Specialties</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: "🔧", title: "Plumbing", description: "Expert plumbing services for all your facility needs" },
                  { icon: "❄", title: "HVAC/R Services", description: "Comprehensive heating, cooling, and refrigeration solutions" },
                  { icon: "⚡", title: "Electrical Work", description: "Professional electrical services and maintenance" },
                  { icon: "🛠", title: "Handyman Solutions", description: "Versatile maintenance and repair services" }
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
                  >
                    <span className="text-4xl mb-4 block">{service.icon}</span>
                    <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* What Sets Us Apart Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16 bg-primary/5 w-full"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <h2 className="text-3xl font-bold text-primary mb-12 text-center">🚀 What Sets Us Apart</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: "🛠",
                    title: "Self-Performing Technicians",
                    description: "Our trained in-house team ensures quality and consistency — every time."
                  },
                  {
                    icon: "⏱",
                    title: "Rapid Response, 24/7",
                    description: "Emergency repairs or scheduled maintenance — we're ready when you need us."
                  },
                  {
                    icon: "📍",
                    title: "Locally Rooted",
                    description: "Serving MD & Northern VA with a deep understanding of regional codes and facility needs."
                  },
                  {
                    icon: "📋",
                    title: "Transparent Reporting",
                    description: "We keep you updated with detailed job logs, photos, and status updates."
                  },
                  {
                    icon: "🤝",
                    title: "Building Long-Term Partnerships",
                    description: "We believe in relationships, not transactions. Tailored services for your goals."
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                  >
                    <span className="text-4xl mb-4 block">{feature.icon}</span>
                    <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center bg-white"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="relative h-[300px] rounded-lg overflow-hidden mb-8">
                <img 
                  src={randomImages[1].image} 
                  alt="Ready to Work With Us" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="text-white text-center px-4">
                    <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
                    <p className="text-lg mb-6">
                      Let's build a partnership that delivers results.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link 
                        to="/contact" 
                        className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300"
                      >
                        Contact Us
                      </Link>
                      <Link 
                        to="/quote" 
                        className="inline-block bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                      >
                        Get a Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default WhyArfm;
