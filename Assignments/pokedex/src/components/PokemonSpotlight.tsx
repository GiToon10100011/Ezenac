import styled from "styled-components";
import { useAppSelector } from "../redux/hooks";
import { pokeAPI } from "../redux/api";
import { useEffect, useState } from "react";
import { IPokemonDetail } from "./PokemonList";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
  width: 35%;
  aspect-ratio: 5/4;
  margin-left: 30px;
`;

const Corners = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  img {
    position: absolute;
    object-fit: cover;
    width: 10%;
    &:nth-child(1) {
      top: 0;
      left: 0;
      transform: scale(-1, -1);
    }
    &:nth-child(2) {
      top: 0;
      right: 0;
      transform: scaleY(-1);
    }
    &:nth-child(3) {
      bottom: 0;
      left: 0;
      transform: scaleX(-1);
    }
    &:nth-child(4) {
      bottom: 0;
      right: 0;
    }
  }
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 75%;
  background: radial-gradient(
      circle at center,
      rgb(140, 140, 140) 2px,
      transparent 2px
    )
    rgb(188, 188, 188);
  background-size: 4px 4px;
  border-top: 2px solid ${({ theme }) => theme.colors.brightPoint};
  border-bottom: 2px solid ${({ theme }) => theme.colors.brightPoint};
`;

const Sprite = styled.img`
  width: 60%;
  object-fit: cover;
`;

const PokemonSpotlight = () => {
  const [pokemon, setPokemon] = useState<IPokemonDetail>();

  const selectedPokemon = useAppSelector(
    (state) => state.userReducer.selectedPokemon
  );

  const getPokemonSprites = async () => {
    const pokemon = await pokeAPI.get(`/pokemon/${selectedPokemon}`);
    setPokemon(pokemon.data);
  };

  useEffect(() => {
    getPokemonSprites();
  }, [selectedPokemon]);

  return (
    <Container>
      <Corners>
        <img src="/test.svg" alt="corner1" />
        <img src="/test.svg" alt="corner2" />
        <img src="/test.svg" alt="corner3" />
        <img src="/test.svg" alt="corner4" />
      </Corners>
      <ImageBox>
        <Sprite src={pokemon?.sprites.front_default} alt="" />
      </ImageBox>
    </Container>
  );
};

export default PokemonSpotlight;
