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
  max-width: 100%;
`;
const UntilTheEnd = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.32px;
  font-weight: 500;
  color: inherit;
  white-space: nowrap;
`;
const UntilTheEndOfTheSaleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) 0px 0px;
`;
const TimerDigitsWrapper = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.32px;
  font-weight: 700;
  color: inherit;
  display: inline-block;
  min-width: 23px;
`;
const Days = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.32px;
  color: inherit;
  display: inline-block;
  min-width: 24px;
`;
const TimerDigitsWrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs-5) var(--padding-9xs) 0px 0px;
  font-size: var(--font-size-2xs);
  color: var(--color-gray-700);
`;
const TimerDigitsWrapper2 = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.32px;
  font-weight: 700;
  color: inherit;
  display: inline-block;
  min-width: 24px;
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
const Placeholder = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.32px;
  font-weight: 700;
  color: inherit;
  display: inline-block;
  min-width: 21px;
`;
const Placeholder1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-10xs) 0px 0px;
`;
const Sec = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.32px;
  color: inherit;
  display: inline-block;
  min-width: 21px;
`;
const TimerDigitsWrapper3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs-5) 0px 0px;
  font-size: var(--font-size-2xs);
  color: var(--color-gray-700);
`;
const CountdownTimerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-11xs) 0px 0px;
  gap: var(--gap-10xs);
  font-size: var(--font-size-lg);
  color: var(--color-white);
`;
const SaleCountdownWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-sm-6);
  max-width: 100%;
  text-align: left;
  color: var(--color-gray-700);
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const DivglobalNotification = styled.div`
  align-self: stretch;
  background-color: var(--color-darkslateblue-100);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-xl) var(--padding-3xs)
    var(--padding-2xl);
  box-sizing: border-box;
  gap: var(--gap-175xl-2);
  max-width: 100%;
  @media screen and (max-width: 1125px) {
    flex-wrap: wrap;
    gap: var(--gap-78xl);
  }
  @media screen and (max-width: 800px) {
    gap: var(--gap-30xl);
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-5xl);
  }
`;
const LinkGroginLogoDarkpng = styled.img`
  height: 34px;
  width: 142px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const LinkIcon = styled.img`
  width: 24px;
  height: 24px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const DeliveryDropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-11xs-8);
`;
const LinkDeliver = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 14px;
  display: inline-block;
  min-width: 47px;
  flex-shrink: 0;
  white-space: nowrap;
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
const AllLocationsDropdownWrapper = styled.div`
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
const LinkDeliverToParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const DeliveryLocationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-mini);
`;
const DeliveryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs-6) 0px 0px;
`;
const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-12xl);
  @media screen and (max-width: 450px) {
    gap: var(--gap-mini);
  }
`;
const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-5xs-8);
  font-size: var(--font-size-2xs);
  color: var(--color-gray-800);
`;
const SearchPlaceholderWrapper = styled.input`
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
const SearchWrapper = styled.div`
  width: 863.8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-11xs-8);
  box-sizing: border-box;
  max-width: 100%;
`;
const LinkIcon1 = styled.img`
  height: 26px;
  width: 26px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const AccountLinkWrapper = styled.div`
  width: 46px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-3xs) 0px var(--padding-4xs);
  box-sizing: border-box;
`;
const LinkAccount = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.32px;
  line-height: 15px;
  font-weight: 500;
  color: inherit;
  display: inline-block;
  min-width: 46px;
`;
const AccountWrapper = styled.div`
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
const Placeholder2 = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.32px;
  line-height: 17px;
  font-weight: 600;
  color: inherit;
  display: inline-block;
  min-width: 7px;
`;
const Link = styled.div`
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
const WishlistCartIcons = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const WishlistCartLinks = styled.div`
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
const WishlistCartWrapper = styled.div`
  width: 43px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mid);
`;
const WishlistCartWrapperInner = styled.div`
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
  white-space: nowrap;
`;
const WishlistCartWrapper1 = styled.div`
  width: 52px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mid);
`;
const DivheaderRow = styled.div`
  position: absolute;
  width: 100%;
  top: 41px;
  right: 0px;
  left: 0px;
  background-color: var(--color-white);
  border-bottom: 1px solid var(--color-gainsboro-100);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  padding: var(--padding-base) var(--padding-xl) var(--padding-mini)
    var(--padding-2xl);
  gap: var(--gap-5xl-2);
  max-width: 100%;
  @media screen and (max-width: 1325px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
const NavListItemLink = styled.div`
  position: absolute;
  top: 169.4px;
  left: 363.3px;
  background-color: var(--color-darkslateblue-100);
  width: 53.1px;
  height: 1px;
