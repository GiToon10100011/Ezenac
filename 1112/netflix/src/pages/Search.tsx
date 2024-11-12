import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  getReviews,
  getVideos,
  IGenre,
  IGetMoviesResult,
  IMoviesResults,
  IReview,
  IVideo,
  searchGenres,
  searchMovies,
} from "../api";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { makeImagePath } from "../utils";
import YouTube from "react-youtube";
import Pagination from "react-js-pagination";

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

const NoImg = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #222;
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

const ReviewSection = styled.div`
  background: ${({ theme }) => theme.black.bitDark};
  margin-top: 20px;
  padding: 20px;
  border-radius: 8px;
  li {
    padding: 10px;
    border: 1px solid #444;
    margin-top: 20px;
    border-radius: 8px;
  }
`;
const ReviewAuthor = styled.div`
  background: #444;
  width: 200px;
  padding: 8px 10px;
  border-radius: 8px;
  margin-bottom: 10px;
`;
const ReviewContent = styled.div`
  font-size: 14px;
  padding-left: 10px;
  line-height: 1.2;
`;

const Genres = styled.div``;

const VideoSection = styled.div`
  margin: 40px 0;
  background: ${({ theme }) => theme.black.bitDark};
  padding: 20px;
`;

const StyledPagination = styled.div`
  width: 28%;
  display: flex;
  justify-content: center;
  background: crimson;
  margin: 0 auto;
  border-radius: 10px;
  ul {
    display: flex;
    gap: 10px;
    li {
      a {
        display: inline-block;
        color: ${({ theme }) => theme.white.bitLight};
        transition: all 0.3s;
        &:hover {
          color: ${({ theme }) => theme.black.bitDark};
        }
      }
    }
  }
`;

const Search = () => {
  const { search } = useLocation();
  const keyword = decodeURIComponent(search.split("=")[1]);
  const [videos, setVideos] = useState<IVideo<string>>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(2);

  const { data: movieData, isLoading: movieLoading } =
    useQuery<IGetMoviesResult>({
      queryKey: ["multiContents", keyword],
      queryFn: () => searchMovies(keyword),
    });

  const movieIds = movieData?.results.map((movie) => movie.id);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies: IMoviesResults[] =
    movieData?.results.slice(indexOfFirstMovie, indexOfLastMovie) || [];

  const handlePageChange = (pageNum: number) => {
    setCurrentPage(pageNum);
  };

  const { data: genreData, isLoading: genreLoading } = useQuery<{
    genres: IGenre[];
  }>({
    queryKey: ["getGenres"],
    queryFn: searchGenres,
  });

  const { data: reviewData, isLoading: reviewLoading } = useQuery({
    queryKey: ["getReviews", movieIds],
    queryFn: () =>
      movieIds
        ? Promise.all(movieIds.map((id) => getReviews(id)))
        : Promise.resolve([]),
    enabled: !!movieIds,
  });

  const { data: videoData, isLoading: videoLoading } = useQuery({
    queryKey: ["getVideo", movieIds],
    queryFn: () =>
      movieIds
        ? Promise.all(movieIds.map((id) => getVideos(id)))
        : Promise.resolve([]),
    enabled: !!movieIds,
  });

  console.log(genreData, genreLoading, videoData);

  useEffect(() => {
    if (movieData && videoData) {
      movieData.results.forEach((movie) => {
        getVideos(movie.id).then((data) => {
          if (data.results) {
            const videoIds = data.results.map((video: any) => video.key);
            setVideos((prev) => ({
              ...prev,
              [movie.id]: videoIds,
            }));
          }
        });
      });
    }
  }, [movieData, videoData]);

  return (
    <Container>
      {movieLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {currentMovies?.map((movie, index) => (
            <SearchBox key={index}>
              <MovieSection>
                {movie.backdrop_path ? (
                  <MovieImg
                    src={makeImagePath(movie.backdrop_path as string, "w500")}
                    alt={movie.title}
                  />
                ) : (
                  <NoImg>Images not Available</NoImg>
                )}

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
                  <Genres>
                    <span>Genre:</span>{" "}
                    {movie.genre_ids
                      .map(
                        (id) =>
                          genreData?.genres?.find(
                            (genre: IGenre) => genre?.id === id
                          )?.name
                      )
                      .join(", ")}
                  </Genres>
                </MovieInfo>
              </MovieSection>
              <ReviewSection>
                <h3>Movie Reviews</h3>
                {reviewLoading ? (
                  <div>Reviews Loading...</div>
                ) : (
                  <ul>
                    {reviewData && reviewData[index].results ? (
                      reviewData[index].results.map((review: IReview) => (
                        <li key={review.id}>
                          <ReviewAuthor>{review.author}</ReviewAuthor>
                          <ReviewContent>{review.content}</ReviewContent>
                        </li>
                      ))
                    ) : (
                      <li>No Reviews...</li>
                    )}
                  </ul>
                )}
              </ReviewSection>
              <VideoSection>
                {videos[movie.id]?.length > 0 ? (
                  <YouTube
                    videoId={videos[movie.id][0]}
                    opts={{ width: "100%", height: "800px" }}
                  />
                ) : (
                  <div>No Available Videos</div>
                )}
              </VideoSection>
            </SearchBox>
          ))}
          <StyledPagination>
            <Pagination
              onChange={handlePageChange}
              activePage={currentPage}
              itemsCountPerPage={moviesPerPage}
              totalItemsCount={movieData?.results.length || 0}
              pageRangeDisplayed={5}
            ></Pagination>
          </StyledPagination>
        </>
      )}
    </Container>
  );
};

export default Search;
