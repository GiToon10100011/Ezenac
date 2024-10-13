import React, { useContext, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { cardDataProps } from "./MusicList";
import { motion } from "framer-motion";
import CircularAudioVisualizer from "./CircleAudioVisualizer";
import { resetContext } from "../App";
import { useSearchParams } from "react-router-dom";

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
  box-shadow: 0 0 140px rgba(0, 0, 0, 0.5);
  z-index: 2;
  transform: scaleY(-1);
`;

const CardContainer = styled.div<{
  background: string;
  rotate: string;
  fastForward: boolean;
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
  animation-duration: ${({ fastForward }) => (fastForward ? "5s" : "10s")};
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
  height: 100%;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
  color: white;
`;

const PlayButton = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  cursor: pointer;
  outline: none;
  &:active,
  &:focus {
    outline: none;
  }
  &:hover {
    background: #000;
    i {
      color: white;
    }
  }
`;

const AudioDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const AudioTitle = styled.h3`
  width: 500px;
  text-align: center;
  font-size: 60px;
`;
const AudioGame = styled.span``;
const AudioDate = styled.span`
  font-size: 20px;
`;
const AudioWebsite = styled(motion.a)`
  padding: 12px 24px;
  border-radius: 30px;
  transition: all 0.3s;
  background: white;
  color: black;
  i {
    transition: all 0.3s;
  }
  &:hover {
    padding-right: 24px;
    background: #000;
    color: #fff;
    i {
      transform: translateX(4px);
    }
  }
`;

const RightArrowIcon = styled(motion.i)`
  margin-left: 4px;
  font-size: 14px;
  transition: all 0.3s;
`;

const MusicCard = ({ cardData, style, fastForward, index }: cardDataProps) => {
  const currentIdx = useSearchParams()[0].get("index");

  const reset = useContext(resetContext);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (reset?.resetAll) {
      setIsPlaying(false);
    }
  }, [reset?.resetAll]);

  const handleOnPlay = () => {
    setIsPlaying((current) => !current);
    reset?.setResetAll(false);
  };

  const keyPlayToggle = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.code === "Space" && index === Number(currentIdx)) {
      setIsPlaying((current) => !current);
      reset?.setResetAll(false);
    }
  };

  const preventSpace = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.code === "Space") e.preventDefault();
  };

  console.log(rotation);

  return (
    <Wrapper tabIndex={0} onKeyUp={keyPlayToggle} style={style}>
      <CardContainer
        fastForward={fastForward}
        background={cardData.albumCoverPath}
        rotate={String(isPlaying)}
      ></CardContainer>
      <CardContents>
        <PlayButton onKeyUp={preventSpace} onClick={handleOnPlay}>
          <i
            className={isPlaying ? "fa-solid fa-pause" : "fa-solid fa-play"}
          ></i>
        </PlayButton>
        <AudioDetails>
          <AudioDate>{cardData.date}</AudioDate>
          <AudioTitle>{cardData.title}</AudioTitle>
          <AudioGame>{cardData.game}</AudioGame>
        </AudioDetails>
        <AudioWebsite href={cardData.website} target="_blank">
          More Details
          <RightArrowIcon className="fa-solid fa-arrow-right"></RightArrowIcon>
        </AudioWebsite>
      </CardContents>
      <CircularAudioVisualizer
        key={`${cardData.id}-visualizer`}
        audioUrl={cardData.audio}
        albumArt={"/ydhdot.jpg"}
        artistName={cardData.game}
        songName={cardData.title}
        isAudioPlaying={isPlaying}
        setIsAudioPlaying={setIsPlaying}
        fastForward={fastForward}
        index={index}
      />
    </Wrapper>
  );
};

export default MusicCard;
