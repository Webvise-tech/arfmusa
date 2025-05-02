import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaPhone, FaEnvelope } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      // Replace these with your actual EmailJS credentials
      const serviceId = 'YOUR_SERVICE_ID'
      const templateId = 'YOUR_TEMPLATE_ID'
      const publicKey = 'YOUR_PUBLIC_KEY'

      const templateParams = {
        to_email: 'your-email@example.com', // Your email where you want to receive subscriptions
        from_email: email,
        message: `New subscription from: ${email}`
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      setStatus('success')
      setEmail('')
    } catch (error) {
      console.error('Error sending email:', error)
      setStatus('error')
    }
  }

  return (
    <footer className='bg-navbar text-gray-700 py-8'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Address Column */}
          <div>
            <h3 className='text-primary text-xl font-semibold mb-4'>Address</h3>
            <div className='space-y-2'>
              <p>30 Wall Street, New York, NY 10005</p>
              <p>626 Wilshire Blvd, Los Angeles, CA 90017</p>
              <p>5700 Yonge Street North American Centre, ON M2M 4K2</p>
              <p className='mt-4 flex items-center gap-2'><FaPhone /> (301) 876-4432</p>
              <p className='flex items-center gap-2'><FaEnvelope /> info@americanrockfm.com</p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className='text-primary text-xl font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li><Link to="/" className='cursor-pointer hover:text-primary transition-colors duration-300'>Home</Link></li>
              <li><Link to="/quote" className='cursor-pointer hover:text-primary transition-colors duration-300'>Get a Quote</Link></li>
              <li><Link to="/services" className='cursor-pointer hover:text-primary transition-colors duration-300'>Services</Link></li>
              <li><Link to="/careers" className='cursor-pointer hover:text-primary transition-colors duration-300'>Careers</Link></li>
              <li><Link to="/contact" className='cursor-pointer hover:text-primary transition-colors duration-300'>Contact Us</Link></li>
              <li><Link to="/privacy" className='cursor-pointer hover:text-primary transition-colors duration-300'>Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Subscribe Column */}
          <div>
            <h3 className='text-primary text-xl font-semibold mb-4'>Subscribe to Our Newsletter</h3>
            <p className='mb-4'>Discover expert insights, practical tips, and the latest trends in building and repair. From breakthrough tools to smart solutions, ARFM keeps you informed and ahead of the curve.</p>
            <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className='px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-primary'
              />
              <button 
                type="submit"
                className='bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/80 transition-colors duration-300 cursor-pointer'
              >
                Subscribe
              </button>
              {status === 'success' && (
                <p className="text-green-500">Thank you for subscribing!</p>
              )}
              {status === 'error' && (
                <p className="text-red-500">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className='mt-6 pt-6 border-t border-gray-700/20 text-center'>
          <p>© {new Date().getFullYear()} ARFM. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
