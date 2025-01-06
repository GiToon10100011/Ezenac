import { useEffect } from "react";
import { useAppDispatch } from "./redux/hooks";
import pokeAction from "./redux/actions/pokeAction";
import { GlobalStyles } from "./theme";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log("mount");
    dispatch(pokeAction.getPokemonData());
  }, []);
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
