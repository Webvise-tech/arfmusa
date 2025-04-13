import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/quote', label: 'Get a Quote' },
    { path: '/services', label: 'Services' },
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact Us' },
    { path: '/privacy', label: 'Privacy Policy' }
  ];

  return (
    <div className={`fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-[var(--color-navbar)]'}`}>
      <div className='max-w-7xl mx-auto'>
        <nav className='flex justify-between items-center p-4 px-4 sm:px-6 lg:px-8 h-[80px]'>
          <div className='flex flex-col'>
            <Link to="/" className='text-2xl font-semibold'><span className='text-primary'>ARFM</span> - Your Repair Experts</Link>
            <span className='text-sm text-gray-500 flex justify-end'>24/7/365 SERVICE</span>
          </div>
          
          {/* Desktop Menu */}
          <ul className='hidden md:flex gap-8'>
            {navLinks.map((link, index) => (
              <motion.li
                key={link.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link 
                  to={link.path} 
                  className={`cursor-pointer transition-colors duration-300 font-medium relative group ${
                    location.pathname === link.path ? 'text-primary' : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 ${
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden text-gray-700 hover:text-primary transition-colors duration-300'
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          <Link to="/contact" className='hidden md:block bg-primary text-white px-4 py-2 rounded-md cursor-pointer hover:bg-primary/80 transition-colors duration-300'>Get in Touch</Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden z-[101]`}>
        <div className='p-4'>
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className='text-xl font-semibold'><span className='text-primary'>ARFM</span></Link>
            <button 
              onClick={() => setIsOpen(false)}
              className='text-gray-700 hover:text-primary transition-colors duration-300'
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className='flex flex-col gap-4'>
            {navLinks.map((link, index) => (
              <motion.li
                key={link.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link 
                  to={link.path} 
                  onClick={() => setIsOpen(false)}
                  className={`cursor-pointer transition-colors duration-300 font-medium block ${
                    location.pathname === link.path ? 'text-primary' : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>
          <Link to="/contact" onClick={() => setIsOpen(false)} className='mt-8 block w-full bg-primary text-white px-4 py-2 rounded-md cursor-pointer hover:bg-primary/80 transition-colors duration-300 text-center'>
            Get in touch
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-gray-700/50 md:hidden z-[99]"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}

export default Navbar
