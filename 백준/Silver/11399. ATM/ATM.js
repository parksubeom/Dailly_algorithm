const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
let N = input[0];
let P = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let answer = 0;
let i = 0;
for (let el of P) {
  answer += P.slice(0, i + 1).reduce((acc, cur) => acc + cur, 0);
  i++;
}
console.log(answer);