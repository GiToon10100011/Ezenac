import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";
import { MdCatchingPokemon } from "react-icons/md";
import { LuChevronsLeft } from "react-icons/lu";
import { LuChevronsRight } from "react-icons/lu";
import { HiMiniArrowUturnLeft } from "react-icons/hi2";

const Container = styled.footer`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
  background: linear-gradient(
    to top,
    #111111 0%,
    #2b2b2b 60%,
    #4a4a4a 80%,
    #666666 100%
  );
  height: 60px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 2px solid #000;
`;

const LeftArea = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const Search = styled.button`
  width: 200px;
  position: relative;
  display: flex;
  justify-content: center;
  gap: 20px;
  font-size: 24px;
  background: transparent;
  border: none;
  color: #ccc;
  padding: 10px;
  padding-left: 14px;
  font-family: ${({ theme }) => theme.fonts.bits};
  text-transform: uppercase;
  letter-spacing: 1.2px;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: #ccc;
    z-index: -1;
    clip-path: polygon(10% 0, 100% 0, 100% 100%, 10% 100%, 0 55%);
  }

  &::after {
    content: "";
    position: absolute;
    inset: 2px;
    background: #2b2b2b;
    z-index: -1;
    clip-path: polygon(10% 0, 100% 0, 100% 100%, 10% 100%, 0 55%);
  }
`;

const MyFavs = styled(Search)``;

const RightArea = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
`;

const ScrollControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  svg {
    cursor: pointer;
  }
`;

const FavControls = styled(ScrollControls)`
  gap: 14px;
  color: #ccc;
  font-size: 20px;
  cursor: pointer;
`;

const BackControls = styled(FavControls)``;

const FavContainer = styled.div`
  position: relative;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: 2px solid #666;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    width: 80%;
    height: 80%;
    transform: translate(-50%, -50%);
    background: #ddd;
  }
`;

const Footer = () => {
  return (
    <Container>
      <LeftArea>
        <Search>
          <IoSearchOutline />
          Search
        </Search>
        <MyFavs>
          <MdCatchingPokemon />
          Favorites
        </MyFavs>
      </LeftArea>
      <RightArea>
        <ScrollControls>
          <LuChevronsLeft size={60} color="#888" />
          <LuChevronsRight size={60} color="#888" />
        </ScrollControls>
        <FavControls>
          <FavContainer>
            <MdCatchingPokemon color={"#EE5054"} size={60} />
          </FavContainer>
          Add to Favorites
        </FavControls>
        <BackControls>
          <HiMiniArrowUturnLeft color="dodgerblue" strokeWidth={2} size={30} />
          Return
        </BackControls>
      </RightArea>
    </Container>
  );
};

export default Footer;
