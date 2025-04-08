import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'   

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-lg">Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website.</p>
      </main>
      <Footer />
    </div>
  )
}

export default Privacy
