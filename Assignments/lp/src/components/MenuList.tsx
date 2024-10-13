import React, { Dispatch, SetStateAction, useEffect } from "react";
import styled from "styled-components";
import { data } from "../data.json";
import MenuItem from "./MenuItem";

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
  transform: rotate(0deg);
  transition: all 1s;
  overflow: hidden;
`;

export interface IBgProps {
  menuBg: string | null;
  setMenuBg: Dispatch<SetStateAction<string | null>>;
}

const MenuList: React.FC<IBgProps> = ({ menuBg, setMenuBg }) => {

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      console.log(e);
    });
  }, []);

  return (
    <Wrapper>
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
          rotationValue={deg*index}
        />
      ))}
    </Wrapper>
  );
};

export default MenuList;
