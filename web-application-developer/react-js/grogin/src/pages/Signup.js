import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

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
  padding-right: 32px;
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
      <Paragraph>Grogin</Paragraph>
      <LoginForm onSubmit={handleSubmit}>
        <Title>Signup</Title>
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
