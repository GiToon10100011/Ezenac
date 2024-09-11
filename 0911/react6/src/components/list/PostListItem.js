import React from "react";
import styled from "styled-components";
import VideoList from "./VideoList";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Wrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 700px;
  height: 108px;
  padding: 0 16px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background: lightgrey;
  }
`;

const TitleText = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

const PostListItem = ({ post, onClick }) => {
  return (
    <Container>
      <VideoList
        onClick={onClick}
        thumbnailUrl={post.thumbnailUrl}
        videoUrl={post.videoUrl}
      />
      <Wrapper onClick={onClick}>
        <TitleText>{post["title"]}</TitleText>
      </Wrapper>
    </Container>
  );
};

export default PostListItem;
