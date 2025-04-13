import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import Services from './page/Services'
import Careers from './page/Careers'
import Contact from './page/Contact'
import Quote from './page/Quote'
import Privacy from './page/Privacy'

function App() {
  // Get the same base path that's configured in vite.config.js
  const basePath = import.meta.env.BASE_URL

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
