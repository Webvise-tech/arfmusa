import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import Services from './page/Services'
import Careers from './page/Careers'
import Contact from './page/Contact'
import Quote from './page/Quote'
import Privacy from './page/Privacy'
import { useEffect } from 'react'

function App() {
  // Get the same base path that's configured in vite.config.js
  const basePath = import.meta.env.BASE_URL

  useEffect(() => {
    // Fix for hover effects
    document.addEventListener('mouseover', function(e) {
      // For group-hover elements
      if (e.target.closest('.group')) {
        const group = e.target.closest('.group');
        const targetElements = group.querySelectorAll('.group-hover\\:w-full');
        targetElements.forEach(el => {
          el.style.width = '100%';
        });
      }
      
      // For regular hover elements
      if (e.target.matches('.hover\\:text-white')) {
        e.target.style.color = 'white';
      }
      if (e.target.matches('.hover\\:bg-primary')) {
        e.target.style.backgroundColor = '#3251D0';
      }
      if (e.target.matches('.hover\\:bg-primary\\/80')) {
        e.target.style.backgroundColor = 'rgba(50, 81, 208, 0.8)';
      }
    });
    
    document.addEventListener('mouseout', function(e) {
      // For group-hover elements
      if (e.target.closest('.group')) {
        const group = e.target.closest('.group');
        const targetElements = group.querySelectorAll('.group-hover\\:w-full');
        targetElements.forEach(el => {
          if (el.classList.contains('w-0')) {
            el.style.width = '0';
          }
        });
      }
      
      // For regular hover elements
      if (e.target.matches('.hover\\:text-white') && !e.target.classList.contains('text-white')) {
        e.target.style.color = '';
      }
      if (e.target.matches('.hover\\:bg-primary') && !e.target.classList.contains('bg-primary')) {
        e.target.style.backgroundColor = '';
      }
      if (e.target.matches('.hover\\:bg-primary\\/80') && !e.target.classList.contains('bg-primary/80')) {
        e.target.style.backgroundColor = '';
      }
    });
  }, []);

  return (
    <Router basename={basePath}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  )
}

export default App
