import React from "react";

import { Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 20px 0;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  object-position: 2px center;
`;

const Name = styled.div``;
const Number = styled.div``;

const ContactItem = ({ name, mobile }) => {
  return (
    <Wrapper>
      <Row>
        <Col lg={2}>
          <Img src="/ydh.png" alt="user" />
        </Col>
        <Col lg={10}>
          <Name>{name}</Name>
          <Number>{mobile}</Number>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default ContactItem;
