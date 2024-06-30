import styled from "styled-components";
import ProductInfo from "./ProductInfo";
import Divproduct from "./Divproduct";
import FrameComponent1 from "./FrameComponent1";
import Divproduct1 from "./Divproduct1";
import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";

const NavList = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.32px;
  line-height: 18px;
  color: inherit;
  display: inline-block;
  min-width: 33px;
`;
const HomeLinkContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) 0px 0px;
`;
const NavListItemLink = styled.img`
  width: 11.7px;
  height: 12px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const ShopLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) 0px 0px;
`;
const NavList1 = styled.a`
  text-decoration: none;
  flex: 1;
  position: relative;
  letter-spacing: -0.32px;
  line-height: 18px;
  color: var(--color-gray-500);
  display: inline-block;
  min-width: 28.3px;
  flex-shrink: 0;
`;
const HomeLinkWrapper = styled.div`
  width: 82.2px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8xs-6);
`;
const Heading = styled.div`
  position: relative;
  letter-spacing: -0.28px;
  line-height: 16.8px;
  font-weight: 600;
  display: inline-block;
  min-width: 117px;
`;
const FormMin = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 18px;
  display: inline-block;
  min-width: 50px;
  flex-shrink: 0;
`;
const FormMax = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 18px;
  display: inline-block;
  min-width: 53.1px;
  flex-shrink: 0;
`;
const PriceInputWrapper = styled.div`
  width: 195.7px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-xl);
`;
const Placeholder = styled.input`
  width: 9.2px;
  border: none;
  outline: none;
  font-weight: 500;
  font-family: var(--font-inter);
  font-size: var(--font-size-sm);
  background-color: transparent;
  height: 17px;
  position: relative;
  letter-spacing: -0.28px;
  line-height: 42px;
  color: var(--color-gray-400);
  text-align: left;
  display: flex;
  align-items: center;
  padding: 0;
`;
const FormInput = styled.div`
  flex: 1;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: var(--br-5xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-lightgray-100);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs) var(--padding-mini) var(--padding-4xs);
`;
const Form = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 21px;
  display: inline-block;
  min-width: 7px;
`;
const FilterLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs-5) 0px 0px;
`;
const Div = styled.input`
  margin-top: -2px;
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  height: 42px;
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs) 0px 0px;
  box-sizing: border-box;
  font-family: var(--font-inter);
  font-weight: 500;
  font-size: var(--font-size-sm);
  color: var(--color-gray-400);
  min-width: 52px;
`;
const FormInput1 = styled.div`
  height: 38px;
  flex: 1;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: var(--br-5xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-lightgray-100);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-smi) 0px var(--padding-mini);
`;
const PriceInputFieldsWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs-6);
  font-size: var(--font-size-sm);
  color: var(--color-gray-500);
`;
const PriceRangeWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
  font-size: var(--font-size-xs);
  color: var(--color-slategray);
`;
const SpanuiSliderHandle = styled.div`
  position: absolute;
  width: 5.41%;
  top: -6px;
  right: 94.59%;
  left: 0%;
  border-radius: var(--br-6xs);
  background-color: var(--color-gray-300);
  height: 14px;
`;
const SpanuiSliderHandle1 = styled.div`
  position: absolute;
  width: 5.41%;
  top: -6px;
  right: 0%;
  left: 94.59%;
  border-radius: var(--br-6xs);
  background-color: var(--color-gray-300);
  height: 14px;
`;
const DivuiSliderRange = styled.div`
  position: absolute;
  width: 100%;
  top: 0px;
  right: 0%;
  left: 0%;
  border-radius: var(--br-3xs);
  background-color: var(--color-gray-300);
  height: 100%;
  z-index: 1;
`;
const Form1 = styled.div`
  align-self: stretch;
  height: 3px;
  position: relative;
  border-radius: var(--br-3xs);
  background-color: var(--color-gainsboro-100);
`;
const FormPrice = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 21px;
  display: inline-block;
  min-width: 103px;
  flex-shrink: 0;
`;
const FilterPriceLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-6xs-5);
`;
const Filter = styled.b`
  position: absolute;
  margin: 0 !important;
  right: 17.6px;
  bottom: -14px;
  letter-spacing: -0.28px;
  line-height: 42px;
  display: inline-block;
  min-width: 34px;
`;
const FormButton = styled.div`
  height: 38px;
  width: 69.6px;
  border-radius: var(--br-5xs);
  background-color: var(--color-gainsboro-100);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  flex-shrink: 0;
  text-align: center;
  color: var(--color-black);
`;
const FilterPriceButton = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--gap-xl);
`;
const Divwidget = styled.div`
  align-self: stretch;
  border-bottom: 1px solid var(--color-gainsboro-100);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-5xl);
  gap: var(--gap-xl);
`;
const Heading1 = styled.div`
  position: relative;
  letter-spacing: -0.28px;
  line-height: 17px;
  font-weight: 600;
  display: inline-block;
  min-width: 127px;
`;
const ListItemLinkInput = styled.input`
  margin: 0;
  height: 16px;
  width: 16px;
  position: relative;
  filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.05));
  border-radius: var(--br-9xs);
`;
const ListItem = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 14px;
  font-weight: 500;
  display: inline-block;
  min-width: 124px;
`;
const FruitsVegetablesLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) 0px 0px;
`;
const FruitsVegetablesCategory = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  color: var(--color-darkslateblue-100);
`;
const ListItemLinkInput1 = styled.input`
  margin: 0;
  height: 16px;
  width: 16px;
  position: relative;
  filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.05));
  border-radius: var(--br-9xs);
  border: 1px solid var(--color-lightgray-100);
  box-sizing: border-box;
`;
const ListItem1 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 14px;
  font-weight: 500;
  display: inline-block;
  min-width: 117px;
`;
const CategoryInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const ListItem2 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 14px;
  font-weight: 500;
  display: inline-block;
  min-width: 68.2px;
`;
const ListItemLinkInput2 = styled.input`
  margin: 0;
  height: 16px;
  width: 16px;
  position: relative;
  filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.05));
  border-radius: var(--br-9xs);
  border: 1px solid var(--color-lightgray-100);
  box-sizing: border-box;
  flex-shrink: 0;
`;
const ListItem3 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 14px;
  font-weight: 500;
  display: inline-block;
  min-width: 109.1px;
  flex-shrink: 0;
`;
const ListItem4 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 14px;
  font-weight: 500;
  display: inline-block;
  min-width: 113px;
`;
const ListItem5 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 14px;
  font-weight: 500;
  display: inline-block;
  min-width: 105.2px;
`;
const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
`;
const ListItem6 = styled.div`
  align-self: stretch;
  position: relative;
  letter-spacing: -0.32px;
  line-height: 14px;
`;
const PlaceholderItemContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-sm);
`;
const Placeholder1 = styled.div`
  width: 14.2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-23xl);
  text-align: center;
  color: var(--color-dimgray-100);
`;
const ListItem7 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 14px;
  font-weight: 500;
  display: inline-block;
  min-width: 118px;
`;
const ListItem8 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 14px;
  font-weight: 500;
  display: inline-block;
  min-width: 87px;
`;
const ListItem9 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 14px;
  font-weight: 500;
  display: inline-block;
  min-width: 115.3px;
  flex-shrink: 0;
`;
const ListItem10 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 14px;
  font-weight: 500;
  display: inline-block;
  min-width: 70.2px;
`;
const Placeholder2 = styled.div`
  width: 14.2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) 0px 0px;
  box-sizing: border-box;
  text-align: center;
  color: var(--color-dimgray-100);
`;
const BreakfastCategory = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-xl);
`;
const ListItem11 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 14px;
  font-weight: 500;
  display: inline-block;
  min-width: 115px;
`;
const CategoryList = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
`;
const Divwidget1 = styled.div`
  align-self: stretch;
  border-bottom: 1px solid var(--color-gainsboro-100);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-11xs) var(--padding-5xl) 0px;
  gap: var(--gap-lgi-8);
`;
const Heading2 = styled.div`
  position: relative;
  letter-spacing: -0.28px;
  line-height: 16.8px;
  font-weight: 600;
  display: inline-block;
  min-width: 91px;
`;
const ListItem12 = styled.div`
  height: 20px;
  width: 20px;
  position: relative;
  border-radius: var(--br-3xs);
  background-color: var(--color-yellowgreen);
`;
const ListItem13 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 21px;
  display: inline-block;
  min-width: 39px;
