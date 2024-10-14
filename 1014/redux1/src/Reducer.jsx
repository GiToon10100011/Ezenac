import React from "react";

let initialState = {
  count: 0,
  login: false,
  id: "",
  pw: "",
};

const Reducer = (state = initialState, action) => {
  // if (action.type === "INCREASE") {
  //   return { ...state, count: state.count + 1 };
  // }
  // //if문의 반환값이므로 다시 최종 계산값을 반환해야함
  // return { ...state };

  switch (action.type) {
    case "INCREASE":
      return { ...state, count: state.count + action.payload.number };
    case "DECREASE":
      return { ...state, count: state.count - action.payload.number };
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
        id: action.payload.id,
        pw: action.payload.pw,
      };
    default:
      return { ...state };
  }
};

export default Reducer;
