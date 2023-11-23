const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);
//서로 다른 N개의 자연수의 합이 S라고 한다. S를 알 때, 자연수 N의 최댓값은 얼마일까?
let S = input[0];
let result = 0;
let i = 1;
let cnt = 0;
while (result !== S) {
  if (result + i + i + 1 > S) {
    i += i + (result + (i + 1) - S);
    result += i;
    cnt++;
    break;
  }
  result += i;
  i++;
  cnt++;
}
console.log(cnt);
