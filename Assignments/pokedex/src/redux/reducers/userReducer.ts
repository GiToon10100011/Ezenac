interface IUserAction {
  type: string;
  payload: string;
}

let initialState = {
  selectedPokemon: "",
};

const userReducer = (state = initialState, action: IUserAction) => {
  const { type, payload } = action;
  switch (type) {
    case "SELECT":
      return { ...state, selectedPokemon: payload };
    default:
      return state;
  }
};

export default userReducer;
