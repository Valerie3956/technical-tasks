import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {StudentContextProvider} from './context/studentContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StudentContextProvider>
    <App />
    </StudentContextProvider>
  </React.StrictMode>,
)
