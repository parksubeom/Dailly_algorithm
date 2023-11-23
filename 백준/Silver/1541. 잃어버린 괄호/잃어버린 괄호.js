const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
let N = input[0].split("-");
let answer = 0;

for (let i = 0; i < N.length; i++) {
  let cur = N[i] // - 연산자 다음의 숫자두개를 묶어서 최대한 큰 수를 만든다.
    .split("+")
    .map(Number)
    .reduce((a, b) => a + b);
  if (i === 0) {
    answer += cur;
  } else {
    answer -= cur;
  }
}
console.log(answer);
