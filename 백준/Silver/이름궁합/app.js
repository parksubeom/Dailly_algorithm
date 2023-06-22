/*const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [boy, girl] = fs.readFileSync(filePath).toString().trim().split("\n");
const map = {
  A: 3,
  B: 2,
  C: 1,
  D: 2,
  E: 3,
  F: 3,
  G: 2,
  H: 3,
  I: 3,
  J: 2,
  K: 2,
  L: 1,
  M: 2,
  N: 2,
  O: 1,
  P: 2,
  Q: 2,
  R: 2,
  S: 1,
  T: 2,
  U: 1,
  V: 1,
  W: 1,
  X: 2,
  Y: 2,
  Z: 1,
};

let couple = [...boy]
  .slice(0, [...boy].length - 1)
  .map((el, idx) => el + [...girl][idx])
  .join("");
let result = [];
for (let el of couple) {
  result.push(map[el]);
}
while (true) {
  if (result.length === 2) break;
  let count = 0;
  for (let i = 0; i < result.length; i++) {
    let temp = result[0] + result[1];
    if (temp >= 10) {
      result.push(temp % 10);
    } else {
      result.push(temp);
    }
    result.shift();
    count += 1;
    if (count === result.length - 1) result.shift();
  }
}
console.log(result.join(""));*/
/*
의사코드
1.종민이랑 여자친구 이름 받는다.
2.종민이랑 여자친구 이름 번갈아 적으면서 궁합을 볼 이름을 만든다.
3.알파벳 별 획수를 담은 객체를 만든다.
4.궁합이름을 순회하면서 해당요소와 대응되는 숫자를 result 함수에 담아준다.
5.while문의 조건은 result의 길이가 2가 될 때까지로 설정한다.
6.while문 내에서 result배열을 result.length-1 만큼 순회하면서 result[i] = (result[i]+result[i+1])%10 해준다.  (자연스럽게 result의 길이는 2가될떄까지 1씩 줄어듦) 
7.획수를 더한값이 2자리가 됐을 때 리턴해준다.
 */
function solution() {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const [boy, girl] = fs.readFileSync(filePath).toString().trim().split("\n");
  const map = {
    A: 3,
    B: 2,
    C: 1,
    D: 2,
    E: 3,
    F: 3,
    G: 2,
    H: 3,
    I: 3,
    J: 2,
    K: 2,
    L: 1,
    M: 2,
    N: 2,
    O: 1,
    P: 2,
    Q: 2,
    R: 2,
    S: 1,
    T: 2,
    U: 1,
    V: 1,
    W: 1,
    X: 2,
    Y: 2,
    Z: 1,
  };

  let sync = [...boy]
    .slice(0, [...boy].length - 1)
    .map((el, idx) => el + [...girl][idx])
    .join("");
  let result = [];
  for (let el of sync) {
    result.push(map[el]);
  }
  let cnt = result.length;
  while (cnt > 2) {
    for (let i = 0; i < result.length - 1; i++) {
      result[i] = (result[i] + result[i + 1]) % 10;
    }
    result.pop();
    cnt--;
  }
  return result.join("");
}

console.log(solution());
