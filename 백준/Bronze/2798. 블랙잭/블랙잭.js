const readline = require("readline");
const fs = require("fs");
const { start } = require("repl");

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
/*
블랙잭

card들을 3장 더한 모든 경우의 수 중, 타겟보다 이하의 값만 result 배열에 담고, 이중에 최대값만 뽑는다.
*/

rl.on("close", () => {
  const input = inputLines.map((el) => el.split(" "));
  let target = Number(input[0][1]);
  let card = input[1].map((el) => +el);
  let result = [];

  for (let i = 0; i < card.length; i++) {
    for (let x = i + 1; x < card.length; x++) {
      for (let y = x + 1; y < card.length; y++) {
        let sum = card[i] + card[x] + card[y];
        if (sum <= target) {
          result.push(sum);
          sum = 0;
        }
      }
    }
  }
  console.log(Math.max(...result));
});
