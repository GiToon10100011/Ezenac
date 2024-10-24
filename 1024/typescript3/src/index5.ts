class Student {
  //필드
  //인스턴스 객체의 키값을 정의하는 공간
  private name;
  protected age;
  grade;

  //생성자
  constructor(name: string, age: number, grade: string) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  //메소드
  //메소드 안에서 클래스 내 요소에 접근하려면 this접근제어자 사용
  study() {
    console.log("공부중");
  }

  introduce() {
    console.log(`저는 ${this.name}이라고 합니다`);
  }
}

const student = new Student("염동훈", 97, "F");
student.introduce();

class StudentDeveloper extends Student {
  favSkill;
  constructor(name: string, age: number, grade: string, favSkill: string) {
    super(name, age, grade);
    this.favSkill = favSkill;
  }

  // func() {
  //   console.log(this.name, this.age)
  // }

  programming() {
    console.log(`${this.favSkill}으로 프로그래밍 합니다.`);
  }
}

const studentDeveloper = new StudentDeveloper("전진우", 22, "A+", "Typescript");
studentDeveloper.programming(); 


//접근제어자
