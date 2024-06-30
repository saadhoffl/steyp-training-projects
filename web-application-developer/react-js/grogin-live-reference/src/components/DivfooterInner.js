import styled from "styled-components";
import PropTypes from "prop-types";

const Heading = styled.div`
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
const HelpDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl-8);
  font-size: var(--font-size-sm);
  color: var(--color-gray-300);
`;
const ListItem = styled.img`
  width: 28px;
  height: 28px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const HelpDays = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) 0px 0px;
`;
const ListItem1 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 18px;
`;
const ListItem2 = styled.b`
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
const WorkTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-10xs-5);
`;
const HelpHours = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xl);
`;
const HelpTime = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-11xs);
`;
const ListItem3 = styled.div`
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
const IssueInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xs-5);
`;
const HelpInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xl);
`;
const Heading1 = styled.div`
  position: relative;
  letter-spacing: -0.28px;
  line-height: 17px;
  font-weight: 600;
`;
const ListItem4 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
  display: inline-block;
  min-width: 81.2px;
`;
const ListItem5 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
`;
const ListItem6 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
  display: inline-block;
  min-width: 111px;
`;
const ListItem7 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
  display: inline-block;
  min-width: 117px;
`;
const MoneyOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8xs-5);
  font-size: var(--font-size-smi);
  color: var(--color-dimgray-300);
`;
const MoneyInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl-8);
`;
const Heading2 = styled.div`
  position: relative;
  letter-spacing: -0.28px;
  line-height: 17px;
  font-weight: 600;
  display: inline-block;
  min-width: 103px;
`;
const ListItem8 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
  display: inline-block;
  min-width: 70.1px;
`;
const ListItem9 = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
  color: inherit;
  display: inline-block;
  min-width: 81.1px;
`;
const ListItem10 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
  display: inline-block;
  min-width: 128.1px;
`;
const ListItem11 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
  display: inline-block;
  min-width: 93px;
`;
const ListItem12 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
  display: inline-block;
  min-width: 71px;
`;
const Heading4LetUsHelpYouParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-2xs) 0px 0px;
  gap: var(--gap-xl-8);
`;
const Heading3 = styled.div`
  position: relative;
  letter-spacing: -0.28px;
  line-height: 17px;
  font-weight: 600;
  display: inline-block;
  min-width: 101px;
`;
const ListItem13 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
  display: inline-block;
  min-width: 108px;
`;
const ListItem14 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
  display: inline-block;
  min-width: 78px;
`;
const ListItem15 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
  display: inline-block;
  min-width: 108.4px;
`;
const ListItem16 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
  display: inline-block;
  min-width: 89px;
`;
const ListItem17 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
  display: inline-block;
  min-width: 106.1px;
`;
const ListItem18 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
  display: inline-block;
  min-width: 119.2px;
`;
const ListItem19 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
  display: inline-block;
  min-width: 92px;
`;
const Heading4GetToKnowUsParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-26xl) 0px 0px;
  gap: var(--gap-xl-8);
`;
const Heading4 = styled.div`
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
const PlatformButtons = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const DownloadAppGetContainer = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 15px;
  font-weight: 500;
  flex-shrink: 0;
`;
const PlatformDiscount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-lgi);
`;
const DownloadDiscount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-9xs-4);
`;
const DownloadButtons = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-mini);
  font-size: var(--font-size-3xs);
  color: var(--color-slategray);
`;
const DownloadInfo = styled.div`
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
const ListItemLink = styled.img`
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
const FollowUsOnSocialMediaParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  font-size: var(--font-size-xs);
`;
const DownloadInfoParent = styled.div`
  width: 219.7px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-31xl);
`;
const MoneyInfoParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-68xl-5);
  max-width: 100%;
  font-size: var(--font-size-sm);
  color: var(--color-gray-300);
  @media screen and (max-width: 1125px) {
    flex-wrap: wrap;
    gap: var(--gap-25xl);
  }
  @media screen and (max-width: 800px) {
    gap: var(--gap-3xl);
  }
`;
const DivfooterInnerRoot = styled.div`
  align-self: stretch;
  border-top: 1px solid var(--color-lightgray-100);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--padding-30xl) var(--padding-lg) var(--padding-29xl-5) 0px;
  flex-shrink: 0;
  max-width: 100%;
  gap: var(--gap-xl);
  text-align: left;
  font-size: var(--font-size-xs);
  color: var(--color-gray-1000);
  font-family: var(--font-inter);
  @media screen and (max-width: 1325px) {
    flex-wrap: wrap;
    padding-left: var(--padding-lg);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-top: var(--padding-13xl);
    padding-bottom: var(--padding-13xl);
    box-sizing: border-box;
  }
