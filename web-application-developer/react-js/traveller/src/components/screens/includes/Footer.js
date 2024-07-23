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
      <LeftContainer>
        <LeftParagraph>© 2024 Travellers, LLC.</LeftParagraph>
      </LeftContainer>
      <RightContainer>
        <List>
          <ListItem>
            <ListItemLink to="/">About</ListItemLink>
          </ListItem>
          <ListItem>
            <ListItemLink to="/">Contact</ListItemLink>
          </ListItem>
          <ListItem>
            <ListItemLink to="/">Terms and Conditions</ListItemLink>
          </ListItem>
        </List>
      </RightContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  background-color: #efefef;
  margin: 0 auto;
  padding: 30px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 70px;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 70px;
`;

const LeftParagraph = styled.p`
  font-size: 14px;
  color: black;
  margin-right: 15px;
  font-weight: bold;
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  margin-right: 15px;
  &:last-child {
    margin-right: 0;
  }
`;

const ListItemLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;
`;

export default Header;
