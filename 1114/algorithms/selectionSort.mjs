let arr = [4, 2, 1, 3];

const selectionSort = (arr) => {
  //하나를 선택해서 정렬의 기준을 잡으므로 하나를 뺌
  for (let i = 0; i < arr.length - 1; i++) {
    //최초의 인덱스를 먼저 정해둠.
    let minValueIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minValueIndex]) {
        minValueIndex = j;
      }
    }
    let temp = arr[i]; //4
    arr[i] = arr[minValueIndex]; //4 = 1
    arr[minValueIndex] = temp; //1 = 4
  }
};

console.log("선택정렬 전");
console.log(arr);

selectionSort(arr);

console.log("선택정렬 후");
console.log(arr);
