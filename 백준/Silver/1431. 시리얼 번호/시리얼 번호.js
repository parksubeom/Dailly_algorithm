/*
A와 B의 길이가 다르면, 짧은 것이 먼저 온다.
만약 서로 길이가 같다면, A의 모든 자리수의 합과 B의 모든 자리수의 합을 비교해서 작은 합을 가지는 것이 먼저온다. (숫자인 것만 더한다)
만약 1,2번 둘 조건으로도 비교할 수 없으면, 사전순으로 비교한다. 숫자가 알파벳보다 사전순으로 작다.
 */

function solution() {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .slice(1);
  input.sort((a, b) => a.length - b.length); //자릿수로 비교
  input.sort((a, b) => {
    if (a.length === b.length) {
      //자릿수가 같다면
      if (
        [...a.replace(/[^0-9]/g, "")].reduce(
          (acc, cur) => parseInt(acc) + parseInt(cur),
          0
        ) <
        [...b.replace(/[^0-9]/g, "")].reduce(
          (acc, cur) => parseInt(acc) + parseInt(cur),
          0
        )
      ) {
        // 숫자들만을 더해서 정렬한다
        return -1;
      } else if (
        [...a.replace(/[^0-9]/g, "")].reduce(
          (acc, cur) => parseInt(acc) + parseInt(cur),
          0
        ) >
        [...b.replace(/[^0-9]/g, "")].reduce(
          (acc, cur) => parseInt(acc) + parseInt(cur),
          0
        )
      ) {
        return 1;
      } else if (
        [...a.replace(/[^0-9]/g, "")].reduce(
          (acc, cur) => parseInt(acc) + parseInt(cur),
          0
        ) ===
        [...b.replace(/[^0-9]/g, "")].reduce(
          (acc, cur) => parseInt(acc) + parseInt(cur),
          0
        )
      ) {
        if (a > b) {
          return 1;
        } else if (a < b) {
          return -1;
        }
      }
    }
  });

  console.log(input.join("\n"));
}
solution();