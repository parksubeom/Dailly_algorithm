const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" "));
/* 
회의실 배정
1.최대한 한 회의실에 많이 묶어야한다.
2.회의가 일찍 끝나는 순서대로 정렬한 후, 이전회의의 종료시간 <= 다음회의 시작시간 인 회의들을 잡는다,
*/
let N = input[0].map(Number);
let task = input
  .slice(1)
  .map(([start, end]) => [Number(start), Number(end)])
  .sort((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[1];
    }
  });
let cnt = 1,
  cur = 0;

for (let i = 1; i < N; i++) {
  if (task[cur][1] <= task[i][0]) {
    cur = i;
    cnt++;
  }
}

console.log(cnt);