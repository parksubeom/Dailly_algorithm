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


rl.on("close", () => {
  const input = inputLines.map((el) => +el)[0];
  let result = 1;
  function dfs(n) {
    if (n === 0) {
      return;
    }
    result *= n;
    dfs(n - 1);
  }
  dfs(input);
  console.log(result);
});
