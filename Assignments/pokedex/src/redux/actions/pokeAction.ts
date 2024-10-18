import React from "react";
import { pokeAPI } from "../api";
import { Dispatch } from "redux";

const getPokemonData = () => {
  return async (dispatch: Dispatch) => {
    const allPokemonApi = pokeAPI.get("pokemon/?limit=1302");
    dispatch({ type: "GET_DATA_SUCCESS", payload: {} });
  };
};

export default { getPokemonData };
