function solution() {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map(Number);
  const N = input[0];
  const K = input[1];
  let arr = [];
  let cnt = 1;
  let result = [];
  for (let i = 1; i <= N; i++) {
    arr.push(i);
  }
  while (arr.length) {
    let data = arr.shift();
    if (cnt % K === 0) {
      result.push(data);
    } else {
      arr.push(data);
    }
    cnt++;
  }

  return console.log(`<${result.join(", ")}>`);
}
solution()