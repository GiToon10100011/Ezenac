import React from "react";
import styled from "styled-components";

const Comment = styled.div`
  border: 1px solid grey;
  padding: 16px;
  width: calc(100% - 32px);
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: lightgrey;
  }
`;

const CommentListItem = ({ content }) => {
  return <Comment>{content}</Comment>;
};

export default CommentListItem;
