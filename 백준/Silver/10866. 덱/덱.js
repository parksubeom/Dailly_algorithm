function solution() {
  /*
      문제 : 명령어대로 처리해라
      의사코드
      명령대로 조건문을 줘서 처리한다.
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
    if (el.split(" ")[0] === "push_front") {
      result.unshift(Number(el.split(" ")[1]));
    } else if (el.split(" ")[0] === "push_back") {
      result.push(Number(el.split(" ")[1]));
    } else if (el === "pop_front") {
      answer.push(result.length !== 0 ? result.shift() : -1);
    } else if (el === "pop_back") {
      answer.push(result.length !== 0 ? result.pop() : -1);
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
