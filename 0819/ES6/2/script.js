//map & set
//배열 : 인덱스, 개수, 요소를 넣고 빼는게 자유로움
//객체 : 프로퍼티라는 자료의 형태를 유지함 (*키를 통해 어떤 자료가 무슨 의미인지를 확인)
//배열과 객체의 장점을 모두 합친거 => map

const bag = new Map();
bag.set("color", "red");
const myCup = new Map([
  ["color", "white"],
  ["material", "ceramic"],
  ["capacity", "300ml"]
])

myCup.set("type", "mini");
console.log(myCup);