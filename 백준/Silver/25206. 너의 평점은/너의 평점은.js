const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

/*
너의 평점은

전공평점은 전공과목별 (학점 × 과목평점)의 합을 학점의 총합으로 나눈 값이다.
 */
let score = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1,
  F: 0,
};
let obj = input
  .slice(0)
  .map((el) => el.split(" ").slice(1))
  .filter((el) => el[1] !== "P");
let 학점합 = obj.map((el) => Number(el[0])).reduce((acc, cur) => acc + cur);
let 점수합 = obj
  .map((el) => (el[1] === "P" ? Number(el[0]) : Number(el[0]) * score[el[1]])) // 학점 * 과목평점
  .reduce((acc, cur) => acc + cur, 0);

console.log(점수합 / 학점합);