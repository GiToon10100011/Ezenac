import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { productAction } from "../redux/actions/productAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const ProductAll = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useSearchParams();
  const productList = useSelector((state) => state.productList);

  console.log(productList)

  const getProducts = async () => {
    const searchQuery = query.get("q") || "";
    dispatch(productAction.getProduct(searchQuery));
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
