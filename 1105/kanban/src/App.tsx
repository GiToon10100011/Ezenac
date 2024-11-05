import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { todoAtom } from "./atoms";
import Board from "./components/Board";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul, li{
    list-style: none;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  body{
    background: ${({ theme }) => theme.bgColor};
    color: #000;
  }
`;

const Wrapper = styled.main`
  width: 1200px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const Boards = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;

function App() {
  const [todos, setTodos] = useRecoilState(todoAtom);
  const onDragEnd = (info: DropResult) => {
    console.log(info);
    const { destination, source, draggableId } = info;
    if (!destination) return;
    if (destination.droppableId === source.droppableId) {
      setTodos((prev) => {
        const copyTodos = [...prev[source.droppableId]];
        const taskObj = copyTodos[source.index];
        copyTodos.splice(source.index, 1);
        copyTodos.splice(destination.index, 0, taskObj);
        return {
          ...prev,
          [source.droppableId]: copyTodos,
        };
      });
    }

    if (destination.droppableId !== source.droppableId) {
      setTodos((prev) => {
        const sourceBoard = [...prev[source.droppableId]];
        const destinationBoard = [...prev[destination.droppableId]];
        const taskObj = sourceBoard[source.index];

        sourceBoard.splice(source.index, 1);
        destinationBoard.splice(destination.index, 0, taskObj);

        return {
          ...prev,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destinationBoard,
        };
      });
    }
    // if (destination?.droppableId === source.droppableId) {
    //   setTodos((prev) => {
    //     const copyTodos = [...prev[source.droppableId]];
    //     copyTodos.splice(source.index, 1);
    //     copyTodos.splice(destination.index, 0, draggableId);
    //     return {
    //       ...prev,
    //       [source.droppableId]: copyTodos,
    //     };
    //   });
    // }

    // if (destination?.droppableId !== source.droppableId) {
    //   setTodos((prev) => {
    //     const sourceBoard = [...prev[source.droppableId]];
    //     const destinationBoard = [...prev[destination?.droppableId]];
    //     sourceBoard.splice(source.index, 1);
    //     destinationBoard.splice(destination.index, 0, draggableId);
    //     return {
    //       ...prev,
    //       [source.droppableId]: sourceBoard,
    //       [destination?.droppableId]: destinationBoard,
    //     };
    //   });
    // }
  };
  return (
    <>
      <GlobalStyles />
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
          <Boards>
            {Object.keys(todos).map((status) => (
              <Board key={status} todos={todos[status]} boardId={status} />
            ))}
          </Boards>
        </Wrapper>
      </DragDropContext>
    </>
  );
}

export default App;

//누군가가 어디론가 이동중에 있다는 사실을 브라우저에게 알려야함.
//snapshot
