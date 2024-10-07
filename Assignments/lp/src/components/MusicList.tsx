import React, { SetStateAction, useEffect } from "react";
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
  transform-origin: center;
`;

export interface cardDataProps {
  cardData: {
    audio: string;
    title: string;
    game: string;
    date: string;
    website: string;
    id: string;
    relatedId: string;
    albumCoverPath: string;
    backgroundImgPath: string;
  };
}

export interface cardDataProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface IaudioPlayContext {
  isAudioPlaying: boolean;
  setIsAudioPlaying: React.Dispatch<SetStateAction<boolean>>;
}

const MusicList: React.FC = () => {
  return (
    <Wrapper>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <MusicCard
            key={item.id}
            cardData={item}
            style={{
              transform: `rotate(${deg * index}deg) translateY(-150vh)`,
            }}
          />
        </React.Fragment>
      ))}
    </Wrapper>
  );
};

export default MusicList;
