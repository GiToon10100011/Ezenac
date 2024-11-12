import { Deque } from "./deque.mjs";

let deque = new Deque();

console.log("addFirst 호출");
deque.addFirst(1);
deque.addFirst(2);
deque.addFirst(3);
deque.addFirst(4);
deque.printAll();
console.log(`isEmpty: ${deque.isEmpty()}`);

console.log("removeFirst 호출");
deque.removeFirst();
deque.printAll();
deque.removeFirst();
deque.printAll();
deque.removeFirst();
deque.printAll();
deque.removeFirst();
deque.printAll();

console.log("addLast 호출");
deque.addLast(1);
deque.addLast(2);
deque.addLast(3);
deque.addLast(4);
deque.printAll();
console.log(`isEmpty: ${deque.isEmpty()}`);

console.log("removeLast 호출");
deque.removeLast();
deque.printAll();
deque.removeLast();
deque.printAll();
deque.removeLast();
deque.printAll();
deque.removeLast();
deque.printAll();
console.log(`isEmpty: ${deque.isEmpty()}`);
