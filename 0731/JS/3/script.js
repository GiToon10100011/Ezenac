const id = "ezen";
const pw = "1234";

const userId = prompt("아이디를 입력해주세요");

if (userId === id) {
  const userPw = prompt("비밀번호를 입력해주세요");
  if (userPw !== pw) {
    alert("비밀번호가 일치하지 않습니다.");
    window.location.reload();
  } else {
    alert(`${userId}님, 환영합니다.`);
  }
} else {
  alert("아이디가 일치하지 않습니다.");
  window.location.reload();
}

