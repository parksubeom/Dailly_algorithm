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
    .map((el) => el.map((el) => +el));
  let result = [];
  let 몸무게 = 0;
  let 키 = 1;
  for (let i = 0; i < input.length; i++) {
    let cnt = 1;
    for (let x = 0; x < input.length; x++) {
      if (input[i][몸무게] < input[x][몸무게] && input[i][키] < input[x][키]) {
        // 나보다 큰 녀석이 있을 때 마다 내위에 몇명있는지 cnt해준다
        // 내위에 아무도 없다면 초기의 cnt 그대로 가기때문에 1등이다.

        cnt++;
      }
    }
    result.push(cnt);
  }
  console.log(result.join(" "));
});
