import FooterContent from "./FooterContent";
import styled from "styled-components";
import PropTypes from "prop-types";

const Heading = styled.div`
  position: relative;
  letter-spacing: -0.28px;
  line-height: 17px;
  font-weight: 600;
`;
const ListItem = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
  display: inline-block;
  min-width: 81.2px;
`;
const ListItem1 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
`;
const ListItem2 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
  display: inline-block;
  min-width: 111px;
`;
const ListItem3 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
  display: inline-block;
  min-width: 117px;
`;
const FirstLinksList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8xs-5);
  font-size: var(--font-size-smi);
  color: var(--color-dimgray-300);
`;
const FirstLinksColumn = styled.div`
  position: absolute;
  top: 51px;
  left: 365px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl-8);
`;
const Heading1 = styled.div`
  position: relative;
  letter-spacing: -0.28px;
  line-height: 17px;
  font-weight: 600;
  display: inline-block;
  min-width: 128px;
`;
const AutoseligenSyrNek = styled.p`
  margin: 0;
`;
const AutoseligenSyrNekContainer = styled.div`
  position: relative;
  font-size: var(--font-size-smi);
  letter-spacing: -0.32px;
  line-height: 19.5px;
  color: var(--color-slategray);
`;
const HelpHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl-8);
  font-size: var(--font-size-sm);
  color: var(--color-gray-300);
`;
const ListItem4 = styled.img`
  width: 28px;
  height: 28px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const WorkingDays = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) 0px 0px;
`;
const ListItem5 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 18px;
`;
const ListItem6 = styled.b`
  position: relative;
  font-size: var(--font-size-xl);
  letter-spacing: -1px;
  line-height: 30px;
  color: var(--color-gray-300);
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
    line-height: 24px;
  }
`;
const WorkingDaysInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-10xs-5);
`;
const WorkingHours = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xl);
`;
const ContactInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-11xs);
`;
const ListItem7 = styled.div`
  position: relative;
  font-size: var(--font-size-sm);
  letter-spacing: -0.32px;
  line-height: 21px;
  font-weight: 600;
  color: var(--color-gray-300);
  display: inline-block;
  min-width: 126px;
  white-space: nowrap;
`;
const EmailInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xs-5);
`;
const HelpHeaderParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xl);
  font-size: var(--font-size-xs);
  color: var(--color-gray-1000);
`;
const GetToKnow = styled.div`
  position: relative;
  font-size: var(--font-size-sm);
  letter-spacing: -0.28px;
  line-height: 17px;
  font-weight: 600;
  color: var(--color-gray-300);
  display: inline-block;
  min-width: 101px;
`;
const CareersForGrogin = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
  display: inline-block;
  min-width: 108px;
`;
const CareerLink = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-4xs-2);
`;
const InverstorRelations = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
  display: inline-block;
  min-width: 108.4px;
`;
const GroginDevices = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
  display: inline-block;
  min-width: 89px;
`;
const CustomerReviews = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
  display: inline-block;
  min-width: 106.1px;
`;
const SocialResponsibility = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
  display: inline-block;
  min-width: 119.2px;
`;
const StoreLocations = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
  display: inline-block;
  min-width: 92px;
`;
const AdditionalLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8xs-5);
`;
const ThirdLinksColumn = styled.div`
  position: absolute;
  top: 0px;
  left: 870px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl-8);
  font-size: var(--font-size-smi);
  color: var(--color-dimgray-300);
`;
const LetUsHelp = styled.div`
  position: relative;
  letter-spacing: -0.28px;
  line-height: 17px;
  font-weight: 600;
  display: inline-block;
  min-width: 103px;
`;
const YourOrders = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
  display: inline-block;
  min-width: 70.1px;
`;
const PrivacyPolicy = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
  color: inherit;
  display: inline-block;
  min-width: 81.1px;
`;
const TermsAndConditions = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
  display: inline-block;
  min-width: 128.1px;
