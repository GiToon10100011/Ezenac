import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Editor from "../components/Editor";
import Header from "../components/Header";
import Button from "../components/Button";
import useDiary from "../hooks/useDiary";
import { DiaryDispatchContext } from "../App";

const Edit = () => {
  const navigate = useNavigate();
  const fnc = useContext(DiaryDispatchContext);
  const { onDelete } = fnc;
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
        Edit Page
        <Editor />
      </div>
    );
  }
};

export default Edit;
