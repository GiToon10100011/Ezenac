/* 1. card_items의 각 요소에 커서를 올릴 때 각 item들이 위쪽으로 올라오도록 하고 싶음.

1-1. 웹 브라우저가 card item들이 어떤 요소들인지 알게끔 도와줘야함.

1-1-1. 웹 브라우저는 dom의 객체 모델을 갖고 있으므로 해당 dom에서 card_item들의 node를 찾아와야겠다. 

1-1-1-1. dom에서 원하는 node를 찾아오려면 querySelector() 혹은 getElementById() 등의 함수를 사용할 수 있음.

1-2. card_item이 1개가 아니라, 총 5개이며 모두 동일한 패턴 및 형식의 동적인 이벤트 기능을 가져야 한다. 

2. 만약 마우스가 a item위에 있다가 b item으로 이동하게 된다면, a item은 다시 원래의 위치로 돌아오게 하고 싶고, b item은 올라오도록 하고 싶다. */

const items = document.querySelectorAll("#card_items li")

items.forEach((item) => {
  item.addEventListener
  // mouseover을 한걸 들었으면 또다시(callback함수) 먼가를 해줘
  ("mouseover" , () => {
    item.style.transform = "translateY(-20px)";
    item.style.transition = "all 0.3s";
    item.style.background = "rgba(0, 0, 0, 0.7) !important";
  });

  item.addEventListener("mouseout" , () => {
    item.style.transform = "translateY(0)";
    item.style.background = "";
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
    if(lnb){
      // maxHeight는 가변적인 값, (200을 넘어가지 않는한 그 사이에 후천적으로 값을 줘도 적용이됨)
      // scrollHeight는 js의 자체적인 속성으로, 이벤트가 적용되는 요소를 말리게(돌돌돌) 할 수 있도록 해줌. px를 더해준 이유는 문자열값으로, scrollHeight는 숫자만을 값으로 지정되기 때문에 css에서는 크기를 지정해줘야하기 위함.
      lnb.style.maxHeight = lnb.scrollHeight + "px";
      lnb.style.opacity = "1";
      aTag.classList.add("active");
    }
  });
  li.addEventListener("mouseout" , () => {
    const lnb = li.querySelector(".lnb");
    const aTag = li.querySelector("a");
    if(lnb){
      // maxHeight를 0으로 줘서 안 인식되게게끔함(기존의 lnb를)
      lnb.style.maxHeight = 0;
      lnb.style.opacity = "0";
      aTag.classList.remove("active");
    }
  });
});