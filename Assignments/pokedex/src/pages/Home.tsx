import React from "react";
import PokemonSpotlight from "../components/PokemonSpotlight";
import PokemonList from "../components/PokemonList";
import styled from "styled-components";
import ListBackground from "../components/ListBackground";

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Home = () => {
  return (
    <Container>
      <PokemonSpotlight />
      <PokemonList />
      <ListBackground />
    </Container>
  );
};

export default Home;
