const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);
// 하프가 정수가 아니라면 이전에 오는연산값에 2를 곱하는 연산은 못한다.1
let target = input[1];
let init = input[0];
let cnt = 1;
let flag = false;
while (init <= target) {
  if (init === target) {
    flag = true;
    break;
  }
  if (target % 2 === 0) {
    target = target / 2;
  } else if (target % 10 === 1) {
    target = (target - 1) / 10;
  } else {
    break;
  }
  cnt++;
}
if (flag) {
  console.log(cnt);
} else {
  console.log(-1);
}