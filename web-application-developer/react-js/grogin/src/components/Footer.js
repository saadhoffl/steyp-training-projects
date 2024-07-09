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
  margin-bottom: 25px;
  font-size: inherit;
  letter-spacing: -0.4px;
  font-weight: 700;
  font-family: inherit;
`;
const RegisterNowTo = styled.p`
  margin: 0;
`;
const RegisterNowToContainer = styled.div`
  font-size: 13px;
  letter-spacing: -0.32px;
  color: #6b7280;
`;
const Heading3JoinOurNewsletteParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const FormIcon = styled.img`
  height: 20px;
  width: 20px;
  margin-left: 10px;
`;
const EnterYourEmail = styled.div`
  letter-spacing: -0.28px;
  padding-left: 8px;
`;
const FormParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Send = styled.b`
  position: relative;
  letter-spacing: -0.28px;
  line-height: 22px;
  display: inline-block;
`;
const FormButton = styled.div`
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
  align-items: center;
  justify-content: space-between;
`;
const FormInputWrapper = styled.div`
  align-self: stretch;
  height: 48px;
  display: flex;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
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
  color: #6b7280;
`;
const InputContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const InputContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
  font-size: 14px;
  color: #9ca3af;
`;
const FrameParent = styled.section`
  display: flex;
  padding: 0px 0px 30px 0px;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  font-size: 20px;
  color: #111827;
  font-family: Inter;
`;
const Heading1 = styled.div`
  letter-spacing: -0.28px;
  line-height: 17px;
  font-weight: 600;
`;
const ListItem = styled.div`
  letter-spacing: -0.32px;
  line-height: 20px;
`;

const ListItemLinkSellOnGParent = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 13px;
  color: #4b5563;
`;
const Heading4MakeMoneyWithUsParent = styled.div`
  display: flex;
  flex-direction: column;
`;
const Heading2 = styled.div`
  letter-spacing: -0.28px;
  line-height: 17px;
  font-weight: 600;
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
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
const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Heading4 = styled.div`
  letter-spacing: -0.28px;
  line-height: 17px;
  font-weight: 600;
`;

const FooterLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Heading5 = styled.div`
  letter-spacing: -0.28px;
  line-height: 17px;
  font-weight: 600;
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
  font-size: 12px;
`;
const DownloadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const HelpContainer = styled.div``;
const DivfooterInner = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 353.3px;
  padding: 40px 0px;
  border-top: 1px solid #d1d5db;
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const NavList = styled.a`
  text-decoration: underline;
  position: relative;
  letter-spacing: -0.32px;
  line-height: 18px;
  color: inherit;
`;
const NavListItemLinkTerParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  color: #111827;
`;
const DivfooterInner1 = styled.div`
  border-top: 1px solid #d1d5db;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 30px;
  font-size: 12px;
  color: #6b7280;
`;
const DivfooterInnerParent = styled.footer`
  height: 355.3px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  padding: 0px 0px 10px;
  text-align: left;
  font-size: 14px;
  color: #111827;
  font-family: Inter;
`;
const FooterRoot = styled.div`
  background-color: #f3f4f6;
  display: flex;
  flex-direction: column;
  padding: 40px 50px 10px;
  line-height: normal;
  letter-spacing: normal;
`;

const Footer = () => {
  return (
    <FooterRoot>
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
          <HelpContainer>
            <HelpHeadingContainerParent>
              <HelpHeadingContainer>
                <Heading>Do You Need Help ?</Heading>
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
          </HelpContainer>
          <Heading4MakeMoneyWithUsParent>
            <Heading>Make Money with Us</Heading>
            <ListItemLinkSellOnGParent>
              <ListItem>Sell on Grogin</ListItem>
              <ListItem>Sell Your Services on Grogin</ListItem>
              <ListItem>Sell on Grogin Business</ListItem>
              <ListItem>Sell Your Apps on Grogin</ListItem>
              <ListItem>Become an Affilate</ListItem>
              <ListItem>Advertise Your Products</ListItem>
              <ListItem>Sell-Publish with Us</ListItem>
              <ListItem>Become an Blowwe Vendor</ListItem>
            </ListItemLinkSellOnGParent>
          </Heading4MakeMoneyWithUsParent>
          <AboutContainer>
            <Heading>Get to Know Us</Heading>
            <ListItemLinkSellOnGParent>
              <ListItem>Careers for Grogin</ListItem>
              <ListItem>About Grogin</ListItem>
              <ListItem>Inverstor Relations</ListItem>
              <ListItem>Grogin Devices</ListItem>
              <ListItem>Customer reviews</ListItem>
              <ListItem>Social Responsibility</ListItem>
              <ListItem>Store Locations</ListItem>
            </ListItemLinkSellOnGParent>
          </AboutContainer>
          <FooterLinksContainer>
            <Heading>Let Us Help You</Heading>
            <ListItemLinkSellOnGParent>
              <ListItem>Accessibility Statement</ListItem>
              <ListItem>Your Orders</ListItem>
              <ListItem>{`Returns & Replacements`}</ListItem>
              <ListItem>{`Shipping Rates & Policies`}</ListItem>
              <ListItem>Refund and Returns Policy</ListItem>
              <ListItem>Privacy Policy</ListItem>
              <ListItem>Terms and Conditions</ListItem>
              <ListItem>Cookie Settings</ListItem>
              <ListItem>Help Center</ListItem>
            </ListItemLinkSellOnGParent>
          </FooterLinksContainer>
          <DownloadContainer>
            <Heading4DownloadOurAppParent>
              <Heading>Download our app</Heading>
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
            <NavList>Privacy Policy</NavList>
            <NavList>Order Tracking</NavList>
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
