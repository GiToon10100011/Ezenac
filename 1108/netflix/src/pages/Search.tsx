import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IGetMoviesResult, searchGenres, searchMovies } from "../api";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { makeImagePath } from "../utils";

const Container = styled.main`
  padding-top: 60px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: ${({ theme }) => theme.black.veryDark};
  color: ${({ theme }) => theme.white.veryLight};
`;

const SearchBox = styled.div`
  width: 100%;
`;
const MovieSection = styled.section`
  display: flex;
  gap: 20px;
  width: 100%;
  margin-bottom: 20px;
`;
const MovieInfo = styled.div`
  width: 50%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const MovieTitle = styled.h4`
  font-size: 40px;
  border-radius: 8px;
  margin-bottom: 20px;
`;
const MovieOverview = styled.p`
  font-size: 20px;
  line-height: 1.5;
  padding-top: 10px;
  border-top: 1px solid ${({ theme }) => theme.white.bitLight};
  margin-bottom: 20px;
`;
const MovieDate = styled.div`
  font-size: 18px;
  margin-bottom: 4px;
  span {
    color: ${({ theme }) => theme.white.bitLight};
  }
`;
const MovieRatings = styled.div`
  span {
    color: ${({ theme }) => theme.red};
  }
`;
const MovieImg = styled.img`
  flex: 1;
  object-fit: cover;
`;
const MovieValue = styled(MovieDate)`
  color: ${({ theme }) => theme.white.bitLight};
  background: ${({ theme }) => theme.red};
  width: fit-content;
  padding: 4px 14px;
  border-radius: 20px;
  margin-bottom: 20px;
`;

const Search = () => {
  const { search } = useLocation();
  const keyword = decodeURIComponent(search.split("=")[1]);
  const { data: movieData, isLoading: movieLoading } =
    useQuery<IGetMoviesResult>({
      queryKey: ["multiContents", keyword],
      queryFn: () => searchMovies(keyword),
    });
  const { data: genreData, isLoading: genreLoading } =
    useQuery<IGetMoviesResult>({
      queryKey: ["getGenres"],
      queryFn: searchGenres,
    });

  console.log(genreData, genreLoading);

  return (
    <Container>
      {movieLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {movieData?.results.map((movie, index) => (
            <SearchBox key={index}>
              <MovieSection>
                <MovieImg
                  src={makeImagePath(movie.backdrop_path as string, "w500")}
                  alt={movie.title}
                />
                <MovieInfo>
                  <MovieTitle>
                    {movie.title} / {movie.original_title}
                  </MovieTitle>
                  <MovieOverview>{movie.overview}</MovieOverview>
                  <MovieValue>{movie.adult ? "18+" : "ALL"}</MovieValue>
                  <MovieDate>
                    <span>Release: </span>
                    {movie.release_date}
                  </MovieDate>
                  <MovieRatings>
                    Ratings:
                    <span>
                      {movie.vote_average?.toFixed(1)}(
                      {movie.vote_count?.toLocaleString("ko-kr")}
                      voted)
                    </span>
                  </MovieRatings>
                </MovieInfo>
              </MovieSection>
            </SearchBox>
          ))}
        </>
      )}
    </Container>
  );
};

export default Search;
