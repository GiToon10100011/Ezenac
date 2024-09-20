import React from "react";
import styled from "styled-components";

const EmotionContent = styled.div`
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  & img {
    width: 50%;
    margin-bottom: 10px;
  }
  & span {
    font-size: 14px;
  }
  &.EmotionItem_off {
    background: #cecece;
  }
  &.EmotionItem_on_1 {
    background: #64e960;
    color: #fff;
  }
  &.EmotionItem_on_2 {
    background: greenyellow;
    color: #000;
  }
  &.EmotionItem_on_3 {
    background: gold;
    color: #000;
  }
  &.EmotionItem_on_4 {
    background: orange;
    color: #fff;
  }
  &.EmotionItem_on_5 {
    background: crimson;
    color: #fff;
  }
`;

const EmotionItem = ({ id, img, isSelected, name, onClick }) => {
  const handleOnClick = () => {
    onClick(id);
  };
  return (
    <EmotionContent
      className={isSelected ? `EmotionItem_on_${id}` : `EmotionItem_off`}
      onClick={handleOnClick}
    >
      <img src={img} alt={`emotion${id}`} />
      <span>{name}</span>
    </EmotionContent>
  );
};

export default EmotionItem;
