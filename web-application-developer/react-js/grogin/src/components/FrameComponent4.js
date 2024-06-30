import styled from "styled-components";
import PropTypes from "prop-types";

const Home = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.32px;
  line-height: 18px;
  color: inherit;
  display: inline-block;
  min-width: 33px;
`;
const BreadcrumbLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) 0px 0px;
`;
const LinkIcon = styled.img`
  width: 11.7px;
  height: 12px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const BreadcrumbLinks1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) 0px 0px;
`;
const FruitsVegetables = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 18px;
  display: inline-block;
  min-width: 104px;
`;
const ExoticFruits = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 18px;
  display: inline-block;
  min-width: 122.3px;
`;
const MarketsideFreshOrganic = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 18px;
  color: var(--color-gray-500);
`;
const BreadcrumbNavigation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8xs-7);
  max-width: 100%;
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
  }
`;
const MainIcon = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
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
const Main = styled.div`
  width: 39.1px;
  border-radius: var(--br-sm) var(--br-21xl) var(--br-21xl) var(--br-sm);
  background-color: var(--color-crimson);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs) var(--padding-5xs);
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
const Organic = styled.div`
  position: relative;
  font-size: var(--font-size-3xs);
  letter-spacing: -0.32px;
  text-transform: uppercase;
  font-weight: 800;
  font-family: var(--font-inter);
  color: var(--color-seagreen);
  text-align: center;
  display: inline-block;
  min-width: 46px;
`;
const Main1 = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-8xs) var(--padding-7xs);
  background-color: transparent;
  width: 80.2px;
  border-radius: var(--br-sm) var(--br-21xl) var(--br-21xl) var(--br-sm);
  background: linear-gradient(90deg, #d4fc79, #96e6a1 50%);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
  gap: var(--gap-8xs);
  z-index: 1;
`;
const ImageContainer = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs);
  position: relative;
  gap: var(--gap-10xs);
`;
const Item1109150x150jpg = styled.img`
  height: 73px;
  width: 73px;
  position: relative;
  border-radius: var(--br-5xs);
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  min-height: 73px;
`;
const Item2104150x150jpg = styled.img`
  height: 73px;
  width: 73px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  min-height: 73px;
`;
const ThumbnailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
`;
const ProductThumbnails = styled.div`
  width: 627.5px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
`;
const ProductGallery = styled.div`
  align-self: stretch;
  height: 743px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-3xs);
  color: var(--color-lavenderblush);
`;
const ProductInformation = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-lgi);
  min-width: 429px;
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
  font-size: var(--font-size-19xl);
  letter-spacing: -0.76px;
  line-height: 45.6px;
  font-weight: 700;
  font-family: inherit;
  display: inline-block;
  max-width: 100%;
  flex-shrink: 0;
  @media screen and (max-width: 750px) {
    font-size: var(--font-size-11xl);
    line-height: 36px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-4xl);
    line-height: 27px;
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
const RatingDisplay = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-8xs);
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
  border-radius: var(--br-7xs);
  border: 1px solid var(--color-lightgray-100);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) var(--padding-10xs) var(--padding-11xs)
    var(--padding-8xs);
`;
const RatingExplanation = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 12px;
  display: inline-block;
  min-width: 7.3px;
`;
const RatingExplanationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-7xs-5);
  font-size: var(--font-size-xs);
  color: var(--color-slategray);
`;
const RatingContainer = styled.div`
  width: 125.9px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-6xs);
`;
const Before = styled.div`
  width: 1px;
  height: 14px;
  position: relative;
  background-color: var(--color-gainsboro-100);
