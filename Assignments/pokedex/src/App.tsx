import { useEffect } from "react";
import { useAppDispatch } from "./redux/hooks";
import pokeAction from "./redux/actions/pokeAction";
import Loading from "./components/Loading";
import { GlobalStyles } from "./theme";
import styled from "styled-components";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log("mount");
    dispatch(pokeAction.getPokemonData());
  }, []);
  return (
    <>
      <GlobalStyles />
      <Loading />
    </>
  );
}

export default App;
