function solution() {
  /*
        문제 : 명령어대로 처리해라
        의사코드
        명령대로 조건문을 줘서 처리한다.
        조건분기마다 콘솔로그를 찍으면 시간초과가 난다.
        답을 answer에 담아서 한번에 출력하자
         */
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = fs
    .readFileSync(filePath)
    .toString()
    .replace(/\r/g, "")
    .trim()
    .split("\n")
    .slice(1);
  let result = [];
  let answer = [];
  for (let el of input) {
    if (el.split(" ")[0] === "push") {
      result.push(Number(el.split(" ")[1]));
    } else if (el === "pop") {
      answer.push(result.length !== 0 ? result.shift() : -1);
    } else if (el === "size") {
      answer.push(result.length);
    } else if (el === "empty") {
      answer.push(result.length !== 0 ? 0 : 1);
    } else if (el === "front") {
      answer.push(result.length !== 0 ? result[0] : -1);
    } else if (el === "back") {
      answer.push(result.length !== 0 ? result[result.length - 1] : -1);
    }
  }
  console.log(answer.join("\n"));
}
solution();
