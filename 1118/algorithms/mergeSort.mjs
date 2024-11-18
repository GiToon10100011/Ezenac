let arr = [6, 5, 2, 4, 1, 7, 8, 3];
let arr01 = [3, 5, 2, 4];
let arr02 = [1, 7, 8, 6];
let arr03 = [3, 5];
let arr04 = [2, 4];
let arr05 = [1, 7];
let arr06 = [6, 8];
//[2, 3, 4, 5]
//[1, 6, 7, 8]
//[1, 2, 3, 4, 5, 6, 7, 8]

//leftIndex - 해당 배열의 가장 좌측 인덱스값
//centerIndex - 해당 배열의 가장 가운데 인덱스값
//rightIndex - 해당 배열의 가장 우측 인덱스값

const merge = (arr, leftIndex, centerIndex, rightIndex) => {
  console.log(arr, leftIndex, centerIndex, rightIndex)
  let leftAreaIndex = leftIndex;
  let rightAreaIndex = centerIndex + 1;
  let tempArr = [];
  tempArr.length = rightIndex + 1;
  tempArr.fill(0, 0, rightIndex + 1);
  let tempArrIndex = leftIndex;
  while (leftAreaIndex <= centerIndex && rightAreaIndex <= rightIndex) {
    if (arr[leftAreaIndex] <= arr[rightAreaIndex]) {
      tempArr[tempArrIndex] = arr[leftAreaIndex++];
    } else {
      tempArr[tempArrIndex] = arr[rightAreaIndex++];
    }
    tempArrIndex++;
  }
  //왼쪽 부분배열이 먼저 검사가 끝나고 오른쪽배열에 남은 값들이 temp에 들어와야할경우
  if (leftAreaIndex > centerIndex) {
    for (let i = rightAreaIndex; i <= rightIndex; i++) {
      tempArr[tempArrIndex++] = arr[i];
    }
  } else {
    for (let i = leftAreaIndex; i <= centerIndex; i++) {
      tempArr[tempArrIndex++] = arr[i];
    }
  }

  for (let i = leftIndex; i <= rightIndex; i++) {
    arr[i] = tempArr[i];
  }
};

const mergeSort = (arr, leftIndex, rightIndex) => {
  if (leftIndex < rightIndex) {
    let centerIndex = parseInt((leftIndex + rightIndex) / 2);
    mergeSort(arr, leftIndex, centerIndex);
    mergeSort(arr, centerIndex + 1, rightIndex);
    merge(arr, leftIndex, centerIndex, rightIndex);
  }
};

// console.log("정렬 전: ", arr);
mergeSort(arr, 0, arr.length - 1);
// console.log("정렬 후: ", arr);