`;
const NavList = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.3px;
  line-height: 48px;
  font-weight: 600;
  color: inherit;
  display: inline-block;
  min-width: 42px;
  flex-shrink: 0;
`;
const NavListItemLink1 = styled.img`
  align-self: stretch;
  width: 9.8px;
  position: relative;
  max-height: 100%;
  overflow: hidden;
  flex-shrink: 0;
  min-height: 48px;
`;
const MainNavigationLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6xs-4);
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
const MainNavigationLinks1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6xs-2);
  color: var(--color-darkslateblue-100);
`;
const NavList2 = styled.div`
  margin-bottom: -1px;
  position: relative;
  letter-spacing: -0.3px;
  line-height: 48px;
  font-weight: 600;
  flex-shrink: 0;
  white-space: nowrap;
`;
const TrendingLinkWrapper = styled.div`
  height: 47px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px;
  box-sizing: border-box;
`;
const NavListItem = styled.div`
  align-self: stretch;
  height: 1px;
  position: relative;
  background-color: var(--color-darkslateblue-100);
  flex-shrink: 0;
`;
const TrendingWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: var(--color-darkslateblue-100);
`;
const NavList3 = styled.div`
  position: relative;
  letter-spacing: -0.3px;
  line-height: 48px;
  font-weight: 600;
  display: inline-block;
  min-width: 74.3px;
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
const NavigationLinks = styled.div`
  width: 532.9px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl-6);
  max-width: 100%;
  @media screen and (max-width: 1125px) {
    display: none;
  }
`;
const LinkTrending = styled.div`
  position: relative;
  letter-spacing: -0.3px;
  line-height: 48px;
  font-weight: 600;
  display: inline-block;
  min-width: 129px;
  flex-shrink: 0;
  white-space: nowrap;
  z-index: 2;
`;
const AlmostFinishedWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs-6);
`;
const LinkAlmost = styled.div`
  position: relative;
  letter-spacing: -0.3px;
  line-height: 48px;
  font-weight: 600;
  display: inline-block;
  min-width: 113px;
  white-space: nowrap;
  z-index: 2;
`;
const Sale = styled.b`
  position: relative;
  letter-spacing: -0.3px;
  line-height: 10px;
  display: inline-block;
  min-width: 25px;
`;
const Link1 = styled.div`
  border-radius: var(--br-9xs);
  background: linear-gradient(90deg, #dc2626, #ea580c);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) var(--padding-7xs) var(--padding-7xs);
`;
const SaleBadgeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-sm);
  text-align: center;
  font-size: var(--font-size-3xs);
  color: var(--color-white);
`;
const SaleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-4xs-5);
  color: var(--color-crimson);
`;
const ProductsStatusWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6xl-1);
  max-width: 100%;
`;
const NavigationWrapper = styled.div`
  position: absolute;
  top: 122.4px;
  left: 280px;
  width: 1360px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-xl);
  max-width: 100%;
  font-size: var(--font-size-mini);
  color: var(--color-gray-500);
  @media screen and (max-width: 1125px) {
    width: 827.1px;
  }
`;
const NavList6 = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.32px;
  font-weight: 500;
  color: inherit;
  display: inline-block;
  min-width: 51px;
`;
const NavList7 = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.32px;
  font-weight: 500;
  color: inherit;
  display: inline-block;
  min-width: 64.4px;
`;
const NavList8 = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.32px;
  font-weight: 500;
  color: inherit;
  display: inline-block;
  min-width: 43px;
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
  border-left: 1px solid var(--color-gainsboro-100);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-mini);
`;
const DeliveryInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mini-3);
  max-width: 100%;
  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
