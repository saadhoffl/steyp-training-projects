import styled from "styled-components";
import ProductContainers from "./ProductContainers";
import FrameComponent2 from "./FrameComponent2";
import PropTypes from "prop-types";

const LinkDescription = styled.div`
  height: 20px;
  position: relative;
  letter-spacing: -0.32px;
  line-height: 24px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  min-width: 83px;
`;
const TabLabels = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) 0px 0px;
`;
const TabLink = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 24px;
  display: inline-block;
  min-width: 85.2px;
`;
const Tabs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-10xl-6);
  flex-shrink: 0;
`;
const Link = styled.div`
  width: 82.6px;
  height: 2px;
  position: relative;
  background-color: var(--color-gray-500);
  flex-shrink: 0;
`;
const Tablist = styled.div`
  align-self: stretch;
  height: 45px;
  border-bottom: 1px solid var(--color-gainsboro-100);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-2xl);
  gap: var(--gap-lgi);
`;
const QuisqueVariusDiam = styled.p`
  margin: 0;
`;
const QuisqueVariusDiamContainer = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 24px;
  display: inline-block;
  max-width: 100%;
`;
const TablistParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xl);
  max-width: 100%;
`;
const DetailsContent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
  max-width: 100%;
`;
const RelatedProducts = styled.h3`
  margin: 0;
  position: relative;
  font-size: inherit;
  letter-spacing: -0.36px;
  font-weight: 700;
  font-family: inherit;
`;
const LinkLargeContainer = styled.div`
  position: relative;
  letter-spacing: -0.26px;
  line-height: 16.9px;
  font-weight: 500;
  flex-shrink: 0;
`;
const ProductTitles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xs-8);
  text-align: left;
  font-size: var(--font-size-smi);
  color: var(--color-gray-500);
`;
const Product = styled.div`
  width: 226.7px;
  border-bottom: 1px solid var(--color-gainsboro-100);
  box-sizing: border-box;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xl) var(--padding-mini) var(--padding-mini);
  gap: var(--gap-xl);
`;
const Link1 = styled.div`
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
  border-radius: var(--br-sm) var(--br-21xl) var(--br-21xl) var(--br-sm);
  background-color: var(--color-crimson);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs) var(--padding-5xs);
  z-index: 2;
`;
const FirstRelatedProductBadge = styled.div`
  width: 39.1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) 0px 0px;
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
  border-radius: var(--br-10xs);
  background-color: var(--color-gold);
  width: 6px;
  height: 6px;
`;
const Divdot1 = styled.div`
  position: absolute;
  top: calc(50% - 3px);
  left: calc(50% + 1px);
  border-radius: var(--br-10xs);
  background-color: var(--color-white);
  width: 6px;
  height: 6px;
`;
const Link2 = styled.div`
  height: 14px;
  width: 24px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-gray-900);
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
  padding: var(--padding-137xl-7) var(--padding-8xs) var(--padding-8xs);
  box-sizing: border-box;
`;
const LinkIcon = styled.img`
  height: 32px;
  width: 32px;
  position: relative;
  border-radius: var(--br-base);
  z-index: 3;
`;
const FirstRelatedProductDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const FirstRelatedProductInfo = styled.div`
  width: 190.6px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-xl);
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
const FirstRelatedProductRating = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-5xs-9);
  font-size: var(--font-size-xs);
  color: var(--color-slategray);
