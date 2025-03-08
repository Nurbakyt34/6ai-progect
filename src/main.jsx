import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LessonCard from './components/lesson/LessonCard.jsx'
import { Provider } from 'react-redux'
import { store } from './components/redux/store.js'
import { BrowserRouter, Route, Routes } from 'react-router'
// import Footer from './components/footer/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
  
