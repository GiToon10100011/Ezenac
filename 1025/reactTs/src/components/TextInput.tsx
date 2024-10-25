import React from "react";
import styled from "styled-components";

const Input = styled.input`
  font-size: 18px;
  padding: 8px;
`;

interface ITextInputProps {
  value: string;
  setTodo: (data: string) => void;
}

const TextInput = ({ value, setTodo }: ITextInputProps) => {
  return (
    <>
      <Input value={value} onChange={(e) => setTodo(e.target.value)} />
    </>
  );
};

export default TextInput;
