import React, { useEffect } from "react";
import { Badge } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { createSearchParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 300px;
  height: 200px;
  overflow: hidden;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  }
  &:hover{
    img{
      transform: scale(1.1);
    }
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: all 0.3s;
`;

const Title = styled.h1`
  width: 70%;
  word-break: keep-all;
  position: absolute;
  z-index: 2;
  top: 20px;
  left: 10px;
  font-size: 24px;
`;

const Adult = styled.div`
  position: absolute;
  z-index: 2;
  top: 10px;
  right: 30px;
  background: rgba(220, 20, 60, 0.8);
  padding: 10px;
  width: 50px;
  height: 50px;
  font-size: 14px;
  line-height: 28px;
  border-radius: 50%;
  box-shadow: 4px 12px 8px rgba(0, 0, 0, 0.4);
`;

const Genre = styled.div`
  z-index: 2;
  display: flex;
  gap: 4px;
`;

const InfoGroup = styled.div`
  width: 100%;
  position: absolute;
  bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 0 10px;
`;

const Vote = styled.span`
  margin-right: 20px;
  position: relative;
  z-index: 2;
`;

const MovieCard = (data) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const genres = useSelector((state) => state.movie.movieGenres);

  const selectedId = useSelector((state) => state.user.selectedId);

  const {
    backdrop_path,
    title,
    genre_ids,
    vote_average,
    adult,
    id,
    movieCategory,
    vote_count,
    release_date,
  } = data;

  console.log(movieCategory);

  const handleOnMovieSelect = () => {
    dispatch({ type: "MOVIE_SELECT", payload: { data, selectedId: id } });
    navigate({
      pathname: `/movie/${id}/`,
      search: `?${createSearchParams({
        type: movieCategory,
      })}`,
    });
  };

  return (
    <Wrapper onClick={handleOnMovieSelect}>
      <Img
        src={`https://media.themoviedb.org/t/p/original/${backdrop_path}`}
        alt="thumbnail"
      />
      <Title>{title}</Title>
      <Adult>{adult ? "성인" : "전체"}</Adult>
      <InfoGroup>
        <Genre>
          {genre_ids.map((item, i) => (
            <Badge key={i}>
              {genres.find((genre) => genre.id === item).name}
            </Badge>
          ))}
        </Genre>
        <Vote>{vote_average}</Vote>
      </InfoGroup>
    </Wrapper>
  );
};

export default MovieCard;
