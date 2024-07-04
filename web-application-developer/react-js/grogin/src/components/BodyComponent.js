import React from "react";
import styled from "styled-components";
import ShowGridIcon from "../assests/divproductviewsbuttons.svg";
import ProductImg from "../assests/link--123500x500jpg@2x.png";
import Rated4Out5 from "../assests/img--rated-400-out-of-5.svg";
import InStock from "../assests/link--add-to-cart-yellow-potatoes-whole-fresh-5lb-bag.svg";
import { Link } from "react-router-dom";
import BannerImg from "../assests/banner33jpg@2x.png";

const MainContainer = styled.div`
  display: flex;
`;

const LeftContainer = styled.div`
  padding: 20px 50px;
`;

const WidgetPriceFilter = styled.div`
  border-bottom: 1px solid #ccc;
  max-width: 248px;
`;

const WidgetParagraph = styled.p`
  font-size: 14px;
  font-weight: bold;
`;

const PriceFilterWidgetDiv = styled.div`
  display: flex;
`;

const MinInput = styled.input`
  padding-left: 10px;
  width: 100px;
  height: 30px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 7px;
`;

const SubSymbol = styled.p`
  margin: auto 0;
  font-size: 14px;
`;

const MaxInput = styled.input`
  padding-left: 10px;
  width: 100px;
  height: 30px;
  margin-left: 10px;
  border: 1px solid #ccc;
  border-radius: 7px;
`;

const PriceResultDiv = styled.div`
  display: flex;
`;

const ResultPara = styled.p`
  font-size: 14px;
`;

const FilterTitle = styled.p`
  margin-left: 80px;
  font-size: 14px;
`;

const ProductCategory = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
  width: 248px;
`;

const CategoryTitle = styled.p`
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: bold;
`;

const CheckListDiv = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const CheckListInput = styled.input`
  margin-right: 20px;
  margin-left: 0px;
`;

const CheckListPara = styled.p`
  margin-bottom: 0px;
  margin-top: 0px;
`;

const FilterByColorDiv = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
  width: 248px;
`;

const ColorInput = styled.input`
  margin-right: 20px;
  width: 25px;
  border: none;
`;

const ProductStatus = styled.div`
  padding-bottom: 10px;
  width: 248px;
`;

const FiltersDiv = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 14px;
  font-weight: normal;
`;

const SpanX1 = styled.span`
  margin-right: 7px;
  font-size: 17px;
  font-weight: bold;
`;

const SpanX2 = styled.span`
  margin-right: 7px;
  margin-left: 15px;
  font-size: 17px;
  font-weight: bold;
`;

const AdjustFilters = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 12px;
  background-color: #f3f4f6;
  margin-top: 15px;
  padding: 10px;
  border-radius: 9px;
`;

const RightContainer = styled.p``;

const ProductGridDiv = styled.div`
  max-width: 930px;
  margin-top: 20px;
`;

const FilterPara = styled.p`
  margin-right: 390px;
  @media (max-width: 1300px) {
    margin-right: 150px;
  }
  @media (max-width: 975px) {
    margin-right: 130px;
  }@media (max-width: 790px) {
    margin-right: 60px;
    @media (max-width: 699px) {
    margin-right: 30px;
`;

const FilterSpan = styled.span`
  margin-top: 13px;
  margin-right: 9px;
`;

const SortFilter = styled.div`
  margin-top: 13px;
  margin-right: 89px;
  @media (max-width: 1100px) {
    margin-right: 59px;
  }
  @media (max-width: 975px) {
    margin-right: 19px;
  }
`;

const ShowSpan = styled.span`
  margin-top: 13px;
  margin-right: 9px;
`;

const ShowItems = styled.p`
  margin-right: 55px;
  @media (max-width: 1100px) {
    margin-right: 25px;
  }
  @media (max-width: 975px) {
    margin-right: 15px;
  }
`;

const ShowGridImg = styled.img``;

const ProductCard = styled.div`
  margin: 3px;
  border: 0.5px solid #ccc;
  border-radius: 9px;
  display: inline-block;
`;

const CardImg = styled.img`
  width: 223px;
  @media (max-width: 1300px) {
    width: 220px;
  }
  @media (max-width: 1100px) {
    width: 220px;
  }
  @media (max-width: 1020px) {
    width: 200px;
  }
  @media (max-width: 790px) {
    width: 180px;
  }
`;

const CardTitle = styled.p`
  padding-left: 15px;
  margin: 0;
  font-size: 14px;
`;

