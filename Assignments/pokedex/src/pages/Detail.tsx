import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { pokeAPI } from "../redux/api";
import { IPokemonDetail, IPokemonPartialData } from "../components/PokemonList";
import { formatOrderNumber, formatTypeSprites } from "../utils";
import { FaChevronLeft } from "react-icons/fa6";

interface IPokemonSpeciesData {
  base_happiness: number;
  capture_rate: number;
  color: IPokemonPartialData;
  egg_groups: IPokemonPartialData[];
  evolution_chain: { url: string };
  evolves_from_species: IPokemonPartialData;
  flavor_text_entries: {
    flavor_text: string;
    language: IPokemonPartialData;
    version: IPokemonPartialData;
  }[];
  form_descriptions: object[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: {
    genus: string;
    language: IPokemonPartialData;
  }[];
  generation: IPokemonPartialData;
  habitat: IPokemonPartialData;
  names: {
    language: IPokemonPartialData;
    name: string;
  }[];
  order: number;
  pal_park_encounters: object[];
  pokedex_numbers: object[];
  shape: IPokemonPartialData;
  varieties: {
    is_default: boolean;
    pokemon: IPokemonPartialData;
  }[];
}

interface IPokemonEvolutionTriggers {
  gender: number;
  held_item: IPokemonPartialData;
  item: IPokemonPartialData;
  known_move: IPokemonPartialData;
  known_move_type: IPokemonPartialData;
  location: IPokemonPartialData;
  min_affection: IPokemonPartialData;
  min_beauty: IPokemonPartialData;
  min_happiness: IPokemonPartialData;
  min_level: IPokemonPartialData;
  needs_overworld_rain: boolean;
  party_species: IPokemonPartialData;
  party_type: IPokemonPartialData;
  relative_physical_stats: IPokemonPartialData;
  time_of_day: string;
  trade_species: IPokemonPartialData;
  trigger: IPokemonPartialData;
  turn_upside_down: boolean;
}

interface IChain {
  evolution_details: IPokemonEvolutionTriggers[];
  evolves_to: IChain[];
  is_baby: boolean;
  species: IPokemonPartialData;
}

interface IPokemonEvolutionChain {
  baby_trigger_item: IPokemonPartialData;
  chain: IChain;
  id: number;
}

const Container = styled.main`
  position: relative;
  padding: 120px 0;
  margin: 0 30px;
  height: 100vh;
  overflow: hidden;
`;

const PokeBackground = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  background: url("/assets/pokeDetailBackground.svg") center top/contain
    no-repeat;
`;

const Sprite = styled.img`
  position: absolute;
  width: 20%;
  aspect-ratio: 1;
  top: 16%;
  left: 8%;
  transform: translateY(-50%);
`;

const FileTop = styled.img`
  position: absolute;
  top: -15%;
  left: -4px;
  height: 15%;
  object-fit: cover;
`;

const PokeInfoBox = styled.div`
  position: absolute;
  right: 10%;
  width: 40%;
  height: 40%;
  border: 4px solid;
  background: #e7e7e7;
  display: flex;
  flex-direction: column;
  gap: 4px;
  ${FileTop} {
    height: 10%;
    top: -10%;
    left: -4px;
  }
`;

const PokeName = styled.span`
  display: block;
  width: 100%;
  text-align: center;
  text-transform: capitalize;
`;

const InfoBoxHeading = styled.p`
  display: flex;
  align-items: center;
  background: #d3d3d3;
  padding: 20px;
  font-size: 48px;
`;

const PreEvolutionBox = styled.div`
  position: absolute;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 50%;
  bottom: 10px;
  margin-right: 30px;
  span {
    width: 100%;
    position: absolute;
    text-transform: capitalize;
    font-size: 28px;
    bottom: 0;
  }
`;

const EvolutionTrigger = styled.div`
  position: absolute;
  top: 20%;
  left: -120%;
  width: 140%;
  height: 40px;
  clip-path: polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%);
  background: #202020;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    position: absolute;
    right: 6px;
    scale: -1;
  }
`;

const TriggerContent = styled.div`
  span {
    position: absolute;
    color: ${({ theme }) => theme.colors.text};
    &:first-child{
      top: 0;
      left: 0;
    }

    &:last-child{
      right: 0;
      bottom: 0;
    }
  }
