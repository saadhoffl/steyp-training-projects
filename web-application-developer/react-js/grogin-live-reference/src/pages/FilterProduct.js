import DeliveryDiscountWrapper from "../components/DeliveryDiscountWrapper";
import BreadcrumbContainer from "../components/BreadcrumbContainer";
import styled from "styled-components";
import Footer from "../components/Footer";

const BreadcrumbWrapper = styled.section`
  width: 1876.5px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  flex-shrink: 0;
`;
const GlobalNotificationWrapper = styled.main`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xl);
  flex-shrink: 0;
  max-width: 100%;
`;
const FilterProductRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 60.1px;
  line-height: normal;
  letter-spacing: normal;
  @media screen and (max-width: 1125px) {
    gap: var(--gap-11xl);
  }
  @media screen and (max-width: 800px) {
    gap: var(--gap-mini);
  }
`;

const FilterProduct = () => {
  return (
    <FilterProductRoot>
      <GlobalNotificationWrapper>
        <DeliveryDiscountWrapper />
        <BreadcrumbWrapper>
          <BreadcrumbContainer />
        </BreadcrumbWrapper>
      </GlobalNotificationWrapper>
      <Footer />
    </FilterProductRoot>
  );
};

export default FilterProduct;
