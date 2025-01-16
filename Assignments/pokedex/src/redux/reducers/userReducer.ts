interface IUserAction {
  type: string;
  payload: { name?: string; bootup?: boolean; mode: string };
}

let initialState = {
  selectedPokemon: "",
  bootup: false,
  menuMode: "",
};

const userReducer = (state = initialState, action: IUserAction) => {
  const { type, payload } = action;
  switch (type) {
    case "BOOTUP_FINISH":
      return { ...state, bootup: payload.bootup };
    case "SELECT":
      return { ...state, selectedPokemon: payload.name };
    case "SLOT_MENU":
      return { ...state, menuMode: payload.mode };

    default:
      return state;
  }
};

export default userReducer;
