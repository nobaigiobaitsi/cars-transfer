import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/header.jsx'
import HeroSection from './components/hero-section.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <HeroSection />
  </StrictMode>,
)
