const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let [A, B] = input;
console.log(A * B[2]);
console.log(A * B[1]);
console.log(A * B[0]);
console.log(A * B);