`;
const BrandFilterItems = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-xl) 0px 0px;
`;
const ListItem14 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 21px;
  display: inline-block;
  min-width: 16.1px;
`;
const BrandFilterLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-11xs);
  color: var(--color-darkgray);
`;
const ColorBrandFilterItems = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const Heading3 = styled.div`
  position: relative;
  letter-spacing: -0.28px;
  line-height: 17px;
  font-weight: 600;
  display: inline-block;
  min-width: 102px;
`;
const ListItem15 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 13px;
  font-weight: 500;
  display: inline-block;
  min-width: 34px;
`;
const ListItemLinkFreshWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs-5) var(--padding-xl) 0px 0px;
`;
const ListItem16 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 13px;
  font-weight: 500;
  display: inline-block;
  min-width: 16px;
`;
const ListItem1Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs-5) 0px 0px;
  color: var(--color-darkgray);
`;
const ListItemParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  font-size: var(--font-size-smi);
`;
const Divwidget2 = styled.div`
  align-self: stretch;
  border-bottom: 1px solid var(--color-gainsboro-100);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-5xl);
  gap: var(--gap-lgi-8);
`;
const Heading4 = styled.div`
  position: relative;
  letter-spacing: -0.28px;
  line-height: 17px;
  font-weight: 600;
  display: inline-block;
  min-width: 98px;
`;
const ListItem17 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 14px;
  font-weight: 500;
  display: inline-block;
  min-width: 52px;
`;
const ListItem18 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 14px;
  font-weight: 500;
  display: inline-block;
  min-width: 50px;
`;
const ProductStatus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-lgi-8);
`;
const FilterSidebar = styled.div`
  width: 259px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6xl);
  @media screen and (max-width: 1125px) {
    display: none;
  }
`;
const ListItemLink = styled.div`
  position: absolute;
  top: 0.09px;
  left: 1.42px;
  background-color: var(--color-gray-200);
  width: 10px;
  height: 2px;
  transform: rotate(45deg);
  transform-origin: 0 0;
`;
const ListItemLink1 = styled.div`
  position: absolute;
  top: 7.07px;
  left: 0px;
  background-color: var(--color-gray-200);
  width: 10px;
  height: 2px;
  transform: rotate(-45deg);
  transform-origin: 0 0;
  z-index: 1;
`;
const FilterClear = styled.div`
  width: 8.5px;
  height: 8.6px;
  position: relative;
`;
const FilterName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs-7) 0px 0px;
`;
const ListItem19 = styled.div`
  position: relative;
  letter-spacing: 0.2px;
  line-height: 21px;
  font-weight: 500;
  display: inline-block;
  min-width: 81px;
`;
const FilterClearButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs-7);
`;
const ListItem20 = styled.div`
  position: relative;
  letter-spacing: 0.2px;
  line-height: 21px;
  font-weight: 500;
`;
const FilterItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs-8);
`;
const Banner33jpgIcon = styled.img`
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
  object-fit: cover;
`;
const OnlyThisWeek = styled.div`
  position: relative;
  letter-spacing: -0.2px;
  font-weight: 600;
  display: inline-block;
  min-width: 73px;
`;
const Heading5 = styled.div`
  border-radius: var(--br-11xl);
  background-color: var(--color-papayawhip);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs) var(--padding-8xs) var(--padding-8xs)
    var(--padding-7xs);
  white-space: nowrap;
  z-index: 1;
`;
const BannerHeading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-7xs);
  text-align: center;
`;
const Heading6 = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  letter-spacing: -1.2px;
  font-weight: 700;
  font-family: inherit;
  z-index: 1;
  @media screen and (max-width: 800px) {
    font-size: var(--font-size-5xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
  }
`;
const GroceryHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  font-size: var(--font-size-11xl);
  color: var(--color-gray-300);
`;
const WeHavePrepared = styled.p`
  margin: 0;
`;
const WeHavePreparedContainer = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 19.51px;
  z-index: 1;
`;
const ShopNow = styled.b`
  position: absolute;
  margin: 0 !important;
  bottom: -17px;
  left: 13px;
  font-size: var(--font-size-xs);
  letter-spacing: -0.24px;
  line-height: 42px;
  display: inline-block;
  font-family: var(--font-inter);
  color: var(--color-gray-100);
  text-align: center;
  min-width: 58px;
`;
const IklbIconMoveRight = styled.img`
  height: 14px;
  width: 19.6px;
  position: relative;
`;
const Link = styled.button`
  cursor: pointer;
  border: 1px solid var(--color-gainsboro-100);
  padding: var(--padding-5xs) var(--padding-smi);
  background-color: var(--color-white);
  width: 109px;
  border-radius: var(--br-980xl);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  position: relative;
  white-space: nowrap;
  z-index: 1;
  &:hover {
    background-color: var(--color-gainsboro-200);
    border: 1px solid var(--color-lightgray-200);
    box-sizing: border-box;
  }
`;
const BannerDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mini);
  max-width: 100%;
  font-size: var(--font-size-smi);
  color: var(--color-slategray);
`;
const DivsiteBanner = styled.div`
  align-self: stretch;
  border-radius: var(--br-7xs);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-17xl-9) var(--padding-11xl) var(--padding-14xl-9);
  box-sizing: border-box;
  position: relative;
  gap: var(--gap-4xs);
  max-width: 100%;
`;
const ShowingAll = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 18px;
  display: inline-block;
  min-width: 116px;
`;
const ResultsCount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs) 0px 0px;
`;
const Sort = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 12px;
  font-weight: 500;
  display: inline-block;
  min-width: 27px;
`;
const SortLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-12xs);
`;
const SortByLatest = styled.div`
  position: relative;
  letter-spacing: -0.24px;
  line-height: 15px;
  font-weight: 500;
  color: var(--color-gray-400);
  display: inline-block;
  min-width: 74px;
`;
const SortingDropdown = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-3xs-2);
`;
const SortOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-6xs) 0px 0px;
`;
const Show = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 12px;
  font-weight: 500;
  display: inline-block;
  min-width: 34.1px;
`;
const Items = styled.div`
  position: relative;
  letter-spacing: -0.24px;
  line-height: 15px;
  font-weight: 500;
  color: var(--color-gray-400);
  display: inline-block;
  min-width: 49px;
`;
const DivsortingPerPage = styled.div`
  align-self: stretch;
  border-left: 1px solid var(--color-lightgray-100);
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px var(--padding-2xs) var(--padding-12xs);
  gap: var(--gap-3xs-6);
`;
const PaginationOptions = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-6xs) 0px 0px;
`;
const DivproductViewsButtonsIcon = styled.img`
  height: 30px;
  width: 63px;
  position: relative;
`;
const Pagination = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
  min-width: 132px;
`;
const Sorting = styled.div`
  width: 401.9px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-70xl);
  max-width: 100%;
  color: var(--color-darkgray);
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
    gap: var(--gap-25xl);
  }
`;
const DivbeforeShopLoop = styled.div`
  align-self: stretch;
  border-radius: var(--br-7xs);
  background-color: var(--color-whitesmoke);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--padding-3xs) var(--padding-mini);
  box-sizing: border-box;
  max-width: 100%;
  gap: var(--gap-xl);
  font-size: var(--font-size-xs);
  color: var(--color-slategray);
  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
`;
const Link1 = styled.div`
  width: 76.3px;
  height: 152.5px;
  position: relative;
  display: none;
`;
const Badge = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  text-transform: uppercase;
  font-weight: 800;
  display: inline-block;
  min-width: 21px;
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
  flex-shrink: 0;
  z-index: 2;
`;
const BadgeContainer = styled.div`
  width: 38.3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) 0px 0px;
  box-sizing: border-box;
`;
const Link139500x500jpg = styled.img`
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
const ImageLink = styled.div`
  width: 152.5px;
  margin: 0 !important;
  position: absolute;
  bottom: -125.5px;
  left: -125.5px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: var(--padding-114xl-5) var(--padding-8xs) var(--padding-8xs);
  box-sizing: border-box;
`;
const LinkIcon = styled.img`
  height: 32px;
  width: 32px;
  position: relative;
  border-radius: var(--br-base);
  flex-shrink: 0;
  z-index: 3;
`;
const ProductImage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const Product = styled.div`
  width: 167.5px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-xl);
`;
const Link3 = styled.div`
  width: 50.5px;
  height: 151.5px;
  position: relative;
  display: none;
