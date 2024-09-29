import React from "react";
import styled from "styled-components";
import MusicCard from "./MusicCard";
import { data } from "../data.json";

const Wrapper = styled.div`
  width: 700px;
  height: 700px;
  position: absolute;
  top: 140%;
  left: 50%;
  border: 1px solid;
  transform: translate(-50%, -50%);
`;

interface cardDataProps {
  audio: string;
  title: string;
  game: string;
  date: string;
  website: string;
}

const MusicList: React.FC = () => {
  return (
    <Wrapper>
      {data.map((item: cardDataProps, index) => (
        <MusicCard key={index} cardData={item} />
      ))}
    </Wrapper>
  );
};

export default MusicList;
