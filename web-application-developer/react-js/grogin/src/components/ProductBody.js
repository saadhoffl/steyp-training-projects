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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 20px 20.4px;
  box-sizing: border-box;
  max-width: 100%;
  @media screen and (max-width: 1200px) {
    box-sizing: border-box;
    height: auto;
  }
  @media screen and (max-width: 750px) {
    gap: 27px;
    box-sizing: border-box;
    height: auto;
  }
  @media screen and (max-width: 447px) {
    height: auto;
    padding: 0px 10px 20.4px;
  }
  @media screen and (max-width: 368px) {
    margin-right: 22px;
  }
  @media screen and (max-width: 345px) {
    margin-right: 0px;
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
  @media screen and (max-width: 447px) {
    gap: 15px;
    padding: 20px 20px 0px;
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
