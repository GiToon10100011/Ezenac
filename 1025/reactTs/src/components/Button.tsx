import React from "react";
import styled from "styled-components";

interface IContainerProps {
  color: string;
}

const Container = styled.button<IContainerProps>`
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  background: ${({ color }) => color};
  color: #fff;
  cursor: pointer;
  transition: background 0.3s, opacity 0.3s;
  &:hover {
    background: ${({ color }) => color};
    opacity: 0.8;
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

interface IButtonProps {
  label?: string;
  onClick?: () => void;
  color?: string;
}

const Button = ({ label, onClick, color = "#ff5722" }: IButtonProps) => {
  return (
    <Container onClick={onClick} color={color}>
      {label}
    </Container>
  );
};

export default Button;
