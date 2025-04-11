import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import { services } from '../assets/assets'
import { motion } from 'framer-motion'
import useScrollToTop from '../hooks/useScrollToTop'

const Services = () => {
  useScrollToTop();
  const [searchTerm, setSearchTerm] = useState('')

  const filteredServices = services.filter(service =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 text-primary bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our Services
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Explore our comprehensive range of repair and maintenance services.
            </motion.p>

            {/* Search Bar */}
            <motion.div 
              className="mb-12 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <input
                type="text"
                placeholder="Search services..."
                className="w-full md:w-96 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary shadow-sm transition-all duration-300 hover:shadow-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="space-y-24">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center bg-[var(--color-section-bg)] rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                {/* Image Section - Alternates based on index */}
                <div className={`relative h-64 md:h-80 ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Section - Alternates based on index */}
                <div className={`p-8 md:p-10 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">{service.title}</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Services
