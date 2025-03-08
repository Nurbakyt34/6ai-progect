import React from "react";
import CatalogPage from './pages/catalog/CatalogPage';
import ReviewsPage from "./pages/review/ReviewsPage";

const App = () => {

  return (
    <div>
      fffff
      {/* <Route path="/catalog" element={  <CatalogPage/>} /> */}
      {/* <Route path="/review" element={  <ReviewsPage />} /> */}
      <CatalogPage/>
      <ReviewsPage/>
    </div>
  );
}

export default App