import styled from "styled-components";
import Product from "./Product";
import ProductPrice from "./ProductPrice";
import PropTypes from "prop-types";

const RelatedProducts = styled.h3`
  margin: 0;
  position: relative;
  font-size: inherit;
  letter-spacing: -0.36px;
  font-weight: 700;
  font-family: inherit;
`;
const LargeGardenSpinach = styled.p`
  margin: 0;
`;
const LinkLargeContainer = styled.div`
  position: relative;
  letter-spacing: -0.26px;
  line-height: 16.9px;
  font-weight: 500;
  flex-shrink: 0;
`;
const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8.8px;
  text-align: left;
  font-size: 13px;
  color: #030712;
`;
const Product1 = styled.div`
  width: 226.7px;
  border-bottom: 1px solid #e5e7eb;
  box-sizing: border-box;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px 15px 15px;
  gap: 20px;
`;
const Link4 = styled.div`
  width: 87.8px;
  height: 175.7px;
  position: relative;
  display: none;
`;
const DiscountValue = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  text-transform: uppercase;
  font-weight: 800;
  display: inline-block;
  min-width: 22px;
`;
const Spanbadge = styled.div`
  align-self: stretch;
  border-radius: 14px 40px 40px 14px;
  background-color: #dc2626;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 6px 8px;
  z-index: 2;
`;
const ProductBadge = styled.div`
  width: 39.1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 4px 0px 0px;
  box-sizing: border-box;
`;
const Link1129500x500jpg = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const Divdot = styled.div`
  position: absolute;
  top: calc(50% - 3px);
  left: calc(50% - 7px);
  border-radius: 3px;
  background-color: #facc15;
  width: 6px;
  height: 6px;
`;
const Divdot1 = styled.div`
  position: absolute;
  top: calc(50% - 3px);
  left: calc(50% + 1px);
  border-radius: 3px;
  background-color: #fff;
  width: 6px;
  height: 6px;
`;
const Link5 = styled.div`
  height: 14px;
  width: 24px;
  position: relative;
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 1;
`;
const FirstRelatedProductName = styled.div`
  width: 175.7px;
  margin: 0 !important;
  position: absolute;
  bottom: -148.7px;
  left: -148.6px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 156.7px 5px 5px;
  box-sizing: border-box;
`;
const LinkIcon = styled.img`
  height: 32px;
  width: 32px;
  position: relative;
  border-radius: 16px;
  z-index: 3;
`;
const ProductPreview = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const ProductItem = styled.div`
  width: 190.6px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
`;
const LinkPeach = styled.div`
  position: relative;
  letter-spacing: -0.26px;
  line-height: 16.9px;
  font-weight: 500;
  display: inline-block;
  min-width: 79.3px;
`;
const ImgRated333OutOf = styled.img`
  height: 11px;
  width: 66.9px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const FirstRelatedProduct = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 12px;
  display: inline-block;
  min-width: 8px;
  flex-shrink: 0;
`;
const ProductReview = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 7.9px;
  font-size: 12px;
  color: #6b7280;
`;
const YellowPotatoes = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8.9px;
`;
const Ins = styled.b`
  position: relative;
  letter-spacing: -0.44px;
  line-height: 22px;
  display: inline-block;
  min-width: 52.2px;
  white-space: nowrap;
  @media screen and (max-width: 450px) {
    font-size: 18px;
    line-height: 18px;
  }
`;
const Del = styled.div`
  position: relative;
  font-size: 16.1px;
  text-decoration: line-through;
  letter-spacing: -0.44px;
  line-height: 17px;
  font-weight: 500;
  color: #111827;
  display: inline-block;
  min-width: 34px;
  white-space: nowrap;
`;
const YellowPotatoesPrice = styled.div`
  flex: 0.7508;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px 0px 7.6px;
  gap: 6.4px;
  font-size: 22px;
  color: #dc2626;
  font-family: Barlow;
`;
const LinkAddToCartPeachE = styled.img`
  height: 34px;
  width: 36px;
  position: relative;
  border-radius: 8px;
`;
const InStock = styled.b`
  position: relative;
  letter-spacing: -0.32px;
  text-transform: uppercase;
  display: inline-block;
  min-width: 50.2px;
`;
const PeachStock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px 8px;
`;
const PeachAction = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 16px;
  font-size: 11px;
  color: #16a34a;
`;
const ProductDescription = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 13.5px;
  text-align: left;
  font-size: 13px;
  color: #030712;
