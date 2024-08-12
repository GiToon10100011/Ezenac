// 1. 제시어의 끝단어 확인
// 1-1. 컴퓨터에게 최초의 제시어가 무엇인지 알려줘야함.
// 1-2. 3-1에서 클릭 이벤트의 시작을 알리는 입력버튼이 무엇인지 알려줘야함.

// 2. 끝단어가 첫글자와 일치하는지 확인
// 2-1 사용자가 입력한 단어 확인 (keydown?)

// 3. 단어 입력 후 입력 버튼
// 3-1. 컴퓨터에서는 입력 버튼이 눌려졌을 때 두 단어를 검증함. (클릭 이벤트)

//4. 문제 여부 판단 = 문제없다 || 문제있다
// 4-1. 조건에 따라서 값을 어떻게 출력해줄 것인지 결정

// Game_word

const word_btn = document.querySelector(".word_text form");

// value는 이벤트가 적용된 후에만 가져올 수 있기 때문에 전역변수로 선언하는경우 통하지 않게 된다. 

const word_start = (e) => {
  e.preventDefault();
  let word = document.getElementById("word").innerText;
  let myword = document.getElementById("myword").value;
  let firstword = myword[0];
  let lastword = word[word.length-1];
  if(firstword === lastword){
    document.querySelector("#result").innerHTML = "정답입니다!";
    document.querySelector("#word").innerText = myword;
    document.querySelector("#myword").value = "";
  } else{
    document.querySelector("#result").innerHTML = "틀렸습니다..";
  };
};

word_btn.addEventListener("submit" , word_start);

// Game_Lotto

// 1. 클릭이라는 버튼이 눌렸을때 1부터 45까지의 6개의 숫자가 랜덤으로 동시에 나와야함. 
// 1-1. 클릭 버튼이 어떤건지 컴퓨터에게 알려줘야함. (클릭 이벤트)

// 2. js의 내장객체중 숫자를 랜덤으로 생성해주는 함수인 random()사용
// random은 기본적으로 0~1미만의 실수&난수를 생성한다. 이때문에 소수점을 없애야함. 이는 3가지 방법이 존재한다. floor() || ceil() <- 소수점을 올림  || round() 소수 반올림
// 3. 중복을 없애기 위해 set()클래스를 사용해야한다. 이는 무작위로 생성된 숫자를 배열에 1개씩 담을 예정인데, 중복된 값이 생성될 경우, 1개로 합쳐주는 역할을 한다. 
// 3-1. 서로 숫자가 같은 경우에는 조건문을 통해 재추첨을 함.

const lotto_btn = document.querySelector(".wrapper_lotto_btn");

const lotto_result = document.querySelector(".game_lotto_number");
console.log(lotto_result);

// 객체 선언
const lottoNum = {
  digitCnt: 6,
  maxNum : 44
};

const lotto_start = () => {
  // 구조분해할당
  // 다음과 같이 객체를 사용하는게 원래 fm이었으나, 다음과 같은 방법으로 선언했을때, 매번 키값별로 변수를 계속 만드는게 비효율적이라 다음과 같이 구조분해할당이 es6에서 추가됨
  // const digitCnt = lottoNum.digitCnt;
  const{digitCnt, maxNum} = lottoNum;

  let myNumber = new Set();
  for(let i = 0; i < digitCnt; i++){
    myNumber.add(Math.floor(Math.random() * maxNum + 1));
  }
  if(myNumber.size === 6){
    // 전개연산자를 통해 객체를 문자열로 바뀌게끔함
    lotto_result.innerText = `${[...myNumber]}`;
  } else{
    lotto_result.innerText = "재추첨하겠습니다!"
  }
}

lotto_btn.addEventListener("click", lotto_start);