`;
const FirstRelatedProductPriceIn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xs-9);
`;
const Ins = styled.b`
  position: relative;
  letter-spacing: -0.44px;
  line-height: 22px;
  display: inline-block;
  min-width: 52.2px;
  white-space: nowrap;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
    line-height: 18px;
  }
`;
const Del = styled.div`
  position: relative;
  font-size: var(--font-size-base-1);
  text-decoration: line-through;
  letter-spacing: -0.44px;
  line-height: 17px;
  font-weight: 500;
  color: var(--color-gray-300);
  display: inline-block;
  min-width: 34px;
  white-space: nowrap;
`;
const FirstRelatedProductDiscount = styled.div`
  flex: 0.7508;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-5xs-6);
  gap: var(--gap-6xs-4);
  font-size: var(--font-size-3xl);
  color: var(--color-crimson);
  font-family: var(--font-barlow);
`;
const LinkAddToCartPeachE = styled.img`
  height: 34px;
  width: 36px;
  position: relative;
  border-radius: var(--br-5xs);
`;
const InStock = styled.b`
  position: relative;
  letter-spacing: -0.32px;
  text-transform: uppercase;
  display: inline-block;
  min-width: 50.2px;
`;
const FirstRelatedProductStockIn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-5xs);
`;
const FirstRelatedProductCartBut = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-base);
  font-size: var(--font-size-2xs);
  color: var(--color-forestgreen);
`;
const FirstRelatedProductPrice = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-sm-5);
  text-align: left;
  font-size: var(--font-size-smi);
  color: var(--color-gray-500);
`;
const Product1 = styled.div`
  flex: 1;
  border-bottom: 1px solid var(--color-gainsboro-100);
  border-left: 1px solid var(--color-gainsboro-100);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xl) var(--padding-base) var(--padding-14xl-9);
  gap: var(--gap-149xl-7);
  @media screen and (max-width: 450px) {
    padding-top: var(--padding-xl);
    padding-bottom: var(--padding-3xl);
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
  border-radius: var(--br-sm) var(--br-21xl) var(--br-21xl) var(--br-sm);
  background-color: var(--color-crimson);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs) var(--padding-5xs);
  flex-shrink: 0;
  z-index: 2;
`;
const SecondRelatedProductDiscoun = styled.div`
  width: 38.3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) 0px 0px;
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
  padding: var(--padding-137xl-7) var(--padding-8xs) var(--padding-8xs);
  box-sizing: border-box;
`;
const LinkIcon1 = styled.img`
  height: 32px;
  width: 32px;
  position: relative;
  border-radius: var(--br-base);
  flex-shrink: 0;
  z-index: 3;
`;
const SecondRelatedProductBadge = styled.div`
  width: 190.7px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-xl);
`;
const SecondRelatedProductRating = styled.div`
  height: 12.5px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-5xs);
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
    font-size: var(--font-size-lg);
    line-height: 18px;
  }
`;
const SecondRelatedProductNewPri = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-10xs);
`;
const Del1 = styled.div`
  position: relative;
  font-size: var(--font-size-base-1);
  text-decoration: line-through;
  letter-spacing: -0.44px;
  line-height: 19px;
  font-weight: 500;
  color: var(--color-gray-300);
  display: inline-block;
  min-width: 34.4px;
  flex-shrink: 0;
  white-space: nowrap;
`;
const SecondRelatedProductDiscoun1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-6xs-3);
  font-size: var(--font-size-3xl);
  color: var(--color-crimson);
  font-family: var(--font-barlow);
`;
const SecondRelatedProductRating1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-sm-5);
`;
const SecondRelatedProductRating2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-lgi);
  flex-shrink: 0;
  font-size: var(--font-size-xs);
  color: var(--color-slategray);
`;
const Product2 = styled.div`
  border-bottom: 1px solid var(--color-gainsboro-100);
  border-left: 1px solid var(--color-gainsboro-100);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xl) var(--padding-base) var(--padding-base);
  gap: var(--gap-149xl-7);
  z-index: 4;
`;
const SecondRelatedProduct1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  margin-top: -383.5px;
`;
const ProductParent = styled.div`
  align-self: stretch;
  width: 453.3px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
`;
const BadgeIcons = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  text-transform: uppercase;
  font-weight: 800;
  display: inline-block;
  min-width: 20px;
`;
const SpanbadgeWrapper = styled.div`
  width: 37.7px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) 0px 0px;
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
const ImgRated300OutOf5Parent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  font-size: var(--font-size-xs);
  color: var(--color-slategray);
`;
const Ins2 = styled.b`
  position: relative;
  letter-spacing: -0.44px;
  line-height: 22px;
  display: inline-block;
  min-width: 59.2px;
  white-space: nowrap;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
    line-height: 18px;
  }
