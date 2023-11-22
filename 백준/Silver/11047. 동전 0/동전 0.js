const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
let target = input[0].split(" ")[1];
let coin = input
  .slice(1)
  .sort((a, b) => Number(b) - Number(a))
  .map(Number)
  .filter((el) => el <= target);
let cnt = 0;
let i = 0;
while (target !== 0) {
  if (target < coin[i]) {
    i++;
  } else {
    target -= coin[i];
    cnt++;
  }
}
console.log(cnt);
