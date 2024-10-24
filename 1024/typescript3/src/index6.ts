interface ICharacter {
  name: string;
  moveSpeed: number;
  move: () => void;
}

class Character implements ICharacter {
  constructor(public name: string, public moveSpeed: number) {}

  move() {
    console.log(`${this.moveSpeed}m/s의 속도로 움직이는 중..`);
  }
}
