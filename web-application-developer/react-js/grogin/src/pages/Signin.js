import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgb(99, 76, 159);
`;

const LoginForm = styled.form`
  width: 400px;
  background: #a8a2c5;
  padding: 20px;
  padding-right: 50px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    width: 300px;
  }
  @media (max-width: 480px) {
    width: 200px;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-left: 27px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 25px;
  border-radius: 5px;
  border: 1px solid #717177;
`;

const Button = styled.button`
  width: 106%;
  padding: 10px;
  background: #3232e8;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  margin-top: 20px;
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Paragraph = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 20px;
`;

const LoginPage = () => {
  return (
    <Container>
      <Paragraph>Grogin</Paragraph>
      <LoginForm>
        <Title>Signin</Title>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Button>Signin</Button>
      </LoginForm>
      <StyledLink to="/signup">Don't have an account?</StyledLink>
    </Container>
  );
};

export default LoginPage;
