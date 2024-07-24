import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../assests/link--groginlogodarkpng@2x.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  opacity: 0.9;
  background: rgb(25, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(166, 0, 255, 0.8603816526610644) 0%,
    rgba(9, 32, 121, 0.6558998599439776) 35%,
    rgba(166, 0, 255, 0.7847514005602241) 97%
  );
`;

const LoginForm = styled.form`
  width: 400px;
  text-align: center;
  background-color: rgb(228, 230, 230, 0.4);
  padding: 20px;
  padding-right: 50px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  @media (max-width: 768px) {
    width: 300px;
  }
  @media (max-width: 480px) {
    width: 200px;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 50px;
  font-size: 18px;
  color: #fff;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 25px;
  background: rgb(241, 245, 245, 0.8);
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
  @media (max-width: 480px) {
    width: 220px;
  }
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

const ErrorMsg = styled.p`
  color: red;
  text-align: center;
`;

const LogoImg = styled.img`
  width: 140px;
  margin-bottom: 10px;
  margin-top: 10px;
  height: 35px;
`;

const LoginPage = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const navigate = useNavigate();

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

  const handleSubmit = (e) => {
    setError("");
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/v1/auth/token/", {
        username,
        password,
      })
      .then((res) => {
        let data = res.data;
        localStorage.setItem("user_data", JSON.stringify(data));
        navigate("/");
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setError("Invalid username or password");
        }
      });
  };

  return (
    <Container>
      <LoginForm onSubmit={handleSubmit}>
        <LogoImg src={Logo} alt="Grogin App Logo" />
        <Title>Sign in to dashboard</Title>
        <Input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text"
          placeholder="Username"
          onKeyDown={handleKeyDown}
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
          id="password"
          onKeyDown={handleKeyDown}
        />
        <Button>Signin</Button>
        {error && <ErrorMsg>{error}</ErrorMsg>}
      </LoginForm>
      <StyledLink to="/signup">Don't have an account?</StyledLink>
    </Container>
  );
};

export default LoginPage;
