import { HashSet } from "./hashSet.mjs";

let hashSet = new HashSet();

console.log(`isEmpty: ${hashSet.isEmpty()}`);
console.log("데이터 삽입");
hashSet.add(1);
hashSet.add(123);
hashSet.add(12);
hashSet.add(512);
hashSet.printAll();
console.log(`isEmpty: ${hashSet.isEmpty()}`);
console.log("데이터 체크");
console.log(`isContain: ${hashSet.isContain(1)}`);
console.log("데이터 제거");
hashSet.remove(1);
hashSet.printAll();
console.log(`isEmpty: ${hashSet.isEmpty()}`);
console.log(`isContain: ${hashSet.isContain(1)}`);
console.log("clear() 호출");
hashSet.clear();
console.log(`isEmpty: ${hashSet.isEmpty()}`);