const RatingImg = styled.img`
  padding: 10px 15px;
`;

const CardPrice = styled.div`
  display: flex;
`;

const OfferPrice = styled.p`
  margin-left: 15px;
  margin-top: 0px;
  margin-bottom: 8px;
  color: #dc2626;
  font-weight: bold;
  font-size: 25px;
`;

const MrpPrice = styled.p`
  margin-left: 12px;
  margin-top: 5px;
  margin-bottom: 8px;
  font-size: 15px;
  text-decoration: line-through;
`;

const StockDiv = styled.div`
  display: flex;
  margin-left: 15px;
  padding-bottom: 10px;
`;

const StockIcon = styled.img``;

const StockTitle = styled.p`
  margin-left: 10px;
  font-size: 15px;
  color: green;
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
const OnlyThisWeek = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.2px;
  font-weight: 600;
  color: inherit;
  display: inline-block;
  min-width: 73px;
`;
const Heading = styled.div`
  border-radius: 30px;
  background-color: #ffedd5;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 5px 5px 5px 6px;
  white-space: nowrap;
  z-index: 1;
`;
const Heading1 = styled.b`
  position: relative;
  letter-spacing: -1.2px;
  z-index: 1;
  @media screen and (max-width: 750px) {
    font-size: 24px;
  }
  @media screen and (max-width: 450px) {
    font-size: 18px;
  }
`;
const Heading2 = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -1.2px;
  font-weight: 700;
  color: inherit;
  z-index: 1;
  @media screen and (max-width: 750px) {
    font-size: 24px;
  }
  @media screen and (max-width: 450px) {
    font-size: 18px;
  }
`;
const Heading2GroceryStoreWithParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const WeHavePrepared = styled.p`
  margin: 0;
`;
const WeHavePreparedContainer = styled.div`
  position: relative;
  font-size: 13px;
  letter-spacing: -0.32px;
  line-height: 19.51px;
  color: #6b7280;
  display: inline-block;
  max-width: 100%;
  z-index: 1;
`;
const FrameParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 9px;
  max-width: 100%;
  text-align: left;
  font-size: 30px;
  color: #111827;
`;
const ShopNow = styled.b`
  position: absolute;
  margin: 0 !important;
  bottom: -4px;
  left: 23px;
  font-size: 12px;
  letter-spacing: -0.24px;
  line-height: 42px;
  display: inline-block;
  font-family: Inter;
  color: #212529;
  text-align: center;
  min-width: 58px;
`;
const IklbIconMoveRight = styled.img`
  height: 14px;
  width: 19.6px;
  position: relative;
`;
const Link1 = styled.button`
  cursor: pointer;
  border: 1px solid #e5e7eb;
  padding: 10px 13px;
  background-color: #fff;
  width: 109px;
  border-radius: 999px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  position: relative;
  white-space: nowrap;
  z-index: 1;
  &:hover {
    background-color: #e6e6e6;
    border: 1px solid #cccfd1;
    box-sizing: border-box;
  }
`;
const DivsiteBannerRoot = styled.div`
  width: 100%;
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 36.9px 30px 33.9px;
  box-sizing: border-box;
  gap: 15px;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  font-size: 10px;
  color: #7c2d12;
  font-family: Inter;
`;

const InputRangeDiv = styled.div`
  display: flex;
  padding-top: 25px;
  padding-bottom: 10px;
`;

const InputRange1 = styled.input`
  margin-right: -0.2px;
  width: 100%;
  -webkit-appearance: none;
  height: 5px;
  background: black;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  border-top-left-radius: 60px;
  border-bottom-left-radius: 60px;
  &::-webkit-slider-thumb {
`;

const InputRange2 = styled.input`
  margin-left: -0.2px;
  width: 100%;
  -webkit-appearance: none;
  height: 5px;
  background: black;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  border-top-right-radius: 60px;
  border-bottom-right-radius: 60px;
  &::-webkit-slider-thumb {
`;

