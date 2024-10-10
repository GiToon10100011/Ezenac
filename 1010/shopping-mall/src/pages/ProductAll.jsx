import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    const searchQuery = query.get("q") || "";
    console.log(searchQuery);
    let url = `https://my-json-server.typicode.com/GiToon10100011/MusinsaMallJSONServer/products?q=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <>
      <Container>
        <Row>
          {productList.map((product, index) => (
            <Col key={index} lg={3}>
              <ProductCard key={product.id} {...product} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductAll;
