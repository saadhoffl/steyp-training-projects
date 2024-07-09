import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgb(107, 114, 128);
  font-size: 13px;
  padding: 10px 50px;
  border-bottom: 1px solid rgb(229, 231, 235);
  @media (max-width: 767px) {
    display: none;
  }
`;

const LeftDiv = styled.div`
  display: flex;
`;

const DeliveryTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DeliveryTimeBold = styled.b`
  color: rgb(234, 88, 12);
  margin-left: 5px;
`;

const RightDiv = styled.div`
  display: flex;
  align-items: center;
`;

const RightDivInside = styled.div`
  display: flex;
  align-items: center;
`;

const Paragraph = styled.p`
  margin-right: 20px;
`;

const PriceUsd = styled.p`
  margin-right: 20px;
`;

const Image = styled.img`
  /* Add your image styles here */
`;

const SecondaryMenu = () => {
  return (
    <Container>
      <LeftDiv className="left">
        <Paragraph>About Us</Paragraph>
        <Paragraph>My account</Paragraph>
        <Paragraph>Wishlist</Paragraph>
        <DeliveryTime>
          <span>We deliver to you every day from </span>
          <DeliveryTimeBold>7:00 to 23:00</DeliveryTimeBold>
        </DeliveryTime>
      </LeftDiv>
      <RightDiv>
        <RightDivInside>
          <Paragraph>English</Paragraph>
          <div>
            <Image alt="" src="/nav--list--item--link-2.svg" />
          </div>
        </RightDivInside>
        <PriceUsd>USD</PriceUsd>
        <Paragraph>Order Tracking</Paragraph>
      </RightDiv>
    </Container>
  );
};

export default SecondaryMenu;
