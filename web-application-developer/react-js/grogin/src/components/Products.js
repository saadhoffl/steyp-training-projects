import styled from "styled-components";
import PropTypes from "prop-types";
import Rated4Out5 from "../assests/img--rated-400-out-of-5.svg";
import InStock from "../assests/link--add-to-cart-yellow-potatoes-whole-fresh-5lb-bag.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductGridDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-gap: 1px;
  margin-right: 0px;
  @media (max-width: 1400px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    max-width: 1410px;
  }
  @media (max-width: 1300px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    max-width: 1210px;
  }
  @media (max-width: 1070px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    max-width: 910px;
  }
  @media (max-width: 975px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    max-width: 910px;
  }
  @media (max-width: 935px) {
    grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
    max-width: 798px;
  }
  @media (max-width: 837px) {
    grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
    max-width: 650px;
  }
  @media (max-width: 667px) {
    grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
    max-width: 520px;
  }
  @media (max-width: 587px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    max-width: 450px;
  }
  @media (max-width: 410px) {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    max-width: 370px;
    margin-right: 0px;
  }
  @media (max-width: 377px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    max-width: 350px;
    margin-right: 0px;
  }
  @media (max-width: 376px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    max-width: 340px;
    width: 324px;
    margin-right: 0px;
  }
  @media (max-width: 360px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    max-width: 340px;
    width: 314px;
    margin-right: 0px;
  }
  @media (max-width: 347px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    max-width: 300px;
    width: 258px;
  }
`;

const CardImg = styled.img`
  width: 100%;
  height: 200px;
  @media (max-width: 376px) {
    height: 300px;
  }
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
  margin: 2px;
  border: 0.5px solid #ccc;
  border-radius: 9px;
  display: inline-block;
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
