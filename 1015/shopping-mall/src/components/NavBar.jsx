import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin-bottom: 20px;
`;

const HeaderTop = styled.div`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  gap: 20px;
`;

const SearchIcon = styled.div`
  input {
    padding: 4px 6px;
    border: none;
    border-bottom: 1px solid #000;
    width: 150px;
    margin-left: 4px;
    &::placeholder {
      transition: all 0.3s;
    }
    &:focus {
      outline: none;
      &::placeholder {
        opacity: 0;
      }
    }
  }
`;

const Logo = styled.div`
  width: 200px;
  height: 50px;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const LoginAuthMenu = styled.div`
  cursor: pointer;
  span {
    margin-left: 10px;
  }
`;

const MenuArea = styled.div`
  ul {
    display: flex;
    gap: 20px;
  }
`;

const menuList = [
  "여성",
  "남성",
  "추천",
  "브랜드",
  "발매",
  "랭킹",
  "세일",
  "무탠 슈퍼세일",
];

const NavBar = ({ authentication, setAuthentication }) => {
  const navigate = useNavigate();
  const handleOnSearch = (e) => {
    if (e.key === "Enter") {
      navigate(`?q=${e.target.value}`);
    }
  };
  return (
    <Wrapper>
      <HeaderTop>
        <SearchIcon>
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            placeholder="제품검색"
            name=""
            id=""
            onKeyUp={handleOnSearch}
          />
        </SearchIcon>
        {authentication ? (
          <LoginAuthMenu
            onClick={() => {
              setAuthentication(false);
              navigate("/login");
            }}
          >
            <FontAwesomeIcon icon={faUser} />
            <span>로그아웃</span>
          </LoginAuthMenu>
        ) : (
          <LoginAuthMenu onClick={() => navigate("/login")}>
            <FontAwesomeIcon icon={faUser} />
            <span>로그인</span>
          </LoginAuthMenu>
        )}
      </HeaderTop>
      <Logo>
        <Link to={"/"}>
          <img
            src="https://www.shinailbo.co.kr/news/photo/202106/1419496_624961_3416.jpg"
            alt="musinsa-logo"
          />
        </Link>
      </Logo>
      <MenuArea>
        <ul>
          {menuList.map((menu, index) => (
            <li key={index}>
              <a href="#">{menu}</a>
            </li>
          ))}
        </ul>
      </MenuArea>
    </Wrapper>
  );
};

export default NavBar;
