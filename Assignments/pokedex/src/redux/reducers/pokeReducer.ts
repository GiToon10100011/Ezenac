import React from "react";
import { IPokeApiContent } from "../actions/pokeAction";

interface IPokeAction {
  type: string;
  payload: IPokeApiContent;
}

let initialState = {
  data: [],
};

const pokeReducer = (state = initialState, action: IPokeAction) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_DATA_SUCCESS":
      return { ...state, data: payload.allPokemon };
  }
};

export default pokeReducer;
