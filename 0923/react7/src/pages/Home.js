import React, { useState, useEffect, useContext } from "react";
import { DiaryStateContext } from "../App";
import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import { getMonthRangeByDate, setPageTitle } from "../utils";

const Home = () => {
  const [pivotDate, setPivotDate] = useState(new Date());
  const [filteredData, setFilteredData] = useState([]);
  const data = useContext(DiaryStateContext);

  useEffect(() => {
    if (data.length >= 1) {
      const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivotDate);
      setFilteredData(
        data.filter(
          (item) => beginTimeStamp <= item.date && item.date <= endTimeStamp
        )
      );
    } else {
      setFilteredData([]);
    }
  }, [data, pivotDate]);

  useEffect(() => {
    setPageTitle("어서와 동훈아");
  }, []);

  const headerTitle = `${pivotDate.getFullYear()}년 ${
    pivotDate.getMonth() + 1
  }월`;
  //setPivotState로 변경된 state를 가져온 기준으로 더해주므로 값이 바로 반영이 됨.

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1)); //초깃값 선언이 아니라 그냥 진짜 증가시키기 위해 1을 더함.
  };
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <div>
      <Header
        leftChild={<Button title={"<"} onClick={onDecreaseMonth} />}
        title={headerTitle}
        rightChild={<Button title={">"} onClick={onIncreaseMonth} />}
      />
      <DiaryList data={filteredData} />
    </div>
  );
};

export default Home;
