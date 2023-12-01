const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input:
    process.platform === "linux"
      ? process.stdin
      : fs.createReadStream("input.txt"),
  output: process.stdout,
  terminal: false,
});

let inputLines = [];

rl.on("line", (line) => {
  inputLines.push(line);
});

rl.on("close", () => {
  const input = inputLines
    .map((line) => line.trim().split(" "))
    .map((el) => el.join("").split(""));

  let maxidx = inputLines
    .map((line) => line.trim().split(" "))
    .map((el) => el.join("").split(""))
    .sort((a, b) => b.length - a.length)[0].length;

  let result = [];
  for (let 열 = 0; 열 < maxidx; 열++) {
    for (let 행 = 0; 행 < input.length; 행++) {
      if (!input[행][열]) {
        continue;
      } else {
        result.push(input[행][열]);
      }
    }
  }
  console.log(result.join(""));
});