`;
const Div1 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  text-transform: uppercase;
  font-weight: 800;
  display: inline-block;
  min-width: 22px;
`;
const SpanbadgeWrapper = styled.div`
  width: 39.1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) 0px 0px;
  box-sizing: border-box;
`;
const FrameParent = styled.div`
  width: 166.5px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-xl);
`;
const Divdot2 = styled.div`
  position: absolute;
  top: calc(50% - 3px);
  left: calc(50% - 11px);
  border-radius: var(--br-10xs);
  background-color: var(--color-gold);
  width: 6px;
  height: 6px;
`;
const Divdot3 = styled.div`
  position: absolute;
  top: calc(50% - 3px);
  left: calc(50% - 3px);
  border-radius: var(--br-10xs);
  background-color: var(--color-white);
  width: 6px;
  height: 6px;
`;
const Divdot4 = styled.div`
  position: absolute;
  top: calc(50% - 3px);
  left: calc(50% + 5px);
  border-radius: var(--br-10xs);
  background-color: var(--color-white);
  width: 6px;
  height: 6px;
`;
const Link4 = styled.div`
  height: 14px;
  width: 32px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-gray-900);
  z-index: 1;
`;
const Link1109500x500jpgParent = styled.div`
  width: 151.5px;
  margin: 0 !important;
  position: absolute;
  top: -137.5px;
  right: -81.3px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: var(--padding-113xl-5) var(--padding-8xs) var(--padding-8xs);
  box-sizing: border-box;
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
const Spanbadge1 = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-8xs) var(--padding-7xs);
  background-color: transparent;
  flex: 1;
  border-radius: var(--br-sm) var(--br-21xl) var(--br-21xl) var(--br-sm);
  background: linear-gradient(90deg, #d4fc79, #96e6a1 50%);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8xs);
  z-index: 2;
`;
const FrameContainer = styled.div`
  width: 80.2px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const LinkMarketsideContainer = styled.div`
  position: relative;
  letter-spacing: -0.26px;
  line-height: 16.9px;
  font-weight: 500;
`;
const ImgRated300OutOf = styled.img`
  height: 11px;
  width: 66.9px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const OriginalPrice = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 12px;
  display: inline-block;
  min-width: 7.3px;
`;
const ImgRated300OutOf5Parent = styled.div`
  height: 17.1px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-8xs-6);
  box-sizing: border-box;
  gap: var(--gap-5xs);
  font-size: var(--font-size-xs);
  color: var(--color-slategray);
`;
const Ins = styled.b`
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
const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-10xs-9);
`;
const Del = styled.div`
  position: relative;
  font-size: var(--font-size-base-1);
  text-decoration: line-through;
  letter-spacing: -0.44px;
  line-height: 19px;
  font-weight: 500;
  color: var(--color-gray-300);
  display: inline-block;
  min-width: 34.4px;
  white-space: nowrap;
`;
const Select = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-8xs-2);
  gap: var(--gap-6xs-5);
  font-size: var(--font-size-3xl);
  color: var(--color-crimson);
  font-family: var(--font-barlow);
`;
const LinkAddToCartMarketsid = styled.img`
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
const Availability = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-5xs);
`;
const Action = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-base);
  font-size: var(--font-size-2xs);
  color: var(--color-forestgreen);
`;
const LinkMarketsideFreshOrganiParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xs-9);
`;
const FrameGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  text-align: left;
  font-size: var(--font-size-smi);
  color: var(--color-gray-500);
`;
const DivproductParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Badge1 = styled.div`
  width: 19.1px;
  position: relative;
  letter-spacing: -0.32px;
  text-transform: uppercase;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  min-width: 19.1px;
`;
const ProductContent = styled.div`
  width: 36.8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) 0px 0px;
  box-sizing: border-box;
`;
const Rating = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 12px;
  display: inline-block;
  min-width: 8px;
`;
const PriceInfo1 = styled.b`
  width: 58.9px;
  position: relative;
  letter-spacing: -0.44px;
  line-height: 22px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  min-width: 58.9px;
  white-space: nowrap;
  z-index: 2;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
    line-height: 18px;
  }
`;
const H = styled.h2`
  margin: 0;
  position: relative;
  font-size: inherit;
  letter-spacing: -0.44px;
  line-height: 22px;
  font-weight: 700;
  font-family: inherit;
  display: inline-block;
  min-width: 10.1px;
  flex-shrink: 0;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
    line-height: 18px;
  }
`;
const OriginalPrice1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) 0px 0px;
`;
const PriceInfo2 = styled.b`
  flex: 1;
  position: relative;
  letter-spacing: -0.44px;
  line-height: 22px;
  display: inline-block;
  min-width: 52.3px;
  flex-shrink: 0;
  white-space: nowrap;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
    line-height: 18px;
  }
`;
const Price = styled.div`
  width: 121.3px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-9xs-1);
  box-sizing: border-box;
  font-size: var(--font-size-3xl);
  font-family: var(--font-barlow);
`;
const Divproduct2 = styled.div`
  align-self: stretch;
  border-bottom: 1px solid var(--color-gainsboro-100);
  border-left: 1px solid var(--color-gainsboro-100);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xl) var(--padding-base) var(--padding-sm);
  gap: var(--gap-91xl-5);
  z-index: 7;
`;
const ProductRow = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Spanbadge2 = styled.div`
  width: 39.5px;
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
const Organic1 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  text-transform: uppercase;
  font-weight: 800;
  display: inline-block;
  min-width: 46px;
`;
const Link1103500x500jpg = styled.img`
  position: absolute;
  width: calc(100% - 5px);
  top: 5px;
  right: 5px;
  left: 0px;
  max-width: 100%;
  overflow: hidden;
  height: 151.5px;
  object-fit: cover;
`;
const LinkIcon1 = styled.img`
  position: absolute;
  top: 0px;
  left: 124.5px;
  border-radius: var(--br-base);
  width: 32px;
  height: 32px;
  z-index: 1;
`;
const StrawberryBadge = styled.div`
  height: 156.5px;
  width: 156.5px;
  position: absolute;
  margin: 0 !important;
  top: -142.5px;
  right: -86.3px;
`;
const Spanbadge3 = styled.div`
  width: 80.2px;
  border-radius: var(--br-sm) var(--br-21xl) var(--br-21xl) var(--br-sm);
  background: linear-gradient(90deg, #d4fc79, #96e6a1 50%);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs) var(--padding-7xs);
  box-sizing: border-box;
  position: relative;
  gap: var(--gap-8xs);
  z-index: 1;
  text-align: center;
`;
const LinkLarge = styled.div`
  position: relative;
  letter-spacing: -0.26px;
  line-height: 17px;
  font-weight: 500;
  white-space: nowrap;
`;
const Heading7 = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-15xl) 0px 0px;
  font-size: var(--font-size-smi);
  color: var(--color-gray-500);
`;
const ImgRated400OutOf5Parent = styled.div`
  height: 12.5px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  font-size: var(--font-size-xs);
  color: var(--color-slategray);
`;
const SpanbadgeParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xs);
`;
const Del1 = styled.div`
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
const FrameParent1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-6xs-5);
  font-size: var(--font-size-3xl);
  color: var(--color-crimson);
  font-family: var(--font-barlow);
`;
const FrameDiv = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mini-3);
  text-align: left;
  color: var(--color-seagreen);
`;
const Divproduct3 = styled.div`
  align-self: stretch;
  border-bottom: 1px solid var(--color-gainsboro-100);
  border-left: 1px solid var(--color-gainsboro-100);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xl) var(--padding-sm) var(--padding-13xl)
    var(--padding-mini);
  gap: var(--gap-95xl-5);
  @media screen and (max-width: 450px) {
    padding-top: var(--padding-xl);
    padding-bottom: var(--padding-2xl);
    box-sizing: border-box;
  }
`;
const Divproduct4 = styled.div`
  align-self: stretch;
  border-bottom: 1px solid var(--color-gainsboro-100);
  border-left: 1px solid var(--color-gainsboro-100);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xl) var(--padding-base) var(--padding-sm);
  gap: var(--gap-xl);
  z-index: 2;
`;
const ProductContainer = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const LinkStrawberries = styled.div`
  position: relative;
  letter-spacing: -0.26px;
  line-height: 17px;
  font-weight: 500;
  display: inline-block;
  min-width: 107px;
`;
const Heading8 = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Div2 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 12px;
  display: inline-block;
  min-width: 8px;
  flex-shrink: 0;
