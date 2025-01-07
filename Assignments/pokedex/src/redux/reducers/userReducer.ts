interface IUserAction {
  type: string;
  payload: { name?: string; bootup?: boolean };
}

let initialState = {
  selectedPokemon: "",
  bootup: false,
};

const userReducer = (state = initialState, action: IUserAction) => {
  const { type, payload } = action;
  switch (type) {
    case "BOOTUP_FINISH":
      return {...state, bootup: payload.bootup}
    case "SELECT":
      return { ...state, selectedPokemon: payload.name };
    default:
      return state;
  }
};

export default userReducer;
