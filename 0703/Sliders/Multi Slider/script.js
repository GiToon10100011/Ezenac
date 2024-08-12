const pics = document.querySelectorAll(".slides li");
const btns = document.querySelector(".controls");
const prevBtn = btns.querySelector(".prev");
const nextBtn = btns.querySelector(".next");

const slides = document.querySelector(".slides");
const slide = slides.querySelectorAll("li");

// length속성은 배열안에 있는 아이템들의 개수를 가져옴
const slideCount = slide.length;
const slideWidth = 200;
const slideMargin = 30;

let currentIdx = 0;

// 복제한 5개의 li노드를 왼쪽으로 이동시키기 위한 함수 1.
const updateWidth = () => {
  const currentSlides = document.querySelectorAll(".slides li");
  const newSlideCount = currentSlides.length;
  // 마지막거는 마진값을 빼줬으므로 여기도 마찬가지로 빼줌
  const newWidth = `${
    (slideWidth + slideMargin) * newSlideCount - slideMargin
  }px`;
  slides.style.width = newWidth;
};

// 함수 2.
// 전 함수에 var을 부여했으면 변수를 그대로 쓰면 되지않았나..?
const setInitialPos = () => {
  const initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
  slides.style.transform = `translateX(${initialTranslateValue}px)`;
};

// li 노드 복제 함수
const makeClone = () => {
  for (let i = 0; i < slideCount; i++) {
    const cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.appendChild(cloneSlide);
  }
  for (let i = slideCount - 1; i >= 0; i--) {
    const cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.prepend(cloneSlide);
  }

  updateWidth();
  setInitialPos();
  setTimeout(() => {
    slides.classList.add("animated");
  }, 100)
};

makeClone();

// 슬라이드 움직이게하는 함수
// 여기서의 num은 밑에서 인자값으로 currentIdx-1 || +1 로 주었기 대문에 NUM이 그걸 대체함으로써 슬라이드의 인덱스를 띠게 된다.
const moveSlide = (num) => {
  slides.style.left = `${-num * (slideWidth + slideMargin)}px`;
  currentIdx = num;
  if(currentIdx === slideCount || currentIdx === -slideCount){
    setTimeout(() => {
      slides.classList.remove("animated");
      slides.style.left = "0px";
      currentIdx = 0;
    }, 500);
    setTimeout(() => {
      slides.classList.add("animated");
    }, 600);
  };
};

// 버튼 클릭 이벤트 함수
nextBtn.addEventListener("click", () => {
  moveSlide(currentIdx + 1);
});

prevBtn.addEventListener("click", () => {
  moveSlide(currentIdx - 1);
});

//자동슬라이드 기능 함수

let timer = undefined;

const autoSlide = () => {
  if(timer === undefined){
    timer = setInterval(() => {
      moveSlide(currentIdx + 1)
    }, 2000)
  }
};

// 정지 기능 함수
const stopSlide = () => {
  clearInterval(timer);
  timer = undefined;
};

slides.addEventListener("mouseover", () => {
  stopSlide();
})
slides.addEventListener("mouseout", () => {
  autoSlide();
})

btns.addEventListener("mouseover", () => {
  stopSlide();
})
btns.addEventListener("mouseout", () => {
  autoSlide();
})

autoSlide();