`;
const InsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-10xs-9);
`;
const Del2 = styled.div`
  position: relative;
  font-size: var(--font-size-base-1);
  text-decoration: line-through;
  letter-spacing: -0.44px;
  line-height: 19px;
  font-weight: 500;
  color: var(--color-gray-300);
  display: inline-block;
  min-width: 42.5px;
  white-space: nowrap;
`;
const FrameDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-7xs-6);
  gap: var(--gap-6xs-4);
  font-size: var(--font-size-3xl);
  color: var(--color-crimson);
  font-family: var(--font-barlow);
`;
const Product3 = styled.div`
  align-self: stretch;
  border-bottom: 1px solid var(--color-gainsboro-100);
  border-left: 1px solid var(--color-gainsboro-100);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xl) var(--padding-base) var(--padding-14xl-9);
  gap: var(--gap-149xl-7);
  flex-shrink: 0;
  @media screen and (max-width: 450px) {
    padding-top: var(--padding-xl);
    padding-bottom: var(--padding-3xl);
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
  padding: 0px var(--padding-7xl) 0px 0px;
  flex-shrink: 0;
`;
const Heading2Parent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const Product4 = styled.div`
  border-bottom: 1px solid var(--color-gainsboro-100);
  border-left: 1px solid var(--color-gainsboro-100);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xl) var(--padding-sm) var(--padding-13xl)
    var(--padding-mini);
  gap: var(--gap-xl);
  flex-shrink: 0;
  text-align: left;
  font-size: var(--font-size-smi);
  color: var(--color-gray-500);
  @media screen and (max-width: 450px) {
    padding-top: var(--padding-xl);
    padding-bottom: var(--padding-2xl);
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
const SpanbadgeContainer = styled.div`
  width: 38.9px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) 0px 0px;
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
  padding: 0px 0px var(--padding-7xs-5);
  box-sizing: border-box;
  gap: var(--gap-5xs-9);
  font-size: var(--font-size-xs);
  color: var(--color-slategray);
`;
const Ins3 = styled.b`
  position: relative;
  letter-spacing: -0.44px;
  line-height: 22px;
  display: inline-block;
  min-width: 53px;
  white-space: nowrap;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
    line-height: 18px;
  }
`;
const Del3 = styled.div`
  position: relative;
  font-size: var(--font-size-base-1);
  text-decoration: line-through;
  letter-spacing: -0.44px;
  line-height: 19px;
  font-weight: 500;
  color: var(--color-gray-300);
  display: inline-block;
  min-width: 37.2px;
  white-space: nowrap;
`;
const FrameParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-xs-1);
  gap: var(--gap-7xs);
  font-size: var(--font-size-3xl);
  color: var(--color-crimson);
  font-family: var(--font-barlow);
`;
const Heading2Group = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  text-align: left;
  font-size: var(--font-size-smi);
  color: var(--color-gray-500);
`;
const Product5 = styled.div`
  width: 226.7px;
  border-bottom: 1px solid var(--color-gainsboro-100);
  border-left: 1px solid var(--color-gainsboro-100);
  box-sizing: border-box;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xl) var(--padding-sm) var(--padding-13xl)
    var(--padding-mini);
  gap: var(--gap-149xl-7);
  @media screen and (max-width: 450px) {
    padding-top: var(--padding-xl);
    padding-bottom: var(--padding-2xl);
    box-sizing: border-box;
  }
`;
const After = styled.div`
  align-self: stretch;
  width: 1360px;
  position: relative;
  border-radius: var(--br-5xs);
  border: 1px solid var(--color-gainsboro-100);
  box-sizing: border-box;
  flex-shrink: 0;
  display: none;
`;
const Section = styled.div`
  width: 1360px;
  flex: 1;
  border-radius: var(--br-5xs);
  border: 1px solid var(--color-gainsboro-100);
  box-sizing: border-box;
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  z-index: 5;
  text-align: center;
  font-size: var(--font-size-3xs);
  color: var(--color-lavenderblush);
`;
const RelatedProductsParent = styled.div`
  height: 424.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
  max-width: 100%;
  font-size: var(--font-size-lg);
`;
const ProductDetails = styled.div`
  width: 1360px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-35xl);
  max-width: 100%;
  @media screen and (max-width: 750px) {
    gap: var(--gap-8xl);
  }
`;
const ProductDetailsWrapperRoot = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl) var(--padding-20xl-9);
  box-sizing: border-box;
  max-width: 100%;
  flex-shrink: 0;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-gray-500);
  font-family: var(--font-inter);
