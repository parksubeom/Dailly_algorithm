const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
// 3kg과 5KG 설탕봉지로 최대한 적은 횟수를 배달해야한다.
// N%5가 3보다 작으면
let N = input.map(Number)[0];
let small = 3;
let large = 5;
let cnt = 0;
let bp = 0;
while (N !== 0) {
  if (bp > N) {
    return console.log(-1);
  }
  if (N % large === 0) {
    // 5로 나누어 떨어 질 때까지 3씩 빼주자.
    cnt += N / large;
    N = 0;
  } else {
    N -= small;
    cnt++;
    bp++;
  }
}
console.log(cnt);
