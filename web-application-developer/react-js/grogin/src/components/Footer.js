import styled from "styled-components";
import PropTypes from "prop-types";
import EmailIcon from "../assests/form.svg";
import PhoneIcon from "../assests/list--item.svg";
import EmailIconBlack from "../assests/list--item-1.svg";
import GooglePlayIcon from "../assests/link--googleplaybuttondarkpng@2x.png";
import AppStoreIcon from "../assests/link--applestorebuttondarkpng@2x.png";
import FaceBookIcon from "../assests/list--item--link.svg";
import TwitterIcon from "../assests/list--item--link-1.svg";
import InstagramIcon from "../assests/list--item--link-2.svg";
import LinkedinIcon from "../assests/list--item--link-3.svg";

const Heading = styled.h3`
  margin: 0;
  position: relative;
  font-size: inherit;
  letter-spacing: -0.4px;
  font-weight: 700;
  font-family: inherit;
  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
`;
const RegisterNowTo = styled.p`
  margin: 0;
`;
const RegisterNowToContainer = styled.div`
  position: relative;
  font-size: 13px;
  letter-spacing: -0.32px;
  line-height: 19.51px;
  color: #6b7280;
`;
const Heading3JoinOurNewsletteParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 9px;
`;
const FormIcon = styled.img`
  height: 20px;
  width: 20px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  min-height: 20px;
  z-index: 1;
`;
const EnterYourEmail = styled.div`
  position: relative;
  letter-spacing: -0.28px;
`;
const FormParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5px;
`;
const Send = styled.b`
  position: relative;
  letter-spacing: -0.28px;
  line-height: 22px;
  display: inline-block;
  min-width: 38px;
`;
const FormButton = styled.div`
  margin-bottom: -14px;
  height: 50px;
  border-radius: 0px 8px 8px 0px;
  background-color: #634c9f;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 16px 17px 10px 18px;
  box-sizing: border-box;
  z-index: 1;
  text-align: center;
  color: #fff;
`;
const FormInput = styled.div`
  height: 50px;
  width: 400px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #d1d5db;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: 15px 15px 13px;
  padding-right: 0px;
  gap: 20px;
  max-width: 100%;
`;
const FormInputWrapper = styled.div`
  align-self: stretch;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 1px;
  box-sizing: border-box;
  max-width: 100%;
`;
const BySubscribingYou = styled.span``;
const TermsConditions = styled.span`
  font-weight: 500;
  color: #634c9f;
`;
const FormByContainer = styled.div`
  position: relative;
  font-size: 11px;
  letter-spacing: -0.32px;
  line-height: 17px;
  display: inline-block;
  max-width: 100%;
  color: #6b7280;
`;
const InputContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
  max-width: 100%;
`;
const InputContainerWrapper = styled.div`
  width: 419px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 6.2px 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  font-size: 14px;
  color: #9ca3af;
`;
const FrameParent = styled.section`
  width: 1359px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 100%;
  gap: 20px;
  text-align: left;
  font-size: 20px;
  color: #111827;
  font-family: Inter;
  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
  }
`;
const Heading1 = styled.div`
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
const ListItemLinkSellOnGParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4.5px;
  font-size: 13px;
  color: #4b5563;
`;
const Heading4MakeMoneyWithUsParent = styled.div`
  position: absolute;
  top: 51px;
  left: 325px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20.8px;
`;
const Heading2 = styled.div`
  position: relative;
  letter-spacing: -0.28px;
  line-height: 17px;
  font-weight: 600;
  display: inline-block;
  min-width: 128px;
`;
const AutoseligenSyrNekContainer = styled.div`
  position: relative;
  font-size: 13px;
  letter-spacing: -0.32px;
  line-height: 19.5px;
  color: #6b7280;
