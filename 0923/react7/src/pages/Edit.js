import React, { useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Editor from "../components/Editor";
import Header from "../components/Header";
import Button from "../components/Button";
import useDiary from "../hooks/useDiary";
import { DiaryDispatchContext } from "../App";
import { setPageTitle } from "../utils";

const Edit = () => {
  const navigate = useNavigate();
  const fnc = useContext(DiaryDispatchContext);
  const { onDelete, onUpdate } = fnc;
  const { id } = useParams();
  const data = useDiary(id);

  const goBack = () => {
    navigate(-1);
  };

  const onClickDelete = () => {
    if (window.confirm("삭제하시겠습니까? (다시 복구할 수 없습니다.)")) {
      onDelete(id);
      navigate("/");
    }
  };

  //여기서의 매개변수로 준 data는 상단의 context에 대한 data이다. 그럼 왜 굳이 매개변수를 줬냐 하면 그것은 New.js에서 submit함수에서 data를 받기 때문이다. 
  const onSubmit = (data) => {
    if(window.confirm("일기를 수정하시겠습니까?")){
      const {date, content, emotionId} = data;
      onUpdate(id, date, content, emotionId);
      navigate("/");
    }
  };

  useEffect(() => {
    setPageTitle("일기 수정")
  }, [])

  if (!data) return <div> 일기를 불러오고 있습니다.. </div>;
  else {
    return (
      <div>
        <Header
          title={"일기 수정"}
          leftChild={<Button title="< 뒤로가기" onClick={goBack} />}
          rightChild={
            <Button
              type={"negative"}
              title={"삭제하기"}
              onClick={onClickDelete}
            />
          }
        />
        <Editor initData={data} onSubmit={onSubmit} />
      </div>
    );
  }
};

export default Edit;