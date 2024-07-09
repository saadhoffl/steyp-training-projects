import Layout from "../components/ProductDetails";
import Gallery from "../components/Gallery";
import styled from "styled-components";
import Content from "../components/DescriptionReview";
import Products from "../components/Products";
import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Structure1 = styled.section`
  width: 1360px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 5.2px;
  max-width: 100%;
`;
const Details1 = styled.section`
  width: 1360px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 20px 20.4px;
  box-sizing: border-box;
  gap: 54px;
  max-width: 100%;
  @media screen and (max-width: 1200px) {
    padding-bottom: 871px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 750px) {
    gap: 27px;
    padding-bottom: 872px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    height: auto;
  }
`;
const MainRoot = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 50px 0px;
  box-sizing: border-box;
  gap: 122px;
  line-height: normal;
  letter-spacing: normal;
  @media screen and (max-width: 1200px) {
    gap: 61px;
  }
  @media screen and (max-width: 750px) {
    gap: 30px;
  }
  @media screen and (max-width: 450px) {
    gap: 15px;
  }
`;

const ProductBody = () => {
  const [productDetail, setProductDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/products/view/${id}`)
      .then((response) => {
        setProductDetail(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <MainRoot>
      <Structure1>
        <Layout productDetail={productDetail} />
        <Gallery productDetail={productDetail} />
      </Structure1>
      <Details1>
        <Content />
        <Products productDetail={productDetail} />
      </Details1>
    </MainRoot>
  );
};

export default ProductBody;