`;
const HelpHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20.8px;
  font-size: 14px;
  color: #111827;
`;
const ListItem4 = styled.img`
  width: 28px;
  height: 28px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const ListItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 4px 0px 0px;
`;
const ListItem5 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 18px;
`;
const ListItem6 = styled.b`
  position: relative;
  font-size: 20px;
  letter-spacing: -1px;
  line-height: 30px;
  color: #111827;
  @media screen and (max-width: 450px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
const ListItemMondayFriday0Parent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2.5px;
`;
const FrameGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 22px;
`;
const ContactHoursContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 2px;
`;
const ListItem7 = styled.div`
  position: relative;
  font-size: 14px;
  letter-spacing: -0.32px;
  line-height: 21px;
  font-weight: 600;
  color: #111827;
  display: inline-block;
  min-width: 126px;
  white-space: nowrap;
`;
const ListItemNeedHelpWithYParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.5px;
`;
const HelpHeadingContainerParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 30px;
  font-size: 12px;
  color: rgba(17, 24, 39, 0.6);
`;
const Heading3 = styled.div`
  position: relative;
  letter-spacing: -0.28px;
  line-height: 17px;
  font-weight: 600;
  display: inline-block;
  min-width: 101px;
`;
const ListItem8 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
  display: inline-block;
  min-width: 108px;
`;
const ListItem9 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
  display: inline-block;
  min-width: 78px;
`;
const ListItem10 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
  display: inline-block;
  min-width: 108.4px;
`;
const ListItem11 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
  display: inline-block;
  min-width: 89px;
`;
const ListItem12 = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
  color: inherit;
  display: inline-block;
  min-width: 106.1px;
`;
const ListItem13 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
  display: inline-block;
  min-width: 119.2px;
`;
const ListItem14 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
  display: inline-block;
  min-width: 92px;
`;
const AboutContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 850px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20.8px;
`;
const Heading4 = styled.div`
  position: relative;
  letter-spacing: -0.28px;
  line-height: 17px;
  font-weight: 600;
  display: inline-block;
  min-width: 103px;
`;
const ListItem15 = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
  color: inherit;
`;
const ListItem16 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
  display: inline-block;
  min-width: 70.1px;
`;
const ListItem17 = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
  color: inherit;
  display: inline-block;
  min-width: 81.1px;
`;
const ListItem18 = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
  color: inherit;
  display: inline-block;
  min-width: 128.1px;
`;
const ListItem19 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
  display: inline-block;
  min-width: 93px;
`;
const ListItem20 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
  display: inline-block;
  min-width: 71px;
`;
const FooterLinksContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 617.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20.8px;
`;
const Heading5 = styled.div`
  position: relative;
  letter-spacing: -0.28px;
  line-height: 17px;
  font-weight: 600;
  display: inline-block;
  min-width: 119px;
`;
const LinkGooglePlayButtonDark = styled.img`
  align-self: stretch;
  height: 38.9px;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const LinkGooglePlayButtonDarkParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
`;
const DownloadAppGetContainer = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 15px;
  font-weight: 500;
  flex-shrink: 0;
`;
const DownloadAppGet10DiscountParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 19px;
`;
const DiscountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px 3.4px;
`;
const AppButtonsContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 15px;
  font-size: 10px;
  color: #6b7280;
`;
const Heading4DownloadOurAppParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 19.8px;
`;
const FollowUsOn = styled.div`
  position: relative;
  letter-spacing: -0.32px;
`;
const ListItemLink = styled.img`
  height: 36px;
  width: 36px;
  position: relative;
  border-radius: 6px;
  min-height: 36px;
`;
const ListItemLinkParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4px;
`;
const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  font-size: 12px;
`;
const DownloadContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 1052.5px;
  width: 219.7px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 50px;
`;
const HelpContainer = styled.div`
  position: absolute;
  top: 51px;
  left: 0px;
  width: 1342.2px;
  height: 253.8px;
`;
const DivfooterInner = styled.div`
  align-self: stretch;
  height: 353.3px;
  position: relative;
  border-top: 1px solid #d1d5db;
  box-sizing: border-box;
  flex-shrink: 0;
`;
const Copyright = styled.span`
  font-weight: 500;
`;
const Klbtheme = styled.span`
  font-weight: 600;
  color: #634c9f;
`;
const ListItemSvg = styled.img`
  width: 36px;
  height: 13px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const ListItemSvgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1px 0px 0px;
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
const FrameDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
`;
const Copyright2024GroginWoocomParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 21.1px;
  flex-shrink: 0;
`;
const DivfooterInnerInner = styled.div`
  width: 564px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1px 0px 0px;
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
const NavListItemLinkTerParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 7.3px;
  flex-shrink: 0;
  color: #111827;
`;
const DivfooterInner1 = styled.div`
  align-self: stretch;
  border-top: 1px solid #d1d5db;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 30px 0px 0px;
  flex-shrink: 0;
  max-width: 100%;
  gap: 20px;
  font-size: 12px;
  color: #6b7280;
  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
  }
