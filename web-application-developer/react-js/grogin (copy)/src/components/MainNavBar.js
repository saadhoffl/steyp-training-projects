import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../assests/link--groginlogodarkpng@2x.png";
import Location from "../assests/link.svg";
import AccountIcon from "../assests/link-1.svg";
import WishlistIcon from "../assests/link-2.svg";
import CartIcon from "../assests/link-3.svg";
import SearchIcon from "../assests/search--button.svg";
import { useNavigate } from "react-router-dom";

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
  cursor: pointer;
  clickable: true;
  &:active {
    transform: scale(0.9);
  }
`;

const LocationTitle = styled.div`
  font-size: 13px;
`;

const LocationValue = styled.div`
  font-size: 11px;
`;

const AccountTilte = styled.div`
  font-size: 13px;
  cursor: pointer;
  clickable: true;
  &:active {
    transform: scale(0.9);
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

const AccountDiv = styled.div`
  margin: 0 auto;
  text-align: center;
  margin-right: 20px;
  cursor: pointer;
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

const SearchPlaceholder = styled.input`
  width: 276px;
  border: none;
  outline: none;
  background-color: transparent;
  height: 21.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 4.5px 0px 0px;
  box-sizing: border-box;
  font-family: Inter;
  font-size: 14px;
  color: #6b7280;
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
`;
const SearchButton = styled.img`
  height: 26px;
  width: 26px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 1;
  cursor: pointer;
  clickable: true;
  &:active {
    transform: scale(0.95);
  }
`;
const SearchInput1 = styled.div`
  align-self: stretch;
  border-radius: 8px;
  background-color: #f3f4f6;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px 9px 10px 18px;
  gap: 20px;
`;
const SearchBar = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px 1.8px;
  box-sizing: border-box;
  min-width: 562px;
  max-width: 100%;
  @media screen and (max-width: 1125px) {
    min-width: 100%;
  }
`;

const DropDownContent = styled.div`
  display: "block";
  position: absolute;
  background-color: #f1f1f1;
  min-width: 170px;
  margin-top: 5px;
  text-align: start;
  padding: 10px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const LogOutButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

function MainNavBar({ searchValue, setSearchValue }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  const navigate = useNavigate();

  const handleAccountClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    // Add logout logic here
    localStorage.removeItem("user_data");
    navigate("/signin");
  };

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
        <SearchBar>
          <SearchInput1>
            <SearchPlaceholder
              placeholder="Search for products, categories or brands..."
              type="text"
              value={searchValue}
              onChange={handleSearchInputChange}
            />
            <SearchButton
              alt=""
              src={SearchIcon}
              onClick={() =>
                handleSearchInputChange({ target: { value: searchValue } })
              }
            />
          </SearchInput1>
        </SearchBar>
      </MiddleContainer>
      <RightContainer>
        <AccountDiv onClick={handleAccountClick}>
          <AccountImage src={AccountIcon} alt="" />
          <AccountTilte>Account</AccountTilte>
          {showDropdown && (
            <DropDownContent onClick={handleLogout}>
              <LogOutButton onClick={handleLogout}>Logout</LogOutButton>
            </DropDownContent>
          )}
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
