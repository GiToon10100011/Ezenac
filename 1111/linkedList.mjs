export class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// let node1 = new Node(1);
// let node2 = new Node(2);
// let node3 = new Node(3);

// node1.next = node2;
// node2.next = node3;

// console.log(node1.data);
// console.log(node1.next.data);
// console.log(node1.next.next.data);

export class LinkedList {
  constructor() {
    this.head = null;
    this.count = 0;
  }
  insertAt(index, data) {
    if (index > this.count || index < 0)
      throw new Error("추가할 수 있는 범위를 초과하였습니다.");
    let newNode = new Node(data);

    //새로추가한 노드가 head의 역할이 될 수도 있을때
    if (index === 0) {
      //기존의 head를 밀어냄
      // 새 노드가 현재 head를 가리키게 함
      newNode.next = this.head;
      // head를 새 노드로 변경
      this.head = newNode;
    } else {
      //누군가는 head의 역할을 하고 있음. 이를 currentNode로 지정
      let currentNode = this.head;
      //next를 계속 만들어줘서 head를 움직임
      //삽입 위치 직전까지 이동 (INDEX-1)
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      //이동이 완료된 후에는 내가 삽입하고 싶은 위치의 바로 앞까지 왔으므로 next로 다음 위치로 이동
      newNode.next = currentNode.next;
      //해당 위치에 값을 삽입
      currentNode.next = newNode;
    }
    //count는 유효성 검사를 통해 예외사항이 발생하지 않으므로 무조건 크기에 동기화돼서 증가할 수밖에 없음.
    this.count++;
  }
  printAll() {
    let text = "[";
    let currentNode = this.head;
    while (currentNode !== null) {
      text += currentNode.data;
      currentNode = currentNode.next;
      if (currentNode !== null) {
        text += ", ";
      }
    }
    text += "]";
    console.log(text);
  }
  clear() {
    this.head = null;
    this.count = 0;
  }
  insertLast(data) {
    this.insertAt(this.count, data);
  }
  deleteAt(index) {
    if (index >= this.count || index < 0)
      throw new Error("제거할 수 있는 범위를 초과하였습니다.");
    let currentNode = this.head;

    if (index === 0) {
      let deletedNode = this.head;
      this.head = this.head.next;
      this.count--;
      //제거된 연결리스트를 반환
      return deletedNode;
    } else {
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      let deletedNode = currentNode;
      currentNode.next = currentNode.next.next;
      this.count--;
      return deletedNode;
    }
  }
  deleteLast() {
    this.deleteAt(this.count - 1);
  }
  getNodeAt(index) {
    if (index >= this.count || index < 0)
      throw new Error("읽을 수 있는 범위를 초과하였습니다.");
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }
}
