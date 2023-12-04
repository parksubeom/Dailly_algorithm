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
  inputLines.push([...line]);
});
/*
균형잡힌세상

입력값에서 괄호만 필터링한다.
단어들은 필요없다.
대괄호 소괄호용 스택을 두개만들어보자.
두개의 스택을 만들고 이 후 로직은 이전 괄호문제와 동일하다
*/

rl.on("close", () => {
  const input = inputLines
    .slice(0, inputLines.length - 1)
    .map((el) =>
      el.filter((x) => x === "(" || x === ")" || x === "[" || x === "]")
    );

  let result = "";

  for (let el of input) {
    let stack = [];
    for (let x of el) {
      let length = stack.length;
      if (x === "(" || x === "[") {
        stack.push(x);
      } else if (x === ")") {
        length === 0 || stack[length - 1] !== "(" ? stack.push(x) : stack.pop();
      } else if (x === "]") {
        length === 0 || stack[length - 1] !== "[" ? stack.push(x) : stack.pop();
      }
    }
    stack.length === 0 ? (result += "yes\n") : (result += "no\n");
  }
  console.log(result.substring(0, result.length - 1));
  result = "";
});
