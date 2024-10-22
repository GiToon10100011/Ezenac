import { gql, useApolloClient, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ALL_MOVIES = gql`
  query getMovies {
    allMovies {
      title
      id
      medium_cover_image
    }
  }
`;

const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.header`
  width: 100%;
  height: 45vh;
  background: linear-gradient(-45deg, #d754ab, #fd723a);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
`;

const Loading = styled.main`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  margin-top: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  text-align: center;
`;

const MoviesGrid = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;
  width: 60vw;
  margin-top: -50px;
`;
const PosterContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 8px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
`;

const PosterBg = styled.div`
  width: 100%;
  height: 100%;
  background: url(${({ background }) => background}) center/cover no-repeat;
`;

const Movies = () => {
  const { data, loading } = useQuery(ALL_MOVIES);
  console.log(data);

  return (
    <Container>
      <Header>
        <Title>Movies List</Title>
      </Header>
      <MoviesGrid>
        {loading && <Loading>Loading...</Loading>}
        {data?.allMovies.map((movie) => (
          <PosterContainer key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <PosterBg background={movie.medium_cover_image} />
            </Link>
          </PosterContainer>
        ))}
        <br />
        {/* {data.allTweets.map((tweet) => (
          <li key={tweet.id}>{tweet.text}</li>
        ))} */}
      </MoviesGrid>
    </Container>
  );
};

export default Movies;
