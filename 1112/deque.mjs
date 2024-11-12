import { DoublyLinkedList } from "./doublyLinkedList.mjs";

//양방향 연결리스트를 활용한 데크 추상자료형

export class Deque {
  constructor() {
    this.list = new DoublyLinkedList();
  }

  printAll() {
    this.list.printAll();
  }

  addFirst(data) {
    this.list.insertAt(0, data);
  }

  removeFirst() {
    this.list.deleteAt(0);
  }

  addLast(data) {
    this.list.insertLast(data);
  }

  removeLast() {
    this.list.deleteLast();
  }

  isEmpty() {
    return this.list.count === 0;
  }
}
