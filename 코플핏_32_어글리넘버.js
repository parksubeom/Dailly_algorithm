/*
32_uglyNumbers
이 코드는 주어진 숫자 n에 대해, n번째 "ugly number"를 찾는 문제를 해결하는 알고리즘입니다.
"ugly number"는 다음과 같은 세 개의 소인수 (2, 3, 5)만을 가지는 양의 정수를 말합니다.
*/

const uglyNumbers = function (n) {
    // 이 알고리즘은 1부터 시작하여, 첫 번째 ugly number인 1을 배열 uglies에 넣습니다.
    // 1부터 시작하는 순서를 따르기 위해 첫 번째 수는 1로 지정합니다.
    const uglies = [1];
  
    // 그리고 2, 3, 5의 인덱스를 나타내는 변수 i2, i3, i5를 초기화합니다.
    let i2 = 0,
      i3 = 0,
      i5 = 0; // 2, 3, 5의 인덱스를 나타내는 변수를 초기화합니다.
  
    // uglies 배열의 길이가 n보다 작은 동안, 다음을 반복합니다.
    while (uglies.length < n) {
      // 각각 2, 3, 5를 곱한 수 중 가장 작은 수를 다음 ugly number로 추가합니다.
      const nextMultipleOf2 = uglies[i2] * 2;
      const nextMultipleOf3 = uglies[i3] * 3;
      const nextMultipleOf5 = uglies[i5] * 5;
  
      // (2, 3, 5를 곱한 수 중 가장 작은 수를 찾아서 uglies 배열에 추가)
      const nextUgly = Math.min(nextMultipleOf2, nextMultipleOf3, nextMultipleOf5);
      uglies.push(nextUgly);
  
      // 다음 ugly number에 곱할 2, 3, 5의 인덱스를 조정합니다.
      // 이렇게 함으로써, 2, 3, 5를 곱한 수 중에서 현재 가장 작은 수가 무엇인지를 유지합니다.
      if (nextUgly === nextMultipleOf2) {
        i2 += 1;
      }
      if (nextUgly === nextMultipleOf3) {
        i3 += 1;
      }
      if (nextUgly === nextMultipleOf5) {
        i5 += 1;
      }
    }
  
    // uglies 배열의 길이가 n이 되면, uglies[n - 1]을 리턴합니다. 이는 n번째 ugly number를 의미합니다.
    // n번째 ugly number를 리턴합니다.
    return uglies[n - 1];
  };