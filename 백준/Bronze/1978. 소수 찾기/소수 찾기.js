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
    .slice(1)
    .map((el) => el.split(" "))
    .map((el) => el.map((el) => +el))
    .flat();

  function isPrime(num) {
    if (num === 1) {
      return false;
    }
    if (num === 2) {
      return true;
    }

    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
      if (num % i === 0) {
        // 한 번이라도 나누어 졌으니 소수가 아니므로 return false
        return false;
      }
    }
    // 나눠진 수가 없다면 해당 수는 소수이므로 return true
    return true;
  }

  console.log(input.filter((el) => isPrime(el)).length);
});
