import React from "react";
import styled from "styled-components";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgb(99, 76, 159);
`;

const Heading = styled.h1`
  font-size: 48px;
  color: #fff;
  margin-bottom: 20px;
`;

function Error404() {
  return (
    <Background>
      <Heading>Page Not Found</Heading>
    </Background>
  );
}

export default Error404;
