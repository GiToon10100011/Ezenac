import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const goToDiary = (e) => {
    if (e.target === "value") navigate("/diary");
    else {
      alert("로그인해주세요.");
      navigate("/");
    }
  };
  return (
    <div>
      Edit Page
      {/* <Link to={"/diary"}>Diary Page</Link> */}
      <button onClick={goToDiary}>다이어리 페이지</button>
    </div>
  );
};

export default Edit;
