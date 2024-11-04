import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

interface IDraggableProps {
  todo: string;
  index: number;
}

const Card = styled.div`
  background: ${({ theme }) => theme.cardColor};
  width: 480px;
  border-radius: 8px;
  margin-bottom: 5px;
  padding: 10px;
`;

const DraggableCard = ({ todo, index }: IDraggableProps) => {
  console.log(todo);
  return (
    <Draggable key={String(todo)} draggableId={todo} index={index}>
      {(drag) => (
        <Card
          ref={drag.innerRef}
          {...drag.draggableProps}
          {...drag.dragHandleProps}
        >
          {todo}
        </Card>
      )}
    </Draggable>
  );
};

export default React.memo(DraggableCard);
