import React, { useState } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 10px 0;
`;

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const handleOnSearch = (e) => {
    e.preventDefault();
    dispatch({
      type: "SEARCH",
      payload: { searchQuery },
    });
  };
  return (
    <Form onSubmit={handleOnSearch}>
      <Wrapper>
        <Row>
          <Col lg={11}>
            <Form.Control
              type="text"
              placeholder="Search Name"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Col>
          <Col lg={1}>
            <Button type="submit">Search</Button>
          </Col>
        </Row>
      </Wrapper>
    </Form>
  );
};

export default SearchBar;
