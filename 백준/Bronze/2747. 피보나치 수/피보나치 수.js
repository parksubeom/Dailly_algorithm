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
덩치


키포인트
완벽하게 본인보다 덩치가 큰 사람들의 수를 카운트한다
*/

rl.on("close", () => {
  const input = inputLines
    .map((el) => el.split(" "))
    .map((el) => el.map((el) => +el))
    .flat();
  let i = 0;
  let acc = 0;
  let cur = 1;
  let result = [];
  while (i < input[0]) {
    result.push(acc);
    acc += cur;
    result.push(cur);
    cur += acc;
    i++;
  }
  if (input[0] === 0) {
    console.log(0);
  } else {
    console.log(result[input[0]]);
  }
});
