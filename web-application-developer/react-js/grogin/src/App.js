import React from "react";
import Index from "./pages/Index";
import ProductDetails from "./pages/ProductDetails";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Error404 from "./pages/Error404";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
