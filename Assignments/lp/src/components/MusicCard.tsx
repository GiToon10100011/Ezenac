import React from "react";
import styled from "styled-components";
import { cardDataProps } from "./MusicList";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid;
  border-radius: 50%;
  transform-origin: center bottom;
`;

const MusicCard = ({ cardData, style }: cardDataProps) => {
  console.log(style)
  return <Wrapper style={style}></Wrapper>;
};

export default MusicCard;
