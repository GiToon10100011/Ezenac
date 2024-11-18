let arr = [4, 1, 5, 3, 6, 2];

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let insertingData = arr[i];
    let j;
    //삽입할 위치를 찾음
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > insertingData) {
        //기존의 데이터를 복사해둠
        arr[j + 1] = arr[j];
      } else {
        //만약 정렬할 필요가 없이 이미 앞쪽이 작다면 break
        break;
      }
    }
    //대체시킬 데이터를 바꿔치기, -1이면 0이 되어야함. break로 끝났다면 j가 insertingData가 들어갈 위치의 바로 앞 인덱스가 된다. 이미 j는 i에서 -1이 된 상태이기 때문
    arr[j+1] = insertingData;
  }
};

console.log("정렬 전: ", arr);
insertionSort(arr);
console.log("정렬 후: ", arr);
