import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const WhyArfm = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-[80px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Why Choose ARFM</h1>
          <p className="text-lg text-gray-700 mb-8">
            ARFM is your trusted partner in the repair industry. We offer unparalleled service and expertise in our field.
          </p>
          {/* Add your content here */}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default WhyArfm;
