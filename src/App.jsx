import React from "react";
import CatalogPage from './pages/catalog/CatalogPage';
import ReviewsPage from "./pages/review/ReviewsPage";
import { BrowserRouter, Routes, Route } from 'react-router'
import HomePage from './pages/home/HomePage'
import Layout from './layout/Layout'
import QuizPage from "./components/test/QuizPage";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog/:name" element={<CatalogPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/quiz" element={<QuizPage />} />
        </Route>
      </Routes>
    </BrowserRouter>)
}

export default App;
