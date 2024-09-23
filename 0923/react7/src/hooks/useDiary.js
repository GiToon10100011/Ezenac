import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryStateContext } from "../App";

const useDiary = (id) => {
  const navigate = useNavigate();
  const data = useContext(DiaryStateContext);
  const [diary, setDiary] = useState(null);
  //초깃값을 빈객체를 주게 되면 일단 값이 있다고 간주가 되기 때문에 예외조항처리가 작동되지 않음. 외부 api데이터를 가져올때 주의해야할 사항
  useEffect(() => {
    const matchDiary = data.find((item) => String(item.id) === String(id));
    if (matchDiary) setDiary(matchDiary);
    else {
      alert("일기가 존재하지 않습니다.");
      navigate("/");
    }
  }, [id, data]);
  return diary;
};

export default useDiary;
