import styled from "styled-components";
import PropTypes from "prop-types";
import Rated4Out5 from "../assests/img--rated-400-out-of-5.svg";
import NoticeIcon from "../assests/divnoticeicon.svg";
import CartIcon from "../assests/before.svg";
import React from "react";

const Elements = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1px 0px 0px;
`;

const Elements3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MainIcon = styled.img`
  width: 75%;
  height: 100%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const EmptyCaption = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  text-transform: uppercase;
  font-weight: 800;
  display: inline-block;
  min-width: 22px;
`;
const Main1 = styled.div`
  width: 39.1px;
  border-radius: 14px 40px 40px 14px;
  background-color: #dc2626;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 6px 8px;
  margin-bottom: 8px;
  box-sizing: border-box;
  z-index: 1;
`;
const SvgIcon = styled.img`
  height: 14px;
  width: 14px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  min-height: 14px;
`;
const Organic = styled.a`
  text-decoration: none;
  position: relative;
  font-size: 10px;
  letter-spacing: -0.32px;
  text-transform: uppercase;
  font-weight: 800;
  font-family: Inter;
  color: #166534;
  text-align: center;
  display: inline-block;
  min-width: 46px;
`;
const Main2 = styled.button`
  cursor: pointer;
  border: none;
  padding: 5px 6px;
  background-color: transparent;
  width: 80.2px;
  border-radius: 14px 40px 40px 14px;
  background: linear-gradient(90deg, #d4fc79, #96e6a1 50%);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
  gap: 5px;
  z-index: 1;
`;
const Content = styled.div`
  align-self: stretch;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px;
  box-sizing: border-box;
  position: relative;
  gap: 3px;
  text-align: center;
  font-size: 10px;
  color: #fef2f2;
  @media screen and (max-width: 850px) {
    height: 500px;
    width: 90%;
    align-self: center;
  }
  @media screen and (max-width: 557px) {
    height: 300px;
    width: 80%;
    align-self: center;
  }
`;
const Container1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 19px;
  min-width: 129px;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    min-width: 100%;
  }
`;
const MarketsideFreshOrganic1 = styled.p`
  margin: 0;
`;
const MarketsideFreshOrganicContainer = styled.h1`
  margin: 0;
  position: relative;
  font-size: 38px;
  letter-spacing: -0.76px;
  line-height: 45.6px;
  font-weight: 700;
  font-family: inherit;
  display: inline-block;
  max-width: 100%;
  flex-shrink: 0;
  @media screen and (max-width: 1050px) {
    font-size: 25px;
    line-height: 36px;
  }
  @media screen and (max-width: 450px) {
    font-size: 23px;
    line-height: 27px;
  }
  @media screen and (max-width: 375px) {
    font-size: 18px;
  }
`;
const ImgRated300OutOf = styled.img`
  align-self: stretch;
  height: 11px;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
`;
const RatingScale = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px 5px;
`;
const RatingPlaceholder = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  font-weight: 600;
  display: inline-block;
  min-width: 28px;
`;
const Divrating = styled.div`
  width: 37.7px;
  border-radius: 6px;
  border: 1px solid #d1d5db;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 2px 3px 2px 5px;
`;
const RatingExplanation = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 12px;
  display: inline-block;
  min-width: 7.3px;
`;
const Placeholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px 5.5px;
  font-size: 12px;
  color: #6b7280;
`;
const RatingContainer = styled.div`
  width: 125.9px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 7px;
`;
const Before = styled.div`
  width: 1px;
  height: 14px;
  position: relative;
  background-color: #e5e7eb;
`;
const Indicator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 4.5px 0px 0px;
`;
const Sku = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 19.5px;
  display: inline-block;
  min-width: 29.1px;
  flex-shrink: 0;
`;
const E7f8g9h = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 19.5px;
  font-weight: 500;
  color: #030712;
  display: inline-block;
  min-width: 65.1px;
  flex-shrink: 0;
`;
const SKUContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2.6px;
`;
const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1.7px 0px 0px;
  color: #6b7280;
`;
const Main3 = styled.div`
  flex: 1;
  border-bottom: 1px solid #e5e7eb;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 9px;
  gap: 13.8px;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const Rating = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 6.4px;
  box-sizing: border-box;
  max-width: 90%;
`;
const VivamusAdipiscingNislContainer = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 21px;
`;
const B = styled.b`
  position: relative;
  letter-spacing: -0.6px;
  line-height: 30px;
  display: inline-block;
  min-width: 72.2px;
  white-space: nowrap;
  @media screen and (max-width: 1050px) {
    font-size: 24px;
    line-height: 24px;
  }
  @media screen and (max-width: 450px) {
    font-size: 18px;
    line-height: 18px;
  }
`;
const Div = styled.div`
  position: relative;
  font-size: 21.9px;
  text-decoration: line-through;
  letter-spacing: -0.6px;
  line-height: 22px;
  font-weight: 500;
  color: #111827;
  display: inline-block;
  min-width: 47px;
  white-space: nowrap;
  @media screen and (max-width: 450px) {
    font-size: 18px;
    line-height: 18px;
  }
`;
const Attributes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 6.3px;
`;
const OrderOnWhatsapp = styled.b`
  position: relative;
  letter-spacing: -0.28px;
  line-height: 42px;
`;
const MainLink = styled.div`
  height: 46px;
  border-radius: 8px;
  background-color: #16a34a;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1px 17px 0px 18px;
  box-sizing: border-box;
  white-space: nowrap;
  font-size: 14px;
  color: #fff;
  font-family: Inter;
  @media screen and (max-width: 375px) {
    font-size: 12px;
  }
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 26.9px;
  font-size: 30px;
  color: #dc2626;
  font-family: Barlow;
`;
const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 4.4px;
  box-sizing: border-box;
  gap: 15px;
  max-width: 90%;
  flex-shrink: 0;
  font-size: 14px;
  color: #4b5563;
`;
const SpecialOffer = styled.b`
  position: relative;
  letter-spacing: -0.32px;
  display: inline-block;
  min-width: 85.2px;
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 9px 0px 0px;
`;
const CountdownValues = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  font-weight: 600;
  display: inline-block;
  min-width: 15px;
`;
const DivcountdownItem = styled.div`
  flex: 1;
  border-radius: 6px;
  background-color: #ffedd5;
  border: 1px solid #fed7aa;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 7px 8px 7px 9px;
`;
const Div1 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  font-weight: 600;
  display: inline-block;
  min-width: 17px;
`;
const DivcountdownItem1 = styled.div`
  flex: 1;
  border-radius: 6px;
  background-color: #ffedd5;
  border: 1px solid #fed7aa;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 7px 7px 7px 8px;
`;
const TimeLeftLabel = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 24px;
  display: inline-block;
  min-width: 5px;
`;
const Placeholder1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 5px 0px 0px;
  font-size: 16px;
  color: #030712;
`;
const Countdown = styled.div`
  width: 156.1px;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 3.8px;
  color: #c2410c;
`;
const RemainsUntilThe = styled.div`
  position: relative;
  letter-spacing: -0.32px;
`;
const Label = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px 0px 0px;
  font-size: 11px;
  color: #6b7280;
`;
const Main4 = styled.div`
  flex: 1;
  border-radius: 6px;
  background-color: #fff7ed;
  border: 1px solid #ffedd5;
  box-sizing: border-box;
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 14px 16px;
  gap: 15.9px;
  max-width: 100%;
  @media screen and (max-width: 375px) {
    flex-direction: column;
    width: 100%;
    min-width: 280px;
    max-width: 330px;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
const Offer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 4.4px;
  box-sizing: border-box;
  max-width: 100%;
  color: #ea580c;
  @media screen and (max-width: 1040px) {
    max-width: 95%;
  }
  @media screen and (max-width: 850px) {
    max-width: 100%;
  }
  @media screen and (max-width: 385px) {
    flex-direction: column;
  }
`;
const DivquantityButtonIcon = styled.img`
  align-self: stretch;
  width: 36px;
  position: relative;
  max-height: 100%;
  min-height: 46px;
`;
const QuantityPlaceholder = styled.div`
  width: 7.1px;
  position: relative;
  letter-spacing: -0.3px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  min-width: 7.1px;
`;
const InputProductQuantity = styled.div`
  flex: 1;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 13.5px 16px;
`;
const Form = styled.div`
  width: 114px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid #d1d5db;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 1010px) {
    width: 80px;
  }
  @media screen and (max-width: 375px) {
    width: 65px;
  }
`;
const BeforeIcon = styled.img`
  width: 10px;
  height: 14px;
  position: relative;
`;
const AddToCart = styled.b`
  position: relative;
  font-size: 14px;
  letter-spacing: -0.28px;
  display: inline-block;
  font-family: Inter;
  color: #fff;
  text-align: center;
  min-width: 40px;
  @media screen and (max-width: 375px) {
    font-size: 12px;
  }
`;
const Button2 = styled.button`
  cursor: pointer;
  border: none;
  background-color: #16a34a;
  height: 46px;
  flex: 1;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  gap: 6px;
  min-width: 104px;
  @media screen and (max-width: 1010px) {
    min-width: 80px;
  }
`;
const BuyNow = styled.b`
  position: relative;
  font-size: 14px;
  letter-spacing: -0.28px;
  line-height: 42px;
  display: inline-block;
  font-family: Inter;
  color: #fff;
  text-align: center;
  min-width: 59px;
  @media screen and (max-width: 375px) {
    font-size: 12px;
  }
`;
const Button3 = styled.button`
  cursor: pointer;
  border: none;
  background-color: #212529;
  height: 46px;
  flex: 0.8316;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  gap: 6px;
  min-width: 104px;
`;
const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 14.4px;
  box-sizing: border-box;
  gap: 10px;
  max-width: 100%;
  text-align: center;
  font-size: 15px;
  color: #020617;
  @media screen and (max-width: 1040px) {
    max-width: 95%;
  }
  @media screen and (max-width: 850px) {
    max-width: 100%;
  }
`;
const ListItem = styled.input`
  margin: 0;
  height: 26px;
  width: 26px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const Payment = styled.b`
  font-family: Inter;
`;
const PaymentUponReceipt = styled.span`
  margin-right: 15px;
`;
const ListItemContainer = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 19.5px;
`;
const Title1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1px 0px 0px;
  box-sizing: border-box;
  max-width: calc(100% - 53px);
`;
const Payment1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 27px;
  max-width: 100%;
`;
const List = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 20px;
  box-sizing: border-box;
  max-width: 100%;
`;
const DivnoticeIcon = styled.img`
  height: 39px;
  width: 42px;
  position: relative;
  min-height: 39px;
`;
const StrongWarrantyContainer = styled.div`
  height: 35.5px;
  position: relative;
  letter-spacing: -0.32px;
  line-height: 19.5px;
  display: flex;
  align-items: center;
`;
const Title2 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1px 0px 0px;
  box-sizing: border-box;
  min-width: 367px;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    min-width: 100%;
  }
`;
const ListItem1 = styled.div`
  align-self: stretch;
  border-top: 1px solid #e5e7eb;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 25px 50px 25px 15px;
  gap: 17.9px;
  max-width: 100%;
  @media screen and (max-width: 340px) {
    padding: 38px 50px 38px 15px;
  }
`;
const Main5 = styled.div`
  align-self: stretch;
  border-radius: 6px;
  border: 1px solid #e5e7eb;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 11px 0px 0px;
  gap: 11px;
  max-width: 100%;
  flex-shrink: 0;
  color: #6b7280;
  @media screen and (max-width: 1040px) {
    max-width: 430px;
    margin-right: 20px;
  }
  @media screen and (max-width: 850px) {
    max-width: 100%;
    margin-right: 0px;
  }
`;
const ProductName = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 15.6px;
  max-width: 100%;
`;
const ProductDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px 24.8px;
  box-sizing: border-box;
  min-width: 400px;
  max-width: 100%;
  font-size: 13px;
  color: #030712;
  @media screen and (max-width: 850px) {
    min-width: 90%;
  }
`;
const LayoutRoot = styled.div`
  margin-top: 10px;
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 40px;
  max-width: 100%;
  text-align: left;
  font-size: 12px;
  color: #9ca3af;
  font-family: Inter;
  @media screen and (max-width: 750px) {
    gap: 20px;
  }
`;

const Group = styled.div``;

const MainDiv = styled.div``;

const ProductDetails = ({ productDetail }) => {
  return (
    <LayoutRoot>
      <Container1>
        <Group>
          <Main1>
            <EmptyCaption>56%</EmptyCaption>
          </Main1>
          <Main2>
            <SvgIcon alt="" src="/svg.svg" />
            <Elements>
              <Organic>Organic</Organic>
            </Elements>
          </Main2>
        </Group>
        <Content>
          <MainIcon
            alt=""
            src={"http://localhost:8000/" + productDetail.product_img}
          />
        </Content>
      </Container1>
      <ProductDetail>
        <ProductName>
          <MainDiv>
            <MarketsideFreshOrganicContainer>
              <MarketsideFreshOrganic1>
                {productDetail.product_title}
              </MarketsideFreshOrganic1>
            </MarketsideFreshOrganicContainer>
            <Rating>
              <Main3>
                <RatingContainer>
                  <RatingScale>
                    <ImgRated300OutOf loading="lazy" alt="" src={Rated4Out5} />
                  </RatingScale>
                  <Divrating>
                    <RatingPlaceholder>3.00</RatingPlaceholder>
                  </Divrating>
                  <Placeholder>
                    <RatingExplanation>2</RatingExplanation>
                  </Placeholder>
                </RatingContainer>
                <Indicator>
                  <Before />
                </Indicator>
                <ProductInfo>
                  <SKUContainer>
                    <Sku>SKU:</Sku>
                    <E7f8g9h>E7F8G9H0</E7f8g9h>
                  </SKUContainer>
                </ProductInfo>
              </Main3>
            </Rating>
            <ProductDescription>
              <VivamusAdipiscingNislContainer>
                <MarketsideFreshOrganic1>
                  Vivamus adipiscing nisl ut dolor dignissim semper. Nulla
                  luctus malesuada tincidunt. Class aptent taciti
                </MarketsideFreshOrganic1>
                <MarketsideFreshOrganic1>
                  sociosqu ad litora torquent Vivamus adipiscing nisl ut dolor
                  dignissim semper.
                </MarketsideFreshOrganic1>
              </VivamusAdipiscingNislContainer>
              <Details>
                <Attributes>
                  <B>${productDetail.product_price}</B>
                  <Div>$1.99</Div>
                </Attributes>
                <MainLink>
                  <OrderOnWhatsapp>Order on WhatsApp</OrderOnWhatsapp>
                </MainLink>
              </Details>
            </ProductDescription>
            <Offer>
              <Main4>
                <Title>
                  <SpecialOffer>Special Offer :</SpecialOffer>
                </Title>
                <Countdown>
                  <DivcountdownItem>
                    <CountdownValues>81</CountdownValues>
                  </DivcountdownItem>
                  <DivcountdownItem1>
                    <Div1>06</Div1>
                  </DivcountdownItem1>
                  <DivcountdownItem1>
                    <Div1>50</Div1>
                  </DivcountdownItem1>
                  <Placeholder1>
                    <TimeLeftLabel>:</TimeLeftLabel>
                  </Placeholder1>
                  <DivcountdownItem1>
                    <Div1>02</Div1>
                  </DivcountdownItem1>
                </Countdown>
                <Label>
                  <RemainsUntilThe>
                    Remains until the end of the offer.
                  </RemainsUntilThe>
                </Label>
              </Main4>
            </Offer>
            <Actions>
              <Form>
                <DivquantityButtonIcon alt="" src="/divquantitybutton.svg" />
                <InputProductQuantity>
                  <QuantityPlaceholder>1</QuantityPlaceholder>
                </InputProductQuantity>
                <DivquantityButtonIcon
                  loading="lazy"
                  alt=""
                  src="/divquantitybutton-1.svg"
                />
              </Form>
              <Button2>
                <Elements3>
                  <BeforeIcon alt="" src={CartIcon} />
                </Elements3>
                <AddToCart>Add to cart</AddToCart>
              </Button2>
              <Button3>
                <Elements3>
                  <BeforeIcon alt="" src={CartIcon} />
                </Elements3>
                <BuyNow>Buy Now</BuyNow>
              </Button3>
            </Actions>
            <Main5>
              <List>
                <Payment1>
                  <ListItem type="checkbox" />
                  <Title1>
                    <ListItemContainer>
                      <MarketsideFreshOrganic1>
                        <Payment>Payment.</Payment>
                        <PaymentUponReceipt>
                          {" "}
                          Payment upon receipt of goods, Payment by card in the
                          department, Google Pay,
                        </PaymentUponReceipt>
                      </MarketsideFreshOrganic1>
                      <MarketsideFreshOrganic1>
                        Online card, -5% discount in case of payment
                      </MarketsideFreshOrganic1>
                    </ListItemContainer>
                  </Title1>
                </Payment1>
              </List>
              <ListItem1>
                <DivnoticeIcon loading="lazy" alt="" src={NoticeIcon} />
                <Title2>
                  <StrongWarrantyContainer>
                    <PaymentUponReceipt>
                      <MarketsideFreshOrganic1>
                        <Payment>Warranty.</Payment>
                        <PaymentUponReceipt>
                          The Consumer Protection Act does not provide for the
                          return of this product of proper
                        </PaymentUponReceipt>
                      </MarketsideFreshOrganic1>
                      <MarketsideFreshOrganic1>
                        quality.
                      </MarketsideFreshOrganic1>
                    </PaymentUponReceipt>
                  </StrongWarrantyContainer>
                </Title2>
              </ListItem1>
            </Main5>
          </MainDiv>
        </ProductName>
      </ProductDetail>
    </LayoutRoot>
  );
};

ProductDetails.propTypes = {
  className: PropTypes.string,
};

export default ProductDetails;
