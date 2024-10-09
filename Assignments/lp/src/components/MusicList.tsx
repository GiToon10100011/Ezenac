import React, { SetStateAction, useEffect } from "react";
import styled from "styled-components";
import MusicCard from "./MusicCard";
import { data } from "../data.json";

const deg = 30;

const Wrapper = styled.div`
  width: 700px;
  height: 700px;
  margin-top: 210vh;
  margin-left: 33.3333333vw;
  border: 1px solid;
  transform: rotate(30deg);
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
              transform: `rotate(${deg * index}deg) translateY(200vh) `,
            }}
          />
        </React.Fragment>
      ))}
    </Wrapper>
  );
};

export default MusicList;
