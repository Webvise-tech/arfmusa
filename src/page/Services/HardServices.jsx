import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const HardServices = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-[80px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Hard Services</h1>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Our hard services focus on the physical and technical aspects of facility management, 
              including maintenance, repairs, and technical installations to keep your facility running smoothly.
            </p>
            {/* Add more content here */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HardServices; 