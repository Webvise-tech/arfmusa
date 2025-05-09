import React, { useRef, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import { Link } from 'react-router-dom'
import home1 from '../assets/home 1.webp'
import home2 from '../assets/home 2.webp'
import { motion, AnimatePresence, useInView, useSpring, useTransform, useAnimationControls } from 'framer-motion'
import { services, partners } from '../assets/assets'
import useScrollToTop from '../hooks/useScrollToTop'

const testimonials = [
  {
    id: 1,
    name: "Denise Saldana",
    company: "Branded Group",
    quote: "Blackstone Mechanical Corp. has been amazing to work with, communication is stellar and their work performance is excellent.",
    image: "/testimonials/denise.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    company: "Premier Properties",
    quote: "Their attention to detail and commitment to quality is unmatched. They consistently deliver exceptional results on every project.",
    image: "/testimonials/michael.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Sarah Chen",
    company: "Innovative Solutions",
    quote: "We've worked with many contractors, but ARFM stands out for their professionalism and expertise. They're our go-to partner for all facility needs.",
    image: "/testimonials/sarah.jpg",
    rating: 5
  }
]

const Counter = ({ value, suffix = '', delay = 0 }) => {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef(null)
  const springValue = useSpring(0, { duration: 2000, delay })
  
  useEffect(() => {
    if (isInView) {
      springValue.set(value)
    }
  }, [isInView, value, springValue])

  const rounded = useTransform(springValue, (latest) => Math.round(latest))

  return (
    <motion.h3
      ref={ref}
      onViewportEnter={() => setIsInView(true)}
      className="text-6xl font-bold text-primary mb-2"
    >
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.h3>
  )
}

const Home = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const servicesRef = useRef(null)
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" })
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [randomImages, setRandomImages] = useState([])
  const [currentBg, setCurrentBg] = useState(0)
  const autoSwipeRef = useRef()
  useScrollToTop();

  useEffect(() => {
    const shuffled = [...services].sort(() => 0.5 - Math.random())
    setRandomImages(shuffled.slice(0, 3))
    setCurrentBg(0)
  }, [])

  // Auto-swipe every 5s
  useEffect(() => {
    if (randomImages.length < 2) return;
    
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev === randomImages.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [randomImages])

  const handlePrev = () => {
    setCurrentBg((prev) => (prev === 0 ? randomImages.length - 1 : prev - 1))
    clearInterval(autoSwipeRef.current)
  }
  const handleNext = () => {
    setCurrentBg((prev) => (prev === randomImages.length - 1 ? 0 : prev + 1))
    clearInterval(autoSwipeRef.current)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ScrollToTop />
      {/* Hero Section */}
      <div className="relative w-full min-h-[calc(100vh-80px)] mt-[80px] overflow-hidden bg-black">
        {/* Top Left Tagline */}
        <div className="absolute top-6 left-6 z-20 text-white font-bold text-lg md:text-2xl drop-shadow-lg bg-black/30 px-4 py-2 rounded-lg pointer-events-none select-none">
          self performing 24/7/365
        </div>
        {/* Background Image Slider with Swipe Animation */}
        <AnimatePresence initial={false} mode="wait">
          {randomImages.length > 0 && (
            <motion.div
              key={randomImages[currentBg].image}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full bg-center bg-cover bg-black"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45)), url('${randomImages[currentBg].image}')`,
                zIndex: 1
              }}
            />
          )}
        </AnimatePresence>
        {/* Overlay Content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center h-full w-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">REDEFINE YOUR BRAND PERCEPTION</h1>
          <p className="text-xl md:text-2xl text-white mb-10 drop-shadow-lg">Exterior Solutions Tailored to Your Business Needs</p>
        </div>
        {/* Slider Arrows */}
        {randomImages.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-6xl text-primary font-bold hover:text-primary/80 transition-colors duration-300"
              aria-label="Previous"
            >
              &#8592;
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-6xl text-primary font-bold hover:text-primary/80 transition-colors duration-300"
              aria-label="Next"
            >
              &#8594;
            </button>
          </>
        )}
        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {randomImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => { setCurrentBg(idx); clearInterval(autoSwipeRef.current); }}
              className={`w-3 h-3 rounded-full ${currentBg === idx ? 'bg-primary' : 'bg-white/60'} transition-colors`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      {/* About Section */}
      <div className="py-16 bg-white" ref={sectionRef}>
        <div className="container mx-auto px-4 text-primary">
          <motion.h2 
            className="text-4xl font-bold mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            About Us
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* First Column - Single Large Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col"
            >
              <div className="relative mb-6">
                <img 
                  src={home1} 
                  alt="Our work" 
                  className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Excellence in Construction</h3>
              <p className="text-lg text-gray-600 mb-6">
                Discover our journey of excellence in facility maintenance and construction. With years of experience and a dedicated team of professionals, we've built a reputation for delivering exceptional results.
              </p>
            </motion.div>

            {/* Second Column - Two Stacked Images */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col"
              >
                <div className="relative mb-4">
                  <img 
                    src={home2} 
                    alt="Our expertise" 
                    className="w-full h-[180px] object-cover rounded-lg shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality That Lasts</h3>
                <p className="text-base text-gray-600 mb-4">
                  Our self-performing approach ensures unmatched quality control and efficiency in every project we undertake.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col"
              >
                <div className="relative mb-4">
                  <img 
                    src={home1} 
                    alt="Our commitment" 
                    className="w-full h-[180px] object-cover rounded-lg shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">Built to Last</h3>
                <p className="text-base text-gray-600 mb-4">
                  We take pride in our work, delivering solutions that exceed expectations and stand the test of time.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* Services Section */}
      <div className="py-16 bg-gradient-to-br from-primary/10 to-primary/5" ref={servicesRef}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-primary">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive facility solutions with unmatched quality and efficiency
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.slice(0, 3).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-48">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isServicesInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              whileTap={{ scale: 0.95 }}
              transition={{ 
                duration: 0.5,
                delay: 0.8
              }}
            >
              <Link 
                to="/services" 
                className="relative px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg overflow-hidden z-0 group cursor-pointer hover:text-white transition-colors duration-500 inline-block"
              >
                <span className="absolute inset-0 bg-primary w-0 group-hover:w-full transition-all duration-500 ease-out z-[-1]"></span>
                View All Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* Partners Section */}
      <div className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-primary">Partners</h2>
          </motion.div>

          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
            
            <div className="overflow-hidden">
              <motion.div
                className="flex space-x-16 items-center"
                animate={{
                  x: [`0%`, `-50%`]
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    duration: 30,
                    ease: "linear",
                  },
                }}
                style={{
                  width: "fit-content"
                }}
              >
                {/* First set of partners */}
                {partners.map((partner) => (
                  <div
                    key={partner.id}
                    className="flex-shrink-0 w-32 h-20 flex items-center justify-center"
                  >
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {partners.map((partner) => (
                  <div
                    key={`${partner.id}-duplicate`}
                    className="flex-shrink-0 w-32 h-20 flex items-center justify-center"
                  >
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonials Section */}
      <div className="py-16 bg-gradient-to-br from-primary/10 to-primary/5">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h3 className="text-gray-600 uppercase tracking-wide mb-2">Testimonials</h3>
      <h2 className="text-4xl font-bold mb-4 text-primary">What Clients Say</h2>
    </motion.div>

    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-2xl shadow-lg text-center"
        >
          <svg 
            className="w-12 h-12 mx-auto mb-4 text-primary/10"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003z" />
          </svg>
          <p className="text-lg text-gray-700 italic mb-6">
            {testimonial.quote}
          </p>
          <h4 className="text-xl font-semibold text-primary">
            {testimonial.name}
          </h4>
          <p className="text-gray-600">{testimonial.company}</p>
        </motion.div>
      ))}
    </div>
  </div>
</div>

      {/* Statistics Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-primary">Statistics</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our track record speaks for itself. Through decades of dedication and thousands of successful projects, 
              we've built a legacy of excellence in facility management and construction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Years of Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg border-2 border-primary/10 flex flex-col items-center text-center group hover:border-primary/30 transition-all duration-300"
            >
              <Counter value={30} suffix="+" delay={500} />
              <p className="text-gray-600 text-lg font-medium uppercase tracking-wide">Years of Experience</p>
              <p className="text-sm text-gray-500 mt-2">Three Decades of Excellence in Service</p>
            </motion.div>

            {/* Service Calls */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg border-2 border-primary/10 flex flex-col items-center text-center group hover:border-primary/30 transition-all duration-300"
            >
              <Counter value={5000} suffix="+" delay={700} />
              <p className="text-gray-600 text-lg font-medium uppercase tracking-wide">Service Calls Completed</p>
              <p className="text-sm text-gray-500 mt-2">Trusted by Thousands of Satisfied Clients</p>
            </motion.div>

            {/* Projects Completed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg border-2 border-primary/10 flex flex-col items-center text-center group hover:border-primary/30 transition-all duration-300"
            >
              <Counter value={150} suffix="+" delay={900} />
              <p className="text-gray-600 text-lg font-medium uppercase tracking-wide">Projects Completed</p>
              <p className="text-sm text-gray-500 mt-2">Delivering Excellence in Every Project</p>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
