import styled from "styled-components";
import PropTypes from "prop-types";

const FreeDelivery = styled.div`
  width: 389.1px;
  position: relative;
  letter-spacing: -0.32px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  white-space: nowrap;
  @media screen and (max-width: 750px) {
    display: none;
  }
`;
const UntilTheEnd = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.32px;
  font-weight: 500;
  color: inherit;
  white-space: nowrap;
  @media screen and (max-width: 750px) {
    display: none;
  }
`;
const SaleTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) 0px 0px;
  @media screen and (max-width: 750px) {
    display: none;
  }
`;
const CountdownUnits = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.32px;
  font-weight: 700;
  color: inherit;
  display: inline-block;
  min-width: 23px;
  white-space: nowrap;
`;
const Days = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.32px;
  color: inherit;
  display: inline-block;
  min-width: 24px;
`;
const CountdownUnits1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs-5) var(--padding-9xs) 0px 0px;
  font-size: var(--font-size-2xs);
  color: var(--color-gray-700);
`;
const CountdownUnits2 = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.32px;
  font-weight: 700;
  color: inherit;
  display: inline-block;
  min-width: 24px;
  white-space: nowrap;
`;
const Hours = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.32px;
  color: inherit;
  display: inline-block;
  min-width: 28.1px;
`;
const Minutes = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.32px;
  color: inherit;
  display: inline-block;
  min-width: 39.2px;
`;
const Sec = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.32px;
  color: inherit;
  display: inline-block;
  min-width: 21px;
`;
const CountdownUnits3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs-5) 0px 0px;
  font-size: var(--font-size-2xs);
  color: var(--color-gray-700);
`;
const CountdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-10xs);
  font-size: var(--font-size-lg);
  color: var(--color-white);
`;
const DiscountBackground = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-sm-6);
  max-width: 100%;
  text-align: left;
  color: var(--color-gray-700);
`;
const Notification1 = styled.header`
  align-self: stretch;
  background-color: var(--color-darkslateblue-100);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-xl) var(--padding-3xs)
    var(--padding-2xl);
  box-sizing: border-box;
  gap: var(--gap-175xl-1);
  top: 0;
  z-index: 99;
  position: sticky;
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-xs);
  color: var(--color-white);
  font-family: var(--font-inter);
  @media screen and (max-width: 1100px) {
    gap: var(--gap-78xl);
  }
  @media screen and (max-width: 750px) {
    gap: var(--gap-30xl);
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-5xl);
  }
`;
const NavList = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.32px;
  font-weight: 500;
  color: inherit;
  display: inline-block;
  min-width: 51px;
  flex-shrink: 0;
`;
const NavList1 = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.32px;
  font-weight: 500;
  color: inherit;
  display: inline-block;
  min-width: 64.4px;
  flex-shrink: 0;
`;
const NavList2 = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.32px;
  font-weight: 500;
  color: inherit;
  display: inline-block;
  min-width: 43px;
  flex-shrink: 0;
`;
const WeDeliverTo = styled.span``;
const To = styled.b`
  color: var(--color-orangered);
`;
const WeDeliverToContainer = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  white-space: nowrap;
`;
const DivheaderText = styled.div`
  flex: 1;
  border-left: 1px solid var(--color-gainsboro-100);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-mini);
  min-width: 175px;
`;
const TopNavigation = styled.div`
  width: 471.3px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mini-3);
  max-width: 100%;
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
  }
`;
const NavList3 = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.32px;
  font-weight: 500;
  color: inherit;
  display: inline-block;
  min-width: 40px;
  flex-shrink: 0;
`;
const NavListItemLink = styled.img`
  width: 7.8px;
  height: 10px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const EmptySelectionPlaceholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs-5) 0px 0px;
`;
const LanguageCurrency = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6xs-2);
`;
const NavList4 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  font-weight: 500;
  display: inline-block;
  min-width: 25px;
  flex-shrink: 0;
`;
const LanguageCurrency1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6xs-3);
`;
const NavList5 = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.32px;
  font-weight: 500;
  color: inherit;
  display: inline-block;
  min-width: 82px;
`;
const LanguageCurrencySelection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mini);
`;
const Row = styled.div`
  align-self: stretch;
  background-color: var(--color-white);
  border-bottom: 1px solid var(--color-gainsboro-100);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--padding-smi-5) var(--padding-260xl) var(--padding-xs)
    var(--padding-261xl);
  max-width: 100%;
  gap: var(--gap-xl);
  z-index: 2;
  @media screen and (max-width: 1275px) {
    flex-wrap: wrap;
    justify-content: center;
  }
  @media screen and (max-width: 1100px) {
    padding-left: var(--padding-121xl);
    padding-right: var(--padding-120xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 750px) {
    padding-left: var(--padding-51xl);
    padding-right: var(--padding-50xl);
    box-sizing: border-box;
  }
`;
const LinkGroginLogoDarkpng = styled.img`
  align-self: stretch;
  height: 34px;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const LogoContainer = styled.div`
  width: 142px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-5xs-8);
  box-sizing: border-box;
