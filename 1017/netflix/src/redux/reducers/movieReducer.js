let initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upcomingMovies: {},
  movieGenres: [],
  loading: true,
};

const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_MOVIES_REQUEST":
      return { ...state, loading: true };
    case "GET_MOVIES_SUCCESS":
      return {
        ...state,
        popularMovies: payload.popularMovies.data,
        topRatedMovies: payload.topRatedMovies.data,
        upcomingMovies: payload.upcomingMovies.data,
        movieGenres: payload.movieGenres.data.genres,
        loading: false,
      };
    case "GET_MOVIES_FAILURE":
      return { ...state, loading: false };
    default:
      return { ...state };
  }
};

export default movieReducer;
