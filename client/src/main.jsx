import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import App from './App.jsx'
import './index.css'
import {StudentContextProvider} from './context/studentContext.jsx'
import { CoursesContextProvider } from './context/coursesContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <CoursesContextProvider>
    <StudentContextProvider>
    <App />
    </StudentContextProvider>
    </CoursesContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
