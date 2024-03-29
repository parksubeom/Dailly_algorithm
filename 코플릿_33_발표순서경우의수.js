// 33_orderOfPresentation

// 조별 발표 순서에 대한 경우의 수를 차례대로 구하고,
// 선생님이 말하는 발표 순서가 몇 번째 경우의 수인지를 구해야 한다.

/*
순열이란, 서로 다른 n개의 원소 중에서 r개의 원소를 중복 없이 골라 순서에 상관 있게 나열하는 경우의 수를 말합니다.

예를 들어, [1, 2, 3] 이라는 3개의 원소가 있을 때, 
2개의 원소를 중복 없이 골라 나열하는 경우의 수는 다음과 같이 6가지가 됩니다.

[
  [1, 2],
  [1, 3],
  [2, 1],
  [2, 3],
  [3, 1],
  [3, 2]
]

수식으로 nPr = n! / (n-r)! 과 같이 나타낼 수 있습니다.
여기서 n은 전체 원소의 개수이고, 
r은 고르는 원소의 개수입니다. 
n!은 n의 계승을 의미하며, (n-r)!은 n-r의 계승을 의미합니다.
*/

// N은 조의 수를, K는 발표 순서를 나타내는 배열을 받습니다.
// 이 코드에서는 순열 개념을 활용해 모든 경우의 수를 구한 후, 
// 주어진 발표 순서 K가 몇 번째 경우인지 계산하는 방식으로 문제를 풀었습니다.
function orderOfPresentation (N, K) {
    // 우선, 팩토리얼 함수를 선언합니다.
    // 이 함수는 입력된 인자 n에 대해서 1부터 n까지의 모든 수의 곱을 계산하여 리턴합니다.
    const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
  
    // 그리고, 1부터 N까지의 수를 원소로 갖는 배열 sequence를 만듭니다.
    // 순열 개념을 활용해 모든 경우의 수를 구하기 위해, 전체 조원의 수 N을 이용해 1부터 N까지의 숫자를 배열에 담습니다.
    let sequence = Array.from({ length: N }, (_, i) => i + 1);
  
    // 결과값을 저장할 변수 result를 0으로 초기화합니다.
    let result = 0;
  
    // 발표 순서 배열 K의 길이만큼 반복
    // 각 반복문에서는 발표 순서 배열 K에서 현재 순서에 해당하는 수를 찾습니다.
    for (let i = 0; i < N; i++) {
  
      // sequence 배열에서 현재 순서의 수가 어느 인덱스에 있는지 indexOf 메소드를 사용하여 찾습니다.
      // 현재 순서의 수가 sequence 배열에서 몇 번째 위치하는지를 나타내는 index를 사용하여, 
      // 이번에 선택할 수가 몇 번째 경우의 수인지 계산합니다.
      // 발표 순서 K를 하나씩 탐색하면서, 해당 숫자의 인덱스를 구합니다.
      const index = sequence.indexOf(K[i]);
  
      // 이때, 선택한 수 이전의 수들은 모두 고정된 상태이므로, 가능한 경우의 수는 현재 선택할 수의 위치에 따라 달라집니다.
      // 현재 선택할 수의 위치에 따라 계산된 경우의 수를 누적하여 result에 더해줍니다.
      // 발표 순서 K에서 숫자를 하나씩 꺼내면서 해당 숫자가 나올 때마다, 해당 숫자가 위치할 수 있는 경우의 수를 계산합니다.
      // (N-i-1이 r이 되고, index는 n-r 중 r의 값을 구하는 것)
      result += index * factorial(N - i - 1);
  
      // 그리고, sequence 배열에서 선택한 수를 제거합니다.
      sequence.splice(index, 1);
    }
  
    // 모든 발표 순서 K에 대해 과정을 반복한 후, 결과값을 반환합니다.
    return result;
  }