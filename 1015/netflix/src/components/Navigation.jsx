import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Logo = styled.img`
  width: 100px;
`;

const BtnItem = styled.span`
  color: #fff;
  transition: all 0.3s;
  &:hover {
    color: crimson;
  }
`;

styled(Navbar)

const Navigation = () => {
  return (
    <Navbar sticky="top" bg="dark" variant="dark" style={{ padding: "10px" }}>
      <Container fluid>
        <Navbar.Brand href="/">
          <Logo
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/440px-Netflix_2015_logo.svg.png"
            alt="netflix-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">
              <BtnItem>Home</BtnItem>
            </Nav.Link>
            <Nav.Link href="/movie">
              <BtnItem>Movie</BtnItem>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
