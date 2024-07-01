import React from "react";
import styled from "styled-components";
import ShowGridIcon from "../assests/divproductviewsbuttons.svg";

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
  border-radius: 7px;
`;

const RightContainer = styled.p``;

const ProductGrid = styled.div``;

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
          <AdjustFilters>
            <FilterPara>Showing all 16 results</FilterPara>
            <FilterSpan>Sort:</FilterSpan>
            <SortFilter>Sort by latest</SortFilter>
            <ShowSpan>Show:</ShowSpan>
            <ShowItems>20 Items</ShowItems>
            <ShowGridImg src={ShowGridIcon} alt="Grid" />
          </AdjustFilters>
          <ProductGrid></ProductGrid>
        </RightContainer>
      </MainContainer>
    </>
  );
}

export default BodyComponent;
