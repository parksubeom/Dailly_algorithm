/*
1.1~N 으로 이루어진 배열을 만든다.
2.while문을 통해 반복하면서, k번째 사람이 나올 때 까지 배열의 맨 앞 인덱스를 맨 뒤로 넘긴다.
3.k번째가 되면 배열의 맨 앞 인덱스에는 해당하는 사람이 있기때문에, 맨앞요소를 result 배열로 푸쉬한다.
4.배열이 더 이상 남지 않게되면 while문의 조건을 탈출하며 반복이 종료된다.
5. result를 리턴한다.
 */
function solution() {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map(Number);
  const N = input[0];
  const K = input[1];
  let arr = [];
  let cnt = 1;
  let result = [];
  for (let i = 1; i <= N; i++) {
    arr.push(i);
  }
  while (arr.length) {
    let data = arr.shift();
    if (cnt % K === 0) {
      result.push(data);
    } else {
      arr.push(data);
    }
    cnt++;
  }

  return console.log(`<${result.join(", ")}>`);
}
solution();
