import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import { PresentationApp } from './PresentationApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PresentationApp />
  </StrictMode>,
)
