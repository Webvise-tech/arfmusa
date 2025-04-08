import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Quote = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Get a Quote</h1>
        <p className="text-lg">Request a customized quote for your repair needs.</p>
      </main>
      <Footer />
    </div>
  )
}

export default Quote 