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
      <HeaderWrapper>
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
      </HeaderWrapper>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  background-color: #efefef;
`;

const HeaderWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 30px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 510px) {
    flex-direction: column;
    line-height: 30px;
  }
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  @media (max-width: 510px) {
    font-size: 13px;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LeftParagraph = styled.p`
  font-size: 15px;
  color: black;
  margin-right: 15px;
  font-weight: bold;
  @media (max-width: 510px) {
    font-size: 13px;
  }
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
