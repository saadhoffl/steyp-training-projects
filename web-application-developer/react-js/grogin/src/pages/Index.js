import React from "react";
import OffersCount from "../components/OffersCount";
import SeconadaryMenu from "../components/SecondaryMenu";
import MainNavBar from "../components/MainNavBar";
import MainMenu from "../components/MainMenu";
import BodyComponent from "../components/BodyComponent";
import Footer from "../components/Footer";

function App() {
  return (
    <>
      <OffersCount />
      <SeconadaryMenu />
      <MainNavBar />
      <MainMenu />
      <BodyComponent />
      <Footer />
    </>
  );
}

export default App;
