let arr = [4, 2, 1, 3];

const selectionSort = (arr) => {
  //하나를 선택해서 정렬의 기준을 잡으므로 하나를 뺌
  for (let i = 0; i < arr.length - 1; i++) {
    let minValueIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minValueIndex]) {
        minValueIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minValueIndex];
    arr[minValueIndex] = temp;
  }
};

console.log("선택정렬 전");
console.log(arr);

selectionSort(arr);

console.log("선택정렬 후");
console.log(arr);
