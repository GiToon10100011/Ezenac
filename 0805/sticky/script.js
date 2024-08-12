window.addEventListener("scroll", () => {
  const hashList = document.querySelector(".hashlist");
  const scrollY = window.scrollY;
  if (scrollY > 300) {
    hashList.classList.add("active");
  } else {
    hashList.classList.remove("active");
  }
});

//Touch Event
const hashContent = document.querySelector(".hashcontent");
const listClientWidth = hashContent.clientWidth;
const listScrollWidth = hashContent.clientWidth + 200;

//최초 터치 및 마우스 다운 지점
let initialTouchX = 0;

//현재 이동중인 지점
let currentX = 0;

//터치 종료 지점
let endX = 0;

//두번째 터치 지점
let listX = 0;

const getClientX = (e) => {
  const isTouches = e.touches ? true : false;
  // e.touches[0] -> 첫번째 손가락을 지칭
  // clientX : 사용자가 현재 보고있는 device 매체의 너비를 의미
  return isTouches ? e.touches[0].clientX : e.clientX;

  //축약
  // return e.touches ? e.touches[0].clientX : e.clientX;
  //여기서 e.touches[0]은 손가락 즉, 모바일로 했는지, e.clientX는 컴퓨터로 했는지의 여부를 판단해준다. 손가락은 여러개로 터치할 수 있으므로 첫번째값인 [0]으로 지정해줬지만, 마우스는 2개일수가 없기에 e.clientX를 반환함으로써 pc임을 지칭함.
};

const setTranslateX = (x) => {
  hashContent.style.transform = `translateX(${x}px)`;
};

// //는 부모요소를 정규표현식으로 사용하겠다는 뜻이다. g는 global
const getTranslateX = (x) => {
  return parseInt(getComputedStyle
  (hashContent).transform.split(/[^\-0-9]+/g)[5]);
  }

const onScrollMove = (e) => {
  currentX = getClientX(e);
  setTranslateX(listX + currentX - initialTouchX);
};

const onScrollEnd = (e) => {
  endX = getClientX(e);
  listX = getTranslateX(e);
  if(listX > 0){
    setTranslateX(0);
    hashContent.style.transition = "all 0.1s ease";
    listX = 0;
  } else if(listX < listClientWidth - listScrollWidth){
    hashContent.style.transition = "all 0.1s ease";
    listX = listClientWidth - listScrollWidth;
  }

  window.removeEventListener("touchmove", onScrollMove);
  window.removeEventListener("mousemove", onScrollMove);
  window.removeEventListener("touchend", onScrollEnd);
  window.removeEventListener("mouseup", onScrollEnd);
  window.removeEventListener("touchstart", onScrollStart);
  window.addEventListener("mousedown", onScrollStart);


};

const onScrollStart = (e) => {
  initialTouchX = getClientX(e);

  window.addEventListener("touchmove", onScrollMove);
  window.addEventListener("mousemove", onScrollMove);

  window.addEventListener("touchend", onScrollEnd);
  window.addEventListener("mouseup", onScrollEnd);
};

hashContent.addEventListener("touchstart", onScrollStart);

hashContent.addEventListener("mousedown", onScrollStart);