`;
const NavList9 = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.32px;
  font-weight: 500;
  color: inherit;
  display: inline-block;
  min-width: 40px;
`;
const NavListItemLink3 = styled.img`
  width: 7.8px;
  height: 10px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const Placeholder3 = styled.div`
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
const NavList10 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  font-weight: 500;
  display: inline-block;
  min-width: 25px;
`;
const LanguageCurrency1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6xs-3);
`;
const NavList11 = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.32px;
  font-weight: 500;
  color: inherit;
  display: inline-block;
  min-width: 82px;
`;
const LanguageCurrencyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mini);
`;
const DivheaderRow1 = styled.div`
  position: absolute;
  width: 100%;
  top: 0px;
  right: 0px;
  left: 0px;
  background-color: var(--color-white);
  border-bottom: 1px solid var(--color-gainsboro-100);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-smi-5) var(--padding-xl) var(--padding-xs)
    var(--padding-2xl);
  gap: var(--gap-665xl-6);
  max-width: 100%;
  z-index: 2;
  font-size: var(--font-size-xs);
  color: var(--color-slategray);
  @media screen and (max-width: 1325px) {
    flex-wrap: wrap;
    gap: var(--gap-323xl);
    justify-content: center;
  }
  @media screen and (max-width: 800px) {
    gap: var(--gap-152xl);
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-67xl);
  }
`;
const Header = styled.div`
  margin-left: -3px;
  align-self: stretch;
  height: 171.4px;
  position: relative;
  border-bottom: 1px solid var(--color-gainsboro-100);
  box-sizing: border-box;
  max-width: 100%;
  z-index: 1;
  margin-top: -2px;
  text-align: left;
  font-size: var(--font-size-3xs);
  color: var(--color-lavenderblush);
  @media screen and (max-width: 1325px) {
    height: auto;
    min-height: 171.4000000000001;
  }
`;
const DeliveryDiscountWrapperRoot = styled.header`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-xs);
  color: var(--color-white);
  font-family: var(--font-inter);
`;

