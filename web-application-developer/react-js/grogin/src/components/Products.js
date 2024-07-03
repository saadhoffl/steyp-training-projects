import styled from "styled-components";
import PropTypes from "prop-types";
import ProductImg from "../assests/link--123500x500jpg@2x.png";
import Rated4Out5 from "../assests/img--rated-400-out-of-5.svg";
import InStock from "../assests/link--add-to-cart-yellow-potatoes-whole-fresh-5lb-bag.svg";
import { Link } from "react-router-dom";

const ProductGridDiv = styled.div`
  max-width: 1530px;
  margin-top: 20px;
`;

const CardImg = styled.img`
  width: 234px;
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

const ProductCard = styled.div`
  margin: 3px;
  border: 0.5px solid #ccc;
  border-radius: 9px;
  display: inline-block;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const Products = ({ className = "" }) => {
  return (
    <ProductGridDiv>
      <Title>Related products</Title>
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
    </ProductGridDiv>
  );
};

Products.propTypes = {
  className: PropTypes.string,
};

export default Products;