`;
const DivfooterInnerParent = styled.footer`
  width: 1360px;
  height: 355.3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 10px;
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: 14px;
  color: #111827;
  font-family: Inter;
  @media screen and (max-width: 900px) {
    height: auto;
  }
  @media screen and (max-width: 700px) {
    padding-bottom: 10px;
    box-sizing: border-box;
  }
`;
const FooterRoot = styled.div`
  width: 100%;
  background-color: #f3f4f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 50px 20px 0px;
  box-sizing: border-box;
  gap: 53.8px;
  line-height: normal;
  letter-spacing: normal;
  @media screen and (max-width: 700px) {
    gap: 27px;
  }
`;

const Footer = ({ className = "" }) => {
  return (
    <FooterRoot className={className}>
      <FrameParent>
        <Heading3JoinOurNewsletteParent>
          <Heading>Join our newsletter for £10 offs</Heading>
          <RegisterNowToContainer>
            <RegisterNowTo>{`Register now to get latest updates on promotions &`}</RegisterNowTo>
            <RegisterNowTo>coupons.Don’t worry, we not spam!</RegisterNowTo>
          </RegisterNowToContainer>
        </Heading3JoinOurNewsletteParent>
        <InputContainerWrapper>
          <InputContainer>
            <FormInputWrapper>
              <FormInput>
                <FormParent>
                  <FormIcon loading="lazy" alt="" src={EmailIcon} />
                  <EnterYourEmail>Enter your email address</EnterYourEmail>
                </FormParent>
                <FormButton>
                  <Send>SEND</Send>
                </FormButton>
              </FormInput>
            </FormInputWrapper>
            <FormByContainer>
              <BySubscribingYou>{`By subscribing you agree to our `}</BySubscribingYou>
              <TermsConditions>{`Terms & Conditions and Privacy & Cookies Policy.`}</TermsConditions>
            </FormByContainer>
          </InputContainer>
        </InputContainerWrapper>
      </FrameParent>
      <DivfooterInnerParent>
        <DivfooterInner>
          <Heading4MakeMoneyWithUsParent>
            <Heading1>Make Money with Us</Heading1>
            <ListItemLinkSellOnGParent>
              <ListItem>Sell on Grogin</ListItem>
              <ListItem1>Sell Your Services on Grogin</ListItem1>
              <ListItem1>Sell on Grogin Business</ListItem1>
              <ListItem1>Sell Your Apps on Grogin</ListItem1>
              <ListItem2>Become an Affilate</ListItem2>
              <ListItem1>Advertise Your Products</ListItem1>
              <ListItem3>Sell-Publish with Us</ListItem3>
              <ListItem1>Become an Blowwe Vendor</ListItem1>
            </ListItemLinkSellOnGParent>
          </Heading4MakeMoneyWithUsParent>
          <HelpContainer>
            <HelpHeadingContainerParent>
              <HelpHeadingContainer>
                <Heading2>Do You Need Help ?</Heading2>
                <AutoseligenSyrNekContainer>
                  <RegisterNowTo>
                    Autoseligen syr. Nek diarask fröbomba. Nör
                  </RegisterNowTo>
                  <RegisterNowTo>
                    antipol kynoda nynat. Pressa fåmoska.
                  </RegisterNowTo>
                </AutoseligenSyrNekContainer>
              </HelpHeadingContainer>
              <ContactHoursContainer>
                <FrameGroup>
                  <ListItemWrapper>
                    <ListItem4 loading="lazy" alt="" src={PhoneIcon} />
                  </ListItemWrapper>
                  <ListItemMondayFriday0Parent>
                    <ListItem5>Monday-Friday: 08am-9pm</ListItem5>
                    <ListItem6>0 800 300-353</ListItem6>
                  </ListItemMondayFriday0Parent>
                </FrameGroup>
              </ContactHoursContainer>
              <ContactHoursContainer>
                <FrameGroup>
                  <ListItemWrapper>
                    <ListItem4 loading="lazy" alt="" src={EmailIconBlack} />
                  </ListItemWrapper>
                  <ListItemNeedHelpWithYParent>
                    <ListItem5>Need help with your order?</ListItem5>
                    <ListItem7>info@example.com</ListItem7>
                  </ListItemNeedHelpWithYParent>
                </FrameGroup>
              </ContactHoursContainer>
            </HelpHeadingContainerParent>
            <AboutContainer>
              <Heading3>Get to Know Us</Heading3>
              <ListItemLinkSellOnGParent>
                <ListItem8>Careers for Grogin</ListItem8>
                <ListItem9>About Grogin</ListItem9>
                <ListItem10>Inverstor Relations</ListItem10>
                <ListItem11>Grogin Devices</ListItem11>
                <ListItem12>Customer reviews</ListItem12>
                <ListItem13>Social Responsibility</ListItem13>
                <ListItem14>Store Locations</ListItem14>
              </ListItemLinkSellOnGParent>
            </AboutContainer>
            <FooterLinksContainer>
              <Heading4>Let Us Help You</Heading4>
              <ListItemLinkSellOnGParent>
                <ListItem15>Accessibility Statement</ListItem15>
                <ListItem16>Your Orders</ListItem16>
                <ListItem1>{`Returns & Replacements`}</ListItem1>
                <ListItem1>{`Shipping Rates & Policies`}</ListItem1>
                <ListItem1>Refund and Returns Policy</ListItem1>
                <ListItem17>Privacy Policy</ListItem17>
                <ListItem18>Terms and Conditions</ListItem18>
                <ListItem19>Cookie Settings</ListItem19>
                <ListItem20>Help Center</ListItem20>
              </ListItemLinkSellOnGParent>
            </FooterLinksContainer>
            <DownloadContainer>
              <Heading4DownloadOurAppParent>
                <Heading5>Download our app</Heading5>
                <AppButtonsContainer>
                  <LinkGooglePlayButtonDarkParent>
                    <LinkGooglePlayButtonDark
                      loading="lazy"
                      alt=""
                      src={GooglePlayIcon}
                    />
                    <LinkGooglePlayButtonDark
                      loading="lazy"
                      alt=""
                      src={AppStoreIcon}
                    />
                  </LinkGooglePlayButtonDarkParent>
                  <DiscountContainer>
                    <DownloadAppGet10DiscountParent>
                      <DownloadAppGetContainer>
                        <RegisterNowTo>Download App Get</RegisterNowTo>
                        <RegisterNowTo>-10% Discount</RegisterNowTo>
                      </DownloadAppGetContainer>
                      <DownloadAppGetContainer>
                        <RegisterNowTo>Download App Get</RegisterNowTo>
                        <RegisterNowTo>-20% Discount</RegisterNowTo>
                      </DownloadAppGetContainer>
                    </DownloadAppGet10DiscountParent>
                  </DiscountContainer>
                </AppButtonsContainer>
              </Heading4DownloadOurAppParent>
              <SocialContainer>
                <FollowUsOn>Follow us on social media:</FollowUsOn>
                <ListItemLinkParent>
                  <ListItemLink loading="lazy" alt="" src={FaceBookIcon} />
                  <ListItemLink loading="lazy" alt="" src={TwitterIcon} />
                  <ListItemLink loading="lazy" alt="" src={InstagramIcon} />
                  <ListItemLink loading="lazy" alt="" src={LinkedinIcon} />
                </ListItemLinkParent>
              </SocialContainer>
            </DownloadContainer>
          </HelpContainer>
        </DivfooterInner>
        <DivfooterInner1>
          <DivfooterInnerInner>
            <Copyright2024GroginWoocomParent>
              <ListItem5>
                <Copyright>{`Copyright 2024 © Grogin WooCommerce WordPress Theme. All right reserved. Powered by `}</Copyright>
                <Klbtheme>KLBTheme.</Klbtheme>
              </ListItem5>
              <FrameDiv>
                <ListItemSvgWrapper>
                  <ListItemSvg
                    loading="lazy"
                    alt=""
                    src="/list--item--svg@2x.png"
                  />
                </ListItemSvgWrapper>
                <ListItemSvg1
                  loading="lazy"
                  alt=""
                  src="/list--item--svg-1@2x.png"
                />
                <ListItemSvg2
                  loading="lazy"
                  alt=""
                  src="/list--item--svg-2@2x.png"
                />
                <ListItemSvg3
                  loading="lazy"
                  alt=""
                  src="/list--item--svg-3@2x.png"
                />
                <ListItemSvg4
                  loading="lazy"
                  alt=""
                  src="/list--item--svg-4@2x.png"
                />
              </FrameDiv>
            </Copyright2024GroginWoocomParent>
          </DivfooterInnerInner>
          <NavListItemLinkTerParent>
            <NavList>Terms and Conditions</NavList>
            <NavList1>Privacy Policy</NavList1>
            <NavList2>Order Tracking</NavList2>
          </NavListItemLinkTerParent>
        </DivfooterInner1>
      </DivfooterInnerParent>
    </FooterRoot>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
