class List<T> {
  constructor(public list: T[]) {}
  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

// class StringList {
//   constructor(public list: string[]) {}
//   push(data: string) {
//     this.list.push(data);
//   }

//   pop() {
//     return this.list.pop();
//   }

//   print() {
//     console.log(this.list);
//   }
// }

const numberList = new List([1, 2, 3]);

//promise의 타입
interface IPost {
  id: number;
  title: string;
  content: string;
}

// const promise = new Promise<IPost>((resolve, reject) => {
//   setTimeout(() => {
//     resolve({
//       id: 1,
//       title: "제목",
//       content: "게시글 본문",
//     });
//   }, 1000);
// });

// promise.then((response) => {
//   console.log(response);
// });

// promise.catch((e) => {
//   if (typeof e === "string") console.error(e);
// });

//fetch의 타입
//이게 원래 fetch의 구동방식, promise객체를 반환함.
//그래서 반환되는 promise 객체의 반환값을 타입으로 주면된다.
const fetchPost = (): Promise<IPost> => {
  return new Promise<IPost>((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "제목",
        content: "게시글 본문",
      });
    }, 1000);
  });
};

//Indexed Access type
//인덱스 값을 활용해서 타입 안에 특정 속성값의 타입만 추출해내는 방법

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
    bio: "Seoul";
  };
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "David",
    age: 20,
    bio: "Seoul",
  },
};

const printAuthorInfo = (author: Post["author"]) => {
  console.log(`${author.id} - ${author.name}`);
};

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

const post01: PostList[number] = {
  title: "채식주의자",
  content: "채식을 하자!",
  author: {
    id: 1,
    name: "한강",
    age: 20,
  },
};

type Tuple = [number, string, boolean];
type Tuple2 = Tuple[0];
type Tuple3 = Tuple[1];
type Tuple4 = Tuple[2];
type Tuple5 = Tuple[number]


