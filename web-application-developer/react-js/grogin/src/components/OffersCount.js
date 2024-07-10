import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: rgb(99, 76, 159);
  @media (min-width: 767px) {
    padding: 0px 50px;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
  }
  @media (max-width: 447px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
  }
`;

const SecondTitle = styled.div`
  font-size: 12px;
  color: #fff;
  text-align: center;
  margin-right: 20px;
`;

const Title = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  margin-right: 70px;
  @media (max-width: 768px) {
    margin-right: 10px;
  }
  @media (max-width: 425px) {
  }
`;

const TimerContainer = styled.div`
  display: flex;
`;

const TimerItem = styled.div`
  display: flex;
`;

const TimerValue = styled.p`
  font-size: 17px;
  margin-right: 5px;
  font-weight: bold;
  color: #fff;
`;

const TimerLabel = styled.p`
  font-size: 12px;
  margin-right: 5px;
  margin-top: 20px;
  color: #fff;
`;

const DiscountTimer = () => {
  return (
    <Container>
      <Title>
        FREE delivery & 40% Discount for next 3 orders! Place your 1st order in.
      </Title>
      <SecondTitle>Until the end of the sale:</SecondTitle>
      <TimerContainer>
        <TimerItem>
          <TimerValue>47</TimerValue>
          <TimerLabel>days</TimerLabel>
        </TimerItem>
        <TimerItem>
          <TimerValue>06</TimerValue>
          <TimerLabel>hours</TimerLabel>
        </TimerItem>
        <TimerItem>
          <TimerValue>52</TimerValue>
          <TimerLabel>minutes</TimerLabel>
        </TimerItem>
        <TimerItem>
          <TimerValue>13</TimerValue>
          <TimerLabel>sec.</TimerLabel>
        </TimerItem>
      </TimerContainer>
    </Container>
  );
};

export default DiscountTimer;
