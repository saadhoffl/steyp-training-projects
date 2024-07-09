import styled from "styled-components";
import PropTypes from "prop-types";

const ImgRated367OutOf = styled.img`
  height: 11px;
  width: 66.9px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const PriceSeparators = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 12px;
  display: inline-block;
  min-width: 8px;
  flex-shrink: 0;
`;
const PriceDetails = styled.div`
  height: 12.5px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 8px;
`;
const Ins = styled.b`
  position: relative;
  letter-spacing: -0.44px;
  line-height: 22px;
  display: inline-block;
  min-width: 62.5px;
  white-space: nowrap;
  @media screen and (max-width: 450px) {
    font-size: 18px;
    line-height: 18px;
  }
`;
const Discount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px 3px;
`;
const Del = styled.div`
  position: relative;
  font-size: 16.1px;
  text-decoration: line-through;
  letter-spacing: -0.44px;
  line-height: 19px;
  font-weight: 500;
  color: #111827;
  display: inline-block;
  min-width: 46.1px;
  white-space: nowrap;
`;
const DiscountPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px 0px 5.5px;
  gap: 6.4px;
  font-size: 22px;
  color: #dc2626;
  font-family: Barlow;
`;
const LinkAddToCartLargeGar = styled.img`
  height: 34px;
  width: 36px;
  position: relative;
  border-radius: 8px;
  flex-shrink: 0;
`;
const InStock = styled.b`
  position: relative;
  letter-spacing: -0.32px;
  text-transform: uppercase;
  display: inline-block;
  min-width: 50.2px;
  flex-shrink: 0;
`;
const StockStatus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px 8px;
`;
const AddToCart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 16px;
  font-size: 11px;
  color: #16a34a;
`;
const ProductPriceRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 13.5px;
  flex-shrink: 0;
  text-align: left;
  font-size: 12px;
  color: #6b7280;
  font-family: Inter;
`;

const ProductPrice = ({
  className = "",
  imgRated367OutOf5,
  ins,
  del,
  linkAddToCartLargeGardenS,
}) => {
  return (
    <ProductPriceRoot className={className}>
      <PriceDetails>
        <ImgRated367OutOf alt="" src={imgRated367OutOf5} />
        <PriceSeparators>3</PriceSeparators>
      </PriceDetails>
      <DiscountPrice>
        <Discount>
          <Ins>{ins}</Ins>
        </Discount>
        <Del>{del}</Del>
      </DiscountPrice>
      <AddToCart>
        <LinkAddToCartLargeGar
          loading="lazy"
          alt=""
          src={linkAddToCartLargeGardenS}
        />
        <StockStatus>
          <InStock>In Stock</InStock>
        </StockStatus>
      </AddToCart>
    </ProductPriceRoot>
  );
};

ProductPrice.propTypes = {
  className: PropTypes.string,
  imgRated367OutOf5: PropTypes.string,
  ins: PropTypes.string,
  del: PropTypes.string,
  linkAddToCartLargeGardenS: PropTypes.string,
};

export default ProductPrice;
