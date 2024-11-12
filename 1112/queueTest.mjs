import { Queue } from "./queue.mjs";

let queue = new Queue();
console.log("enqueue호출");
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue);
console.log(queue.front());
console.log("dequeue 호출");
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.isEmpty());
