import React from "react";
import Topbar from "./components/Topbar/Topbar";
import Navbar from "./components/Navbar/Navbar";
import Spotlight from "./components/Spotlight/Spotlight";
import CategoryCard from "./components/CategoryCard/CategoryCard";
import Products from "./components/Products/Products";

function page() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Spotlight />
      <CategoryCard />
      <Products />
    </>
  );
}

export default page;
