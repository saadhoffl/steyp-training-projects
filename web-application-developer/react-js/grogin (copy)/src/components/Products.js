import styled from "styled-components";
import PropTypes from "prop-types";
import Rated4Out5 from "../assests/img--rated-400-out-of-5.svg";
import InStock from "../assests/link--add-to-cart-yellow-potatoes-whole-fresh-5lb-bag.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductGridDiv = styled.div`
  max-width: 1330px;
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
  height: 40px;
  margin: 0;
  font-size: 14px;
  width: 200px;
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
      <Link to={`/product-details/${product.id}`}>
        <CardImg src={"http://localhost:8000/" + product.product_img} />
      </Link>
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
    </ProductCard>
  ));
};

const Products = ({ productDetail }) => {
  return (
    <ProductGridDiv>
      <Title>Related Products</Title>
      {RenderProducts({ productDetail })}
    </ProductGridDiv>
  );
};

Products.propTypes = {
  className: PropTypes.string,
};

export default Products;
