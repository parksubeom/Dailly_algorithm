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
스택2

1 X: 정수 X를 스택에 넣는다. (1 ≤ X ≤ 100,000)
2: 스택에 정수가 있다면 맨 위의 정수를 빼고 출력한다. 없다면 -1을 대신 출력한다.
3: 스택에 들어있는 정수의 개수를 출력한다.
4: 스택이 비어있으면 1, 아니면 0을 출력한다.
5: 스택에 정수가 있다면 맨 위의 정수를 출력한다. 없다면 -1을 대신 출력한다.
*/

rl.on("close", () => {
  const input = inputLines.slice(1).map((el) => el.split(" "));
  let result = [];

  let stack = [];
  for (let el of input) {
    if (el[0] === "1") {
      // 정수 X를 스택에 넣는다. (1 ≤ X ≤ 100,000)
      stack.push(Number(el[1]));
    } else if (el[0] === "2") {
      //스택에 정수가 있다면 맨 위의 정수를 빼고 출력한다. 없다면 -1을 대신 출력한다.
      if (stack.length) {
        result.push(stack.pop());
      } else {
        result.push(-1);
      }
    } else if (el[0] === "3") {
      //스택에 들어있는 정수의 개수를 출력한다.
      result.push(stack.length);
    } else if (el[0] === "4") {
      //스택이 비어있으면 1, 아니면 0을 출력한다.
      if (stack.length) {
        result.push(0);
      } else {
        result.push(1);
      }
    } else {
      //스택에 정수가 있다면 맨 위의 정수를 출력한다. 없다면 -1을 대신 출력한다.
      if (stack.length) {
        result.push(stack[stack.length - 1]);
      } else {
        result.push(-1);
      }
    }
  }
  console.log(result.join("\n"));
});
