import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getMovies, IGetMoviesResult } from "../api";
import { makeImagePath } from "../utils";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useState } from "react";
import { PathMatch, useMatch, useNavigate } from "react-router-dom";

const Container = styled.main`
  width: 100%;
  height: 3000px;
  margin-top: 60px;
  background: ${({ theme }) => theme.black.bitDark};
  overflow-x: hidden;
`;

const Loader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  color: ${({ theme }) => theme.red};
`;

const Banner = styled.div<{ $bgImg: string }>`
  color: ${({ theme }) => theme.white.bitLight};
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 60px;
  background: linear-gradient(to right, #000, #0000),
    url(${({ $bgImg }) => $bgImg}) center/cover no-repeat;
`;
const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 20px;
`;
const Overview = styled.p`
  font-size: 20px;
  width: 50%;
`;

const Slider = styled.div`
  position: relative;
  top: -100px;
  width: 100%;
`;
const Row = styled(motion.div)`
  position: absolute;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
  margin-bottom: 10px;
`;
const Box = styled(motion.div)<{ $bgImg: string }>`
  width: auto;
  height: 200px;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${({ $bgImg }) => $bgImg}) center/cover no-repeat;
  font-size: 18px;
  color: white;
  cursor: pointer;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

const Info = styled(motion.div)`
  width: 100%;
  height: 100%;
  padding: 20px;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  h4 {
    text-align: center;
    font-size: 16px;
  }
`;

const ModalBox = styled(motion.div)`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 40vw;
  height: 80vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: ${({ theme }) => theme.black.bitDark};
  color: ${({ theme }) => theme.white.bitLight};
`;

const Overlay = styled(motion.div)`
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  position: fixed;
  background: rgba(0, 0, 0, 0.4);
`;

const ModalContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const MovieCover = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
const MovieTitle = styled.h2`
  color: ${({ theme }) => theme.white.bitLight};
`;

const MovieOverview = styled.p`
  line-height: 1.5;
`;

const rowVariants = {
  hidden: {
    x: window.innerWidth + 10,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.innerWidth - 10,
  },
};

const boxVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
    transition: {
      delay: 0.2,
      duration: 0.3,
      type: "tween",
    },
  },
};

const infoVariants = {
  hover: {
    opacity: 1,
  },
};

const offset = 6;

const Home = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  console.log(scrollY);
  const movieMatch: PathMatch<string> | null = useMatch("/movies/:movieId");
  const [sliderIdx, setSliderIdx] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const { data, isLoading } = useQuery<IGetMoviesResult>({
    queryKey: ["nowPlayingMovies"],
    queryFn: getMovies,
  }); 

  const increaseSliderIdx = () => {
    if (data) {
      if (leaving) return;
      setLeaving(true);
      const totalMovies = data.results.length - (data.results.length % offset);
      const maxIndex = Math.ceil(totalMovies / offset) - 1;
      setSliderIdx((current) => (current === maxIndex ? 0 : current + 1));
    }
  };

  const toggleLeaving = () => {
    setLeaving((current) => !current);
  };

  const onBoxClick = (id: number) => {
    navigate(`/movies/${id}`);
  };

  const onOverlayClick = () => {
    navigate("/");
  };

  const clickedMovie =
    movieMatch?.params.movieId &&
    data?.results.find(
      (movie) => String(movie.id) === movieMatch.params.movieId
    );

  console.log(clickedMovie);

  return (
    <Container>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner
            onClick={increaseSliderIdx}
            $bgImg={makeImagePath(data?.results[1].backdrop_path as string)}
          >
            <Title>{data?.results[1].original_title}</Title>
            <Overview>{data?.results[1].overview}</Overview>
          </Banner>
          <Slider>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                key={sliderIdx}
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: "tween", duration: 1 }}
              >
                {data?.results
                  .slice(data?.results.length % offset)
                  .slice(sliderIdx * offset, sliderIdx * offset + offset)
                  .map((movie) => (
                    <Box
                      layoutId={String(movie.id)}
                      onClick={() => onBoxClick(movie.id)}
                      variants={boxVariants}
                      initial="normal"
                      key={movie.id}
                      $bgImg={makeImagePath(movie.backdrop_path as string)}
                      whileHover="hover"
                    >
                      <Info variants={infoVariants}>
                        <h4>{movie.title}</h4>
                      </Info>
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
          <AnimatePresence>
            {movieMatch ? (
              <>
                <Overlay
                  onClick={onOverlayClick}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
                <ModalBox
                  style={{ top: scrollY.get() + 100 }}
                  key="modal"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transform: "translate(-50%, -50%)" }}
                  exit={{ opacity: 0 }}
                  layoutId={movieMatch.params.movieId}
                >
                  {clickedMovie && (
                    <>
                      <ModalContents>
                        <MovieCover
                          src={makeImagePath(
                            clickedMovie.backdrop_path,
                            "w500"
                          )}
                          alt={clickedMovie.title}
                        />
                        <MovieTitle>{clickedMovie.title}</MovieTitle>
                        <MovieOverview>{clickedMovie.overview}</MovieOverview>
                      </ModalContents>
                    </>
                  )}
                </ModalBox>
              </>
            ) : null}
          </AnimatePresence>
        </>
      )}
    </Container>
  );
};

export default Home;
