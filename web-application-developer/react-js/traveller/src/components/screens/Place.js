import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "./includes/Header";
import { BASE_URL } from "../../axiosConfig";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { UserContext } from "../../App";

function Place({ match }) {
  const [place, setPlace] = useState({});
  const { id } = useParams();

  const { userData } = useContext(UserContext);

  useEffect(() => {
    axios
      .get(`${BASE_URL}places/protected/${id}/`, {
        headers: {
          Authorization: `Bearer ${userData?.access}`,
        },
      })
      .then((response) => {
        setPlace(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>{place.name}</title>
      </Helmet>
      <Header />
      <PlaceContainer>
        <Title>{place.name}</Title>
        <InfoContainer>
          <Category>{place.category}</Category>
          <LocationContainer>
            <LocationIcon
              src={require("../../assets/images/location.png")}
              alt="Location Icon"
            />
            <LocationName>{place.place}</LocationName>
          </LocationContainer>
        </InfoContainer>
        <GalleryContainer>
          <GalleryImageItem>
            <GalleryImage src={place.featured_image} alt="Featured Image" />
          </GalleryImageItem>
          {place.gallery &&
            place.gallery.map((image, index) => (
              <GalleryImageItem key={index}>
                <GalleryImage
                  src={image.image}
                  alt={`Gallery Image ${index}`}
                />
              </GalleryImageItem>
            ))}
        </GalleryContainer>
        <SubHeading>Place Details</SubHeading>
        <Description>{place.description}</Description>
      </PlaceContainer>
    </>
  );
}

const PlaceContainer = styled.div`
  width: 70%;
  margin: 40px auto 70px;
`;

const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 15px;
  color: black;
  font-weight: 600;
`;

const InfoContainer = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const Category = styled.span`
  padding: 5px 10px;
  border: 1px solid #9c9c9c;
  border-radius: 20px;
  display: inline-block;
  color: #9c9c9c;
  margin-right: 15px;
`;

const LocationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LocationIcon = styled.img`
  width: 20px;
  margin-right: 6px;
`;

const LocationName = styled.h3`
  color: #9c9c9c;
  font-weight: bold;
  font-size: 16px;
`;

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 35px;
`;

const GalleryImageItem = styled.div`
  &:first-child {
    grid-column-end: span 2;
    grid-row-end: span 2;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;

const SubHeading = styled.h3`
  font-size: 28px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.6em;
`;

export default Place;
