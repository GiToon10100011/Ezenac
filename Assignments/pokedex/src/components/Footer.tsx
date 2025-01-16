import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";
import { MdCatchingPokemon } from "react-icons/md";
import { LuChevronsLeft } from "react-icons/lu";
import { LuChevronsRight } from "react-icons/lu";
import { HiMiniArrowUturnLeft } from "react-icons/hi2";
import { useMatch, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

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

const LeftArea = styled.div<{ $mode: string }>`
  display: flex;
  gap: 20px;
  align-items: center;
  .${({ $mode }) => $mode} {
    filter: brightness(1.5);
    &::before {
      background: #fff;
    }
  }
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
    transition: background 0.3s;
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

const SlotMenu = styled(Search)`
  width: 100px;
  transition: all 0.3s;
  &::before,
  &::after {
    clip-path: polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%);
  }
`;

const Footer = () => {
  const detailMatch = useMatch("/pokemon/:pokemonId");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const currentMode = useAppSelector((state) => state.userReducer.menuMode);

  const switchSlots = (mode: string) => {
    dispatch({ type: "SLOT_MENU", payload: { mode } });
  };

  return (
    <Container>
      <LeftArea $mode={currentMode}>
        {!detailMatch ? (
          <>
            <Search>
              <IoSearchOutline />
              Search
            </Search>
            <MyFavs>
              <MdCatchingPokemon />
              Favorites
            </MyFavs>
          </>
        ) : (
          <>
            <SlotMenu
              className={currentMode === "info" ? currentMode : undefined}
              onClick={() => switchSlots("info")}
            >
              Info
            </SlotMenu>
            <SlotMenu
              className={currentMode === "forms" ? currentMode : undefined}
              onClick={() => switchSlots("forms")}
            >
              Forms
            </SlotMenu>
            <SlotMenu
              className={currentMode === "stats" ? currentMode : undefined}
              onClick={() => switchSlots("stats")}
            >
              Stats
            </SlotMenu>
          </>
        )}
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
        <BackControls onClick={() => navigate(-1)}>
          <HiMiniArrowUturnLeft color="dodgerblue" strokeWidth={2} size={30} />
          Return
        </BackControls>
      </RightArea>
    </Container>
  );
};

export default Footer;
