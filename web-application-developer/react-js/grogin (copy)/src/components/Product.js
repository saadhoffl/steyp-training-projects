import styled from "styled-components";
import PropTypes from "prop-types";

const ProductBadges = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  text-transform: uppercase;
  font-weight: 800;
  display: inline-block;
  min-width: 20px;
`;
const Spanbadge = styled.div`
  position: absolute;
  top: 4px;
  left: 0px;
  border-radius: 14px 40px 40px 14px;
  background-color: #dc2626;
  width: 37.5px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 6px 8px;
  box-sizing: border-box;
  z-index: 1;
`;
const Link1104500x500jpg = styled.img`
  position: absolute;
  height: calc(100% - 5px);
  top: 5px;
  bottom: 0px;
  left: 0px;
  max-height: 100%;
  width: 176.7px;
  overflow: hidden;
  object-fit: cover;
`;
const LinkIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 149.7px;
  border-radius: 16px;
  width: 32px;
  height: 32px;
  z-index: 1;
`;
const Badge = styled.div`
  position: absolute;
  height: 100%;
  top: 0px;
  bottom: 0px;
  left: 10px;
  width: 181.7px;
`;
const ProductRoot = styled.div`
  width: 191.7px;
  height: 181.7px;
  position: relative;
  text-align: center;
  font-size: 10px;
  color: #fef2f2;
  font-family: Inter;
`;

const Product = ({ className = "", productBadges, link1104500x500jpg }) => {
  return (
    <ProductRoot className={className}>
      <Spanbadge>
        <ProductBadges>{productBadges}</ProductBadges>
      </Spanbadge>
      <Badge>
        <Link1104500x500jpg alt="" src={link1104500x500jpg} />
        <LinkIcon loading="lazy" alt="" src="/link-7.svg" />
      </Badge>
    </ProductRoot>
  );
};

Product.propTypes = {
  className: PropTypes.string,
  productBadges: PropTypes.string,
  link1104500x500jpg: PropTypes.string,
};

export default Product;
