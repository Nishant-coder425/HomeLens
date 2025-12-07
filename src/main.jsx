import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'
import HouseContextProvider from './components/HouseContext'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  
  <HouseContextProvider>
    <Router>
    <StrictMode>
      <App />
    </StrictMode>
    </Router>
  </HouseContextProvider>
)
