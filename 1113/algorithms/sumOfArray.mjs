const arr = [1, 2, 3, 4, 5];

const sum = (array) => {
  if (array.length === 1 || array.length === 0) {
    return 1;
  } else {
    //처음 실행이 되었을때는 마지막값이 빠진 배열을 반환하여 [1, 2, 3, 4]가 됨
    return sum(array.slice(0, -1)) + array[array.length - 1];
  }
};

console.log(sum(arr));
