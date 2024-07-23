import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { BASE_URL } from "../../axiosConfig";
import axios from "axios";
import { UserContext } from "../../App";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const { updateUserData } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    setMessage("");
    e.preventDefault();
    axios
      .post(`${BASE_URL}auth/signin/`, {
        username,
        password,
      })
      .then((response) => {
        let data = response.data;
        localStorage.setItem("token", JSON.stringify(data));
        updateUserData({ type: "LOGIN", payload: data });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 401) {
          setMessage(error.response.data.detail);
        }
      });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (e.target.type === "text") {
        // Move focus to password input
        document.getElementById("password").focus();
      } else if (e.target.type === "password") {
        // Submit the form
        handleSubmit(e);
      }
    }
  };

  return (
    <Container>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LeftContainer>
        <HeaderContainer>
          <LogoImg
            src={require("../../assets/images/logo.png")}
            alt="Website Logo"
          />
        </HeaderContainer>
        <MainHeading>Travel to the best beautiful places</MainHeading>
      </LeftContainer>
      <RightContainer>
        <LoginContainer>
          <LoginHeading>Login to your account</LoginHeading>
          <LoginInfo>Enter your email and password to login</LoginInfo>
          <Form onSubmit={handleSubmit}>
            <InputContainer>
              <Input
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                type="text"
                placeholder="Username"
                onKeyDown={handleKeyDown}
              />
            </InputContainer>
            <InputContainer>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
                id="password"
                onKeyDown={handleKeyDown}
              />
            </InputContainer>
            <SignupButton to="/auth/create/">
              Don't have an account?
            </SignupButton>
            {message && <ErrorMessage>{message}</ErrorMessage>}
            <ButtonContainer>
              <SubmitButton type="submit">Login</SubmitButton>
            </ButtonContainer>
          </Form>
        </LoginContainer>
      </RightContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 95vh;
  display: flex;
  padding: 15px;
`;

const LeftContainer = styled.div`
  width: 55%;
  padding: 10px 70px 70px;
`;

const RightContainer = styled.div`
  background-color: #efefef;
  width: 45%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-radius: 20px;
  padding: 0 70px 60px;
`;

const HeaderContainer = styled.div``;

const LogoImg = styled.img`
  width: 200px;
  display: block;
`;

const MainHeading = styled.h1`
  font-size: 55px;
  font-weight: bold;
  color: #0c3a4a;
  margin-top: 180px;
  line-height: 1.2em;
`;

const LoginContainer = styled.div`
  padding-bottom: 50px;
  border-bottom: 1px solid #fff;
  width: 100%;
`;

const LoginHeading = styled.h1`
  font-size: 35px;
  color: #0c3a4a;
  font-weight: bold;
  margin-bottom: 15px;
`;

const LoginInfo = styled.p`
  font-size: 18px;
  margin-bottom: 35px;
`;

const Form = styled.form`
  width: 100%;
  display: block;
`;

const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 15px;
  position: relative;
`;

const Input = styled.input`
  padding: 20px 25px 20px 30px;
  border: 1px solid #9c9c9c;
  width: 100%;
  display: block;
  border-radius: 10px;
  font-size: 18px;
  box-sizing: border-box;
  outline: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SubmitButton = styled.button`
  background-color: #046bf6;
  border: 0;
  outline: 0;
  color: white;
  padding: 15px 40px;
  border-radius: 8px;
  font-size: 19px;
  cursor: pointer;
`;

const SignupButton = styled(Link)`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 45px;
  color: #046bf6;
  font-size: 17px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 17px;
  margin-bottom: 25px;
  text-align: center;
`;

export default Login;