`;
const Product2 = styled.div`
  height: 383.5px;
  border-bottom: 1px solid #e5e7eb;
  border-left: 1px solid #e5e7eb;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px 16px 33.9px;
  gap: 168.7px;
  @media screen and (max-width: 450px) {
    padding-top: 20px;
    padding-bottom: 22px;
    box-sizing: border-box;
  }
`;
const SecondRelatedProduct = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  text-transform: uppercase;
  font-weight: 800;
  display: inline-block;
  min-width: 21px;
`;
const Spanbadge1 = styled.div`
  align-self: stretch;
  border-radius: 14px 40px 40px 14px;
  background-color: #dc2626;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 6px 8px;
  flex-shrink: 0;
  z-index: 2;
`;
const SpanbadgeWrapper = styled.div`
  width: 38.3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 4px 0px 0px;
  box-sizing: border-box;
`;
const SecondRelatedProductName = styled.div`
  width: 175.7px;
  margin: 0 !important;
  position: absolute;
  bottom: -148.7px;
  left: -148.7px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 156.7px 5px 5px;
  box-sizing: border-box;
`;
const LinkIcon1 = styled.img`
  height: 32px;
  width: 32px;
  position: relative;
  border-radius: 16px;
  flex-shrink: 0;
  z-index: 3;
`;
const FrameParent = styled.div`
  width: 190.7px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
`;
const PotatoReview = styled.div`
  height: 12.5px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 8px;
`;
const Ins1 = styled.b`
  position: relative;
  letter-spacing: -0.44px;
  line-height: 22px;
  display: inline-block;
  min-width: 54px;
  flex-shrink: 0;
  white-space: nowrap;
  @media screen and (max-width: 450px) {
    font-size: 18px;
    line-height: 18px;
  }
`;
const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px 3px;
`;
const Del1 = styled.div`
  position: relative;
  font-size: 16.1px;
  text-decoration: line-through;
  letter-spacing: -0.44px;
  line-height: 19px;
  font-weight: 500;
  color: #111827;
  display: inline-block;
  min-width: 34.4px;
  flex-shrink: 0;
  white-space: nowrap;
`;
const YellowPotatoesDiscount = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 6.3px;
  font-size: 22px;
  color: #dc2626;
  font-family: Barlow;
`;
const PotatoReviewParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 13.5px;
`;
const FrameGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 19px;
  flex-shrink: 0;
  font-size: 12px;
  color: #6b7280;
`;
const Product3 = styled.div`
  border-bottom: 1px solid #e5e7eb;
  border-left: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px 16px 16px;
  gap: 168.7px;
  z-index: 4;
  margin-left: -0.1px;
  @media screen and (max-width: 450px) {
    margin-left: 0;
  }
`;
const ProductParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px;
  flex-shrink: 0;
  row-gap: 20px;
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
  }
`;
const BadgeIcons = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  text-transform: uppercase;
  font-weight: 800;
  display: inline-block;
  min-width: 20px;
`;
const SpanbadgeContainer = styled.div`
  width: 37.7px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 4px 0px 0px;
  box-sizing: border-box;
`;
const LinkFresh = styled.div`
  position: relative;
  letter-spacing: -0.26px;
  line-height: 16.9px;
  font-weight: 500;
`;
const RatingValues = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 12px;
  display: inline-block;
  min-width: 7.3px;
`;
const ProductRating = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 8px;
  font-size: 12px;
  color: #6b7280;
`;
const Ins2 = styled.b`
  position: relative;
  letter-spacing: -0.44px;
  line-height: 22px;
  display: inline-block;
  min-width: 59.2px;
  white-space: nowrap;
  @media screen and (max-width: 450px) {
    font-size: 18px;
    line-height: 18px;
  }
`;
const InsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px 2.9px;
`;
const Del2 = styled.div`
  position: relative;
  font-size: 16.1px;
  text-decoration: line-through;
  letter-spacing: -0.44px;
  line-height: 19px;
  font-weight: 500;
  color: #111827;
  display: inline-block;
  min-width: 42.5px;
  white-space: nowrap;