`;
const RatingProgressBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs-5) 0px 0px;
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
  color: var(--color-gray-500);
  display: inline-block;
  min-width: 65.1px;
  flex-shrink: 0;
`;
const ProductCode = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-10xs-6);
`;
const ProductCodeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs-7) 0px 0px;
  color: var(--color-slategray);
`;
const Main2 = styled.div`
  flex: 1;
  border-bottom: 1px solid var(--color-gainsboro-100);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-4xs);
  gap: var(--gap-sm-8);
  max-width: 100%;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const ProductRating = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-6xs-4);
  box-sizing: border-box;
  max-width: 100%;
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
  @media screen and (max-width: 750px) {
    font-size: var(--font-size-5xl);
    line-height: 24px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
    line-height: 18px;
  }
`;
const Div = styled.div`
  position: relative;
  font-size: var(--font-size-2xl-9);
  text-decoration: line-through;
  letter-spacing: -0.6px;
  line-height: 22px;
  font-weight: 500;
  color: var(--color-gray-300);
  display: inline-block;
  min-width: 47px;
  white-space: nowrap;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
    line-height: 18px;
  }
`;
const ReadMorePlaceholder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-6xs-3);
`;
const OrderOnWhatsapp = styled.b`
  position: relative;
  letter-spacing: -0.28px;
  line-height: 42px;
`;
const MainLink = styled.div`
  height: 46px;
  border-radius: var(--br-5xs);
  background-color: var(--color-forestgreen);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-sm) var(--padding-mid) 0px var(--padding-lg);
  box-sizing: border-box;
  white-space: nowrap;
  font-size: var(--font-size-sm);
  color: var(--color-white);
  font-family: var(--font-inter);
`;
const ReadMorePlaceholderParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xl-9);
  font-size: var(--font-size-11xl);
  color: var(--color-crimson);
  font-family: var(--font-barlow);
`;
const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-8xs-4);
  box-sizing: border-box;
  gap: var(--gap-mini);
  max-width: 100%;
  flex-shrink: 0;
  font-size: var(--font-size-sm);
  color: var(--color-dimgray-300);
`;
const SpecialOffer = styled.b`
  position: relative;
  letter-spacing: -0.32px;
  display: inline-block;
  min-width: 85.2px;
`;
const SpecialOfferWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4xs) 0px 0px;
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
  border-radius: var(--br-7xs);
  background-color: var(--color-papayawhip);
  border: 1px solid var(--color-navajowhite);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-6xs) var(--padding-5xs) var(--padding-6xs)
    var(--padding-4xs);
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
  border-radius: var(--br-7xs);
  background-color: var(--color-papayawhip);
  border: 1px solid var(--color-navajowhite);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-6xs) var(--padding-6xs) var(--padding-6xs)
    var(--padding-5xs);
`;
const TimeLeftLabel = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 24px;
  display: inline-block;
  min-width: 5px;
`;
const TimeLeftLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs) 0px 0px;
  font-size: var(--font-size-base);
  color: var(--color-gray-500);
`;
const CountdownTimer = styled.div`
  width: 156.1px;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs-8);
  color: var(--color-chocolate);
`;
const RemainsUntilThe = styled.div`
  position: relative;
  letter-spacing: -0.32px;
`;
const RemainsUntilTheEndOfTheOWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs) 0px 0px;
  font-size: var(--font-size-2xs);
  color: var(--color-slategray);
`;
const Main3 = styled.div`
  align-self: stretch;
  border-radius: var(--br-7xs);
  background-color: var(--color-floralwhite);
  border: 1px solid var(--color-papayawhip);
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-sm) var(--padding-base);
  gap: var(--gap-base-9);
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
  background-color: var(--color-white);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-sm-5) var(--padding-base);
`;
const Form = styled.div`
  width: 114px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: var(--br-7xs);
  background-color: var(--color-gray-600);
  border: 1px solid var(--color-lightgray-100);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const BeforeIcon = styled.img`
  width: 14px;
  height: 14px;
  position: relative;
`;
const AddToCart = styled.b`
  position: relative;
  font-size: var(--font-size-sm);
  letter-spacing: -0.28px;
  line-height: 42px;
  display: inline-block;
  font-family: var(--font-inter);
  color: var(--color-white);
  text-align: center;
  min-width: 74px;
`;
const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-sm) var(--padding-13xl) var(--padding-mid)
    var(--padding-14xl);
  background-color: var(--color-forestgreen);
  height: 46px;
  flex: 1;
  border-radius: var(--br-5xs);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
  gap: var(--gap-7xs);
  min-width: 104px;
