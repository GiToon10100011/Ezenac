export class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

//양방향 연결리스트
export class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.count = 0;
    this.tail = null;
  }
  insertAt(index, data) {
    if (index > this.count || index < 0)
      throw new Error("추가할 수 있는 범위를 초과하였습니다.");
    let newNode = new Node(data);

    if (index === 0) {
      newNode.next = this.head;
      if (this.head !== null) {
        this.head.prev = newNode;
      }
      this.head = newNode;
      //마지막 요소이므로 다음값이 존재할 수 없음.
    } else if (index === this.count) {
      newNode.next = null;
      newNode.prev = this.tail;
      if (this.tail !== null) {
        this.tail.next = newNode;
      }
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      newNode.next = currentNode.next;
      newNode.prev = currentNode;
      currentNode.next = newNode;
      newNode.next.prev = newNode;
    }
    if (newNode.next === null) {
      this.tail = newNode;
    }
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
    this.tail = null;
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
      if (this.head.next === null) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      this.count--;
      //제거된 노드를 반환
      return deletedNode;
    } else if (index === this.count - 1) {
      let deletedNode = this.tail;
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
      this.count--;
      return deletedNode;
    } else {
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      let deletedNode = currentNode.next;
      currentNode.next = currentNode.next.next;
      currentNode.next.prev = currentNode;
      this.count--;
      return deletedNode;
    }
  }
  deleteLast() {
    return this.deleteAt(this.count - 1);
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
