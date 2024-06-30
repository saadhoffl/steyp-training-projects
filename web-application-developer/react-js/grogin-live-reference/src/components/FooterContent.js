import styled from "styled-components";
import PropTypes from "prop-types";

const Heading = styled.h3`
  margin: 0;
  position: relative;
  font-size: inherit;
  letter-spacing: -0.4px;
  font-weight: 700;
  font-family: inherit;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
const RegisterNowTo = styled.p`
  margin: 0;
`;
const RegisterNowToContainer = styled.div`
  position: relative;
  font-size: var(--font-size-smi);
  letter-spacing: -0.32px;
  line-height: 19.51px;
  color: var(--color-slategray);
`;
const Newsletter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xs);
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
const InputAndPlaceholder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8xs);
`;
const Send = styled.b`
  position: relative;
  letter-spacing: -0.28px;
  line-height: 42px;
  display: inline-block;
  min-width: 38px;
`;
const FormButton = styled.div`
  margin-bottom: -14px;
  height: 50px;
  border-radius: 0px var(--br-5xs) var(--br-5xs) 0px;
  background-color: var(--color-darkslateblue-100);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base) var(--padding-mid) 0px var(--padding-lg);
  box-sizing: border-box;
  z-index: 1;
  text-align: center;
  color: var(--color-white);
`;
const FormInput = styled.div`
  height: 50px;
  width: 420px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: var(--br-5xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-lightgray-100);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: var(--padding-mini) var(--padding-mini) var(--padding-smi);
  gap: var(--gap-xl);
  max-width: 100%;
`;
const InputAndButton = styled.div`
  align-self: stretch;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-12xs);
  box-sizing: border-box;
  max-width: 100%;
`;
const BySubscribingYou = styled.span``;
const TermsConditions = styled.span`
  font-weight: 500;
  color: var(--color-darkslateblue-100);
`;
const FormByContainer = styled.div`
  position: relative;
  font-size: var(--font-size-2xs);
  letter-spacing: -0.32px;
  line-height: 17px;
  display: inline-block;
  max-width: 100%;
  color: var(--color-slategray);
`;
const FormContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
  max-width: 100%;
`;
const SubscriptionForm = styled.div`
  width: 419px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-6xs-2) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--font-size-sm);
  color: var(--color-darkgray);
`;
const FooterContentRoot = styled.div`
  width: 1359px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 100%;
  gap: var(--gap-xl);
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-gray-300);
  font-family: var(--font-inter);
  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
`;

const FooterContent = ({ className = "" }) => {
  return (
    <FooterContentRoot className={className}>
      <Newsletter>
        <Heading>Join our newsletter for £10 offs</Heading>
        <RegisterNowToContainer>
          <RegisterNowTo>{`Register now to get latest updates on promotions &`}</RegisterNowTo>
          <RegisterNowTo>coupons.Don’t worry, we not spam!</RegisterNowTo>
        </RegisterNowToContainer>
      </Newsletter>
      <SubscriptionForm>
        <FormContainer>
          <InputAndButton>
            <FormInput>
              <InputAndPlaceholder>
                <FormIcon alt="" src="/form.svg" />
                <EnterYourEmail>Enter your email address</EnterYourEmail>
              </InputAndPlaceholder>
              <FormButton>
                <Send>SEND</Send>
              </FormButton>
            </FormInput>
          </InputAndButton>
          <FormByContainer>
            <BySubscribingYou>{`By subscribing you agree to our `}</BySubscribingYou>
            <TermsConditions>{`Terms & Conditions and Privacy & Cookies Policy.`}</TermsConditions>
          </FormByContainer>
        </FormContainer>
      </SubscriptionForm>
    </FooterContentRoot>
  );
};

FooterContent.propTypes = {
  className: PropTypes.string,
};

export default FooterContent;