`;
const BeforeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) 0px 0px;
`;
const BuyNow = styled.b`
  position: relative;
  font-size: var(--font-size-sm);
  letter-spacing: -0.28px;
  line-height: 42px;
  display: inline-block;
  font-family: var(--font-inter);
  color: var(--color-white);
  text-align: center;
  min-width: 59px;
`;
const Button1 = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-sm) var(--padding-21xl) var(--padding-base)
    var(--padding-22xl);
  background-color: var(--color-gray-100);
  height: 46px;
  flex: 0.8316;
  border-radius: var(--br-5xs);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
  gap: var(--gap-7xs);
  min-width: 104px;
  @media screen and (max-width: 450px) {
    flex: 1;
  }
`;
const CartActions = styled.div`
  width: 454px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-mini);
  color: var(--color-gray-400);
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const OfferCountdown = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-mini-4);
  box-sizing: border-box;
  gap: var(--gap-xl);
  max-width: 100%;
  color: var(--color-orangered);
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
  font-family: var(--font-inter);
`;
const PaymentUponReceipt = styled.span``;
const ListItemContainer = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 19.5px;
`;
const ListItemStrongPaymentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) 0px 0px;
  box-sizing: border-box;
  max-width: calc(100% - 53px);
`;
const PaymentItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8xl);
  max-width: 100%;
`;
const PaymentInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-xl);
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
  flex-shrink: 0;
`;
const StrongWarrantyWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) 0px 0px;
  box-sizing: border-box;
  min-width: 367px;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    min-width: 100%;
  }
`;
const ListItem1 = styled.div`
  align-self: stretch;
  border-top: 1px solid var(--color-gainsboro-100);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-2xs) var(--padding-xs) var(--padding-xs);
  gap: var(--gap-mid-9);
  max-width: 100%;
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
  }
`;
const Main4 = styled.div`
  flex: 1;
  border-radius: var(--br-7xs);
  border: 1px solid var(--color-gainsboro-100);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-2xs) 0px 0px;
  gap: var(--gap-2xs);
  max-width: 100%;
`;
const ProductInfoList = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-mini-4);
  box-sizing: border-box;
  max-width: 100%;
  flex-shrink: 0;
  color: var(--color-slategray);
`;
const LinkIcon1 = styled.img`
  height: 36px;
  width: 36px;
  position: relative;
  border-radius: var(--br-7xs);
  flex-shrink: 0;
`;
const AddToWishlist = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 19.5px;
  font-weight: 500;
  display: inline-block;
  min-width: 87.3px;
  flex-shrink: 0;
`;
const SharingLabels = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4xs-2) 0px 0px;
`;
const SharingActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const LinkIcon2 = styled.img`
  height: 36px;
  width: 36px;
  position: relative;
  border-radius: var(--br-7xs);
`;
const ShareThisProduct = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
  font-weight: 500;
  display: inline-block;
  min-width: 110px;
`;
const ShareThisProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-5xs-8);
`;
const SharingActions1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const Compare = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
  font-weight: 500;
  display: inline-block;
  min-width: 55px;
`;
const CompareWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-6xs-8);
`;
const ProductSharing = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xl-1);
  max-width: 100%;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const ProductInformationContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base-6);
  max-width: 100%;
`;
const ProductInformationContainerWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-18xl) 0px 0px;
  box-sizing: border-box;
  min-width: 429px;
  max-width: 100%;
  font-size: var(--font-size-smi);
  color: var(--color-gray-500);
  @media screen and (max-width: 750px) {
    min-width: 100%;
  }
`;
const ProductDetailsContainer = styled.div`
  width: 1360px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-21xl);
  max-width: 100%;
  @media screen and (max-width: 750px) {
    gap: var(--gap-xl);
  }
`;
const ProductDetailsContainerWrapperRoot = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl) var(--padding-83xl);
  box-sizing: border-box;
  max-width: 100%;
  flex-shrink: 0;
  text-align: left;
  font-size: var(--font-size-xs);
  color: var(--color-darkgray);
  font-family: var(--font-inter);
  @media screen and (max-width: 1100px) {
    padding-bottom: var(--padding-47xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-bottom: var(--padding-24xl);
    box-sizing: border-box;
  }
`;

