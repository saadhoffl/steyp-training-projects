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
const DiscountPrices = styled.div`
  height: 12.5px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const Ins = styled.b`
  position: relative;
  letter-spacing: -0.44px;
  line-height: 22px;
  display: inline-block;
  min-width: 62.5px;
  white-space: nowrap;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
    line-height: 18px;
  }
`;
const PriceComponents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-10xs);
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
  min-width: 46.1px;
  white-space: nowrap;
`;
const OriginalPrices = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-7xs-5);
  gap: var(--gap-6xs-4);
  font-size: var(--font-size-3xl);
  color: var(--color-crimson);
  font-family: var(--font-barlow);
`;
const LinkAddToCartLargeGar = styled.img`
  height: 34px;
  width: 36px;
  position: relative;
  border-radius: var(--br-5xs);
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
const InStockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-5xs);
`;
const LinkAddToCartLargeGarParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-base);
  font-size: var(--font-size-2xs);
  color: var(--color-forestgreen);
`;
const DiscountPricesParentRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-sm-5);
  flex-shrink: 0;
  text-align: left;
  font-size: var(--font-size-xs);
  color: var(--color-slategray);
  font-family: var(--font-inter);
`;

const FrameComponent2 = ({
  className = "",
  imgRated367OutOf5,
  ins,
  del,
  linkAddToCartLargeGardenS,
}) => {
  return (
    <DiscountPricesParentRoot className={className}>
      <DiscountPrices>
        <ImgRated367OutOf alt="" src={imgRated367OutOf5} />
        <PriceSeparators>3</PriceSeparators>
      </DiscountPrices>
      <OriginalPrices>
        <PriceComponents>
          <Ins>{ins}</Ins>
        </PriceComponents>
        <Del>{del}</Del>
      </OriginalPrices>
      <LinkAddToCartLargeGarParent>
        <LinkAddToCartLargeGar
          loading="lazy"
          alt=""
          src={linkAddToCartLargeGardenS}
        />
        <InStockWrapper>
          <InStock>In Stock</InStock>
        </InStockWrapper>
      </LinkAddToCartLargeGarParent>
    </DiscountPricesParentRoot>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  imgRated367OutOf5: PropTypes.string,
  ins: PropTypes.string,
  del: PropTypes.string,
  linkAddToCartLargeGardenS: PropTypes.string,
};

export default FrameComponent2;