`;
const ImgRated367OutOf5Parent = styled.div`
  height: 18px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-7xs-5);
  box-sizing: border-box;
  gap: var(--gap-5xs);
  font-size: var(--font-size-xs);
  color: var(--color-slategray);
`;
const Ins1 = styled.b`
  position: relative;
  letter-spacing: -0.44px;
  line-height: 22px;
  display: inline-block;
  min-width: 49px;
  white-space: nowrap;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
    line-height: 18px;
  }
`;
const Del2 = styled.div`
  position: relative;
  font-size: var(--font-size-base-1);
  text-decoration: line-through;
  letter-spacing: -0.44px;
  line-height: 17px;
  font-weight: 500;
  color: var(--color-gray-300);
  display: inline-block;
  min-width: 35px;
  white-space: nowrap;
`;
const FrameParent2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-6xs-5);
`;
const LinkAddToCartStrawberrParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-base);
  font-size: var(--font-size-2xs);
  color: var(--color-forestgreen);
  font-family: var(--font-inter);
`;
const FrameParent3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mini);
  font-size: var(--font-size-3xl);
  color: var(--color-crimson);
  font-family: var(--font-barlow);
`;
const Heading2Parent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const Divproduct5 = styled.div`
  align-self: stretch;
  border-bottom: 1px solid var(--color-gainsboro-100);
  border-left: 1px solid var(--color-gainsboro-100);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xl) var(--padding-sm) var(--padding-13xl)
    var(--padding-mini);
  gap: var(--gap-xl);
  text-align: left;
  font-size: var(--font-size-smi);
  color: var(--color-gray-500);
  @media screen and (max-width: 450px) {
    padding-bottom: var(--padding-2xl);
    box-sizing: border-box;
  }
`;
const Link5 = styled.div`
  width: 37.9px;
  height: 151.5px;
  position: relative;
  display: none;
`;
const Div3 = styled.div`
  width: 20.2px;
  position: relative;
  letter-spacing: -0.32px;
  text-transform: uppercase;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  min-width: 20.2px;
`;
const SpanbadgeContainer = styled.div`
  width: 37.9px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) 0px 0px;
  box-sizing: border-box;
`;
const Link6 = styled.div`
  align-self: stretch;
  width: 37.9px;
  position: relative;
  z-index: 1;
`;
const Divdot5 = styled.div`
  position: absolute;
  top: calc(50% - 3px);
  left: calc(50% - 15px);
  border-radius: var(--br-10xs);
  background-color: var(--color-gold);
  width: 6px;
  height: 6px;
`;
const Divdot6 = styled.div`
  position: absolute;
  top: calc(50% - 3px);
  left: calc(50% - 7px);
  border-radius: var(--br-10xs);
  background-color: var(--color-white);
  width: 6px;
  height: 6px;
`;
const Divdot7 = styled.div`
  position: absolute;
  top: calc(50% - 3px);
  left: calc(50% + 9px);
  border-radius: var(--br-10xs);
  background-color: var(--color-white);
  width: 6px;
  height: 6px;
`;
const Link7 = styled.div`
  width: 40px;
  height: 14px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-gray-900);
  z-index: 1;
`;
const LinkWrapper = styled.div`
  height: 19px;
  width: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-8xs);
  box-sizing: border-box;
`;
const Link189500x500jpgParent = styled.div`
  height: 151.5px;
  width: 151.5px;
  margin: 0 !important;
  position: absolute;
  bottom: -124.5px;
  left: -124.5px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0px var(--padding-7xs) 0px var(--padding-18xl);
  box-sizing: border-box;
  gap: var(--gap-xl);
`;
const LinkIcon2 = styled.img`
  height: 32px;
  width: 32px;
  position: relative;
  border-radius: var(--br-base);
  flex-shrink: 0;
  z-index: 4;
`;
const Divproduct6 = styled.div`
  align-self: stretch;
  border-bottom: 1px solid var(--color-gainsboro-100);
  border-left: 1px solid var(--color-gainsboro-100);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xl) var(--padding-base) var(--padding-sm);
  gap: var(--gap-125xl-5);
  z-index: 2;
`;
const Spanbadge4 = styled.div`
  position: absolute;
  top: 4px;
  left: 0px;
  border-radius: var(--br-sm) var(--br-21xl) var(--br-21xl) var(--br-sm);
  background-color: var(--color-crimson);
  width: 39.2px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs) var(--padding-5xs);
  box-sizing: border-box;
  z-index: 1;
`;
const Link153500x500jpgParent = styled.div`
  position: absolute;
  height: 100%;
  top: 0px;
  bottom: 0px;
  left: 10px;
  width: 156.5px;
`;
const SpanbadgeGroup = styled.div`
  width: 166.5px;
  height: 156.5px;
  position: relative;
`;
const Heading9 = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-11xs) 0px 0px;
`;
const Ins2 = styled.b`
  position: relative;
  letter-spacing: -0.44px;
  line-height: 22px;
  display: inline-block;
  min-width: 57.3px;
  flex-shrink: 0;
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
  min-width: 41px;
  flex-shrink: 0;
  white-space: nowrap;
`;
const FrameParent4 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-7xs-1);
  gap: var(--gap-6xs-5);
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
const Divproduct7 = styled.div`
  align-self: stretch;
  border-bottom: 1px solid var(--color-gainsboro-100);
  border-left: 1px solid var(--color-gainsboro-100);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xl) var(--padding-sm) var(--padding-12xl)
    var(--padding-mini);
  gap: var(--gap-xl);
  z-index: 7;
`;
const Div4 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  text-transform: uppercase;
  font-weight: 800;
  display: inline-block;
  min-width: 20px;
`;
const SpanbadgeFrame = styled.div`
  width: 37.4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) 0px 0px;
  box-sizing: border-box;
`;
const Link8 = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  z-index: 1;
`;
const Link9 = styled.div`
  width: 32px;
  height: 14px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-gray-900);
  z-index: 1;
`;
const RatingDots = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-8xs);
`;
const Link111500x500jpgParent = styled.div`
  height: 151.5px;
  width: 151.5px;
  margin: 0 !important;
  position: absolute;
  bottom: -124.5px;
  left: -124.5px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px var(--padding-8xs) 0px var(--padding-31xl);
  box-sizing: border-box;
  gap: var(--gap-sm-5);
`;
const Divproduct8 = styled.div`
  align-self: stretch;
  border-bottom: 1px solid var(--color-gainsboro-100);
  border-left: 1px solid var(--color-gainsboro-100);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xl) var(--padding-base) var(--padding-mini);
  gap: var(--gap-125xl-5);
`;
const Spanbadge5 = styled.div`
  position: absolute;
  top: 4px;
  left: 0px;
  border-radius: var(--br-sm) var(--br-21xl) var(--br-21xl) var(--br-sm);
  background-color: var(--color-crimson);
  width: 37.6px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs) var(--padding-5xs);
  box-sizing: border-box;
  z-index: 1;
`;
const LinkBlackberries = styled.div`
  position: relative;
  letter-spacing: -0.26px;
  line-height: 17px;
  font-weight: 500;
  display: inline-block;
  min-width: 110px;
`;
const Del4 = styled.div`
  position: relative;
  font-size: var(--font-size-base-1);
  text-decoration: line-through;
  letter-spacing: -0.44px;
  line-height: 17px;
  font-weight: 500;
  color: var(--color-gray-300);
  display: inline-block;
  min-width: 38px;
  white-space: nowrap;
`;
const InsParent = styled.div`
  height: 22.9px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-7xs);
`;
const FrameParent5 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base-1);
  font-size: var(--font-size-3xl);
  color: var(--color-crimson);
  font-family: var(--font-barlow);
`;
const Divproduct9 = styled.div`
  align-self: stretch;
  border-bottom: 1px solid var(--color-gainsboro-100);
  border-left: 1px solid var(--color-gainsboro-100);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xl) var(--padding-sm) var(--padding-12xl)
    var(--padding-mini);
  gap: var(--gap-xl);
  z-index: 8;
`;
const Spanbadge6 = styled.div`
  position: absolute;
  top: 4px;
  left: 0px;
  border-radius: var(--br-sm) var(--br-21xl) var(--br-21xl) var(--br-sm);
  background-color: var(--color-crimson);
  width: 39.5px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs) var(--padding-5xs);
  box-sizing: border-box;
  z-index: 1;
