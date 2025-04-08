import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg">Explore our comprehensive range of repair and maintenance services.</p>
      </main>
      <Footer />
    </div>
  )
}

export default Services
