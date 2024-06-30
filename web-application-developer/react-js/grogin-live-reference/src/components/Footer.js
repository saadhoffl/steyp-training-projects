import FooterContent from "./FooterContent";
import DivfooterInner from "./DivfooterInner";
import styled from "styled-components";
import PropTypes from "prop-types";

const Copyright = styled.span`
  font-weight: 500;
`;
const Klbtheme = styled.span`
  font-weight: 600;
  color: var(--color-darkslateblue-100);
`;
const Copyright2024Container = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 18px;
`;
const ListItemSvg = styled.img`
  width: 36px;
  height: 13px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const MorePayment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) 0px 0px;
`;
const ListItemSvg1 = styled.img`
  align-self: stretch;
  width: 24px;
  position: relative;
  max-height: 100%;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  min-height: 15px;
`;
const ListItemSvg2 = styled.img`
  align-self: stretch;
  width: 53px;
  position: relative;
  max-height: 100%;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  min-height: 15px;
`;
const ListItemSvg3 = styled.img`
  align-self: stretch;
  width: 41px;
  position: relative;
  max-height: 100%;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  min-height: 15px;
`;
const ListItemSvg4 = styled.img`
  align-self: stretch;
  width: 64px;
  position: relative;
  max-height: 100%;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  min-height: 15px;
`;
const PaymentIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const CopyrightInfo = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-2xl-1);
  flex-shrink: 0;
`;
const CopyrightInfoWrapper = styled.div`
  width: 564px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
`;
const NavList = styled.a`
  text-decoration: underline;
  position: relative;
  letter-spacing: -0.32px;
  line-height: 18px;
  color: inherit;
  display: inline-block;
  min-width: 118px;
`;
const NavList1 = styled.a`
  text-decoration: underline;
  position: relative;
  letter-spacing: -0.32px;
  line-height: 18px;
  color: inherit;
  display: inline-block;
  min-width: 75px;
`;
const NavList2 = styled.div`
  position: relative;
  text-decoration: underline;
  letter-spacing: -0.32px;
  line-height: 18px;
  display: inline-block;
  min-width: 80.2px;
`;
const FooterLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs-3);
  flex-shrink: 0;
  color: var(--color-gray-300);
`;
const DivfooterInner1 = styled.div`
  align-self: stretch;
  border-top: 1px solid var(--color-lightgray-100);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--padding-30xl) 0px var(--padding-33xl-9);
  flex-shrink: 0;
  max-width: 100%;
  gap: var(--gap-xl);
  color: var(--color-slategray);
  @media screen and (max-width: 1125px) {
    flex-wrap: wrap;
  }
`;
const DivfooterInnerParent = styled.div`
  width: 1360px;
  height: 512.3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-140xl);
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--font-size-xs);
  color: var(--color-gray-1000);
  @media screen and (max-width: 1325px) {
    height: auto;
  }
  @media screen and (max-width: 800px) {
    padding-bottom: var(--padding-84xl);
    box-sizing: border-box;
  }
`;
const FooterRoot = styled.footer`
  align-self: stretch;
  background-color: var(--color-whitesmoke);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-31xl) var(--padding-xl) 0px;
  box-sizing: border-box;
  gap: var(--gap-34xl-8);
  flex-shrink: 0;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-gray-300);
  font-family: var(--font-inter);
  @media screen and (max-width: 800px) {
    gap: var(--gap-8xl);
    padding-top: var(--padding-13xl);
    box-sizing: border-box;
  }
`;

const Footer = ({ className = "" }) => {
  return (
    <FooterRoot className={className}>
      <FooterContent />
      <DivfooterInnerParent>
        <DivfooterInner />
        <DivfooterInner1>
          <CopyrightInfoWrapper>
            <CopyrightInfo>
              <Copyright2024Container>
                <Copyright>{`Copyright 2024 © Grogin WooCommerce WordPress Theme. All right reserved. Powered by `}</Copyright>
                <Klbtheme>KLBTheme.</Klbtheme>
              </Copyright2024Container>
              <PaymentIcons>
                <MorePayment>
                  <ListItemSvg alt="" src="/list--item--svg@2x.png" />
                </MorePayment>
                <ListItemSvg1 alt="" src="/list--item--svg-1@2x.png" />
                <ListItemSvg2 alt="" src="/list--item--svg-2@2x.png" />
                <ListItemSvg3 alt="" src="/list--item--svg-3@2x.png" />
                <ListItemSvg4 alt="" src="/list--item--svg-4@2x.png" />
              </PaymentIcons>
            </CopyrightInfo>
          </CopyrightInfoWrapper>
          <FooterLinks>
            <NavList>Terms and Conditions</NavList>
            <NavList1>Privacy Policy</NavList1>
            <NavList2>Order Tracking</NavList2>
          </FooterLinks>
        </DivfooterInner1>
      </DivfooterInnerParent>
    </FooterRoot>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
