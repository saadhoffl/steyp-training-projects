import React from "react";
import Topbar from "../components/includes/Topbar/Topbar";
import Navbar from "../components/includes/Navbar/Navbar";
import AllProducts from "../components/AllProducts/AllProducts";
import Footer from "../components/includes/Footer/Footer";

function page() {
  return (
    <>
      <Topbar />
      <Navbar />
      <AllProducts />
      <Footer />
    </>
  );
}

export default page;
