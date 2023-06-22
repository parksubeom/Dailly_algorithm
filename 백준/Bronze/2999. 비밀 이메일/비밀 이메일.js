/*
문제키워드
R<=C
R*C=N인 R과C를 고른다.
만일 이러한 경우가 여러 개일 경우, R이 큰 값을 선택한다.
R = 행
C = 열
N = 글자수
행 * 열 = 글자수

의사코드
1.N의 약수가 홀수라면 약수 중 가운데 수가 R 과 C
  약수가 짝수라면 (약수.length/2)-1 번째 인덱스가 R, 약수.length/2 인덱스가 C

2. result 배열에 요소로 input 문자열을 C개씩 자른 배열을 넣는다.
3. asnwer 문자열에 result배열을 순회하며 i열의 j행을 집어넣는다.
4. 완성된 answer배열을 join으로 문자열로 치환 후 리턴한다.
*/
function solution() {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = [
    ...fs.readFileSync(filePath).toString().trim().split(" ").join(""),
  ];
  let N = input.length;
  let R = 0;
  let C = 0;
  let 약수 = [];
  let result = [];
  let answer = [];
  for (let i = 1; i <= N; i++) {
    if (N % i === 0) {
      약수.push(i);
    }
  }
  if (약수.length % 2 === 1) {
    R = 약수[Math.floor(약수.length / 2)];
    C = 약수[Math.floor(약수.length / 2)];
  } else {
    R = 약수[약수.length / 2 - 1];
    C = 약수[약수.length / 2];
  }
  for (let j = 0; j < C; j++) {
    result.push(input.splice(0, R));
  }
  for (let x = 0; x < R; x++) {
    for (let y = 0; y < result.length; y++) {
      answer.push(result[y][x]);
    }
  }
  console.log(answer.join(""));
}
solution();