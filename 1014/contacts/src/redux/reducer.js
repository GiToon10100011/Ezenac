let initialState = {
  contact: [],
  searchQuery: "",
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_CONTACT":
      // return {
      //   ...state,
      //   contact: [
      //     ...state.contact,
      //     { name: payload.name, mobile: payload.mobile },
      //   ],
      // };

      state.contact.push({ name: payload.name, mobile: payload.mobile });
      break;

    case "SEARCH":
      // return {
      //   ...state,
      //   searchQuery: payload.searchQuery,
      // };
      // default:
      //   return { ...state };
      state.searchQuery = payload.searchQuery;
      break;
  }
  return { ...state };
};

export default reducer;