const FrameComponent4 = ({ className = "" }) => {
  return (
    <ProductDetailsContainerWrapperRoot className={className}>
      <ProductDetailsContainer>
        <ProductInformation>
          <BreadcrumbNavigation>
            <BreadcrumbLinks>
              <Home>Home</Home>
            </BreadcrumbLinks>
            <BreadcrumbLinks1>
              <LinkIcon alt="" src="/nav--list--item--link-4.svg" />
            </BreadcrumbLinks1>
            <BreadcrumbLinks>
              <FruitsVegetables>{`Fruits & Vegetables`}</FruitsVegetables>
            </BreadcrumbLinks>
            <BreadcrumbLinks1>
              <LinkIcon alt="" src="/-link-2.svg" />
            </BreadcrumbLinks1>
            <BreadcrumbLinks>
              <ExoticFruits>{`Exotic Fruits & Veggies`}</ExoticFruits>
            </BreadcrumbLinks>
            <BreadcrumbLinks1>
              <LinkIcon alt="" src="/-link-3.svg" />
            </BreadcrumbLinks1>
            <MarketsideFreshOrganic>
              Marketside Fresh Organic Bananas, Bunch
            </MarketsideFreshOrganic>
          </BreadcrumbNavigation>
          <ProductGallery>
            <ImageContainer>
              <MainIcon alt="" src="/main.svg" />
              <Main>
                <EmptyCaption>56%</EmptyCaption>
              </Main>
              <Main1>
                <SvgIcon alt="" src="/svg.svg" />
                <BreadcrumbLinks>
                  <Organic>Organic</Organic>
                </BreadcrumbLinks>
              </Main1>
            </ImageContainer>
            <ProductThumbnails>
              <ThumbnailsContainer>
                <Item1109150x150jpg
                  loading="lazy"
                  alt=""
                  src="/item--1109150x150jpg@2x.png"
                />
                <Item2104150x150jpg
                  loading="lazy"
                  alt=""
                  src="/item--2104150x150jpg@2x.png"
                />
                <Item2104150x150jpg
                  loading="lazy"
                  alt=""
                  src="/item--389150x150jpg@2x.png"
                />
              </ThumbnailsContainer>
            </ProductThumbnails>
          </ProductGallery>
        </ProductInformation>
        <ProductInformationContainerWrapper>
          <ProductInformationContainer>
            <MarketsideFreshOrganicContainer>
              <MarketsideFreshOrganic1>
                Marketside Fresh Organic Bananas,
              </MarketsideFreshOrganic1>
              <MarketsideFreshOrganic1>Bunch</MarketsideFreshOrganic1>
            </MarketsideFreshOrganicContainer>
            <ProductRating>
              <Main2>
                <RatingContainer>
                  <RatingDisplay>
                    <ImgRated300OutOf
                      loading="lazy"
                      alt=""
                      src="/img--rated-300-out-of-5.svg"
                    />
                  </RatingDisplay>
                  <Divrating>
                    <RatingPlaceholder>3.00</RatingPlaceholder>
                  </Divrating>
                  <RatingExplanationContainer>
                    <RatingExplanation>2</RatingExplanation>
                  </RatingExplanationContainer>
                </RatingContainer>
                <RatingProgressBar>
                  <Before />
                </RatingProgressBar>
                <ProductCodeWrapper>
                  <ProductCode>
                    <Sku>SKU:</Sku>
                    <E7f8g9h>E7F8G9H0</E7f8g9h>
                  </ProductCode>
                </ProductCodeWrapper>
              </Main2>
            </ProductRating>
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
              <ReadMorePlaceholderParent>
                <ReadMorePlaceholder>
                  <B>$0.89</B>
                  <Div>$1.99</Div>
                </ReadMorePlaceholder>
                <MainLink>
                  <OrderOnWhatsapp>Order on WhatsApp</OrderOnWhatsapp>
                </MainLink>
              </ReadMorePlaceholderParent>
            </ProductDescription>
            <OfferCountdown>
              <Main3>
                <SpecialOfferWrapper>
                  <SpecialOffer>Special Offer :</SpecialOffer>
                </SpecialOfferWrapper>
                <CountdownTimer>
                  <DivcountdownItem>
                    <CountdownValues>81</CountdownValues>
                  </DivcountdownItem>
                  <DivcountdownItem1>
                    <Div1>06</Div1>
                  </DivcountdownItem1>
                  <DivcountdownItem1>
                    <Div1>50</Div1>
                  </DivcountdownItem1>
                  <TimeLeftLabelWrapper>
                    <TimeLeftLabel>:</TimeLeftLabel>
                  </TimeLeftLabelWrapper>
                  <DivcountdownItem1>
                    <Div1>02</Div1>
                  </DivcountdownItem1>
                </CountdownTimer>
                <RemainsUntilTheEndOfTheOWrapper>
                  <RemainsUntilThe>
                    Remains until the end of the offer.
                  </RemainsUntilThe>
                </RemainsUntilTheEndOfTheOWrapper>
              </Main3>
              <CartActions>
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
                <Button>
                  <BreadcrumbLinks>
                    <BeforeIcon alt="" src="/before.svg" />
                  </BreadcrumbLinks>
                  <AddToCart>Add to cart</AddToCart>
                </Button>
                <Button1>
                  <BeforeWrapper>
                    <BeforeIcon alt="" src="/before-1.svg" />
                  </BeforeWrapper>
                  <BuyNow>Buy Now</BuyNow>
                </Button1>
              </CartActions>
            </OfferCountdown>
            <ProductInfoList>
              <Main4>
                <PaymentInfo>
                  <PaymentItem>
                    <ListItem type="checkbox" />
                    <ListItemStrongPaymentWrapper>
                      <ListItemContainer>
                        <MarketsideFreshOrganic1>
                          <Payment>Payment.</Payment>
                          <PaymentUponReceipt>
                            {" "}
                            Payment upon receipt of goods, Payment by card in
                            the department, Google Pay,
                          </PaymentUponReceipt>
                        </MarketsideFreshOrganic1>
                        <MarketsideFreshOrganic1>
                          Online card, -5% discount in case of payment
                        </MarketsideFreshOrganic1>
                      </ListItemContainer>
                    </ListItemStrongPaymentWrapper>
                  </PaymentItem>
                </PaymentInfo>
                <ListItem1>
                  <DivnoticeIcon
                    loading="lazy"
                    alt=""
                    src="/divnoticeicon.svg"
                  />
                  <StrongWarrantyWrapper>
                    <StrongWarrantyContainer>
                      <PaymentUponReceipt>
                        <MarketsideFreshOrganic1>
                          <Payment>Warranty.</Payment>
                          <PaymentUponReceipt>
                            {" "}
                            The Consumer Protection Act does not provide for the
                            return of this product of proper
                          </PaymentUponReceipt>
                        </MarketsideFreshOrganic1>
                        <MarketsideFreshOrganic1>
                          quality.
                        </MarketsideFreshOrganic1>
                      </PaymentUponReceipt>
                    </StrongWarrantyContainer>
                  </StrongWarrantyWrapper>
                </ListItem1>
              </Main4>
            </ProductInfoList>
            <ProductSharing>
              <SharingActions>
                <LinkIcon1 loading="lazy" alt="" src="/-link-4.svg" />
                <SharingLabels>
                  <AddToWishlist>Add to wishlist</AddToWishlist>
                </SharingLabels>
              </SharingActions>
              <SharingActions1>
                <LinkIcon2 loading="lazy" alt="" src="/-link-5.svg" />
                <ShareThisProductWrapper>
                  <ShareThisProduct>Share this Product</ShareThisProduct>
                </ShareThisProductWrapper>
              </SharingActions1>
              <SharingActions1>
                <LinkIcon2 loading="lazy" alt="" src="/-link-6.svg" />
                <CompareWrapper>
                  <Compare>Compare</Compare>
                </CompareWrapper>
              </SharingActions1>
            </ProductSharing>
          </ProductInformationContainer>
        </ProductInformationContainerWrapper>
      </ProductDetailsContainer>
    </ProductDetailsContainerWrapperRoot>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
