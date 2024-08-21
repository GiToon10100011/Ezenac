//digit이 3자리
const regexp = /\d{3}/;
const regexp2 = new RegExp(/\d{3}/);
console.log(regexp.test("Hel"));
console.log(regexp.exec("123"));

const str = "ES2024 is powerful";
console.log(str.match(/ES/));
console.log(str.replace(/ES2024/, "Javascript"));
const regexp3 = /es/i;
console.log(regexp3.test(str));
console.log(str.match(/ES\d{2}/));

const hello = "Hello, everyone.";
console.log(/^H/i.test(hello));
console.log(/one.$/i.test(hello));

const str2 = "ES2024";
console.log(str.match(/[^0-9]{4}/g));

const str3 = "Ooooooooooooooooooooooooooooooooops"
console.log(str3.match(/o{2}/));
console.log(str3.match(/o{2,4}/));

const str4 = "ES2024(ES8) is powerful";
const regexp4 = /ES2024|ES8/;
console.log(regexp4.test(str4));
