/* 1. card_items의 각 요소에 커서를 올릴 때 각 item들이 위쪽으로 올라오도록 하고 싶음.

1-1. 웹 브라우저가 card item들이 어떤 요소들인지 알게끔 도와줘야함.

1-1-1. 웹 브라우저는 dom의 객체 모델을 갖고 있으므로 해당 dom에서 card_item들의 node를 찾아와야겠다. 

1-1-1-1. dom에서 원하는 node를 찾아오려면 querySelector() 혹은 getElementById() 등의 함수를 사용할 수 있음.

1-2. card_item이 1개가 아니라, 총 5개이며 모두 동일한 패턴 및 형식의 동적인 이벤트 기능을 가져야 한다. 

2. 만약 마우스가 a item위에 있다가 b item으로 이동하게 된다면, a item은 다시 원래의 위치로 돌아오게 하고 싶고, b item은 올라오도록 하고 싶다. */

const items = document.querySelectorAll("#card_items li");
const filter = document.querySelectorAll(".card_filter");

items.forEach((item) => {
  item.addEventListener(
    // mouseover을 한걸 들었으면 또다시(callback함수) 먼가를 해줘
    "mouseover",
    () => {
      item.style.transform = "translateY(-20px)";
      item.style.transition = "all 0.3s";
      item.style.background = "rgba(0, 0, 0, 0.7) !important";
    }
  );

  item.addEventListener("mouseout", () => {
    item.style.transform = "translateY(0)";
    item.style.background = "";
  });
});

filter.forEach((item) => {
  item.addEventListener(
    // mouseover을 한걸 들었으면 또다시(callback함수) 먼가를 해줘
    "mouseover",
    () => {
      item.style.opacity = "1";
    }
  );

  item.addEventListener("mouseout", () => {
    item.style.opacity = "0";
  });
});

/* 1. 브라우저에게 상단 내비게이션 ul태그 및 li태그를 인지 시켜줘야한다. 

2. 상단 nav요소에게 마우스를 오버하면 이벤트가 실행된다.

2-1. active라는 가상클래스가 실행된다. (텍스트가 검정색, 두꺼워짐.)

2-2. 하단에 lnb요소의 opacity값이 1이 되어야 한다. 

3. mouseout || mouseout 기능을 활용해서 마우스가 옆에 있는 li태그로 이동을 하면 기존에 이벤트는 제거, 신규 이벤트가 이전에 설정해뒀던 기능을 그대로 구현시켜야한다. */

const gnbLi = document.querySelectorAll(".topNav > li");

// li는 참조변수
gnbLi.forEach((li) => {
  li.addEventListener("mouseover", () => {
    const lnb = li.querySelector(".lnb");
    const aTag = li.querySelector("a");
    // 만약 aTag를 찾아왔으면~ 이라는 조건문을 부여, 못 찾아왔으면 컴퓨터가 불필요한 행위를 하는 걸 방지시킴(메모리 효율성 증대)
    if (lnb) {
      // maxHeight는 가변적인 값, (200을 넘어가지 않는한 그 사이에 후천적으로 값을 줘도 적용이됨)
      // scrollHeight는 js의 자체적인 속성으로, 이벤트가 적용되는 요소를 말리게(돌돌돌) 할 수 있도록 해줌. px를 더해준 이유는 문자열값으로, scrollHeight는 숫자만을 값으로 지정되기 때문에 css에서는 크기를 지정해줘야하기 위함.
      lnb.style.maxHeight = lnb.scrollHeight + "px";
      lnb.style.opacity = "1";
      aTag.classList.add("active");
    }
  });
  li.addEventListener("mouseout", () => {
    const lnb = li.querySelector(".lnb");
    const aTag = li.querySelector("a");
    if (lnb) {
      // maxHeight를 0으로 줘서 안 인식되게게끔함(기존의 lnb를)
      lnb.style.maxHeight = 0;
      lnb.style.opacity = "0";
      aTag.classList.remove("active");
    }
  });
});

// background image change
// 이미지 배열 생성
const bgImgs = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg"];

const bgImg = document.querySelector("#background_img");

// Template Literal 문법
bgImg.style.backgroundImage = `url(./img/${bgImgs[0]})`;

const topContents = document.querySelector("#top_contents");
const contentTitle = topContents.querySelector(".top_contents_title");
const contentDesc = topContents.querySelector(".top_contents_desc");

let jsonData;

// then은 fetch(json파일을 잘 찾아왔다고 가정)가 잘되면 그럼 이걸 해줘라는 뜻
fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    // 구조 분해 할당 -> 배열이나 객체의 속성을 해체해서 그 값을 개별 변수에 담을 수 있게함.
    const [firstData, ...otherData] = data.data;
    jsonData = data.data;
    console.log(firstData);
    contentTitle.innerText = firstData.title;
    contentDesc.innerText = firstData.desc;
    updateSlide(0);
    // innerText는 js의 자체 속성으로, 텍스트 컨텐츠를 반환 혹은 설정시킬 수 있다.
    // contentTitle.innerText = firstData.title;
    // contentDesc.innerText = firstData.desc;
    // forEach의 두번째 인자값은 0~n번까지 순차적으로 바뀌는 숫자 값으로, 참조 변수이다. (이름을 바꿔도 무관함.)
    items.forEach((item, index) => {
      item.addEventListener("click", (e) => {
        // preventDefault로 a태그의 기본적인 속성인 어디로 넘어가게 하는걸 막아줌
        e.preventDefault();

        updateSlide(index);
        // console.log(title, desc);

        bgImg.style.backgroundImage = `url(./img/${bgImgs[index]})`;
        contentTitle.innerText = title;
        contentDesc.innerText = desc;
      });
    });
  });

const slideImg = document.querySelector("#background_img");

// 언제나 바꿔칠 수 있도록 호이스팅, 재선언, 등이 가능한 let을 사용
let i = 0;
// 슬라이드 쇼의 타이머를 저장할 변수
let slideInterval;
let isTransitioning = false;

const updateSlide = (i) => {
  slideImg.style.backgroundImage = `url(./img/${bgImgs[i]})`;
  contentTitle.innerText = jsonData[i].title;
  contentDesc.innerText = jsonData[i].desc;
};

// startSlideShow가 호출될 때 마다 slideInterval이 생성됨. 이때문에 전에 있던 slideInterval을 제대로 지워줄 필요가 있음. 또한 resetSlideShow를 통해 슬라이드를 2번 시작하게 됨.
const startSlideShow = () => {
  slideInterval = setInterval(() => {
    i = (i + 1) % bgImgs.length;
    updateSlide(i);
  }, 3000);
};

// 자동슬라이드 기능을 정지 시켜주는 함수
const stopSlideShow = () => {
  clearInterval(slideInterval);
};

// 자동 슬라이드 재시작을 실행시켜주는 함수
const resetSlideShow = () => {
  stopSlideShow();
  isTransitioning = false;
  startSlideShow();
};

startSlideShow();

items.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    // 사용자가 카드를 눌렀을때 정보를 볼 수 있도록 멈추게함.
    stopSlideShow();
    e.preventDefault();
    const { title, description } = jsonData.data[index];
    bgImg.style.backgroundImage = `url(./img/${bgImgs[index]})`;
    contentTit.innerText = title;
    contentDesc.innerText = description;
  });
});