`;
const LinkIcon = styled.img`
  position: absolute;
  top: 7px;
  left: 8px;
  width: 24px;
  height: 24px;
  overflow: hidden;
`;
const Link = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-lgi-5);
  background-color: var(--color-darkslateblue-200);
  width: 100%;
  height: 100%;
  z-index: 1;
`;
const SearchInputContainer = styled.div`
  height: 38px;
  width: 40px;
  position: relative;
`;
const LinkDeliver = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 14px;
  display: inline-block;
  min-width: 47px;
  flex-shrink: 0;
`;
const LinkAll = styled.a`
  margin-top: -0.8px;
  text-decoration: none;
  position: relative;
  letter-spacing: -0.32px;
  line-height: 16px;
  font-weight: 500;
  color: inherit;
  display: inline-block;
  min-width: 13px;
  flex-shrink: 0;
`;
const DeliveryArea = styled.div`
  height: 15.2px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px;
  box-sizing: border-box;
  font-size: var(--font-size-smi);
  color: var(--color-gray-500);
`;
const SearchDropdown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const SearchDropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs-6) 0px 0px;
`;
const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6xs);
`;
const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-7xs-8);
  font-size: var(--font-size-2xs);
  color: var(--color-gray-800);
`;
const SearchPlaceholderContainer = styled.input`
  width: 276px;
  border: none;
  outline: none;
  background-color: transparent;
  height: 21.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs-5) 0px 0px;
  box-sizing: border-box;
  font-family: var(--font-inter);
  font-size: var(--font-size-sm);
  color: var(--color-slategray);
`;
const SearchButton = styled.img`
  height: 26px;
  width: 26px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 1;
`;
const SearchInput = styled.div`
  align-self: stretch;
  border-radius: var(--br-5xs);
  background-color: var(--color-whitesmoke);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--padding-3xs) var(--padding-4xs) var(--padding-3xs)
    var(--padding-lg);
  gap: var(--gap-xl);
`;
const SearchInputWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-11xs-8);
  box-sizing: border-box;
  min-width: 562px;
  max-width: 100%;
  @media screen and (max-width: 1275px) {
    min-width: 100%;
  }
`;
const LinkIcon1 = styled.img`
  height: 26px;
  width: 26px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const UserAccountLinkContainer = styled.div`
  width: 46px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-3xs) 0px var(--padding-4xs);
  box-sizing: border-box;
`;
const LinkAccount = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 15px;
  font-weight: 500;
  display: inline-block;
  min-width: 46px;
`;
const UserAccountLinkContainerParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
  font-size: var(--font-size-xs);
  color: var(--color-gray-500);
`;
const LinkIcon2 = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  bottom: -13px;
  left: -15px;
  overflow: hidden;
  flex-shrink: 0;
`;
const EmptyWishlistCart = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.32px;
  line-height: 17px;
  font-weight: 600;
  color: inherit;
  display: inline-block;
  min-width: 7px;
`;
const Link1 = styled.div`
  height: 17px;
  flex: 1;
  border-radius: var(--br-4xs-5);
  background-color: var(--color-crimson);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) var(--padding-9xs) 0px var(--padding-8xs);
  box-sizing: border-box;
  z-index: 1;
`;
const WishlistCart = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const WishlistCartContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-10xs) 0px var(--padding-4xl);
`;
const LinkWishlist = styled.div`
  position: relative;
  font-size: var(--font-size-xs);
  letter-spacing: -0.32px;
  line-height: 15px;
  font-weight: 500;
  color: var(--color-gray-500);
  display: inline-block;
  min-width: 43px;
`;
const WishlistCartContainerParent = styled.div`
  width: 43px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mid);
`;
const FrameWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-6xs) 0px var(--padding-8xl);
`;
const LinkYour = styled.div`
  position: relative;
  font-size: var(--font-size-xs);
  letter-spacing: -0.32px;
  line-height: 15px;
  font-weight: 500;
  color: var(--color-gray-500);
  display: inline-block;
  min-width: 52px;
`;
const FrameParent = styled.div`
  width: 52px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mid);
`;
const Header = styled.div`
  align-self: stretch;
  background-color: var(--color-white);
  border-bottom: 1px solid var(--color-gainsboro-100);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--padding-base) var(--padding-260xl) var(--padding-mini)
    var(--padding-261xl);
  gap: var(--gap-4xl-9);
  max-width: 100%;
  font-size: var(--font-size-3xs);
  color: var(--color-lavenderblush);
  @media screen and (max-width: 1100px) {
    padding-left: var(--padding-121xl);
    padding-right: var(--padding-120xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 750px) {
    padding-left: var(--padding-51xl);
    padding-right: var(--padding-50xl);
    box-sizing: border-box;
  }
`;
const LinkHome = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.3px;
  line-height: 48px;
  font-weight: 600;
  color: inherit;
  display: inline-block;
  min-width: 42px;
