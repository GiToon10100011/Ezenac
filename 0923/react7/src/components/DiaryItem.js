import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getEmotionImgById } from "../utils";
import Button from "./Button";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 15px 0;
  border-bottom: 1px solid #e2e2e2;
`;

const DiaryContent = styled.div``;

const ImgBg = styled.div`
  width: 120px;
  height: 80px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  // &.img_section_1 {
  // }
  // &.img_section_2 {
  // }
  // &.img_section_3 {
  // }
  // &.img_section_4 {
  // }
  // &.img_section_5 {
  // }
`;

const Img = styled.img`
  width: 50%;
`;

const InfoSection = styled.div`
  flex: 1;
  cursor: pointer;
`;

const ButtonSection = styled.div`
  min-width: 70px;
`;

const DateItem = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 5px;
`;
const ContentItem = styled.div`
  font-size: 18px;
`;

const DiaryItem = ({ id, date, content, emotionId }) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/diary/${id}`);
  };
  const goEdit = () => {
    navigate(`/edit/${id}`);
  };
  return (
    <Wrapper>
      <DiaryContent>
        <ImgBg className={`img_section_${emotionId}`} onClick={goDetail}>
          <Img src={getEmotionImgById(emotionId)} alt={`emotion${emotionId}`} />
        </ImgBg>
      </DiaryContent>
      <InfoSection>
        <DateItem>{new Date(parseInt(date)).toLocaleDateString()}</DateItem>
        {/* content가 25째자리까지만 출력되도록함. */}
        <ContentItem>{content.slice(0, 25)}</ContentItem>
      </InfoSection>
      <ButtonSection>
        <Button title={"수정하기"} onClick={goEdit} />
      </ButtonSection>
    </Wrapper>
  );
};

export default React.memo(DiaryItem);
