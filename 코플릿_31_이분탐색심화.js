//31_getItemFromTwoSortedArrays
const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
    // 이분 탐색을 사용하여 시간 복잡도를 O(log(m+n))으로 줄일 수 있습니다.
  
    const m = arr1.length;
    const n = arr2.length;
  
    // left는 k - n과 0 중에서 큰 값을,
    // right는 k와 m 중에서 작은 값을 선택합니다.
    // 이렇게 하면 arr1과 arr2를 합쳤을 때 k번째 수는 left와 right 사이에 있을 수 있습니다. // 6
    let left = Math.max(0, k - n); // 2
    let right = Math.min(k, m); // 4
    
    // 이분탐색 시작
    // 2 < 4
    // left:2 , rigth: 3
    // 2 < 3
    while (left < right) {
      // left와 right를 반복적으로 이분해서 mid를 계산합니다.
      // mid = 3 // left: 2, mid: 3, right: 4 처음반복할땐 3
      // left:2 , rigth: 3 mid: 2 두번째 찾아봤을땐 2
      const mid = Math.floor((left + right) / 2);
  
      // mid를 이용하여 arr1에서 mid번째 수와 arr2에서 k - mid번째 수를 비교합니다. k:6, mid:3 6-3 3
      // 3를 이용해서 `[1, 4, 8, 10]`에서 3번째 수(8) [2, 3, 5, 9]; 3번째 수(5)
  
      // 이 때, arr1에서 mid번째 수가  arr2에서 k - mid번째 수 보다 작은 경우
      // arr2의 k - mid - 1번째 수는 arr1의 mid번째 수보다 작으므로
      // left를 mid + 1로 이동합니다.
  
      // arr2 [2, 3, 5, 9]; 6 - 2 - 1 // 3 arr[3] 
      if (arr2[k - mid - 1] > arr1[mid]) {
        left = mid + 1;
      } else {
        // 큰 경우 8 > 5
        // right: 4 => mid: 3이라는 값을 할당받고 rigth(가장 끝에 있는 인덱스) 한칸 왼쪽으로 이동하는 개념
        // 그렇지 않으면 right를 mid로 이동합니다.
        right = mid;
      }
    }
  
    // 반복문이 종료되면, left에는 arr1에서 k번째 수가 들어가게 됩니다.
    // 즉 arr1[left - 1]이 arr1에서 k번째 수가 됩니다.
    const arr1Val = arr1[left - 1];
  
    // arr2[k - left - 1]이 arr2에서 k번째 수가 됩니다.
    const arr2Val = arr2[k - left - 1];
  
    // arr1과 arr2에서 k번째 수를 각각 구했으므로, 이 두 수 중에서 큰 값을 반환하면 됩니다.
    return Math.max(arr1Val, arr2Val);
  };
  