import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  cursor: pointer;
`;
const Img = styled.img`
  width: 300px;
  margin-bottom: 10px;
`;

const ProductCard = ({ id, img, title, price, size, newItem, choice }) => {
  const navigate = useNavigate();
  const showProductDetail = () => {
    navigate(`/product/${id}`);
    // console.log(window.location.href)
  };
  return (
    <Wrapper onClick={showProductDetail}>
      <Img src={img} />
      <div>{choice && "Conscious Choice"}</div>
      <div>{title}</div>
      <div>
        {Intl.NumberFormat("ko-kr", {
          style: "currency",
          currency: "KRW",
        }).format(price)}
      </div>
      <div>{newItem ? "신제품" : "이벤트상품"}</div>
    </Wrapper>
  );
};

export default ProductCard;
