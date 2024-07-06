import React, { useState } from "react";
import OffersCount from "../components/OffersCount";
import SeconadaryMenu from "../components/SecondaryMenu";
import MainNavBar from "../components/MainNavBar";
import MainMenu from "../components/MainMenu";
import BodyComponent from "../components/BodyComponent";
import Footer from "../components/Footer";

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <OffersCount />
      <SeconadaryMenu />
      <MainNavBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <MainMenu />
      <BodyComponent searchValue={searchValue} />
      <Footer />
    </>
  );
}

export default App;
