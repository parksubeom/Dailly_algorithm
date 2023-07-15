function solution() {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");
  const N = input[0];
  const member = input.slice(1);
  member.sort((a, b) => a.split(" ")[0] - b.split(" ")[0]);
  console.log(member.join("\n"));
}

solution();
