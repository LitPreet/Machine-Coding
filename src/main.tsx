import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {  ThemeProvider } from './context/theme-provider.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(<BrowserRouter><ThemeProvider><App /></ThemeProvider>  </BrowserRouter>)
  // <React.StrictMode>
  {/* </React.StrictMode>, */}

