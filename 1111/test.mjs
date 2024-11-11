import { LinkedList } from "./linkedList.mjs";

console.log("연결리스트 생성");
let list = new LinkedList();

console.log(list);

console.log("insertAt함수 호출");
list.insertAt(0, 0);
console.log(list);
list.insertAt(1, 1);
console.log(list);
list.insertAt(2, 2);
console.log(list);
list.insertAt(3, 3);
console.log(list);
list.insertAt(4, 4);
console.log(list);
//앞단에서 이미count가 증가하였기때문에 중간에 값을 끼워넣어도 기존의 count값에서 증가가됨 (값이 추가되는 거므로 당연히 count값은 계속 증가하는거임.)
list.insertAt(2, 6);
console.log(list);

console.log("printAll함수 호출");
list.printAll();

console.log("clear함수 호출");
list.clear();
console.log(list);

console.log("insertLast함수 호출");
list.insertLast(0);
console.log(list);
list.insertLast(1);
console.log(list);
list.insertLast(2);
console.log(list);

list.printAll();

console.log("deleteAt함수 호출");
list.deleteAt(2);
console.log(list);

list.printAll();

console.log("deleteLast함수 호출");
list.deleteLast();
list.printAll();

console.log("insertLast함수 호출");
list.insertLast(2);
list.insertLast(3);
list.insertLast(4);
list.insertLast(5);
list.printAll();

console.log("getNodeAt함수 호출");
let secondNode = list.getNodeAt(2);
console.log(secondNode.data)
