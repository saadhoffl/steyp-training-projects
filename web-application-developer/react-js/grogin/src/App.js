import React from "react";
import Index from "./pages/Index";
import ProductDetails from "./pages/ProductDetails";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Error404 from "./pages/Error404";
import PrivateRoutes from "./utils/PrivateRoutes";
import NoLoginPrivateRoutes from "./utils/NoLoginPrivateRoutes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Index />} exact />
          <Route path="/product-details" element={<ProductDetails />} exact />
        </Route>
        <Route element={<NoLoginPrivateRoutes />}>
          <Route path="/signin" element={<Signin />} exact />
          <Route path="/signup" element={<Signup />} exact />
        </Route>
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
