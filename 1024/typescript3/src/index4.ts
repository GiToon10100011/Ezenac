//인터페이스
// interface IPerson {
//   name: string;
//   age?: number;
//   sayHi: () => void;
// }

// const person: IPerson = {
//   name: "염동훈",
//   sayHi: () => {
//     console.log("Hi");
//   },
// };

// const person2: IPerson = {
//   name: "Peter",
//   age: 20,
// };

// type Type1 = number | string;
// type Type2 = number & string;

// interface Person1 {
//   name: string;
//   age: number;
// }

// type Type3 = number | string | IPerson;
// const person3: Type3 = {
//   name: "염동훈",
//   age: 97,
// };

interface IAnimal {
  name: string;
  age: number;
}

// interface IDog {
//   name: string;
//   age: number;
//   isBark: boolean;
// }

// interface ICat {
//   name: string;
//   age: number;
//   isMeow: boolean;
// }

// interface IChicken {
//   name: string;
//   age: number;
//   isFly: boolean;
// }

interface IDog extends IAnimal {
  isBark: boolean;
}
interface ICat extends IAnimal {
  isMeow: boolean;
}
interface IChicken extends IAnimal {
  isFly: boolean;
}

interface IDogCat extends IDog, ICat {
  breed: string;
}

const dog: IDog = {
  name: "뽀삐",
  age: 5,
  isBark: true,
};
