import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import Header from "./includes/Header";
import { BASE_URL } from "../../axiosConfig";

import axios from "axios";
import { Link } from "react-router-dom";

function Places() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}places/`)
      .then((response) => {
        setPlaces(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const RenderPlaces = () => {
    return places.map((place, index) => {
      return (
        <PlaceCard key={index}>
          <PlaceCardLink to={`/place/${place.id}/`}>
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
const Heading = styled.h1`
  font-size: 32px;
  margin-bottom: 15px;
`;
const Paragraph = styled.p`
  font-size: 20px;
  color: #dfddd5;
`;

const PlacesContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 40px auto 0;
`;
const PlaceCard = styled.li`
  width: 23.5%;
  margin-right: 2%;
  margin-bottom: 25px;
  &:nth-child(4n) {
    margin-right: 0;
  }
`;
const PlaceCardLink = styled(Link)`
  text-decoration: none;
  display: block;
`;
const PlaceImg = styled.img`
  width: 100%;
  display: block;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
const PlaceBottomContainer = styled.div`
  padding: 10px 15px;
  color: black;
  background-color: #ececec;
`;
const PlaceTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 550;
`;
const Location = styled.div`
  display: flex;
  color: #7e7e7e;
`;
const LocationIconImg = styled.img`
  width: 19px;
  height: 18px;
  margin-right: 10px;
`;
const LocationName = styled.span`
  font-size: 17px;
`;

export default Places;
