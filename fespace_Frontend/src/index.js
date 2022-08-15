import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App'
import FourZeroFour from './container/404'


window.medium = 768
// window.addEventListener('dblclick',_=>window.localStorage.removeItem('user'))
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
    <Routes>
        <Route path="/*"  element={<App />} />
        <Route path="*" element={<FourZeroFour />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
