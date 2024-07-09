import styled from "styled-components";
import PropTypes from "prop-types";
import { Link as NavLink } from "react-router-dom";

const NavList = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.3px;
  line-height: 48px;
  font-weight: 600;
  color: black;
  display: inline-block;
  min-width: 42px;
  flex-shrink: 0;
`;

const NavListItemLink = styled.img`
  align-self: stretch;
  width: 9.8px;
  position: relative;
  max-height: 100%;
  overflow: hidden;
  flex-shrink: 0;
  min-height: 48px;
`;
const NavListItemLinkHomParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 6.4px;
`;
const NavListItemLink1 = styled.div`
  height: 1px;
  width: 53.1px;
  position: absolute;
  margin: 0 !important;
  right: -16.1px;
  bottom: 0.5px;
  background-color: #634c9f;
`;
const NavList1 = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.3px;
  line-height: 48px;
  font-weight: 600;
  color: inherit;
  display: inline-block;
  min-width: 37px;
  flex-shrink: 0;
`;
const NavListItemLinkParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const NavListItemLink2 = styled.img`
  align-self: stretch;
  width: 9.8px;
  position: relative;
  max-height: 100%;
  overflow: hidden;
  flex-shrink: 0;
  min-height: 48px;
  z-index: 1;
`;
const FrameGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 6.2px;
  color: #634c9f;
`;
const NavList2 = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.3px;
  line-height: 48px;
  font-weight: 600;
  color: inherit;
  flex-shrink: 0;
`;
const NavList3 = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.3px;
  line-height: 48px;
  font-weight: 600;
  color: #030712;
  display: inline-block;
  min-width: 74.3px;
  flex-shrink: 0;
`;
const NavListItemLinkFruParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 24.1px;
  width: 100%;
  height: 100%;
`;
const NavListItem = styled.div`
  position: absolute;
  top: 47px;
  left: 0px;
  background-color: #634c9f;
  width: 135.1px;
  height: 1px;
`;
const FrameContainer = styled.div`
  height: 48px;
  flex: 1;
  position: relative;
  min-width: 152px;
  color: #634c9f;
`;
const NavList4 = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.3px;
  line-height: 48px;
  font-weight: 600;
  color: inherit;
  display: inline-block;
  min-width: 32px;
`;
const NavList5 = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.3px;
  line-height: 48px;
  font-weight: 600;
  color: inherit;
  display: inline-block;
  min-width: 56.4px;
`;
const FrameParent = styled.div`
  width: 532.9px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px;
  box-sizing: border-box;
  gap: 24.7px;
  max-width: 100%;
  @media screen and (max-width: 825px) {
    flex-wrap: wrap;
  }
`;
const LinkTrending = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.3px;
  line-height: 48px;
  font-weight: 600;
  color: inherit;
  display: inline-block;
  min-width: 129px;
  flex-shrink: 0;
`;
const LinkTrendingProductsParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 9.6px;
`;
const LinkAlmost = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.3px;
  line-height: 48px;
  font-weight: 600;
  color: inherit;
  display: inline-block;
  min-width: 113px;
`;
const Sale = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.3px;
  line-height: 10px;
  font-weight: 700;
  color: inherit;
  display: inline-block;
  min-width: 25px;
`;
const Link = styled.div`
  border-radius: 4px;
  background: linear-gradient(90deg, #dc2626, #ea580c);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 4px 6px 6px;
`;
const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px 14px;
  text-align: center;
  font-size: 10px;
  color: #fff;
`;
const LinkAlmostFinishedParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 8.5px;
  color: #dc2626;
`;
const FrameDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px;
  box-sizing: border-box;
  gap: 25.1px;
  max-width: 100%;
  @media screen and (max-width: 825px) {
    flex-wrap: wrap;
  }
`;
const DivheaderRowRoot = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px 50px;
  box-sizing: border-box;
  line-height: normal;
  letter-spacing: normal;
  gap: 7px;
  text-align: left;
  font-size: 15px;
  color: #030712;
  font-family: Inter;
  border-bottom: 1px solid #e5e7eb;
  @media screen and (max-width: 1500px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 1200px) {
    padding-left: 50px;
    padding-right: 50px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 825px) {
    padding-left: 50px;
    padding-right: 50px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const MainMenu = ({ className = "" }) => {
  return (
    <DivheaderRowRoot className={className}>
      <FrameParent>
        <NavListItemLinkHomParent>
          <NavLink to="/">
            <NavList>Home</NavList>
          </NavLink>
          <NavListItemLink
            loading="lazy"
            alt=""
            src="/nav--list--item--link.svg"
          />
        </NavListItemLinkHomParent>
        <FrameGroup>
          <NavListItemLinkParent>
            <NavListItemLink1 />
            <NavList1>Shop</NavList1>
          </NavListItemLinkParent>
          <NavListItemLink2
            loading="lazy"
            alt=""
            src="/nav--list--item--link-1.svg"
          />
        </FrameGroup>
        <FrameContainer>
          <NavListItemLinkFruParent>
            <NavList2>{`Fruits & Vegetables`}</NavList2>
            <NavList3>Beverages</NavList3>
          </NavListItemLinkFruParent>
          <NavListItem />
        </FrameContainer>
        <NavList4>Blog</NavList4>
        <NavList5>Contact</NavList5>
      </FrameParent>
      <FrameDiv>
        <LinkTrendingProductsParent>
          <LinkTrending>Trending Products</LinkTrending>
          <NavListItemLink loading="lazy" alt="" src="/link-4.svg" />
        </LinkTrendingProductsParent>
        <LinkAlmostFinishedParent>
          <LinkAlmost>Almost Finished</LinkAlmost>
          <LinkWrapper>
            <Link>
              <Sale>SALE</Sale>
            </Link>
          </LinkWrapper>
          <NavListItemLink loading="lazy" alt="" src="/link-5.svg" />
        </LinkAlmostFinishedParent>
      </FrameDiv>
    </DivheaderRowRoot>
  );
};

MainMenu.propTypes = {
  className: PropTypes.string,
};

export default MainMenu;
