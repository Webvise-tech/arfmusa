import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import CompanyOverView from './page/CompanyOverView';
import WhyArfm from './page/WhyArfm';
import Services from './page/Services';
import Contact from './page/Contact';
import Quote from './page/Quote';
import Careers from './page/Careers';
import HardServices from './page/Services/HardServices';
import IntegratedServices from './page/Services/IntegratedServices';
import SoftServices from './page/Services/SoftServices';
import Privacy from './page/Privacy';

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company-overview" element={<CompanyOverView />} />
        <Route path="/why-arfm" element={<WhyArfm />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/hard" element={<HardServices />} />
        <Route path="/services/integrated" element={<IntegratedServices />} />
        <Route path="/services/soft" element={<SoftServices />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
