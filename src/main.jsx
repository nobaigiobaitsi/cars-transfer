import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/header.jsx'
import HeroSection from './components/hero-section.jsx'
import Info from './components/info.jsx'
import Fleet from './components/fleet.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <HeroSection />
    <Info />
    <Fleet />
  </StrictMode>,
)
