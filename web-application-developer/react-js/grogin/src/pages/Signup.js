import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../assests/link--groginlogodarkpng@2x.png";

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgb(99, 76, 159, 0.9);
`;

const LoginForm = styled.form`
  width: 400px;
  background: #a8a2c5;
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
  background: rgb(241, 245, 245, 0.6);
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

const LogoImg = styled.img`
  width: 140px;
  margin-bottom: 10px;
  margin-top: 10px;
  height: 35px;
`;

const LoginPage = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/v1/auth/create/", {
        username,
        password,
        email,
      })
      .then((res) => {
        let data = res.data;
        localStorage.setItem("user_data", JSON.stringify(data));
        navigate("/");
      })
      .catch((err) => {
        if (err.response.status === 401) {
          console.log(err.response.data);
        }
      });
  };

  return (
    <Container>
      <LoginForm onSubmit={handleSubmit}>
        <LogoImg src={Logo} alt="Grogin App Logo" />
        <Title>Sign up to shop now!</Title>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          value={email}
          placeholder="email"
        />
        <Input
          onChange={(e) => setUsername(e.target.value)}
          type="username"
          value={username}
          placeholder="username"
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          value={password}
          placeholder="Password"
        />
        <Button>Signup</Button>
      </LoginForm>
      <StyledLink to="/signin">Already have an account?</StyledLink>
    </Container>
  );
};

export default LoginPage;
