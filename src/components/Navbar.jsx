import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isContactHovered, setIsContactHovered] = useState(false);

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

  // Custom styles for reliable hover effects
  const primaryColor = "#3251D0";
  const primaryColorOpacity = "rgba(50, 81, 208, 0.8)";

  return (
    <div 
      className={`fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-300`} 
      style={{ 
        backgroundColor: isScrolled ? 'white' : 'rgba(34, 166, 222, 0.125)',
        boxShadow: isScrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'
      }}
    >
      <div className='max-w-7xl mx-auto'>
        <nav className='flex justify-between items-center p-4 px-4 sm:px-6 lg:px-8 h-[80px]'>
          <div className='flex flex-col'>
            <Link to="/" className='text-2xl font-semibold'>
              <span style={{ color: primaryColor }}>ARFM</span> - Your Repair Experts
            </Link>
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
                  onMouseEnter={() => setHoveredLink(link.path)}
                  onMouseLeave={() => setHoveredLink(null)}
                  style={{
                    cursor: 'pointer',
                    transition: 'color 0.3s',
                    fontWeight: 500,
                    position: 'relative',
                    color: location.pathname === link.path ? primaryColor : 
                           hoveredLink === link.path ? primaryColor : '#374151'
                  }}
                >
                  {link.label}
                  <span style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    height: '2px',
                    backgroundColor: primaryColor,
                    transition: 'width 0.3s',
                    width: location.pathname === link.path ? '100%' : 
                           hoveredLink === link.path ? '100%' : '0%'
                  }}></span>
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden'
            style={{
              color: '#374151',
              transition: 'color 0.3s'
            }}
            onMouseEnter={(e) => {e.currentTarget.style.color = primaryColor}}
            onMouseLeave={(e) => {e.currentTarget.style.color = '#374151'}}
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

          <Link 
            to="/contact" 
            className='hidden md:block'
            style={{
              backgroundColor: isContactHovered ? primaryColorOpacity : primaryColor,
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '0.375rem',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
            onMouseEnter={() => setIsContactHovered(true)}
            onMouseLeave={() => setIsContactHovered(false)}
          >
            Get in Touch
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100%',
          width: '16rem',
          backgroundColor: 'white',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s ease-in-out',
          zIndex: 101
        }}
      >
        <div className='p-4'>
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className='text-xl font-semibold'>
              <span style={{ color: primaryColor }}>ARFM</span>
            </Link>
            <button 
              onClick={() => setIsOpen(false)}
              style={{
                color: '#374151',
                transition: 'color 0.3s'
              }}
              onMouseEnter={(e) => {e.currentTarget.style.color = primaryColor}}
              onMouseLeave={(e) => {e.currentTarget.style.color = '#374151'}}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className='flex flex-col gap-4'>
            {navLinks.map((link, index) => {
              const [isHovered, setIsHovered] = useState(false);
              return (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link 
                    to={link.path} 
                    onClick={() => setIsOpen(false)}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{
                      cursor: 'pointer',
                      transition: 'color 0.3s',
                      fontWeight: 500,
                      display: 'block',
                      color: location.pathname === link.path ? primaryColor : 
                             isHovered ? primaryColor : '#374151'
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
          <Link 
            to="/contact" 
            onClick={() => setIsOpen(false)} 
            style={{
              marginTop: '2rem',
              display: 'block',
              width: '100%',
              textAlign: 'center',
              backgroundColor: primaryColor,
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '0.375rem',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
              ":hover": {
                backgroundColor: primaryColorOpacity
              }
            }}
            onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = primaryColorOpacity}}
            onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = primaryColor}}
          >
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