const DeliveryDiscountWrapper = ({ className = "" }) => {
  return (
    <DeliveryDiscountWrapperRoot className={className}>
      <DivglobalNotification>
        <FreeDelivery>{`FREE delivery & 40% Discount for next 3 orders! Place your 1st order in.`}</FreeDelivery>
        <SaleCountdownWrapper>
          <UntilTheEndOfTheSaleWrapper>
            <UntilTheEnd>Until the end of the sale:</UntilTheEnd>
          </UntilTheEndOfTheSaleWrapper>
          <CountdownTimerWrapper>
            <TimerDigitsWrapper>47</TimerDigitsWrapper>
            <TimerDigitsWrapper1>
              <Days>days</Days>
            </TimerDigitsWrapper1>
            <TimerDigitsWrapper2>06</TimerDigitsWrapper2>
            <TimerDigitsWrapper1>
              <Hours>hours</Hours>
            </TimerDigitsWrapper1>
            <TimerDigitsWrapper>52</TimerDigitsWrapper>
            <TimerDigitsWrapper1>
              <Minutes>minutes</Minutes>
            </TimerDigitsWrapper1>
            <Placeholder1>
              <Placeholder>13</Placeholder>
            </Placeholder1>
            <TimerDigitsWrapper3>
              <Sec>sec.</Sec>
            </TimerDigitsWrapper3>
          </CountdownTimerWrapper>
        </SaleCountdownWrapper>
      </DivglobalNotification>
      <Header>
        <DivheaderRow>
          <LogoWrapper>
            <LogoContainer>
              <LinkGroginLogoDarkpng
                loading="lazy"
                alt=""
                src="/link--groginlogodarkpng@2x.png"
              />
              <DeliveryWrapper>
                <DeliveryLocationWrapper>
                  <DeliveryDropdownWrapper>
                    <LinkIcon alt="" src="/link.svg" />
                  </DeliveryDropdownWrapper>
                  <LinkDeliverToParent>
                    <LinkDeliver>Deliver to</LinkDeliver>
                    <AllLocationsDropdownWrapper>
                      <LinkAll>all</LinkAll>
                    </AllLocationsDropdownWrapper>
                  </LinkDeliverToParent>
                </DeliveryLocationWrapper>
              </DeliveryWrapper>
            </LogoContainer>
          </LogoWrapper>
          <SearchWrapper>
            <SearchInput>
              <SearchPlaceholderWrapper
                placeholder="Search for products, categories or brands..."
                type="text"
              />
              <SearchButton alt="" src="/search--button.svg" />
            </SearchInput>
          </SearchWrapper>
          <AccountWrapper>
            <AccountLinkWrapper>
              <LinkIcon1 alt="" src="/link-1.svg" />
            </AccountLinkWrapper>
            <LinkAccount>Account</LinkAccount>
          </AccountWrapper>
          <WishlistCartWrapper>
            <WishlistCartLinks>
              <WishlistCartIcons>
                <LinkIcon2 alt="" src="/link-2.svg" />
                <Link>
                  <Placeholder2>0</Placeholder2>
                </Link>
              </WishlistCartIcons>
            </WishlistCartLinks>
            <LinkWishlist>Wishlist</LinkWishlist>
          </WishlistCartWrapper>
          <WishlistCartWrapper1>
            <WishlistCartWrapperInner>
              <WishlistCartIcons>
                <LinkIcon2 alt="" src="/link-3.svg" />
                <Link>
                  <Placeholder2>0</Placeholder2>
                </Link>
              </WishlistCartIcons>
            </WishlistCartWrapperInner>
            <LinkYour>Your Cart</LinkYour>
          </WishlistCartWrapper1>
        </DivheaderRow>
        <NavListItemLink />
        <NavigationWrapper>
          <NavigationLinks>
            <MainNavigationLinks>
              <NavList>Home</NavList>
              <NavListItemLink1 alt="" src="/nav--list--item--link.svg" />
            </MainNavigationLinks>
            <MainNavigationLinks1>
              <NavList1>Shop</NavList1>
              <NavListItemLink2 alt="" src="/nav--list--item--link-1.svg" />
            </MainNavigationLinks1>
            <TrendingWrapper>
              <TrendingLinkWrapper>
                <NavList2>{`Fruits & Vegetables`}</NavList2>
              </TrendingLinkWrapper>
              <NavListItem />
            </TrendingWrapper>
            <NavList3>Beverages</NavList3>
            <NavList4>Blog</NavList4>
            <NavList5>Contact</NavList5>
          </NavigationLinks>
          <ProductsStatusWrapper>
            <AlmostFinishedWrapper>
              <LinkTrending>Trending Products</LinkTrending>
              <NavListItemLink1 alt="" src="/link-4.svg" />
            </AlmostFinishedWrapper>
            <SaleWrapper>
              <LinkAlmost>Almost Finished</LinkAlmost>
              <SaleBadgeWrapper>
                <Link1>
                  <Sale>SALE</Sale>
                </Link1>
              </SaleBadgeWrapper>
              <NavListItemLink1 alt="" src="/link-5.svg" />
            </SaleWrapper>
          </ProductsStatusWrapper>
        </NavigationWrapper>
        <DivheaderRow1>
          <DeliveryInfo>
            <NavList6>About Us</NavList6>
            <NavList7>My account</NavList7>
            <NavList8>Wishlist</NavList8>
            <DivheaderText>
              <WeDeliverToContainer>
                <WeDeliverTo>{`We deliver to you every day from `}</WeDeliverTo>
                <To>7:00 to 23:00</To>
              </WeDeliverToContainer>
            </DivheaderText>
          </DeliveryInfo>
          <LanguageCurrencyWrapper>
            <LanguageCurrency>
              <NavList9>English</NavList9>
              <Placeholder3>
                <NavListItemLink3 alt="" src="/nav--list--item--link-2.svg" />
              </Placeholder3>
            </LanguageCurrency>
            <LanguageCurrency1>
              <NavList10>USD</NavList10>
              <Placeholder3>
                <NavListItemLink3 alt="" src="/nav--list--item--link-3.svg" />
              </Placeholder3>
            </LanguageCurrency1>
            <NavList11>Order Tracking</NavList11>
          </LanguageCurrencyWrapper>
        </DivheaderRow1>
      </Header>
    </DeliveryDiscountWrapperRoot>
  );
};

DeliveryDiscountWrapper.propTypes = {
  className: PropTypes.string,
};

export default DeliveryDiscountWrapper;
