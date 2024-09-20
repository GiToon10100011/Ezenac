import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DiaryItem from "./DiaryItem";
import Button from "./Button";
import styled from "styled-components";

const Wrapper = styled.div``;

const DiaryContents = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 30px;
  gap: 10px;
`;
const LeftContent = styled.div`
  flex: 1;
`;

const RightContent = styled.div`
  flex: 3;
  & button {
    width: 100%;
  }
`;

const Select = styled.select`
  background: #ececec;
  width: 100%;
  height: 100%;
  padding: 10px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  font-family: Noto Serif KR;
`;

const ListContents = styled.div``;

const sortOptions = [
  {
    value: "latest",
    name: "최신순",
  },
  {
    value: "oldest",
    name: "오래된순",
  },
];

const DiaryList = ({ data }) => {
  const [sortType, setSortType] = useState("latest");
  const [sortedData, setSortedData] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const compare = (a, b) => {
      if (sortType === "latest") {
        return Number(b.date) - Number(a.date);
      } else {
        return Number(a.date) - Number(b.date);
      }
    };
    const copyList = JSON.parse(JSON.stringify(data));
    copyList.sort(compare);
    setSortedData(copyList);
  }, [data, sortType]);

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  const onClickNew = () => {
    navigate("/new");
  };

  // useEffect(() => {
  //   console.log(sortType);
  // }, [sortType])

  return (
    <Wrapper>
      <DiaryContents>
        <LeftContent>
          <Select value={sortType} onChange={onChangeSortType}>
            {sortOptions.map((item, index) => (
              <option key={index} value={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </LeftContent>
        <RightContent>
          <Button
            type={"positive"}
            title={"새 일기 작성"}
            onClick={onClickNew}
          />
        </RightContent>
      </DiaryContents>
        <ListContents>
          {sortedData.map((item) => (
            <DiaryItem key={item.id} {...item} />
          ))}
        </ListContents>
    </Wrapper>
  );
};

export default DiaryList;
