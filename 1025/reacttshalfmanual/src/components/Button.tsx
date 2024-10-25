import React from "react";
import styled from "styled-components";

const Container = styled.button`
  border: none;
  border-radius: 4px;
  background-color: #ff5722;
  color: #fff;
  padding: 8px 16px;
  cursor: pointer;
  &:hover {
    background-color: #ff7043;
  }
  &:active {
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.08);
  }
`;

interface IButtonProps {
  label: string;
  onClick: () => void;
}

const Button = ({ label, onClick }: IButtonProps) => {
  return <Container onClick={onClick}>{label}</Container>;
};

export default Button;
