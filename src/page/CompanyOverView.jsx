import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import { motion } from 'framer-motion'
import { services } from '../assets/assets'
import useScrollToTop from '../hooks/useScrollToTop'

const CompanyOverView = () => {
  useScrollToTop();
  // Get random images for different sections
  const randomImages = [...services].sort(() => 0.5 - Math.random()).slice(0, 4)

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
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About American Rock Facility Maintenance</h1>
              <p className="text-xl text-white/90">Your Trusted Partner in Facility Services</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full">
          {/* Introduction Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 bg-white"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-6">Who We Are</h2>
                  <p className="text-gray-600 mb-4">
                    American Rock Facility Maintenance is a self-performing facility services company specializing in plumbing, HVAC/R, electrical, and general handyman services. Serving Maryland and Northern Virginia, we deliver consistent, reliable, and responsive maintenance solutions designed to support multi-site commercial operations, retail locations, property management groups, and facility management firms.
                  </p>
                  <p className="text-gray-600">
                    Unlike many providers in the industry, we do not rely on subcontractors. Our fully in-house team ensures greater accountability, quality control, and communication, allowing us to execute every job with precision, transparency, and urgency.
                  </p>
                </div>
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <img 
                    src={randomImages[1].image} 
                    alt="Our Team" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mission Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16 bg-primary/5 w-full"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="grid md:grid-cols-2 gap-12 items-center flex flex-col-reverse md:flex-row">
                <div className="relative h-[400px] rounded-lg overflow-hidden order-2 md:order-1">
                  <img 
                    src={randomImages[3].image} 
                    alt="Our Mission" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
                  <p className="text-xl text-gray-600">
                    To be the go-to self-performing partner for facility maintenance in the Mid-Atlantic — delivering high-quality service, reliable communication, and long-term value for every client we serve.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Our Difference Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16 bg-white"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Difference</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Self-Performing Technicians",
                    description: "No subcontractors. Just skilled, trained, and certified professionals directly employed by us.",
                    icon: "👨‍🔧",
                    color: "from-blue-500/20 to-blue-600/20",
                    borderColor: "border-blue-500/30"
                  },
                  {
                    title: "Reliable Coverage",
                    description: "Fast dispatch across Maryland and Northern Virginia with 24/7 support capabilities.",
                    icon: "⏰",
                    color: "from-green-500/20 to-green-600/20",
                    borderColor: "border-green-500/30"
                  },
                  {
                    title: "Streamlined Communication",
                    description: "Dedicated account management, real-time updates, and post-service reporting.",
                    icon: "📱",
                    color: "from-purple-500/20 to-purple-600/20",
                    borderColor: "border-purple-500/30"
                  },
                  {
                    title: "Consistency You Can Count On",
                    description: "We maintain high service standards across all trades, every visit.",
                    icon: "✨",
                    color: "from-orange-500/20 to-orange-600/20",
                    borderColor: "border-orange-500/30"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className={`relative overflow-hidden rounded-2xl border ${item.borderColor} bg-gradient-to-br ${item.color} p-8 group`}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all duration-300"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-5xl">{item.icon}</span>
                        <h3 className="text-2xl font-bold text-primary">{item.title}</h3>
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Proudly Serving Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 relative py-16 w-full"
          >
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 -z-10"></div>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-primary mb-12 text-center">Proudly Serving</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Retail Chains",
                    icon: "🏪",
                    description: "Comprehensive maintenance solutions for retail locations of all sizes"
                  },
                  {
                    title: "Property Management",
                    icon: "🏢",
                    description: "Reliable service for property management companies and building owners"
                  },
                  {
                    title: "Facility Management",
                    icon: "🔧",
                    description: "Expert support for facility management firms and their clients"
                  },
                  {
                    title: "Medical Offices",
                    icon: "🏥",
                    description: "Specialized maintenance for healthcare facilities and medical offices"
                  },
                  {
                    title: "Commercial Buildings",
                    icon: "🏛️",
                    description: "Full-service maintenance for commercial properties and office spaces"
                  },
                  {
                    title: "Educational Institutions",
                    icon: "🎓",
                    description: "Dedicated maintenance services for schools and educational facilities"
                  },
                  {
                    title: "Warehouses & Distribution",
                    icon: "🏭",
                    description: "Industrial maintenance solutions for warehouses and distribution centers"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-4xl">{item.icon}</span>
                        <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                    <div className="h-1 bg-primary/20 group-hover:bg-primary transition-colors duration-300"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center bg-white py-16"
          >
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative h-[300px] rounded-lg overflow-hidden mb-8">
                <img 
                  src={randomImages[2].image} 
                  alt="Let's Build Together" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="text-white text-center px-4 sm:px-8 md:px-12">
                    <h2 className="text-3xl font-bold mb-4">Let's Build Something That Lasts</h2>
                    <p className="text-lg mb-6">
                      If you're looking for a facility maintenance partner who shows up, communicates clearly, and gets the job done right — every time — you're in the right place.
                    </p>
                    <a 
                      href="/contact" 
                      className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300"
                    >
                      Let's Talk
                    </a>
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
  )
}

export default CompanyOverView
