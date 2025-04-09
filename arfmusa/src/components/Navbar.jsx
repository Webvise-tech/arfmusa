import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-md' : 'bg-navbar'}`}>
      <nav className='flex justify-between items-center p-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[80px]'>
        <div className='flex flex-col'>
        <Link to="/" className='text-2xl font-semibold'><span className='text-primary'>ARFM</span> - Your Repair Experts</Link>
        <span className='text-sm text-gray-500 flex justify-end '>24/7/365 SERVICE</span>
        </div>
        
        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-8'>
            <li><Link to="/" className='cursor-pointer hover:text-primary transition-colors duration-300 font-medium text-gray-700 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full'>Home</Link></li>
            <li><Link to="/quote" className='cursor-pointer hover:text-primary transition-colors duration-300 font-medium text-gray-700 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full'>Get a Quote</Link></li>
            <li><Link to="/services" className='cursor-pointer hover:text-primary transition-colors duration-300 font-medium text-gray-700 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full'>Services</Link></li>
            <li><Link to="/careers" className='cursor-pointer hover:text-primary transition-colors duration-300 font-medium text-gray-700 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full'>Careers</Link></li>
            <li><Link to="/contact" className='cursor-pointer hover:text-primary transition-colors duration-300 font-medium text-gray-700 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full'>Contact Us</Link></li>
            <li><Link to="/privacy" className='cursor-pointer hover:text-primary transition-colors duration-300 font-medium text-gray-700 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full'>Privacy Policy</Link></li>
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

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden z-50`}>
        <div className='p-4'>
          <button 
            onClick={() => setIsOpen(false)}
            className='absolute top-4 right-4 text-gray-700 hover:text-primary transition-colors duration-300'
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <ul className='flex flex-col gap-4 mt-12'>
            <li><Link to="/" onClick={() => setIsOpen(false)} className='cursor-pointer hover:text-primary transition-colors duration-300 font-medium text-gray-700'>Home</Link></li>
            <li><Link to="/quote" onClick={() => setIsOpen(false)} className='cursor-pointer hover:text-primary transition-colors duration-300 font-medium text-gray-700'>Get a Quote</Link></li>
            <li><Link to="/services" onClick={() => setIsOpen(false)} className='cursor-pointer hover:text-primary transition-colors duration-300 font-medium text-gray-700'>Services</Link></li>
            <li><Link to="/careers" onClick={() => setIsOpen(false)} className='cursor-pointer hover:text-primary transition-colors duration-300 font-medium text-gray-700'>Careers</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)} className='cursor-pointer hover:text-primary transition-colors duration-300 font-medium text-gray-700'>Contact Us</Link></li>
            <li><Link to="/privacy" onClick={() => setIsOpen(false)} className='cursor-pointer hover:text-primary transition-colors duration-300 font-medium text-gray-700'>Privacy Policy</Link></li>
          </ul>
          <Link to="/contact" onClick={() => setIsOpen(false)} className='mt-8 block w-full bg-primary text-white px-4 py-2 rounded-md cursor-pointer hover:bg-primary/80 transition-colors duration-300 text-center'>
            Get in touch
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-gray-700/50 md:hidden z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}

export default Navbar
