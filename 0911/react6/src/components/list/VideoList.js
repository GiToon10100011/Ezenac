import React, { useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 168px;
  height: 108px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`;

const VideoContent = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;
const ImageContent = styled.img`
  width: 100%;
  height: 100%;
`;

const VideoList = ({ thumbnailUrl, videoUrl, onClick }) => {

  const handleMouseEnter = () => {
    if(videoRef.current){
      videoRef.current.style.opacity = 1;
      videoRef.current.play();
    }
  };
  const handleMouseLeave = () => {
    if(videoRef.current){
      videoRef.current.style.opacity = 0;
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const videoRef = useRef();
  const imgRef = useRef();
  console.log(videoRef);
  return (
    <Wrapper
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <VideoContent ref={videoRef} src={videoUrl} muted/>
      <ImageContent ref={imgRef} src={thumbnailUrl} />
    </Wrapper>
  );
};

export default VideoList;