`;
const LinkIcon3 = styled.img`
  align-self: stretch;
  width: 9.8px;
  position: relative;
  max-height: 100%;
  overflow: hidden;
  flex-shrink: 0;
  min-height: 48px;
`;
const LinkHomeParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6xs-4);
`;
const Shop = styled.div`
  position: relative;
  letter-spacing: -0.3px;
  line-height: 48px;
  font-weight: 600;
  display: inline-block;
  min-width: 37px;
`;
const FruitsVegetables = styled.div`
  position: relative;
  letter-spacing: -0.3px;
  line-height: 48px;
  font-weight: 600;
`;
const Beverages = styled.div`
  position: relative;
  letter-spacing: -0.3px;
  line-height: 48px;
  font-weight: 600;
  display: inline-block;
  min-width: 74.3px;
`;
const Blog = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.3px;
  line-height: 48px;
  font-weight: 600;
  color: inherit;
  display: inline-block;
  min-width: 32px;
`;
const Contact = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.3px;
  line-height: 48px;
  font-weight: 600;
  color: inherit;
  display: inline-block;
  min-width: 56.4px;
`;
const NavigationLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl-6);
  max-width: 100%;
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
  }
`;
const TrendingProducts = styled.div`
  position: relative;
  letter-spacing: -0.3px;
  line-height: 48px;
  font-weight: 600;
  display: inline-block;
  min-width: 129px;
  flex-shrink: 0;
`;
const TrendingProductsParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs-6);
`;
const AlmostFinished = styled.div`
  position: relative;
  letter-spacing: -0.3px;
  line-height: 48px;
  font-weight: 600;
  display: inline-block;
  min-width: 113px;
  z-index: 2;
`;
const Sale = styled.b`
  position: relative;
  letter-spacing: -0.3px;
  line-height: 10px;
  display: inline-block;
  min-width: 25px;
`;
const Link2 = styled.div`
  border-radius: var(--br-9xs);
  background: linear-gradient(90deg, #dc2626, #ea580c);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) var(--padding-7xs) var(--padding-7xs);
`;
const AlmostFinishedLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-sm);
  text-align: center;
  font-size: var(--font-size-3xs);
  color: var(--color-white);
`;
const AlmostFinishedParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-4xs-5);
  color: var(--color-crimson);
`;
const PromotionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6xl-1);
  max-width: 100%;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const NavigationMenu = styled.div`
  width: 1360px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 100%;
  gap: var(--gap-xl);
  @media screen and (max-width: 1100px) {
    flex-wrap: wrap;
  }
`;
const NavigationMenuWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--font-size-mini);
  color: var(--color-gray-500);
`;
const Header1 = styled.div`
  align-self: stretch;
  border-bottom: 1px solid var(--color-gainsboro-100);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-12xs-5);
  max-width: 100%;
  z-index: 1;
`;
const NotificationParentRoot = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  flex-shrink: 0;
  text-align: left;
  font-size: var(--font-size-xs);
  color: var(--color-slategray);
  font-family: var(--font-inter);
`;

