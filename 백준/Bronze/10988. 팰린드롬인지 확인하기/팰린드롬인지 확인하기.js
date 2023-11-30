const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

/*
펜린드롬인지 확인하기
주어진 문자열을 뒤집어도 이전과 같은지 확인하면 되는 문제
 */
let str = input.join("").split("");

console.log(str.join("") === str.reverse().join("") ? 1 : 0);
