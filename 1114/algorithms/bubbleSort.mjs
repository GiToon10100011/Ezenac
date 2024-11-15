let arr = [4, 2, 3, 1];

const bubbleSort = (arr) => {
  //인접한 두쌍씩만 비교하면 3번만 가능함 (5개면 4번) 그래서 1을 빼줌
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};

console.log("버블정렬 전");
console.log(arr);

bubbleSort(arr);

console.log("버블정렬 후");
console.log(arr);