`;
const CookieSettings = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
  display: inline-block;
  min-width: 93px;
`;
const HelpCenter = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
  display: inline-block;
  min-width: 71px;
`;
const FourthLinksColumn = styled.div`
  position: absolute;
  top: 0px;
  left: 617.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl-8);
`;
const DownloadOurApp = styled.div`
  position: relative;
  letter-spacing: -0.28px;
  line-height: 17px;
  font-weight: 600;
  display: inline-block;
  min-width: 119px;
`;
const GooglePlayButtonDarkpngIcon = styled.img`
  height: 38.9px;
  width: 120px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const DownloadAppGetContainer = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 15px;
  font-weight: 500;
`;
const PlatformDiscounts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-9xs-5);
`;
const Platforms = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-sm-7);
`;
const AppLinks = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  font-size: var(--font-size-3xs);
  color: var(--color-slategray);
`;
const DownloadBlock = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-lgi-8);
`;
const FollowUsOn = styled.div`
  position: relative;
  letter-spacing: -0.32px;
`;
const LinkIcon = styled.img`
  height: 36px;
  width: 36px;
  position: relative;
  border-radius: var(--br-7xs);
  min-height: 36px;
`;
const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
`;
const Social = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  font-size: var(--font-size-xs);
`;
const AppDownload = styled.div`
  position: absolute;
  top: 0px;
  left: 1122.5px;
  width: 219.7px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-31xl);
`;
const SecondLinksColumn = styled.div`
  position: absolute;
  top: 51px;
  left: 0px;
  width: 1342.2px;
  height: 253.8px;
`;
const Footer = styled.div`
  align-self: stretch;
  height: 353.3px;
  position: relative;
  border-top: 1px solid var(--color-lightgray-100);
  box-sizing: border-box;
  flex-shrink: 0;
`;
const Copyright = styled.span`
  font-weight: 500;
`;
const Klbtheme = styled.span`
  font-weight: 600;
  color: var(--color-darkslateblue-100);
`;
const SvgIcon = styled.img`
  width: 36px;
  height: 13px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const BadgeLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) 0px 0px;
`;
const SvgIcon1 = styled.img`
  align-self: stretch;
  width: 24px;
  position: relative;
  max-height: 100%;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  min-height: 15px;
`;
const SvgIcon2 = styled.img`
  align-self: stretch;
  width: 53px;
  position: relative;
  max-height: 100%;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  min-height: 15px;
`;
const SvgIcon3 = styled.img`
  align-self: stretch;
  width: 41px;
  position: relative;
  max-height: 100%;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  min-height: 15px;
`;
const SvgIcon4 = styled.img`
  align-self: stretch;
  width: 64px;
  position: relative;
  max-height: 100%;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  min-height: 15px;
`;
const PaymentLogos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const Copyright1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-2xl-1);
  flex-shrink: 0;
`;
const CopyrightBlock = styled.div`
  width: 564px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
`;
const TermsAndConditions1 = styled.a`
  text-decoration: underline;
  position: relative;
  letter-spacing: -0.32px;
  line-height: 18px;
  color: inherit;
  display: inline-block;
  min-width: 118px;
`;
const PrivacyPolicy1 = styled.a`
  text-decoration: underline;
  position: relative;
  letter-spacing: -0.32px;
  line-height: 18px;
  color: inherit;
  display: inline-block;
  min-width: 75px;
`;
const OrderTracking = styled.div`
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
const Footer2 = styled.div`
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
  font-size: var(--font-size-xs);
  color: var(--color-slategray);
  @media screen and (max-width: 1100px) {
    flex-wrap: wrap;
  }
`;
const FooterLinks1 = styled.div`
  width: 1360px;
  height: 512.3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-140xl);
  box-sizing: border-box;
  max-width: 100%;
  flex-shrink: 0;
  @media screen and (max-width: 1100px) {
    height: auto;
  }
  @media screen and (max-width: 750px) {
    padding-bottom: var(--padding-84xl);
    box-sizing: border-box;
  }
