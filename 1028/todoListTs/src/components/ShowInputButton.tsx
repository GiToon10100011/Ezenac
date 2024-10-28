import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;
  z-index: 1;
`;

interface IShowInputButton {
  showTodoInput: boolean;
  onClick: () => void;
}

const ShowInputButton = ({ showTodoInput, onClick }: IShowInputButton) => {
  return (
    <Container>
      <Button
        label={!showTodoInput ? "할 일 추가" : "창 닫기"}
        color={showTodoInput ? "crimson" : "black"}
        onClick={onClick}
      />
    </Container>
  );
};

export default ShowInputButton;
