import './styles/reset.css'
import './styles/global.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
