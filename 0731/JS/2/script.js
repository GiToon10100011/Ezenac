const month = Number(prompt("현재의 월을 입력해주세요."));

month >= 9 && month <= 11
  ? alert("독서의 계절 가을")
  : month >= 6 && month <= 8
  ? alert("여행가기 좋은 여름")
  : month >= 3 && month <= 5
  ? alert("햇살 가득한 봄")
  : alert("스키의 계절 겨울");

  