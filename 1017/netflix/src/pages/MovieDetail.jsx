import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { Badge } from "react-bootstrap";
import { API_KEY, movieAction } from "../redux/actions/movieAction";
import api from "../redux/api";

const Wrapper = styled.main`
  width: 100%;
`;

const Inner = styled.section`
  margin: 0 auto;
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DetailHeader = styled.header`
  width: 100%;
  height: 500px;
  display: flex;
  gap: 10px;
  margin-bottom: 40px;
`;
const HeaderImg = styled.img`
  width: 300px;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;
const HeaderDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const DescTitle = styled.h1`
  font-size: 40px;
`;
const DescContent = styled.p`
  span {
    padding-right: 10px;
  }
`;

const DescDate = styled.span``;
const DescAdult = styled.span``;
const DescVoteAvg = styled.span``;
const DescVote = styled.span``;

const DescBtnGroup = styled.div`
  display: flex;
  gap: 10px;
`;
const DescBtn = styled.button`
  padding: 6px 14px;
  border: 1px solid white;
  border-radius: 20px;
  background: none;
  color: white;
  transition: all 0.3s;
  &:hover {
    background: white;
    color: black;
  }
`;

const DescOverview = styled.p`
  font-size: 14px;
  line-height: 20px;
`;

const DescCheckout = styled(DescBtn)`
  width: 100px;
  background: crimson;
  font-weight: 600;
  border: none;
`;

const DetailContent = styled.section`
  width: 100%;
  height: 300px;
  background: crimson;
  padding: 20px;
  border-radius: 20px 20px 0 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`;

const ContentTitle = styled.h1`
  font-size: 26px;
  font-weight: 600;
`;

const Genre = styled.div`
  display: flex;
  gap: 4px;
  b {
    font-weight: 600;
  }
`;

const GenreItem = styled(Genre)``;
const Language = styled(Genre)``;
const Popularity = styled(Genre)``;

const DetailVideo = styled.iframe`
  width: 100%;
  height: 600px;
`;

const MovieDetail = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [trailerData, setTrailerData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const getUrl = location.href.split("/");
  const selectedId = Number(getUrl[getUrl.length - 2]);
  const selectedCategory = searchParams.get("type");

  const selectedDatas = useSelector(
    (state) => state.movie[selectedCategory].results
  );

  const genres = useSelector((state) => state.movie.movieGenres);

  const getTrailer = async () => {
    const trailer = api.get(
      `movie/${selectedId}/videos?api_key=${API_KEY}&language=ko-KR`
    );
    trailer.then(({ data }) => setTrailerData(data));
  };

  useEffect(() => {
    const selectedData =
      selectedDatas && selectedDatas?.find(({ id }) => id === selectedId);
    setData(selectedData);
    getTrailer();
  }, []);

  console.log(trailerData);

  let lang;

  return (
    <Wrapper
      style={{
        background: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(https://media.themoviedb.org/t/p/original/${data?.backdrop_path}) center/cover no-repeat`,
      }}
    >
      <Inner>
        <DetailHeader>
          <HeaderImg
            src={`https://media.themoviedb.org/t/p/original/${data?.poster_path}`}
            alt="thumbnail"
          ></HeaderImg>
          <HeaderDesc>
            <DescTitle>{data?.title || data?.original_title}</DescTitle>
            <DescContent>
              <DescDate>{data?.release_date}</DescDate>
              <DescAdult>{data?.adult ? "전체관람가" : "18세 이상"}</DescAdult>
              <DescVoteAvg>{data?.vote_average}</DescVoteAvg>
              <DescVote>{data?.vote_count}</DescVote>
            </DescContent>
            <DescBtnGroup>
              <DescBtn>예고편 재생</DescBtn>
              <DescBtn>채팅</DescBtn>
              <DescBtn>공유하기</DescBtn>
            </DescBtnGroup>
            <DescOverview>{data?.overview}</DescOverview>
            <DescCheckout>결제하기</DescCheckout>
          </HeaderDesc>
        </DetailHeader>
        <DetailContent>
          <ContentTitle>영화정보</ContentTitle>
          <Genre>
            <b>장르: </b>
            {data?.genre_ids?.map((item, i, arr) => (
              <GenreItem key={i}>
                {genres.find((genre) => genre.id === item).name}
                {i === arr.length - 1 ? "" : ", "}
              </GenreItem>
            ))}
          </Genre>
          <Language>
            <b>언어: </b>
            {data?.original_language}
          </Language>
          <Popularity>
            <b>인기점수: </b>
            <i style={{ textDecoration: "underline", fontStyle: "italic" }}>
              {data?.popularity} / 10000점
            </i>
          </Popularity>
        </DetailContent>
        <DetailVideo
          src={
            trailerData?.results?.length > 0
              ? `https://www.youtube.com/embed/${trailerData?.results[0]?.key}`
              : `https://www.youtube.com/embed/${trailerData?.results?.key}`
          }
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </Inner>
    </Wrapper>
  );
};

export default MovieDetail;
