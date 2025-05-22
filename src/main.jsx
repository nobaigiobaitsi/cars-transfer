import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/header.jsx'
import HeroSection from './components/hero-section.jsx'
import Info from './components/info.jsx'
import Fleet from './components/fleet.jsx'
import Contact from './components/contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <HeroSection />
    {/* <hr className="section-divider" /> */}
    <Info />
    {/* <hr className="section-divider" /> */}
    <Fleet />
    {/* <hr className="section-divider" /> */}
    <Contact />
  </StrictMode>
)
