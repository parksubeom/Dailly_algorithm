/*
 의사코드
 1.text에 target이 중복없이 몇번이나 들어가는지 카운팅
 2.text를 포문으로 순회한다
 3.text.slice(i,i+target.length) === target 에 충족하면 카운팅을 해주고, i += target.length-1 (1을 빼주는 이유는 i++ 때문.)
 3.만약 i += target.length - 1가 text.length보다 크다면 더이상 target을 찾을 가능성이 없기 때문에 반복문은 종료된다.
 4.카운팅 리턴
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
