import { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";

function Header() {
  const { userData, updateUserData } = useContext(UserContext);
  const handleLogout = () => {
    updateUserData({ type: "LOGOUT" });
  };
  return (
    <HeaderContainer>
      <Link to="/">
        <LogoImg
          src={require("../../../assets/images/logo.png")}
          alt="Website Logo"
        />
      </Link>
      <RightContanier>
        {userData ? (
          <Button onClick={() => handleLogout()}>Logout</Button>
        ) : (
          <Button to="/auth/login">Sign In</Button>
        )}
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
  width: 20vw;
  display: block;
  @media (max-width: 720px) {
    width: 25vw;
  }
  @media (max-width: 500px) {
    width: 31vw;
  }
  @media (max-width: 400px) {
    width: 37vw;
  }
`;

const Button = styled(Link)`
  background-color: #046bf7;
  border-radius: 4px;
  padding: 2.2vh 3vw;
  color: white;
  font-size: 1.5vw;
  font-weight: bold;
  cursor: pointer;
  @media (max-width: 900px) {
    font-size: 1.7vw;
  }
  @media (max-width: 800px) {
    font-size: 2vw;
  }
  @media (max-width: 600px) {
    font-size: 2.5vw;
  }
  @media (max-width: 440px) {
    font-size: 2.8vw;
  }
  @media (max-width: 370px) {
    font-size: 3vw;
  }
`;

export default Header;
