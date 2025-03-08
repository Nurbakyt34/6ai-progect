import React from "react";
import CatalogPage from './pages/catalog/CatalogPage';
import ReviewsPage from "./pages/review/ReviewsPage";
import { BrowserRouter, Routes, Route } from 'react-router'
import HomePage from './pages/home/HomePage'
import Layout from './layout/Layout'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog/:name" element={<CatalogPage />} />
          <Route path="/review" element={<ReviewsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
