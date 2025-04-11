import React, { useRef, useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import home1 from '../assets/home 1.webp'
import ScrollToTop from '../components/ScrollToTop'
import useScrollToTop from '../hooks/useScrollToTop'

const Careers = () => {
  useScrollToTop();
  const openingsRef = useRef(null)
  const applicationFormRef = useRef(null)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const scrollToOpenings = () => {
    openingsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToApplicationForm = () => {
    applicationFormRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const values = [
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork. Our success is built on effective communication and mutual support among team members.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Transparency",
      description: "We operate with complete openness and honesty, ensuring clear communication and accountability in all our actions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: "Trust",
      description: "We build lasting relationships based on trust, delivering on our promises and maintaining the highest standards of integrity.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Integrity",
      description: "We uphold the highest ethical standards in all our dealings, ensuring fairness and respect in every interaction.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ]

  const positions = [
    {
      title: "Plumbing Specialist",
      type: "Full-time",
      description: "Join our team as a skilled plumbing specialist to handle installations, repairs, and maintenance of plumbing systems."
    },
    {
      title: "Electrical Technician",
      type: "Full-time",
      description: "Looking for experienced electrical technicians to maintain and repair electrical systems and equipment."
    },
    {
      title: "HVAC Engineer",
      type: "Full-time",
      description: "Seeking HVAC professionals to handle installation, maintenance, and repair of heating, ventilation, and air conditioning systems."
    },
    {
      title: "General Contractor",
      type: "Full-time",
      description: "Join us as a general contractor to oversee various construction and maintenance projects."
    },
    {
      title: "Home Improvement Specialist",
      type: "Full-time",
      description: "Looking for skilled professionals to handle various home improvement and renovation projects."
    },
    {
      title: "Handyman Services Professional",
      type: "Full-time",
      description: "Join our team to provide comprehensive handyman services and general maintenance solutions."
    },
    {
      title: "Preventive Maintenance Technician",
      type: "Full-time",
      description: "Seeking technicians to implement and maintain preventive maintenance programs for facilities."
    }
  ]

  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [startX, setStartX] = React.useState(null)

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX)
  }

  const handleTouchMove = (e) => {
    if (!startX) return

    const currentX = e.touches[0].clientX
    const diff = startX - currentX

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext()
      } else {
        handlePrev()
      }
      setStartX(null)
    }
  }

  const handleNext = () => {
    if (isMobile) {
      setCurrentIndex(prev => (prev + 1) % positions.length)
    } else {
      setCurrentIndex(prev => (prev + 1) % (positions.length - 2))
    }
  }

  const handlePrev = () => {
    if (isMobile) {
      setCurrentIndex(prev => (prev - 1 + positions.length) % positions.length)
    } else {
      setCurrentIndex(prev => (prev - 1 + (positions.length - 2)) % (positions.length - 2))
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold mb-6 text-primary"
              >
                Come to join Us!
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg text-gray-600 mb-8 max-w-xl"
              >
                From what we have seen to where we are going! Be part of our innovative team that is transforming facility maintenance. Join us in creating better, safer, and more efficient spaces.
              </motion.p>
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                onClick={scrollToOpenings}
                className="relative px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg overflow-hidden z-0 group cursor-pointer hover:text-white transition-colors duration-500"
              >
                <span className="absolute inset-0 bg-primary w-0 group-hover:w-full transition-all duration-500 ease-out z-[-1]"></span>
                See Current Openings
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="relative h-[400px] rounded-xl overflow-hidden"
            >
              <img src={home1} alt="Team at work" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl md:text-4xl font-bold mb-4 text-primary"
              >
                A few things you should know about Us
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg text-gray-600 max-w-2xl mx-auto"
              >
                Our values define who we are and guide everything we do.
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                  className="bg-white p-6 rounded-xl shadow-sm"
                >
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                    className="mb-4"
                  >
                    {value.icon}
                  </motion.div>
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 + index * 0.2 }}
                    className="text-xl font-semibold mb-2"
                  >
                    {value.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                    className="text-gray-600"
                  >
                    {value.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Openings Section with carousel */}
        <section ref={openingsRef} className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-4 text-primary"
            >
              Current Openings
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Join our team of dedicated professionals and help us shape the future of facility maintenance.
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className={`relative overflow-hidden ${isMobile ? 'max-w-md mx-auto px-4' : 'w-full'}`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            <motion.button
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg text-primary border border-gray-200 hover:bg-primary hover:text-white transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg text-primary border border-gray-200 hover:bg-primary hover:text-white transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>

            <div className="overflow-hidden">
              <motion.div 
                className="flex transition-all duration-300 ease-in-out"
                style={{ x: isMobile ? `-${currentIndex * 100}%` : 0 }}
                initial={false}
                transition={{ type: "tween", duration: 0.3 }}
              >
                {isMobile ? (
                  positions.map((position, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="w-full flex-shrink-0 px-4"
                    >
                      <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                        <p className="text-primary mb-4">{position.type}</p>
                        <p className="text-gray-600 mb-4">{position.description}</p>
                        <motion.button
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          onClick={scrollToApplicationForm}
                          className="relative px-6 py-2 border-2 border-primary text-primary font-semibold rounded-lg overflow-hidden z-0 group cursor-pointer hover:text-white transition-colors duration-500"
                        >
                          <span className="absolute inset-0 bg-primary w-0 group-hover:w-full transition-all duration-500 ease-out z-[-1]"></span>
                          Apply Now
                        </motion.button>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="w-full grid grid-cols-3 gap-6">
                    {positions.slice(currentIndex, currentIndex + 3).map((position, index) => (
                      <motion.div
                        key={index + currentIndex}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        className="bg-white p-6 rounded-xl shadow-sm"
                      >
                        <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                        <p className="text-primary mb-4">{position.type}</p>
                        <p className="text-gray-600 mb-4">{position.description}</p>
                        <motion.button
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                          onClick={scrollToApplicationForm}
                          className="relative px-6 py-2 border-2 border-primary text-primary font-semibold rounded-lg overflow-hidden z-0 group cursor-pointer hover:text-white transition-colors duration-500"
                        >
                          <span className="absolute inset-0 bg-primary w-0 group-hover:w-full transition-all duration-500 ease-out z-[-1]"></span>
                          Apply Now
                        </motion.button>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>

            {/* Position Indicators - Only show on mobile */}
            {isMobile && (
              <div className="flex justify-center mt-6 gap-2">
                {positions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex % positions.length
                        ? 'bg-primary w-6'
                        : 'bg-gray-300'
                    }`}
                    aria-label={`Go to position ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </section>

        {/* Application Form Section */}
        <section ref={applicationFormRef} className="bg-gradient-to-br from-primary/10 to-primary/5 py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Apply Now</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Fill out the form below to apply for your desired position. We'll review your application and get back to you soon.
                </p>
              </div>

              <form className="p-8   border-gray-100">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Personal Information */}
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                      State*
                    </label>
                    <select
                      id="state"
                      name="state"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select your state</option>
                      <option value="NY">New York</option>
                      <option value="CA">California</option>
                      <option value="IL">Illinois</option>
                      <option value="FL">Florida</option>
                      <option value="TX">Texas</option>
                      <option value="DC">Washington DC</option>
                    </select>
                  </div>
                </div>

                {/* Position Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Position(s) of Interest* (Select all that apply)
                  </label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {positions.map((position) => (
                      <div key={position.title} className="flex items-center">
                        <input
                          type="checkbox"
                          id={position.title.replace(/\s+/g, '')}
                          name="positions[]"
                          value={position.title}
                          className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <label htmlFor={position.title.replace(/\s+/g, '')} className="ml-2 text-gray-700">
                          {position.title}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certification */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Do you have relevant certifications?*
                  </label>
                  <div className="flex gap-6">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="certYes"
                        name="hasCertification"
                        value="yes"
                        className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                      />
                      <label htmlFor="certYes" className="ml-2 text-gray-700">
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="certNo"
                        name="hasCertification"
                        value="no"
                        className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                      />
                      <label htmlFor="certNo" className="ml-2 text-gray-700">
                        No
                      </label>
                    </div>
                  </div>
                </div>

                {/* Experience */}
                <div className="mb-6">
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Experience*
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select years of experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                  <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    type="submit"
                    className="relative px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg overflow-hidden z-0 group cursor-pointer hover:text-white transition-colors duration-500"
                  >
                    <span className="absolute inset-0 bg-primary w-0 group-hover:w-full transition-all duration-500 ease-out z-[-1]"></span>
                    Submit Application
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Careers
