import React from "react";
import Header from "./includes/Header";

function Place() {
  return (
    <>
      <Header />
      <PlaceContainer>
        <Title>Himaliaya</Title>
        <InfoConatiner>
          <Category>Hills</Category>
          <LoactionContainer>
            <LocationIcon
              src={require("../../assets/images/location.png")}
              alt="image"
            />
            <LocationName>India</LocationName>
          </LoactionContainer>
        </InfoConatiner>
      </PlaceContainer>
    </>
  );
}

export default Place;
