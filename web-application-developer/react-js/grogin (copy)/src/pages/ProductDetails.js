import React from "react";
import OffersCount from "../components/OffersCount";
import SeconadaryMenu from "../components/SecondaryMenu";
import MainNavBar from "../components/MainNavBar";
import MainMenu from "../components/MainMenu";
import Footer from "../components/Footer";
import ProductBody from "../components/ProductBody";

function App() {
  return (
    <>
      <OffersCount />
      <SeconadaryMenu />
      <MainNavBar />
      <MainMenu />
      <ProductBody />
      <Footer />
    </>
  );
}

export default App;
