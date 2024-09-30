import React from "react";
import styled from "styled-components";
import MusicCard from "./MusicCard";
import { data } from "../data.json";

const deg = 30;

const Wrapper = styled.div`
  position: absolute;
  width: 700px;
  height: 700px;
  top: 200%;
  left: 50%;
  border: 1px solid;
  transform: translate(-50%, -50%);
`;

export interface cardDataProps {
  cardData: {
    audio: string;
    title: string;
    game: string;
    date: string;
    website: string;
  };
}

export interface cardDataProps extends React.HTMLAttributes<HTMLDivElement> {}

const MusicList: React.FC = () => {
  return (
    <Wrapper>
      {data.map((item, index) => (
        <MusicCard
          key={index}
          cardData={item}
          style={{ transform: `rotate(${deg * index}deg) translateY(-150vh)` }}
        />
      ))}
    </Wrapper>
  );
};

export default MusicList;
