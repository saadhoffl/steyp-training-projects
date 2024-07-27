import React from "react";
import Topbar from "../components/includes/Topbar/Topbar";
import Navbar from "../components/includes/Navbar/Navbar";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts";
import Footer from "../components/includes/Footer/Footer";

function page() {
  return (
    <>
      <Topbar />
      <Navbar />
      <ProductDetails />
      <RelatedProducts />
      <Footer />
    </>
  );
}

export default page;
