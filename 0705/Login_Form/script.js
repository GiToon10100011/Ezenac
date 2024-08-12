const tokenButton = document.querySelector("#token_button");
const tokenNumber = document.querySelector("#token");
const tokenTimer = document.querySelector("#token_timer");
const tokenConfirmBtn = document.querySelector("#token_timer_confirmBtn");
const signupBtn = document.querySelector("#signup_button")

let interval;

const getTokenTimer = () => {
  let timer = 180;
  interval = setInterval(() => {
    if (timer >= 0) {
      const mins = Math.floor(timer / 60);
      const secs = timer % 60;
      tokenTimer.innerText = mins + ":" + String(secs).padStart(2,"0");
      timer -= 1;
    } else {
      tokenNumber.innerText = "000000";
      tokenButton.style = "";
      tokenButton.setAttribute("disabled", true);

      tokenTimer.innerText = "3:00";
      tokenConfirmBtn.setAttribute("disabled", true)
      tokenConfirmBtn.style = "";
      clearInterval(interval);
    }
  }, 10);
};

const changePhone1 = () => {
  // value속성을 통해 phoneValue1의 값을 받아옴
  const phone1 = document.querySelector("#phone1").value;
  // 리얼타임으로 받아오는 것이 아니기에 이벤트 부여
  if (phone1.length === 3) {
    // focus 함수를 통해 커서가 넘어가게됨
    document.querySelector("#phone2").focus();
  }
};
const changePhone2 = () => {
  // value속성을 통해 phoneValue1의 값을 받아옴
  const phone2 = document.querySelector("#phone2").value;
  // 리얼타임으로 받아오는 것이 아니기에 이벤트 부여
  if (phone2.length === 4) {
    // focus 함수를 통해 커서가 넘어가게됨
    document.querySelector("#phone3").focus();
  } else if (phone2.length === 0) {
    document.querySelector("#phone1").focus();
  }
};
const changePhone3 = () => {
  // value속성을 통해 phoneValue1의 값을 받아옴
  const phone1 = document.querySelector("#phone1").value;
  const phone2 = document.querySelector("#phone2").value;
  const phone3 = document.querySelector("#phone3").value;
  // 리얼타임으로 받아오는 것이 아니기에 이벤트 부여

  if (phone3.length === 0) {
    document.querySelector("#phone2").focus();
  }
  if (phone1.length === 3 && phone2.length === 4 && phone3.length === 4) {
    tokenButton.removeAttribute("disabled");
    tokenButton.style =
      "background-color : #fff; color : #0068ff; cursor : pointer;";
  } else {
    tokenButton.setAttribute("disabled", true);
    tokenButton.style = "none";
  }
};

tokenButton.addEventListener("click", (e) => {
  e.preventDefault();
  // floor로 소수점을 없앰.
  const verNum = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");

  tokenNumber.innerHTML = verNum;
  tokenConfirmBtn.removeAttribute("disabled");
  tokenConfirmBtn.style =
    "background-color : #0068ff; color : #fff; cursor : pointer";
  getTokenTimer();
});

tokenConfirmBtn.addEventListener("click", function(e) {
  e.preventDefault();
  clearInterval(interval);
  this.style = "background-color : #fff";
  this.setAttribute("disabled", true);
  this.innerHTML = "인증완료";
  alert("인증이 완료됐습니다!");
  signupBtn.style = "background-color : #fff; color : #0068ff; cursor : pointer";
  signupBtn.removeAttribute("disabled");
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.querySelector("#email").value;
  const name = document.querySelector("#name").value;
  const password = document.querySelector("#pw2").value;
  const password2 = document.querySelector("#pw2").value;
  const location = document.querySelector("#location").value;
  const genderWoman = document.querySelector("#gender_woman").checked;
  const genderMan = document.querySelector("#gender_man").checked;
  
  // 단락회로 평가 ->  어떠한 값이 참인지 거짓인지 확인

  let isVaild = true;
  if (email.includes("@") === false){
    document.querySelector("#error_email").innerText = "이메일이 올바르지 않습니다.";
    isVaild = false;
  } else{
    document.querySelector("#error_email").innerText = "";
  }
  
  if (name === ""){
    document.querySelector("#error_writer").innerText = "이름을 입력해주세요!";
    isVaild = false;
  } else{
    document.querySelector("#error_writer").innerText = "";
  }
  
  if (password === ""){
    document.querySelector("#error_pw1").innerText = "비밀번호를 입력해주세요!";
    isVaild = false;
  } else{
    document.querySelector("#error_pw1").innerText = "";
  }
  
  if (password2 === ""){
    document.querySelector("#error_pw2").innerText = "비밀번호를 입력해주세요!";
    isVaild = false;
  } else{
    document.querySelector("#error_pw2").innerText = "";
  }

  if(password !== password2){
    document.querySelector("#error_pw1").innerText = "비밀번호가 일치하지 않습니다.";
    document.querySelector("#error_pw2").innerText = "비밀번호가 일치하지 않습니다.";
    isVaild = false;
  }

  if (location !== "서울" &&
      location !== "경기" &&
      location !== "인천" &&
      location !== "대구" &&
      location !== "마산" &&
      location !== "부산"){
    document.querySelector("#error_location").innerText = "지역을 선택해주세요";
    isVaild = false;
  } else{
    document.querySelector("#error_location").innerText = "";
  }

  if(genderMan === false && genderWoman === false){
    document.querySelector("#error_gender").innerText = "성별을 선택해주세요";
    isVaild = false;
  } else{
    document.querySelector("#error_gender").innerText = ""
  };

  if(isVaild === true){
    alert("회원가입이 완료됐습니다.");
  }

});