let initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upcomingMovies: {},
};

const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_MOVIES_SUCCESS":
      return {
        ...state,
        popularMovies: payload.popularMovies.data,
        topRatedMovies: payload.topRatedMovies.data,
        upcomingMovies: payload.upcomingMovies.data,
      };
    default:
      return { ...state };
  }
};

export default movieReducer;
