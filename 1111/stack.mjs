import { LinkedList } from "./linkedList.mjs";

export class Stack {
  constructor() {
    this.list = new LinkedList();
  }
  push(data) {
    this.list.insertAt(0, data);
  }

  pop(data) {
    try {
      return this.list.deleteAt(0);
    } catch (e) {
      return null;
    }
  }
  peek() {
    return this.list.getNodeAt(0);
  }

  isEmpty() {
    return this.list.count === 0;
  }
}
