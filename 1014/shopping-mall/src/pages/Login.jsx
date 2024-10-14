import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({ authentication, setAuthentication }) => {
  const navigate = useNavigate();
  const loginUser = (e) => {
    e.preventDefault();
    setAuthentication(true);
    navigate(-1);
  };

  return (
    <Container className="login-area">
      <Form onSubmit={loginUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button variant="outline-dark" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;

//로그인을 했다면 로그아웃이 떠야하고 로그인이 되어있는 상태가 아니면 로그인이 떠야함.
//로그인 여부를 boolean으로 가져와야겠지 -> state
