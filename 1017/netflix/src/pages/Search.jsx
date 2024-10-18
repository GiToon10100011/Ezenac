import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.main`
  width: 100%;
`;

const Inner = styled.section`
  overflow: hidden;
  width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`;

const SearchItem = styled.div`
  position: relative;
  width: 300px;
  height: 500px;
  cursor: pointer;
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
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

const Search = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const datas = useSelector((state) => state.movie);
  const genres = useSelector((state) => state.movie.movieGenres);
  const { popularMovies, topRatedMovies, upcomingMovies, loading } =
    datas || {};

  const allData = [
    ...popularMovies.results,
    ...topRatedMovies.results,
    ...upcomingMovies.results,
  ];

  const allGenres = allData
    .map((data) => data.genre_ids)
    .reduce((curr, acc) => [...curr, ...acc]);

  const noDups = new Set(
    allData
      .map((data) => data.id)
      .map((id) => {
        return allData.find((data) => data.id === id);
      })
  );

  const searchQuery = searchParams.get("q");

  const filteredItems = Array.from(noDups).filter(
    (data) =>
      data.title.includes(searchQuery) ||
      data.original_title.includes(searchQuery) ||
      data.genre_ids.find((id) =>
        genres.filter((genre) => genre.id === id)[0].name.includes(searchQuery)
      )
  );

  console.log(filteredItems);

  return (
    <Wrapper>
      <Inner>
        {filteredItems.map((item) => (
          <SearchItem
            onClick={() => navigate(`/movie/${item.id}/?type=popularMovies`)}
          >
            <Img
              src={`https://media.themoviedb.org/t/p/original/${item.backdrop_path}`}
              alt="thumbnail"
            />
            <Title>{item.title}</Title>
          </SearchItem>
        ))}
      </Inner>
    </Wrapper>
  );
};

export default Search;
