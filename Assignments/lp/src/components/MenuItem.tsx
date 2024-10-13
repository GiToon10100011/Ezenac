import React, {
  useEffect,
  useRef,
  useState,
} from "react";
import styled, { CSSProperties } from "styled-components";
import { IBgProps } from "./MenuList";

const Wrapper = styled.div`
  position: absolute;

  width: 2000px;
  height: 2000px;
  margin-top: -2000px;
  margin-left: -2000px;
  border-right: 1px solid rgba(255, 255, 255, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  transform-origin: 100% 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 0 4px 14px rgba(255, 255, 255, 0.2);
  }
  audio {
    display: none;
  }
`;

const Title = styled.h4`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 30px;
  width: 400px;
  transform: skew(-60deg) translate(-200px, -30px) rotate(0deg) scale(-1);
  color: var(--sub-point-color);
  p {
    margin-top: 14px;
    font-size: 20px;
    color: #0c0504;
  }
`;

interface ImenuProps extends IBgProps {
  rotate: CSSProperties;
  title: string;
  index: number;
  audio: string;
  backgroundImgPath: string;
  rotationValue: number;
}

const MenuItem: React.FC<ImenuProps> = ({
  rotate,
  title,
  index,
  audio,
  backgroundImgPath,
  rotationValue,
  setMenuBg,
  setIsPlaylistOn,
  setRotation,
  setCurrentIdx,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [duration, setDuration] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => {
      if (audioRef?.current?.duration !== undefined) {
        const mins = Math.floor(audioRef?.current?.duration / 60);
        const secs = Math.floor(audioRef?.current?.duration % 60);
        const result = String(mins) + ":" + String(secs);
        setDuration(result);
      }
    }, 400);
  }, []);

  const handleSetAudio = () => {
    setCurrentIdx(index);
    setMenuBg(null);
    setIsPlaylistOn(false);
    setRotation({ type: "MANUAL", data: -rotationValue });
  };

  const handleBgSetup = () => {
    setMenuBg(backgroundImgPath);
  };

  const handleBgReset = () => {
    setMenuBg(null);
  };

  return (
    <Wrapper
      onMouseEnter={handleBgSetup}
      onMouseLeave={handleBgReset}
      onClick={handleSetAudio}
      style={rotate}
    >
      <Title>
        {title} <p>{duration}</p>
      </Title>
      <audio ref={audioRef} src={audio}></audio>
    </Wrapper>
  );
};

export default MenuItem;
