import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Label = styled.div`
  font-size: 18px;
  flex: 1;
`;

interface ITodoItemProps {
  label: string;
  onDelete?: () => void;
}

const TodoItem = ({ label, onDelete }: ITodoItemProps) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Button label="삭제" onClick={onDelete} />
    </Container>
  );
};

export default TodoItem;
