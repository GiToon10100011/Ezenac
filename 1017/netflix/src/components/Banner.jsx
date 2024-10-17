import React from "react";
import styled from "styled-components";

const BgImg = styled.div`
  width: 100%;
  height: 800px;
  margin-bottom: 60px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: linear-gradient(to right, #000, transparent);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
`;

const BannerInfo = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 30px;
  transform: translateY(-50%);
  color: #fff;
`;

const MovieTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const MovieOverView = styled.p`
  width: 700px;
  font-size: 18px;
  line-height: 30px;
`;

const Banner = ({ results }) => {
  const {
    backdrop_path,
    original_title,
    overview,
    release_date,
    poster_path,
    title,
  } = results[0] || {};
  return (
    <>
      <BgImg>
        <Img
          src={`https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdrop_path}`}
        ></Img>
        ;
      </BgImg>
      <BannerInfo>
        <MovieTitle>{title}</MovieTitle>
        <MovieOverView>{overview}</MovieOverView>
      </BannerInfo>
    </>
  );
};

export default Banner;
