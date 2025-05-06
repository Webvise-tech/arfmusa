import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const SoftServices = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-[80px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Soft Services</h1>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Our soft services enhance the workplace environment and experience, 
              including cleaning, security, and administrative support to create a comfortable and productive space.
            </p>
            {/* Add more content here */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SoftServices; 