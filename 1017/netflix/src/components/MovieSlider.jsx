import React from "react";
import MovieCard from "./MovieCard";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Wrapper = styled.section`
  width: 100vw;
  padding: 10px;
`;

const MovieSlider = ({ movies, category }) => {
  const { results } = movies;


  return (
    <Wrapper>
      <Carousel responsive={responsive}>
        {results.map((movie, index) => (
          <MovieCard key={index} {...movie} movieCategory={category} />
        ))}
      </Carousel>
    </Wrapper>
  );
};

export default MovieSlider;
