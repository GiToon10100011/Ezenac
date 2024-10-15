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

const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;

const getMovies = () => {
  return async (dispatch) => {
    const popularMoviesAPI = api.get(
      `movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`
    );
    const topRatedMoviesAPI = api.get(
      `movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1`
    );
    const upcomingMoviesAPI = api.get(
      `movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1`
    );

    const [popularMovies, topRatedMovies, upcomingMovies] = await Promise.all([
      popularMoviesAPI,
      topRatedMoviesAPI,
      upcomingMoviesAPI,
    ]);

    dispatch({
      type: "GET_MOVIES_SUCCESS",
      payload: { popularMovies, topRatedMovies, upcomingMovies },
    });
  };
};

export const movieAction = { getMovies };
