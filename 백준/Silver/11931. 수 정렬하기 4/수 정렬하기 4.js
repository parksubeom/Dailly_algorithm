function solution() {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");

  let result = input.slice(1);
  console.log(result.sort((a, b) => b - a).join("\n"));
}

solution();