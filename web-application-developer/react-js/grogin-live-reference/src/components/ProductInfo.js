import styled from "styled-components";
import PropTypes from "prop-types";

const YellowPotatoesWhole = styled.p`
  margin: 0;
`;
const LinkYellowContainer = styled.div`
  position: relative;
  letter-spacing: -0.26px;
  line-height: 16.9px;
  font-weight: 500;
  flex-shrink: 0;
`;
const ImgRated433OutOf = styled.img`
  height: 11px;
  width: 66.9px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const BadgeContainer = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 12px;
  display: inline-block;
  min-width: 8px;
`;
const RatingAndBadge = styled.div`
  height: 12.5px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  flex-shrink: 0;
  font-size: var(--font-size-xs);
  color: var(--color-slategray);
`;
const ProductName = styled.div`
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
  min-width: 54px;
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
const Price = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-6xs-3);
  font-size: var(--font-size-3xl);
  color: var(--color-crimson);
  font-family: var(--font-barlow);
`;
const LinkAddToCartYellowPo = styled.img`
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
const Stock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-5xs);
`;
const AddToCart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-base);
  font-size: var(--font-size-2xs);
  color: var(--color-forestgreen);
`;
const ProductInfoRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-sm-3);
  text-align: left;
  font-size: var(--font-size-smi);
  color: var(--color-gray-500);
  font-family: var(--font-inter);
`;

const ProductInfo = ({
  className = "",
  yellowPotatoesWhole,
  fresh5lbBag,
  imgRated433OutOf5,
  ins,
  del,
  linkAddToCartYellowPotato,
}) => {
  return (
    <ProductInfoRoot className={className}>
      <ProductName>
        <LinkYellowContainer>
          <YellowPotatoesWhole>{yellowPotatoesWhole}</YellowPotatoesWhole>
          <YellowPotatoesWhole>{fresh5lbBag}</YellowPotatoesWhole>
        </LinkYellowContainer>
        <RatingAndBadge>
          <ImgRated433OutOf alt="" src={imgRated433OutOf5} />
          <BadgeContainer>3</BadgeContainer>
        </RatingAndBadge>
      </ProductName>
      <Price>
        <PriceInfo>
          <Ins>{ins}</Ins>
        </PriceInfo>
        <Del>{del}</Del>
      </Price>
      <AddToCart>
        <LinkAddToCartYellowPo
          loading="lazy"
          alt=""
          src={linkAddToCartYellowPotato}
        />
        <Stock>
          <InStock>In Stock</InStock>
        </Stock>
      </AddToCart>
    </ProductInfoRoot>
  );
};

ProductInfo.propTypes = {
  className: PropTypes.string,
  yellowPotatoesWhole: PropTypes.string,
  fresh5lbBag: PropTypes.string,
  imgRated433OutOf5: PropTypes.string,
  ins: PropTypes.string,
  del: PropTypes.string,
  linkAddToCartYellowPotato: PropTypes.string,
};

export default ProductInfo;
