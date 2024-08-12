// // 변수 선언 const/var/let
// const hello = 'hello world';
// // 호출, 사용
// console.log(hello);

//scroll event
// e는 일종의 참조 변수 -> 이를 통해 이벤트가 어떤식으로 돌아가는지 체크 후 코드 작성

// scroll이 내려가는 순간 header, nav, gnb를 찾아오겠다
// 함수안에 함수를 callback 함수라고 한다.
window.addEventListener("scroll", () => {
  // document = html, querySelector은 태그 가져오는 놈
  // html의 태그요소를 자바스크립트의 변수로 먼저 할당을 시켜줘야하는 작업이 필요함.
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");
  const gnbDesktop = document.querySelector(".gnbDesktop");
  const gnbMobile = document.querySelector(".gnbMobile");
  const logo = document.querySelector("#logo");
  const trigger = document.querySelectorAll(".trigger span");
  const searchBar = document.querySelector(".search_bar");

  if (window.scrollY > 60) {
    // classList => 클래스가 있는지 확인해라
    header.classList.add("active");
    nav.classList.add("active");
    gnbDesktop.classList.add("active");
    gnbMobile.classList.add("active");
    logo.classList.add("active");
    searchBar.classList.add("open");
    // 반복문, classList.add는 classList에 해당 속성이 없다면 부여하라는 뜻
    trigger.forEach((bar) => {
      bar.classList.add("active");
    });
  } else {
    header.classList.remove("active");
    nav.classList.remove("active");
    gnbDesktop.classList.remove("active");
    gnbMobile.classList.remove("active");
    logo.classList.remove("active");
    searchBar.classList.remove("open");
    trigger.forEach((bar) => {
      bar.classList.remove("active");
    });
  }
});

// Toggle btn Event
// 항상 dom에서 먼저 어느 대상에 기능을 먹일지 확인하고 코드 작성하기

// 전역 변수로 선언
const toggleBtn = document.querySelector(".trigger");
toggleBtn.addEventListener("click", function () {
  // this는 화살표 함수랑 사용할 수 없음.
  // 지역과 지역변수는 전혀 관계가 없으므로 gnbmobile을 사용하기 위해 해당 함수내에서 다시 선언해줄 필요가 있음.
  const gnbMobile = document.querySelector(".gnbMobile");
  // 같은 버튼에 켜고 끄는 기능을 사용해야하므로 toggle을 사용함.
  gnbMobile.classList.toggle("open");
  // this는 toggleBtn을 참조함.
  this.classList.toggle("active");
});

// 0620내용 추가
// search bar trigger
// 1. 사용자가 검색버튼을 클릭한다.
// 컴퓨터는 dom을 활용해서 검색버튼을 인지할 수 있다.
// 검색버튼이 클릭되었느지에 대한 여부를 event 처리를 통해 실행 가능하다.
// 2. 검색버튼을 1번 클릭하면 오른쪽에서 있던 .search_bar가 출력된다.
// 미리 사전에 css를 통해서 정의한 가상 클래스를 호출한다.
// 3. 검색 버튼을 2번 클릭하면 현 위치에 있던 .search_bar가 다시 오른쪽으로 간다.
// 호출된 가상 클래스를 찾아와서 다시 제거함.
// 4. 3~4번을 계속 반복될 수 있도록 함.
//toggle() 활용해서 실행한다.

const searchBar = document.querySelectorAll("ul .fa-magnifying-glass");
const searchResult = document.querySelector(".search_bar");
const closeBtn = document.querySelector(".fa-xmark");

console.log(searchBar, searchResult);
// searchBar내의 요소를 하나씩 찾아서 반복시켜줌.
// 인자값으로 임의로 searchBar내의 요소에 item이라는 이름을 붙여줌 -> 이것이 참조 변수
searchBar.forEach((item) => {
  item.addEventListener("click", () => {
    console.log("click");
    searchResult.classList.add("active");
  });
});

closeBtn.addEventListener("click", () => {
  searchResult.classList.remove("active");
});

