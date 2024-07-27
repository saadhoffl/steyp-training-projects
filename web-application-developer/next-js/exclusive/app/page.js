import React from "react";
import Topbar from "./components/includes/Topbar/Topbar";
import Navbar from "./components/includes/Navbar/Navbar";
import Spotlight from "./components/Spotlight/Spotlight";
import CategoryCard from "./components/CategoryCard/CategoryCard";
import Products from "./components/Products/Products";
import Services from "./components/Services/Services";
import Footer from "./components/includes/Footer/Footer";

function page() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Spotlight />
      <CategoryCard />
      <Products />
      <Services />
      <Footer />
    </>
  );
}

export default page;
