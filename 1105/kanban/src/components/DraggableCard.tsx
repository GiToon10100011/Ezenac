import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

interface IDraggableProps {
  todoId: number;
  todoText: string;
  index: number;
}

interface ICardProps {
  $isDragging: boolean;
}

const Card = styled.div<ICardProps>`
  /* background: ${({ theme }) => theme.cardColor}; */
  background: ${({ theme, $isDragging }) =>
    $isDragging ? "tomato" : theme.cardColor};
  width: 480px;
  border-radius: 8px;
  margin-bottom: 5px;
  padding: 10px;
  box-shadow: ${({ $isDragging }) =>
    $isDragging ? "0 2px 5px rgba(0, 0, 0, 0.5)" : "none"};
`;

const DraggableCard = ({ todoId, todoText, index }: IDraggableProps) => {
  return (
    <Draggable key={todoId} draggableId={String(todoId)} index={index}>
      {(drag, snapshot) => (
        <Card
          $isDragging={snapshot.isDragging}
          ref={drag.innerRef}
          {...drag.draggableProps}
          {...drag.dragHandleProps}
        >
          {todoText}
        </Card>
      )}
    </Draggable>
  );
};

export default React.memo(DraggableCard);