`;
const ImgRated400OutOf5Parent1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  font-size: var(--font-size-xs);
  color: var(--color-slategray);
`;
const LinkFreshPomegranateEachParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xs-9);
`;
const Del5 = styled.div`
  position: relative;
  font-size: var(--font-size-base-1);
  text-decoration: line-through;
  letter-spacing: -0.44px;
  line-height: 19px;
  font-weight: 500;
  color: var(--color-gray-300);
  display: inline-block;
  min-width: 37.5px;
  white-space: nowrap;
`;
const LinkAddToCartFreshPom = styled.img`
  height: 34px;
  width: 36px;
  position: relative;
  border-radius: var(--br-5xs);
  flex-shrink: 0;
`;
const InStock1 = styled.b`
  position: relative;
  letter-spacing: -0.32px;
  text-transform: uppercase;
  display: inline-block;
  min-width: 50.2px;
  flex-shrink: 0;
`;
const FrameParent6 = styled.div`
  height: 122.9px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-sm-3);
  text-align: left;
  font-size: var(--font-size-smi);
  color: var(--color-gray-500);
`;
const Divproduct10 = styled.div`
  align-self: stretch;
  border-bottom: 1px solid var(--color-gainsboro-100);
  border-left: 1px solid var(--color-gainsboro-100);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xl) var(--padding-base) var(--padding-12xl);
  gap: var(--gap-xl);
  z-index: 4;
`;
const Div5 = styled.div`
  width: 15.3px;
  position: relative;
  letter-spacing: -0.32px;
  text-transform: uppercase;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  min-width: 15.3px;
`;
const SpanbadgeWrapper1 = styled.div`
  width: 32.9px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) 0px 0px;
  box-sizing: border-box;
`;
const Ins3 = styled.b`
  position: relative;
  letter-spacing: -0.44px;
  line-height: 22px;
  display: inline-block;
  min-width: 55.5px;
  white-space: nowrap;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
    line-height: 18px;
  }
`;
const Del6 = styled.div`
  position: relative;
  font-size: var(--font-size-base-1);
  text-decoration: line-through;
  letter-spacing: -0.44px;
  line-height: 17px;
  font-weight: 500;
  color: var(--color-gray-300);
  display: inline-block;
  min-width: 43px;
  white-space: nowrap;
`;
const InsGroup = styled.div`
  height: 22.9px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-6xs-5);
  font-size: var(--font-size-3xl);
  color: var(--color-crimson);
  font-family: var(--font-barlow);
`;
const FrameParent7 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mini-3);
  text-align: left;
  font-size: var(--font-size-smi);
  color: var(--color-gray-500);
`;
const Divproduct11 = styled.div`
  align-self: stretch;
  border-bottom: 1px solid var(--color-gainsboro-100);
  border-left: 1px solid var(--color-gainsboro-100);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xl) var(--padding-base) var(--padding-sm);
  gap: var(--gap-125xl-5);
  z-index: 9;
`;
const After = styled.div`
  height: 1410.1px;
  width: 1012.5px;
  position: relative;
  border-radius: var(--br-5xs);
  border: 1px solid var(--color-gainsboro-100);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
`;
const DivshopProductsWrapper = styled.div`
  align-self: stretch;
  height: 1410.1px;
  border-radius: var(--br-5xs);
  border: 1px solid var(--color-gainsboro-100);
  box-sizing: border-box;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-333xl-2);
  max-width: 100%;
  z-index: 10;
  text-align: center;
  color: var(--color-lavenderblush);
  @media screen and (max-width: 1325px) {
    padding-bottom: var(--padding-210xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 1125px) {
    padding-bottom: var(--padding-130xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-bottom: var(--padding-78xl);
    box-sizing: border-box;
  }
`;
const Banner = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  max-width: 100%;
  font-size: var(--font-size-3xs);
  color: var(--color-saddlebrown);
`;
const FilterOptions = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-2xl);
  max-width: 100%;
`;
const Filters = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) 0px 0px;
  box-sizing: border-box;
  max-width: calc(100% - 304px);
  color: var(--color-dimgray-200);
  @media screen and (max-width: 1125px) {
    max-width: 100%;
  }
`;
const FilterSidebarWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-26xl);
  max-width: 100%;
  font-size: var(--font-size-sm);
  color: var(--color-gray-500);
  @media screen and (max-width: 800px) {
    gap: var(--gap-3xl);
  }
`;
const BreadcrumbContainerRoot = styled.div`
  width: 1316.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-10xl);
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-xs);
  color: var(--color-darkgray);
  font-family: var(--font-inter);
`;

