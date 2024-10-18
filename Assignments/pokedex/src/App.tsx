import { useEffect } from "react";
import { useDispatch } from "react-redux";
import pokeAction from "./redux/actions/pokeAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(pokeAction.getPokemonData());
  }, []);
  return <></>;
}

export default App;
