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

const MobileImageContainer = styled.div`
  display: flex;
  width: 90px;
  margin-bottom: 20px;
  min-width: 70px;
  @media (max-width: 767px) {
    display: block;
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
  @media (max-width: 767px) {
    min-width: 25px;
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
  @media (max-width: 767px) {
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
  position: absolute;
  top: 20px;
  right: 0px;
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

const slideOutAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
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
      background-color: rgb(228, 230, 230, 0.97);
      padding: 20px 30px;
      overflow: auto;
      z-index: 999;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
      animation-duration: 0.5s;
      animation-timing-function: ease-in-out;
      &.slide-in {
        animation-name: ${slideInAnimation};
      }
      &.slide-out {
        animation-name: ${slideOutAnimation};
      }
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 500;
`;

const StyledLink1 = styled(Link)`
  text-decoration: none;
  color: #dc2626;
  font-weight: 500;
`;

const StyledLinkRed = styled(Link)`
  background: linear-gradient(90deg, #dc2626, #ea580c);
  border: 1px solid red;
  border-radius: 5px;
  text-align: center;
  margin: auto 0 auto 10px;
  font-size: 13px;
  padding: 2px 4px;
  text-decoration: none;
  color: white;
  font-weight: 450;
`;

const MobileNavUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const MobileNavLi = styled.li`
  margin-bottom: 10px;
`;

const HrLine = styled.hr`
  border: 1px solid #d1d5db;
  margin: 0px 0px 20px 0px;
`;

const NavHeading = styled.h3`
  margin: 0px 0px 15px 0px;
  font-size: 15px;
  font-weight: 600;
  color: #6b7280;
`;

const LeftContainer = styled.div``;

function MainNavBar({ searchValue, setSearchValue }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const navRef = useRef();

  const showNavBar = () => {
    if (navRef.current.classList.contains("responsive_nav")) {
      navRef.current.classList.toggle("slide-out");
      navRef.current.classList.toggle("slide-in");
      setTimeout(() => {
        navRef.current.classList.toggle("responsive_nav");
        navRef.current.classList.toggle("slide-out");
      }, 480);
    } else {
      navRef.current.classList.toggle("responsive_nav");
      navRef.current.classList.toggle("slide-in");
    }
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
          <MobileImageContainer>
            <Image src={Logo} alt="" />
          </MobileImageContainer>
          <HrLine></HrLine>
          <NavHeading>Menu</NavHeading>
          <MobileNavUl>
            <MobileNavLi>
              <StyledLink to="/">Home</StyledLink>
            </MobileNavLi>
            <MobileNavLi>
              <StyledLink to="/">Shop</StyledLink>
            </MobileNavLi>
            <MobileNavLi>
              <StyledLink to="/">Fruits & Vegetables</StyledLink>
            </MobileNavLi>
            <MobileNavLi>
              <StyledLink to="/">Beverages</StyledLink>
            </MobileNavLi>
            <MobileNavLi>
              <StyledLink to="/">Blog</StyledLink>
            </MobileNavLi>
            <MobileNavLi>
              <StyledLink to="/">Contact</StyledLink>
            </MobileNavLi>
            <MobileNavLi>
              <StyledLink to="/">Trending Products</StyledLink>
            </MobileNavLi>
            <MobileNavLi>
              <StyledLink1 to="/">Almost Finished</StyledLink1>
              <StyledLinkRed to="/">Sale</StyledLinkRed>
            </MobileNavLi>
          </MobileNavUl>
          <MenuCloseButton onClick={showNavBar}>
            <MenuImage src={MenuIcon} alt="" />
          </MenuCloseButton>
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
