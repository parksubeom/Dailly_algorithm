function solution() {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = fs.readFileSync(filePath).toString().trim().split(" ")[0];
  let result = [];
  let copy = input;
  for (let i = 0; i < input.length; i++) {
    result.push(copy);
    copy = copy.slice(1);
  }
  console.log(result.sort().join("\n"));
}
solution();
