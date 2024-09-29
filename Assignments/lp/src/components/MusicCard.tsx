import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid;
`;

const MusicCard: React.FC = (props) => {
  console.log(props)
  return <Wrapper></Wrapper>;
};

export default MusicCard;
