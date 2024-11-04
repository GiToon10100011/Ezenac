const x = ["a", "b", "c", "d", "e"];

x.splice(0, 1);
//b c d e

// splice() modifies the original array directly (mutates it)
// When we splice(2, 0, "a"):
// 1. Goes to index 2
// 2. Removes 0 elements (returns [])
// 3. Inserts "a" at that position
// Original array becomes: ["b", "c", "a", "d", "e"]
x.splice(2, 0, "a"); // returns []
//b, c, a, d, e,

const todos = {
  x: ["a", "b"],
  y: ["c", "d"],

}

Object.keys(todos)
//["x", "y"]

Object.values(todos)
//[[x의 배열], [y의배열]]

//todos[0] => ["a", "b"]
//todos["x"] => ["a", "b"]


export default x;
