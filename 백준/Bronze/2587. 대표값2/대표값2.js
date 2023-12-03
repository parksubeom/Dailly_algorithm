const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input:
    process.platform === "linux"
      ? process.stdin
      : fs.createReadStream("input.txt"),
  output: process.stdout,
  terminal: false,
});

let inputLines = [];

rl.on("line", (line) => {
  inputLines.push(line);
});
/*
도키도키 간식드리미

현재 간식받을 차례를 기록하는 변수 target을 만든다.
스택에서 맨앞의 수 부터 빼는데, 이 맨앞의 수가 타겟이 아니라면 웨이팅 배열로 이동시킨다.
타겟이 바뀌면, 웨이팅배열과 스택배열에 다음타겟이 있는지 확인한다.


*/

rl.on("close", () => {
  const input = inputLines
    .map((el) => el.split(" "))
    .flat()
    .map((el) => +el)
    .sort((a, b) => a - b);
  let N = input.length;
  console.log(input.reduce((acc, cur) => acc + cur, 0) / N);
  console.log(input[Math.floor(input.length / 2)]);
});
