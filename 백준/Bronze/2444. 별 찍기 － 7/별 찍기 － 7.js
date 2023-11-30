const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

/*
너의 평점은

전공평점은 전공과목별 (학점 × 과목평점)의 합을 학점의 총합으로 나눈 값이다.
 */
let N = 2 * Number(input) - 1;
let star = "*";
let cnt = 1;
let space = " ";
let spacecnt = Number(input) - 1;

for (let i = 0; i < N; i++) {
  if (i > N / 2) {
    cnt -= 2;
    spacecnt += 1;
  } else if (i > 0) {
    cnt += 2;
    spacecnt -= 1;
  }
  console.log(space.repeat(spacecnt) + star.repeat(cnt));
}
