import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import Header from "../components/Header";
import Button from "../components/Button";
import { getFormattedDate, setPageTitle } from "../utils";
import Viewer from "../components/Viewer";

const Diary = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const data = useDiary(id);

  useEffect(() => {
    setPageTitle(`동훈이의 감정 쓰레기통${id}`);
  }, []);
  
  if (!data) {
    return <div>일기를 불러오는 중입니다...</div>;
  } else {
    const { date, emotionId, content } = data;
    console.log(data);
    const headerTitle = `${getFormattedDate(new Date(parseInt(date)))} 기록`;

    const goBack = () => {
      navigate(-1);
    };

    const goEdit = () => {
      navigate(`/edit/:${id}`);
    };

    return (
      <div>
        <Header
          leftChild={<Button title={"< 뒤로가기"} onClick={goBack} />}
          title={headerTitle}
          rightChild={<Button title={"수정하기 "} onClick={goEdit} />}
        />
        <Viewer content={content} emotionId={emotionId} />
      </div>
    );
  }
};

export default Diary;
