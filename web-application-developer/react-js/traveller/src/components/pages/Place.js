import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "../screens/includes/Header";
import Footer from "../screens/includes/Footer";
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
      <Footer />
    </>
  );
}

const PlaceContainer = styled.div`
  width: 70%;
  margin: 40px auto 70px;
  @media (max-width: 900px) {
    width: 80%;
  }
  @media (max-width: 500px) {
    width: 88%;
  }
`;

const Title = styled.h1`
  margin-bottom: 15px;
  color: black;
  font-weight: 600;
  font-size: 2.6vw;
  @media (max-width: 900px) {
    font-size: 3.2vw;
  }
  @media (max-width: 700px) {
    font-size: 3.9vw;
  }
  @media (max-width: 500px) {
    font-size: 4.7vw;
  }
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
  margin-bottom: 20px;
  font-size: 2.3vw;
  @media (max-width: 900px) {
    font-size: 3.1vw;
  }
  @media (max-width: 700px) {
    font-size: 3.7vw;
  }
  @media (max-width: 500px) {
    font-size: 4.7vw;
  }
  @media (max-width: 400px) {
    font-size: 5.9vw;
  }
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.6em;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export default Place;