const BreadcrumbContainer = ({ className = "" }) => {
  return (
    <BreadcrumbContainerRoot className={className}>
      <HomeLinkWrapper>
        <HomeLinkContainer>
          <NavList>Home</NavList>
        </HomeLinkContainer>
        <ShopLinkWrapper>
          <NavListItemLink alt="" src="/nav--list--item--link-4.svg" />
        </ShopLinkWrapper>
        <NavList1>Shop</NavList1>
      </HomeLinkWrapper>
      <FilterSidebarWrapper>
        <FilterSidebar>
          <Divwidget>
            <Heading>Widget price filter</Heading>
            <PriceRangeWrapper>
              <PriceInputWrapper>
                <FormMin>Min price</FormMin>
                <FormMax>Max price</FormMax>
              </PriceInputWrapper>
              <PriceInputFieldsWrapper>
                <FormInput>
                  <Placeholder placeholder="0" type="text" />
                </FormInput>
                <FilterLabelWrapper>
                  <Form>-</Form>
                </FilterLabelWrapper>
                <FormInput1>
                  <Div placeholder="30" type="text" />
                </FormInput1>
              </PriceInputFieldsWrapper>
            </PriceRangeWrapper>
            <Form1>
              <SpanuiSliderHandle />
              <SpanuiSliderHandle1 />
              <DivuiSliderRange />
            </Form1>
            <FilterPriceButton>
              <FilterPriceLabel>
                <FormPrice>Price: $0 — $30</FormPrice>
              </FilterPriceLabel>
              <FormButton>
                <Filter>Filter</Filter>
              </FormButton>
            </FilterPriceButton>
          </Divwidget>
          <Divwidget1>
            <Heading1>Product Categories</Heading1>
            <CategoryList>
              <FilterPriceButton>
                <CategoryItem>
                  <FruitsVegetablesCategory>
                    <ListItemLinkInput type="checkbox" />
                    <FruitsVegetablesLabel>
                      <ListItem>{`Fruits & Vegetables`}</ListItem>
                    </FruitsVegetablesLabel>
                  </FruitsVegetablesCategory>
                  <CategoryInput>
                    <ListItemLinkInput1 type="checkbox" />
                    <FruitsVegetablesLabel>
                      <ListItem1>{`Baby & Pregnancy`}</ListItem1>
                    </FruitsVegetablesLabel>
                  </CategoryInput>
                  <CategoryInput>
                    <ListItemLinkInput1 type="checkbox" />
                    <FruitsVegetablesLabel>
                      <ListItem2>Beverages</ListItem2>
                    </FruitsVegetablesLabel>
                  </CategoryInput>
                  <CategoryInput>
                    <ListItemLinkInput2 type="checkbox" />
                    <FruitsVegetablesLabel>
                      <ListItem3>{`Meats & Seafood`}</ListItem3>
                    </FruitsVegetablesLabel>
                  </CategoryInput>
                  <CategoryInput>
                    <ListItemLinkInput1 type="checkbox" />
                    <FruitsVegetablesLabel>
                      <ListItem4>{`Biscuits & Snacks`}</ListItem4>
                    </FruitsVegetablesLabel>
                  </CategoryInput>
                  <CategoryInput>
                    <ListItemLinkInput1 type="checkbox" />
                    <FruitsVegetablesLabel>
                      <ListItem5>{`Breads & Bakery`}</ListItem5>
                    </FruitsVegetablesLabel>
                  </CategoryInput>
                </CategoryItem>
                <Placeholder1>
                  <ListItem6>+</ListItem6>
                  <PlaceholderItemContainer>
                    <ListItem6>+</ListItem6>
                    <ListItem6>+</ListItem6>
                  </PlaceholderItemContainer>
                  <ListItem6>+</ListItem6>
                </Placeholder1>
              </FilterPriceButton>
              <BreakfastCategory>
                <CategoryItem>
                  <CategoryInput>
                    <ListItemLinkInput1 type="checkbox" />
                    <FruitsVegetablesLabel>
                      <ListItem7>{`Breaksfast & Dairy`}</ListItem7>
                    </FruitsVegetablesLabel>
                  </CategoryInput>
                  <CategoryInput>
                    <ListItemLinkInput1 type="checkbox" />
                    <FruitsVegetablesLabel>
                      <ListItem8>Frozen Foods</ListItem8>
                    </FruitsVegetablesLabel>
                  </CategoryInput>
                  <CategoryInput>
                    <ListItemLinkInput2 type="checkbox" />
                    <FruitsVegetablesLabel>
                      <ListItem9>{`Grocery & Staples`}</ListItem9>
                    </FruitsVegetablesLabel>
                  </CategoryInput>
                  <CategoryInput>
                    <ListItemLinkInput1 type="checkbox" />
                    <FruitsVegetablesLabel>
                      <ListItem10>Healthcare</ListItem10>
                    </FruitsVegetablesLabel>
                  </CategoryInput>
                </CategoryItem>
                <Placeholder2>
                  <ListItem6>+</ListItem6>
                </Placeholder2>
              </BreakfastCategory>
              <CategoryInput>
                <ListItemLinkInput1 type="checkbox" />
                <FruitsVegetablesLabel>
                  <ListItem11>Household Needs</ListItem11>
                </FruitsVegetablesLabel>
              </CategoryInput>
            </CategoryList>
          </Divwidget1>
          <Divwidget>
            <Heading2>Filter by Color</Heading2>
            <ColorBrandFilterItems>
              <ListItem12 />
              <BrandFilterItems>
                <ListItem13>Green</ListItem13>
              </BrandFilterItems>
              <BrandFilterLinks>
                <ListItem14>(1)</ListItem14>
              </BrandFilterLinks>
            </ColorBrandFilterItems>
          </Divwidget>
          <Divwidget2>
            <Heading3>Filter by Brands</Heading3>
            <ListItemParent>
              <ListItemLinkInput1 type="checkbox" />
              <ListItemLinkFreshWrapper>
                <ListItem15>Fresh</ListItem15>
              </ListItemLinkFreshWrapper>
              <ListItem1Wrapper>
                <ListItem16>(1)</ListItem16>
              </ListItem1Wrapper>
            </ListItemParent>
          </Divwidget2>
          <ProductStatus>
            <Heading4>Product Status</Heading4>
            <CategoryItem>
              <CategoryInput>
                <ListItemLinkInput1 type="checkbox" />
                <FruitsVegetablesLabel>
                  <ListItem17>In Stock</ListItem17>
                </FruitsVegetablesLabel>
              </CategoryInput>
              <CategoryInput>
                <ListItemLinkInput1 type="checkbox" />
                <FruitsVegetablesLabel>
                  <ListItem18>On Sale</ListItem18>
                </FruitsVegetablesLabel>
              </CategoryInput>
            </CategoryItem>
          </ProductStatus>
        </FilterSidebar>
        <Filters>
          <FilterOptions>
            <FilterItems>
              <FilterClearButton>
                <FilterName>
                  <FilterClear>
                    <ListItemLink />
                    <ListItemLink1 />
                  </FilterClear>
                </FilterName>
                <ListItem19>Clear filters</ListItem19>
              </FilterClearButton>
              <FilterClearButton>
                <FilterName>
                  <FilterClear>
                    <ListItemLink />
                    <ListItemLink1 />
                  </FilterClear>
                </FilterName>
                <ListItem20>{`Fruits & Vegetables`}</ListItem20>
              </FilterClearButton>
            </FilterItems>
            <Banner>
              <DivsiteBanner>
                <Banner33jpgIcon alt="" src="/banner33jpg@2x.png" />
                <BannerHeading>
                  <Heading5>
                    <OnlyThisWeek>Only This Week</OnlyThisWeek>
                  </Heading5>
                </BannerHeading>
                <GroceryHeading>
                  <Heading6>Grocery store with different</Heading6>
                  <Heading6>treasures</Heading6>
                </GroceryHeading>
                <BannerDescription>
                  <WeHavePreparedContainer>
                    <WeHavePrepared>
                      We have prepared special discounts for you on grocery
                    </WeHavePrepared>
                    <WeHavePrepared>products...</WeHavePrepared>
                  </WeHavePreparedContainer>
                  <Link>
                    <ShopNow>Shop Now</ShopNow>
                    <IklbIconMoveRight alt="" src="/iklbiconmoveright.svg" />
                  </Link>
                </BannerDescription>
              </DivsiteBanner>
              <DivbeforeShopLoop>
                <ResultsCount>
                  <ShowingAll>Showing all 16 results</ShowingAll>
                </ResultsCount>
                <Sorting>
                  <SortOptions>
                    <SortingDropdown>
                      <SortLabel>
                        <Sort>Sort:</Sort>
                      </SortLabel>
                      <SortByLatest>Sort by latest</SortByLatest>
                    </SortingDropdown>
                  </SortOptions>
                  <Pagination>
                    <PaginationOptions>
                      <DivsortingPerPage>
                        <SortLabel>
                          <Show>Show:</Show>
                        </SortLabel>
                        <Items>20 Items</Items>
                      </DivsortingPerPage>
                    </PaginationOptions>
                    <DivproductViewsButtonsIcon
                      loading="lazy"
                      alt=""
                      src="/divproductviewsbuttons.svg"
                    />
                  </Pagination>
                </Sorting>
              </DivbeforeShopLoop>
              <DivshopProductsWrapper>
                <ProductRow>
                  <DivproductParent>
                    <Divproduct>
                      <Link1 />
                      <Link1 />
                      <Product>
                        <BadgeContainer>
                          <Spanbadge>
                            <Badge>75%</Badge>
                          </Spanbadge>
                        </BadgeContainer>
                        <ProductImage>
                          <ImageLink>
                            <Link139500x500jpg
                              alt=""
                              src="/link--139500x500jpg@2x.png"
                            />
                            <Link2>
                              <Divdot />
                              <Divdot1 />
                            </Link2>
                          </ImageLink>
                          <LinkIcon alt="" src="/link-6.svg" />
                        </ProductImage>
                      </Product>
                      <ProductInfo
                        yellowPotatoesWhole="Yellow Potatoes Whole"
                        fresh5lbBag="Fresh, 5lb Bag"
                        imgRated433OutOf5="/img--rated-433-out-of-5.svg"
                        ins="$0.50"
                        del="$1.99"
                        linkAddToCartYellowPotato="/link--add-to-cart-yellow-potatoes-whole-fresh-5lb-bag.svg"
                      />
                    </Divproduct>
                    <Divproduct1>
                      <Link3 />
                      <Link3 />
                      <Link3 />
                      <FrameParent>
                        <SpanbadgeWrapper>
                          <Spanbadge>
                            <Div1>56%</Div1>
                          </Spanbadge>
                        </SpanbadgeWrapper>
                        <LinkIcon alt="" src="/link-6.svg" />
                      </FrameParent>
                      <FrameGroup>
                        <FrameContainer>
                          <Link1109500x500jpgParent>
                            <Link139500x500jpg
                              alt=""
                              src="/link--1109500x500jpg@2x.png"
                            />
                            <Link4>
                              <Divdot2 />
                              <Divdot3 />
                              <Divdot4 />
                            </Link4>
                          </Link1109500x500jpgParent>
                          <Spanbadge1>
                            <SvgIcon alt="" src="/svg.svg" />
                            <FruitsVegetablesLabel>
                              <Organic>Organic</Organic>
                            </FruitsVegetablesLabel>
                          </Spanbadge1>
                        </FrameContainer>
                        <LinkMarketsideFreshOrganiParent>
                          <LinkMarketsideContainer>
                            <WeHavePrepared>
                              Marketside Fresh Organic
                            </WeHavePrepared>
                            <WeHavePrepared>Bananas, Bunch</WeHavePrepared>
                          </LinkMarketsideContainer>
                          <ImgRated300OutOf5Parent>
                            <ImgRated300OutOf
                              alt=""
                              src="/img--rated-300-out-of-5.svg"
                            />
                            <OriginalPrice>2</OriginalPrice>
                          </ImgRated300OutOf5Parent>
                          <Select>
                            <PriceInfo>
                              <Ins>$0.89</Ins>
                            </PriceInfo>
                            <Del>$1.99</Del>
                          </Select>
                          <Action>
                            <LinkAddToCartMarketsid
                              loading="lazy"
                              alt=""
                              src="/link--add-to-cart-marketside-fresh-organic-bananas-bunch.svg"
                            />
                            <Availability>
                              <InStock>In Stock</InStock>
                            </Availability>
                          </Action>
                        </LinkMarketsideFreshOrganiParent>
                      </FrameGroup>
                    </Divproduct1>
                    <Divproduct
                      prop="75%"
                      link159500x500jpg="/link--159500x500jpg@2x.png"
                      linkFreshLemonEach="Fresh Lemon, Each"
                      imgRated200OutOf5="/img--rated-200-out-of-5.svg"
                      prop1="2"
                      ins="$0.50"
                      del="$1.99"
                    />
                  </DivproductParent>
                  <Divproduct2>
                    <Link3 />
                    <Link3 />
                    <Link3 />
                    <FrameParent>
                      <ProductContent>
                        <Spanbadge>
                          <Badge1>17%</Badge1>
                        </Spanbadge>
                      </ProductContent>
                      <LinkIcon alt="" src="/link-6.svg" />
                    </FrameParent>
                    <FrameGroup>
                      <FrameContainer>
                        <Link1109500x500jpgParent>
                          <Link139500x500jpg
                            alt=""
                            src="/link--156500x500jpg@2x.png"
                          />
                          <Link4>
                            <Divdot2 />
                            <Divdot3 />
                            <Divdot4 />
                          </Link4>
                        </Link1109500x500jpgParent>
                        <Spanbadge1>
                          <SvgIcon alt="" src="/svg.svg" />
                          <FruitsVegetablesLabel>
                            <Organic>Organic</Organic>
                          </FruitsVegetablesLabel>
                        </Spanbadge1>
                      </FrameContainer>
                      <LinkMarketsideFreshOrganiParent>
                        <LinkMarketsideContainer>
                          <WeHavePrepared>
                            Fresh Granny Smith Apple,
                          </WeHavePrepared>
                          <WeHavePrepared>Each</WeHavePrepared>
                        </LinkMarketsideContainer>
                        <ImgRated300OutOf5Parent>
                          <ImgRated300OutOf
                            loading="lazy"
                            alt=""
                            src="/img--rated-300-out-of-5.svg"
                          />
                          <Rating>3</Rating>
                        </ImgRated300OutOf5Parent>
                        <Price>
                          <PriceInfo1>$15.99</PriceInfo1>
                          <OriginalPrice1>
                            <H>–</H>
                          </OriginalPrice1>
                          <PriceInfo2>$9.88</PriceInfo2>
                        </Price>
                        <Action>
                          <LinkAddToCartMarketsid
                            loading="lazy"
                            alt=""
                            src="/link--add-to-cart-marketside-fresh-organic-bananas-bunch.svg"
                          />
                          <Availability>
                            <InStock>In Stock</InStock>
                          </Availability>
                        </Action>
                      </LinkMarketsideFreshOrganiParent>
                    </FrameGroup>
                  </Divproduct2>
                </ProductRow>
                <ProductContainer>
                  <Divproduct3>
                    <Spanbadge2>
                      <Div1>50%</Div1>
                    </Spanbadge2>
                    <FrameDiv>
                      <SpanbadgeParent>
                        <Spanbadge3>
                          <SvgIcon alt="" src="/svg.svg" />
                          <FruitsVegetablesLabel>
                            <Organic1>Organic</Organic1>
                          </FruitsVegetablesLabel>
                          <StrawberryBadge>
                            <Link1103500x500jpg
                              alt=""
                              src="/link--1103500x500jpg@2x.png"
                            />
                            <LinkIcon1 alt="" src="/link-6.svg" />
                          </StrawberryBadge>
                        </Spanbadge3>
                        <Heading7>
                          <LinkLarge>Large Bagged Oranges</LinkLarge>
                        </Heading7>
                        <ImgRated400OutOf5Parent>
                          <ImgRated300OutOf
                            alt=""
                            src="/img--rated-400-out-of-5.svg"
                          />
                          <Rating>3</Rating>
                        </ImgRated400OutOf5Parent>
                      </SpanbadgeParent>
                      <FrameParent1>
                        <SortLabel>
                          <Ins>$0.89</Ins>
                        </SortLabel>
                        <Del1>$1.78</Del1>
                      </FrameParent1>
                      <Action>
                        <LinkAddToCartMarketsid
                          loading="lazy"
                          alt=""
                          src="/link--add-to-cart-large-bagged-oranges.svg"
                        />
                        <Availability>
                          <InStock>In Stock</InStock>
                        </Availability>
                      </Action>
                    </FrameDiv>
                  </Divproduct3>
                  <Divproduct4>
                    <FrameComponent1
                      prop="16%"
                      link1104500x500jpg="/link--1104500x500jpg@2x.png"
                    />
                    <ProductInfo
                      yellowPotatoesWhole={`Large Garden Spinach &`}
                      fresh5lbBag="Herb Wrap Tortillas –…"
                      imgRated433OutOf5="/img--rated-300-out-of-5.svg"
                      ins="$27.90"
                      del="$32.90"
                      linkAddToCartYellowPotato="/link--add-to-cart-marketside-fresh-organic-bananas-bunch.svg"
                    />
                  </Divproduct4>
                  <Divproduct1
                    prop="14%"
                    link155500x500jpg="/link--155500x500jpg@2x.png"
                    linkFreshCauliflowerEach="Fresh Cauliflower, Each"
                    imgRated300OutOf5="/img--rated-300-out-of-5-1.svg"
                    prop1="2"
                    ins="$12.79"
                    del="$14.79"
                    linkAddToCartFreshCaulifl="/link--add-to-cart-fresh-lemon-each.svg"
                  />
                </ProductContainer>
                <ProductRow>
                  <Divproduct5>
                    <FrameComponent1
                      prop="31%"
                      link1104500x500jpg="/link--123500x500jpg@2x.png"
                    />
                    <Heading2Parent>
                      <Heading8>
                        <LinkStrawberries>Strawberries – 1lb</LinkStrawberries>
                      </Heading8>
                      <ImgRated367OutOf5Parent>
                        <ImgRated300OutOf
                          alt=""
                          src="/img--rated-400-out-of-5.svg"
                        />
                        <Div2>3</Div2>
                      </ImgRated367OutOf5Parent>
                      <FrameParent3>
                        <FrameParent2>
                          <SortLabel>
                            <Ins1>$1.50</Ins1>
                          </SortLabel>
                          <Del2>$2.15</Del2>
                        </FrameParent2>
                        <LinkAddToCartStrawberrParent>
                          <LinkAddToCartMarketsid
                            loading="lazy"
                            alt=""
                            src="/link--add-to-cart-large-bagged-oranges.svg"
                          />
                          <Availability>
                            <InStock>In Stock</InStock>
                          </Availability>
                        </LinkAddToCartStrawberrParent>
                      </FrameParent3>
                    </Heading2Parent>
                  </Divproduct5>
                  <Divproduct6>
                    <Link5 />
                    <Link5 />
                    <Link5 />
                    <FrameParent>
                      <SpanbadgeContainer>
                        <Spanbadge>
                          <Div3>10%</Div3>
                        </Spanbadge>
                      </SpanbadgeContainer>
                      <ProductImage>
                        <Link189500x500jpgParent>
                          <Link139500x500jpg
                            alt=""
                            src="/link--189500x500jpg@2x.png"
                          />
                          <Link6 />
                          <LinkWrapper>
                            <Link7>
                              <Divdot5 />
                              <Divdot6 />
                              <Divdot1 />
                              <Divdot7 />
                            </Link7>
                          </LinkWrapper>
                        </Link189500x500jpgParent>
                        <LinkIcon2 alt="" src="/link-6.svg" />
                      </ProductImage>
                    </FrameParent>
                    <FrameComponent
                      halloweenHarvestCaramel="Halloween Harvest Caramel"
                      appleSoftCaramels="Apple Soft Caramels –…"
                      imgRated267OutOf5="/img--rated-300-out-of-5.svg"
                      ins="$19.37"
                      del="$21.37"
                      linkAddToCartHalloweenHar="/link--add-to-cart-marketside-fresh-organic-bananas-bunch.svg"
                    />
                  </Divproduct6>
                  <Divproduct7>
                    <SpanbadgeGroup>
                      <Spanbadge4>
                        <Div1>36%</Div1>
                      </Spanbadge4>
                      <Link153500x500jpgParent>
                        <Link1103500x500jpg
                          alt=""
                          src="/link--153500x500jpg@2x.png"
                        />
                        <LinkIcon1 alt="" src="/link-6.svg" />
                      </Link153500x500jpgParent>
                    </SpanbadgeGroup>
                    <Heading2Group>
                      <Heading9>
                        <LinkLarge>Fresh Broccoli Crowns, Each</LinkLarge>
                      </Heading9>
                      <ImgRated367OutOf5Parent>
                        <ImgRated300OutOf
                          alt=""
                          src="/img--rated-300-out-of-5-1.svg"
                        />
                        <Div2>3</Div2>
                      </ImgRated367OutOf5Parent>
                      <FrameParent4>
                        <PriceInfo>
                          <Ins2>$11.54</Ins2>
                        </PriceInfo>
                        <Del3>$17.88</Del3>
                      </FrameParent4>
                      <Action>
                        <LinkAddToCartMarketsid
                          loading="lazy"
                          alt=""
                          src="/link--add-to-cart-fresh-lemon-each.svg"
                        />
                        <Availability>
                          <InStock>In Stock</InStock>
                        </Availability>
                      </Action>
                    </Heading2Group>
                  </Divproduct7>
                </ProductRow>
                <ProductRow>
                  <Divproduct8>
                    <Link3 />
                    <Link3 />
                    <FrameParent>
                      <SpanbadgeFrame>
                        <Spanbadge>
                          <Div4>13%</Div4>
                        </Spanbadge>
                      </SpanbadgeFrame>
                      <ProductImage>
                        <Link111500x500jpgParent>
                          <Link139500x500jpg
                            alt=""
                            src="/link--111500x500jpg@2x.png"
                          />
                          <Link8 />
                          <RatingDots>
                            <Link9>
                              <Divdot2 />
                              <Divdot3 />
                              <Divdot4 />
                            </Link9>
                          </RatingDots>
                        </Link111500x500jpgParent>
                        <LinkIcon alt="" src="/link-6.svg" />
                      </ProductImage>
                    </FrameParent>
                    <FrameComponent
                      halloweenHarvestCaramel="Simple Kitchen FD Sliced"
                      appleSoftCaramels="Strawberries – 1.08lb"
                      imgRated267OutOf5="/img--rated-233-out-of-5.svg"
                      ins="$21.90"
                      del="$24.90"
                      linkAddToCartHalloweenHar="/link--add-to-cart-yellow-potatoes-whole-fresh-5lb-bag.svg"
                    />
                  </Divproduct8>
                  <Divproduct
                    prop="26%"
                    link159500x500jpg="/link--161500x500jpg@2x.png"
                    linkFreshLemonEach="Fresh Purple Eggplant"
                    imgRated200OutOf5="/img--rated-300-out-of-5-1.svg"
                    prop1="3"
                    ins="$2.99"
                    del="$3.99"
                  />
                  <Divproduct9>
                    <SpanbadgeGroup>
                      <Spanbadge5>
                        <Div4>41%</Div4>
                      </Spanbadge5>
                      <Link153500x500jpgParent>
                        <Link1103500x500jpg
                          alt=""
                          src="/link--122500x500jpg@2x.png"
                        />
                        <LinkIcon1 alt="" src="/link-6.svg" />
                      </Link153500x500jpgParent>
                    </SpanbadgeGroup>
                    <Heading2Group>
                      <Heading8>
                        <LinkBlackberries>Blackberries – 6oz</LinkBlackberries>
                      </Heading8>
                      <ImgRated367OutOf5Parent>
                        <ImgRated300OutOf
                          alt=""
                          src="/img--rated-300-out-of-5-1.svg"
                        />
                        <Div2>3</Div2>
                      </ImgRated367OutOf5Parent>
                      <FrameParent5>
                        <InsParent>
                          <Ins>$2.99</Ins>
                          <Del4>$4.99</Del4>
                        </InsParent>
                        <LinkAddToCartStrawberrParent>
                          <LinkAddToCartMarketsid
                            loading="lazy"
                            alt=""
                            src="/link--add-to-cart-fresh-lemon-each.svg"
                          />
                          <Availability>
                            <InStock>In Stock</InStock>
                          </Availability>
                        </LinkAddToCartStrawberrParent>
                      </FrameParent5>
                    </Heading2Group>
                  </Divproduct9>
                </ProductRow>
                <ProductContainer>
                  <Divproduct1
                    prop="58%"
                    link155500x500jpg="/link--1129500x500jpg@2x.png"
                    linkFreshCauliflowerEach="Peach – each"
                    imgRated300OutOf5="/img--rated-400-out-of-5.svg"
                    prop1="3"
                    ins="$0.75"
                    del="$1.75"
                    linkAddToCartFreshCaulifl="/link--add-to-cart-large-bagged-oranges.svg"
                  />
                  <Divproduct10>
                    <SpanbadgeGroup>
                      <Spanbadge6>
                        <Div1>50%</Div1>
                      </Spanbadge6>
                      <Link153500x500jpgParent>
                        <Link1103500x500jpg
                          alt=""
                          src="/link--160500x500jpg@2x.png"
                        />
                        <LinkIcon1 alt="" src="/link-6.svg" />
                      </Link153500x500jpgParent>
                    </SpanbadgeGroup>
                    <FrameParent6>
                      <LinkFreshPomegranateEachParent>
                        <LinkMarketsideContainer>
                          Fresh Pomegranate, Each
                        </LinkMarketsideContainer>
                        <ImgRated400OutOf5Parent1>
                          <ImgRated300OutOf
                            alt=""
                            src="/img--rated-300-out-of-5-1.svg"
                          />
                          <Div2>3</Div2>
                        </ImgRated400OutOf5Parent1>
                      </LinkFreshPomegranateEachParent>
                      <FrameParent1>
                        <PriceInfo>
                          <Ins1>$1.50</Ins1>
                        </PriceInfo>
                        <Del5>$2.99</Del5>
                      </FrameParent1>
                      <Action>
                        <LinkAddToCartFreshPom
                          loading="lazy"
                          alt=""
                          src="/link--add-to-cart-fresh-lemon-each.svg"
                        />
                        <Availability>
                          <InStock1>In Stock</InStock1>
                        </Availability>
                      </Action>
                    </FrameParent6>
                  </Divproduct10>
                  <Divproduct11>
                    <Link5 />
                    <Link5 />
                    <Link5 />
                    <FrameParent>
                      <SpanbadgeWrapper1>
                        <Spanbadge>
                          <Div5>8%</Div5>
                        </Spanbadge>
                      </SpanbadgeWrapper1>
                      <ProductImage>
                        <Link189500x500jpgParent>
                          <Link139500x500jpg
                            alt=""
                            src="/link--11500x500jpg@2x.png"
                          />
                          <Link6 />
                          <LinkWrapper>
                            <Link7>
                              <Divdot5 />
                              <Divdot6 />
                              <Divdot1 />
                              <Divdot7 />
                            </Link7>
                          </LinkWrapper>
                        </Link189500x500jpgParent>
                        <LinkIcon2 alt="" src="/link-6.svg" />
                      </ProductImage>
                    </FrameParent>
                    <FrameParent7>
                      <LinkMarketsideFreshOrganiParent>
                        <LinkMarketsideContainer>
                          <WeHavePrepared>
                            30g Protein Shake – Salted
                          </WeHavePrepared>
                          <WeHavePrepared>
                            Caramel – 11 fl oz-4pk
                          </WeHavePrepared>
                        </LinkMarketsideContainer>
                        <ImgRated400OutOf5Parent>
                          <ImgRated300OutOf
                            alt=""
                            src="/img--rated-300-out-of-5.svg"
                          />
                          <Div2>3</Div2>
                        </ImgRated400OutOf5Parent>
                      </LinkMarketsideFreshOrganiParent>
                      <InsGroup>
                        <Ins3>$11.99</Ins3>
                        <Del6>$12.99</Del6>
                      </InsGroup>
                      <Action>
                        <LinkAddToCartFreshPom
                          loading="lazy"
                          alt=""
                          src="/link--add-to-cart-marketside-fresh-organic-bananas-bunch.svg"
                        />
                        <Availability>
                          <InStock1>In Stock</InStock1>
                        </Availability>
                      </Action>
                    </FrameParent7>
                  </Divproduct11>
                </ProductContainer>
                <After />
              </DivshopProductsWrapper>
            </Banner>
          </FilterOptions>
        </Filters>
      </FilterSidebarWrapper>
    </BreadcrumbContainerRoot>
  );
};

BreadcrumbContainer.propTypes = {
  className: PropTypes.string,
};

export default BreadcrumbContainer;
