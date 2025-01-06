import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { IPokemonDetail } from "./PokemonList";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { MdCatchingPokemon } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const SpriteContainer = styled.div`
  display: flex;
  align-items: center;
  svg {
    transition: all 0.3s;
  }
`;

const Sprite = styled.img`
  width: 90px;
  object-fit: cover;
  transition: all 0.3s;
`;

const FavContainer = styled.div`
  position: relative;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  border: 2px solid #666;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    width: 80%;
    height: 80%;
    transform: translate(-50%, -50%);
    background: #ddd;
  }
`;

const PokeId = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
  text-transform: capitalize;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.text};
  text-shadow: 3px 3px 4px rgb(128, 128, 128);
  transition: all 0.3s;
`;

const PokeName = styled(PokeId)``;

const Container = styled.li`
  display: flex;
  gap: 40px;
  align-items: center;
  width: 100%;
  min-height: 60px;
  padding-left: 40px;
  background: #000;
  clip-path: polygon(5% 0, 100% 0, 95% 100%, 5% 100%, 0 55%);
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background: #4b752b;
    ${SpriteContainer} {
      ${Sprite} {
        filter: brightness(1.2);
      }
      svg {
        fill: #d1f89d;
      }
      .left-arr {
        transform: translateX(10px);
      }
      .right-arr {
        transform: translateX(-10px);
      }
    }
    ${PokeId} {
      color: #b5e47c;
      text-shadow: 3px 3px 4px rgb(58, 98, 9);
      ${FavContainer} {
        border: 2px solid #b5e47c;
      }
    }
  }
`;

const PokemonItem = ({ sprites, order, name }: IPokemonDetail) => {
  const dispatch = useAppDispatch();

  const theme = useTheme();

  const formatOrderNumber = (num: number): string => {
    return String(num).padStart(3, "0");
  };

  const selectPokemon = (name: string) => {
    dispatch({ type: "SELECT", payload: name });
  };

  return (
    <>
      <Container onMouseEnter={() => selectPokemon(name)}>
        <SpriteContainer>
          <FaChevronLeft
            className="left-arr"
            color={theme.colors.darkPoint}
            size={36}
          />
          <Sprite src={sprites.front_default ?? "/MissingNo..webp"} alt="" />
          <FaChevronRight
            className="right-arr"
            color={theme.colors.darkPoint}
            size={36}
          />
        </SpriteContainer>
        <PokeId className=" poke-fav">
          <FavContainer>
            <MdCatchingPokemon color={"#EE5054"} />
          </FavContainer>
          {formatOrderNumber(order)}
        </PokeId>
        <PokeName>{name}</PokeName>
      </Container>
    </>
  );
};

export default PokemonItem;
