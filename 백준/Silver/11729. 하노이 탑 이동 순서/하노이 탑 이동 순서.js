const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const N = fs.readFileSync(filePath).toString().trim().split(" ").map(Number)[0];
const solution = (N) => {
  let count = 0;
  let answer = [];

  // func(n)이 func(n-1)로 점점 작아져  base case까지 도달해야함
  const hanoi = (n, from, other, to) => {
    if (!n) return; // n이 0이면 return

    // from -> to : n을 옮기기 위해선 n-1을 다른 곳으로 옮겨야하기 때문(더 큰 판이 아래로 가야함)
    hanoi(n - 1, from, to, other);
    answer.push([from, to]);
    count += 1; // 이동시 + 1

    // other -> to : n -1을 다시 to로 옮김
    hanoi(n - 1, other, from, to);
  };

  hanoi(N, 1, 2, 3);
  console.log(count);

  return answer.map((i) => i.join(" ")).join("\n");
};

// 옮긴 횟수
console.log(solution(N));
