import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const PostList = ({ posts, onClickItem }) => {
  return (
    <Wrapper>
      <div>리엑트 컴포넌트 렌더링하기</div>
      <div>리엑트 컴포넌트 개념 소개</div>
      <div>리엑트와 자바스크립트의 상관관계</div>
      <div>제 이름은 염동훈입니다. 나이는 9824세입니다.</div>
    </Wrapper>
  );
};

export default PostList;
