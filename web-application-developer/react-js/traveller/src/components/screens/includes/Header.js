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
  width: 200px;
  display: block;
`;

const Button = styled(Link)`
  background-color: #046bf7;
  border-radius: 4px;
  padding: 13px 45px;
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;

export default Header;
