import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import { MainLogo } from '../assets/assets.js';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // For mobile menu toggle
  const [isScrolled, setIsScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false); // For About Us dropdown
  const [aboutClicked, setAboutClicked] = useState(false); // To toggle the dropdown on click for mobile
  const [servicesOpen, setServicesOpen] = useState(false);
  const [servicesClicked, setServicesClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const timeoutRef = useRef(null);
  const servicesTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (servicesTimeoutRef.current) {
        clearTimeout(servicesTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseLeave = () => {
    if (!isMobile) {
      timeoutRef.current = setTimeout(() => {
        setAboutOpen(false);
      }, 300); // 300ms delay
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setAboutOpen(true);
    }
  };

  const handleServicesMouseLeave = () => {
    if (!isMobile) {
      servicesTimeoutRef.current = setTimeout(() => {
        setServicesOpen(false);
      }, 300);
    }
  };

  const handleServicesMouseEnter = () => {
    if (!isMobile) {
      if (servicesTimeoutRef.current) {
        clearTimeout(servicesTimeoutRef.current);
      }
      setServicesOpen(true);
    }
  };

  const handleServicesClick = () => {
    setServicesClicked(!servicesClicked);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/careers', label: 'Careers' },
    { path: '/quote', label: 'Get a Quote' },
  ];

  const handleAboutClick = () => {
    setAboutClicked(!aboutClicked); // Toggle the About Us dropdown
  };

  return (
    <div className={`fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-[var(--color-navbar)]'}`}>
      <div className='max-w-7xl mx-auto'>
        <nav className='flex justify-between items-center p-4 px-4 sm:px-6 lg:px-8 h-[80px]'>
          <Link to="/" className="flex items-center gap-3 group">
            <img src={MainLogo} alt="American Rock Logo" className="h-20 w-20 object-contain" />
            <div className="flex flex-col justify-center">
              <span className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-300" style={{letterSpacing: '0.02em'}}>American Rock</span>
              <span className="text-xs text-gray-500 tracking-wide mt-1">Facility Maintenance</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className='hidden md:flex gap-8'>
            {/* Home Link */}
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to="/"
                className={`cursor-pointer transition-colors duration-300 font-medium relative group ${
                  location.pathname === '/' ? 'text-primary' : 'text-gray-700 hover:text-primary'
                }`}
              >
                Home
              </Link>
            </motion.li>

            {/* About Us Dropdown (Desktop only) */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1 font-medium transition-colors duration-300 ${
                  location.pathname.startsWith('/overview') || location.pathname.startsWith('/why-arfm')
                    ? 'text-primary'
                    : 'text-gray-700 hover:text-primary'
                }`}
                onClick={() => isMobile && handleAboutClick()}
              >
                About Us <FaChevronDown className="w-3 h-3 mt-0.5" />
              </button>

              {/* Dropdown for Desktop */}
              {((aboutOpen && !isMobile) || (aboutClicked && isMobile)) && (
                <ul 
                  className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-44 z-50"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <li>
                    <Link
                      to="/company-overview"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => isMobile && setIsOpen(false)}
                    >
                      Company Overview
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/why-arfm"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => isMobile && setIsOpen(false)}
                    >
                      Why ARFM
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button
                className={`flex items-center gap-1 font-medium transition-colors duration-300 ${
                  location.pathname.startsWith('/services')
                    ? 'text-primary'
                    : 'text-gray-700 hover:text-primary'
                }`}
                onClick={() => isMobile && handleServicesClick()}
              >
                Services <FaChevronDown className="w-3 h-3 mt-0.5" />
              </button>

              {/* Services Dropdown Menu */}
              {((servicesOpen && !isMobile) || (servicesClicked && isMobile)) && (
                <ul 
                  className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-44 z-50"
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                >
                  <li>
                    <Link
                      to="/services/hard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => isMobile && setIsOpen(false)}
                    >
                      Hard Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/integrated"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => isMobile && setIsOpen(false)}
                    >
                      Integrated Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/soft"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => isMobile && setIsOpen(false)}
                    >
                      Soft Services
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            {/* Other Nav Links */}
            {navLinks.map((link, index) => (
              link.path !== '/' && (
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
              )
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden text-gray-700 hover:text-primary transition-colors duration-300'
          >
            {isOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>

          {/* Contact us Button */}
          <Link to="/contact" className='hidden md:block bg-primary text-white px-4 py-2 rounded-md cursor-pointer hover:bg-primary/80 transition-colors duration-300'>
            Contact Us
          </Link>
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
              <FaTimes className="h-6 w-6" />
            </button>
          </div>
          <ul className='flex flex-col gap-0 flex-grow'>
            {/* Home Link */}
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="border-b border-gray-200 py-3"
            >
              <Link
                to="/"
                className={`cursor-pointer transition-colors duration-300 font-medium relative group pl-3 ${
                  location.pathname === '/' ? 'text-primary border-l-4 border-primary bg-primary/5' : 'text-gray-700 hover:text-primary'
                }`}
              >
                Home
              </Link>
            </motion.li>

            {/* Mobile About Us */}
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="border-b border-gray-200 py-3"
            >
              <button
                className="flex items-center gap-1 cursor-pointer transition-colors duration-300 font-medium text-gray-700 hover:text-primary pl-3 w-full text-left"
                onClick={handleAboutClick}
              >
                About Us <FaChevronDown className="w-3 h-3 mt-0.5" />
              </button>

              {aboutClicked && (
                <div className="flex flex-col gap-2 pl-7">
                  <Link
                    to="/company-overview"
                    className="mt-2 cursor-pointer transition-colors duration-300 font-medium text-gray-700 hover:text-primary"
                  >
                    Company Overview
                  </Link>
                  <Link
                    to="/why-arfm"
                    className="cursor-pointer transition-colors duration-300 font-medium text-gray-700 hover:text-primary"
                  >
                    Why ARFM
                  </Link>
                </div>
              )}
            </motion.li>

            {/* Mobile Services */}
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="border-b border-gray-200 py-3"
            >
              <button
                className="flex items-center gap-1 cursor-pointer transition-colors duration-300 font-medium text-gray-700 hover:text-primary pl-3 w-full text-left"
                onClick={handleServicesClick}
              >
                Services <FaChevronDown className="w-3 h-3 mt-0.5" />
              </button>

              {servicesClicked && (
                <div className="flex flex-col gap-2 pl-7">
                  <Link
                    to="/services/hard"
                    className="mt-2 cursor-pointer transition-colors duration-300 font-medium text-gray-700 hover:text-primary"
                  >
                    Hard Services
                  </Link>
                  <Link
                    to="/services/integrated"
                    className="cursor-pointer transition-colors duration-300 font-medium text-gray-700 hover:text-primary"
                  >
                    Integrated Services
                  </Link>
                  <Link
                    to="/services/soft"
                    className="cursor-pointer transition-colors duration-300 font-medium text-gray-700 hover:text-primary"
                  >
                    Soft Services
                  </Link>
                </div>
              )}
            </motion.li>

            {/* Other Mobile Nav Links */}
            {navLinks.map((link, index) => (
              link.path !== '/' && (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={
                    (index === navLinks.filter(l => l.path !== '/').length - 1 ? '' : 'border-b border-gray-200') +
                    ' py-3'
                  }
                >
                  <Link
                    to={link.path}
                    className={`cursor-pointer transition-colors duration-300 font-medium relative group pl-3 ${
                      location.pathname === link.path ? 'text-primary border-l-4 border-primary bg-primary/5' : 'text-gray-700 hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              )
            ))}
          </ul>
         
          <div className="mt-8 border-t border-gray-200 pt-6">
            <Link to="/contact" className='bg-primary text-white px-4 py-2 rounded-md cursor-pointer hover:bg-primary/80 transition-colors duration-300'>
              Contact Us
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