`;

const FrameComponent5 = ({ className = "" }) => {
  return (
    <ProductDetailsWrapperRoot className={className}>
      <ProductDetails>
        <DetailsContent>
          <TablistParent>
            <Tablist>
              <Tabs>
                <TabLabels>
                  <LinkDescription>Description</LinkDescription>
                </TabLabels>
                <TabLink>Reviews (2)</TabLink>
              </Tabs>
              <Link />
            </Tablist>
            <QuisqueVariusDiamContainer>
              <QuisqueVariusDiam>
                Quisque varius diam vel metus mattis, id aliquam diam rhoncus.
                Proin vitae magna in dui finibus malesuada et at nulla. Morbi
                elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce
              </QuisqueVariusDiam>
              <QuisqueVariusDiam>
                fermentum iaculis nibh, at sodales leo maximus a. Nullam
                ultricies sodales nunc, in pellentesque lorem mattis quis. Cras
                imperdiet est in nunc tristique lacinia. Nullam aliquam mauris
                eu
              </QuisqueVariusDiam>
              <QuisqueVariusDiam>
                accumsan tincidunt. Suspendisse velit ex, aliquet vel ornare
                vel, dignissim a tortor.
              </QuisqueVariusDiam>
            </QuisqueVariusDiamContainer>
          </TablistParent>
          <QuisqueVariusDiamContainer>
            <QuisqueVariusDiam>
              Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat
              auctor, eleifend nunc a, lobortis neque. Praesent aliquam
              dignissim viverra. Maecenas lacus odio, feugiat eu nunc sit amet,
            </QuisqueVariusDiam>
            <QuisqueVariusDiam>
              maximus sagittis dolor. Vivamus nisi sapien, elementum sit amet
              eros sit amet, ultricies cursus ipsum. Sed consequat luctus
              ligula. Curabitur laoreet rhoncus blandit. Aenean vel diam ut
            </QuisqueVariusDiam>
            <QuisqueVariusDiam>
              arcu pharetra dignissim ut sed leo. Vivamus faucibus, ipsum in
              vestibulum vulputate, lorem orci convallis quam, sit amet
              consequat nulla felis pharetra lacus. Duis semper erat mauris, sed
            </QuisqueVariusDiam>
            <QuisqueVariusDiam>egestas purus commodo vel.</QuisqueVariusDiam>
          </QuisqueVariusDiamContainer>
        </DetailsContent>
        <RelatedProductsParent>
          <RelatedProducts>Related products</RelatedProducts>
          <Section>
            <Product>
              <ProductContainers
                productBadges="16%"
                link1104500x500jpg="/link--1104500x500jpg@2x.png"
              />
              <ProductTitles>
                <LinkLargeContainer>
                  <QuisqueVariusDiam>{`Large Garden Spinach & Herb`}</QuisqueVariusDiam>
                  <QuisqueVariusDiam>
                    Wrap Tortillas – 15oz_6ct
                  </QuisqueVariusDiam>
                </LinkLargeContainer>
                <FrameComponent2
                  imgRated367OutOf5="/img--rated-367-out-of-5.svg"
                  ins="$27.90"
                  del="$32.90"
                  linkAddToCartLargeGardenS="/link--add-to-cart-large-garden-spinach--herb-wrap-tortillas--15oz-6ct.svg"
                />
              </ProductTitles>
            </Product>
            <ProductParent>
              <Product1>
                <Link1 />
                <Link1 />
                <FirstRelatedProductInfo>
                  <FirstRelatedProductBadge>
                    <Spanbadge>
                      <DiscountValue>58%</DiscountValue>
                    </Spanbadge>
                  </FirstRelatedProductBadge>
                  <FirstRelatedProductDetails>
                    <FirstRelatedProductName>
                      <Link1129500x500jpg
                        alt=""
                        src="/link--1129500x500jpg@2x.png"
                      />
                      <Link2>
                        <Divdot />
                        <Divdot1 />
                      </Link2>
                    </FirstRelatedProductName>
                    <LinkIcon loading="lazy" alt="" src="/link-7.svg" />
                  </FirstRelatedProductDetails>
                </FirstRelatedProductInfo>
                <FirstRelatedProductPrice>
                  <FirstRelatedProductPriceIn>
                    <LinkPeach>Peach – each</LinkPeach>
                    <FirstRelatedProductRating>
                      <ImgRated333OutOf
                        alt=""
                        src="/img--rated-333-out-of-5.svg"
                      />
                      <FirstRelatedProduct>3</FirstRelatedProduct>
                    </FirstRelatedProductRating>
                  </FirstRelatedProductPriceIn>
                  <FirstRelatedProductDiscount>
                    <Ins>$0.75</Ins>
                    <Del>$1.75</Del>
                  </FirstRelatedProductDiscount>
                  <FirstRelatedProductCartBut>
                    <LinkAddToCartPeachE
                      loading="lazy"
                      alt=""
                      src="/link--add-to-cart-peach--each.svg"
                    />
                    <FirstRelatedProductStockIn>
                      <InStock>In Stock</InStock>
                    </FirstRelatedProductStockIn>
                  </FirstRelatedProductCartBut>
                </FirstRelatedProductPrice>
              </Product1>
              <SecondRelatedProduct1>
                <Product2>
                  <Link1 />
                  <Link1 />
                  <SecondRelatedProductBadge>
                    <SecondRelatedProductDiscoun>
                      <Spanbadge1>
                        <SecondRelatedProduct>75%</SecondRelatedProduct>
                      </Spanbadge1>
                    </SecondRelatedProductDiscoun>
                    <FirstRelatedProductDetails>
                      <SecondRelatedProductName>
                        <Link1129500x500jpg
                          alt=""
                          src="/link--139500x500jpg@2x.png"
                        />
                        <Link2>
                          <Divdot />
                          <Divdot1 />
                        </Link2>
                      </SecondRelatedProductName>
                      <LinkIcon1 loading="lazy" alt="" src="/link-9.svg" />
                    </FirstRelatedProductDetails>
                  </SecondRelatedProductBadge>
                  <ProductTitles>
                    <LinkLargeContainer>
                      <QuisqueVariusDiam>
                        Yellow Potatoes Whole Fresh,
                      </QuisqueVariusDiam>
                      <QuisqueVariusDiam>5lb Bag</QuisqueVariusDiam>
                    </LinkLargeContainer>
                    <SecondRelatedProductRating2>
                      <SecondRelatedProductRating1>
                        <SecondRelatedProductRating>
                          <ImgRated333OutOf
                            alt=""
                            src="/img--rated-367-out-of-5.svg"
                          />
                          <FirstRelatedProduct>3</FirstRelatedProduct>
                        </SecondRelatedProductRating>
                        <SecondRelatedProductDiscoun1>
                          <SecondRelatedProductNewPri>
                            <Ins1>$0.50</Ins1>
                          </SecondRelatedProductNewPri>
                          <Del1>$1.99</Del1>
                        </SecondRelatedProductDiscoun1>
                      </SecondRelatedProductRating1>
                      <FirstRelatedProductCartBut>
                        <LinkAddToCartPeachE
                          loading="lazy"
                          alt=""
                          src="/link--add-to-cart-large-garden-spinach--herb-wrap-tortillas--15oz-6ct.svg"
                        />
                        <FirstRelatedProductStockIn>
                          <InStock>In Stock</InStock>
                        </FirstRelatedProductStockIn>
                      </FirstRelatedProductCartBut>
                    </SecondRelatedProductRating2>
                  </ProductTitles>
                </Product2>
              </SecondRelatedProduct1>
            </ProductParent>
            <Product3>
              <Link1 />
              <Link1 />
              <SecondRelatedProductBadge>
                <SpanbadgeWrapper>
                  <Spanbadge>
                    <BadgeIcons>14%</BadgeIcons>
                  </Spanbadge>
                </SpanbadgeWrapper>
                <FirstRelatedProductDetails>
                  <SecondRelatedProductName>
                    <Link1129500x500jpg
                      alt=""
                      src="/link--155500x500jpg@2x.png"
                    />
                    <Link2>
                      <Divdot />
                      <Divdot1 />
                    </Link2>
                  </SecondRelatedProductName>
                  <LinkIcon loading="lazy" alt="" src="/link-10.svg" />
                </FirstRelatedProductDetails>
              </SecondRelatedProductBadge>
              <FirstRelatedProductPrice>
                <FirstRelatedProductPriceIn>
                  <LinkFresh>Fresh Cauliflower, Each</LinkFresh>
                  <ImgRated300OutOf5Parent>
                    <ImgRated333OutOf
                      alt=""
                      src="/img--rated-333-out-of-5.svg"
                    />
                    <RatingValues>2</RatingValues>
                  </ImgRated300OutOf5Parent>
                </FirstRelatedProductPriceIn>
                <FrameDiv>
                  <InsWrapper>
                    <Ins2>$12.79</Ins2>
                  </InsWrapper>
                  <Del2>$14.79</Del2>
                </FrameDiv>
                <FirstRelatedProductCartBut>
                  <LinkAddToCartPeachE
                    loading="lazy"
                    alt=""
                    src="/link--add-to-cart-peach--each.svg"
                  />
                  <FirstRelatedProductStockIn>
                    <InStock>In Stock</InStock>
                  </FirstRelatedProductStockIn>
                </FirstRelatedProductCartBut>
              </FirstRelatedProductPrice>
            </Product3>
            <Product4>
              <ProductContainers
                productBadges="36%"
                link1104500x500jpg="/link--153500x500jpg@2x.png"
              />
              <Heading2Parent>
                <Heading>
                  <LinkFresh1>Fresh Broccoli Crowns, Each</LinkFresh1>
                </Heading>
                <FrameComponent2
                  imgRated367OutOf5="/img--rated-333-out-of-5.svg"
                  ins="$11.54"
                  del="$17.88"
                  linkAddToCartLargeGardenS="/link--add-to-cart-peach--each.svg"
                />
              </Heading2Parent>
            </Product4>
            <Product5>
              <Link1 />
              <Link1 />
              <FirstRelatedProductInfo>
                <SpanbadgeContainer>
                  <Spanbadge>
                    <Div>26%</Div>
                  </Spanbadge>
                </SpanbadgeContainer>
                <FirstRelatedProductDetails>
                  <FirstRelatedProductName>
                    <Link1129500x500jpg
                      alt=""
                      src="/link--161500x500jpg@2x.png"
                    />
                    <Link2>
                      <Divdot />
                      <Divdot1 />
                    </Link2>
                  </FirstRelatedProductName>
                  <LinkIcon alt="" src="/link-7.svg" />
                </FirstRelatedProductDetails>
              </FirstRelatedProductInfo>
              <Heading2Group>
                <Heading1>
                  <LinkFresh2>Fresh Purple Eggplant</LinkFresh2>
                </Heading1>
                <ImgRated400OutOf5Parent>
                  <ImgRated333OutOf alt="" src="/img--rated-333-out-of-5.svg" />
                  <Div1>3</Div1>
                </ImgRated400OutOf5Parent>
                <FrameParent>
                  <InsWrapper>
                    <Ins3>$2.99</Ins3>
                  </InsWrapper>
                  <Del3>$3.99</Del3>
                </FrameParent>
                <FirstRelatedProductCartBut>
                  <LinkAddToCartPeachE
                    loading="lazy"
                    alt=""
                    src="/link--add-to-cart-peach--each.svg"
                  />
                  <FirstRelatedProductStockIn>
                    <InStock>In Stock</InStock>
                  </FirstRelatedProductStockIn>
                </FirstRelatedProductCartBut>
              </Heading2Group>
            </Product5>
            <After />
          </Section>
        </RelatedProductsParent>
      </ProductDetails>
    </ProductDetailsWrapperRoot>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
