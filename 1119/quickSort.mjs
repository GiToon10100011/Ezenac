let arr = [5, 3, 7, 2, 6, 4, 9, 1, 8];

// 공통정의: 배열은 9개의 숫자 아이템을 지닌 자료구조로 가정, 배열의 0번째 인덱스(pivot)은 5, 배열의 마지막 인덱스는 8

// 1. 먼저 배열의 0번째 인덱스를 기준값으로 정함 (pivot)
// 2. 비교할 값들은 pivot을 제외한 나머지 아이템들
// 3. 비굣값 내 첫번째 인덱스(3)를 leftPointer로 지정
// 4. 비굣값 내 마지막 인덱스(8)를 rightPointer로 지정

// 규칙
// leftPointer는 오른쪽으로 한칸씩 이동, pivot값보다 큰숫자를 만나면 멈춤
// rightPointer는 왼쪽으로 한칸씩 이동, pivot보다 작은 숫자를 만나면 멈춤
// 위의 두 포인터들이 조건에 충족되어 중간에 멈추게 된다면 두숫자를 교체를 함
// leftPointer와 rightPointe가 서로 교차가 되는 시점이 오면, rightPointer는 pivot과의 값이 교체됨.

const swap = (arr, idx1, idx2) => {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
};

const divide = (arr, head, tail) => {
  let pivot = arr[head];
  let leftPointer = head + 1;
  let rightPointer = tail;
  while (leftPointer <= rightPointer) {
    while (leftPointer <= tail && pivot >= arr[leftPointer]) {
      leftPointer++;
    }
    while (rightPointer >= head + 1 && pivot <= arr[rightPointer]) {
      rightPointer--;
    }

    if (leftPointer <= rightPointer) {
      swap(arr, leftPointer, rightPointer);
    }
  }

  swap(arr, head, rightPointer);
  return rightPointer;
};

const quickSort = (arr, head, tail) => {
  if (head <= tail) {
    //pivot을 정의하는 함수
    let pivot = divide(arr, head, tail);
    quickSort(arr, head, pivot - 1);
    quickSort(arr, pivot + 1, pivot - 1);
  }
};

console.log("정렬 전: ", arr);
quickSort(arr, 0, arr.length - 1);
console.log("정렬 후: ", arr);
