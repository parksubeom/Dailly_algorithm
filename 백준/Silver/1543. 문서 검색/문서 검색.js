/*
 의사코드
 1.text에 target이 중복없이 몇번이나 들어가는지 카운팅
 2.text를 포문으로 순회한다
 3.text.slice(i,i+target.length) === target 에 충족하면 카운팅을 해주고, i += target.length
 3.만약 i 가 text.length를 초과한다면, 반복을 종료하고 cnt를 리턴한다.
 */
function solution() {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const [text, target] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");
  let cnt = 0;
  for (let i = 0; i < text.length; i++) {
    if (text.slice(i, i + target.length) === target) {
      cnt++;
      i += target.length - 1;
    }
  }
  console.log(cnt);
}
solution();