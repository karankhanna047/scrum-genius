import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from "@vercel/analytics/next"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Analytics>

    <App />

    </Analytics>
  </StrictMode>,
)
