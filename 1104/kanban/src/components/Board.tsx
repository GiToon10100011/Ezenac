import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DraggableCard from "./DraggableCard";

interface IBoardProps {
  todos: string[];
  boardId: string;
}

const Wrapper = styled.div`
  background: ${({ theme }) => theme.boardColor};
  padding: 20px 10px;
  padding-top: 30px;
  border-radius: 8px;
  width: 100%;
  height: 100%;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  text-transform: uppercase;
  font-size: 18px;
`;

const Board = ({ todos, boardId }: IBoardProps) => {
  return (
    <>
      <Wrapper>
        <Title>{boardId}</Title>
        <Droppable droppableId={boardId}>
          {(drop) => (
            <div ref={drop.innerRef} {...drop.droppableProps}>
              {todos.map((todo, index) => (
                <DraggableCard key={index} todo={todo} index={index} />
              ))}
              {drop.placeholder}
            </div>
          )}
        </Droppable>
      </Wrapper>
    </>
  );
};

export default Board;
