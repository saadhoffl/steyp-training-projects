import React, { useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import Logo from "../assests/link--groginlogodarkpng@2x.png";
import Location from "../assests/link.svg";
import AccountIcon from "../assests/link-1.svg";
import WishlistIcon from "../assests/link-2.svg";
import CartIcon from "../assests/link-3.svg";
import SearchIcon from "../assests/search--button.svg";
import MenuIcon from "../assests/list.png";
import { useNavigate, Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  padding: 20px 50px;
  align-items: center;
  border-bottom: 1px solid rgb(229, 231, 235);
  justify-content: space-between;
  @media (max-width: 447px) {
  padding: 20px 20px;
`;

const ImageContainer = styled.div`
  display: flex;
  width: 120px;
  margin-right: 20px;
  min-width: 70px;
  @media (max-width: 767px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const MiddleContainer = styled.div`
  display: flex;
  margin-right: 20px;
`;

const RightContainer = styled.div`
  display: flex;
`;

const LocationDiv = styled.div`
  display: flex;
  min-width: 100px;
  align-items: center;
  @media (max-width: 767px) {
  display: none;
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

const MenuImage = styled.img`
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

const MenuButton = styled.button`
  margin: auto 0;
  text-align: center;
  border: none;
  background-color: transparent;
  margin-right: 20px;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;

const MenuCloseButton = styled.button`
  margin: auto 0;
  text-align: center;
  border: none;
  background-color: transparent;
  margin-right: 20px;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;

const AccountDiv1 = styled.div`
  margin: 0 auto;
  text-align: center;
  margin-right: 20px;
  @media (max-width: 767px) {
  display: none;
`;

const SearchPlaceholder = styled.input`
  border: none;
  outline: none;
  margin-right: 10px;
  background-color: transparent;
  height: 21.5px;
  display: flex;
  flex-direction: column;
  font-family: Inter;
  font-size: 14px;
  color: #6b7280;
  @media (max-width: 407px) {
    width: 20px;
  }
  @media (max-width: 567px) {
    width: 180px;
  }
  @media (max-width: 887px) {
    max-width: 220px;
  }
  @media (min-width: 1100px) {
    min-width: 500px;
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
  border-radius: 8px;
  background-color: #f3f4f6;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px 9px 10px 18px;
  @media (max-width: 567px) {
    padding: 5px 9px 5px 18px;
  }
`;
const SearchBar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 0px 1.8px;
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

const slideInAnimation = keyframes`
from {
  transform: translateX(-100%);
}
to {
  transform: translateX(0);
}
`;

const MobileNav = styled.div`
  display: none;
  @media (max-width: 767px) {
    &.responsive_nav {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 40%;
      height: 100%;
      background-color: white;
      z-index: 999;
      animation: ${slideInAnimation} 0.3s ease-in-out forwards;
      /* Adjust the animation duration and easing as per your preference */
    }
  }
`;

const MobileNavUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const MobileNavLi = styled.li`
  margin-bottom: 10px;
`;

const LeftContainer = styled.div``;

function MainNavBar({ searchValue, setSearchValue }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

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
      <LeftContainer>
        <ImageContainer>
          <Image src={Logo} alt="" />
        </ImageContainer>
        <MenuButton onClick={showNavBar}>
          <MenuImage src={MenuIcon} alt="" />
        </MenuButton>
        <MobileNav ref={navRef}>
          <MobileNavUl>
            <MobileNavLi>
              <Link to="/">Home</Link>
            </MobileNavLi>
            <MobileNavLi>
              <Link to="/products">Products</Link>
            </MobileNavLi>
            <MobileNavLi>
              <Link to="/about">About</Link>
            </MobileNavLi>
            <MobileNavLi>
              <Link to="/contact">Contact</Link>
            </MobileNavLi>
            <MenuCloseButton onClick={showNavBar}>
              <MenuImage src={MenuIcon} alt="" />
            </MenuCloseButton>
          </MobileNavUl>
        </MobileNav>
      </LeftContainer>
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
