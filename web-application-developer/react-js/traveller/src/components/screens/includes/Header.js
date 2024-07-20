import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <LogoImg
        src={require("../../../assets/images/logo.png")}
        alt="Website Logo"
      />
      <RightContanier>
        <Button>Login</Button>
      </RightContanier>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RightContanier = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 200px;
  display: block;
`;

const Button = styled.button`
  background-color: #046bf7;
  border-radius: 4px;
  padding: 13px 45px;
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;

export default Header;
