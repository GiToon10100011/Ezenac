import { Dispatch } from "redux";
import { pokeAPI } from "../api";

type pokemonData = {
  name: string;
  url: string;
};

export interface IPokeApiContent {
  allPokemon: {
    count: number;
    next: string | null;
    prev: string | null;
    results: pokemonData[];
  };
}

const getPokemonData = () => {
  return async (dispatch: Dispatch) => {
    try {
      const allPokemonApi = pokeAPI.get("pokemon/?limit=1302");
      const allPokemon = await allPokemonApi.then((response) => response.data);
      console.log(allPokemon);
      dispatch({ type: "GET_DATA_SUCCESS", payload: { allPokemon } });
    } catch (error) {
      console.error(error);
    }
  };
};

export default { getPokemonData };
