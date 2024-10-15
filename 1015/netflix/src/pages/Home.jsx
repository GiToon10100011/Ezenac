import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { movieAction } from "../redux/actions/movieAction";
import Banner from "../components/Banner";
import { useEffect } from "react";

const Wrapper = styled.div`
  /* height: 1000vh; */
`;

const Home = () => {
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.movie);

  const { popularMovies, topRatedMovies, upcomingMovies } = datas || {};

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);
  console.log(datas);
  return <Wrapper>{datas && <Banner {...popularMovies} />}</Wrapper>;
};

export default Home;
