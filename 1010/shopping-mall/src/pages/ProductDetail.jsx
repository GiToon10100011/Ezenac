import React, { useEffect, useState } from "react";
import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Img = styled.img`
  position: sticky;
  top: 20px;
  width: 100%;
`;

const ProductDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 22px;
  padding: 10px;
`;

const ProductTitle = styled.div`
  font-weight: 600;
`;
const ProductPrice = styled.div`
  font-size: 18px;
`;

const ProductChoice = styled.div``;

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const detailInit = async () => {
    const url = `https://my-json-server.typicode.com/GiToon10100011/MusinsaMallJSONServer/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    detailInit();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <Img src={product.img} alt={product.title} />
        </Col>
        <Col>
          <ProductDesc>
            <ProductTitle>상품명: {product.title}</ProductTitle>
            <ProductPrice>
              가격:{" "}
              {Intl.NumberFormat("ko-kr", {
                style: "currency",
                currency: "KRW",
              }).format(product.price)}
            </ProductPrice>
            <ProductChoice>
              {product.choice && "Conscious Choice"}
            </ProductChoice>
            <Dropdown>
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {product?.size?.length > 0 &&
                  product.size.map((option, index) => (
                    <Dropdown.Item key={index} href="#/action-1">
                      {option}
                    </Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="outline-dark">장바구니</Button>
            <Button variant="dark">상품결제</Button>
          </ProductDesc>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
