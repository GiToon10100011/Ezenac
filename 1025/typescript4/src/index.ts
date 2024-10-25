//forEach문을 선언형 방식으로 type을 정의한 예시
const forEach = <T>(arr: T[], callback: (item: T) => void) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
};

//함수가 아닌 곳에서도 제네릭을 사용
//타입별칭 | 인덱스 시그니처 | 제네릭

type Map2<T> = {
  //타입이 아직 미정
  [key: string]: T;
};

const stringMap2: Map2<string> = {
  name: "염동훈",
  nickname: "할아버지",
};

const stringMap3: Map2<number> = {
  age: 20,
  birthYear: 2003,
};

//제네릭 + 인터페이스

interface IKeyPair<T, U> {
  key: T;
  value: U;
}

const keyPair: IKeyPair<string, number> = {
  key: "key",
  value: 0,
};

const keyPair2: IKeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

interface Developer {
  type: string;
  skill: string;
}

interface Student {
  type: string;
  school: string;
}

interface Iuser<T> {
  name: string;
  profile: T;
}

const developerUser: Iuser<Developer> = {
  name: "염동훈",
  profile: {
    type: "developer",
    skill: "typescript",
  },
};

const studentUser: Iuser<Student> = {
  name: "전진우",
  profile: {
    type: "student",
    school: "서울대학교",
  },
};

//근데 이렇게하면 student의 형태만 들어올 수 있는 함수가 되잖아. 유동적이지가 않은데.. 제네릭내의 인자를 검사할 수 있는 코드는없나
const gotoSchool = (user: Iuser<Student>): void => {
  const school = user.profile.school;
  console.log(`${school}로 등교중..`);
};