function BodyComponent() {
  return (
    <>
      <MainContainer>
        <LeftContainer>
          <WidgetPriceFilter>
            <WidgetParagraph>Price Filter</WidgetParagraph>
            <PriceFilterWidgetDiv>
              <MinInput placeholder="0" />
              <SubSymbol>-</SubSymbol>
              <MaxInput placeholder="30" />
            </PriceFilterWidgetDiv>
            <InputRangeDiv>
              <InputRange1 type="range" min={0} max={30} value={0} />
              <InputRange2 type="range" min={31} max={60} value={60} />
            </InputRangeDiv>
            <PriceResultDiv>
              <ResultPara>Price: $0 — $30</ResultPara>
              <FilterTitle>Filter</FilterTitle>
            </PriceResultDiv>
          </WidgetPriceFilter>
          <ProductCategory>
            <CategoryTitle>Product Category</CategoryTitle>
            <CheckListDiv>
              <CheckListInput type="checkbox" />
              <CheckListPara>Fruits & Vegetables</CheckListPara>
            </CheckListDiv>
            <CheckListDiv>
              <CheckListInput type="checkbox" />
              <CheckListPara>Baby & Pregnancy</CheckListPara>
            </CheckListDiv>
            <CheckListDiv>
              <CheckListInput type="checkbox" />
              <CheckListPara>Beverages</CheckListPara>
            </CheckListDiv>
            <CheckListDiv>
              <CheckListInput type="checkbox" />
              <CheckListPara>Meats & Seafood</CheckListPara>
            </CheckListDiv>
            <CheckListDiv>
              <CheckListInput type="checkbox" />
              <CheckListPara>Biscuits & Snacks</CheckListPara>
            </CheckListDiv>
          </ProductCategory>
          <FilterByColorDiv>
            <CategoryTitle>Filter by Color</CategoryTitle>
            <CheckListDiv>
              <ColorInput type="color" value="#81d742" />
              <CheckListPara>Green</CheckListPara>
            </CheckListDiv>
          </FilterByColorDiv>
          <ProductCategory>
            <CategoryTitle>Filter by Brands</CategoryTitle>
            <CheckListDiv>
              <CheckListInput type="checkbox" />
              <CheckListPara>Fresh</CheckListPara>
            </CheckListDiv>
          </ProductCategory>
          <ProductStatus>
            <CategoryTitle>Product Status</CategoryTitle>
            <CheckListDiv>
              <CheckListInput type="checkbox" />
              <CheckListPara>In Stock</CheckListPara>
            </CheckListDiv>
            <CheckListDiv>
              <CheckListInput type="checkbox" />
              <CheckListPara>On Sale</CheckListPara>
            </CheckListDiv>
          </ProductStatus>
        </LeftContainer>
        <RightContainer>
          <FiltersDiv>
            <SpanX1>x</SpanX1> Clear filters <SpanX2>x</SpanX2> Fruits &
            Vegetables
          </FiltersDiv>
          <DivsiteBannerRoot>
            <Banner33jpgIcon alt="" src={BannerImg} />
            <Heading>
              <OnlyThisWeek>Only This Week</OnlyThisWeek>
            </Heading>
            <FrameParent>
              <Heading2GroceryStoreWithParent>
                <Heading1>Grocery store with different</Heading1>
                <Heading2>treasures</Heading2>
              </Heading2GroceryStoreWithParent>
              <WeHavePreparedContainer>
                <WeHavePrepared>
                  We have prepared special discounts for you on grocery
                </WeHavePrepared>
                <WeHavePrepared>products...</WeHavePrepared>
              </WeHavePreparedContainer>
            </FrameParent>
            <Link1>
              <ShopNow>Shop Now</ShopNow>
              <IklbIconMoveRight alt="" src="/iklbiconmoveright.svg" />
            </Link1>
          </DivsiteBannerRoot>
          <AdjustFilters>
            <FilterPara>Showing all 16 results</FilterPara>
            <FilterSpan>Sort:</FilterSpan>
            <SortFilter>Sort by latest</SortFilter>
            <ShowSpan>Show:</ShowSpan>
            <ShowItems>20 Items</ShowItems>
            <ShowGridImg src={ShowGridIcon} alt="Grid" />
          </AdjustFilters>
          <ProductGridDiv>
            <ProductCard>
              <Link to="/product-details">
                <CardImg src={ProductImg} />
              </Link>
              <CardTitle>Large Bagged Oranges</CardTitle>
              <RatingImg src={Rated4Out5} />
              <CardPrice>
                <OfferPrice>$0.89</OfferPrice>
                <MrpPrice>$1.78</MrpPrice>
              </CardPrice>
              <StockDiv>
                <StockIcon src={InStock} />
                <StockTitle>IN STOCK</StockTitle>
              </StockDiv>
            </ProductCard>
            <ProductCard>
              <CardImg src={ProductImg} />
              <CardTitle>Large Bagged Oranges</CardTitle>
              <RatingImg src={Rated4Out5} />
              <CardPrice>
                <OfferPrice>$0.89</OfferPrice>
                <MrpPrice>$1.78</MrpPrice>
              </CardPrice>
              <StockDiv>
                <StockIcon src={InStock} />
                <StockTitle>IN STOCK</StockTitle>
              </StockDiv>
            </ProductCard>
            <ProductCard>
              <CardImg src={ProductImg} />
              <CardTitle>Large Bagged Oranges</CardTitle>
              <RatingImg src={Rated4Out5} />
              <CardPrice>
                <OfferPrice>$0.89</OfferPrice>
                <MrpPrice>$1.78</MrpPrice>
              </CardPrice>
              <StockDiv>
                <StockIcon src={InStock} />
                <StockTitle>IN STOCK</StockTitle>
              </StockDiv>
            </ProductCard>
            <ProductCard>
              <CardImg src={ProductImg} />
              <CardTitle>Large Bagged Oranges</CardTitle>
              <RatingImg src={Rated4Out5} />
              <CardPrice>
                <OfferPrice>$0.89</OfferPrice>
                <MrpPrice>$1.78</MrpPrice>
              </CardPrice>
              <StockDiv>
                <StockIcon src={InStock} />
                <StockTitle>IN STOCK</StockTitle>
              </StockDiv>
            </ProductCard>
            <ProductCard>
              <CardImg src={ProductImg} />
              <CardTitle>Large Bagged Oranges</CardTitle>
              <RatingImg src={Rated4Out5} />
              <CardPrice>
                <OfferPrice>$0.89</OfferPrice>
                <MrpPrice>$1.78</MrpPrice>
              </CardPrice>
              <StockDiv>
                <StockIcon src={InStock} />
                <StockTitle>IN STOCK</StockTitle>
              </StockDiv>
            </ProductCard>
            <ProductCard>
              <CardImg src={ProductImg} />
              <CardTitle>Large Bagged Oranges</CardTitle>
              <RatingImg src={Rated4Out5} />
              <CardPrice>
                <OfferPrice>$0.89</OfferPrice>
                <MrpPrice>$1.78</MrpPrice>
              </CardPrice>
              <StockDiv>
                <StockIcon src={InStock} />
                <StockTitle>IN STOCK</StockTitle>
              </StockDiv>
            </ProductCard>
            <ProductCard>
              <CardImg src={ProductImg} />
              <CardTitle>Large Bagged Oranges</CardTitle>
              <RatingImg src={Rated4Out5} />
              <CardPrice>
                <OfferPrice>$0.89</OfferPrice>
                <MrpPrice>$1.78</MrpPrice>
              </CardPrice>
              <StockDiv>
                <StockIcon src={InStock} />
                <StockTitle>IN STOCK</StockTitle>
              </StockDiv>
            </ProductCard>
            <ProductCard>
              <CardImg src={ProductImg} />
              <CardTitle>Large Bagged Oranges</CardTitle>
              <RatingImg src={Rated4Out5} />
              <CardPrice>
                <OfferPrice>$0.89</OfferPrice>
                <MrpPrice>$1.78</MrpPrice>
              </CardPrice>
              <StockDiv>
                <StockIcon src={InStock} />
                <StockTitle>IN STOCK</StockTitle>
              </StockDiv>
            </ProductCard>
            <ProductCard>
              <CardImg src={ProductImg} />
              <CardTitle>Large Bagged Oranges</CardTitle>
              <RatingImg src={Rated4Out5} />
              <CardPrice>
                <OfferPrice>$0.89</OfferPrice>
                <MrpPrice>$1.78</MrpPrice>
              </CardPrice>
              <StockDiv>
                <StockIcon src={InStock} />
                <StockTitle>IN STOCK</StockTitle>
              </StockDiv>
            </ProductCard>
            <ProductCard>
              <CardImg src={ProductImg} />
              <CardTitle>Large Bagged Oranges</CardTitle>
              <RatingImg src={Rated4Out5} />
              <CardPrice>
                <OfferPrice>$0.89</OfferPrice>
                <MrpPrice>$1.78</MrpPrice>
              </CardPrice>
              <StockDiv>
                <StockIcon src={InStock} />
                <StockTitle>IN STOCK</StockTitle>
              </StockDiv>
            </ProductCard>
          </ProductGridDiv>
        </RightContainer>
      </MainContainer>
    </>
  );
}

export default BodyComponent;