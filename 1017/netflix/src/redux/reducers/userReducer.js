let initialState = {
  selectedId: "",
  selectedMovieData: {},
  searchQuery: "",
};
const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(action);
  switch (type) {
    case "MOVIE_SELECT":
      return {
        ...state,
        selectedId: payload.selectedId,
        selectedMovieData: payload.data,
      };
    case "MOVIE_SEARCH":
      return { ...state, searchQuery: payload.searchQuery };

    default:
      return { ...state };
  }
};

export default userReducer;
