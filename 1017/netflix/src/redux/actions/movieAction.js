// const getMovies = () => {
//   return async (dispatch) => {
//     try {
//       const url =
//         "'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'";
//       const response = await fetch(url);
//       const data = await response.json();
//       console.log(data);
//     } catch (e) {
//       console.error(e);
//     }
//   };
// };

// export const movies = { getMovies };

//axios 인스턴스 객체 임포트
import api from "../api";

export const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;

const getMovies = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_REQUEST" });
      const popularMoviesAPI = api.get(
        `movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`
      );
      const topRatedMoviesAPI = api.get(
        `movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1`
      );
      const upcomingMoviesAPI = api.get(
        `movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1`
      );
      const movieGenresAPI = api.get(
        `genre/list?api_key=${API_KEY}&language=ko`
      );

      const [popularMovies, topRatedMovies, upcomingMovies, movieGenres] =
        await Promise.all([
          popularMoviesAPI,
          topRatedMoviesAPI,
          upcomingMoviesAPI,
          movieGenresAPI,
        ]);

      dispatch({
        type: "GET_MOVIES_SUCCESS",
        payload: { popularMovies, topRatedMovies, upcomingMovies, movieGenres },
      });
    } catch (error) {
      dispatch({
        type: "GET_MOVIES_FAILURE",
      });
    }
  };
};

export const movieAction = { getMovies };
