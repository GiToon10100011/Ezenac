import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import MusicCard from "./MusicCard";
import { data } from "../data.json";

const deg = 30;

const Wrapper = styled(motion.div)<{ rotation: number }>`
  width: 36vw;
  height: 36vw;
  position: absolute;
  top: 210%;
  left: 50%;
  margin-left: -19vw;
  border: 1px solid;
  transform: rotate(${({ rotation }) => rotation}deg) scaleX(-1) scaleY(-1);
  transition: all 1s;
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
  fastForward: boolean;
  index: number;
}

export interface cardDataProps extends React.HTMLAttributes<HTMLDivElement> {}

const MusicList: React.FC<{
  rotation: number;
  fastForward: boolean;
  isPlaylistOn: boolean;
}> = ({ rotation, fastForward, isPlaylistOn }) => {
  return (
    <Wrapper
      style={{ filter: isPlaylistOn ? "blur(10px)" : "" }}
      rotation={rotation}
    >
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <MusicCard
            key={item.id}
            cardData={item}
            style={{
              transform: `rotate(${
                deg * index
              }deg) translateY(200vh) scaleX(-1) scaleY(-1)`,
            }}
            fastForward={fastForward}
            index={index}
          />
        </React.Fragment>
      ))}
    </Wrapper>
  );
};

export default MusicList;
