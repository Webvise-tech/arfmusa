import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
        <p className="text-lg">Discover exciting career opportunities at ARFM.</p>
      </main>
      <Footer />
    </div>
  )
}

export default Careers
