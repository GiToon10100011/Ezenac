import React, { useContext, useState } from "react";
import styled, { keyframes } from "styled-components";
import { cardDataProps } from "./MusicList";
import { audioPlayContext } from "./CircleAudioVisualizer";

const rotation = keyframes`
  from{
    transform: rotate(0);
  }

  to{
    transform: rotate(3600deg);
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transform-origin: center bottom;
  box-shadow: 0 0 140px rgba(0, 0, 0, 0.5);
  /* border: 5px solid rgba(255, 255, 255); */
  z-index: 2;
`;

const CardContainer = styled.div<{
  background: string;
  rotate: string;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${({ background }) => background}) center/cover no-repeat;
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.5);
  animation: rotation linear 10s 0.6s infinite;
  animation-play-state: ${({ rotate }) =>
    rotate === "true" ? "running" : "paused"};
  &::before,
  &::after {
    content: "";
    width: inherit;
    height: inherit;
    border-radius: inherit;
    position: absolute;
    top: 0;
    left: 0;
    background-image: inherit;
    background-position: inherit;
    background-size: inherit;
    transform-origin: center center;
  }
  &::before {
    transform: scale(1.04);
    filter: blur(20px) brightness(1.6);
  }
`;

const CardContents = styled.div`
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
  color: white;
`;

const AudioTitle = styled.h3``;
const AudioGame = styled.span``;
const AudioDate = styled.span``;
const AudioWebsite = styled.a``;

const MusicCard = ({ cardData, style }: cardDataProps) => {
  const { isPlaying } = useContext(audioPlayContext);

  return (
    <Wrapper style={style}>
      <CardContainer
        background={cardData.albumCoverPath}
        rotate={String(isPlaying)}
      ></CardContainer>
      <CardContents>
        <AudioTitle>{cardData.title}</AudioTitle>
        <AudioGame>{cardData.game}</AudioGame>
        <AudioDate>{cardData.date}</AudioDate>
        <AudioWebsite href={cardData.website} target="_blank">
          Check out the Game
        </AudioWebsite>
      </CardContents>
    </Wrapper>
  );
};

export default MusicCard;
