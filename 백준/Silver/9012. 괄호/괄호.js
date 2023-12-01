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
/*
괄호문제

열린문자가 들어오면 스택에 넣고 닫힌물자가 들어오면 스택에서 꺼낸다.
순회가 끝났을 떄 스택안에 괄호가 들어가있다면 그건 불완전한괄호이다.
무조건 열린게 있고 닫힌게있어야한다


*/

rl.on("close", () => {
  const input = inputLines.slice(1).map((el) => el.split(""));
  let stack = [];

  for (let el of input) {
    for (let x of el) {
      if (x === "(") {
        stack.push(x);
      } else if (x === ")") {
        if (stack.length < 1 || stack.indexOf(-1) !== -1) {
          stack.push(-1);
        } else {
          stack.pop();
        }
      }
    }
    if (stack.length > 0 || stack.indexOf(-1) !== -1) {
      console.log("NO");
    } else {
      console.log("YES");
    }
    stack = [];
  }
});