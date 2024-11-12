const API_KEY = import.meta.env.VITE_MOVIE_KEY;
console.log(API_KEY);
const BASE_PATH = "https://api.themoviedb.org/3";

export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMoviesResults[];
  total_pages: number;
  total_results: number;
}

export interface IMoviesResults {
  id: number;
  backdrop_path: string;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  adult: boolean;
  genre_ids: number[];
}

export interface IGenre {
  id: number;
  name: string;
}

export interface IReview {
  author: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string;
    rating: number;
  };
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

export interface IVideo<T> {
  [key: number]: T[];
}

export const getMovies = async () => {
  return await fetch(
    `${BASE_PATH}/movie/now_playing?api_key=${API_KEY}&language=ko-kr&page=1`
  ).then((response) => response.json());
};

export const searchMovies = async (query: string | null) => {
  return await fetch(
    `${BASE_PATH}/search/movie?api_key=${API_KEY}&query=${query}`
  ).then((response) => response.json());
};

export const searchGenres = async () => {
  return await fetch(`${BASE_PATH}/genre/movie/list?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
};

export const getReviews = async (id: number) => {
  return await fetch(
    `${BASE_PATH}/movie/${id}/reviews?api_key=${API_KEY}`
  ).then((response) => response.json());
};

export const getVideos = async (id: number) => {
  return await fetch(`${BASE_PATH}/movie/${id}/videos?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
};
