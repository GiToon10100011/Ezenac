import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { ClipLoader } from "react-spinners";
import { movieAction } from "../redux/actions/movieAction";
import Banner from "../components/Banner";
import MovieSlider from "../components/MovieSlider";

const Wrapper = styled.main``;

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  font-size: 20px;
  margin: 20px 0;
  padding-left: 10px;
  border-bottom: 2px solid crimson;
  margin-bottom: 40px;
`;

const Home = () => {
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.movie);

  const searchQuery = useSelector((state) => state.user.searchQuery);

  console.log(searchQuery)

  const { popularMovies, topRatedMovies, upcomingMovies, loading } =
    datas || {};

  if (loading) {
    return (
      <LoadingWrapper>
        <ClipLoader loading={loading} color="crimson" size={150} />
      </LoadingWrapper>
    );
  }
  if(!searchQuery){
    
  }
  return (
    <Wrapper>
      <Banner {...popularMovies} />
      <Title>Popular Movies</Title>
      <MovieSlider movies={popularMovies} category="popularMovies" />
      <Title>Top rated Movies</Title>
      <MovieSlider movies={topRatedMovies} category="topRatedMovies" />
      <Title>Upcoming Movies</Title>
      <MovieSlider movies={upcomingMovies} category="upcomingMovies" />
    </Wrapper>
  );
};

export default Home;
