import { DoublyLinkedList } from "./doublyLinkedList.mjs";

export class Queue {
  constructor() {
    this.list = new DoublyLinkedList();
  }

  enqueue(data) {
    this.list.insertAt(0, data);
  }

  dequeue() {
    //모두 삭제된후에 또 삭제한 상황이 발생한다면 null을 반환하기 위해 trycatch를 사용
    try {
      return this.list.deleteAt(0);
    } catch (error) {
      return null;
    }
  }

  front() {
    if (this.isEmpty()) {
      return null;
    }
    return this.list.head.data;
  }

  isEmpty() {
    return this.list.count === 0;
  }
}