`;
const FrameParent1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px 0px 5.6px;
  gap: 6.4px;
  font-size: 22px;
  color: #dc2626;
  font-family: Barlow;
`;
const Product4 = styled.div`
  height: 383.5px;
  border-bottom: 1px solid #e5e7eb;
  border-left: 1px solid #e5e7eb;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px 16px 33.9px;
  gap: 168.7px;
  flex-shrink: 0;
  @media screen and (max-width: 450px) {
    padding-top: 20px;
    padding-bottom: 22px;
    box-sizing: border-box;
  }
`;
const LinkFresh1 = styled.div`
  position: relative;
  letter-spacing: -0.26px;
  line-height: 17px;
  font-weight: 500;
  white-space: nowrap;
`;
const Heading = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 26px 0px 0px;
  flex-shrink: 0;
`;
const Heading2Parent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
`;
const Product5 = styled.div`
  border-bottom: 1px solid #e5e7eb;
  border-left: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px 14px 32px 15px;
  gap: 20px;
  flex-shrink: 0;
  text-align: left;
  font-size: 13px;
  color: #030712;
  @media screen and (max-width: 450px) {
    padding-top: 20px;
    padding-bottom: 21px;
    box-sizing: border-box;
  }
`;
const Div = styled.div`
  width: 21.2px;
  position: relative;
  letter-spacing: -0.32px;
  text-transform: uppercase;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  min-width: 21.2px;
`;
const SpanbadgeFrame = styled.div`
  width: 38.9px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 4px 0px 0px;
  box-sizing: border-box;
`;
const LinkFresh2 = styled.div`
  position: relative;
  letter-spacing: -0.26px;
  line-height: 17px;
  font-weight: 500;
`;
const Heading1 = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Div1 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 12px;
  display: inline-block;
  min-width: 8px;
`;
const ImgRated400OutOf5Parent = styled.div`
  height: 18px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px 0px 5.5px;
  box-sizing: border-box;
  gap: 7.9px;
  font-size: 12px;
  color: #6b7280;
`;
const Ins3 = styled.b`
  position: relative;
  letter-spacing: -0.44px;
  line-height: 22px;
  display: inline-block;
  min-width: 53px;
  white-space: nowrap;
  @media screen and (max-width: 450px) {
    font-size: 18px;
    line-height: 18px;
  }
`;
const Del3 = styled.div`
  position: relative;
  font-size: 16.1px;
  text-decoration: line-through;
  letter-spacing: -0.44px;
  line-height: 19px;
  font-weight: 500;
  color: #111827;
  display: inline-block;
  min-width: 37.2px;
  white-space: nowrap;
`;
const FrameParent2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px 0px 11.1px;
  gap: 6px;
  font-size: 22px;
  color: #dc2626;
  font-family: Barlow;
`;
const Heading2Group = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
  text-align: left;
  font-size: 13px;
  color: #030712;
`;
const Product6 = styled.div`
  width: 226.7px;
  border-bottom: 1px solid #e5e7eb;
  border-left: 1px solid #e5e7eb;
  box-sizing: border-box;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px 14px 32px 15px;
  gap: 168.7px;
  @media screen and (max-width: 450px) {
    padding-top: 20px;
    padding-bottom: 21px;
    box-sizing: border-box;
  }
`;
const After = styled.div`
  align-self: stretch;
  width: 1360px;
  position: relative;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  box-sizing: border-box;
  flex-shrink: 0;
  display: none;
`;
const Section = styled.div`
  width: 1360px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  box-sizing: border-box;
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  z-index: 5;
  text-align: center;
  font-size: 10px;
  color: #fef2f2;
`;
const ProductsRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  flex-shrink: 0;
  max-width: 100%;
  text-align: left;
  font-size: 18px;
  color: #030712;
  font-family: Inter;
`;