`;

const DivfooterInner = ({ className = "" }) => {
  return (
    <DivfooterInnerRoot className={className}>
      <HelpInfo>
        <HelpDetails>
          <Heading>Do You Need Help ?</Heading>
          <AutoseligenSyrNekContainer>
            <AutoseligenSyrNek>
              Autoseligen syr. Nek diarask fröbomba. Nör
            </AutoseligenSyrNek>
            <AutoseligenSyrNek>
              antipol kynoda nynat. Pressa fåmoska.
            </AutoseligenSyrNek>
          </AutoseligenSyrNekContainer>
        </HelpDetails>
        <HelpTime>
          <HelpHours>
            <HelpDays>
              <ListItem loading="lazy" alt="" src="/list--item.svg" />
            </HelpDays>
            <WorkTime>
              <ListItem1>Monday-Friday: 08am-9pm</ListItem1>
              <ListItem2>0 800 300-353</ListItem2>
            </WorkTime>
          </HelpHours>
        </HelpTime>
        <HelpTime>
          <HelpHours>
            <HelpDays>
              <ListItem alt="" src="/list--item-1.svg" />
            </HelpDays>
            <IssueInfo>
              <ListItem1>Need help with your order?</ListItem1>
              <ListItem3>info@example.com</ListItem3>
            </IssueInfo>
          </HelpHours>
        </HelpTime>
      </HelpInfo>
      <MoneyInfoParent>
        <MoneyInfo>
          <Heading1>Make Money with Us</Heading1>
          <MoneyOptions>
            <ListItem4>Sell on Grogin</ListItem4>
            <ListItem5>Sell Your Services on Grogin</ListItem5>
            <ListItem5>Sell on Grogin Business</ListItem5>
            <ListItem5>Sell Your Apps on Grogin</ListItem5>
            <ListItem6>Become an Affilate</ListItem6>
            <ListItem5>Advertise Your Products</ListItem5>
            <ListItem7>Sell-Publish with Us</ListItem7>
            <ListItem5>Become an Blowwe Vendor</ListItem5>
          </MoneyOptions>
        </MoneyInfo>
        <Heading4LetUsHelpYouParent>
          <Heading2>Let Us Help You</Heading2>
          <MoneyOptions>
            <ListItem5>Accessibility Statement</ListItem5>
            <ListItem8>Your Orders</ListItem8>
            <ListItem5>{`Returns & Replacements`}</ListItem5>
            <ListItem5>{`Shipping Rates & Policies`}</ListItem5>
            <ListItem5>Refund and Returns Policy</ListItem5>
            <ListItem9>Privacy Policy</ListItem9>
            <ListItem10>Terms and Conditions</ListItem10>
            <ListItem11>Cookie Settings</ListItem11>
            <ListItem12>Help Center</ListItem12>
          </MoneyOptions>
        </Heading4LetUsHelpYouParent>
        <Heading4GetToKnowUsParent>
          <Heading3>Get to Know Us</Heading3>
          <MoneyOptions>
            <ListItem13>Careers for Grogin</ListItem13>
            <ListItem14>About Grogin</ListItem14>
            <ListItem15>Inverstor Relations</ListItem15>
            <ListItem16>Grogin Devices</ListItem16>
            <ListItem17>Customer reviews</ListItem17>
            <ListItem18>Social Responsibility</ListItem18>
            <ListItem19>Store Locations</ListItem19>
          </MoneyOptions>
        </Heading4GetToKnowUsParent>
        <DownloadInfoParent>
          <DownloadInfo>
            <Heading4>Download our app</Heading4>
            <DownloadButtons>
              <PlatformButtons>
                <LinkGooglePlayButtonDark
                  loading="lazy"
                  alt=""
                  src="/link--googleplaybuttondarkpng@2x.png"
                />
                <LinkGooglePlayButtonDark
                  loading="lazy"
                  alt=""
                  src="/link--applestorebuttondarkpng@2x.png"
                />
              </PlatformButtons>
              <DownloadDiscount>
                <PlatformDiscount>
                  <DownloadAppGetContainer>
                    <AutoseligenSyrNek>Download App Get</AutoseligenSyrNek>
                    <AutoseligenSyrNek>-10% Discount</AutoseligenSyrNek>
                  </DownloadAppGetContainer>
                  <DownloadAppGetContainer>
                    <AutoseligenSyrNek>Download App Get</AutoseligenSyrNek>
                    <AutoseligenSyrNek>-20% Discount</AutoseligenSyrNek>
                  </DownloadAppGetContainer>
                </PlatformDiscount>
              </DownloadDiscount>
            </DownloadButtons>
          </DownloadInfo>
          <FollowUsOnSocialMediaParent>
            <FollowUsOn>Follow us on social media:</FollowUsOn>
            <SocialLinks>
              <ListItemLink loading="lazy" alt="" src="/list--item--link.svg" />
              <ListItemLink alt="" src="/list--item--link-1.svg" />
              <ListItemLink alt="" src="/list--item--link-2.svg" />
              <ListItemLink alt="" src="/list--item--link-3.svg" />
            </SocialLinks>
          </FollowUsOnSocialMediaParent>
        </DownloadInfoParent>
      </MoneyInfoParent>
    </DivfooterInnerRoot>
  );
};

DivfooterInner.propTypes = {
  className: PropTypes.string,
};

export default DivfooterInner;
