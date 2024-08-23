const result = document.querySelector("#result");
const order = new Promise((resolve, reject) => {
  const coffee = prompt("어떤 커피를 주문하시겠습니까?", "아메리카노");
  if(coffee !== null && coffee !== ""){
    result.innerText = `${coffee} 주문 접수`;
    setTimeout(() => {
      resolve(coffee);
    }, 3000)
  } else{
    reject("커피를 주문하지 않았습니다.")
  }
})

const display = (coffee) => {
  const end = document.querySelector("#end");
  end.innerText = `${coffee} 준비 완료!`
  end.classList.add("active");
  result.classList.add("done");
}

const showErr = (err) => {
  result.innerText = err;
}

//resolve를 받아왔으므로 coffee를 사용할 수 있음
order.then(display).catch(showErr).finally("끝났습니다");

console.log(order);

//promise의 단계
//1. pending : 프로미스를 생성하고 실제 실행을 시키기 전, 대기 상태
//2. fulfilled : 프로미스를 통해서 어떤 실행값 혹은 실행문을 정상적으로 실행시킨 상태
//3. rejected : 프로미스를 통해서 실행하고자 했던 요소를 정상적으로 실행시키지 못한 상태