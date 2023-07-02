/*
입력값 처리:

첫 번째 줄에서 N을 가져옵니다. N은 이차원 배열의 크기를 나타냅니다.
나머지 줄에서 숫자들을 2차원 배열 형태로 저장합니다. 각 숫자는 문자열로 입력되었으므로 map(Number)를 사용하여 숫자로 변환합니다.
쿼드 트리 함수 정의:

quadTree라는 배열을 생성합니다. 이 배열은 쿼드 트리로 변환된 결과를 저장할 것입니다.
재귀 함수인 recursion을 정의합니다. 이 함수는 다음의 매개변수를 받습니다: n(현재 영역의 크기), x(시작 x 좌표), y(시작 y 좌표).
total이라는 변수를 생성하고 0으로 초기화합니다. 이 변수는 현재 영역 내의 모든 숫자의 합을 나타냅니다.
이중 반복문을 사용하여 현재 영역 내의 모든 숫자를 합산합니다.
total이 0과 같다면, 현재 영역 내의 모든 숫자가 0이므로 quadTree 배열에 0을 추가합니다.
total이 n * n과 같다면, 현재 영역 내의 모든 숫자가 1이므로 quadTree 배열에 1을 추가합니다.
그렇지 않은 경우, 현재 영역을 4개의 작은 영역으로 분할하고 재귀적으로 recursion 함수를 호출합니다.
quadTree 배열에 "("를 추가합니다.
왼쪽 위 영역 (x, y)에 대해 recursion 함수를 호출합니다.
오른쪽 위 영역 (x + n, y)에 대해 recursion 함수를 호출합니다.
왼쪽 아래 영역 (x, y + n)에 대해 recursion 함수를 호출합니다.
오른쪽 아래 영역 (x + n, y + n)에 대해 recursion 함수를 호출합니다.
quadTree 배열에 ")"를 추가합니다.
쿼드 트리 함수 호출:

recursion 함수를 N, 0, 0으로 호출하여 전체 영역에 대한 쿼드 트리를 생성합니다.
결과 출력:

quadTree 배열의 요소들을 문자열로 결합하여 출력합니다.
*/
let fs = require("fs");
let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const nums = input.slice(1).map((v) => v.split("").map(Number));

const quadTree = [];

function recursion(n, x, y) {
  let total = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      total += nums[y + j][x + i];
    }
  }

  if (total === 0) quadTree.push(0);
  else if (total === n * n) quadTree.push(1);
  else {
    n /= 2;
    quadTree.push("(");
    recursion(n, x, y);
    recursion(n, x + n, y);
    recursion(n, x, y + n);
    recursion(n, x + n, y + n);
    quadTree.push(")");
  }
}

recursion(N, 0, 0);
console.log(quadTree.join(""));