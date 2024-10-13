import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";
import { data } from "../data.json";
import MenuItem from "./MenuItem";
import { IrotationActionObject } from "../App";

const deg = 30;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  /* left: -300px; */
  width: 80vw;
  height: 80vw;
  border-radius: 50%;
  transition: all 1s;
  overflow: hidden;
`;

export interface IBgProps {
  menuBg: string | null;
  setMenuBg: Dispatch<SetStateAction<string | null>>;
  setIsPlaylistOn: Dispatch<SetStateAction<boolean>>;
  setRotation: React.Dispatch<IrotationActionObject>;
  setCurrentIdx: React.Dispatch<SetStateAction<number>>;
}

const MenuList: React.FC<IBgProps> = ({
  menuBg,
  setMenuBg,
  setIsPlaylistOn,
  setRotation,
  setCurrentIdx,
}) => {
  const [menuRotation, setMenuRotation] = useState(0);

  const handleOnMouseScroll = (e: WheelEvent) => {
    if (e.deltaY > 0) setMenuRotation((current) => current + 30);
    else setMenuRotation((current) => current - 30);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleOnMouseScroll);

    return () => removeEventListener("wheel", handleOnMouseScroll);
  }, []);

  return (
    <Wrapper
      style={{
        transform:
          menuRotation !== 0 ? `rotate(${menuRotation}deg)` : "rotate(0deg)",
      }}
    >
      {data.map((item, index) => (
        <MenuItem
          key={item.id}
          {...item}
          rotate={{
            transform: `rotate(${deg * index}deg) skew(60deg) scale(-1)`,
          }}
          index={index}
          menuBg={menuBg}
          setMenuBg={setMenuBg}
          rotationValue={deg * index}
          setIsPlaylistOn={setIsPlaylistOn}
          setRotation={setRotation}
          setCurrentIdx={setCurrentIdx}
        />
      ))}
    </Wrapper>
  );
};

export default MenuList;
