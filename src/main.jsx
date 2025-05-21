import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/header.jsx'
import FirstBody from './components/first-body.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <FirstBody />
  </StrictMode>,
)
