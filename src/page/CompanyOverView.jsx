import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const CompanyOverView = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-[80px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className='text-4xl font-bold text-gray-900 mb-8'>Company Overview</h1>
          {/* Add your content here */}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default CompanyOverView
