const func = <T>(value: T): T => {
  return value;
};

// const num = func(10);
// num.toUpperCase();
// func("David");
// func([1, 2, 3]);
// func({ name: "염동훈" });

const swap = <T, U>(a: T, b: U) => {
  return [b, a];
};

const [a, b] = swap("1", 2);
console.log(a, b);

const funcArr = <T>(data: T[]): T => {
  return data[0];
};

const num = funcArr(["4", 1, 2]);
console.log(num);

let str = funcArr([2, "hello", "world"]);
console.log(str);

//T는 한번 고정되면 타입이 그 이후로 바뀌지 않음. 즉, unknown이 아니라 T[]로 만들었다면 배열내의 타입들이 첫번째의 T와 동일한 형태여야만 코드가 구동된다. 여기서는 다양한 타입들을 수용하기 위해 unknown으로 어느 타입이던 수용할 수 있도록 unknown[]을 사용한 것이다. 
const returnFirst = <T>(data: [T, ...unknown[]]): T => {
  return data[0];
};

const str2 = returnFirst([true, "hello", "world"]);

const func2 = <T extends { length: number }>(data: T): number => {
  return data.length;
};

console.log(func2("123"));
console.log(func2([1, 2, 3]));
console.log(func2({ length: 1, name: "" }));
console.log(func2(null));
console.log(func2(undefined));
