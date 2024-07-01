import React from "react";
import styled from "styled-components";
import Logo from "../assests/link--groginlogodarkpng@2x.png";
import Location from "../assests/link.svg";
import AccountIcon from "../assests/link-1.svg";
import WishlistIcon from "../assests/link-2.svg";
import CartIcon from "../assests/link-3.svg";

const Container = styled.div`
  display: flex;
  padding: 20px 50px;
  align-items: center;
  border-bottom: 1px solid rgb(229, 231, 235);
  justify-content: space-between;
  @media (max-width: 690px) {
    padding: 5px 10px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  width: 150px;
  margin-right: 30px;
  @media (max-width: 795px) {
    width: 68px;
    height: 19px;
    margin-right: 5px;
  }
  @media (max-width: 525px) {
    width: 65px;
    height: 17px;
    margin-right: 5px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const MiddleContainer = styled.div`
  display: flex;
`;

const RightContainer = styled.div`
  display: flex;
`;

const LocationDiv = styled.div`
  display: flex;
  min-width: 100px;
  align-items: center;
  @media (max-width: 690px) {
    display: none;
  }
`;

const LocationIn = styled.div`
  font-size: 13px;
`;

const LocationImage = styled.img`
  width: 20px;
`;

const AccountImage = styled.img`
  width: 20px;
`;

const LocationTitle = styled.div`
  font-size: 13px;
`;

const LocationValue = styled.div`
  font-size: 11px;
`;

const AccountTilte = styled.div`
  font-size: 13px;
  @media (max-width: 500px) {
    display: none;
  }
`;

const AccountDiv = styled.div`
  margin: 0 auto;
  text-align: center;
  margin-right: 20px;
  @media (max-width: 690px) {
    margin-right: 10px;
  }
`;

const AccountDiv1 = styled.div`
  margin: 0 auto;
  text-align: center;
  margin-right: 20px;
  @media (max-width: 580px) {
  display: none;
`;

const Input = styled.input`
  margin-left: 20px;
  margin-right: 20px;
  align-self: center;
  width: 500px;
  height: 30px;
  @media (max-width: 1000px) {
    width: 350px;
    height: 30px;
  }
  @media (max-width: 925px) {
    width: 250px;
    height: 30px;
  }
  @media (max-width: 800px) {
    width: 200px;
    height: 30px;
  }
  @media (max-width: 720px) {
    width: 150px;
    height: 20px;
    margin-left: 10px;
    margin-right: 10px;
  }
  @media (max-width: 575px) {
    width: 200px;
    height: 15px;
    margin-left: 10px;
    margin-right: 10px;
  }
  @media (max-width: 375px) {
    width: 100px;
    height: 15px;
    @media (max-width: 220px) {
      width: 70px;
      height: 15px;
      margin-left: 10px;
      margin-right: 10px;
    }
  }
`;

function MainNavBar() {
  return (
    <Container>
      <ImageContainer>
        <Image src={Logo} alt="" />
      </ImageContainer>
      <MiddleContainer>
        <LocationDiv>
          <LocationImage src={Location} />
          <LocationIn>
            <LocationTitle>Deliver to</LocationTitle>
            <LocationValue>All</LocationValue>
          </LocationIn>
        </LocationDiv>
        <Input type="text" placeholder="Search" />
      </MiddleContainer>
      <RightContainer>
        <AccountDiv>
          <AccountImage src={AccountIcon} alt="" />
          <AccountTilte>Account</AccountTilte>
        </AccountDiv>
        <AccountDiv1>
          <AccountImage src={WishlistIcon} alt="" />
          <AccountTilte>Wishlist</AccountTilte>
        </AccountDiv1>
        <AccountDiv1>
          <AccountImage src={CartIcon} alt="" />
          <AccountTilte>Your Cart</AccountTilte>
        </AccountDiv1>
      </RightContainer>
    </Container>
  );
}

export default MainNavBar;
