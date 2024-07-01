import React from "react";
import Index from "./pages/Index";
import ProductDetails from "./pages/ProductDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/product-details" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