const Products = ({ className = "" }) => {
  return (
    <ProductsRoot className={className}>
      <RelatedProducts>Related products</RelatedProducts>
      <Section>
        <Product1>
          <Product
            productBadges="16%"
            link1104500x500jpg="/link--1104500x500jpg@2x.png"
          />
          <ProductInfo>
            <LinkLargeContainer>
              <LargeGardenSpinach>{`Large Garden Spinach & Herb`}</LargeGardenSpinach>
              <LargeGardenSpinach>Wrap Tortillas – 15oz_6ct</LargeGardenSpinach>
            </LinkLargeContainer>
            <ProductPrice
              imgRated367OutOf5="/img--rated-367-out-of-5.svg"
              ins="$27.90"
              del="$32.90"
              linkAddToCartLargeGardenS="/link--add-to-cart-large-garden-spinach--herb-wrap-tortillas--15oz-6ct.svg"
            />
          </ProductInfo>
        </Product1>
        <ProductParent>
          <Product2>
            <Link4 />
            <Link4 />
            <ProductItem>
              <ProductBadge>
                <Spanbadge>
                  <DiscountValue>58%</DiscountValue>
                </Spanbadge>
              </ProductBadge>
              <ProductPreview>
                <FirstRelatedProductName>
                  <Link1129500x500jpg
                    alt=""
                    src="/link--1129500x500jpg@2x.png"
                  />
                  <Link5>
                    <Divdot />
                    <Divdot1 />
                  </Link5>
                </FirstRelatedProductName>
                <LinkIcon loading="lazy" alt="" src="/link-7.svg" />
              </ProductPreview>
            </ProductItem>
            <ProductDescription>
              <YellowPotatoes>
                <LinkPeach>Peach – each</LinkPeach>
                <ProductReview>
                  <ImgRated333OutOf alt="" src="/img--rated-333-out-of-5.svg" />
                  <FirstRelatedProduct>3</FirstRelatedProduct>
                </ProductReview>
              </YellowPotatoes>
              <YellowPotatoesPrice>
                <Ins>$0.75</Ins>
                <Del>$1.75</Del>
              </YellowPotatoesPrice>
              <PeachAction>
                <LinkAddToCartPeachE
                  loading="lazy"
                  alt=""
                  src="/link--add-to-cart-peach--each.svg"
                />
                <PeachStock>
                  <InStock>In Stock</InStock>
                </PeachStock>
              </PeachAction>
            </ProductDescription>
          </Product2>
          <Product3>
            <Link4 />
            <Link4 />
            <FrameParent>
              <SpanbadgeWrapper>
                <Spanbadge1>
                  <SecondRelatedProduct>75%</SecondRelatedProduct>
                </Spanbadge1>
              </SpanbadgeWrapper>
              <ProductPreview>
                <SecondRelatedProductName>
                  <Link1129500x500jpg
                    alt=""
                    src="/link--139500x500jpg@2x.png"
                  />
                  <Link5>
                    <Divdot />
                    <Divdot1 />
                  </Link5>
                </SecondRelatedProductName>
                <LinkIcon1 loading="lazy" alt="" src="/link-9.svg" />
              </ProductPreview>
            </FrameParent>
            <ProductInfo>
              <LinkLargeContainer>
                <LargeGardenSpinach>
                  Yellow Potatoes Whole Fresh,
                </LargeGardenSpinach>
                <LargeGardenSpinach>5lb Bag</LargeGardenSpinach>
              </LinkLargeContainer>
              <FrameGroup>
                <PotatoReviewParent>
                  <PotatoReview>
                    <ImgRated333OutOf
                      alt=""
                      src="/img--rated-367-out-of-5.svg"
                    />
                    <FirstRelatedProduct>3</FirstRelatedProduct>
                  </PotatoReview>
                  <YellowPotatoesDiscount>
                    <PriceInfo>
                      <Ins1>$0.50</Ins1>
                    </PriceInfo>
                    <Del1>$1.99</Del1>
                  </YellowPotatoesDiscount>
                </PotatoReviewParent>
                <PeachAction>
                  <LinkAddToCartPeachE
                    loading="lazy"
                    alt=""
                    src="/link--add-to-cart-large-garden-spinach--herb-wrap-tortillas--15oz-6ct.svg"
                  />
                  <PeachStock>
                    <InStock>In Stock</InStock>
                  </PeachStock>
                </PeachAction>
              </FrameGroup>
            </ProductInfo>
          </Product3>
        </ProductParent>
        <Product4>
          <Link4 />
          <Link4 />
          <FrameParent>
            <SpanbadgeContainer>
              <Spanbadge>
                <BadgeIcons>14%</BadgeIcons>
              </Spanbadge>
            </SpanbadgeContainer>
            <ProductPreview>
              <SecondRelatedProductName>
                <Link1129500x500jpg alt="" src="/link--155500x500jpg@2x.png" />
                <Link5>
                  <Divdot />
                  <Divdot1 />
                </Link5>
              </SecondRelatedProductName>
              <LinkIcon loading="lazy" alt="" src="/link-10.svg" />
            </ProductPreview>
          </FrameParent>
          <ProductDescription>
            <YellowPotatoes>
              <LinkFresh>Fresh Cauliflower, Each</LinkFresh>
              <ProductRating>
                <ImgRated333OutOf alt="" src="/img--rated-333-out-of-5.svg" />
                <RatingValues>2</RatingValues>
              </ProductRating>
            </YellowPotatoes>
            <FrameParent1>
              <InsWrapper>
                <Ins2>$12.79</Ins2>
              </InsWrapper>
              <Del2>$14.79</Del2>
            </FrameParent1>
            <PeachAction>
              <LinkAddToCartPeachE
                loading="lazy"
                alt=""
                src="/link--add-to-cart-peach--each.svg"
              />
              <PeachStock>
                <InStock>In Stock</InStock>
              </PeachStock>
            </PeachAction>
          </ProductDescription>
        </Product4>
        <Product5>
          <Product
            productBadges="36%"
            link1104500x500jpg="/link--153500x500jpg@2x.png"
          />
          <Heading2Parent>
            <Heading>
              <LinkFresh1>Fresh Broccoli Crowns, Each</LinkFresh1>
            </Heading>
            <ProductPrice
              imgRated367OutOf5="/img--rated-333-out-of-5.svg"
              ins="$11.54"
              del="$17.88"
              linkAddToCartLargeGardenS="/link--add-to-cart-peach--each.svg"
            />
          </Heading2Parent>
        </Product5>
        <Product6>
          <Link4 />
          <Link4 />
          <ProductItem>
            <SpanbadgeFrame>
              <Spanbadge>
                <Div>26%</Div>
              </Spanbadge>
            </SpanbadgeFrame>
            <ProductPreview>
              <FirstRelatedProductName>
                <Link1129500x500jpg alt="" src="/link--161500x500jpg@2x.png" />
                <Link5>
                  <Divdot />
                  <Divdot1 />
                </Link5>
              </FirstRelatedProductName>
              <LinkIcon alt="" src="/link-7.svg" />
            </ProductPreview>
          </ProductItem>
          <Heading2Group>
            <Heading1>
              <LinkFresh2>Fresh Purple Eggplant</LinkFresh2>
            </Heading1>
            <ImgRated400OutOf5Parent>
              <ImgRated333OutOf alt="" src="/img--rated-333-out-of-5.svg" />
              <Div1>3</Div1>
            </ImgRated400OutOf5Parent>
            <FrameParent2>
              <InsWrapper>
                <Ins3>$2.99</Ins3>
              </InsWrapper>
              <Del3>$3.99</Del3>
            </FrameParent2>
            <PeachAction>
              <LinkAddToCartPeachE
                loading="lazy"
                alt=""
                src="/link--add-to-cart-peach--each.svg"
              />
              <PeachStock>
                <InStock>In Stock</InStock>
              </PeachStock>
            </PeachAction>
          </Heading2Group>
        </Product6>
        <After />
      </Section>
    </ProductsRoot>
  );
};

Products.propTypes = {
  className: PropTypes.string,
};

export default Products;
