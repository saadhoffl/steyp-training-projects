import styled from "styled-components";
import PropTypes from "prop-types";
import Rated4Out5 from "../assests/img--rated-400-out-of-5.svg";
import InStock from "../assests/link--add-to-cart-yellow-potatoes-whole-fresh-5lb-bag.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductGridDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 40px auto 50px;
  @media (max-width: 370px) {
    padding-left: 7px;
  }
`;

const CardImg = styled.img`
  width: 100%;
  display: block;
`;

const CardTitle = styled.p`
  padding-left: 15px;
  padding-right: 15px;
  height: 52px;
  margin: 0;
  font-size: 14px;
  width: auto;
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
  width: 19.59%;
  height: 100%;
  margin-right: 5px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  &:nth-child(5n) {
    margin-right: 0;
  }
  @media (max-width: 1440px) {
    width: 19.5%;
  }
  @media (max-width: 1338px) {
    width: 19.4%;
  }
  @media (max-width: 1149px) {
    width: 24.2%;
    &:nth-child(4n) {
      margin-right: 0;
    }
  }
  @media (max-width: 1013px) {
    width: 24%;
    &:nth-child(4n) {
      margin-right: 0;
    }
  }
  @media (max-width: 799px) {
    width: 32.2%;
    &:nth-child(3n) {
      margin-right: 0px;
    }
    &:nth-child(4n) {
      margin-right: 5px;
    }
  }
  @media (max-width: 610px) {
    width: 48.4%;
    &:nth-child(2n) {
      margin-right: 0px;
    }
    &:nth-child(3n) {
      margin-right: 5px;
    }
  }
  @media (max-width: 370px) {
    width: 48.3%;
    &:nth-child(2n) {
      margin-right: 0px;
    }
    &:nth-child(3n) {
      margin-right: 5px;
    }
  }
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 70px;
`;

const ImgDiv = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  clickable: true;
  &:active {
    transform: scale(0.9);
  }
`;

const CustomLinkStyle = styled(Link)`
  text-decoration: none;
  color: #212529;
  font-size: 13px;
`;

const RenderProducts = ({ productDetail }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/api/v1/products/?qtitle=${productDetail.category}`
      )
      .then((res) => {
        console.log(res.data.data);
        setProducts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productDetail]);

  return products.map((product) => (
    <ProductCard key={product.id}>
      <CustomLinkStyle to={`/product-details/${product.id}`}>
        <ImgDiv>
          <CardImg src={"http://localhost:8000/" + product.product_img} />
        </ImgDiv>

        <CardTitle>{product.product_title}</CardTitle>
        <RatingImg src={Rated4Out5} />
        <CardPrice>
          <OfferPrice>{"$" + product.product_price}</OfferPrice>
          <MrpPrice>$1.78</MrpPrice>
        </CardPrice>
        <StockDiv>
          <StockIcon src={InStock} />
          <StockTitle>IN STOCK</StockTitle>
        </StockDiv>
      </CustomLinkStyle>
    </ProductCard>
  ));
};

const Products = ({ productDetail }) => {
  return (
    <>
      <Title>Related Products</Title>
      <ProductGridDiv>{RenderProducts({ productDetail })}</ProductGridDiv>
    </>
  );
};

Products.propTypes = {
  className: PropTypes.string,
};

export default Products;
