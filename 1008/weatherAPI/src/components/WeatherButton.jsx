import React from "react";
import { styled } from "styled-components";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ButtonGroup = styled.div`
  display: flex;
  gap: 6px;
  button {
    text-transform: capitalize;
  }
`;

const WeatherButton = ({ cities, setCity, handleCityChange }) => {
  return (
    <ButtonGroup>
      <Button onClick={() => setCity("")} variant="secondary">
        Current Location
      </Button>
      {cities.map((item, index) => (
        <Button
          onClick={() => {
            handleCityChange(item);
          }}
          variant="secondary"
          key={index}
        >
          {item}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default WeatherButton;
