const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

let 체스판 = [1, 1, 2, 2, 2, 8];
let 중고 = input.map(Number);
console.log(
  체스판
    .map((el, idx) => el - 중고[idx])
    .join(" ")
    .trim()
);
