type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// const login = (user: User) => {
//   if ("kickCount" in user) {
//     console.log(`${user.name}은 관리자이며, ${user.kickCount}회 관리했습니다.`);
//   } else if ("point" in user) {
//     console.log(`${user.name}은 회원이며, ${user.point}원이 적립됐습니다.`);
//   } else {
//     console.log(
//       `${user.name}은 게스트이며, 방문횟수는 ${user.visitCount}번 입니다.`
//     );
//   }
// };

const login = (user: User) => {
  switch (user.tag) {
    case "ADMIN": {
      console.log(
        `${user.name}은 관리자이며, ${user.kickCount}회 관리했습니다.`
      );
      break;
    }
    case "MEMBER": {
      console.log(`${user.name}은 회원이며, ${user.point}원이 적립됐습니다.`);
      break;
    }
    case "GUEST": {
      console.log(
        `${user.name}은 게스트이며, 방문횟수는 ${user.visitCount}번 입니다.`
      );
      break;
    }
  }
};

//외부 API 데이터를 찾아올 때 타입을 지정하는 법

// const loading = {
//   state: "LOADING",
// };

// const failed = {
//   state: "FAILED",
//   error: {
//     message: "오류발생..",
//   },
// };

// const success = {
//   state: "SUCCESS",
//   response: {
//     data: "Movie...",
//   },
// };

// type AsyncTask = {
//   state: "LOADING" | "FAILED" | "SUCCESS";
//   error?: {
//     message: string;
//   };
//   response?: {
//     data: string;
//   };
// };

type LoadingTask = {
  state: "LOADING";
};

type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};

type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

const processResult = (task: AsyncTask) => {
  switch (task.state) {
    case "LOADING": {
      console.log("로딩 중...");
      break;
    }
    case "FAILED": {
      console.log(`--삐빅 ${task.error.message} 에러발생--`);
      break;
    }
    case "SUCCESS": {
      console.log(task.response.data);
    }
  }
};