`;
const FooterRoot = styled.footer`
  align-self: stretch;
  height: 699.3px;
  background-color: var(--color-whitesmoke);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-31xl) var(--padding-xl) var(--padding-547xl);
  box-sizing: border-box;
  gap: var(--gap-34xl-8);
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--color-gray-300);
  font-family: var(--font-inter);
  @media screen and (max-width: 1275px) {
    padding-top: var(--padding-13xl);
    padding-bottom: var(--padding-349xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 750px) {
    height: auto;
    gap: var(--gap-8xl);
    padding-top: var(--padding-2xl);
    padding-bottom: var(--padding-220xl);
    box-sizing: border-box;
  }
`;

const Footer1 = ({ className = "" }) => {
  return (
    <FooterRoot className={className}>
      <FooterContent />
      <FooterLinks1>
        <Footer>
          <FirstLinksColumn>
            <Heading>Make Money with Us</Heading>
            <FirstLinksList>
              <ListItem>Sell on Grogin</ListItem>
              <ListItem1>Sell Your Services on Grogin</ListItem1>
              <ListItem1>Sell on Grogin Business</ListItem1>
              <ListItem1>Sell Your Apps on Grogin</ListItem1>
              <ListItem2>Become an Affilate</ListItem2>
              <ListItem1>Advertise Your Products</ListItem1>
              <ListItem3>Sell-Publish with Us</ListItem3>
              <ListItem1>Become an Blowwe Vendor</ListItem1>
            </FirstLinksList>
          </FirstLinksColumn>
          <SecondLinksColumn>
            <HelpHeaderParent>
              <HelpHeader>
                <Heading1>Do You Need Help ?</Heading1>
                <AutoseligenSyrNekContainer>
                  <AutoseligenSyrNek>
                    Autoseligen syr. Nek diarask fröbomba. Nör
                  </AutoseligenSyrNek>
                  <AutoseligenSyrNek>
                    antipol kynoda nynat. Pressa fåmoska.
                  </AutoseligenSyrNek>
                </AutoseligenSyrNekContainer>
              </HelpHeader>
              <ContactInfo>
                <WorkingHours>
                  <WorkingDays>
                    <ListItem4 loading="lazy" alt="" src="/list--item-11.svg" />
                  </WorkingDays>
                  <WorkingDaysInfo>
                    <ListItem5>Monday-Friday: 08am-9pm</ListItem5>
                    <ListItem6>0 800 300-353</ListItem6>
                  </WorkingDaysInfo>
                </WorkingHours>
              </ContactInfo>
              <ContactInfo>
                <WorkingHours>
                  <WorkingDays>
                    <ListItem4 loading="lazy" alt="" src="/list--item-2.svg" />
                  </WorkingDays>
                  <EmailInfoContainer>
                    <ListItem5>Need help with your order?</ListItem5>
                    <ListItem7>info@example.com</ListItem7>
                  </EmailInfoContainer>
                </WorkingHours>
              </ContactInfo>
            </HelpHeaderParent>
            <ThirdLinksColumn>
              <GetToKnow>Get to Know Us</GetToKnow>
              <CareerLink>
                <CareersForGrogin>Careers for Grogin</CareersForGrogin>
              </CareerLink>
              <AdditionalLinks>
                <InverstorRelations>Inverstor Relations</InverstorRelations>
                <GroginDevices>Grogin Devices</GroginDevices>
                <CustomerReviews>Customer reviews</CustomerReviews>
                <SocialResponsibility>
                  Social Responsibility
                </SocialResponsibility>
                <StoreLocations>Store Locations</StoreLocations>
              </AdditionalLinks>
            </ThirdLinksColumn>
            <FourthLinksColumn>
              <LetUsHelp>Let Us Help You</LetUsHelp>
              <FirstLinksList>
                <ListItem1>Accessibility Statement</ListItem1>
                <YourOrders>Your Orders</YourOrders>
                <ListItem1>{`Returns & Replacements`}</ListItem1>
                <ListItem1>{`Shipping Rates & Policies`}</ListItem1>
                <ListItem1>Refund and Returns Policy</ListItem1>
                <PrivacyPolicy>Privacy Policy</PrivacyPolicy>
                <TermsAndConditions>Terms and Conditions</TermsAndConditions>
                <CookieSettings>Cookie Settings</CookieSettings>
                <HelpCenter>Help Center</HelpCenter>
              </FirstLinksList>
            </FourthLinksColumn>
            <AppDownload>
              <DownloadBlock>
                <DownloadOurApp>Download our app</DownloadOurApp>
                <AppLinks>
                  <Platforms>
                    <GooglePlayButtonDarkpngIcon
                      loading="lazy"
                      alt=""
                      src="/googleplaybuttondarkpng@2x.png"
                    />
                    <PlatformDiscounts>
                      <DownloadAppGetContainer>
                        <AutoseligenSyrNek>Download App Get</AutoseligenSyrNek>
                        <AutoseligenSyrNek>-10% Discount</AutoseligenSyrNek>
                      </DownloadAppGetContainer>
                    </PlatformDiscounts>
                  </Platforms>
                  <Platforms>
                    <GooglePlayButtonDarkpngIcon
                      loading="lazy"
                      alt=""
                      src="/buttondarkpng@2x.png"
                    />
                    <PlatformDiscounts>
                      <DownloadAppGetContainer>
                        <AutoseligenSyrNek>Download App Get</AutoseligenSyrNek>
                        <AutoseligenSyrNek>-20% Discount</AutoseligenSyrNek>
                      </DownloadAppGetContainer>
                    </PlatformDiscounts>
                  </Platforms>
                </AppLinks>
              </DownloadBlock>
              <Social>
                <FollowUsOn>Follow us on social media:</FollowUsOn>
                <SocialLinks>
                  <LinkIcon loading="lazy" alt="" src="/list--item--link.svg" />
                  <LinkIcon
                    loading="lazy"
                    alt=""
                    src="/list--item--link-1.svg"
                  />
                  <LinkIcon
                    loading="lazy"
                    alt=""
                    src="/list--item--link-2.svg"
                  />
                  <LinkIcon
                    loading="lazy"
                    alt=""
                    src="/list--item--link-3.svg"
                  />
                </SocialLinks>
              </Social>
            </AppDownload>
          </SecondLinksColumn>
        </Footer>
        <Footer2>
          <CopyrightBlock>
            <Copyright1>
              <ListItem5>
                <Copyright>{`Copyright 2024 © Grogin WooCommerce WordPress Theme. All right reserved. Powered by `}</Copyright>
                <Klbtheme>KLBTheme.</Klbtheme>
              </ListItem5>
              <PaymentLogos>
                <BadgeLogo>
                  <SvgIcon alt="" src="/-svg@2x.png" />
                </BadgeLogo>
                <SvgIcon1 alt="" src="/-svg-1@2x.png" />
                <SvgIcon2 loading="lazy" alt="" src="/-svg-2@2x.png" />
                <SvgIcon3 alt="" src="/-svg-3@2x.png" />
                <SvgIcon4 loading="lazy" alt="" src="/-svg-4@2x.png" />
              </PaymentLogos>
            </Copyright1>
          </CopyrightBlock>
          <FooterLinks>
            <TermsAndConditions1>Terms and Conditions</TermsAndConditions1>
            <PrivacyPolicy1>Privacy Policy</PrivacyPolicy1>
            <OrderTracking>Order Tracking</OrderTracking>
          </FooterLinks>
        </Footer2>
      </FooterLinks1>
    </FooterRoot>
  );
};

Footer1.propTypes = {
  className: PropTypes.string,
};

export default Footer1;
