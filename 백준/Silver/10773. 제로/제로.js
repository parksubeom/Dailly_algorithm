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

*/

rl.on("close", () => {
  const input = inputLines.slice(1).map((el) => +el);
  let stack = [];
  for (let el of input) {
    if (el === 0) {
      stack.pop();
    } else {
      stack.push(el);
    }
  }
  console.log(stack.reduce((acc, cur) => acc + cur, 0));
});
