const num01 = Number(prompt())
const num02 = Number(prompt())

const max = num01 > num02 ? num1 : num02;

let gcd = 0;
for(let i = 1; i <= max; i++){
  if(num01 % i === 0 && num02 % i === 0){
    gcd = i;
  }
}

console.log(gcd);