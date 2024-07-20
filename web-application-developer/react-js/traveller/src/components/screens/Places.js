import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import Header from "./includes/Header";

import axios from "axios";

function Places() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/places/")
      .then((response) => {
        setPlaces(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const RenderPlaces = () => {
    return places.map((place) => {
      return (
        <PlaceCard>
          <PlaceCardLink>
            <PlaceImg src={place.featured_image} alt="image" />
            <PlaceBottomContainer>
              <PlaceTitle>{place.name}</PlaceTitle>
              <Location>
                <LocationIconImg
                  src={require("../../assets/images/location.png")}
                  alt="image"
                />
                <LocationName>{place.place}</LocationName>
              </Location>
            </PlaceBottomContainer>
          </PlaceCardLink>
        </PlaceCard>
      );
    });
  };

  return (
    <>
      <Helmet>
        <title>Places | Travel Guide</title>
      </Helmet>
      <Header />
      <TopContainer>
        <Heading>Welcome Saadh</Heading>
        <Paragraph>Explore the world around you.</Paragraph>
      </TopContainer>
      <PlacesContainer>{RenderPlaces()}</PlacesContainer>
    </>
  );
}

const TopContainer = styled.div`
  width: 90%;
  margin: 30px auto 0;
`;
const Heading = styled.h1``;
const Paragraph = styled.p``;

const PlacesContainer = styled.ul``;
const PlaceCard = styled.li``;
const PlaceCardLink = styled.a``;
const PlaceImg = styled.img`
  width: 300px;
  height: 200px;
`;
const PlaceBottomContainer = styled.div``;
const PlaceTitle = styled.h2``;
const Location = styled.p``;
const LocationIconImg = styled.img`
  width: 20px;
  height: 20px;
`;
const LocationName = styled.span``;

export default Places;