// main slide
// 슬라이드 버튼
const slideArrows = document.querySelectorAll(".slide_container_btn");
// 슬라이드 페이저
const slidePagers = document.querySelectorAll(".slide_pager span");
// 슬라이드 이미지
const slideImg = document.querySelector(".slide_img");
// 슬라이드 영역 -> 이를 찾아오는 이유? 자동으로 돌아가는거를 스택에 저장해놨는데 사용자가 이때 수동으로 조작하려고 하면 데이터구조가 꼬이게 됨. 이때문에 만약 컨테이너에 마우스를 올리게되면 일시정지하면서 스택플로우를 리셋시켜 수동으로이미지를 순차적으로 바꿀 수 있게 됨.
const slideContainerArrow = document.querySelector(".slide_container_arrow");
//배열
// const는 재선언, 재할당 X
const pics = ["slide1.png", "slide2.png", "slide3.png"];

// 언제나 바꿔칠 수 있도록 호이스팅, 재선언, 등이 가능한 let을 사용
let i = 0;
let slideInterval;
// 초기값 세팅(세상에 브라우저를 켜지자마자 화살표 누르는 사람은 없으니까 false로 할당)
let isTransitioning = false;

// js에서 스타일을 정의할때 반드시 아래처럼 style 속성을 부여해야함.
// 템블릿 이터러블은 백틱(물결키)를 사용해야함.
slideImg.style.backgroundImage = `url(//ecimg.cafe24img.com/pg1108b74246837003/tyler10034/Chef/${pics[i]})`;
slidePagers[0].classList.add("active");

// index의 값은 0/1/2
// 사진파일의 이름은 1/2/3
// -> (index+1)/전체 총 이미지의 개수
// 실제 이미지 및 페이저 값을 변경시켜주는 함수
const updateSlide = (i) => {
  slidePagers.forEach((item) => {
    item.classList.remove("active");
  });
  slideImg.style.backgroundImage = `url(//ecimg.cafe24img.com/pg1108b74246837003/tyler10034/Chef/${pics[i]})`;
  slidePagers[i].classList.add("active");
};

// js의 시간은 밀리초의 개념. 4000 -> 4초 즉, 4초마다 해당 구문을 실행해달라는 뜻.
// 자동으로 슬라이드 이미지가 변경되도록 해주는 함수

// startSlideShow가 호출될 때 마다 slideInterval이 생성됨. 이때문에 전에 있던 slideInterval을 제대로 지워줄 필요가 있음. 또한 resetSlideShow를 통해 슬라이드를 2번 시작하게 됨.
const startSlideShow = () => {
  // 고침 -> let을 없애서 전역변수로 할당
  slideInterval = setInterval(() => {
    i = (i + 1) % pics.length;
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
  // 이걸빼도 되고 안빼도 되던데 왜지 ->  메모리 효율성을 위해 일시적으로 초기값을 줘서 연타할때라던지 전환 등의 오류를 방지시키기 위해 설정해둠. 그렇다면 그러한 트래픽은 나중에 백엔드단에서 특정 오버플로우가 발생할때 조건문을 걸어서 제어하게 됨. 이러한오류가 발생하는 원인은 컴퓨터의 스택 처리방식때문이다.
  isTransitioning = false;
  startSlideShow();
};

// 보통 callback 함수를 무조건 사용하네..
// 참조변수도 지금 현재 어떤걸 참조하고 있는지 확인하기 위해 console.log();을 쓰면 좋다. 그 후 BOM에서 target 속성값을 확인하면 된다.
// 화살표 클릭 및 이미지 변경요청 함수
slideArrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    // js에서 return은 break의 개념과 유사함.
    if (isTransitioning) return;
    isTransitioning = true;

    stopSlideShow();
    if (e.target.id === "leftArrow") {
      // pics.length는 사진의 길이 즉, 개수 => 3
      i = (i - 1 + pics.length) % pics.length;
    } else if (e.target.id === "rightArrow") {
      i = (i + 1) % pics.length;
    }

    updateSlide(i);

    // 딜레이값을 500을 매김
    setTimeout(() => {
      isTransitioning = false;
      startSlideShow();
    }, 500);
  });
});

//페이저 클릭 시 , 슬라이드 이미지 변경 함수
// foreach를 사용하게 되면 객체 뿐만아니라 index값까지도 찾아온다?
slidePagers.forEach((pager, index) => {
  pager.addEventListener("click", () => {
    stopSlideShow();
    i = index;
    updateSlide(i);
    setTimeout(startSlideShow, 500);
  });
});

startSlideShow();

slideContainerArrow.addEventListener("mouseover", stopSlideShow);
// mouseover -> mouseout으로 고침
slideContainerArrow.addEventListener("mouseout", resetSlideShow);
