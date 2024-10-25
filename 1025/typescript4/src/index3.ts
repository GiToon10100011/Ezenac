//Keyof 연산자

// interface Person {
//   name: string;
//   age: number;
//   location: string;
// }

const person = {
  name: "전진우",
  age: 20,
  location: "seoul",
};

type Person = typeof person;

const getProperty = (person: Person, key: keyof typeof person) => {
  return person[key];
};

//맵드 타입
interface Iuser {
  id: number;
  name: string;
  age: number;
}

type PartialIuser = {
  [key in keyof Iuser]?: Iuser[key];
};

//사용자의 정보를 찾아오는 역할을 하는 함수
const fetchUser = (): Iuser => {
  return {
    id: 1,
    name: "염동훈",
    age: 20,
  };
};

//사용자의 정보를 업데이트하는 역할의 함수
const updateUser = (user: PartialIuser) => {
  console.log(user);
};

updateUser({ id: 10, age: 20 });
