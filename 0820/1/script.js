let bag = new Map();
bag.set("color", "red").set("brand", "hermes");
console.log(bag);

let myCup = new Map([
  ["color", "white"],
  ["material", "ceramic"],
  ["capacity", "300mL"],
]);
console.log(myCup);
myCup.set("type", "mini");
console.log(myCup);

console.log(myCup.get("color"));
console.log(myCup.size);
console.log(myCup.has("color"));
console.log(myCup.delete("color"), myCup);
// console.log(myCup.clear(), myCup);

console.log(myCup.entries());

for(let key of myCup.keys()){
  console.log(key);
}
for(let key of myCup.values()){
  console.log(key);
}
for(let key of myCup.entries()){
  console.log(key);
}