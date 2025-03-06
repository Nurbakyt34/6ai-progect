import React from 'react'
import { supabase } from './supabase'
import { BrowserRouter, Router, Routes, Route } from 'react-router'
import HomePage from './pages/home/HomePage'
import Layout from './layout/Layout'


const App = () => {

  return (

    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Layout/>}>

          <Route index element={<HomePage />} />
        </Route>
      </Routes>
      fffff
    </BrowserRouter>
  )
}

export default App