`;

const PokeMiniInfoBox1 = styled(PokeInfoBox)`
  right: auto;
  left: -34%;
  top: 25%;
  width: 50%;
  height: 60%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(to right, #c9c9c9 4px, transparent 4px),
    linear-gradient(to bottom, #c9c9c9 4px, transparent 4px);
  background-size: 24px 24px;
  background-color: #e7e7e7;
  ${InfoBoxHeading} {
    font-size: 32px;
  }
  ${Sprite} {
    position: relative;
    top: auto;
    left: auto;
    transform: none;
    width: 100%;
  }
`;
const PokeMiniInfoBox2 = styled(PokeMiniInfoBox1)`
  left: auto;
  right: -20%;
  top: auto;
  bottom: -20%;
  width: 40%;
`;

const PokeNumber = styled.span`
  &::before {
    content: "•";
    margin-right: 10px;
  }
`;

const PokeGenus = styled(PokeName)`
  font-size: 42px;
  color: #4c4c4e;
`;

const PokeTypes = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-image: linear-gradient(to right, #e7e7e7 2px, transparent 2px),
    linear-gradient(to bottom, #e7e7e7 2px, transparent 2px);
  background-size: 10px 10px;
  background-color: #c9c9c9;
`;

const PokeType = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 40%;
  }
`;

const PokeSpecs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 20px;
`;
const Height = styled.p`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  font-size: 40px;
  span {
    z-index: 1;
  }
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 130%;
    height: 10px;
    border-radius: 20px;
    background: #d3d3d3;
    z-index: 1;
  }
`;
const Weight = styled(Height)``;

const PokeDescBox = styled.section`
  position: absolute;
  bottom: 80px;
  width: 100%;
  height: 30%;
  background: #2a2a2a;
  border-top: 4px solid #000;
  display: flex;
  align-items: center;
  padding: 0 30px;
  font-size: 36px;
  color: #f0f5f8;
  line-height: 1.5;
`;

const Detail = () => {
  const { pokemonId } = useParams();

  const [pokemonData, setPokemonData] = useState<IPokemonDetail>();

  const [pokemonSpecies, setPokemonSpecies] = useState<IPokemonSpeciesData>();

  const [pokemonEvolutionData, setPokemonEvolutionData] =
    useState<IPokemonEvolutionChain>();

  const [preEvolutionPokemon, setPreEvolutionPokemon] =
    useState<IPokemonDetail>();

  const [nextEvolutionPokemon, setNextEvolutionPokemon] = useState();

  const fetchPokemon = async () => {
    const targetPokemon = await pokeAPI.get(`/pokemon/${pokemonId}`);
    setPokemonData(targetPokemon.data);
    const pokemonSpecies = await fetch(targetPokemon.data?.species?.url)
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.error(error));
    setPokemonSpecies(pokemonSpecies);
    const evolutionData = await fetch(pokemonSpecies.evolution_chain.url)
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.error(error));
    setPokemonEvolutionData(evolutionData);
    const preEvolution = await pokeAPI.get(
      `/pokemon/${pokemonSpecies.evolves_from_species.name}`
    );
    setPreEvolutionPokemon(preEvolution.data);
  };

  useEffect(() => {
    fetchPokemon();
  }, [pokemonId]);

  console.log(
    pokemonData,
    pokemonSpecies,
    preEvolutionPokemon,
    pokemonEvolutionData
  );

  const resolveRecursiveEvolution = (arr: IChain['evolves_to']) => {

  }

  return (
    <Container>
      <PokeBackground>
        {pokemonData && (
          <>
            {" "}
            <Sprite src={pokemonData?.sprites.front_default} />
            <PokeInfoBox>
              <PokeMiniInfoBox1>
                <FileTop src="/assets/fileTop.svg" />
                <InfoBoxHeading>
                  <span>Evolves From: </span>
                </InfoBoxHeading>
                <PreEvolutionBox>
                  <EvolutionTrigger>
                    <FaChevronLeft color="#737373" size={40} />
                    <TriggerContent>
                      <span>Evolves By: </span>
                      <span>
                        {
                          pokemonEvolutionData?.chain.evolves_to[
                            pokemonEvolutionData?.chain.evolves_to.length - 1
                          ].species.name
                        }
                      </span>
                    </TriggerContent>
                  </EvolutionTrigger>
                  <Sprite src={preEvolutionPokemon?.sprites.front_default} />
                  <span>{preEvolutionPokemon && preEvolutionPokemon.name}</span>
                </PreEvolutionBox>
              </PokeMiniInfoBox1>
              <FileTop src="/assets/fileTop.svg" />
              <InfoBoxHeading>
                <PokeNumber>
                  {pokemonData && formatOrderNumber(pokemonData.order)}
                </PokeNumber>
                <PokeName>{pokemonData && pokemonData.name}</PokeName>
              </InfoBoxHeading>
              <PokeGenus>
                {pokemonSpecies &&
                  pokemonSpecies.genera.find(
                    (data) => data.language.name === "en"
                  )?.genus}
              </PokeGenus>
              <PokeTypes>
                {formatTypeSprites(pokemonData.types).map((sprite, index) => (
                  <PokeType key={index}>
                    <img src={sprite} />
                  </PokeType>
                ))}
              </PokeTypes>
              <PokeSpecs>
                <Height>
                  <span>HT</span>
                  <span>{pokemonData.height * 10}cm</span>
                </Height>
                <Weight>
                  <span>WT</span>
                  <span>{pokemonData.weight / 10}kg</span>
                </Weight>
              </PokeSpecs>
              <PokeMiniInfoBox2>
                <FileTop src="/assets/fileTop.svg" />
              </PokeMiniInfoBox2>
            </PokeInfoBox>
          </>
        )}
      </PokeBackground>
      <PokeDescBox>
        <FileTop src="/assets/fileTop.svg" />
        <p>
          {pokemonSpecies &&
            pokemonSpecies?.flavor_text_entries.find(
              (desc) => desc.language.name === "en"
            )?.flavor_text}{" "}
          <br />
          This pokemon was originated from{" "}
          {pokemonSpecies && (
            <>
              {pokemonSpecies.generation.name.split("-")[0] +
                " " +
                pokemonSpecies.generation.name.split("-")[1].toUpperCase()}
              . <br />
              It is also known as the name{" "}
              {pokemonSpecies.names.find((name) => name.language.name === "ja")
                ?.name + "(JP)"}{" "}
              or{" "}
              {pokemonSpecies.names.find((name) => name.language.name === "ko")
                ?.name + "(KR)"}
              .
            </>
          )}
        </p>
      </PokeDescBox>
    </Container>
  );
};

export default Detail;