const FrameComponent3 = ({ className = "" }) => {
  return (
    <NotificationParentRoot className={className}>
      <Notification1>
        <FreeDelivery>{`FREE delivery & 40% Discount for next 3 orders! Place your 1st order in.`}</FreeDelivery>
        <DiscountBackground>
          <SaleTimeContainer>
            <UntilTheEnd>Until the end of the sale:</UntilTheEnd>
          </SaleTimeContainer>
          <CountdownContainer>
            <CountdownUnits>47</CountdownUnits>
            <CountdownUnits1>
              <Days>days</Days>
            </CountdownUnits1>
            <CountdownUnits2>06</CountdownUnits2>
            <CountdownUnits1>
              <Hours>hours</Hours>
            </CountdownUnits1>
            <CountdownUnits2>50</CountdownUnits2>
            <CountdownUnits1>
              <Minutes>minutes</Minutes>
            </CountdownUnits1>
            <CountdownUnits2>02</CountdownUnits2>
            <CountdownUnits3>
              <Sec>sec.</Sec>
            </CountdownUnits3>
          </CountdownContainer>
        </DiscountBackground>
      </Notification1>
      <Header1>
        <Row>
          <TopNavigation>
            <NavList>About Us</NavList>
            <NavList1>My account</NavList1>
            <NavList2>Wishlist</NavList2>
            <DivheaderText>
              <WeDeliverToContainer>
                <WeDeliverTo>{`We deliver to you every day from `}</WeDeliverTo>
                <To>7:00 to 23:00</To>
              </WeDeliverToContainer>
            </DivheaderText>
          </TopNavigation>
          <LanguageCurrencySelection>
            <LanguageCurrency>
              <NavList3>English</NavList3>
              <EmptySelectionPlaceholder>
                <NavListItemLink alt="" src="/nav--list--item--link-2.svg" />
              </EmptySelectionPlaceholder>
            </LanguageCurrency>
            <LanguageCurrency1>
              <NavList4>USD</NavList4>
              <EmptySelectionPlaceholder>
                <NavListItemLink alt="" src="/nav--list--item--link-3.svg" />
              </EmptySelectionPlaceholder>
            </LanguageCurrency1>
            <NavList5>Order Tracking</NavList5>
          </LanguageCurrencySelection>
        </Row>
        <Header>
          <LogoContainer>
            <LinkGroginLogoDarkpng
              loading="lazy"
              alt=""
              src="/link--groginlogodarkpng@2x.png"
            />
          </LogoContainer>
          <SearchBarContainer>
            <SearchBar>
              <SearchInputContainer>
                <LinkIcon loading="lazy" alt="" src="/link.svg" />
                <Link />
              </SearchInputContainer>
              <SearchDropdownContainer>
                <SearchDropdown>
                  <LinkDeliver>Deliver to</LinkDeliver>
                  <DeliveryArea>
                    <LinkAll>all</LinkAll>
                  </DeliveryArea>
                </SearchDropdown>
              </SearchDropdownContainer>
            </SearchBar>
          </SearchBarContainer>
          <SearchInputWrapper>
            <SearchInput>
              <SearchPlaceholderContainer
                placeholder="Search for products, categories or brands..."
                type="text"
              />
              <SearchButton alt="" src="/search--button.svg" />
            </SearchInput>
          </SearchInputWrapper>
          <UserAccountLinkContainerParent>
            <UserAccountLinkContainer>
              <LinkIcon1 loading="lazy" alt="" src="/link-1.svg" />
            </UserAccountLinkContainer>
            <LinkAccount>Account</LinkAccount>
          </UserAccountLinkContainerParent>
          <WishlistCartContainerParent>
            <WishlistCartContainer>
              <WishlistCart>
                <LinkIcon2 loading="lazy" alt="" src="/link-2.svg" />
                <Link1>
                  <EmptyWishlistCart>0</EmptyWishlistCart>
                </Link1>
              </WishlistCart>
            </WishlistCartContainer>
            <LinkWishlist>Wishlist</LinkWishlist>
          </WishlistCartContainerParent>
          <FrameParent>
            <FrameWrapper>
              <WishlistCart>
                <LinkIcon2 loading="lazy" alt="" src="/link-3.svg" />
                <Link1>
                  <EmptyWishlistCart>0</EmptyWishlistCart>
                </Link1>
              </WishlistCart>
            </FrameWrapper>
            <LinkYour>Your Cart</LinkYour>
          </FrameParent>
        </Header>
        <NavigationMenuWrapper>
          <NavigationMenu>
            <NavigationLinksContainer>
              <LinkHomeParent>
                <LinkHome>Home</LinkHome>
                <LinkIcon3
                  loading="lazy"
                  alt=""
                  src="/nav--list--item--link.svg"
                />
              </LinkHomeParent>
              <LanguageCurrency>
                <Shop>Shop</Shop>
                <LinkIcon3 loading="lazy" alt="" src="/-link-1.svg" />
              </LanguageCurrency>
              <FruitsVegetables>{`Fruits & Vegetables`}</FruitsVegetables>
              <Beverages>Beverages</Beverages>
              <Blog>Blog</Blog>
              <Contact>Contact</Contact>
            </NavigationLinksContainer>
            <PromotionsContainer>
              <TrendingProductsParent>
                <TrendingProducts>Trending Products</TrendingProducts>
                <LinkIcon3 loading="lazy" alt="" src="/link-4.svg" />
              </TrendingProductsParent>
              <AlmostFinishedParent>
                <AlmostFinished>Almost Finished</AlmostFinished>
                <AlmostFinishedLinkContainer>
                  <Link2>
                    <Sale>SALE</Sale>
                  </Link2>
                </AlmostFinishedLinkContainer>
                <LinkIcon3 alt="" src="/link-5.svg" />
              </AlmostFinishedParent>
            </PromotionsContainer>
          </NavigationMenu>
        </NavigationMenuWrapper>
      </Header1>
    </NotificationParentRoot>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
